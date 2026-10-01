const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? ''

/** Prefixes files in /public with the GitHub Pages base path (next/image and plain links don't do this in static export). */
export function asset(path: string) {
  return `${basePath}${path}`
}
