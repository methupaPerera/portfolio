"use client";

import type { WorkResponse } from "@/types/work";

import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
import { LoaderOne } from "@/components/ui/loader";
import WorkCard from "@/components/work/work-card";
import { motion } from "framer-motion";

import { ChevronDown } from "lucide-react";

export default function Works() {
	const [works, setWorks] = useState<WorkResponse | null>(null);

	async function fetchWorks(page: number = 1, reset: boolean = false) {
		fetch(
			`${process.env.NEXT_PUBLIC_API_URL}/api/content?type=work&page=${page}`,
		)
			.then((res) => res.json())
			.then((data) => {
				setWorks((prev) => {
					if (reset || !prev) {
						return data;
					}

					return {
						...prev,
						items: [...prev.items, ...data.items],
						page: data.page,
						hasMore: data.hasMore,
					};
				});
			});
	}

	useEffect(() => {
		fetchWorks(works?.page ?? 1, true);
	}, []);

	return (
		<div className="container" aria-busy={!works}>
			<header>
				<p
					role="status"
					className="mt-12 mx-auto mb-2 bg-primary/5 backdrop-blur-2xl text-primary w-fit px-3 py-1 pt-0.5 rounded-full border border-primary text-xs"
				>
					My Portfolio
				</p>

				<h1 className="mb-3 text-4xl font-bold text-center">
					My{" "}
					<span className="bg-linear-to-r from-primary to-purple-500 bg-clip-text text-transparent">
						Work
					</span>
				</h1>

				<p className="text-center w-5/6 mx-auto font-light text-sm mb-8 text-muted-foreground">
					A collection of projects where I turn ideas into functional,
					well-designed web applications. Each piece reflects my
					growth as a developer, problem-solver, and creative thinker.
				</p>
			</header>

			{!works && (
				<div
					className="flex justify-center my-32"
					role="status"
					aria-live="polite"
				>
					<LoaderOne />
				</div>
			)}

			<section className="my-10" aria-labelledby="projects-title">
				<h2 id="projects-title" className="sr-only">
					Projects
				</h2>

				<ul className="grid md:grid-cols-2 gap-8" role="list">
					{works &&
						works.items.map((work, i) => (
							<li key={work.slug}>
								<motion.div
									initial={{ opacity: 0, y: 30 }}
									whileInView={{ opacity: 1, y: 0 }}
									viewport={{ once: true, margin: "-50px" }}
									transition={{
										duration: 0.5,
										ease: "easeOut",
										delay: i * 0.08,
									}}
								>
									<WorkCard work={work} />
								</motion.div>
							</li>
						))}
				</ul>
			</section>

			<div className="flex justify-center mb-8">
				{works && (
					<Button
						variant="link"
						onClick={() => fetchWorks(works.page + 1)}
						className="rounded-full font-normal"
						disabled={!works.hasMore}
						aria-label="Load more projects"
					>
						Load More Projects <ChevronDown aria-hidden="true" />
					</Button>
				)}
			</div>
		</div>
	);
}
