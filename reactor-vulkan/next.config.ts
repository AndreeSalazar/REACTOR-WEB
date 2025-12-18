import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  reactCompiler: true,
  // Ensure trailing slashes for static export compatibility
  trailingSlash: true,
};

export default nextConfig;
