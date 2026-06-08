import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Methupa Perera - Stay Curious | Blog",

	robots: {
		index: true,
		follow: true,
	},
};

export default function Layout({ children }: { children: React.ReactNode }) {
	return <>{children}</>;
}
