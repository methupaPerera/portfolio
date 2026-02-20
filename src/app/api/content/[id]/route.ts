import { NextRequest, NextResponse } from "next/server";
import { getDocBySlug, type ContentType } from "@/lib/content";

export async function GET(
	req: NextRequest,
	{ params }: { params: Promise<{ id: string }> },
) {
	const type = req.nextUrl.searchParams.get("type") as ContentType | null;
	const { id } = await params;

	try {
		if (!type || !id) {
			return NextResponse.json(
				{ error: "Missing type or id." },
				{ status: 400 },
			);
		}

		if (type !== "blog" && type !== "work") {
			return NextResponse.json(
				{ error: "Invalid content type." },
				{ status: 400 },
			);
		}

		const doc = getDocBySlug<Record<string, unknown>>(type, id);

		// doc already includes frontmatter fields + slug + content
		return NextResponse.json({
			...doc,
			content: doc.content,
		});
	} catch (err) {
		console.error(err);
		return NextResponse.json(
			{ error: "Document not found." },
			{ status: 404 },
		);
	}
}
