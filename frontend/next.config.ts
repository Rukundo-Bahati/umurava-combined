import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true, 
  swcMinify: true,
  experimental: {
    // optimizeFonts: true,
  },
};
export default nextConfig;
