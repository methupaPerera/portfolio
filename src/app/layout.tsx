import type { Metadata } from "next";

import { Geist, Geist_Mono } from "next/font/google";
import NavBar from "@/components/nav-bar";
import Footer from "@/components/footer";

import "./globals.css";

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "Methupa Perera - Stay Curious",
	description:
		"This is the place to explore ideas, creativity, and personal growth, while sharing real experiences, lessons learned, and the mindset behind building a meaningful and focused life.",
	keywords: [
		"web development",
		"portfolio",
		"youtuber",
		"tech youtuber",
		"blog",
		"coding tutorials",
		"full stack developer",
		"Methupa Perera",
	],

	authors: [{ name: "Methupa Perera" }, { name: "Methupa Perera" }],

	openGraph: {
		title: "Methupa Perera - Stay Curious",
		description:
			"This is the place to explore ideas, creativity, and personal growth, while sharing real experiences, lessons learned, and the mindset behind building a meaningful and focused life.",
		url: "https://geekystory.com",
		siteName: "Methupa Perera",
		images: [
			{
				url: "https://geekystory.com/og.png",
				width: 1280,
				height: 720,
				alt: "Methupa Perera Website Preview",
			},
		],
		type: "website",
	},

	icons: {
		icon: "/favicon.png",
		shortcut: "/favicon.png",
		apple: "/favicon.png",
	},

	robots: {
		index: true,
		follow: true,
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body
				className={`${geistSans.variable} ${geistMono.variable} antialiased`}
			>
				<NavBar />
				<main className="pt-16">{children}</main>
				<Footer />
			</body>
		</html>
	);
}
