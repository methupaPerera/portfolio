"use client";

import type { BlogResponse } from "@/types/blog";
import { useEffect, useState } from "react";

export default function Blog() {
	const [blogs, setBlogs] = useState<BlogResponse | null>(null);

	async function fetchBlogs(page: number = 1) {
		fetch(
			`${process.env.NEXT_PUBLIC_API_URL}/api/content?type=blog&page=${page}`,
		)
			.then((res) => res.json())
			.then((data) => {
				if (blogs) {
					setBlogs({
						...blogs,
						items: [...blogs.items, ...data.items],
						page: data.page,
						hasMore: data.hasMore,
					});
				} else {
					setBlogs(data);
				}
			});
	}

	console.log(blogs);

	useEffect(() => {
		fetchBlogs();
	}, []);

	return (
		<div className="container">
			<h1 className="mt-12 text-4xl font-bold">
				Writing <span className="text-primary">&</span> Thoughts
			</h1>
			<p className="pt-2 text-sm text-muted-foreground w-5/6">
				Exploring the frotiers of development, and scalable
				architecture. A collection of tutorials, case studies and
				personal insights.
			</p>
		</div>
	);
}
