/**
 * Static export for GitHub Pages.
 * For a project site (https://user.github.io/repo), NEXT_PUBLIC_BASE_PATH=/repo is set by the deploy workflow.
 * For a user site (https://user.github.io), it stays empty.
 */
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || ''

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath,
  trailingSlash: true,
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig
