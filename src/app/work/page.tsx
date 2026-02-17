"use client";

import { Button } from "@/components/ui/button";
import { LoaderOne } from "@/components/ui/loader";
import WorkCard from "@/components/work/work-card";
import { cn } from "@/lib/utils";
import type { Work, WorkResponse } from "@/types/work";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Work() {
	// const [active, setActive] = useState<"all" | "personal" | "client">("all");
	const [works, setWorks] = useState<WorkResponse | null>(null);

	async function fetchWorks(page: number = 1) {
		fetch(
			`${process.env.NEXT_PUBLIC_API_URL}/api/content?type=work&page=${page}`,
		)
			.then((res) => res.json())
			.then((data) => {
				if (works) {
					setWorks({
						...works,
						items: [...works.items, ...data.items],
						page: data.page,
						hasMore: data.hasMore,
					});
				} else {
					setWorks(data);
				}
			});
	}

	useEffect(() => {
		fetchWorks();
	}, []);

	return (
		<div className="container">
			<h1 className="mt-12 mb-3 text-4xl font-bold text-center">
				My{" "}
				<span className="bg-linear-to-r from-primary to-purple-500 bg-clip-text text-transparent">
					Work
				</span>
			</h1>

			<p className="text-center w-5/6 mx-auto font-light text-sm mb-8 text-muted-foreground">
				A collection of projects where I turn ideas into functional,
				well-designed web applications. Each piece reflects my growth as
				a developer, problem-solver, and creative thinker.
			</p>

			{/* <div className="flex justify-center items-center gap-2">
				<span
					onClick={() => setActive("all")}
					className={cn(
						"cursor-pointer duration-300 bg-slate-900 py-1 px-6 text-sm rounded-full border border-muted/5",
						active === "all" && "bg-primary!",
					)}
				>
					All
				</span>
				<span
					onClick={() => setActive("personal")}
					className={cn(
						"cursor-pointer duration-300 bg-slate-900 py-1 px-6 text-sm rounded-full border border-muted/5",
						active === "personal" && "bg-primary!",
					)}
				>
					Personal
				</span>
				<span
					onClick={() => setActive("client")}
					className={cn(
						"cursor-pointer duration-300 bg-slate-900 py-1 px-6 text-sm rounded-full border border-muted/5",
						active === "client" && "bg-primary!",
					)}
				>
					Client Projects
				</span>
			</div> */}

			{!works && (
				<div className="flex justify-center my-32">
					<LoaderOne />
				</div>
			)}

			<div className="my-10 grid grid-cols-2 gap-8">
				{works &&
					works.items.map((work, i) => (
						<motion.div
							key={work.slug}
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
					))}
			</div>

			<div className="flex justify-center mb-8">
				{works && (
					<Button
						onClick={() => fetchWorks(works.page + 1)}
						className="rounded-full"
						disabled={!works.hasMore}
					>
						Load more...
					</Button>
				)}
			</div>
		</div>
	);
}
