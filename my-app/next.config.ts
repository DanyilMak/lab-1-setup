import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  output: "export",
  basePath: "/lab-1-setup",
  assetPrefix: "/lab-1-setup/",
};

export default nextConfig;