import { NextRequest, NextResponse } from "next/server";
import { getAllDocs } from "@/lib/content";

export async function GET(req: NextRequest) {
	const type = req.nextUrl.searchParams.get("type");

	if (type !== "blog" && type !== "work") {
		return NextResponse.json(
			{ error: "Invalid content type." },
			{ status: 400 },
		);
	}

	try {
		const docs = getAllDocs(type);

		const data = docs.map((doc) => ({
			slug: doc.slug,
			...doc.frontmatter,
		}));

		return NextResponse.json(data);
	} catch (err) {
		console.error(err);

		return NextResponse.json(
			{ error: "Failed to load content." },
			{ status: 500 },
		);
	}
}
