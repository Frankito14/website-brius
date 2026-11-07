import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true, // <-- Añade esta línea
  },
};

export default nextConfig;
