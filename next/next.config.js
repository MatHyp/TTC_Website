/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['s2.ttc.ovh'],
  },
}

module.exports = nextConfig;
