import type { Work } from "@/types/work";

import { getPage } from "@/lib/content";

import Link from "next/link";
import WorkCard from "../work/work-card";

import { BsArrowDown } from "react-icons/bs";

export default async function Work() {
	const works = getPage("work", 1, 2);

	return (
		<section className="border-t border-muted/5 py-16 bg-background-dark">
			<div className="container">
				<div className="flex items-center justify-between mb-12">
					<div className="w-5/6">
						<h2 className="font-bold text-4xl mb-2 bg-linear-to-r from-primary to-purple-500 bg-clip-text text-transparent">
							Work
						</h2>
						<p className="text-sm font-light text-muted-foreground">
							A collection of projects showcasing my journey in
							full-stack development.
						</p>
					</div>
					<Link
						href="/work"
						className="flex items-center gap-1.5 mt-px text-sm text-primary underline"
					>
						View all <BsArrowDown className="-rotate-90" />
					</Link>
				</div>

				<div className="grid grid-cols-2 gap-8">
					{works.items.map((work) => (
						// @ts-ignore
						<WorkCard key={work.slug} work={work} />
					))}
				</div>
			</div>
		</section>
	);
}
