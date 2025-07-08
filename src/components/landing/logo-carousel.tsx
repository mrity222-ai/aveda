"use client";

import * as React from "react";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

const logos = [
  { name: "Apex", svg: (
    <svg viewBox="0 0 100 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-10 w-auto">
      <path d="M50 0L0 40h100L50 0z" fill="currentColor" />
      <text x="50" y="30" fontFamily="Poppins, sans-serif" fontSize="12" fill="hsl(var(--background))" textAnchor="middle" dy=".3em">APEX</text>
    </svg>
  )},
  { name: "Nexus", svg: (
     <svg viewBox="0 0 100 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-10 w-auto">
      <circle cx="20" cy="20" r="15" fill="currentColor"/>
      <circle cx="50" cy="20" r="15" fill="currentColor" fillOpacity="0.7"/>
      <circle cx="80" cy="20" r="15" fill="currentColor" fillOpacity="0.4"/>
       <text x="50" y="20" fontFamily="Poppins, sans-serif" fontSize="12" fill="hsl(var(--background))" textAnchor="middle" dy=".3em">NEXUS</text>
    </svg>
  )},
  { name: "Momentum", svg: (
     <svg viewBox="0 0 120 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-10 w-auto">
        <path d="M0 20 L20 0 L40 20 L20 40 Z" fill="currentColor"/>
        <text x="80" y="22" fontFamily="Poppins, sans-serif" fontSize="14" fill="currentColor" textAnchor="middle">Momentum</text>
    </svg>
  )},
    { name: "Stellar", svg: (
     <svg viewBox="0 0 100 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-10 w-auto">
        <path d="M50 0 L61.8 19.1 H80.9 L67.55 30.9 L72.36 50 L50 38.2 L27.64 50 L32.45 30.9 L19.1 19.1 H38.2 Z" fill="currentColor"/>
         <text x="50" y="25" fontFamily="Poppins, sans-serif" fontSize="10" fill="hsl(var(--background))" textAnchor="middle" dy=".3em">STELLAR</text>
    </svg>
  )},
  { name: "Quantum", svg: (
    <svg viewBox="0 0 120 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-10 w-auto">
        <rect x="0" y="0" width="40" height="40" rx="5" fill="currentColor"/>
        <text x="80" y="22" fontFamily="Poppins, sans-serif" fontSize="14" fill="currentColor" textAnchor="middle">QUANTUM</text>
    </svg>
  )},
  { name: "Pinnacle", svg: (
     <svg viewBox="0 0 120 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-10 w-auto">
      <path d="M0 40 L20 0 L40 40 Z M30 40 L50 0 L70 40Z" stroke="currentColor" strokeWidth="4" fill="none"/>
        <text x="95" y="22" fontFamily="Poppins, sans-serif" fontSize="14" fill="currentColor" textAnchor="middle">Pinnacle</text>
    </svg>
  )}
];

export default function LogoCarousel() {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );

  return (
    <section className="container py-12 sm:py-16 md:py-24 lg:py-32">
        <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center mb-12">
            <h2 className="font-headline text-2xl font-bold text-muted-foreground sm:text-3xl">Trusted by the world&apos;s best companies</h2>
        </div>
        <Carousel
            plugins={[plugin.current]}
            className="w-full"
            onMouseEnter={plugin.current.stop}
            onMouseLeave={plugin.current.reset}
            opts={{
                align: "start",
                loop: true,
            }}
        >
        <CarouselContent className="-ml-4">
          {[...logos, ...logos].map((logo, index) => (
            <CarouselItem key={index} className="pl-4 basis-1/2 md:basis-1/3 lg:basis-1/5">
              <div className="p-4 bg-secondary/50 rounded-lg flex items-center justify-center h-28 text-muted-foreground hover:text-foreground/80 transition-colors">
                {logo.svg}
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        </Carousel>
    </section>
  );
}
