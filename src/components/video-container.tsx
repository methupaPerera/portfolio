import Image from "next/image";
import Link from "next/link";
import { FaPlay } from "react-icons/fa6";

export type YTVideo = {
	id: string;
	title: string;
	url: string;
	thumbnail: string | null;
	publishedAt: string;
};

export default function VideoContainer({ video }: { video: YTVideo }) {
	const thumbnailSrc = video.thumbnail || "";

	return (
		<Link
			target="_blank"
			rel="noopener noreferrer"
			href={video.url}
			aria-label={`Watch "${video.title}" on YouTube (opens in a new tab)`}
			className="block bg-slate-800 p-4 rounded-lg border border-muted/5"
		>
			<div className="relative">
				<Image
					src={thumbnailSrc}
					width={400}
					height={400}
					alt={`YouTube video: ${video.title}`}
					className="w-full rounded-lg"
					loading="lazy"
					sizes="(max-width: 768px) 100vw, 400px"
				/>

				<div
					aria-hidden="true"
					className="absolute top-[50%] right-[50%] translate-x-1/2 -translate-y-1/2 bg-muted-foreground/30 p-2 rounded-full w-fit"
				>
					<FaPlay className="pt-px pl-px" />
				</div>
			</div>

			<h3 className="text-sm font-medium mt-2 line-clamp-2">
				{video.title}
			</h3>

			<p className="text-xs text-muted-foreground text-end mt-2">
				<time dateTime={video.publishedAt}>
					{new Date(video.publishedAt).toDateString()}
				</time>
			</p>
		</Link>
	);
}
