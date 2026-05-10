import socials from "@/data/socials";
import navLinks from "@/data/nav-links";

import Link from "next/link";
import { buttonVariants } from "./ui/button";

import { ChevronRight } from "lucide-react";
import { FaLocationDot, FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

export default function Footer() {
	return (
		<footer
			className="pt-6 relative z-1 bg-background-dark border-t border-muted/5"
			aria-label="Site footer"
		>
			<div className="container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
				<section
					className="flex flex-col items-center md:items-start"
					aria-label="Brand"
				>
					<p className="text-lg font-bold">
						<span className="text-muted">Geeky</span>
						<span className="text-primary">Story</span>
					</p>

					<p className="text-center md:text-start mt-2 text-sm text-muted-foreground max-w-sm">
						Creating digital experiences with code and passion.
						Let&apos;s build something amazing together.
					</p>

					<div
						className="mt-4 flex flex-wrap items-center gap-2"
						aria-label="Social links"
					>
						{socials.map((item, i) => (
							<Link
								key={i}
								href={item.href}
								aria-label={item.href || "Social link"}
								rel="noopener noreferrer"
								target="_blank"
								className="bg-surface-dark p-2 rounded-full border border-muted/5 hover:bg-primary/10 hover:border-primary/30 transition"
							>
								<span
									aria-hidden="true"
									className="text-gray-400 hover:text-primary transition"
								>
									{<item.icon />}
								</span>
							</Link>
						))}
					</div>
				</section>

				<nav aria-label="Footer navigation">
					<p className="font-semibold text-center md:text-start">
						Navigation
					</p>

					<ul
						className="flex flex-col items-center md:items-start gap-2 text-sm mt-3 text-muted-foreground"
						role="list"
					>
						{navLinks.map(({ link, label }) => (
							<li key={label}>
								<Link
									href={link}
									className="hover:underline w-fit"
								>
									{label}
								</Link>
							</li>
						))}

						<li>
							<Link
								href="/contact"
								className="hover:underline w-fit"
							>
								Contact
							</Link>
						</li>
					</ul>
				</nav>

				<section aria-label="Contact">
					<p className="font-semibold text-center md:text-start">
						Ready to start a project?
					</p>

					<address className="flex flex-col items-center md:items-start gap-3 text-sm mt-3 text-muted-foreground not-italic">
						<p className="flex items-center gap-2 break-all">
							<span aria-hidden="true">
								<MdEmail />
							</span>
							<Link
								href="mailto:methupaperera48@gmail.com"
								className="hover:underline"
							>
								methupaperera48@gmail.com
							</Link>
						</p>

						<p className="flex items-center gap-2">
							<span aria-hidden="true">
								<FaPhone />
							</span>
							<Link
								href="tel:+94767964800"
								className="hover:underline"
							>
								+94 76 943 7742
							</Link>
						</p>

						<p className="flex items-center gap-2">
							<span aria-hidden="true">
								<FaLocationDot />
							</span>
							<span>Bandaragama, Sri Lanka</span>
						</p>

						<Link
							className={buttonVariants({
								className:
									"w-full sm:w-fit mt-1 justify-center",
								size: "sm",
							})}
							href="/contact"
							aria-label="Send a message via the contact page"
						>
							Send a Message
						</Link>
					</address>
				</section>
			</div>

			<div className="mt-6 text-sm text-center text-muted-foreground border-t border-muted/5 py-4">
				&copy;2026 GeekyStory. All rights reserved.
			</div>
		</footer>
	);
}
