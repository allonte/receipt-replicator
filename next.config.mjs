import path from 'node:path'
import { fileURLToPath } from 'node:url'

const projectRoot = path.dirname(fileURLToPath(import.meta.url))

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  allowedDevOrigins: [
    '1ed27f76-5934-4fd0-b902-5e9e745ef4ea.lovableproject.com',
    'id-preview--1ed27f76-5934-4fd0-b902-5e9e745ef4ea.lovable.app',
    '*.lovableproject.com',
    '*.lovable.app',
    '*.lovable.dev',
  ],
  turbopack: {
    root: projectRoot,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig
