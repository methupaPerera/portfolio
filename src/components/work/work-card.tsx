import type { Work } from "@/types/work";

import { buttonVariants } from "../ui/button";

import Image from "next/image";
import Link from "next/link";

export default function WorkCard({ work }: { work: Work }) {
	return (
		<article className="hover:bg-background-dark duration-200 bg-slate-900 rounded-2xl overflow-hidden border border-muted/5">
			<div className="relative">
				<Image
					src={work.image}
					width={300}
					height={300}
					alt={`${work.title} project thumbnail`}
					className="w-full object-cover object-center h-40"
					sizes="(max-width: 768px) 100vw, 300px"
					loading="lazy"
				/>

				<div
					className="capitalize absolute -bottom-2 left-6 bg-primary px-4 pt-0.5 pb-0.75 rounded-lg text-xs"
					aria-label={`Project type: ${work.type}`}
				>
					{work.type}
				</div>
			</div>

			<div className="pt-4 px-6 pb-6">
				<h3 className="text-lg font-semibold mb-1">{work.title}</h3>

				<p className="text-sm text-muted-foreground">
					{work.description}
				</p>

				<ul
					className="mt-4 flex items-center flex-wrap gap-1.5"
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

				<Link
					href={`/work/${work.slug}`}
					aria-label={`View project: ${work.title}`}
					className={buttonVariants({ className: "w-full mt-4" })}
				>
					View Project
				</Link>
			</div>
		</article>
	);
}
