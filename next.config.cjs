/** @type {import('next').NextConfig} */

import path from 'mode:path';

const nextConfig = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
};

module.exports = nextConfig;
