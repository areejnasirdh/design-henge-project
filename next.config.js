/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: { scrollRestoration: false },
  images: {
    domains: ['res.cloudinary.com'],
  },
};

module.exports = nextConfig;
