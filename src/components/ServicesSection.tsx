"use client";

import { useState } from "react";

const services = [
  { id: "01", title: "WEDDINGS", image: "/placeholder-wedding.jpg" },
  { id: "02", title: "ENGAGEMENTS", image: "/placeholder-engagement.jpg" },
  { id: "03", title: "PRIVATE EVENTS", image: "/placeholder-private.jpg" },
  { id: "04", title: "BRAND EVENTS", image: "/placeholder-brand.jpg" },
];

export default function ServicesSection() {
  const [activeService, setActiveService] = useState(services[0]);

  return (
    <section className="relative min-h-screen w-full flex flex-col justify-center overflow-hidden bg-aelora-bg text-aelora-text py-24 border-y border-aelora-bg-secondary">
      {/* Background Image that changes based on active service */}
      {services.map((service) => (
        <div
          key={service.id}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            activeService.id === service.id ? "opacity-40" : "opacity-0"
          }`}
        >
           {/* Replace with real images once available */}
           <div className="absolute inset-0 bg-gradient-to-r from-aelora-bg via-aelora-bg/90 to-transparent z-10"></div>
           <div className="absolute inset-0 bg-aelora-bg-secondary/20 z-0"></div>
        </div>
      ))}

      <div className="relative z-20 container mx-auto px-6 md:px-12 w-full flex flex-col md:flex-row justify-between items-start md:items-center">
        {/* Title */}
        <div className="mb-16 md:mb-0 md:w-1/3">
          <p className="text-xs tracking-[0.2em] uppercase text-aelora-accent mb-4">Our Expertise</p>
          <h2 className="font-display text-5xl md:text-7xl leading-[1.1]">The Art of <br/> Gathering.</h2>
          <p className="mt-6 text-sm text-aelora-text-muted max-w-sm">
            Curating immersive environments and flawless experiences for life's most meaningful moments.
          </p>
        </div>

        {/* Services List */}
        <div className="w-full md:w-1/2 flex flex-col gap-6 md:gap-10">
          {services.map((service) => (
            <div
              key={service.id}
              className="group flex items-center gap-8 cursor-pointer"
              onMouseEnter={() => setActiveService(service)}
            >
              <span className={`text-sm md:text-base font-mono transition-colors duration-500 ${
                activeService.id === service.id ? "text-aelora-accent" : "text-aelora-text-muted group-hover:text-aelora-text"
              }`}>
                {service.id}
              </span>
              <h3 className={`font-display text-4xl md:text-6xl uppercase tracking-wider transition-all duration-500 transform ${
                activeService.id === service.id ? "text-aelora-text translate-x-4" : "text-aelora-text-muted/60 group-hover:text-aelora-text"
              }`}>
                {service.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
