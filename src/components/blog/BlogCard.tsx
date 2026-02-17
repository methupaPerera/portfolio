import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BsArrowDown } from "react-icons/bs";

export default function BlogCard() {
	return (
		<div className="rounded-xl overflow-hidden">
			<Image
				src="/blog/vercel.png"
				alt=""
				width={400}
				height={400}
				className="object-cover object-center"
			/>
			<div className="pt-2">
				<p className="text-primary text-xs mb-1">
					<span>Devops</span> | <span>Mar 15, 2026</span>
				</p>
				<h5 className="font-semibold text-lg">
					Deploy your backend app for free !
				</h5>
				<p className="text-sm text-muted-foreground line-clamp-3 my-2">
					Over the last few days, I've been exploring ways to deploy a
					backend application for development purposes. That's when I
					came across 'Vercel Serverless Functions. It's a completely
					free platform for deploying your backend apps, especially
					Node.js apps. From this blog post I'm gonna show you how to
					do it.
				</p>
				<Link
					href="#"
					className="flex items-center gap-2 text-sm underline text-primary mb-2"
				>
					Read Post <BsArrowDown className="-rotate-90 mt-0.5" />
				</Link>
			</div>
		</div>
	);
}
