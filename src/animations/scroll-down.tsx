"use client";

import { motion } from "framer-motion";

export default function ScrollDown() {
	return (
		<div className="flex flex-col items-center gap-2 select-none">
			<motion.div
				className="relative h-12 w-7 rounded-full border border-muted/20"
				initial={{ opacity: 0, y: 8 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.6, ease: "easeOut" }}
			>
				<motion.span
					className="absolute left-1/2 opacity-20 top-2 h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-primary"
					animate={{ y: [0, 16, 0], opacity: [1, 0.4, 1] }}
					transition={{
						duration: 2.5,
						repeat: Infinity,
						ease: "easeInOut",
					}}
				/>
			</motion.div>

			<motion.p
				className="text-xs text-muted/70"
				animate={{ opacity: [0.5, 1, 0.5] }}
				transition={{
					duration: 1.6,
					repeat: Infinity,
					ease: "easeInOut",
				}}
			>
				Scroll down
			</motion.p>
		</div>
	);
}
