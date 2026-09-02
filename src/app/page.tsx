import WorldCard from "@/components/worlds/WorldCard";
import { worlds } from "@/lib/worlds";
import Image from "next/image";

/* ═══════════════════════════════════════════════════════════
   AELORA COLLECTIVE — HOME
   "One World. Many Celebrations."
   The portal into all Aelora Worlds.
   ═══════════════════════════════════════════════════════════ */

export default function Home() {
  return (
    <div className="flex flex-col bg-aelora-bg text-aelora-text">
      {/* ═══ SECTION 1: Cinematic Hero ═══ */}
      <section className="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden">
        {/* Ambient background image */}
        <div className="absolute inset-0">
          <Image
            src="/hyderabad_wedding.png"
            alt="Luxury celebration"
            fill
            className="object-cover opacity-20 animate-slow-zoom image-cinematic"
            preload
          />
          <div className="absolute inset-0 bg-gradient-to-b from-aelora-bg via-aelora-bg/60 to-aelora-bg" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center flex flex-col items-center px-6">
          <p className="text-[10px] md:text-xs tracking-[0.5em] uppercase text-aelora-accent mb-8 animate-fade-in stagger-1 opacity-0 font-medium">
            Curating Extraordinary Celebrations
          </p>

          <h1 className="font-display text-7xl md:text-[10rem] lg:text-[14rem] uppercase tracking-[-0.05em] leading-[0.8] mb-6 animate-fade-in-up stagger-2 opacity-0">
            Aelora
          </h1>

          <h2 className="font-display text-xl md:text-3xl lg:text-4xl italic font-light text-aelora-text-muted tracking-normal lowercase animate-fade-in stagger-3 opacity-0">
            the art of gathering
          </h2>

          <div className="w-[1px] h-20 bg-aelora-accent/25 mt-16 animate-line-grow stagger-4 opacity-0" />

          <p className="mt-8 text-[10px] tracking-[0.4em] uppercase text-aelora-text-muted animate-fade-in stagger-5 opacity-0">
            One World · Many Celebrations
          </p>
        </div>
      </section>

      {/* ═══ SECTION 2: Brand Philosophy ═══ */}
      <section className="py-32 md:py-48 px-6 md:px-12 bg-aelora-bg flex flex-col items-center text-center border-t border-aelora-accent/10">
        <p className="text-[10px] tracking-[0.4em] uppercase text-aelora-accent mb-10 font-medium">
          Who We Are
        </p>
        <h2 className="font-display text-4xl md:text-7xl lg:text-8xl leading-[0.95] tracking-[-0.03em] max-w-5xl uppercase text-aelora-text mb-10">
          We don&apos;t just<br />plan events.
        </h2>
        <p className="font-display text-2xl md:text-4xl italic font-light text-aelora-text-muted tracking-normal lowercase mb-12">
          We design experiences.
        </p>
        <div className="w-12 h-[1px] bg-aelora-accent/20 mb-10" />
        <p className="max-w-lg text-aelora-text-muted text-sm leading-[1.8] font-light">
          Aelora Collective is a luxury event design and planning studio. From
          intimate private gatherings to grand weddings, we believe every
          celebration should feel like a cinematic experience — crafted with
          intention, told with beauty.
        </p>
      </section>

      {/* ═══ SECTION 3: Aelora Worlds Grid ═══ */}
      <section className="py-20 md:py-32 px-6 md:px-12 bg-aelora-bg border-t border-aelora-accent/10">
        <div className="container mx-auto max-w-7xl">
          {/* Section Header */}
          <div className="flex justify-between items-end mb-16 md:mb-24">
            <div>
              <p className="text-[10px] tracking-[0.4em] uppercase text-aelora-accent mb-6 font-medium">
                Explore
              </p>
              <h2 className="font-display text-5xl md:text-8xl lg:text-9xl uppercase tracking-[-0.04em] leading-[0.85]">
                Our<br />Worlds
              </h2>
            </div>
            <p className="hidden md:block text-[10px] tracking-[0.3em] uppercase text-aelora-text-muted max-w-[200px] text-right leading-relaxed">
              Each celebration is a world of its own
            </p>
          </div>

          {/* Editorial Asymmetric Grid */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-5">
            {/* Row 1: Weddings (large) + Engagements (medium) */}
            <div className="md:col-span-7">
              <WorldCard world={worlds[0]} index={0} variant="large" />
            </div>
            <div className="md:col-span-5">
              <WorldCard world={worlds[1]} index={1} variant="medium" />
            </div>

            {/* Row 2: Birthdays + Baby Showers + Corporate */}
            <div className="md:col-span-4">
              <WorldCard world={worlds[2]} index={2} variant="small" />
            </div>
            <div className="md:col-span-4">
              <WorldCard world={worlds[3]} index={3} variant="small" />
            </div>
            <div className="md:col-span-4">
              <WorldCard world={worlds[4]} index={4} variant="small" />
            </div>

            {/* Row 3: Private Parties + Brand Events + Luxury */}
            <div className="md:col-span-5">
              <WorldCard world={worlds[5]} index={5} variant="medium" />
            </div>
            <div className="md:col-span-4">
              <WorldCard world={worlds[6]} index={6} variant="small" />
            </div>
            <div className="md:col-span-3">
              <WorldCard world={worlds[7]} index={7} variant="small" />
            </div>
          </div>
        </div>
      </section>

      {/* ═══ SECTION 4: Process ═══ */}
      <section className="py-40 md:py-56 px-6 md:px-12 bg-aelora-bg border-t border-aelora-accent/10">
        <div className="container mx-auto max-w-5xl text-center">
          <p className="text-[10px] tracking-[0.4em] uppercase text-aelora-accent mb-16 font-medium">
            The Process
          </p>
          <h2 className="font-display text-4xl md:text-7xl lg:text-[7rem] leading-[0.85] uppercase tracking-[-0.04em] mb-24 text-aelora-text">
            Every detail,<br />intentional.
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-16 text-center uppercase tracking-[0.3em] text-[10px] font-medium">
            {["Concept", "Design", "Production", "Experience"].map(
              (step, i) => (
                <div key={step} className="flex flex-col items-center gap-4">
                  <span className="text-aelora-accent font-mono text-xs">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div className="w-full h-[1px] bg-aelora-accent/10" />
                  <span className="text-aelora-text">{step}</span>
                </div>
              )
            )}
          </div>
        </div>
      </section>

      {/* ═══ SECTION 5: Testimonial ═══ */}
      <section className="py-40 px-6 bg-aelora-bg-secondary flex flex-col items-center justify-center text-center border-y border-aelora-accent/10">
        <div className="max-w-4xl">
          <p className="text-[10px] tracking-[0.4em] uppercase text-aelora-accent mb-12 font-medium">
            Client Words
          </p>
          <p className="font-display text-3xl md:text-5xl lg:text-6xl leading-[1.2] tracking-[-0.02em] mb-10 italic font-light text-aelora-text">
            &ldquo;Every detail felt intentional.
            <br className="hidden md:block" /> It was beyond what we
            imagined.&rdquo;
          </p>
          <div className="w-8 h-[1px] bg-aelora-accent/25 mx-auto mb-6" />
          <span className="text-[10px] tracking-[0.4em] uppercase text-aelora-accent">
            — Client Name
          </span>
        </div>
      </section>

      {/* ═══ SECTION 6: Final CTA ═══ */}
      <section className="min-h-[80vh] w-full flex flex-col items-center justify-center bg-aelora-bg text-center px-6">
        <h2 className="font-display text-6xl md:text-8xl lg:text-[10rem] uppercase leading-[0.8] tracking-[-0.04em] mb-8 text-aelora-text">
          Let&apos;s create
        </h2>
        <p className="font-display text-3xl md:text-5xl italic font-light text-aelora-text-muted tracking-normal lowercase mb-16">
          something unforgettable.
        </p>
        <div className="w-[1px] h-16 bg-aelora-accent/25 mb-10" />
        <a
          href="/contact"
          data-cursor="enter"
          className="text-[10px] md:text-xs tracking-[0.3em] uppercase text-aelora-accent hover:text-aelora-text border-b border-aelora-accent/30 hover:border-aelora-text pb-2 transition-all duration-500 font-medium"
        >
          Start a conversation &rarr;
        </a>
      </section>
    </div>
  );
}
