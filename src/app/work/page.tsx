"use client";

import { cn } from "@/lib/utils";
import { useState } from "react";

export default function Work() {
	const [active, setActive] = useState<"all" | "personal" | "client">("all");

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

			<div className="flex justify-center items-center gap-2">
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
			</div>

			<div>
				
			</div>
		</div>
	);
}
