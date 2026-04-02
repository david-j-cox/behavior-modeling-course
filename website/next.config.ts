import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  output: "standalone",
  outputFileTracingRoot: path.join(__dirname, ".."),
  transpilePackages: [
    "unified",
    "remark-parse",
    "remark-gfm",
    "remark-math",
    "remark-rehype",
    "rehype-katex",
    "rehype-stringify",
  ],
};

export default nextConfig;
