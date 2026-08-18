import ServicesSection from "@/components/ServicesSection";
import FeaturedCelebrations from "@/components/FeaturedCelebrations";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen bg-aelora-bg text-aelora-text selection:bg-aelora-accent selection:text-aelora-bg">
      {/* Section 1 - Cinematic Hero */}
      <section className="relative h-screen w-full flex flex-col justify-between p-6 md:p-12 overflow-hidden bg-aelora-bg">
        {/* Background placeholder */}
        <div className="absolute inset-0 bg-aelora-bg z-0">
           <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/90"></div>
        </div>

        {/* Minimal Navigation */}
        <header className="relative z-10 flex justify-between items-start w-full uppercase text-xs tracking-widest font-medium">
          <div className="font-display text-xl md:text-2xl tracking-wide uppercase leading-tight">
            Aelora<br />Collective
          </div>
          <nav className="hidden md:flex gap-12 text-aelora-text/80">
            <a href="#" className="hover:text-aelora-text transition-colors">Weddings</a>
            <a href="#" className="hover:text-aelora-text transition-colors">Celebrations</a>
            <a href="#" className="hover:text-aelora-text transition-colors">Experiences</a>
          </nav>
          <button className="text-aelora-text hover:text-aelora-accent transition-colors">
            Menu
          </button>
        </header>

        {/* Main Statement */}
        <div className="relative z-10 flex flex-col items-center justify-center flex-1 text-center mt-12">
          <h1 className="font-display text-5xl md:text-8xl lg:text-9xl uppercase tracking-tight leading-[0.9] mb-8">
            We create moments <br />
            <span className="italic text-aelora-text-muted lowercase font-light tracking-normal">that become memories.</span>
          </h1>
          <button className="mt-8 text-xs md:text-sm tracking-[0.2em] uppercase border-b border-aelora-accent/50 pb-1 hover:text-aelora-accent hover:border-aelora-accent transition-all duration-300">
            Plan your celebration &rarr;
          </button>
        </div>

        {/* Explore Secondary */}
        <div className="relative z-10 flex justify-center pb-4">
          <span className="text-[10px] md:text-xs uppercase tracking-widest text-aelora-text-muted hover:text-aelora-text transition-colors cursor-pointer">
            Explore our work &darr;
          </span>
        </div>
      </section>

      {/* Section 2 - Brand Introduction */}
      <section className="min-h-[70vh] bg-aelora-bg-secondary text-aelora-text flex flex-col items-center justify-center p-8 md:p-24 text-center">
        <h2 className="font-display text-4xl md:text-6xl lg:text-7xl leading-tight mb-8 max-w-4xl">
          Celebrations,<br />thoughtfully imagined.
        </h2>
        <p className="max-w-xl text-aelora-text-muted text-sm md:text-base leading-relaxed">
          Aelora Collective is a luxury event design and planning studio curating extraordinary celebrations across the globe. From intimate private gatherings to grand weddings, we believe every event should feel like a cinematic experience.
        </p>
      </section>

      {/* Section 3 - Services */}
      <ServicesSection />

      {/* Section 4 - Featured Celebrations */}
      <FeaturedCelebrations />

      {/* Section 5 - The Aelora Philosophy */}
      <section className="py-32 px-6 md:px-12 bg-aelora-bg text-aelora-text border-t border-aelora-bg-secondary">
        <div className="container mx-auto max-w-5xl text-center">
          <h2 className="font-display text-4xl md:text-7xl lg:text-8xl leading-[1.1] uppercase mb-16">
            We don't just plan events.<br/>
            <span className="italic text-aelora-text-muted lowercase tracking-normal">We design experiences.</span>
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 text-center uppercase tracking-widest text-xs font-medium text-aelora-accent">
            <div className="flex flex-col items-center">
              <span className="text-aelora-text-muted mb-2 font-mono">01</span>
              Concept
            </div>
            <div className="flex flex-col items-center">
              <span className="text-aelora-text-muted mb-2 font-mono">02</span>
              Design
            </div>
            <div className="flex flex-col items-center">
              <span className="text-aelora-text-muted mb-2 font-mono">03</span>
              Production
            </div>
            <div className="flex flex-col items-center">
              <span className="text-aelora-text-muted mb-2 font-mono">04</span>
              Experience
            </div>
          </div>
        </div>
      </section>

      {/* Section 7 - Testimonials (Minimal) */}
      <section className="py-32 px-6 bg-aelora-bg-secondary text-aelora-text flex flex-col items-center justify-center text-center">
        <div className="max-w-4xl">
          <p className="font-display text-3xl md:text-5xl lg:text-6xl leading-tight mb-8">
            "Every detail felt intentional. <br className="hidden md:block"/> It was beyond what we imagined."
          </p>
          <span className="text-xs tracking-widest uppercase font-medium text-aelora-accent">— Client Name</span>
        </div>
      </section>

      {/* Section 8 - Final CTA */}
      <section className="h-screen w-full flex flex-col items-center justify-center bg-aelora-bg text-aelora-text text-center px-6">
        <h2 className="font-display text-6xl md:text-8xl lg:text-9xl uppercase leading-[0.9] mb-12">
          Let's create <br/>
          something <br/>
          <span className="italic text-aelora-text-muted lowercase tracking-normal">unforgettable.</span>
        </h2>
        <button className="text-xs md:text-sm tracking-[0.2em] uppercase border-b border-aelora-accent pb-1 hover:text-aelora-text transition-colors">
          Start a conversation &rarr;
        </button>
      </section>
    </main>
  );
}
