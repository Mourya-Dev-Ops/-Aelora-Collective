/* ═══════════════════════════════════════════════════════════
   AELORA COLLECTIVE — WORLD DEFINITIONS
   Each event category is a distinct Aelora World.
   "One World. Many Celebrations."
   ═══════════════════════════════════════════════════════════ */

export interface WorldMood {
  /** World-specific accent color (CSS hex) */
  accentColor: string;
  /** World-specific secondary color (CSS hex) */
  secondaryColor: string;
  /** Overall warmth: warm worlds lean into golds/ambers, cool into silvers/blues */
  temperature: "warm" | "cool" | "neutral";
  /** CSS background overlay for the world atmosphere */
  overlayColor: string;
}

export interface WorldMotion {
  /** Pacing of animations within this world */
  rhythm: "slow" | "medium" | "dynamic";
  /** Framer Motion spring stiffness override */
  springStiffness: number;
  /** Lenis scroll speed multiplier */
  scrollSpeed: number;
}

export interface WorldTypography {
  /** CSS variable reference for display font */
  displayFont: string;
  /** Scale multiplier for headings (1 = default, >1 = larger) */
  headingScale: number;
  /** Letter spacing adjustment for display text */
  displayTracking: string;
}

export interface WorldHero {
  /** Path to hero image in /public */
  image: string;
  /** Optional path to hero video */
  video?: string;
  /** Hero overlay opacity (0-1) */
  overlayOpacity: number;
}

export interface AeloraWorld {
  /** URL slug: /worlds/[slug] */
  slug: string;
  /** Display title */
  title: string;
  /** Short tagline */
  subtitle: string;
  /** Creative concept name */
  concept: string;
  /** Full concept description */
  description: string;
  /** Story arc section labels (scroll-driven narrative) */
  storyStructure: string[];
  /** Visual mood configuration */
  mood: WorldMood;
  /** Motion configuration */
  motion: WorldMotion;
  /** Typography configuration */
  typography: WorldTypography;
  /** Hero configuration */
  hero: WorldHero;
}

// ─── WORLD DEFINITIONS ──────────────────────────────────

export const worlds: AeloraWorld[] = [
  {
    slug: "weddings",
    title: "Weddings",
    subtitle: "The Memory Film",
    concept: "THE MEMORY FILM",
    description:
      "Cinematic scroll-controlled storytelling through the most important day of your life. Every frame, every moment — designed to be remembered forever.",
    storyStructure: ["Before", "Arrival", "Promise", "Together", "Celebration"],
    mood: {
      accentColor: "#C9A96E",
      secondaryColor: "#2A2218",
      temperature: "warm",
      overlayColor: "rgba(12, 10, 8, 0.3)",
    },
    motion: {
      rhythm: "slow",
      springStiffness: 50,
      scrollSpeed: 0.8,
    },
    typography: {
      displayFont: "var(--font-bodoni)",
      headingScale: 1.1,
      displayTracking: "-0.04em",
    },
    hero: {
      image: "/hyderabad_wedding.png",
      overlayOpacity: 0.3,
    },
  },
  {
    slug: "engagements",
    title: "Engagements",
    subtitle: "The Reveal",
    concept: "THE REVEAL",
    description:
      "Anticipation, intimacy, and gradual visual revelation. The story of two people choosing each other — told with restraint and beauty.",
    storyStructure: ["Anticipation", "The Moment", "Intimacy", "Celebration"],
    mood: {
      accentColor: "#D4B896",
      secondaryColor: "#1E1A16",
      temperature: "warm",
      overlayColor: "rgba(12, 10, 8, 0.25)",
    },
    motion: {
      rhythm: "slow",
      springStiffness: 60,
      scrollSpeed: 0.9,
    },
    typography: {
      displayFont: "var(--font-bodoni)",
      headingScale: 1.0,
      displayTracking: "-0.03em",
    },
    hero: {
      image: "/goa_engagement.png",
      overlayOpacity: 0.25,
    },
  },
  {
    slug: "birthdays",
    title: "Birthdays",
    subtitle: "Time / Energy",
    concept: "TIME / ENERGY",
    description:
      "Dynamic editorial storytelling using rhythm, snapshots, and moments of pure joy. Every year deserves to feel monumental.",
    storyStructure: ["Arrival", "Energy", "Moments", "Toast"],
    mood: {
      accentColor: "#E8C077",
      secondaryColor: "#1C1810",
      temperature: "warm",
      overlayColor: "rgba(12, 10, 8, 0.2)",
    },
    motion: {
      rhythm: "dynamic",
      springStiffness: 120,
      scrollSpeed: 1.1,
    },
    typography: {
      displayFont: "var(--font-bodoni)",
      headingScale: 1.05,
      displayTracking: "-0.03em",
    },
    hero: {
      image: "/hyderabad_wedding.png",
      overlayOpacity: 0.2,
    },
  },
  {
    slug: "baby-showers",
    title: "Baby Showers",
    subtitle: "Before Hello",
    concept: "BEFORE HELLO",
    description:
      "Soft emotional storytelling with restraint and intimacy. Celebrating the quiet miracle of new life with grace.",
    storyStructure: ["Waiting", "Gathering", "Love", "Promise"],
    mood: {
      accentColor: "#D4C5B0",
      secondaryColor: "#1A1816",
      temperature: "neutral",
      overlayColor: "rgba(12, 10, 8, 0.15)",
    },
    motion: {
      rhythm: "slow",
      springStiffness: 40,
      scrollSpeed: 0.7,
    },
    typography: {
      displayFont: "var(--font-cormorant)",
      headingScale: 0.95,
      displayTracking: "-0.02em",
    },
    hero: {
      image: "/hyderabad_wedding.png",
      overlayOpacity: 0.15,
    },
  },
  {
    slug: "corporate",
    title: "Corporate",
    subtitle: "The Experience Engine",
    concept: "THE EXPERIENCE ENGINE",
    description:
      "Architecture, structure, production, and impact. Transforming corporate events into branded experiences that command attention.",
    storyStructure: ["Architecture", "Production", "Experience", "Impact"],
    mood: {
      accentColor: "#A8A8A8",
      secondaryColor: "#141414",
      temperature: "cool",
      overlayColor: "rgba(10, 10, 10, 0.3)",
    },
    motion: {
      rhythm: "medium",
      springStiffness: 100,
      scrollSpeed: 1.0,
    },
    typography: {
      displayFont: "var(--font-inter)",
      headingScale: 1.0,
      displayTracking: "-0.02em",
    },
    hero: {
      image: "/hyderabad_wedding.png",
      overlayOpacity: 0.35,
    },
  },
  {
    slug: "private-parties",
    title: "Private Parties",
    subtitle: "After Dark",
    concept: "AFTER DARK",
    description:
      "Atmospheric low-light storytelling and intimate nightlife energy. Where inhibitions dissolve and memories crystallize.",
    storyStructure: ["Dusk", "Arrival", "Atmosphere", "After Dark"],
    mood: {
      accentColor: "#B8956A",
      secondaryColor: "#0E0C0A",
      temperature: "warm",
      overlayColor: "rgba(8, 6, 4, 0.4)",
    },
    motion: {
      rhythm: "medium",
      springStiffness: 80,
      scrollSpeed: 1.0,
    },
    typography: {
      displayFont: "var(--font-bodoni)",
      headingScale: 1.05,
      displayTracking: "-0.04em",
    },
    hero: {
      image: "/udaipur_soiree.png",
      overlayOpacity: 0.4,
    },
  },
  {
    slug: "brand-events",
    title: "Brand Events",
    subtitle: "Brand Becomes World",
    concept: "BRAND BECOMES WORLD",
    description:
      "Transform brand identity into space, interaction, and physical experience. Your brand, made tangible.",
    storyStructure: ["Identity", "Space", "Interaction", "World"],
    mood: {
      accentColor: "#CCCCCC",
      secondaryColor: "#111111",
      temperature: "cool",
      overlayColor: "rgba(0, 0, 0, 0.3)",
    },
    motion: {
      rhythm: "dynamic",
      springStiffness: 110,
      scrollSpeed: 1.0,
    },
    typography: {
      displayFont: "var(--font-inter)",
      headingScale: 1.1,
      displayTracking: "-0.03em",
    },
    hero: {
      image: "/hyderabad_wedding.png",
      overlayOpacity: 0.3,
    },
  },
  {
    slug: "luxury",
    title: "Luxury Celebrations",
    subtitle: "Bespoke",
    concept: "BESPOKE",
    description:
      "Ultra-minimal cinematic presentation emphasizing exclusivity and custom creation. For those who demand the extraordinary.",
    storyStructure: ["Vision", "Craft", "Reveal", "Legacy"],
    mood: {
      accentColor: "#C9A96E",
      secondaryColor: "#161210",
      temperature: "warm",
      overlayColor: "rgba(12, 10, 8, 0.25)",
    },
    motion: {
      rhythm: "slow",
      springStiffness: 40,
      scrollSpeed: 0.7,
    },
    typography: {
      displayFont: "var(--font-bodoni)",
      headingScale: 1.2,
      displayTracking: "-0.05em",
    },
    hero: {
      image: "/hyderabad_wedding.png",
      overlayOpacity: 0.25,
    },
  },
];

// ─── HELPERS ────────────────────────────────────────────

/**
 * Find a world by its slug.
 */
export function getWorldBySlug(slug: string): AeloraWorld | undefined {
  return worlds.find((w) => w.slug === slug);
}

/**
 * Get all world slugs for generateStaticParams.
 */
export function getAllWorldSlugs(): string[] {
  return worlds.map((w) => w.slug);
}
