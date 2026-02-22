import Link from "next/link";
import React from "react";
import { FaYoutube } from "react-icons/fa6";
import { buttonVariants } from "../ui/button";
import VideoContainer, { YTVideo } from "../video-container";

export default async function YTCTA() {
	const { subscriberCount: subscribers, videos } = await (
		await fetch(process.env.NEXT_PUBLIC_API_URL + "/api/yt-info")
	).json();

	console.log(videos);

	return (
		<div className="container my-16">
			<div className="bg-slate-900 p-8 rounded-xl border border-muted/5">
				<p className="flex items-center gap-1.5 mx-auto md:mx-0 mb-6 bg-red-500/20 backdrop-blur-2xl text-red-500 w-fit px-3 py-1 rounded-full border border-red-500 text-xs">
					<span className="mt-0.5 size-2.5 bg-red-500 rounded-full animate-pulse"></span>
					YOUTUBE CHANNEL
				</p>

				<h2 className="text-4xl font-bold">
					Join the{" "}
					<span className="bg-linear-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">
						GeekyStory
					</span>{" "}
					Community
				</h2>
				<p className="text-muted-foreground text-sm mt-2">
					A mix of tech, creativity, and hands-on builds. I turn ideas
					into working projects and share the process.
				</p>
				<div className="flex items-center gap-4 mt-4">
					<Link
						href="https://www.youtube.com/@geekystory"
						target="_blank"
						className={buttonVariants({
							className: "bg-red-500 hover:bg-red-500/90",
						})}
					>
						<FaYoutube /> Visit Channel
					</Link>
					<p className="text-muted-foreground text-sm">
						{subscribers}+ Subscribers
					</p>
				</div>

				<div className="mt-8 grid md:grid-cols-3">
					{videos.map((video: YTVideo) => (
						<VideoContainer key={video.id} video={video} />
					))}
				</div>
			</div>
		</div>
	);
}
