import { getPage } from "@/lib/content";

import BlogCard from "../blog/BlogCard";
import Link from "next/link";

import { BsArrowDown } from "react-icons/bs";

export default function Blog() {
	const blogs = getPage("blog", 1, 2);

	return (
		<section className="bg-background-dark border-y border-muted/5 py-16">
			<div className="container">
				<div className="mb-12 flex justify-between items-center">
					<div className="w-5/6">
						<h2 className="text-4xl font-bold mb-2">
							Latest{" "}
							<span className="bg-linear-to-r from-primary to-purple-500 bg-clip-text text-transparent">
								Writing
							</span>
						</h2>
						<p className="text-sm font-light text-muted-foreground">
							Thoughts on modern development practices, emerging
							technologies, and the evolving future of the web,
							focused on performance, accessibility, and
							meaningful user experiences.
						</p>
					</div>
					<Link
						href="/blog"
						className="flex items-center gap-1.5 mt-px text-sm text-primary underline"
					>
						View all <BsArrowDown className="-rotate-90" />
					</Link>
				</div>

				<div className="grid grid-cols-2 gap-8">
					{blogs.items.map((blog) => (
						// @ts-ignore
						<BlogCard key={blog.slug} blog={blog} />
					))}
				</div>
			</div>
		</section>
	);
}
