import type { Work } from "@/types/work";

import { buttonVariants } from "../ui/button";

import Image from "next/image";
import Link from "next/link";

export default function WorkCard({ work }: { work: Work }) {
	return (
		<div className="hover:bg-background-dark duration-200 bg-slate-900 rounded-2xl overflow-hidden border border-muted/5">
			<div className="relative">
				<Image
					src="/work/libsys.png"
					width={300}
					height={300}
					alt=""
					className="w-full object-cover object-center h-40"
				/>
				<div className="capitalize absolute -bottom-2 left-6 bg-primary px-4 pt-0.5 pb-0.75 rounded-lg text-xs">
					{work.type}
				</div>
			</div>

			<div className="pt-4 px-6 pb-6">
				<h5 className="text-lg font-semibold mb-1">{work.title}</h5>
				<p className="text-sm text-muted-foreground">
					{work.description}
				</p>

				<div className="mt-4 flex items-center flex-wrap gap-1.5">
					{work.tech_stack.map((item) => (
						<p
							key={item}
							className="border border-muted/5 bg-surface-dark px-3 pt-0.5 pb-1 text-xs rounded-full"
						>
							{item}
						</p>
					))}{" "}
				</div>

				<Link
					href={`/work/${work.slug}`}
					className={buttonVariants({ className: "w-full mt-4" })}
				>
					View Project
				</Link>
			</div>
		</div>
	);
}
