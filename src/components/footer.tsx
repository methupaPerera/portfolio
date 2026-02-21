import socials from "@/data/socials";
import navLinks from "@/data/nav-links";

import Link from "next/link";
import { buttonVariants } from "./ui/button";

import { ChevronRight } from "lucide-react";
import { FaLocationDot, FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

export default function Footer() {
	return (
		<footer className="pt-6 relative z-1 bg-background-dark border-t border-muted/5">
			<div className="container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
				<div className="flex flex-col items-center md:items-start">
					<h1 className="text-lg font-bold">
						<span className="text-muted">Geeky</span>
						<span className="text-primary">Story</span>
					</h1>

					<p className="text-center md:text-start mt-2 text-sm text-muted-foreground max-w-sm">
						Creating digital experiences with code and passion.
						Let&apos;s build something amazing together.
					</p>

					<div className="mt-4 flex flex-wrap items-center gap-2">
						{socials.map((item, i) => (
							<Link
								key={i}
								href={item.href}
								className="bg-surface-dark p-2 rounded-full border border-muted/5 hover:bg-primary/10 hover:border-primary/30 transition"
							>
								<span className="text-gray-400 hover:text-primary transition">
									{<item.icon />}
								</span>
							</Link>
						))}
					</div>
				</div>

				<div>
					<p className="font-semibold text-center md:text-start">
						Navigation
					</p>

					<div className="flex flex-col items-center md:items-start gap-2 text-sm mt-3 text-muted-foreground">
						{navLinks.map(({ link, label }) => (
							<Link
								key={label}
								href={link}
								className="hover:underline w-fit"
							>
								{label}
							</Link>
						))}

						<Link href="/contact" className="hover:underline w-fit">
							Contact
						</Link>
					</div>
				</div>

				<div>
					<p className="font-semibold text-center md:text-start">
						Ready to start a project?
					</p>

					<div className="flex flex-col items-center md:items-start gap-3 text-sm mt-3 text-muted-foreground">
						<p className="flex items-center gap-2 break-all">
							<MdEmail />
							<Link
								href="mailto:methupaperera48@gmail.com"
								className="hover:underline"
							>
								methupaperera48@gmail.com
							</Link>
						</p>

						<p className="flex items-center gap-2">
							<FaPhone />
							<span>+94 76 943 7742</span>
						</p>

						<address className="flex items-center gap-2">
							<FaLocationDot />
							<span className="not-italic">
								Bandaragama, Sri Lanka
							</span>
						</address>

						<Link
							className={buttonVariants({
								className:
									"w-full sm:w-fit mt-1 justify-center",
								size: "sm",
							})}
							href="/contact"
						>
							Send a Message <ChevronRight />
						</Link>
					</div>
				</div>
			</div>

			<div className="mt-6 text-sm text-center text-muted-foreground border-t border-muted/5 py-4">
				&copy;2026 GeekyStory. All rights reserved.
			</div>
		</footer>
	);
}
