import WorldProvider from "@/components/worlds/WorldProvider";
import Image from "next/image";
import Link from "next/link";
import { worlds } from "@/lib/worlds";

/* ═══════════════════════════════════════════════════════════
   WEDDINGS WORLD — "THE MEMORY FILM"
   Cinematic scroll-controlled storytelling through:
   Before → Arrival → Promise → Together → Celebration
   ═══════════════════════════════════════════════════════════ */

const weddingWorld = worlds.find((w) => w.slug === "weddings")!;

const weddingStories = [
  {
    slug: "a-summer-wedding",
    title: "A Summer Wedding",
    location: "Hyderabad",
    year: "2026",
    image: "/hyderabad_wedding.png",
    brief: "A grand celebration of love under the Hyderabad sky, blending traditional rituals with modern elegance.",
  },
  {
    slug: "villa-by-the-sea",
    title: "Villa by the Sea",
    location: "Goa",
    year: "2026",
    image: "/goa_engagement.png",
    brief: "An intimate seaside ceremony where the ocean became part of the vows.",
  },
  {
    slug: "a-royal-affair",
    title: "A Royal Affair",
    location: "Udaipur",
    year: "2025",
    image: "/udaipur_soiree.png",
    brief: "A palace wedding that transformed heritage architecture into a living celebration.",
  },
];

export default function WeddingsPage() {
  return (
    <WorldProvider slug="weddings">
      <div className="bg-aelora-bg text-aelora-text">
        {/* ═══ HERO: Cinematic Fullscreen ═══ */}
        <section className="relative h-screen w-full flex items-end overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src={weddingWorld.hero.image}
              alt="Weddings"
              fill
              sizes="100vw"
              className="object-cover animate-slow-zoom image-warm"
              preload
            />
            <div
              className="absolute inset-0"
              style={{
                background: `linear-gradient(to bottom, ${weddingWorld.mood.overlayColor}, rgba(12, 10, 8, 0.7) 60%, rgba(12, 10, 8, 0.95))`,
              }}
            />
          </div>

          <div className="relative z-10 w-full p-6 md:p-12 pb-16 md:pb-24">
            <p className="text-[10px] tracking-[0.5em] uppercase text-aelora-accent mb-6 font-medium animate-fade-in stagger-1 opacity-0">
              {weddingWorld.concept}
            </p>
            <h1 className="font-display text-6xl md:text-9xl lg:text-[12rem] uppercase tracking-[-0.05em] leading-[0.8] animate-fade-in-up stagger-2 opacity-0">
              {weddingWorld.title}
            </h1>
            <p className="mt-6 max-w-xl text-aelora-text-muted text-sm leading-[1.8] font-light animate-fade-in stagger-3 opacity-0">
              {weddingWorld.description}
            </p>
          </div>
        </section>

        {/* ═══ STORY ARC: Scroll-driven narrative ═══ */}
        <section className="py-32 md:py-48 px-6 md:px-12 border-t border-aelora-accent/10">
          <div className="container mx-auto max-w-6xl">
            <p className="text-[10px] tracking-[0.4em] uppercase text-aelora-accent mb-16 font-medium">
              The Journey
            </p>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-0">
              {weddingWorld.storyStructure.map((phase, i) => (
                <div
                  key={phase}
                  className="group relative flex flex-col items-center text-center py-12 md:py-0 border-b md:border-b-0 md:border-r last:border-0 border-aelora-accent/10"
                >
                  <span className="text-aelora-accent font-mono text-xs mb-4">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div className="w-[1px] h-8 bg-aelora-accent/15 mb-4" />
                  <h3 className="font-display text-2xl md:text-3xl uppercase tracking-wider text-aelora-text group-hover:text-aelora-accent transition-colors duration-500">
                    {phase}
                  </h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══ EDITORIAL SECTION: Before ═══ */}
        <section className="py-32 md:py-48 px-6 md:px-12 border-t border-aelora-accent/10">
          <div className="container mx-auto max-w-6xl">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16 items-center">
              <div className="md:col-span-5">
                <span className="text-aelora-accent font-mono text-xs">01</span>
                <h2 className="font-display text-5xl md:text-7xl uppercase tracking-tight leading-[0.85] mt-4 mb-6">
                  Before
                </h2>
                <p className="text-aelora-text-muted text-sm leading-[1.8] font-light">
                  Every great love story begins with anticipation. The quiet moments of preparation — the dress, the venue, the first nervous glance in the mirror. We design these moments with as much care as the ceremony itself, because the journey to the altar is its own kind of magic.
                </p>
              </div>
              <div className="md:col-span-7">
                <div className="relative aspect-[4/3] overflow-hidden" data-cursor="view">
                  <Image
                    src="/hyderabad_wedding.png"
                    alt="Before the ceremony"
                    fill
                    sizes="(max-width: 768px) 100vw, 60vw"
                    className="object-cover image-warm hover:scale-105 transition-transform duration-[1.5s]"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ═══ EDITORIAL SECTION: Promise ═══ */}
        <section className="py-32 md:py-48 px-6 md:px-12 bg-aelora-bg-secondary border-y border-aelora-accent/10">
          <div className="container mx-auto max-w-6xl">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16 items-center">
              <div className="md:col-span-7 order-2 md:order-1">
                <div className="relative aspect-[4/3] overflow-hidden" data-cursor="view">
                  <Image
                    src="/goa_engagement.png"
                    alt="The promise"
                    fill
                    sizes="(max-width: 768px) 100vw, 60vw"
                    className="object-cover image-warm hover:scale-105 transition-transform duration-[1.5s]"
                  />
                </div>
              </div>
              <div className="md:col-span-5 order-1 md:order-2">
                <span className="text-aelora-accent font-mono text-xs">03</span>
                <h2 className="font-display text-5xl md:text-7xl uppercase tracking-tight leading-[0.85] mt-4 mb-6">
                  Promise
                </h2>
                <p className="text-aelora-text-muted text-sm leading-[1.8] font-light">
                  The moment two souls choose each other. We craft environments where the sacred and the spectacular coexist — where every floral arch, every beam of light, every whispered vow feels like it was always meant to be.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ═══ EDITORIAL SECTION: Celebration ═══ */}
        <section className="py-32 md:py-48 px-6 md:px-12 border-t border-aelora-accent/10">
          <div className="container mx-auto max-w-6xl text-center">
            <span className="text-aelora-accent font-mono text-xs">05</span>
            <h2 className="font-display text-5xl md:text-8xl lg:text-[9rem] uppercase tracking-[-0.04em] leading-[0.85] mt-4 mb-12">
              Celebration
            </h2>
            <p className="max-w-xl mx-auto text-aelora-text-muted text-sm leading-[1.8] font-light mb-16">
              When all the planning dissolves into pure, unbridled joy. The dance floor fills, the glasses clink, and the night becomes a memory that will last forever.
            </p>
            <div className="relative aspect-[21/9] w-full overflow-hidden" data-cursor="view">
              <Image
                src="/udaipur_soiree.png"
                alt="The celebration"
                fill
                sizes="100vw"
                className="object-cover image-warm hover:scale-105 transition-transform duration-[1.5s]"
              />
            </div>
          </div>
        </section>

        {/* ═══ SELECTED WEDDING STORIES ═══ */}
        <section className="py-32 md:py-48 px-6 md:px-12 bg-aelora-bg border-t border-aelora-accent/10">
          <div className="container mx-auto max-w-7xl">
            <div className="flex justify-between items-end mb-20 md:mb-32">
              <div>
                <p className="text-[10px] tracking-[0.4em] uppercase text-aelora-accent mb-6 font-medium">
                  Selected Stories
                </p>
                <h2 className="font-display text-5xl md:text-8xl uppercase tracking-[-0.04em] leading-[0.85]">
                  Memory<br />Films
                </h2>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {weddingStories.map((story, i) => (
                <Link
                  key={story.slug}
                  href={`/worlds/weddings/${story.slug}`}
                  className="group"
                  data-cursor="enter"
                >
                  <div className="relative aspect-[3/4] overflow-hidden mb-6">
                    <Image
                      src={story.image}
                      alt={story.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-[1.2s] image-warm"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0C0A08]/80 to-transparent" />
                    <div className="absolute bottom-6 left-6 right-6">
                      <span className="text-aelora-accent font-mono text-xs">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <h3 className="font-display text-2xl md:text-3xl uppercase tracking-tight mt-2 text-aelora-text">
                        {story.title}
                      </h3>
                      <p className="text-[10px] tracking-[0.2em] text-aelora-text-muted mt-2">
                        {story.location} · {story.year}
                      </p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ═══ WORLD CTA ═══ */}
        <section className="py-40 flex flex-col items-center justify-center text-center px-6 border-t border-aelora-accent/10">
          <h2 className="font-display text-5xl md:text-8xl uppercase leading-[0.85] tracking-[-0.04em] mb-6">
            Begin Your<br />Memory Film
          </h2>
          <p className="text-aelora-text-muted text-sm mb-12 font-light">
            Let&apos;s create a wedding that becomes a lifelong memory.
          </p>
          <a
            href="/contact"
            data-cursor="enter"
            className="text-[10px] md:text-xs tracking-[0.3em] uppercase text-aelora-accent border-b border-aelora-accent/30 hover:border-aelora-accent pb-2 transition-all duration-500 font-medium"
          >
            Start planning &rarr;
          </a>
        </section>
      </div>
    </WorldProvider>
  );
}
