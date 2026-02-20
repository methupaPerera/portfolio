"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function ProfileImage() {
	return (
		<div className="relative size-full flex justify-end overflow-visible">
			<motion.div
				className="absolute -right-16 size-[90%] rounded-full
                   bg-linear-to-tr from-primary via-primary/60 to-primary-dark
                   blur-3xl"
				initial={{
					opacity: 0,
					scale: 0,
					filter: "blur(60px) brightness(0.6)",
				}}
				animate={{
					opacity: [0, 0.85, 0.6],
					scale: [0.85, 1.25, 1.05],
					rotate: [0, 4, 0],
					filter: [
						"blur(60px) brightness(0.6)",
						"blur(90px) brightness(1.35)",
						"blur(70px) brightness(1)",
					],
				}}
				transition={{
					duration: 1.2,
					ease: "easeOut",
				}}
			/>

			<motion.div
				className="absolute -right-16 size-[90%] rounded-full
                   bg-linear-to-tr from-primary via-primary/60 to-primary-dark
                   blur-3xl opacity-60"
				animate={{
					scale: [1.05, 1.3, 1.05],
					rotate: [0, 8, -8, 0],
				}}
				transition={{
					duration: 3,
					repeat: Infinity,
					ease: "easeInOut",
					delay: 1.1,
				}}
			/>

			<Image
				src="/profile.jpg"
				width={350}
				height={350}
				className="saturate-40 object-bottom border-16 border-muted/5 object-cover rounded-4xl aspect-square contrast-105 relative z-10"
				alt="Profile image"
			/>
			
		</div>
	);
}
