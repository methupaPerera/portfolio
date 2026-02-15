import ScrollDown from "@/animations/scroll-down";
import CTA from "@/components/cta";
import Blog from "@/components/home/blog";
import Hero from "@/components/home/hero";
import TechStack from "@/components/home/tech-stack";
import Work from "@/components/home/work";
import ParticlesBackground from "@/components/particles";
import ProfileImage from "@/components/profile-img";
import { buttonVariants } from "@/components/ui/button";
import { FlipWords } from "@/components/ui/flip-words";
import { TypewriterEffect } from "@/components/ui/typewriter-effect";
import { MoveRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { BsArrowDown } from "react-icons/bs";
import { FaExternalLinkAlt, FaTools } from "react-icons/fa";
import { FaDatabase } from "react-icons/fa6";
import { MdTerminal } from "react-icons/md";

export default function Page() {
	return (
		<div className="relative z-1">
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
