import React from "react";
import { FaTools } from "react-icons/fa";
import { FaDatabase } from "react-icons/fa6";
import { MdTerminal } from "react-icons/md";

export default function TechStack() {
	return (
		<section className="border-t border-muted/5 bg-background-dark mt-12 py-16">
			<div className="container">
				<h2 className="text-center mb-2 text-4xl font-bold">
					Tech{" "}
					<span className="bg-linear-to-r from-primary to-purple-500 bg-clip-text text-transparent">
						Stack
					</span>
				</h2>

				<p className="text-center text-sm font-light text-muted-foreground mb-12">
					A selection of technologies I use to build performant and
					scalable web applications.
				</p>

				<div className="flex flex-col gap-4">
					<div className="duration-200 hover:bg-slate-900 border border-muted/5 rounded-xl p-8">
						<div className="w-fit p-2 bg-surface-dark rounded-lg border border-muted/5 hover:bg-primary/10 hover:border-primary/30 transition">
							<span className="text-gray-400 hover:text-primary transition">
								<MdTerminal />
							</span>
						</div>
						<h4 className="text-lg font-semibold mt-2">
							Frontend Excellence
						</h4>
						<p className="text-sm text-muted-foreground my-2">
							Mastering the art of visual storytelling through
							code. My core stack revolves around React and
							Next.js, ensuring high performance, SEO
							friendliness, and buttery smooth user interactions.
						</p>
						<div className="flex items-center flex-wrap gap-1.5 mt-4">
							{[
								"React",
								"Next.js",
								"Typescript",
								"TailwindCSS",
								"Bootstrap",
							].map((item) => (
								<p
									key={item}
									className="bg-surface-dark px-3 pt-0.5 pb-1 text-xs rounded-full"
								>
									{item}
								</p>
							))}{" "}
						</div>
					</div>

					<div className="grid grid-cols-2 gap-4">
						<div className="duration-200 hover:bg-slate-900 border border-muted/5 rounded-xl p-8">
							<div className="w-fit p-2 bg-surface-dark rounded-lg border border-muted/5 hover:bg-primary/10 hover:border-primary/30 transition">
								<span className="text-gray-400 hover:text-primary transition">
									<FaDatabase />
								</span>
							</div>
							<h4 className="text-lg font-semibold mt-2">
								Backend
							</h4>
							<p className="text-sm text-muted-foreground my-2">
								Building secure, scalable, and maintainable
								backend systems using modern frameworks and
								databases, optimized for speed, stability, and
								long-term growth.
							</p>

							<div className="flex items-center flex-wrap gap-1.5 mt-4">
								{["Express.js", "Flask", "SQL", "MongoDB"].map(
									(item) => (
										<p
											key={item}
											className="bg-surface-dark px-3 pt-0.5 pb-1 text-xs rounded-full"
										>
											{item}
										</p>
									),
								)}{" "}
							</div>
						</div>

						<div className="duration-200 hover:bg-slate-900 border border-muted/5 rounded-xl p-8">
							<div className="w-fit p-2 bg-surface-dark rounded-lg border border-muted/5 hover:bg-primary/10 hover:border-primary/30 transition">
								<span className="text-gray-400 hover:text-primary transition">
									<FaTools />
								</span>
							</div>
							<h4 className="text-lg font-semibold mt-2">
								Others
							</h4>
							<p className="text-sm text-muted-foreground my-2">
								Leveraging a diverse set of modern tools for
								design, testing, collaboration, and
								productivity. From version control to debugging
								and optimization, I use the right tools to turn
								ideas into reliable, polished products.
							</p>

							<div className="flex items-center flex-wrap gap-1.5 mt-4">
								{[
									"AWS",
									"Docker",
									"Postman",
									"Figma",
									"Git",
								].map((item) => (
									<p
										key={item}
										className="bg-surface-dark px-3 pt-0.5 pb-1 text-xs rounded-full"
									>
										{item}
									</p>
								))}{" "}
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
