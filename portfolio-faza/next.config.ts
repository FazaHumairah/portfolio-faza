import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Mendukung gambar dari domain eksternal jika diperlukan
  images: {
    remotePatterns: [],
    // Unoptimized tidak diperlukan karena kita pakai gambar lokal di /public
  },
};

export default nextConfig;
