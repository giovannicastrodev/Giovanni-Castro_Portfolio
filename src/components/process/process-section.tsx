"use client";

import React from "react";
import { Search, Terminal, ShieldCheck, Check } from "lucide-react";
import { PROCESS_STEPS } from "@/data/portfolio-data";
import { BeamCard } from "@/components/ui/beam-card";
import { BlurTextReveal } from "@/components/ui/blur-text-reveal";

const ICONS = {
  SearchCode: <Search className="w-5 h-5 text-amber-400" />,
  TerminalSquare: <Terminal className="w-5 h-5 text-orange-400" />,
  ShieldCheck: <ShieldCheck className="w-5 h-5 text-emerald-400" />,
};

export function ProcessSection() {
  return (
    <section id="process" className="relative w-full py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      {/* Section Header with Blur Reveal */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.08] text-zinc-300 text-xs font-mono uppercase tracking-widest mb-3">
          Metodologia & Resolução
        </div>
        <div>
          <BlurTextReveal
            text="Como Eu Trabalho"
            className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight"
            delay={0.1}
            as="h2"
          />
        </div>
        <p className="mt-4 text-base sm:text-lg text-zinc-300 font-normal leading-relaxed">
          Fluxo de trabalho disciplinado e estruturado para mitigar riscos, isolar a causa-raiz com precisão e assegurar a estabilidade operacional contínua.
        </p>
      </div>

      {/* 3-Column Process Layout */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {PROCESS_STEPS.map((step, idx) => (
          <BeamCard
            key={step.number}
            glowColor={idx === 0 ? "amber" : idx === 1 ? "amber" : "amber"}
            beamSpeed="normal"
            className="h-full"
            innerClassName="flex flex-col justify-between p-7"
          >
            <div>
              {/* Card Top: Number & Icon */}
              <div className="flex items-center justify-between mb-6">
                <span className="font-mono text-3xl font-extrabold text-zinc-500 group-hover:text-zinc-300 transition-colors">
                  {step.number}
                </span>
                <div className="p-3 rounded-lg bg-white/[0.05] border border-white/[0.1]">
                  {ICONS[step.icon as keyof typeof ICONS]}
                </div>
              </div>

              {/* Title & Tagline */}
              <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                {step.title}
              </h3>
              <div className="text-xs font-mono text-orange-400 uppercase tracking-wider mt-1 mb-4 font-semibold">
                {step.tagline}
              </div>

              {/* Description */}
              <p className="text-sm sm:text-base text-zinc-300 leading-relaxed">
                {step.description}
              </p>

              {/* Key Highlights */}
              <ul className="mt-6 space-y-3">
                {step.highlights.map((highlight, hIdx) => (
                  <li key={hIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-300">
                    <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          </BeamCard>
        ))}
      </div>
    </section>
  );
}
