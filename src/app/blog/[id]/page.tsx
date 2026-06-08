import type { Metadata } from "next";
import type { Blog } from "@/types/blog";

import { notFound } from "next/navigation";
import { getDocBySlug } from "@/lib/content";
import { MDXRemote } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import rehypeSlug from "rehype-slug";

import Image from "next/image";

import { FaRegClock } from "react-icons/fa6";

export async function generateMetadata({
	params,
}: {
	params: Promise<{ id: string }>;
}): Promise<Metadata> {
	const { id } = await params;
	try {
		const blog = getDocBySlug<Blog>("blog", id);

		const title = `${blog.title} | methupa.dev`;
		const description = blog.description;
		const url = `https://methupa.vercel.app/blog/${blog.slug}`;

		return {
			title,
			description,

			alternates: {
				canonical: url,
			},

			openGraph: {
				type: "article",
				url,
				title,
				description,
				images: [
					{
						url: blog.image,
						width: 1200,
						height: 630,
						alt: blog.title,
					},
				],
				authors: ["Methupa Perera", "Methupa Perera"],
				publishedTime: blog.posted_date,
				tags: blog.tags,
			},

			robots: {
				index: true,
				follow: true,
			},
		};
	} catch (error) {
		notFound();
	}
}

export default async function Blog({
	params,
}: {
	params: Promise<{ id: string }>;
}) {
	const { id } = await params;

	let blog;

	try {
		blog = getDocBySlug<Blog>("blog", id);
	} catch {
		notFound();
	}

	return (
		<div className="container" aria-labelledby="blog-title">
			<header>
				<ul
					className="mx-auto my-8 capitalize bg-primary/5 backdrop-blur-2xl text-primary w-fit px-3 py-1 rounded-full border border-primary text-xs"
					role="list"
					aria-label="Categories"
				>
					{blog.category.map((item, index) => (
						<li key={item} className="inline">
							{item}
							{!(blog.category.length === index + 1) && (
								<span>, </span>
							)}
						</li>
					))}
				</ul>

				<h1
					id="blog-title"
					className="text-center mx-auto md:w-3/4 text-5xl font-bold"
				>
					{blog.title}
				</h1>

				<p className="text-center text-sm text-muted-foreground mt-6 mx-auto w-5/6">
					{blog.description}
				</p>

				<div className="mt-8 text-muted-foreground text-sm flex md:flex-row flex-col justify-center gap-2 md:gap-12 items-center">
					<address className="not-italic flex justify-center items-center gap-2">
						<Image
							src="/profile.jpg"
							width={30}
							height={30}
							alt="Methupa Perera"
							className="rounded-full"
						/>
						<p className="text-muted">Methupa Perera</p>
					</address>

					<div className="flex gap-8 md:gap-12">
						<p>
							<time dateTime={blog.posted_date}>
								{blog.posted_date}
							</time>
						</p>

						<p
							className="flex items-center gap-1.5"
							aria-label={`Estimated reading time: ${blog.read}`}
						>
							<FaRegClock
								aria-hidden="true"
								className="text-primary"
							/>
							{blog.read} read
						</p>
					</div>
				</div>
			</header>

			<figure>
				<Image
					src={blog.image}
					width={1000}
					height={1000}
					alt={`${blog.title} cover image`}
					className="my-10 w-full object-cover border border-muted/5 rounded-2xl shadow-[0_0_10px] shadow-primary/20"
					sizes="(max-width: 768px) 100vw, 1000px"
					priority
				/>
			</figure>

			<article
				className="mx-auto max-w-2xl prose prose-invert leading-6"
				aria-label="Blog content"
			>
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
					<ul
						className="flex-wrap flex items-center gap-2"
						role="list"
						aria-label="Tags"
					>
						{blog.tags.map((tag) => (
							<li
								key={tag}
								className="list-none px-3 rounded border border-muted/5 text-xs py-1 pt-0.5 bg-slate-800"
							>
								#{tag}
							</li>
						))}
					</ul>
				</div>
			</article>
		</div>
	);
}
