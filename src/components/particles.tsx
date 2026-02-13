"use client";

import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";

const ParticlesBackground = () => {
	const particlesInit = useCallback(async (engine: any) => {
		await loadSlim(engine);
	}, []);

	return (
		<Particles
			id="tsparticles"
			init={particlesInit}
			options={{
				fpsLimit: 120,
				interactivity: {
					events: {
						onClick: {
							enable: true,
							mode: "push",
						},
						onHover: {
							enable: false,
							mode: "repulse",
						},
						resize: true,
					},
					modes: {
						push: {
							quantity: 1,
						},
						repulse: {
							distance: 200,
							duration: 0.4,
						},
					},
				},
				particles: {
					color: {
						value: "#7db7ff",
					},
					links: {
						color: "#ffffff",
						distance: 150,
						enable: true,
						opacity: 0,
						width: 1,
					},
					move: {
						direction: "none",
						enable: true,
						outModes: {
							default: "bounce",
						},
						random: false,
						speed: 0.1,
						straight: false,
					},
					number: {
						density: {
							enable: true,
							area: 800,
						},
						value: 10,
					},
					opacity: {
						value: 0.05,
					},
					shape: {
						type: "circle",
					},
					size: {
						value: { min: 60, max: 60 },
					},
				},
				detectRetina: true,
			}}
		/>
	);
};

export default ParticlesBackground;
