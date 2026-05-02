import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  experimental: {
    turbopackTreeShaking: true,
  },
};

export default nextConfig;
