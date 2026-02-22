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
	title: "Geeky Story - Stay Curious",
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
		"Geeky Story",
	],

	authors: [{ name: "Methupa Perera" }, { name: "Geeky Story" }],

	openGraph: {
		title: "Geeky Story - Stay Curious",
		description:
			"This is the place to explore ideas, creativity, and personal growth, while sharing real experiences, lessons learned, and the mindset behind building a meaningful and focused life.",
		url: "https://geekystory.com",
		siteName: "Geeky Story",
		images: [
			{
				url: "https://geekystory.com/og.png",
				width: 1280,
				height: 720,
				alt: "Geeky Story Website Preview",
			},
		],
		type: "website",
	},

	icons: {
		icon: "/profile.jpg",
		shortcut: "/profile.jpg",
		apple: "/profile.jpg",
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
