import { buttonVariants } from "./ui/button";
import Link from "next/link";

export default function CTA() {
	return (
		<section
			className="bg-primary p-6! rounded-2xl my-12 flex md:flex-row flex-col text-center md:text-start gap-4 md:justify-between items-center"
			aria-labelledby="cta-title"
		>
			<header>
				<h2 id="cta-title" className="text-xl font-semibold">
					Let&apos;s make something amazing!
				</h2>

				<p className="font-light text-sm">
					Open for freelance opportunities and collaborations.
				</p>
			</header>

			<Link
				href="/contact"
				aria-label="Contact Methupa for freelance work"
				className={buttonVariants({
					variant: "secondary",
					className: "text-primary!",
				})}
			>
				Contact Me
			</Link>
		</section>
	);
}
