import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Merge Tailwind CSS classes with clsx and tailwind-merge.
 * Handles conditional classes and deduplication.
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Responsive breakpoint values (matches Tailwind defaults).
 */
export const breakpoints = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  "2xl": 1536,
} as const;

/**
 * Check if we're running on the client side.
 */
export const isClient = typeof window !== "undefined";

/**
 * Check if the device is touch-capable.
 */
export function isTouchDevice(): boolean {
  if (!isClient) return false;
  return "ontouchstart" in window || navigator.maxTouchPoints > 0;
}
