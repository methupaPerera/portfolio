import ScrollDown from "@/animations/scroll-down";
import ParticlesBackground from "@/components/particles";
import ProfileImage from "@/components/profile-img";
import { buttonVariants } from "@/components/ui/button";
import { MoveRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Page() {
	return (
		<div className="relative z-1 container">
			<div className="mt-16 flex justify-between items-center gap-8">
				<div className="flex flex-col">
					<p className="mb-8 bg-primary/5 backdrop-blur-2xl text-primary w-fit px-3 py-1 rounded-full border border-primary text-xs">
						Currently available for freelance work.
					</p>

					<div className="mb-4 text-5xl font-bold text-muted flex flex-col">
						<span>Building digital</span>
						<span>
							<span className="bg-linear-to-r from-primary via-primary to-muted bg-clip-text text-transparent">
								experiences
							</span>{" "}
							that
						</span>
						<span>matter.</span>
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

			<div className="absolute -z-10">
				<ParticlesBackground />
			</div>
		</div>
	);
}
