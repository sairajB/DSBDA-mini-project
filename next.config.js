/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    // Next.js 15 requires serverActions to be an object if specified
    serverActions: {
      allowedOrigins: ["*"],
    },
  },
  // This was moved out of experimental in Next.js 15
  serverExternalPackages: ["mongoose"],
  images: {
    domains: ["m.media-amazon.com"],
  },
};

module.exports = nextConfig;
