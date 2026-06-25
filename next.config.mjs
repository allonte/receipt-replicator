/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  allowedDevOrigins: [
    '*.lovableproject.com',
    '*.lovable.app',
    '*.lovable.dev',
  ],
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig
