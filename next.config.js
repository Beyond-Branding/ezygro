/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        port: '',
        pathname: '/daoju0r3c/**',
      },
    ],
  },
  trailingSlash: false,
  output: 'export',
  distDir: 'dist',
  experimental: {
    optimizePackageImports: ['lucide-react', '@emailjs/browser'],
  },
  poweredByHeader: false,
  compress: true,
};

module.exports = nextConfig;
