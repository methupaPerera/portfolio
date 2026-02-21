import type { Work } from "@/types/work";

import { getDocBySlug } from "@/lib/content";

import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

import { FaGithub, FaRocket } from "react-icons/fa6";
import { TiTick } from "react-icons/ti";

export default async function Work({
	params,
}: {
	params: Promise<{ id: string }>;
}) {
	const { id } = await params;

	const work: Work = getDocBySlug<Work>("work", id);

	return (
		<div className="container">
			<div className="mb-8">
				<p className="mx-auto capitalize mt-12 mb-4 bg-primary/5 backdrop-blur-2xl text-primary w-fit px-3 py-1 pt-0.5 rounded-full border border-primary text-xs">
					{work.type} Project
				</p>
				<h1 className="text-5xl font-bold text-center drop-shadow-[0_0_20px] drop-shadow-primary/40">
					{work.title}
				</h1>
				<p className="text-muted-foreground text-sm text-center my-4">
					{work.description}
				</p>
				<Image
					src={work.image}
					width={1000}
					height={500}
					alt={work.title}
					className="mt-8 p-1 w-full rounded-lg border border-muted/5"
				/>
			</div>

			<div className="mb-12 grid grid-cols-1 md:grid-cols-3 gap-8">
				{/* Main content */}
				<div className="w-full min-w-0 md:col-span-2">
					<h4 className="text-2xl font-semibold relative flex items-center gap-1">
						<div className="w-1 h-7 bg-primary rounded-full"></div>
						Project Overview
					</h4>
					<p className="mt-4 text-sm text-muted-foreground">
						{work.overview}
					</p>

					<h4 className="mt-8 text-xl font-semibold">Key Features</h4>
					<div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-4">
						{work.key_features.map((item) => (
							<p
								className="flex items-center gap-1 px-4 py-2 rounded-lg text-sm border border-muted/5 bg-slate-900"
								key={item}
							>
								<TiTick className="mt-0.5" />
								{item}
							</p>
						))}
					</div>

					<div>
						<h4 className="mt-8 text-xl font-semibold">
							Project Gallery
						</h4>
						<div className="mt-4 gap-4 grid grid-cols-1 sm:grid-cols-2">
							{work.gallery.map((image) => (
								<Image
									key={image}
									src={image}
									width={400}
									height={400}
									alt={work.title}
									className="w-full rounded-lg"
								/>
							))}
						</div>
					</div>
				</div>

				{/* Sidebar */}
				<div className="w-full min-w-0">
					<div className="w-full border border-muted/5 rounded-xl p-4 shadow-[0_0_10px] shadow-primary/20">
						<h4 className="mb-4 text-lg font-semibold">
							Project Links
						</h4>

						<Link
							href={work.link}
							className={cn(
								"w-full bg-primary-dark!",
								buttonVariants(),
							)}
						>
							<FaRocket className="size-3 mt-0.5" />
							Project Link
						</Link>
						<Link
							href={work.code}
							className="cusrsor-pointer flex items-center gap-2"
						>
							<Button
								disabled={!work.code}
								className="w-full bg-gray-800! disabled:bg-gray-800/80! border border-muted/5 mt-2"
							>
								<FaGithub className="size-4 mt-0.5" />
								Source Code
							</Button>
						</Link>
					</div>

					<div className="mt-8 w-full border border-muted/5 rounded-xl p-4">
						<h4 className="text-sm text-primary font-bold">
							TECH STACK
						</h4>

						<div className="my-4 flex items-center flex-wrap gap-1.5">
							{work.tech_stack.map((item) => (
								<p
									key={item}
									className="border border-muted/5 bg-surface-dark px-3 pt-0.5 pb-1 text-xs rounded-full"
								>
									{item}
								</p>
							))}
						</div>

						<div className="pt-2 flex flex-col gap-2 border-t border-muted/5">
							<div>
								<h6 className="text-xs text-muted-foreground">
									ROLE
								</h6>
								<p className="text-sm">{work.role}</p>
							</div>
							<div>
								<h6 className="text-xs text-muted-foreground">
									TIMELINE
								</h6>
								<p className="text-sm">{work.timeline}</p>
							</div>
							<div>
								<h6 className="text-xs text-muted-foreground">
									CLIENT
								</h6>
								<p className="text-sm">{work.client}</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
