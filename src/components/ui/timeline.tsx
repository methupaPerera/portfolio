"use client";
import {
	useMotionValueEvent,
	useScroll,
	useTransform,
	motion,
} from "motion/react";
import React, { useEffect, useRef, useState } from "react";

interface TimelineEntry {
	title: string;
	content: React.ReactNode;
}

export const Timeline = ({ data }: { data: TimelineEntry[] }) => {
	const ref = useRef<HTMLDivElement>(null);
	const containerRef = useRef<HTMLDivElement>(null);
	const [height, setHeight] = useState(0);

	useEffect(() => {
		if (ref.current) {
			const rect = ref.current.getBoundingClientRect();
			setHeight(rect.height);
		}
	}, [ref]);

	const { scrollYProgress } = useScroll({
		target: containerRef,
		offset: ["start 10%", "end 50%"],
	});

	const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
	const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

	return (
		<div className="w-full" ref={containerRef}>
			<div ref={ref} className="relative mx-auto pb-20">
				{data.map((item, index) => (
					<div key={index} className="flex justify-start">
						<div className="sticky flex flex-col md:flex-row z-40 items-center top-40 self-start max-w-xs lg:max-w-sm md:w-full">
							<div className="absolute left-1 md:left-3 size-5 rounded-full bg-primary/20 flex items-center justify-center">
								<div className="rounded-full bg-primary p-1" />
							</div>
							<h3 className="hidden md:block text-xl md:pl-12 -mt-1 md:text-2xl font-semibold">
								{item.title}
							</h3>
						</div>

						<div className="relative pl-12 -mt-2 mb-8 md:pl-4 w-full">
							<h3 className="md:hidden block text-2xl mb-4 text-left font-bold">
								{item.title}
							</h3>
							{item.content}{" "}
						</div>
					</div>
				))}
				<div
					style={{
						height: height + "px",
					}}
					className="absolute md:left-5.5 left-8 top-0 overflow-hidden w-0.5 bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-0% via-neutral-200 dark:via-neutral-700 to-transparent to-99%  mask-[linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)]"
				>
					<motion.div
						style={{
							height: heightTransform,
							opacity: opacityTransform,
						}}
						className="absolute inset-x-0 top-0  w-0.5 bg-linear-to-t from-purple-500 via-primary to-primary from-0% via-10% rounded-full"
					/>
				</div>
			</div>
		</div>
	);
};
