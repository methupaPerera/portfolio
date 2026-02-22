import type { Metadata } from "next";
import type { Work } from "@/types/work";

import { getDocBySlug } from "@/lib/content";
import { notFound } from "next/navigation";

import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

import { FaGithub, FaRocket } from "react-icons/fa6";
import { TiTick } from "react-icons/ti";

export async function generateMetadata({
	params,
}: {
	params: Promise<{ id: string }>;
}): Promise<Metadata> {
	const { id } = await params;

	try {
		const work = getDocBySlug<Work>("work", id);

		const title = `${work.title} | GeekyStory`;
		const description = work.description;

		const url = `https://geekystory.com/work/${work.slug}`;

		return {
			title,
			description,

			alternates: {
				canonical: url,
			},

			openGraph: {
				type: "website",
				url,
				title,
				description,
				images: [
					{
						url: work.image,
						width: 1200,
						height: 630,
						alt: work.title,
					},
				],
			},

			robots: {
				index: true,
				follow: true,
			},
		};
	} catch (error) {
		notFound();
	}
}

export default async function Work({
	params,
}: {
	params: Promise<{ id: string }>;
}) {
	const { id } = await params;

	let work;

	try {
		work = getDocBySlug<Work>("work", id);
	} catch (error) {
		notFound();
	}

	return (
		<div className="container" aria-labelledby="work-title">
			<header className="mb-8">
				<p
					role="status"
					className="mx-auto capitalize mt-12 mb-4 bg-primary/5 backdrop-blur-2xl text-primary w-fit px-3 py-1 pt-0.5 rounded-full border border-primary text-xs"
				>
					{work.type} Project
				</p>

				<h1
					id="work-title"
					className="text-5xl font-bold text-center drop-shadow-[0_0_20px] drop-shadow-primary/40"
				>
					{work.title}
				</h1>

				<p className="text-muted-foreground text-sm text-center my-4">
					{work.description}
				</p>

				<figure>
					<Image
						src={work.image}
						width={1000}
						height={500}
						alt={`${work.title} project preview`}
						className="mt-8 p-1 w-full rounded-lg border border-muted/5"
						sizes="(max-width: 768px) 100vw, 1000px"
						priority
					/>
				</figure>
			</header>

			<div className="mb-12 grid grid-cols-1 md:grid-cols-3 gap-8">
				<section
					className="w-full min-w-0 md:col-span-2"
					aria-label="Project details"
				>
					<h2 className="text-2xl font-semibold relative flex items-center gap-1">
						<span
							aria-hidden="true"
							className="w-1 h-7 bg-primary rounded-full"
						></span>
						Project Overview
					</h2>

					<p className="mt-4 text-sm text-muted-foreground">
						{work.overview}
					</p>

					<h2 className="mt-8 text-xl font-semibold">Key Features</h2>

					<ul
						className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-4"
						role="list"
					>
						{work.key_features.map((item) => (
							<li
								className="flex items-center gap-1 px-4 py-2 rounded-lg text-sm border border-muted/5 bg-slate-900"
								key={item}
							>
								<TiTick aria-hidden="true" className="mt-0.5" />
								{item}
							</li>
						))}
					</ul>

					<section aria-label="Project gallery">
						<h2 className="mt-8 text-xl font-semibold">
							Project Gallery
						</h2>

						<ul
							className="mt-4 gap-4 grid grid-cols-1 sm:grid-cols-2"
							role="list"
						>
							{work.gallery.map((image, index) => (
								<li key={image}>
									<Image
										src={image}
										width={400}
										height={400}
										alt={`${work.title} screenshot ${index + 1}`}
										className="w-full rounded-lg"
										sizes="(max-width: 640px) 100vw, 400px"
										loading="lazy"
									/>
								</li>
							))}
						</ul>
					</section>
				</section>

				<aside className="w-full min-w-0" aria-label="Project sidebar">
					<nav
						className="w-full border border-muted/5 rounded-xl p-4 shadow-[0_0_10px] shadow-primary/20"
						aria-label="Project links"
					>
						<h2 className="mb-4 text-lg font-semibold">
							Project Links
						</h2>

						<Link
							href={work.link}
							target="_blank"
							rel="noopener noreferrer"
							aria-label={`Open ${work.title} project link (opens in a new tab)`}
							className={cn(
								"w-full bg-primary-dark!",
								buttonVariants(),
							)}
						>
							<FaRocket
								aria-hidden="true"
								className="size-3 mt-0.5"
							/>
							Project Link
						</Link>

						{work.code ? (
							<Link
								href={work.code}
								target="_blank"
								rel="noopener noreferrer"
								aria-label={`Open ${work.title} source code (opens in a new tab)`}
								className={cn(
									"w-full mt-2 flex items-center justify-center gap-2 bg-gray-800! border border-muted/5",
									buttonVariants(),
								)}
							>
								<FaGithub
									aria-hidden="true"
									className="size-4 mt-0.5"
								/>
								Source Code
							</Link>
						) : (
							<Button
								disabled
								className="w-full bg-gray-800! disabled:bg-gray-800/80! border border-muted/5 mt-2"
								aria-disabled="true"
							>
								<FaGithub
									aria-hidden="true"
									className="size-4 mt-0.5"
								/>
								Source Code
							</Button>
						)}
					</nav>

					<section
						className="mt-8 w-full border border-muted/5 rounded-xl p-4"
						aria-label="Tech stack and details"
					>
						<h2 className="text-sm text-primary font-bold">
							TECH STACK
						</h2>

						<ul
							className="my-4 flex items-center flex-wrap gap-1.5"
							role="list"
							aria-label="Tech stack"
						>
							{work.tech_stack.map((item) => (
								<li
									key={item}
									className="border border-muted/5 bg-surface-dark px-3 pt-0.5 pb-1 text-xs rounded-full"
								>
									{item}
								</li>
							))}
						</ul>

						<dl className="pt-2 flex flex-col gap-2 border-t border-muted/5">
							<div>
								<dt className="text-xs text-muted-foreground">
									ROLE
								</dt>
								<dd className="text-sm">{work.role}</dd>
							</div>
							<div>
								<dt className="text-xs text-muted-foreground">
									TIMELINE
								</dt>
								<dd className="text-sm">{work.timeline}</dd>
							</div>
							<div>
								<dt className="text-xs text-muted-foreground">
									CLIENT
								</dt>
								<dd className="text-sm">{work.client}</dd>
							</div>
						</dl>
					</section>
				</aside>
			</div>
		</div>
	);
}
