import { NextRequest, NextResponse } from "next/server";
import { getPage, type ContentType } from "@/lib/content";

export const runtime = "nodejs";

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

	const category = req.nextUrl.searchParams.get("category") ?? "";
	const categoryMode =
		(req.nextUrl.searchParams.get("categoryMode") as
			| "any"
			| "all"
			| null) ?? "any";

	try {
		const data = getPage(type, page, limit, {
			categories: category,
			categoryMode,
		});

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
