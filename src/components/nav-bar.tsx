"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

import navLinks from "@/data/nav-links";

import Link from "next/link";
import { Button, buttonVariants } from "./ui/button";
import { cn } from "@/lib/utils";

import { MdEmail } from "react-icons/md";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { AnimatePresence, motion } from "framer-motion";

export default function NavBar() {
	const path = usePathname();
	const [open, setOpen] = useState(false);

	useEffect(() => {
		setOpen(false);
	}, [path]);

	useEffect(() => {
		document.body.style.overflow = open ? "hidden" : "";
		return () => {
			document.body.style.overflow = "";
		};
	}, [open]);

	return (
		<nav className="bg-background-dark/80 fixed z-50 h-16 border-b w-full border-muted/5">
			<div className="backdrop-blur-md container flex justify-between items-center h-full">
				<Link href="/">
					<h1 className="text-lg font-bold">
						<span className="text-muted">Geeky</span>
						<span className="text-primary">Story</span>
					</h1>
				</Link>

				<div className="hidden md:flex items-center gap-8 text-sm">
					{navLinks.map(({ link, label }) => (
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
					))}

					<Link href="/contact" className={buttonVariants()}>
						<MdEmail />
						Contact
					</Link>
				</div>

				<Button
					type="button"
					onClick={() => setOpen((v) => !v)}
					className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-muted transition-colors"
					aria-label="Toggle menu"
					aria-expanded={open}
				>
					{open ? <HiX size={22} /> : <HiMenuAlt3 size={22} />}
				</Button>
			</div>

			<AnimatePresence>
				{open && (
					<>
						<motion.div
							key="drawer"
							className="fixed top-15.75 left-0 right-0 z-50 md:hidden border-b border-muted/10 bg-background-dark/80"
							initial={{ height: 0, opacity: 0 }}
							animate={{ height: "auto", opacity: 1 }}
							exit={{ height: 0, opacity: 0 }}
							transition={{ duration: 0.25 }}
						>
							<div className="absolute inset-0 backdrop-blur-lg bg-background-dark/40 supports-backdrop-filter:bg-background-dark/30" />

							<div className="relative container py-4 px-4">
								<motion.div
									className="flex flex-col gap-2"
									initial="hidden"
									animate="show"
									exit="hidden"
									variants={{
										hidden: {
											transition: {
												staggerChildren: 0.03,
												staggerDirection: -1,
											},
										},
										show: {
											transition: {
												staggerChildren: 0.05,
												delayChildren: 0.05,
											},
										},
									}}
								>
									{navLinks.map(({ link, label }) => (
										<motion.div
											key={link}
											variants={{
												hidden: { opacity: 0, y: -6 },
												show: { opacity: 1, y: 0 },
											}}
										>
											<Link
												href={link}
												className={cn(
													"block rounded-md px-3 py-2 text-sm transition-colors",
													path === link
														? "text-primary bg-primary/10"
														: "text-muted hover:text-primary hover:bg-muted/10",
												)}
											>
												{label}
											</Link>
										</motion.div>
									))}

									<motion.div
										variants={{
											hidden: { opacity: 0, y: -6 },
											show: { opacity: 1, y: 0 },
										}}
										className="pt-2"
									>
										<Link
											href="/contact"
											className={cn(
												buttonVariants(),
												"w-full justify-center",
											)}
										>
											<MdEmail />
											Contact
										</Link>
									</motion.div>
								</motion.div>
							</div>
						</motion.div>
					</>
				)}
			</AnimatePresence>
		</nav>
	);
}
