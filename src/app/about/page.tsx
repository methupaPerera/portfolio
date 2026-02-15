import CTA from "@/components/cta";
import { buttonVariants } from "@/components/ui/button";
import { Timeline } from "@/components/ui/timeline";
import socials from "@/data/socials";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaArrowTrendUp, FaLocationDot } from "react-icons/fa6";

export default function About() {
	return (
		<div className="my-8 container">
			<h1 className="text-center text-4xl font-bold">
				About{" "}
				<span className="bg-linear-to-r from-primary via-primary to-purple-500 bg-clip-text text-transparent">
					Me
				</span>
			</h1>

			<p className="text-center w-5/6 mx-auto font-light text-sm mt-3 text-muted-foreground">
				A brief look into my journey as a student, full stack developer,
				and bassist. From building web applications to exploring music,
				this page reflects my passion for learning, creativity, and
				continuous growth.s
			</p>

			<div className="mt-12 grid grid-cols-2 gap-8">
				<div className="p-6 rounded-xl bg-slate-900 border border-muted/5">
					<div className="grid grid-cols-2 gap-4">
						<div>
							<p className="text-xs text-muted-foreground">
								LOCATION
							</p>
							<address className="not-italic flex items-center gap-1">
								<FaLocationDot className="text-primary size-3 mt-0.5" />{" "}
								Bandaragama, Sri Lanka
							</address>
						</div>

						<div>
							<p className="text-xs text-muted-foreground">
								EXPERIENCE
							</p>
							<address className="not-italic flex items-center gap-1.5">
								<FaArrowTrendUp className="text-primary size-3 mt-0.5" />{" "}
								2+ Years
							</address>
						</div>
					</div>
					<div className="border-t border-muted/5 mt-4 pt-4">
						<p className="text-xs text-muted-foreground">
							CURRENT FOCUS
						</p>
						<address className="not-italic flex items-center gap-1.5">
							Full Stack Web Development
						</address>
					</div>
					<div className="mt-6 flex items-center gap-1.5">
						{socials.map((item, i) => (
							<Link
								key={i}
								href={item.href}
								className="block w-fit bg-surface-dark p-1.5 rounded-full border border-muted/5 hover:bg-primary/10 hover:border-primary/30 transition"
							>
								<span className="text-gray-400 hover:text-primary transition">
									{<item.icon />}
								</span>
							</Link>
						))}
					</div>
				</div>

				<div>
					<h2 className="text-3xl font-semibold">Who am I?</h2>
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
				</div>
			</div>

			<div>
				<h3 className="text-4xl font-bold text-center my-16">
					My{" "}
					<span className="bg-linear-to-r from-primary to-purple-500 bg-clip-text text-transparent">
						Journey
					</span>
				</h3>

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
										{" "}
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
									<Image
										src="/work/libsys.png"
										width={400}
										height={400}
										alt=""
										className="w-full object-cover mb-4 rounded-xl"
									/>
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
									<Image
										src="/work/edensgarden.png"
										width={400}
										height={400}
										alt=""
										className="w-full object-cover mb-4 rounded-xl"
									/>
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
			</div>

			<div className="-mt-16">
				<CTA />
			</div>
		</div>
	);
}
