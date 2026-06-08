import { FaTools } from "react-icons/fa";
import { FaDatabase } from "react-icons/fa6";
import { MdTerminal } from "react-icons/md";

export default function TechStack() {
	return (
		<section
			id="skills"
			className="mt-10 border-y border-muted/5 bg-background-dark py-16"
			aria-labelledby="tech-stack-title"
		>
			<div className="container">
				<header>
					<h2
						id="tech-stack-title"
						className="text-center mb-2 text-4xl font-bold"
					>
						Skills
					</h2>

					<p className="text-center text-sm font-light text-muted-foreground mb-12">
						A selection of technologies I use to build performant
						and scalable web applications.
					</p>
				</header>

				<div className="flex flex-col gap-4">
					<article className="duration-200 hover:bg-slate-900 border border-muted/5 rounded-xl p-8">
						<div className="w-fit p-2 bg-surface-dark rounded-lg border border-muted/5 hover:bg-primary/10 hover:border-primary/30 transition">
							<span
								aria-hidden="true"
								className="text-gray-400 hover:text-primary transition"
							>
								<MdTerminal />
							</span>
						</div>

						<h3 className="text-lg font-semibold mt-2">
							Programming Languages
						</h3>

						<p className="text-sm text-muted-foreground my-2">
							I work with modern programming and scripting
							technologies to build web applications, backend
							systems, and interactive user interfaces. My focus
							is on writing clean, maintainable code and creating
							scalable digital products.
						</p>

						<ul
							className="flex items-center flex-wrap gap-1.5 mt-4"
							role="list"
						>
							{[
								"Typescript",
								"Python",
								"PHP",
								"HTML",
								"CSS",
								"JavaScript",
							].map((item) => (
								<li
									key={item}
									className="bg-surface-dark px-3 pt-0.5 pb-1 text-xs rounded-full"
								>
									{item}
								</li>
							))}
						</ul>
					</article>

					<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
						<article className="duration-200 hover:bg-slate-900 border border-muted/5 rounded-xl p-8">
							<div className="w-fit p-2 bg-surface-dark rounded-lg border border-muted/5 hover:bg-primary/10 hover:border-primary/30 transition">
								<span
									aria-hidden="true"
									className="text-gray-400 hover:text-primary transition"
								>
									<FaDatabase />
								</span>
							</div>

							<h3 className="text-lg font-semibold mt-2">
								Frameworks & Databases
							</h3>

							<p className="text-sm text-muted-foreground my-2">
								I use modern frameworks and libraries to build
								efficient and scalable web applications. I focus
								on writing clean, modular code and ensuring
								strong performance, reliability, and
								maintainability.
							</p>

							<ul
								className="flex items-center flex-wrap gap-1.5 mt-4"
								role="list"
							>
								{[
									"Next.js",
									"React.js",
									"Node.js",
									"Express.js",
									"Flask",
									"Django",
									"MongoDB",
									"MySQL",
									"PostgreSQL",
									"SQLite",
								].map((item) => (
									<li
										key={item}
										className="bg-surface-dark px-3 pt-0.5 pb-1 text-xs rounded-full"
									>
										{item}
									</li>
								))}
							</ul>
						</article>

						<article className="duration-200 hover:bg-slate-900 border border-muted/5 rounded-xl p-8">
							<div className="w-fit p-2 bg-surface-dark rounded-lg border border-muted/5 hover:bg-primary/10 hover:border-primary/30 transition">
								<span
									aria-hidden="true"
									className="text-gray-400 hover:text-primary transition"
								>
									<FaTools />
								</span>
							</div>

							<h3 className="text-lg font-semibold mt-2">
								Others
							</h3>

							<p className="text-sm text-muted-foreground my-2">
								Leveraging a diverse set of modern tools for
								design, testing, collaboration, and
								productivity. From version control to debugging
								and optimization, I use the right tools to turn
								ideas into reliable, polished products.
							</p>

							<ul
								className="flex items-center flex-wrap gap-1.5 mt-4"
								role="list"
							>
								{[
									"AWS",
									"Vercel",
									"Docker",
									"Postman",
									"Figma",
									"Git",
									"Photoshop",
									"Lightroom",
								].map((item) => (
									<li
										key={item}
										className="bg-surface-dark px-3 pt-0.5 pb-1 text-xs rounded-full"
									>
										{item}
									</li>
								))}
							</ul>
						</article>
					</div>
				</div>
			</div>
		</section>
	);
}
