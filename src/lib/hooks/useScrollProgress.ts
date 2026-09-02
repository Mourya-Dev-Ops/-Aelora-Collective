"use client";

import { useEffect, useState } from "react";
import { isClient } from "@/lib/utils";

/**
 * Tracks scroll progress as a value between 0 and 1.
 * Useful for scroll-driven animations and parallax.
 */
export function useScrollProgress(): number {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (!isClient) return;

    const updateProgress = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = docHeight > 0 ? scrollTop / docHeight : 0;
      setProgress(Math.min(Math.max(scrolled, 0), 1));
    };

    window.addEventListener("scroll", updateProgress, { passive: true });
    updateProgress();

    return () => window.removeEventListener("scroll", updateProgress);
  }, []);

  return progress;
}
