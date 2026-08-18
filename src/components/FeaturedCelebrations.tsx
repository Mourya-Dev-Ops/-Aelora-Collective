"use client";

import Image from "next/image";

const projects = [
  {
    id: 1,
    title: "A SUMMER WEDDING",
    location: "Hyderabad",
    year: "2026",
    size: "large", // Determines the grid layout
    image: "/placeholder-large.jpg",
  },
  {
    id: 2,
    title: "VILLA ENGAGEMENT",
    location: "Goa",
    year: "2026",
    size: "medium",
    image: "/placeholder-medium.jpg",
  },
  {
    id: 3,
    title: "PRIVATE SOIREE",
    location: "Udaipur",
    year: "2025",
    size: "medium",
    image: "/placeholder-medium2.jpg",
  },
];

export default function FeaturedCelebrations() {
  return (
    <section className="bg-aelora-ivory text-aelora-bg py-24 md:py-40">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex justify-between items-end mb-24">
          <h2 className="font-display text-5xl md:text-8xl uppercase tracking-tighter">
            The <br /> Celebrations
          </h2>
          <button className="hidden md:inline-block text-xs tracking-widest uppercase border-b border-aelora-bg pb-1 hover:text-aelora-gold hover:border-aelora-gold transition-colors">
            View All Work &rarr;
          </button>
        </div>

        {/* Asymmetrical Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-y-24 md:gap-x-12">
          {/* Large Featured Project */}
          <div className="col-span-1 md:col-span-10 md:col-start-2 group cursor-pointer">
            <div className="relative aspect-[16/9] w-full overflow-hidden bg-aelora-beige mb-6">
               {/* <Image src={projects[0].image} fill className="object-cover transition-transform duration-1000 group-hover:scale-105" alt={projects[0].title} /> */}
               <div className="absolute inset-0 bg-aelora-bg/10 group-hover:bg-transparent transition-colors duration-500"></div>
            </div>
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-display text-3xl md:text-5xl uppercase mb-2">{projects[0].title}</h3>
                <p className="text-sm font-light tracking-wide text-aelora-text-secondary">
                  {projects[0].location} &middot; {projects[0].year}
                </p>
              </div>
              <span className="text-xs tracking-[0.2em] uppercase transition-transform transform group-hover:translate-x-2">Explore &rarr;</span>
            </div>
          </div>

          {/* Medium Projects Row */}
          <div className="col-span-1 md:col-span-5 md:col-start-1 group cursor-pointer">
             <div className="relative aspect-[3/4] w-full overflow-hidden bg-aelora-beige mb-6">
                <div className="absolute inset-0 bg-aelora-bg/10 group-hover:bg-transparent transition-colors duration-500"></div>
             </div>
             <h3 className="font-display text-2xl uppercase mb-1">{projects[1].title}</h3>
             <p className="text-xs text-aelora-text-secondary">{projects[1].location} &middot; {projects[1].year}</p>
          </div>

          <div className="col-span-1 md:col-span-5 md:col-start-7 group cursor-pointer mt-0 md:mt-32">
             <div className="relative aspect-[3/4] w-full overflow-hidden bg-aelora-beige mb-6">
                <div className="absolute inset-0 bg-aelora-bg/10 group-hover:bg-transparent transition-colors duration-500"></div>
             </div>
             <h3 className="font-display text-2xl uppercase mb-1">{projects[2].title}</h3>
             <p className="text-xs text-aelora-text-secondary">{projects[2].location} &middot; {projects[2].year}</p>
          </div>
        </div>

        <div className="mt-16 text-center md:hidden">
          <button className="text-xs tracking-widest uppercase border-b border-aelora-bg pb-1">
            View All Work &rarr;
          </button>
        </div>
      </div>
    </section>
  );
}
