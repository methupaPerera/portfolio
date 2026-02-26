import type { Blog } from "@/types/blog";

import Image from "next/image";
import Link from "next/link";

import { BsArrowDown } from "react-icons/bs";

export default function BlogCard({ blog }: { blog: Blog }) {
	return (
		<article className="bg-slate-900 border border-muted/5  p-4 grid grid-cols-3 gap-4 rounded-xl overflow-hidden">
			<Image
				src={blog.image}
				alt={`${blog.title} cover image`}
				width={220}
				height={200}
				className="w-full h-full rounded-lg object-cover object-center"
			/>

			<div className="col-span-2">
				<ul
					className="uppercase font-semibold text-primary text-xs mb-1"
					role="list"
				>
					{blog.category.map((item) => (
						<li key={item} className="inline">
							{item}
							<span>, </span>
						</li>
					))}
				</ul>

				<h3 className="font-semibold text-lg">
					<Link
						href={`/blog/${blog.slug}`}
						className="hover:underline"
					>
						{blog.title}
					</Link>
				</h3>

				<p className="text-xs text-muted-foreground line-clamp-2 my-2">
					{blog.description}
				</p>

				<div className="mb-2 mt-8 flex justify-between items-center">
					<p className="text-xs text-muted-foreground">
						<time dateTime={blog.posted_date}>
							{blog.posted_date}
						</time>{" "}
						• {blog.read}
					</p>

					<Link
						href={`/blog/${blog.slug}`}
						aria-label={`Read post: ${blog.title}`}
						className="flex items-center gap-2 text-sm underline text-primary"
					>
						Read Post{" "}
						<BsArrowDown
							aria-hidden="true"
							className="-rotate-90 mt-0.5"
						/>
					</Link>
				</div>
			</div>
		</article>
	);
}

export function BlogCardExtended({ blog }: { blog: Blog }) {
	return (
		<article className="bg-slate-900 border border-muted/5 grid grid-cols-1 md:grid-cols-3 gap-0 md:gap-8 rounded-xl overflow-hidden">
			<div className="relative w-full h-56 sm:h-64 md:h-full overflow-hidden md:rounded-lg">
				<Image
					src={blog.image}
					alt={`${blog.title} cover image`}
					width={900}
					height={600}
					className="w-full h-full object-cover object-center"
					priority
					sizes="(max-width: 768px) 100vw, 900px"
				/>
				<div className="pointer-events-none absolute inset-0 bg-linear-to-t from-slate-900 via-slate-900/30 to-transparent md:bg-linear-to-l" />
			</div>

			<div className="py-6 px-5 md:py-8 md:pb-7 md:pr-8 md:pl-0 md:col-span-2">
				<div className="flex flex-wrap gap-3 items-center text-xs text-muted-foreground">
					<p className="w-fit border border-muted/5 bg-primary/10 px-3 pt-0.5 pb-1 rounded-full">
						Featured
					</p>

					<p className="flex gap-2">
						<time dateTime={blog.posted_date}>
							{blog.posted_date}
						</time>{" "}
						• <span>{blog.read}</span>
					</p>
				</div>

				<h3 className="font-semibold text-xl md:text-2xl mt-4">
					<Link
						href={`/blog/${blog.slug}`}
						className="hover:underline"
					>
						{blog.title}
					</Link>
				</h3>

				<p className="text-xs text-muted-foreground line-clamp-3 my-2">
					{blog.description}
				</p>

				<div className="mt-6 md:mt-8 flex justify-between items-center">
					<Link
						href={`/blog/${blog.slug}`}
						aria-label={`Read full post: ${blog.title}`}
						className="flex items-center gap-2 text-sm underline text-primary"
					>
						Read Full Post{" "}
						<BsArrowDown
							aria-hidden="true"
							className="-rotate-90 mt-0.5"
						/>
					</Link>
				</div>
			</div>
		</article>
	);
}
