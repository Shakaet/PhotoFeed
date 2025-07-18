/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'i.ibb.co',
      },
      {
        protocol: 'https',
        hostname: 'source.unsplash.com', // ✅ Added this
      },
      {
        protocol: 'https',
        hostname: 'i.pravatar.cc', // ✅ Added this
      },
    ],
  },
};

export default nextConfig;
