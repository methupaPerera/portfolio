type YtVideo = {
	id: string;
	title: string;
	url: string;
	publishedAt: string;
	thumbnail: string | null;
};

function requireEnv(name: string): string {
	const v = process.env[name];
	if (!v) throw new Error(`Missing env var: ${name}`);
	return v;
}

export async function getSubscriberCount(): Promise<number | null> {
	const key = requireEnv("YOUTUBE_API_KEY");
	const channelId = requireEnv("CHANNEL_ID");

	const url =
		"https://www.googleapis.com/youtube/v3/channels" +
		`?part=statistics&id=${encodeURIComponent(channelId)}&key=${encodeURIComponent(key)}`;

	const res = await fetch(url, { next: { revalidate: 60 } });
	if (!res.ok) throw new Error("YouTube channels API request failed");

	const data = await res.json();
	const subCount = data?.items?.[0]?.statistics?.subscriberCount;

	return subCount ? Number(subCount) : null;
}

export async function getLatestVideos(limit = 3): Promise<YtVideo[]> {
	const key = requireEnv("YOUTUBE_API_KEY");
	const channelId = requireEnv("CHANNEL_ID");

	const url =
		"https://www.googleapis.com/youtube/v3/search" +
		`?part=snippet` +
		`&channelId=${encodeURIComponent(channelId)}` +
		`&order=date` +
		`&maxResults=${encodeURIComponent(String(limit))}` +
		`&type=video` +
		`&key=${encodeURIComponent(key)}`;

	const res = await fetch(url, { next: { revalidate: 300 } });
	if (!res.ok) throw new Error("YouTube search API request failed");

	const data = await res.json();

	return (data?.items ?? [])
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
			} satisfies YtVideo;
		})
		.filter(Boolean);
}

export async function getYtInfo(limit = 3): Promise<{
	subscriberCount: number | null;
	videos: YtVideo[];
}> {
	const [subscriberCount, videos] = await Promise.all([
		getSubscriberCount(),
		getLatestVideos(limit),
	]);

	return { subscriberCount, videos };
}
