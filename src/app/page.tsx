import CTA from "@/components/cta";
import Blog from "@/components/home/blog";
import Hero from "@/components/home/hero";
import TechStack from "@/components/home/tech-stack";
import Work from "@/components/home/work";
import ParticlesBackground from "@/components/particles";

export default function Page() {
	return (
		<div className="relative z-1 overflow-x-hidden">
			<Hero />
			<TechStack />
			<Work />
			<Blog />
			<div className="container">
				<CTA />
			</div>

			<div className="absolute -z-10">
				<ParticlesBackground />
			</div>
		</div>
	);
}
