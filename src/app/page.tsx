import ServicesSection from "@/components/ServicesSection";
import FeaturedCelebrations from "@/components/FeaturedCelebrations";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen bg-aelora-bg text-aelora-text">
      {/* Section 1 - Minimal Hero */}
      <section className="relative min-h-[90vh] w-full flex flex-col justify-between p-6 md:p-12 overflow-hidden bg-aelora-bg">
        {/* Minimal Navigation */}
        <header className="relative z-10 flex justify-between items-center w-full uppercase text-[10px] md:text-xs tracking-[0.25em] font-medium">
          <div className="font-display text-2xl md:text-3xl tracking-[0.1em] uppercase leading-none text-aelora-text">
            Aelora
          </div>
          <nav className="hidden md:flex gap-14 text-aelora-text-muted">
            <a href="/about" className="hover:text-aelora-text transition-colors duration-500">About</a>
            <a href="/services" className="hover:text-aelora-text transition-colors duration-500">Services</a>
            <a href="/celebrations" className="hover:text-aelora-text transition-colors duration-500">Work</a>
            <a href="/experience" className="hover:text-aelora-text transition-colors duration-500">Experience</a>
            <a href="/contact" className="hover:text-aelora-text transition-colors duration-500">Contact</a>
          </nav>
          <button className="text-aelora-text-muted hover:text-aelora-text transition-colors duration-500 md:hidden">
            Menu
          </button>
        </header>

        {/* Main Statement */}
        <div className="relative z-10 flex flex-col items-center justify-center flex-1 text-center mt-20">
          <p className="text-[10px] md:text-xs tracking-[0.4em] uppercase text-aelora-text-muted mb-8 font-medium">Curating Extraordinary Celebrations</p>
          <h1 className="font-display text-6xl md:text-9xl lg:text-[11rem] uppercase tracking-[-0.04em] leading-[0.8] mb-6">
            Aelora
          </h1>
          <h2 className="font-display text-2xl md:text-4xl lg:text-5xl italic font-light text-aelora-text-muted tracking-normal lowercase mb-16">
            the art of gathering
          </h2>
          <div className="w-[1px] h-24 bg-aelora-accent/20 mb-8"></div>
          <button className="text-[10px] md:text-xs tracking-[0.3em] uppercase text-aelora-text-muted hover:text-aelora-text transition-colors duration-500">
            Explore &darr;
          </button>
        </div>
      </section>

      {/* Section 2 - Brand Introduction */}
      <section className="py-32 md:py-48 bg-aelora-bg-secondary text-aelora-text flex flex-col items-center justify-center px-6 md:px-12 text-center border-t border-aelora-accent/10">
        <p className="text-[10px] tracking-[0.4em] uppercase text-aelora-text-muted mb-10 font-medium">Who We Are</p>
        <h2 className="font-display text-4xl md:text-7xl lg:text-8xl leading-[1.0] tracking-[-0.03em] mb-10 max-w-5xl uppercase text-aelora-text">
          Celebrations,<br />thoughtfully<br />imagined.
        </h2>
        <div className="w-12 h-[1px] bg-aelora-accent/20 mb-10"></div>
        <p className="max-w-lg text-aelora-text-muted text-sm leading-[1.8] font-normal">
          Aelora Collective is a luxury event design and planning studio curating extraordinary celebrations. From intimate private gatherings to grand weddings, we believe every event should feel like a cinematic experience.
        </p>
      </section>

      {/* Section 3 - Services */}
      <ServicesSection />

      {/* Section 4 - Featured Celebrations */}
      <FeaturedCelebrations />

      {/* Section 5 - The Aelora Philosophy */}
      <section className="py-40 md:py-56 px-6 md:px-12 bg-aelora-bg text-aelora-text border-t border-aelora-accent/10">
        <div className="container mx-auto max-w-5xl text-center">
          <h2 className="font-display text-4xl md:text-7xl lg:text-[8rem] leading-[0.9] uppercase tracking-[-0.04em] mb-20 text-aelora-text">
            We don't just<br />plan events.
          </h2>
          <p className="font-display text-3xl md:text-5xl italic font-light text-aelora-text-muted tracking-normal lowercase mb-24">
            We design experiences.
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-16 text-center uppercase tracking-[0.3em] text-[10px] font-medium">
            <div className="flex flex-col items-center gap-4">
              <span className="text-aelora-text-muted font-mono text-xs">01</span>
              <div className="w-full h-[1px] bg-aelora-accent/10"></div>
              <span className="text-aelora-text">Concept</span>
            </div>
            <div className="flex flex-col items-center gap-4">
              <span className="text-aelora-text-muted font-mono text-xs">02</span>
              <div className="w-full h-[1px] bg-aelora-accent/10"></div>
              <span className="text-aelora-text">Design</span>
            </div>
            <div className="flex flex-col items-center gap-4">
              <span className="text-aelora-text-muted font-mono text-xs">03</span>
              <div className="w-full h-[1px] bg-aelora-accent/10"></div>
              <span className="text-aelora-text">Production</span>
            </div>
            <div className="flex flex-col items-center gap-4">
              <span className="text-aelora-text-muted font-mono text-xs">04</span>
              <div className="w-full h-[1px] bg-aelora-accent/10"></div>
              <span className="text-aelora-text">Experience</span>
            </div>
          </div>
        </div>
      </section>

      {/* Section 6 - Testimonials */}
      <section className="py-40 px-6 bg-aelora-bg-secondary text-aelora-text flex flex-col items-center justify-center text-center border-y border-aelora-accent/10">
        <div className="max-w-4xl">
          <p className="text-[10px] tracking-[0.4em] uppercase text-aelora-text-muted mb-12 font-medium">Client Words</p>
          <p className="font-display text-3xl md:text-5xl lg:text-6xl leading-[1.2] tracking-[-0.02em] mb-10 italic font-light">
            "Every detail felt intentional.<br className="hidden md:block" /> It was beyond what we imagined."
          </p>
          <div className="w-8 h-[1px] bg-aelora-accent/20 mx-auto mb-6"></div>
          <span className="text-[10px] tracking-[0.4em] uppercase text-aelora-text">— Client Name</span>
        </div>
      </section>

      {/* Section 7 - Final CTA */}
      <section className="min-h-[80vh] w-full flex flex-col items-center justify-center bg-aelora-bg text-aelora-text text-center px-6">
        <h2 className="font-display text-6xl md:text-8xl lg:text-[9rem] uppercase leading-[0.9] tracking-[-0.04em] mb-8 text-aelora-text">
          Let's create
        </h2>
        <p className="font-display text-3xl md:text-5xl italic font-light text-aelora-text-muted tracking-normal lowercase mb-16">
          something unforgettable.
        </p>
        <div className="w-[1px] h-16 bg-aelora-accent/20 mb-10"></div>
        <a href="/contact" className="text-[10px] md:text-xs tracking-[0.3em] uppercase text-aelora-text-muted hover:text-aelora-text border-b border-aelora-accent/20 hover:border-aelora-text pb-2 transition-all duration-500 font-medium">
          Start a conversation &rarr;
        </a>
      </section>
    </main>
  );
}
