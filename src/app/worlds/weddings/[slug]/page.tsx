import WorldProvider from "@/components/worlds/WorldProvider";
import Image from "next/image";
import Link from "next/link";

/* ═══════════════════════════════════════════════════════════
   INDIVIDUAL WEDDING STORY
   Behind The Moment: Idea → Mood → Build → Final Experience
   ═══════════════════════════════════════════════════════════ */

const weddingStories: Record<
  string,
  {
    title: string;
    location: string;
    year: string;
    image: string;
    brief: string;
    details: { label: string; value: string }[];
    behindTheMoment: { phase: string; description: string }[];
  }
> = {
  "a-summer-wedding": {
    title: "A Summer Wedding",
    location: "Hyderabad",
    year: "2026",
    image: "/hyderabad_wedding.png",
    brief:
      "A grand celebration of love under the Hyderabad sky, blending traditional rituals with modern elegance across three unforgettable days.",
    details: [
      { label: "Guests", value: "450" },
      { label: "Duration", value: "3 Days" },
      { label: "Venue", value: "Taj Falaknuma Palace" },
      { label: "Floral", value: "White Orchids & Marigolds" },
      { label: "Lighting", value: "10,000+ Fairy Lights" },
      { label: "Cuisine", value: "Hyderabadi & Continental" },
    ],
    behindTheMoment: [
      {
        phase: "Idea",
        description:
          "The couple dreamed of a celebration that honored their heritage while feeling utterly contemporary. A fusion of Hyderabadi grandeur and minimalist modern design.",
      },
      {
        phase: "Mood",
        description:
          "Warm golds against deep nights. The reference was a Mughal court reimagined through a contemporary lens — intimate despite the scale.",
      },
      {
        phase: "Build",
        description:
          "Over 10,000 fairy lights were individually placed. A 40-foot floral mandap was constructed in 72 hours. Every table setting was hand-placed.",
      },
      {
        phase: "Final Experience",
        description:
          "Guests entered through a lantern-lit pathway into a space that felt like stepping into a film. The couple's first dance under a canopy of light became the defining image.",
      },
    ],
  },
  "villa-by-the-sea": {
    title: "Villa by the Sea",
    location: "Goa",
    year: "2026",
    image: "/goa_engagement.png",
    brief:
      "An intimate seaside ceremony where the ocean became part of the vows and the sunset was the only decoration needed.",
    details: [
      { label: "Guests", value: "80" },
      { label: "Duration", value: "2 Days" },
      { label: "Venue", value: "Private Villa, Anjuna" },
      { label: "Floral", value: "White Roses & Eucalyptus" },
      { label: "Lighting", value: "Crystal Chandeliers & Candles" },
      { label: "Cuisine", value: "Goan & Mediterranean" },
    ],
    behindTheMoment: [
      {
        phase: "Idea",
        description:
          "Intimacy above everything. The couple wanted their closest people, barefoot on the sand, watching the sun set as they said their vows.",
      },
      {
        phase: "Mood",
        description:
          "Ocean blues and warm ivories. Crystal chandeliers hung outdoors, defying expectations. Rustic elegance meeting seaside rawness.",
      },
      {
        phase: "Build",
        description:
          "A 60-foot dining table was built on the villa terrace overlooking the Arabian Sea. Every chandelier was rigged to withstand coastal winds.",
      },
      {
        phase: "Final Experience",
        description:
          "As the sun dipped below the horizon, the chandeliers caught fire with candlelight. Guests dined under the stars with waves as the soundtrack.",
      },
    ],
  },
  "a-royal-affair": {
    title: "A Royal Affair",
    location: "Udaipur",
    year: "2025",
    image: "/udaipur_soiree.png",
    brief:
      "A palace wedding that transformed heritage architecture into a living celebration of love, legacy, and luminance.",
    details: [
      { label: "Guests", value: "300" },
      { label: "Duration", value: "4 Days" },
      { label: "Venue", value: "City Palace, Udaipur" },
      { label: "Floral", value: "Jasmine & White Lotus" },
      { label: "Lighting", value: "Heritage Uplighting & Lanterns" },
      { label: "Cuisine", value: "Royal Rajasthani" },
    ],
    behindTheMoment: [
      {
        phase: "Idea",
        description:
          "A wedding that felt like it had always existed in this palace. Not a decoration overlaid on history, but a celebration that belonged to these walls.",
      },
      {
        phase: "Mood",
        description:
          "Warm sandstone illuminated by amber uplighting. Floating jasmine in ancient fountains. The grandeur of royalty with the warmth of home.",
      },
      {
        phase: "Build",
        description:
          "Working within heritage conservation guidelines, every element was temporary yet felt permanent. Lighting was designed to enhance, not compete with, the architecture.",
      },
      {
        phase: "Final Experience",
        description:
          "The cocktail evening by Lake Pichola, with the palace glowing behind and the lake reflecting a thousand candles, was described by guests as the most beautiful night of their lives.",
      },
    ],
  },
};

export async function generateStaticParams() {
  return Object.keys(weddingStories).map((slug) => ({ slug }));
}

export default async function WeddingStoryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const story = weddingStories[slug];

  if (!story) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-aelora-bg text-aelora-text">
        <p>Story not found.</p>
      </div>
    );
  }

  return (
    <WorldProvider slug="weddings">
      <div className="bg-aelora-bg text-aelora-text">
        {/* ═══ HERO ═══ */}
        <section className="relative h-screen w-full flex items-end overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src={story.image}
              alt={story.title}
              fill
              sizes="100vw"
              className="object-cover animate-slow-zoom image-warm"
              preload
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0C0A08] via-[#0C0A08]/50 to-transparent" />
          </div>
          <div className="relative z-10 w-full p-6 md:p-12 pb-16 md:pb-24">
            <Link
              href="/worlds/weddings"
              className="text-[10px] tracking-[0.3em] uppercase text-aelora-accent hover:text-aelora-text transition-colors duration-300 mb-8 inline-block"
            >
              &larr; Back to Weddings
            </Link>
            <h1 className="font-display text-5xl md:text-8xl lg:text-[10rem] uppercase tracking-[-0.05em] leading-[0.8] animate-fade-in-up opacity-0 stagger-1">
              {story.title}
            </h1>
            <p className="mt-4 text-xs tracking-[0.2em] text-aelora-text-muted animate-fade-in opacity-0 stagger-2">
              {story.location} · {story.year}
            </p>
          </div>
        </section>

        {/* ═══ BRIEF ═══ */}
        <section className="py-32 md:py-40 px-6 md:px-12 border-t border-aelora-accent/10">
          <div className="container mx-auto max-w-3xl text-center">
            <p className="font-display text-2xl md:text-4xl italic font-light text-aelora-text leading-[1.4]">
              {story.brief}
            </p>
          </div>
        </section>

        {/* ═══ DETAIL VIEW: Event Design Details ═══ */}
        <section className="py-20 md:py-32 px-6 md:px-12 bg-aelora-bg-secondary border-y border-aelora-accent/10">
          <div className="container mx-auto max-w-5xl">
            <p className="text-[10px] tracking-[0.4em] uppercase text-aelora-accent mb-12 font-medium">
              Event Details
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-12">
              {story.details.map((detail) => (
                <div
                  key={detail.label}
                  className="border-t border-aelora-accent/10 pt-4"
                >
                  <p className="text-[10px] tracking-[0.3em] uppercase text-aelora-text-muted mb-2">
                    {detail.label}
                  </p>
                  <p className="font-display text-xl md:text-2xl text-aelora-text">
                    {detail.value}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══ BEHIND THE MOMENT ═══ */}
        <section className="py-32 md:py-48 px-6 md:px-12 border-t border-aelora-accent/10">
          <div className="container mx-auto max-w-5xl">
            <p className="text-[10px] tracking-[0.4em] uppercase text-aelora-accent mb-6 font-medium">
              Behind The Moment
            </p>
            <h2 className="font-display text-4xl md:text-7xl uppercase tracking-tight leading-[0.85] mb-20">
              How It<br />Came To Life
            </h2>

            <div className="space-y-20 md:space-y-32">
              {story.behindTheMoment.map((phase, i) => (
                <div
                  key={phase.phase}
                  className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start"
                >
                  <div className="md:col-span-3">
                    <span className="text-aelora-accent font-mono text-xs">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h3 className="font-display text-3xl md:text-4xl uppercase tracking-tight mt-2 text-aelora-accent">
                      {phase.phase}
                    </h3>
                  </div>
                  <div className="md:col-span-9 md:col-start-5">
                    <p className="text-aelora-text-muted text-sm md:text-base leading-[1.8] font-light">
                      {phase.description}
                    </p>
                    <div className="w-full h-[1px] bg-aelora-accent/10 mt-8" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══ FULL WIDTH IMAGE ═══ */}
        <section className="relative aspect-[21/9] w-full overflow-hidden" data-cursor="view">
          <Image
            src={story.image}
            alt={`${story.title} - celebration`}
            fill
            sizes="100vw"
            className="object-cover image-warm"
          />
        </section>

        {/* ═══ CTA ═══ */}
        <section className="py-40 flex flex-col items-center justify-center text-center px-6 border-t border-aelora-accent/10">
          <h2 className="font-display text-4xl md:text-7xl uppercase leading-[0.85] tracking-[-0.04em] mb-6">
            Create Your Own<br />Memory Film
          </h2>
          <div className="w-[1px] h-12 bg-aelora-accent/25 my-8" />
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
