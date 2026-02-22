import type { Metadata } from "next";

import socials from "@/data/socials";

import ContactForm from "@/components/contact/contact-form";
import Link from "next/link";

import { BsArrowDown } from "react-icons/bs";
import { FaInstagram } from "react-icons/fa6";
import { MdLocationPin } from "react-icons/md";

export const metadata: Metadata = {
	title: "Geeky Story - Stay Curious | Contact",

	robots: {
		index: true,
		follow: true,
	},
};

export default async function ContactPage({
	searchParams,
}: {
	searchParams: Promise<{ status?: string }>;
}) {
	const { status } = await searchParams;

	return (
		<div className="container grid md:grid-cols-2 items-center md:gap-16">
			<section className="mb-16" aria-labelledby="contact-title">
				<p
					role="status"
					className="mt-16 mb-2 bg-primary/5 backdrop-blur-2xl text-primary w-fit px-3 py-1 pt-0.5 rounded-full border border-primary text-xs"
				>
					Open for Opportunities.
				</p>

				<h1 id="contact-title" className="text-5xl font-semibold">
					Let&apos;s build something
					<span className="block bg-linear-to-r from-primary to-muted bg-clip-text text-transparent">
						amazing.
					</span>
				</h1>

				<p className="text-muted-foreground text-sm mt-4">
					Whether you have question, a project proposal, or just want
					to discuss the latest in tech, I'm all ears,
				</p>

				<div className="mt-8 ml-4">
					<section
						className="flex gap-2"
						aria-label="Instagram contact"
					>
						<div className="h-fit mt-1.25 rounded-full p-2 bg-slate-900 inline-flex">
							<FaInstagram
								aria-hidden="true"
								className="size-4 text-primary-light"
							/>
						</div>

						<div className="text-sm">
							<h2 className="font-semibold">Chat with me</h2>
							<p className="text-xs text-muted-foreground">
								Shoot me a message directly.
							</p>
							<Link
								className="flex gap-1 items-center text-primary underline"
								href="https://instagram.com/methupa.perera"
								target="_blank"
								rel="noopener noreferrer"
								aria-label="Message Methupa on Instagram (opens in a new tab)"
							>
								Let&apos;s go{" "}
								<BsArrowDown
									aria-hidden="true"
									className="-rotate-90"
								/>
							</Link>
						</div>
					</section>

					<section className="flex gap-2 mt-4" aria-label="Location">
						<div className="h-fit mt-1.25 rounded-full p-2 bg-slate-900 inline-flex">
							<MdLocationPin
								aria-hidden="true"
								className="size-4 text-primary-light"
							/>
						</div>

						<div className="text-sm">
							<h2 className="font-semibold">Location</h2>
							<p className="text-xs text-muted-foreground">
								Open for remote work worldwide.
							</p>
							<address className="not-italic">
								Bandaragama, Sri Lanka
							</address>
						</div>
					</section>
				</div>

				<nav className="mt-8" aria-label="Social links">
					<p className="text-sm text-muted-foreground">
						Connect on Socials
					</p>
					<div className="-ml-0.5 mt-1 flex items-center gap-3">
						{socials.map((item, i) => (
							<Link
								key={i}
								href={item.href}
								aria-label={item.href || "Social link"}
								target="_blank"
								rel="noopener noreferrer"
								className="bg-surface-dark p-1.5 rounded-lg border border-muted/5 hover:bg-primary/10 hover:border-primary/30 transition"
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
				</nav>
			</section>

			<section aria-label="Contact form">
				<ContactForm status={status} />
			</section>
		</div>
	);
}
