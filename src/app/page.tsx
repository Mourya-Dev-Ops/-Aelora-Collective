import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      {/* Section 1 - Cinematic Hero */}
      <section className="relative h-screen w-full flex flex-col justify-between p-6 md:p-12 overflow-hidden">
        {/* Background placeholder */}
        <div className="absolute inset-0 bg-aelora-bg z-0">
           {/* Placeholder for cinematic image/video */}
           <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/80"></div>
        </div>

        {/* Minimal Navigation */}
        <header className="relative z-10 flex justify-between items-start w-full uppercase text-xs tracking-widest font-medium">
          <div className="font-display text-xl md:text-2xl tracking-wide uppercase leading-tight">
            Aelora<br />Collective
          </div>
          <nav className="hidden md:flex gap-12 text-aelora-ivory/80">
            <a href="#" className="hover:text-aelora-ivory transition-colors">Weddings</a>
            <a href="#" className="hover:text-aelora-ivory transition-colors">Celebrations</a>
            <a href="#" className="hover:text-aelora-ivory transition-colors">Experiences</a>
          </nav>
          <button className="text-aelora-ivory hover:text-aelora-gold transition-colors">
            Menu
          </button>
        </header>

        {/* Main Statement */}
        <div className="relative z-10 flex flex-col items-center justify-center flex-1 text-center mt-12">
          <h1 className="font-display text-5xl md:text-8xl lg:text-9xl uppercase tracking-tight leading-[0.9] mb-8">
            We create moments <br />
            <span className="italic text-aelora-beige lowercase font-light tracking-normal">that become memories.</span>
          </h1>
          <button className="mt-8 text-xs md:text-sm tracking-[0.2em] uppercase border-b border-aelora-gold/50 pb-1 hover:text-aelora-gold hover:border-aelora-gold transition-all duration-300">
            Plan your celebration &rarr;
          </button>
        </div>

        {/* Explore Secondary */}
        <div className="relative z-10 flex justify-center pb-4">
          <span className="text-[10px] md:text-xs uppercase tracking-widest text-aelora-ivory/50 hover:text-aelora-ivory transition-colors cursor-pointer">
            Explore our work &darr;
          </span>
        </div>
      </section>

      {/* Section 2 - Brand Introduction */}
      <section className="min-h-[70vh] bg-aelora-ivory text-aelora-bg flex flex-col items-center justify-center p-8 md:p-24 text-center">
        <h2 className="font-display text-4xl md:text-6xl lg:text-7xl leading-tight mb-8 max-w-4xl">
          Celebrations,<br />thoughtfully imagined.
        </h2>
        <p className="max-w-xl text-aelora-text-secondary text-sm md:text-base leading-relaxed">
          Aelora Collective is a luxury event design and planning studio curating extraordinary celebrations across the globe. From intimate private gatherings to grand weddings, we believe every event should feel like a cinematic experience.
        </p>
      </section>
    </main>
  );
}
