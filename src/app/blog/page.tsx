"use client";

import type { BlogResponse } from "@/types/blog";

import { useEffect, useState } from "react";

import BlogCard, { BlogCardExtended } from "@/components/blog/BlogCard";
import { Button } from "@/components/ui/button";
import { LoaderOne } from "@/components/ui/loader";
import { cn } from "@/lib/utils";

import { ChevronDown } from "lucide-react";

export default function Blogs() {
	const [filter, setFilter] = useState<string>("");
	const [blogs, setBlogs] = useState<BlogResponse | null>(null);

	async function fetchBlogs(page: number = 1, reset: boolean = false) {
		fetch(
			`${process.env.NEXT_PUBLIC_API_URL}/api/content?type=blog&page=${page}&category=${encodeURIComponent(
				filter,
			)}`,
		)
			.then((res) => res.json())
			.then((data) => {
				setBlogs((prev) => {
					if (reset || !prev) {
						return data;
					}

					return {
						...prev,
						items: [...prev.items, ...data.items],
						page: data.page,
						hasMore: data.hasMore,
					};
				});
			});
	}

	useEffect(() => {
		fetchBlogs(blogs?.page ?? 1, true);
	}, [filter]);

	return (
		<div className="mb-12 container" aria-busy={!blogs}>
			<header>
				<h1 className="mt-12 text-4xl font-bold">
					Writing <span className="text-primary">&</span> Thoughts
				</h1>

				<p className="mb-8 pt-2 text-sm text-muted-foreground w-full md:w-5/6">
					Thoughts, lessons, and ideas from exploring creativity,
					growth, and building meaningful experiences in a changing
					digital world.
				</p>
			</header>

			{!blogs && (
				<div
					className="flex justify-center my-32"
					role="status"
					aria-live="polite"
				>
					<LoaderOne />
				</div>
			)}

			{blogs && (
				<section aria-label="Featured post">
					<BlogCardExtended blog={blogs.items[0]} />
				</section>
			)}

			<div className="mt-8 w-full grid grid-cols-1 md:grid-cols-4 gap-8">
				<section
					className="order-2 md:order-1 grid grid-cols-1 gap-4 md:col-span-3"
					aria-labelledby="all-posts-title"
				>
					<h2 id="all-posts-title" className="sr-only">
						All posts
					</h2>

					<ul className="grid grid-cols-1 gap-4" role="list">
						{blogs &&
							blogs.items.slice(1).map((blog) => (
								<li key={blog.slug}>
									<BlogCard blog={blog} />
								</li>
							))}
					</ul>

					<div className="flex justify-center mt-4">
						{blogs && (
							<Button
								variant="link"
								onClick={() => fetchBlogs(blogs.page + 1)}
								className="rounded-full font-normal"
								disabled={!blogs.hasMore}
								aria-label="Load more blog posts"
							>
								Load More Blogs{" "}
								<ChevronDown aria-hidden="true" />
							</Button>
						)}
					</div>
				</section>

				<aside className="order-1 md:order-2 w-full md:col-span-1 min-w-0">
					<nav
						className="w-full bg-slate-900 border border-muted/5 p-4 rounded-lg"
						aria-labelledby="categories-title"
					>
						<h2 id="categories-title" className="font-semibold">
							Categories
						</h2>

						<div className="flex flex-wrap gap-1.5 mt-3">
							{blogs &&
								["", ...blogs.filter.availableCategories].map(
									(item) => (
										<button
											key={item}
											type="button"
											className={cn(
												"cursor-pointer capitalize w-fit border border-muted/5 bg-primary/10 px-3 pt-0.5 pb-1 text-xs rounded-full transition",
												filter === item &&
													"bg-primary text-white",
											)}
											aria-pressed={filter === item}
											onClick={() => setFilter(item)}
										>
											{item || "Any"}
										</button>
									),
								)}
						</div>
					</nav>
				</aside>
			</div>
		</div>
	);
}
