import ScrollDown from "@/animations/scroll-down";
import ProfileImage from "@/components/profile-img";
import { buttonVariants } from "@/components/ui/button";
import { FlipWords } from "@/components/ui/flip-words";
import Link from "next/link";

import { MoveRight } from "lucide-react";

export default function Hero() {
	return (
		<section className="mt-16 container" aria-labelledby="hero-title">
			<div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-4">
				<div className="flex flex-col">
					<p
						role="status"
						className="mx-auto md:mx-0 mb-6 bg-primary/5 backdrop-blur-2xl text-primary w-fit px-3 py-1 pt-0.5 rounded-full border border-primary text-xs"
					>
						Currently available for freelance work
					</p>

					<h1
						id="hero-title"
						className="mb-4 text-4xl md:text-5xl font-bold text-muted flex flex-col items-center md:items-start gap-2"
					>
						<span>
							Hey, I&apos;m{" "}
							<span className="bg-linear-to-r from-primary to-pink-500 bg-clip-text text-transparent">
								Methupa
							</span>
							.
						</span>

						<span className="sr-only">
							I build frontend and backend web applications.
						</span>

						<span
							aria-hidden="true"
							className="bg-linear-to-r from-primary to-muted bg-clip-text text-transparent"
						>
							sometimes a
						</span>

						<span
							aria-hidden="true"
							className="-ml-2 overflow-hidden flex items-center"
						>
							<FlipWords
								className="text-white w-42 md:w-54"
								words={["frontend", "backend"]}
							/>
							developer.
						</span>
					</h1>

					<p className="text-center md:text-start text-sm text-muted-foreground">
						This is the place to explore ideas, creativity, and
						personal growth, while sharing real experiences, lessons
						learned, and the mindset behind building a meaningful
						and focused life.
					</p>

					<div className="mt-8 flex items-center justify-center md:justify-start gap-2">
						<Link
							href="/work"
							className={buttonVariants()}
							aria-label="View Methupa's work"
						>
							View Work <MoveRight aria-hidden="true" />
						</Link>

						<Link
							href="/contact"
							className={buttonVariants({ variant: "secondary" })}
							aria-label="Contact Methupa"
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
