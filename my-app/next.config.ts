import type { NextConfig } from "next";

const isGithubPages = process.env.GITHUB_PAGES === "true";
const isDocker = process.env.DOCKER === "true";

const nextConfig: NextConfig = {
  reactCompiler: true,

  output: isDocker ? "standalone" : "export",

  basePath: isGithubPages ? "/lab-1-setup" : "",
  assetPrefix: isGithubPages ? "/lab-1-setup/" : "",
};

export default nextConfig;