/** @type {import('next').NextConfig} */

import path from 'mode:path';

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  sassOptions: {
    includePaths: [path.join(__dirname, 'src/styles')],
  },
  compiler: {
    removeConsole: true,
  },
};

module.exports = nextConfig;
