import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "skillicons.dev",
      },
    ],
  },
};
// next.config.js
module.exports = {
  compiler: {
    removeConsole: process.env.NODE_ENV === "production",
  },
};
export default nextConfig;
