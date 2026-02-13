"use client";

import { useEffect, useRef } from "react";

export default function BackgroundVideo() {
	const videoRef = useRef<HTMLVideoElement>(null);

	useEffect(() => {
		if (videoRef.current) {
			videoRef.current.playbackRate = 1;
		}
	}, []);

	return (
		<div className="fixed z-0 inset-0 overflow-hidden">
			<video
				ref={videoRef}
				src="/bg.mp4"
				preload="metadata"
				muted
				autoPlay
				loop
				playsInline
				className="h-full w-full object-cover"
			/>

			<div className="absolute inset-0 bg-background-dark/90" />
		</div>
	);
}
