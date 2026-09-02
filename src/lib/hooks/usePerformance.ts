"use client";

import { useEffect, useState } from "react";
import { isClient } from "@/lib/utils";

export type PerformanceTier = "high" | "medium" | "low";

export interface PerformanceProfile {
  tier: PerformanceTier;
  /** Whether to enable parallax effects */
  enableParallax: boolean;
  /** Whether to enable custom cursor */
  enableCursor: boolean;
  /** Whether to enable smooth scroll (Lenis) */
  enableSmoothScroll: boolean;
  /** Whether to enable video autoplay */
  enableVideo: boolean;
  /** Whether to enable complex animations */
  enableAnimations: boolean;
  /** Whether reduced motion is preferred */
  reducedMotion: boolean;
}

/**
 * Detects device performance capabilities and returns
 * a performance profile with feature flags.
 */
export function usePerformance(): PerformanceProfile {
  const [profile, setProfile] = useState<PerformanceProfile>({
    tier: "high",
    enableParallax: true,
    enableCursor: true,
    enableSmoothScroll: true,
    enableVideo: true,
    enableAnimations: true,
    reducedMotion: false,
  });

  useEffect(() => {
    if (!isClient) return;

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    // Detect hardware capabilities
    const cores = navigator.hardwareConcurrency || 4;
    const memory = (navigator as { deviceMemory?: number }).deviceMemory || 8;
    const connection = (navigator as { connection?: { effectiveType?: string } })
      .connection;
    const connectionType = connection?.effectiveType || "4g";
    const isTouch =
      "ontouchstart" in window || navigator.maxTouchPoints > 0;
    const isSlow = connectionType === "slow-2g" || connectionType === "2g";

    let tier: PerformanceTier = "high";

    if (reducedMotion || cores < 4 || memory < 4 || isSlow) {
      tier = "low";
    } else if (cores < 8 || memory < 8 || connectionType === "3g") {
      tier = "medium";
    }

    setProfile({
      tier,
      enableParallax: tier === "high",
      enableCursor: tier !== "low" && !isTouch,
      enableSmoothScroll: tier !== "low" && !reducedMotion,
      enableVideo: tier !== "low" && !isSlow,
      enableAnimations: !reducedMotion,
      reducedMotion,
    });
  }, []);

  return profile;
}
