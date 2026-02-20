import type { Blog } from "@/types/blog";

import Image from "next/image";
import Link from "next/link";

import { BsArrowDown } from "react-icons/bs";

export default function BlogCard({ blog }: { blog: Blog }) {
	return (
		<div className="bg-slate-900 border border-muted/5  p-4 grid grid-cols-3 gap-4 rounded-xl overflow-hidden">
			<Image
				src={blog.image}
				alt="blog image"
				width={220}
				height={200}
				className="w-full h-full rounded-lg object-cover object-center"
			/>
			<div className="col-span-2">
				<p className="uppercase font-semibold text-primary text-xs mb-1">
					{blog.category.map((item, index) => {
						return (
							item +
							(blog.category.length === index + 1 ? "" : ", ")
						);
					})}
				</p>
				<h5 className="font-semibold text-lg">{blog.title}</h5>
				<p className="text-xs text-muted-foreground line-clamp-2 my-2">
					{blog.description}
				</p>

				<div className="mb-2 mt-8 flex justify-between items-center">
					<div className="text-xs text-muted-foreground">
						{blog.posted_date} • {blog.read}
					</div>
					<Link
						href={`/blog/${blog.slug}`}
						className="flex items-center gap-2 text-sm underline text-primary"
					>
						Read Post <BsArrowDown className="-rotate-90 mt-0.5" />
					</Link>
				</div>
			</div>
		</div>
	);
}

export function BlogCardExtended({ blog }: { blog: Blog }) {
	return (
		<div className="bg-slate-900 border border-muted/5 grid grid-cols-3 gap-8 rounded-xl overflow-hidden">
			<div className="relative w-full h-full overflow-hidden rounded-lg">
				<Image
					src={blog.image}
					alt="blog image"
					width={220}
					height={200}
					className="w-full h-full object-cover object-center"
				/>

	
				<div className="pointer-events-none absolute inset-0 bg-linear-to-l from-slate-900 to-transparent" />
			</div>
			<div className="py-8 pb-7 pr-8 col-span-2">
				<div className="flex gap-4 items-center text-xs text-muted-foreground">
					<p className="w-fit border border-muted/5 bg-primary/10 px-3 pt-0.5 pb-1 text-xs rounded-full">
						Featured
					</p>
					<span className="flex gap-3">
						<span>{blog.posted_date}</span> •{" "}
						<span>{blog.read}</span>
					</span>
				</div>

				<h5 className="font-semibold text-2xl mt-4">{blog.title}</h5>
				<p className="text-xs text-muted-foreground line-clamp-3 my-2">
					{blog.description}
				</p>

				<div className="mt-8 flex justify-between items-center">
					<Link
						href={`/blog/${blog.slug}`}
						className="flex items-center gap-2 text-sm underline text-primary"
					>
						Read Full Post{" "}
						<BsArrowDown className="-rotate-90 mt-0.5" />
					</Link>
				</div>
			</div>
		</div>
	);
}
