import { getYtInfo } from "@/lib/yt-info";

import Link from "next/link";
import VideoContainer, { YTVideo } from "../video-container";
import { buttonVariants } from "../ui/button";

import { FaYoutube } from "react-icons/fa6";

export default async function YTCTA() {
	const { subscriberCount: subscribers, videos } = await getYtInfo();

	return (
		<section className="container my-16" aria-labelledby="ytcta-title">
			<div className="bg-slate-900 p-8 rounded-xl border border-muted/5">
				<header>
					<span
						role="status"
						aria-label="YouTube channel"
						className="flex items-center gap-1.5 mx-auto md:mx-0 mb-6 bg-red-500/20 backdrop-blur-2xl text-red-500 w-fit px-3 py-1 rounded-full border border-red-500 text-xs"
					>
						<span
							aria-hidden="true"
							className="mt-0.5 size-2.5 bg-red-500 rounded-full animate-pulse"
						></span>
						YOUTUBE CHANNEL
					</span>

					<h2 id="ytcta-title" className="text-4xl font-bold">
						Join the{" "}
						<span className="bg-linear-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">
							methupa.dev
						</span>{" "}
						Community
					</h2>

					<p className="text-muted-foreground text-sm mt-2">
						Here, I share my knowledge, special activities, music,
						and other creative work.
					</p>
				</header>

				<nav
					className="flex items-center gap-4 mt-4"
					aria-label="YouTube channel links"
				>
					<Link
						href="https://www.youtube.com/@methupa.dev"
						target="_blank"
						rel="noopener noreferrer"
						aria-label="Visit methupa.dev on YouTube (opens in a new tab)"
						className={buttonVariants({
							className: "bg-red-500 hover:bg-red-500/90",
						})}
					>
						<FaYoutube aria-hidden="true" /> Visit Channel
					</Link>

					<p className="text-muted-foreground text-sm">
						<span suppressHydrationWarning>{subscribers}</span>+
						Subscribers
					</p>
				</nav>

				<ul className="mt-8 grid md:grid-cols-3" role="list">
					{videos &&
						videos.map((video: YTVideo) => (
							<li key={video.id}>
								<VideoContainer video={video} />
							</li>
						))}
				</ul>
			</div>
		</section>
	);
}
