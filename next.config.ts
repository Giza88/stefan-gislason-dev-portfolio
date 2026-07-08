import type { NextConfig } from "next";

const siteUrl = "https://stefangislason.online";
const legacyVercelHost = "stefan-gislason-dev-portfolio.vercel.app";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.stefangislason.online" }],
        destination: `${siteUrl}/:path*`,
        permanent: true,
      },
      {
        source: "/:path*",
        has: [{ type: "host", value: legacyVercelHost }],
        destination: `${siteUrl}/:path*`,
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
