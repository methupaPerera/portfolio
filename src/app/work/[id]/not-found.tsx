import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";

export default function NotFound() {
	return (
		<div className="container my-20" aria-labelledby="not-found-title">
			<section className="bg-slate-900 border border-muted/5 rounded-2xl p-8 text-center">
				<h1 id="not-found-title" className="text-4xl font-bold">
					Work not found
				</h1>

				<p className="mt-3 text-sm text-muted-foreground">
					The work you&apos;re looking for doesn&apos;t exist, or it
					moved.
				</p>

				<nav
					className="mt-8 flex items-center justify-center gap-2"
					aria-label="Not found navigation"
				>
					<Link href="/work" className={buttonVariants()}>
						Back to Work Page
					</Link>

					<Link
						href="/"
						className={buttonVariants({ variant: "secondary" })}
					>
						Go Home
					</Link>
				</nav>
			</section>
		</div>
	);
}
