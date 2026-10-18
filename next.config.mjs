/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
  },
  async redirects() {
    return [{ source: "/projects/wikillm", destination: "/projects/agent-tooling", permanent: true }];
  },
};

export default nextConfig;
