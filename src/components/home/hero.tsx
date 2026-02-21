import ScrollDown from "@/animations/scroll-down";
import ProfileImage from "@/components/profile-img";
import { buttonVariants } from "@/components/ui/button";
import { FlipWords } from "@/components/ui/flip-words";
import Link from "next/link";

import { MoveRight } from "lucide-react";

export default function Hero() {
	return (
		<section className="mt-16 container">
			<div className="flex justify-between items-center gap-8 mb-4">
				<div className="flex flex-col">
					<p className="mb-8 bg-primary/5 backdrop-blur-2xl text-primary w-fit px-3 py-1 rounded-full border border-primary text-xs">
						Currently available for freelance work.
					</p>

					<div className="mb-4 text-5xl font-bold text-muted flex flex-col gap-2">
						<span>
							Hey, I&apos;m{" "}
							<span className="bg-linear-to-r from-primary to-pink-500 bg-clip-text text-transparent">
								Methupa,
							</span>
						</span>
						<span className="bg-linear-to-r from-primary to-muted bg-clip-text text-transparent">
							sometimes a
						</span>
						<span className="-ml-2 overflow-hidden flex items-center">
							<FlipWords
								className="mt-1 text-white w-54"
								words={["frontend", "backend"]}
							/>
							developer.
						</span>
					</div>

					<p className="text-sm text-muted-foreground">
						I'm a developer who blends creativity and code to craft
						meaningful experiences, building modern, responsive, and
						user-focused applications.
					</p>

					<div className="mt-8 flex items-center gap-2">
						<Link href="/work" className={buttonVariants()}>
							View Work <MoveRight />
						</Link>
						<Link
							href="/contact"
							className={buttonVariants({
								variant: "secondary",
							})}
						>
							Contact Me
						</Link>
					</div>
				</div>

				<ProfileImage />
			</div>

			<ScrollDown />
		</section>
	);
}
