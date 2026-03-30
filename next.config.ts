import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "ugklracing.com",
        pathname: "/wp-content/uploads/**",
      },
    ],
  },
};

export default nextConfig;
