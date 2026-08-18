"use client";

import { useState } from "react";

const services = [
  { id: "01", title: "WEDDINGS" },
  { id: "02", title: "ENGAGEMENTS" },
  { id: "03", title: "PRIVATE EVENTS" },
  { id: "04", title: "BRAND EVENTS" },
  { id: "05", title: "LUXURY CELEBRATIONS" },
];

export default function ServicesSection() {
  const [activeService, setActiveService] = useState(services[0]);

  return (
    <section className="relative min-h-[80vh] w-full flex flex-col justify-center overflow-hidden bg-aelora-bg text-aelora-text py-32 border-t border-aelora-accent/10">
      <div className="container mx-auto px-6 md:px-12 w-full">
        {/* Section Label */}
        <p className="text-[10px] tracking-[0.4em] uppercase text-aelora-text-muted mb-16 font-medium">Our Expertise</p>

        {/* Services List */}
        <div className="w-full flex flex-col">
          {services.map((service) => (
            <div
              key={service.id}
              className="group flex items-center gap-6 md:gap-10 cursor-pointer border-b border-aelora-accent/10 py-8 md:py-10 transition-all duration-500"
              onMouseEnter={() => setActiveService(service)}
            >
              <span className={`text-xs font-mono transition-all duration-500 ${
                activeService.id === service.id ? "text-aelora-text" : "text-aelora-text-muted/40"
              }`}>
                {service.id}
              </span>
              <h3 className={`font-display text-4xl md:text-6xl lg:text-7xl uppercase tracking-[-0.02em] transition-all duration-500 ${
                activeService.id === service.id 
                  ? "text-aelora-text translate-x-4" 
                  : "text-aelora-text-muted/40 group-hover:text-aelora-text/80 group-hover:translate-x-2"
              }`}>
                {service.title}
              </h3>
              <span className={`ml-auto text-[10px] tracking-[0.3em] uppercase transition-all duration-500 font-medium ${
                activeService.id === service.id ? "opacity-100 text-aelora-text-muted" : "opacity-0"
              }`}>
                View &rarr;
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
