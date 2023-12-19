/** @type {import('next').NextConfig} */

import path from 'path';

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
};

module.exports = nextConfig;
