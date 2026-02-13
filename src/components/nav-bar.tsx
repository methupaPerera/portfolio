"use client";

import Link from "next/link";
import { buttonVariants } from "./ui/button";
import navLinks from "@/data/nav-links";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

export default function NavBar() {
	const path = usePathname();

	return (
		<nav className="backdrop-blur-lg fixed z-1000 h-16 border-b w-full border-muted/5">
			<div className="container flex justify-between items-center h-full">
				<h1 className="text-lg font-bold">
					<span className="text-muted">Geeky</span>
					<span className="text-primary">Story</span>
				</h1>

				<div className="flex items-center gap-8 text-sm">
					{navLinks.map(({ link, label }, i) => {
						return (
							<Link
								key={link}
								href={link}
								className={cn(
									"relative transition-colors duration-300",
									"after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-primary after:transition-all after:duration-300",
									path === link
										? "text-primary after:w-full"
										: "text-muted hover:text-primary hover:after:w-full",
								)}
							>
								{label}
							</Link>
						);
					})}

					<Link href="/contact" className={buttonVariants()}>
						Contact
					</Link>
				</div>
			</div>
		</nav>
	);
}
