/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  assetPrefix: process.env.NODE_ENV === 'production' ? '/mrg-caixas-termicas' : '',
  basePath: process.env.NODE_ENV === 'production' ? '/mrg-caixas-termicas' : '',
  experimental: {
    optimizePackageImports: ['lucide-react', '@heroicons/react']
  }
}

module.exports = nextConfig