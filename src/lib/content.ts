import fs from "fs";
import path from "path";
import matter from "gray-matter";

const ROOT = process.cwd();

type ContentType = "blog" | "work";

function getDir(type: ContentType) {
	return path.join(ROOT, "src", "content", type);
}

export function getAllSlugs(type: ContentType) {
	const dir = getDir(type);

	if (!fs.existsSync(dir)) return [];

	return fs
		.readdirSync(dir)
		.filter((f) => f.endsWith(".mdx"))
		.map((f) => f.replace(/\.mdx$/, ""));
}

export function getDocBySlug(type: ContentType, slug: string) {
	const filePath = path.join(getDir(type), `${slug}.mdx`);

	if (!fs.existsSync(filePath)) {
		throw new Error(`MDX not found: ${type}/${slug}.mdx`);
	}

	const raw = fs.readFileSync(filePath, "utf8");
	const { data, content } = matter(raw);

	return {
		frontmatter: data as Record<string, any>,
		content,
		slug,
	};
}

export function getAllDocs(type: ContentType) {
	return getAllSlugs(type)
		.map((slug) => getDocBySlug(type, slug))
		.sort((a, b) => {
			const da = a.frontmatter.date ?? "";
			const db = b.frontmatter.date ?? "";
			return da < db ? 1 : -1;
		});
}
