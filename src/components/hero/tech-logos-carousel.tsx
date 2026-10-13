"use client";

import React from "react";
import { TECH_BRANDS } from "./tech-brand-logos";

export function TechLogosCarousel() {
  // Triplicate the array for seamless infinite marquee loop
  const brands = [...TECH_BRANDS, ...TECH_BRANDS, ...TECH_BRANDS];

  return (
    <div className="relative w-full overflow-hidden py-6 mt-6">
      {/* Left/Right Vignette Gradient Masks */}
      <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-r from-[#04060a] to-transparent z-20" />
      <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-l from-[#04060a] to-transparent z-20" />

      {/* Infinite scrolling track */}
      <div className="flex w-max animate-marquee hover:[animation-play-state:paused] gap-5 items-center">
        {brands.map((brand, idx) => (
          <div
            key={`${brand.name}-${idx}`}
            className="group relative flex flex-col items-center justify-center p-4 sm:p-5 rounded-xl bg-[#070b13]/80 hover:bg-[#0c1220] border border-white/[0.08] hover:border-amber-400/40 transition-all duration-300 w-28 sm:w-32 h-28 sm:h-32 shrink-0 cursor-pointer shadow-lg hover:shadow-[0_0_25px_rgba(245,158,11,0.25)] hover:-translate-y-1"
          >
            {/* BIG Graphical Logo with grayscale to full-color hover */}
            <div className="relative flex items-center justify-center filter grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300">
              {brand.svg}
            </div>

            {/* Secondary Name Label underneath */}
            <span className="mt-2 text-xs font-semibold text-zinc-400 group-hover:text-white transition-colors text-center font-mono">
              {brand.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

