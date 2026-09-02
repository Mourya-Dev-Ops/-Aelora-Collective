"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { type AeloraWorld } from "@/lib/worlds";
import { useReducedMotion } from "@/lib/hooks/useReducedMotion";

/* ═══════════════════════════════════════════════════════════
   WORLD CARD
   Entry point for each world on the homepage grid.
   Hover reveals the world's imagery + concept.
   ═══════════════════════════════════════════════════════════ */

interface WorldCardProps {
  world: AeloraWorld;
  index: number;
  /** Layout variant for the editorial grid */
  variant?: "large" | "medium" | "small";
}

export default function WorldCard({
  world,
  index,
  variant = "medium",
}: WorldCardProps) {
  const prefersReduced = useReducedMotion();

  const aspectRatio = {
    large: "aspect-[16/9]",
    medium: "aspect-[3/4]",
    small: "aspect-[4/5]",
  };

  return (
    <Link href={`/worlds/${world.slug}`} data-cursor="enter">
      <motion.div
        className={cn(
          "group relative overflow-hidden cursor-pointer",
          aspectRatio[variant]
        )}
        initial={prefersReduced ? {} : { opacity: 0, y: 40 }}
        whileInView={prefersReduced ? {} : { opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      >
        {/* Background Image */}
        <div className="absolute inset-0 overflow-hidden">
          <Image
            src={world.hero.image}
            alt={world.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className={cn(
              "object-cover transition-all duration-[1.2s] ease-out image-cinematic",
              "opacity-40 group-hover:opacity-70 group-hover:scale-110"
            )}
          />
          {/* Mood Overlay */}
          <div
            className="absolute inset-0 transition-opacity duration-700"
            style={{
              backgroundColor: world.mood.overlayColor,
            }}
          />
          {/* Bottom gradient for text readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0C0A08] via-[#0C0A08]/40 to-transparent" />
        </div>

        {/* Content */}
        <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-8 z-10">
          {/* Index number */}
          <span className="text-[10px] font-mono tracking-[0.3em] text-aelora-text-muted mb-3 transition-colors duration-500 group-hover:text-aelora-accent">
            {String(index + 1).padStart(2, "0")}
          </span>

          {/* World Title */}
          <h3
            className={cn(
              "font-display uppercase leading-[0.85] tracking-tight mb-2",
              "text-aelora-text transition-all duration-700",
              "group-hover:translate-y-[-4px]",
              variant === "large"
                ? "text-5xl md:text-7xl lg:text-8xl"
                : variant === "medium"
                  ? "text-3xl md:text-5xl"
                  : "text-2xl md:text-4xl"
            )}
          >
            {world.title}
          </h3>

          {/* Concept subtitle — reveals on hover */}
          <div className="overflow-hidden h-0 group-hover:h-8 transition-all duration-500 ease-out">
            <p className="text-[10px] md:text-xs tracking-[0.3em] uppercase text-aelora-accent opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
              {world.concept}
            </p>
          </div>
        </div>

        {/* Corner Accent — appears on hover */}
        <div className="absolute top-6 right-6 md:top-8 md:right-8 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <span className="text-[10px] tracking-[0.3em] uppercase text-aelora-accent">
            Enter &rarr;
          </span>
        </div>
      </motion.div>
    </Link>
  );
}
