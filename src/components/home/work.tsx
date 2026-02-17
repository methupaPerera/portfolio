import React from "react";
import ScrollDown from "@/animations/scroll-down";
import ParticlesBackground from "@/components/particles";
import ProfileImage from "@/components/profile-img";
import { buttonVariants } from "@/components/ui/button";
import { FlipWords } from "@/components/ui/flip-words";
import { TypewriterEffect } from "@/components/ui/typewriter-effect";
import { MoveRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { BsArrowDown } from "react-icons/bs";
import { FaExternalLinkAlt, FaTools } from "react-icons/fa";
import { FaDatabase } from "react-icons/fa6";
import { MdTerminal } from "react-icons/md";
import WorkCard from "../work/work-card";
import type { Work, WorkResponse } from "@/types/work";

export default async function Work() {
	const works: WorkResponse = await (
		await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/content?type=work`)
	).json();

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
						<WorkCard key={work.slug} work={work} />
					))}
				</div>
			</div>
		</section>
	);
}
