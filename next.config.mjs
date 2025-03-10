/** @type {import('next').NextConfig} */const nextConfig = {
  images: {
    domains: [],
    unoptimized: true, // Completely disable image optimization to troubleshoot
    // You can add remotePatterns here if needed for external images
  },
};

export default nextConfig;
