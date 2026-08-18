"use client";

import Image from "next/image";

const projects = [
  {
    id: 1,
    title: "A SUMMER WEDDING",
    location: "Hyderabad",
    year: "2026",
    image: "/hyderabad_wedding.png",
  },
  {
    id: 2,
    title: "VILLA ENGAGEMENT",
    location: "Goa",
    year: "2026",
    image: "/goa_engagement.png",
  },
  {
    id: 3,
    title: "PRIVATE SOIREE",
    location: "Udaipur",
    year: "2025",
    image: "/udaipur_soiree.png",
  },
];

export default function FeaturedCelebrations() {
  return (
    <section className="bg-aelora-bg text-aelora-text py-32 md:py-48 border-t border-aelora-accent/10">
      <div className="container mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="flex justify-between items-end mb-32">
          <div>
            <p className="text-[10px] tracking-[0.4em] uppercase text-aelora-text-muted mb-6 font-medium">Selected Work</p>
            <h2 className="font-display text-5xl md:text-8xl lg:text-8xl uppercase tracking-[-0.03em] leading-[0.9] text-aelora-text">
              The<br />Celebrations
            </h2>
          </div>
          <a href="/celebrations" className="hidden md:inline-block text-[10px] tracking-[0.3em] uppercase text-aelora-text-muted hover:text-aelora-text border-b border-aelora-accent/20 hover:border-aelora-text pb-2 transition-all duration-500 font-medium">
            View All &rarr;
          </a>
        </div>

        {/* Asymmetrical Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-y-24 md:gap-x-8">
          {/* Large Featured Project */}
          <div className="col-span-1 md:col-span-12 group cursor-pointer">
            <div className="relative aspect-[21/9] w-full overflow-hidden bg-aelora-bg-secondary mb-8">
              <Image src={projects[0].image} alt={projects[0].title} fill className="object-cover opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-1000" />
            </div>
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-display text-2xl md:text-4xl uppercase tracking-[-0.01em] mb-2">{projects[0].title}</h3>
                <p className="text-xs tracking-[0.2em] text-aelora-text-muted font-medium">
                  {projects[0].location} &middot; {projects[0].year}
                </p>
              </div>
              <span className="text-[10px] tracking-[0.3em] uppercase text-aelora-text-muted group-hover:text-aelora-text group-hover:translate-x-2 transition-all duration-500 font-medium">
                Explore &rarr;
              </span>
            </div>
          </div>

          {/* Two Medium Projects */}
          <div className="col-span-1 md:col-span-5 group cursor-pointer">
            <div className="relative aspect-[3/4] w-full overflow-hidden bg-aelora-bg-secondary mb-6">
              <Image src={projects[1].image} alt={projects[1].title} fill className="object-cover opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-1000" />
            </div>
            <h3 className="font-display text-xl md:text-2xl uppercase tracking-[-0.01em] mb-1">{projects[1].title}</h3>
            <p className="text-[10px] tracking-[0.2em] text-aelora-text-muted font-medium">{projects[1].location} &middot; {projects[1].year}</p>
          </div>

          <div className="col-span-1 md:col-span-5 md:col-start-8 group cursor-pointer mt-0 md:mt-40">
            <div className="relative aspect-[3/4] w-full overflow-hidden bg-aelora-bg-secondary mb-6">
              <Image src={projects[2].image} alt={projects[2].title} fill className="object-cover opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-1000" />
            </div>
            <h3 className="font-display text-xl md:text-2xl uppercase tracking-[-0.01em] mb-1">{projects[2].title}</h3>
            <p className="text-[10px] tracking-[0.2em] text-aelora-text-muted font-medium">{projects[2].location} &middot; {projects[2].year}</p>
          </div>
        </div>

        <div className="mt-20 text-center md:hidden">
          <a href="/celebrations" className="text-[10px] tracking-[0.3em] uppercase text-aelora-text-muted border-b border-aelora-accent/20 pb-2 font-medium">
            View All Work &rarr;
          </a>
        </div>
      </div>
    </section>
  );
}
