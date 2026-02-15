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

export default function Work() {
	return (
		<section className="border-t border-muted/5 py-16 bg-background-dark">
			<div className="container">
				<div className="flex items-center justify-between mb-12">
					<div className="w-5/6">
						<h2 className="font-bold text-4xl mb-2 bg-linear-to-r from-primary to-purple-500 bg-clip-text text-transparent">Work</h2>
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
					<div className="hover:bg-background-dark duration-200 bg-slate-900 rounded-2xl overflow-hidden border border-muted/5">
						<div className="relative">
							<Image
								src="/work/libsys.png"
								width={300}
								height={300}
								alt=""
								className="w-full object-cover object-center h-50"
							/>
							<div className="absolute -bottom-2 left-6 bg-primary px-4 py-0.5 rounded-lg text-sm">
								Personal
							</div>
						</div>

						<div className="pt-4 px-6 pb-6">
							<h5 className="text-lg font-semibold mb-1">
								Library System
							</h5>
							<p className="text-sm text-muted-foreground">
								This is my first full stack application. The
								frontend is built with Nextjs & the backend is
								built with Flask.
							</p>

							<div className="flex items-center justify-between mt-4">
								<div className="flex items-center flex-wrap gap-1.5">
									{["Next.js", "Flask", "Vercel"].map(
										(item) => (
											<p
												key={item}
												className="bg-surface-dark px-3 pt-0.5 pb-1 text-xs rounded-full"
											>
												{item}
											</p>
										),
									)}{" "}
								</div>
								<FaExternalLinkAlt className="text-muted-foreground size-3" />
							</div>
						</div>
					</div>
					<div className="bg-slate-900 rounded-2xl overflow-hidden border border-muted/5">
						<div className="relative">
							<Image
								src="/work/libsys.png"
								width={300}
								height={300}
								alt=""
								className="w-full object-cover object-center h-50"
							/>
							<div className="absolute -bottom-2 left-6 bg-primary px-4 py-0.5 rounded-lg text-sm">
								Personal
							</div>
						</div>

						<div className="pt-4 px-6 pb-6">
							<h5 className="text-lg font-semibold mb-1">
								Library System
							</h5>
							<p className="text-sm text-muted-foreground">
								This is my first full stack application. The
								frontend is built with Nextjs & the backend is
								built with Flask.
							</p>

							<div className="flex items-center justify-between mt-4">
								<div className="flex items-center flex-wrap gap-1.5">
									{["Next.js", "Flask", "Vercel"].map(
										(item) => (
											<p
												key={item}
												className="bg-surface-dark px-3 pt-0.5 pb-1 text-xs rounded-full"
											>
												{item}
											</p>
										),
									)}{" "}
								</div>
								<FaExternalLinkAlt className="text-muted-foreground size-3" />
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
