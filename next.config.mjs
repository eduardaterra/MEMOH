import path from 'path'
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

/** @type {import('next').NextConfig} */
const nextConfig = {
    sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  images: {
     minimumCacheTTL: 1200,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
            {
        protocol: 'https',
        hostname: 'images.prismic.io',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
