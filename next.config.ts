import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: ["example.com", "cdn.sanity.io"], // Add external domains here
  },
};

export default nextConfig;
