import type { Metadata } from "next";

import socials from "@/data/socials";

import CTA from "@/components/cta";
import { Timeline } from "@/components/ui/timeline";
import Image from "next/image";
import Link from "next/link";

import { FaArrowTrendUp, FaLocationDot } from "react-icons/fa6";

export const metadata: Metadata = {
	title: "Geeky Story - Stay Curious | About",

	robots: {
		index: true,
		follow: true,
	},
};

export default function About() {
	return (
		<div className="my-8 container">
			<header>
				<h1 className="text-4xl font-bold">
					About{" "}
					<span className="bg-linear-to-r from-primary via-primary to-muted bg-clip-text text-transparent">
						Me
					</span>
				</h1>

				<p className="w-5/6 font-light text-sm mt-3 text-muted-foreground">
					A brief look into my journey as a student, full stack
					developer, and bassist. From building web applications to
					exploring music, this page reflects my passion for learning,
					creativity, and continuous growth.
				</p>
			</header>

			<section
				className="mt-12 grid md:grid-cols-2 gap-8"
				aria-labelledby="about-overview-title"
			>
				<h2 id="about-overview-title" className="sr-only">
					Overview
				</h2>

				<section
					className="p-6 rounded-xl bg-slate-900 border border-muted/5"
					aria-label="Quick facts"
				>
					<dl className="grid md:grid-cols-2 gap-4">
						<div>
							<dt className="text-xs text-muted-foreground">
								LOCATION
							</dt>
							<dd className="not-italic flex items-center gap-1">
								<FaLocationDot
									aria-hidden="true"
									className="text-primary size-3 mt-0.5"
								/>{" "}
								<span>Bandaragama, Sri Lanka</span>
							</dd>
						</div>

						<div>
							<dt className="text-xs text-muted-foreground">
								EXPERIENCE
							</dt>
							<dd className="not-italic flex items-center gap-1.5">
								<FaArrowTrendUp
									aria-hidden="true"
									className="text-primary size-3 mt-0.5"
								/>{" "}
								<span>2+ Years</span>
							</dd>
						</div>
					</dl>

					<div className="border-t border-muted/5 mt-4 pt-4">
						<dl>
							<div>
								<dt className="text-xs text-muted-foreground">
									CURRENT FOCUS
								</dt>
								<dd className="not-italic flex items-center gap-1.5">
									<span>Full Stack Web Development</span>
								</dd>
							</div>
						</dl>
					</div>

					<nav
						className="mt-6 flex items-center gap-1.5"
						aria-label="Social links"
					>
						{socials.map((item, i) => (
							<Link
								key={i}
								href={item.href}
								aria-label={item.href || "Social link"}
								rel="noopener noreferrer"
								target="_blank"
								className="block w-fit bg-surface-dark p-1.5 rounded-full border border-muted/5 hover:bg-primary/10 hover:border-primary/30 transition"
							>
								<span
									aria-hidden="true"
									className="text-gray-400 hover:text-primary transition"
								>
									{<item.icon />}
								</span>
							</Link>
						))}
					</nav>
				</section>

				<section aria-labelledby="who-am-i-title">
					<h2 id="who-am-i-title" className="text-3xl font-semibold">
						Who am I?
					</h2>
					<p className="text-sm mt-2 text-muted-foreground">
						I’m Methupa, a student and full stack web developer with
						a strong interest in building practical, efficient web
						applications.
					</p>{" "}
					<p className="text-sm mt-2 text-muted-foreground">
						I’m also a bassist who enjoys blending creativity with
						technology. I’m constantly learning, improving my
						skills, and working toward becoming better in both
						development and life.
					</p>
				</section>
			</section>

			<section aria-labelledby="journey-title">
				<h2
					id="journey-title"
					className="text-4xl font-bold text-center my-16"
				>
					My{" "}
					<span className="bg-linear-to-r from-primary to-purple-500 bg-clip-text text-transparent">
						Journey
					</span>
				</h2>

				<Timeline
					data={[
						{
							title: "Mid 2023",
							content: (
								<>
									<p className="mb-4">
										In mid-2023, after completing my O/L
										examination with{" "}
										<span className="text-primary">
											9As
										</span>
										, I took my first serious step into the
										world of{" "}
										<span className="text-primary">
											web development.
										</span>
									</p>
									<p>
										Instead of waiting around, I started
										learning{" "}
										<span className="text-primary">
											React and Tailwind CSS
										</span>
										, diving into modern front-end
										development and building real projects.
										What began as curiosity quickly turned
										into passion, pushing me to keep
										learning, experimenting, and growing as
										a developer.
									</p>
								</>
							),
						},
						{
							title: "Early 2024",
							content: (
								<>
									<p className="mb-4">
										In early 2024, I began studying at a new
										school, stepping into a fresh
										environment with new challenges and
										opportunities. During this time, I
										pushed my development skills further by
										building a complete full-stack library
										management system using Next.js for the
										frontend and Flask for the backend.
									</p>
									<figure className="w-full">
										<Image
											src="/work/libsys/cover.png"
											width={400}
											height={400}
											alt="Screenshot of a library management system project"
											className="w-full object-cover mb-4 rounded-xl"
										/>
									</figure>
									<p>
										The system handled core features such as
										book management, user records, and
										borrowing workflows, giving me hands-on
										experience in real-world application
										design, backend logic, and database
										integration. This project strengthened
										my understanding of full-stack
										development and showed me how powerful
										it is to turn ideas into working
										systems.
									</p>
								</>
							),
						},
						{
							title: "2025",
							content: (
								<>
									<figure className="w-full">
										<Image
											src="/work/edensgardentravels/cover.png"
											width={400}
											height={400}
											alt="Screenshot of the Eden’s Garden client project"
											className="w-full object-cover mb-4 rounded-xl"
										/>
									</figure>
									<p className="mb-4">
										In 2025, I shifted my focus toward my
										A/L studies while also beginning a new
										creative journey as a bassist. Alongside
										academic commitments, I dedicated time
										to learning bass guitar, developing
										rhythm, musical discipline, and
										performance skills. Balancing studies
										with music taught me consistency,
										patience, and creativity, shaping me
										both academically and artistically.
									</p>
									<p>
										At the same time, I stepped into
										professional development by working on a
										real client project called Eden’s
										Garden. This experience introduced me to
										client communication, project planning,
										and delivering functional solutions
										based on real-world requirements,
										marking an important step in my growth
										as a developer.
									</p>
								</>
							),
						},
					]}
				/>
			</section>

			<div className="-mt-16">
				<CTA />
			</div>
		</div>
	);
}
