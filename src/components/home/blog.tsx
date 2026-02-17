import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BsArrowDown } from "react-icons/bs";

export default function Blog() {
	return (
		<section className="bg-background-dark border-y border-muted/5 py-16">
			<div className="container">
				<div className="mb-12 flex justify-between items-center">
					<div className="w-5/6">
						<h2 className="text-4xl font-bold mb-2">
							Latest{" "}
							<span className="bg-linear-to-r from-primary to-purple-500 bg-clip-text text-transparent">
								Writing
							</span>
						</h2>
						<p className="text-sm font-light text-muted-foreground">
							Thoughts on modern development practices, emerging
							technologies, and the evolving future of the web,
							focused on performance, accessibility, and
							meaningful user experiences.
						</p>
					</div>
					<Link
						href="/blog"
						className="flex items-center gap-1.5 mt-px text-sm text-primary underline"
					>
						View all <BsArrowDown className="-rotate-90" />
					</Link>
				</div>

				<div className="grid grid-cols-3 gap-8">
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
								Over the last few days, I've been exploring ways
								to deploy a backend application for development
								purposes. That's when I came across 'Vercel
								Serverless Functions. It's a completely free
								platform for deploying your backend apps,
								especially Node.js apps. From this blog post I'm
								gonna show you how to do it.
							</p>
							<Link
								href="#"
								className="flex items-center gap-2 text-sm underline text-primary mb-2"
							>
								Read Post{" "}
								<BsArrowDown className="-rotate-90 mt-0.5" />
							</Link>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
