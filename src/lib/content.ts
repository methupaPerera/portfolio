import fs from "fs";
import path from "path";
import matter from "gray-matter";

const ROOT = process.cwd();

export type ContentType = "blog" | "work";

type DocIndexItem = {
	slug: string;
	frontmatter: Record<string, any>;
	mtimeMs: number;
};

type IndexCache = {
	signature: string;
	items: DocIndexItem[];
};

const indexCache: Partial<Record<ContentType, IndexCache>> = {};

function getDir(type: ContentType) {
	return path.join(ROOT, "src", "content", type);
}

function safeReadDir(dir: string) {
	if (!fs.existsSync(dir)) return [];
	return fs.readdirSync(dir).filter((f) => f.endsWith(".mdx"));
}

function readFrontmatterFast(filePath: string) {
	const MAX_BYTES = 64 * 1024;

	const fd = fs.openSync(filePath, "r");
	try {
		const buf = Buffer.alloc(MAX_BYTES);
		const bytesRead = fs.readSync(fd, buf, 0, MAX_BYTES, 0);
		const head = buf.subarray(0, bytesRead).toString("utf8");

		const match = head.match(/^---\s*[\s\S]*?\n---\s*/);
		const fmOnly = match ? match[0] : "";

		const parsed = matter(fmOnly + "\n");
		return parsed.data as Record<string, any>;
	} finally {
		fs.closeSync(fd);
	}
}

function computeSignature(dir: string, files: string[]) {
	const parts: string[] = [];
	for (const f of files) {
		const full = path.join(dir, f);
		const stat = fs.statSync(full);
		parts.push(`${f}:${stat.mtimeMs}`);
	}
	return parts.join("|");
}

function toTime(value: unknown): number | null {
	if (!value) return null;

	if (typeof value === "number" && Number.isFinite(value)) {
		return value;
	}

	if (typeof value === "string") {
		const s = value.trim();
		if (!s) return null;
		const t = Date.parse(s);
		return Number.isFinite(t) ? t : null;
	}

	if (value instanceof Date) {
		const t = value.getTime();
		return Number.isFinite(t) ? t : null;
	}

	return null;
}

function buildIndex(type: ContentType): IndexCache {
	const dir = getDir(type);
	const files = safeReadDir(dir);

	const signature = computeSignature(dir, files);
	const cached = indexCache[type];

	if (cached && cached.signature === signature) return cached;

	const items: DocIndexItem[] = files.map((f) => {
		const slug = f.replace(/\.mdx$/, "");
		const full = path.join(dir, f);
		const stat = fs.statSync(full);

		const frontmatter = readFrontmatterFast(full);

		return {
			slug,
			frontmatter,
			mtimeMs: stat.mtimeMs,
		};
	});

	// 🔥 Sort by created_date (newest first)
	items.sort((a, b) => {
		const ca = toTime(a.frontmatter.created_date);
		const cb = toTime(b.frontmatter.created_date);

		if (ca !== null && cb !== null) return cb - ca;
		if (ca !== null && cb === null) return -1;
		if (ca === null && cb !== null) return 1;

		// Optional fallback to "date"
		const da = toTime(a.frontmatter.date);
		const db = toTime(b.frontmatter.date);
		if (da !== null && db !== null) return db - da;
		if (da !== null && db === null) return -1;
		if (da === null && db !== null) return 1;

		// Final fallback to filesystem mtime
		return b.mtimeMs - a.mtimeMs;
	});

	const built = { signature, items };
	indexCache[type] = built;
	return built;
}

// ---------------- Category helpers ----------------

function normalizeToken(x: unknown): string | null {
	if (typeof x !== "string") return null;
	const t = x.trim().toLowerCase();
	return t ? t : null;
}

function getDocCategories(frontmatter: Record<string, any>): string[] {
	const raw =
		frontmatter.categories ??
		frontmatter.category ??
		frontmatter.tags ??
		frontmatter.tag ??
		null;

	if (!raw) return [];

	if (Array.isArray(raw)) {
		return raw.map(normalizeToken).filter((x): x is string => Boolean(x));
	}

	if (typeof raw === "string") {
		return raw
			.split(",")
			.map(normalizeToken)
			.filter((x): x is string => Boolean(x));
	}

	return [];
}

type CategoryMode = "any" | "all";

function parseCategoryFilter(input: unknown): string[] {
	if (!input) return [];

	if (Array.isArray(input)) {
		return input
			.flatMap((v) => String(v).split(","))
			.map(normalizeToken)
			.filter((x): x is string => Boolean(x));
	}

	return String(input)
		.split(",")
		.map(normalizeToken)
		.filter((x): x is string => Boolean(x));
}

// ---------- Public API ----------

export function getPage(
	type: ContentType,
	page: number,
	limit: number,
	opts?: {
		categories?: string[] | string;
		categoryMode?: CategoryMode;
	},
) {
	const { items } = buildIndex(type);

	const safePage = Number.isFinite(page) ? Math.max(1, Math.floor(page)) : 1;
	const safeLimit = Number.isFinite(limit)
		? Math.min(50, Math.max(1, Math.floor(limit)))
		: 6;

	const selected = parseCategoryFilter(opts?.categories);
	const mode: CategoryMode = opts?.categoryMode === "all" ? "all" : "any";

	const filtered = selected.length
		? items.filter((x) => {
				const cats = getDocCategories(x.frontmatter);
				if (!cats.length) return false;

				if (mode === "all") {
					return selected.every((c) => cats.includes(c));
				}
				return selected.some((c) => cats.includes(c));
			})
		: items;

	const total = filtered.length;
	const start = (safePage - 1) * safeLimit;
	const end = start + safeLimit;

	const slice = filtered.slice(start, end).map((x) => ({
		slug: x.slug,
		...x.frontmatter,
	}));

	const hasMore = end < total;

	const availableCategories = Array.from(
		new Set(items.flatMap((x) => getDocCategories(x.frontmatter))),
	).sort();

	return {
		items: slice,
		page: safePage,
		limit: safeLimit,
		total,
		hasMore,
		nextPage: hasMore ? safePage + 1 : null,
		filter: {
			categories: selected,
			categoryMode: mode,
			availableCategories,
		},
	};
}

export function getDocBySlug<T extends Record<string, unknown>>(
	type: ContentType,
	slug: string,
): T & { slug: string; content: string } {
	const filePath = path.join(getDir(type), `${slug}.mdx`);

	if (!fs.existsSync(filePath)) {
		throw new Error(`MDX not found: ${type}/${slug}.mdx`);
	}

	const raw = fs.readFileSync(filePath, "utf8");
	const { data, content } = matter(raw);

	return {
		...(data as T),
		slug,
		content,
	};
}
