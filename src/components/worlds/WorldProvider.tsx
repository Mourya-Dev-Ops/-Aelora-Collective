"use client";

import { createContext, useContext, useEffect, useRef, type ReactNode } from "react";
import { type AeloraWorld, getWorldBySlug } from "@/lib/worlds";

/* ═══════════════════════════════════════════════════════════
   WORLD PROVIDER
   Wraps world routes and injects world-specific CSS variables
   and configuration via React Context.
   ═══════════════════════════════════════════════════════════ */

const WorldContext = createContext<AeloraWorld | null>(null);

interface WorldProviderProps {
  slug: string;
  children: ReactNode;
}

export default function WorldProvider({ slug, children }: WorldProviderProps) {
  const world = getWorldBySlug(slug) ?? null;
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!world || !wrapperRef.current) return;

    const el = wrapperRef.current;

    // Inject world-level CSS custom properties
    el.style.setProperty("--world-accent", world.mood.accentColor);
    el.style.setProperty("--world-secondary", world.mood.secondaryColor);
    el.style.setProperty("--world-overlay", world.mood.overlayColor);

    // Set font override if the world uses a different display font
    el.style.setProperty("font-family", `var(${world.typography.displayFont.replace("var(", "").replace(")", "")}), serif`);

    return () => {
      el.style.removeProperty("--world-accent");
      el.style.removeProperty("--world-secondary");
      el.style.removeProperty("--world-overlay");
      el.style.removeProperty("font-family");
    };
  }, [world]);

  return (
    <WorldContext.Provider value={world}>
      <div ref={wrapperRef} className="min-h-screen">
        {children}
      </div>
    </WorldContext.Provider>
  );
}

/**
 * Access the current world configuration.
 * Returns null if not inside a WorldProvider.
 */
export function useWorldTheme(): AeloraWorld | null {
  return useContext(WorldContext);
}
