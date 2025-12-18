import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  // Vercel handles optimization automatically, so we don't need 'unoptimized: true'
  // We also don't need 'output: export' as Vercel supports standard Next.js features
};

export default nextConfig;
