import type { NextConfig } from "next";
import { withYak } from "next-yak/withYak";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  output: "export",
  distDir: "docs",
  basePath: "/css-glyph-fit-example",
};

export default withYak(nextConfig);
