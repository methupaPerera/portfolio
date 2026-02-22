import { getPage } from "@/lib/content";

import BlogCard from "../blog/BlogCard";
import Link from "next/link";

import { BsArrowDown } from "react-icons/bs";

export default function Blog() {
	const blogs = getPage("blog", 1, 2);

	return (
		<section
			className="bg-background-dark border-y border-muted/5 py-16"
			aria-labelledby="latest-writing-title"
		>
			<div className="container">
				<header className="flex flex-col items-end ms-auto w-5/6 mb-12">
					<h2
						id="latest-writing-title"
						className="text-4xl font-bold mb-2"
					>
						Latest{" "}
						<span className="bg-linear-to-r from-primary to-purple-500 bg-clip-text text-transparent">
							Writing
						</span>
					</h2>
					<p className="text-sm text-end font-light text-muted-foreground">
						Thoughts, lessons, and ideas from exploring creativity,
						growth, and building meaningful experiences in a
						changing digital world.
					</p>
				</header>

				<ul className="grid md:grid-cols-2 gap-8" role="list">
					{blogs.items.map((blog) => (
						<li key={blog.slug}>
							{/* @ts-ignore */}
							<BlogCard blog={blog} />
						</li>
					))}
				</ul>

				<nav
					className="flex justify-end mt-8"
					aria-label="Blog navigation"
				>
					<Link
						href="/blog"
						aria-label="View all blog posts"
						className="flex items-center gap-1.5 mt-px text-sm text-primary underline"
					>
						View all{" "}
						<BsArrowDown
							className="-rotate-90 mt-0.5"
							aria-hidden="true"
						/>
					</Link>
				</nav>
			</div>
		</section>
	);
}
