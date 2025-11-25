import { clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs) {
  return twMerge(clsx(inputs))
}

// Helper function to get correct asset paths
// For Vercel, we can use simple paths since base is '/'
export function getAssetPath(path) {
  // Ensure path starts with /
  return path.startsWith('/') ? path : `/${path}`
}
