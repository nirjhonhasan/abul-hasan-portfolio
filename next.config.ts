import type { NextConfig } from "next";

// Project images are served by the portfolio server (API_URL), so allow that host for next/image.
const apiUrl = process.env.API_URL ? new URL(process.env.API_URL) : null;

const nextConfig: NextConfig = {
  images: {
    qualities: [75, 85],
    // Next.js blocks optimizing images from localhost by default; allow it only while developing.
    dangerouslyAllowLocalIP: process.env.NODE_ENV !== "production",
    remotePatterns: [
      // imgbb image links (i.ibb.co / i.ibb.co.com)
      { protocol: "https", hostname: "i.ibb.co" },
      { protocol: "https", hostname: "i.ibb.co.com" },
      { protocol: "https", hostname: "ibb.co" },
      { protocol: "https", hostname: "ibb.co.com" },
      ...(apiUrl
        ? [{ protocol: apiUrl.protocol === "https:" ? ("https" as const) : ("http" as const), hostname: apiUrl.hostname, port: apiUrl.port }]
        : []),
    ],
  },
  /* config options here */
  experimental: {
    agentFeedback: true,
  },
  cacheComponents: true,
  partialPrefetching: true,
  reactCompiler: true,
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
