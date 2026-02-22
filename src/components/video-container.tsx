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
	return (
		<Link
			target="_blank"
			href={video.url}
			className="block bg-slate-800 p-4 rounded-lg border border-muted/5"
		>
			<div className="relative">
				<Image
					src={video.thumbnail || ""}
					width={400}
					height={400}
					alt={video.title}
					className="w-full rounded-lg"
				/>
				<div className="absolute top-[50%] right-[50%] translate-x-1/2 -translate-y-1/2 bg-muted-foreground/30 p-2 rounded-full w-fit">
					<FaPlay className="pt-px pl-px" />
				</div>
			</div>
			<h3 className="text-sm font-medium mt-2 line-clamp-2">
				{video.title}
			</h3>
			<p className="text-xs text-muted-foreground text-end mt-2">
				{new Date(video.publishedAt).toDateString()}
			</p>
		</Link>
	);
}
