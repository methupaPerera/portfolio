import { NextResponse } from "next/server";

export const runtime = "nodejs";

export async function GET() {
	const key = process.env.YOUTUBE_API_KEY;
	const channelId = process.env.CHANNEL_ID;

	if (!key || !channelId) {
		return NextResponse.json(
			{ error: "Missing env vars YOUTUBE_API_KEY or CHANNEL_ID" },
			{ status: 500 },
		);
	}

	try {
		// 1) Subscriber count
		const channelUrl =
			"https://www.googleapis.com/youtube/v3/channels" +
			`?part=statistics&id=${encodeURIComponent(channelId)}&key=${encodeURIComponent(key)}`;

		const channelRes = await fetch(channelUrl, {
			next: { revalidate: 60 },
		});
		if (!channelRes.ok) {
			return NextResponse.json(
				{ error: "YouTube channels API request failed" },
				{ status: 502 },
			);
		}

		const channelData = await channelRes.json();
		const subCount = channelData?.items?.[0]?.statistics?.subscriberCount;
		const subscriberCount = subCount ? Number(subCount) : null;

		// 2) Latest 4 videos
		const videosUrl =
			"https://www.googleapis.com/youtube/v3/search" +
			`?part=snippet` +
			`&channelId=${encodeURIComponent(channelId)}` +
			`&order=date` +
			`&maxResults=3` +
			`&type=video` +
			`&key=${encodeURIComponent(key)}`;

		const videosRes = await fetch(videosUrl, { next: { revalidate: 300 } });
		if (!videosRes.ok) {
			return NextResponse.json(
				{ error: "YouTube search API request failed" },
				{ status: 502 },
			);
		}

		const videosData = await videosRes.json();

		const videos =
			(videosData?.items ?? [])
				.map((item: any) => {
					const id = item?.id?.videoId;
					const snip = item?.snippet;
					if (!id || !snip) return null;

					return {
						id,
						title: snip.title as string,
						url: `https://www.youtube.com/watch?v=${id}`,
						publishedAt: snip.publishedAt as string,
						thumbnail:
							snip?.thumbnails?.medium?.url ??
							snip?.thumbnails?.high?.url ??
							snip?.thumbnails?.default?.url ??
							null,
					};
				})
				.filter(Boolean) ?? [];

		return NextResponse.json(
			{
				subscriberCount,
				videos,
			},
			{
				headers: {
					// cache a bit longer because video list doesn't need per-minute updates
					"Cache-Control":
						"s-maxage=300, stale-while-revalidate=3600",
				},
			},
		);
	} catch (err) {
		return NextResponse.json(
			{ error: "Unexpected error" },
			{ status: 500 },
		);
	}
}
