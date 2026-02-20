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
	// used to detect changes
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

/**
 * Read only the beginning of a file and parse frontmatter.
 * This avoids loading the full MDX body when listing/paginating.
 */
function readFrontmatterFast(filePath: string) {
	// 64KB is usually plenty for frontmatter. Increase if you write novels in YAML.
	const MAX_BYTES = 64 * 1024;

	const fd = fs.openSync(filePath, "r");
	try {
		const buf = Buffer.alloc(MAX_BYTES);
		const bytesRead = fs.readSync(fd, buf, 0, MAX_BYTES, 0);
		const head = buf.subarray(0, bytesRead).toString("utf8");

		// Extract only the frontmatter block if present
		// Matches starting --- ... --- (first two delimiters)
		const match = head.match(/^---\s*[\s\S]*?\n---\s*/);
		const fmOnly = match ? match[0] : "";

		const parsed = matter(fmOnly + "\n"); // gray-matter wants a string to parse
		return parsed.data as Record<string, any>;
	} finally {
		fs.closeSync(fd);
	}
}

/**
 * Create a signature to know if the directory content changed.
 * We use filename + mtimeMs (cheap and good enough).
 */
function computeSignature(dir: string, files: string[]) {
	const parts: string[] = [];
	for (const f of files) {
		const full = path.join(dir, f);
		const stat = fs.statSync(full);
		parts.push(`${f}:${stat.mtimeMs}`);
	}
	return parts.join("|");
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

		// Parse only frontmatter (fast)
		const frontmatter = readFrontmatterFast(full);

		return {
			slug,
			frontmatter,
			mtimeMs: stat.mtimeMs,
		};
	});

	// Sort once (newest first). Prefer `date` if present, else mtime.
	items.sort((a, b) => {
		const da = a.frontmatter.date ?? "";
		const db = b.frontmatter.date ?? "";

		if (da && db) return da < db ? 1 : -1;
		if (da && !db) return -1;
		if (!da && db) return 1;

		return a.mtimeMs < b.mtimeMs ? 1 : -1;
	});

	const built = { signature, items };
	indexCache[type] = built;
	return built;
}

// ---------- Public API ----------

export function getPage(type: ContentType, page: number, limit: number) {
	const { items } = buildIndex(type);

	const safePage = Number.isFinite(page) ? Math.max(1, Math.floor(page)) : 1;
	const safeLimit = Number.isFinite(limit)
		? Math.min(50, Math.max(1, Math.floor(limit)))
		: 6;

	const total = items.length;
	const start = (safePage - 1) * safeLimit;
	const end = start + safeLimit;

	const slice = items.slice(start, end).map((x) => ({
		slug: x.slug,
		...x.frontmatter,
	}));

	const hasMore = end < total;

	return {
		items: slice,
		page: safePage,
		limit: safeLimit,
		total,
		hasMore,
		nextPage: hasMore ? safePage + 1 : null,
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
