import type { Blog } from "@/types/blog";

import { getDocBySlug } from "@/lib/content";
import { MDXRemote } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import rehypeSlug from "rehype-slug";

import Image from "next/image";

import { FaRegClock } from "react-icons/fa6";

export default async function Blog({
	params,
}: {
	params: Promise<{ id: string }>;
}) {
	const { id } = await params;
	const blog = getDocBySlug<Blog>("blog", id);

	return (
		<div className="container">
			<p className="mx-auto my-8 capitalize bg-primary/5 backdrop-blur-2xl text-primary w-fit px-3 py-1 rounded-full border border-primary text-xs">
				{blog.category.map((item, index) => {
					return (
						item + (blog.category.length === index + 1 ? "" : ", ")
					);
				})}
			</p>

			<h1 className="text-center mx-auto w-3/4 text-5xl font-bold">
				{blog.title}
			</h1>

			<div className="mt-8 text-muted-foreground text-sm flex justify-center gap-6 items-center">
				<div className="flex justify-center items-center gap-2">
					<Image
						src="/profile.jpg"
						width={30}
						height={30}
						alt="my profile image"
						className="rounded-full"
					/>
					<p className="text-muted">Methupa Perera</p>
				</div>
				•<p>{blog.posted_date}</p>•
				<p className="flex items-center gap-1.5">
					<FaRegClock className="text-primary" />
					{blog.read} read
				</p>
			</div>

			<Image
				src={blog.image}
				width={1000}
				height={1000}
				alt={blog.title}
				className="my-10 w-full object-cover border border-muted/5 rounded-2xl shadow-[0_0_10px] shadow-primary/20"
			/>

			<article className="mx-auto max-w-2xl prose prose-invert leading-6">
				<MDXRemote
					source={blog.content}
					options={{
						mdxOptions: {
							remarkPlugins: [remarkGfm],
							rehypePlugins: [rehypeSlug],
						},
					}}
				/>
				<div className="mb-8 border-t border-t-muted/5 flex items-center gap-2">
					{blog.tags.map((tag) => (
						<p
							key={tag}
							className="px-3 rounded border border-muted/5 text-xs py-1 pt-0.5 bg-slate-800"
						>
							#{tag}
						</p>
					))}
				</div>
			</article>
		</div>
	);
}
