import { NextRequest, NextResponse } from "next/server";
import { getPage, type ContentType } from "@/lib/content";

export const runtime = "nodejs"; // fs needs node runtime

export async function GET(req: NextRequest) {
	const type = req.nextUrl.searchParams.get("type") as ContentType | null;

	if (type !== "blog" && type !== "work") {
		return NextResponse.json(
			{ error: "Invalid content type." },
			{ status: 400 },
		);
	}

	const page = Number(req.nextUrl.searchParams.get("page") ?? "1");
	const limit = Number(req.nextUrl.searchParams.get("limit") ?? "6");

	try {
		const data = getPage(type, page, limit);

		// Optional: cache response (good for production where content changes rarely)
		// Use short cache in dev if you want frequent edits to show up quickly.
		return NextResponse.json(data, {
			headers: {
				"Cache-Control":
					"public, max-age=30, s-maxage=300, stale-while-revalidate=600",
			},
		});
	} catch (err) {
		console.error(err);
		return NextResponse.json(
			{ error: "Failed to load content." },
			{ status: 500 },
		);
	}
}
