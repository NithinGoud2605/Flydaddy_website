import { clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs) {
  return twMerge(clsx(inputs))
}

// Helper function to get correct asset paths for GitHub Pages
// Vite automatically handles base path for public folder assets
export function getAssetPath(path) {
  // Remove leading slash if present
  const cleanPath = path.startsWith('/') ? path.slice(1) : path
  // Vite's BASE_URL already includes the trailing slash
  // For public folder assets, we just need the path
  return `${import.meta.env.BASE_URL}${cleanPath}`
}
