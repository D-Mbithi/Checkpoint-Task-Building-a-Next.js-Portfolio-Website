import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  watchOptions: {
    pollIntervalMs: 30_000,
  },
};

export default nextConfig;
