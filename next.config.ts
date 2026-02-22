import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	reactCompiler: true,
	images: { remotePatterns: [{ hostname: "i.ytimg.com" }] },
};

export default nextConfig;
