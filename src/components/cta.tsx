import React from "react";
import { buttonVariants } from "./ui/button";
import Link from "next/link";

export default function CTA() {
	return (
		<section className="bg-primary p-6! rounded-2xl my-16 flex justify-between items-center">
			<div>
				<h5 className="text-xl font-semibold">
					Let&apos;s make something amazing!
				</h5>
				<p className="font-light text-sm">
					Open for freelance opportunities and collaborations.
				</p>
			</div>
			<Link
				href="/contact"
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
