/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'pedidosdev.sfo3.digitaloceanspaces.com',
        port: '',
        pathname: '/banners-companies/**',
      },
    ],
    unoptimized: true
  },
}

module.exports = nextConfig
