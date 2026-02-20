import socials from "@/data/socials";

import ContactForm from "@/components/contact/contact-form";
import Link from "next/link";

import { BsArrowDown } from "react-icons/bs";
import { FaInstagram } from "react-icons/fa6";
import { MdLocationPin } from "react-icons/md";

export default function Contact() {
	return (
		<div className="container grid grid-cols-2 items-center gap-16">
			<div className="mb-16">
				<p className="mt-16 mb-2 bg-primary/5 backdrop-blur-2xl text-primary w-fit px-3 py-1 pt-0.5 rounded-full border border-primary text-xs">
					Open for Opportunities.
				</p>
				<h2 className="text-5xl font-semibold">
					Let&apos;s build something
					<span className="block bg-linear-to-r from-primary to-muted bg-clip-text text-transparent">
						amazing.
					</span>
				</h2>
				<p className="text-muted-foreground text-sm mt-4">
					Whether you have question, a project proposal, or just want
					to discuss the latest in tech, I'm all ears,
				</p>

				<div className="mt-8 ml-4">
					<div className="flex gap-2">
						<div className="h-fit mt-1.25 rounded-full p-2 bg-slate-900 inline-flex">
							<FaInstagram className="size-4 text-primary-light" />
						</div>
						<div className="text-sm">
							<p className="font-semibold">Chat with me</p>
							<p className="text-xs text-muted-foreground">
								Shoot me a message directly.
							</p>
							<Link
								className="flex gap-1 items-center text-primary underline"
								href="https://instagram.com/methupa.perera"
							>
								Let's go <BsArrowDown className="-rotate-90" />
							</Link>
						</div>
					</div>
					<div className="flex gap-2 mt-4">
						<div className="h-fit mt-1.25 rounded-full p-2 bg-slate-900 inline-flex">
							<MdLocationPin className="size-4 text-primary-light" />
						</div>
						<div className="text-sm">
							<p className="font-semibold">Location</p>
							<p className="text-xs text-muted-foreground">
								Open for remote work worldwide.
							</p>
							<address className="not-italic">
								Bandaragama, Sri Lanka
							</address>
						</div>
					</div>
				</div>

				<div className="mt-8">
					<p className="text-sm text-muted-foreground">
						Connect on Socials
					</p>
					<div className="-ml-0.5 mt-1 flex items-center gap-3">
						{socials.map((item, i) => (
							<Link
								key={i}
								href={item.href}
								className="bg-surface-dark p-1.5 rounded-lg border border-muted/5 hover:bg-primary/10 hover:border-primary/30 transition"
							>
								<span className="text-gray-400 hover:text-primary transition">
									{<item.icon />}
								</span>
							</Link>
						))}
					</div>
				</div>
			</div>

			<div>
				<ContactForm />
			</div>
		</div>
	);
}
