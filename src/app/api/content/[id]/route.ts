import { NextRequest, NextResponse } from "next/server";
import { getDocBySlug } from "@/lib/content";

type ContentType = "blog" | "work";

export async function GET(
	req: NextRequest,
	{ params }: { params: Promise<{ id: string }> },
) {
	const type = req.nextUrl.searchParams.get("type");
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

		const doc = getDocBySlug(type, id);

		return NextResponse.json({
			...doc.frontmatter,
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
