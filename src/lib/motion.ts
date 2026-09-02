import type { Variants, Transition } from "framer-motion";

/* ═══════════════════════════════════════════════════════════
   AELORA COLLECTIVE — MOTION SYSTEM
   Shared Framer Motion variants, springs, and presets.
   ═══════════════════════════════════════════════════════════ */

// ─── Spring Configs ──────────────────────────────────────
export const springs = {
  /** Soft, elegant transitions — default for most elements */
  gentle: { type: "spring", stiffness: 100, damping: 20, mass: 1 } as Transition,
  /** Responsive, snappy interactions — buttons, toggles */
  snappy: { type: "spring", stiffness: 300, damping: 30, mass: 0.8 } as Transition,
  /** Slow, cinematic reveals — hero sections, world transitions */
  cinematic: { type: "spring", stiffness: 50, damping: 25, mass: 1.5 } as Transition,
  /** Ultra-slow for parallax and ambient motion */
  ambient: { type: "spring", stiffness: 30, damping: 20, mass: 2 } as Transition,
};

// ─── Duration Presets ────────────────────────────────────
export const durations = {
  fast: 0.3,
  normal: 0.6,
  slow: 0.9,
  cinematic: 1.4,
  epic: 2.0,
};

// ─── Ease Curves ─────────────────────────────────────────
export const easing = {
  smooth: [0.25, 0.1, 0.25, 1.0],
  cinematic: [0.16, 1, 0.3, 1],
  dramatic: [0.76, 0, 0.24, 1],
  gentle: [0.4, 0, 0.2, 1],
} as const;

// ─── Variant Presets ─────────────────────────────────────

/** Fade in from transparent */
export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: durations.normal, ease: easing.smooth },
  },
};

/** Fade in and slide up */
export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: durations.slow, ease: easing.cinematic },
  },
};

/** Fade in and slide down */
export const fadeInDown: Variants = {
  hidden: { opacity: 0, y: -20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: durations.normal, ease: easing.smooth },
  },
};

/** Scale reveal from slightly smaller */
export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: durations.slow, ease: easing.cinematic },
  },
};

/** Slide in from left */
export const slideInLeft: Variants = {
  hidden: { opacity: 0, x: -60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: durations.slow, ease: easing.cinematic },
  },
};

/** Slide in from right */
export const slideInRight: Variants = {
  hidden: { opacity: 0, x: 60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: durations.slow, ease: easing.cinematic },
  },
};

/** Stagger container — children animate in sequence */
export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

/** Stagger container with slower cadence for editorial layouts */
export const staggerSlow: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.2,
    },
  },
};

/** World transition — fullscreen expand */
export const worldTransition: Variants = {
  hidden: {
    clipPath: "inset(10% 10% 10% 10% round 12px)",
    opacity: 0,
  },
  visible: {
    clipPath: "inset(0% 0% 0% 0% round 0px)",
    opacity: 1,
    transition: { duration: durations.cinematic, ease: easing.dramatic },
  },
  exit: {
    clipPath: "inset(10% 10% 10% 10% round 12px)",
    opacity: 0,
    transition: { duration: durations.slow, ease: easing.dramatic },
  },
};

/** Text reveal — characters or lines clip in */
export const textReveal: Variants = {
  hidden: {
    clipPath: "inset(0 100% 0 0)",
  },
  visible: {
    clipPath: "inset(0 0% 0 0)",
    transition: { duration: durations.cinematic, ease: easing.cinematic },
  },
};

/** Image parallax wrapper */
export const parallaxImage: Variants = {
  hidden: { scale: 1.15, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: { duration: durations.epic, ease: easing.cinematic },
  },
};
