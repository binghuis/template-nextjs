/** @type {import('next').NextConfig} */

const path = require('path');

const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  sassOptions: {
    includePaths: [path.join(__dirname, 'src/styles')],
  },
  compiler: {
    removeConsole: true,
  },
  experimental: {
    typedRoutes: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: '**.placekitten.com',
        port: '',
        pathname: '',
      },
    ],
  },
};

module.exports = nextConfig;
