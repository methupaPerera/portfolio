import type { Work } from "@/types/work";

import { getPage } from "@/lib/content";

import Link from "next/link";
import WorkCard from "../work/work-card";

import { BsArrowDown } from "react-icons/bs";

export default async function Work() {
	const works = getPage("work", 1, 2);

	return (
		<section
			className="border-y border-muted/5 py-16 bg-background-dark"
			aria-labelledby="work-title"
		>
			<div className="container">
				<header className="w-5/6 mb-8 ">
					<h2
						id="work-title"
						className="font-bold text-4xl mb-2 bg-linear-to-r from-primary to-purple-500 bg-clip-text text-transparent"
					>
						Work
					</h2>
					<p className="text-sm font-light text-muted-foreground">
						A collection of projects showcasing my journey in
						full-stack development.
					</p>
				</header>

				<ul className="grid md:grid-cols-2 gap-8" role="list">
					{works.items.map((work) => (
						<li key={work.slug}>
							{/* @ts-ignore */}
							<WorkCard work={work} />
						</li>
					))}
				</ul>

				<nav
					className="flex justify-end mt-8"
					aria-label="Work navigation"
				>
					<Link
						href="/work"
						aria-label="View all projects"
						className="flex items-center gap-1.5 mt-px text-sm text-primary underline"
					>
						View all{" "}
						<BsArrowDown
							className="-rotate-90 mt-0.5"
							aria-hidden="true"
						/>
					</Link>
				</nav>
			</div>
		</section>
	);
}
