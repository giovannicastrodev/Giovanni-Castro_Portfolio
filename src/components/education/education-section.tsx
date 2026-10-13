"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { GraduationCap, Calendar, MapPin, HelpCircle, Sparkles, CheckCircle, ArrowRight } from "lucide-react";
import { EDUCATION_ITEMS } from "@/data/portfolio-data";
import { BeamCard } from "@/components/ui/beam-card";
import { BlurTextReveal } from "@/components/ui/blur-text-reveal";

export function EducationSection() {
  const [isMysteryRevealed, setIsMysteryRevealed] = useState(false);

  // Automatic gentle pulse teaser interval
  const [pulseTease, setPulseTease] = useState(false);
  useEffect(() => {
    const timer = setInterval(() => {
      setPulseTease((prev) => !prev);
    }, 2800);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="education" className="relative w-full py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      {/* Section Header with Blur Reveal */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.08] text-zinc-300 text-xs font-mono uppercase tracking-widest mb-3">
          <GraduationCap className="w-4 h-4 text-orange-400" />
          Formação Acadêmica & Próximos Passos
        </div>
        <div>
          <BlurTextReveal
            text="Educação & Metas Estratégicas"
            className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight"
            delay={0.1}
            as="h2"
          />
        </div>
        <p className="mt-4 text-base sm:text-lg text-zinc-300 font-normal leading-relaxed">
          Base acadêmica sólida em tecnologia aliada a visão contínua em governança de TI e gestão estratégica de projetos.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {EDUCATION_ITEMS.map((item) => {
          if (item.isMystery) {
            return (
              <div
                key={item.id}
                onMouseEnter={() => setIsMysteryRevealed(true)}
                onMouseLeave={() => setIsMysteryRevealed(false)}
                onClick={() => setIsMysteryRevealed(!isMysteryRevealed)}
                className="relative rounded-xl p-[1.5px] overflow-hidden bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 transition-all duration-300 cursor-pointer group shadow-2xl hover:shadow-[0_0_40px_rgba(139,92,246,0.35)]"
              >
                {/* Rotating holographic light beam */}
                <div className="pointer-events-none absolute inset-[-150%] animate-[spin_4s_linear_infinite] bg-[conic-gradient(from_0deg_at_50%_50%,transparent_0deg,transparent_260deg,#8b5cf6_300deg,#ec4899_330deg,#06b6d4_360deg)] opacity-85 group-hover:opacity-100 transition-opacity" />

                <div className="relative z-10 rounded-[10px] bg-gradient-to-b from-[#0e1224] to-[#070b13] p-7 h-full flex flex-col justify-between select-none">
                  <div>
                    {/* Top Callout with pulsing highlight */}
                    <div className="flex items-center justify-between mb-5">
                      <span className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-purple-300 bg-purple-500/20 px-3 py-1.5 rounded-lg border border-purple-400/40 font-bold shadow-sm">
                        <Sparkles className="w-3.5 h-3.5 text-pink-400 animate-spin" style={{ animationDuration: "3s" }} />
                        Próximo Marco de Carreira
                      </span>
                      <span className="text-xs font-mono font-medium text-pink-300 animate-pulse flex items-center gap-1">
                        {isMysteryRevealed ? "✨ Revelado!" : "👉 Toque ou passe o mouse"}
                      </span>
                    </div>

                    {/* Interactive Mystery Body */}
                    {!isMysteryRevealed ? (
                      <div className="py-6 flex flex-col items-center justify-center text-center">
                        <div className="relative w-20 h-20 rounded-2xl bg-gradient-to-tr from-purple-600/30 to-pink-600/30 border border-purple-400/50 flex items-center justify-center text-purple-200 group-hover:scale-110 transition-transform duration-300 shadow-[0_0_35px_rgba(168,85,247,0.35)]">
                          <HelpCircle className="w-10 h-10 text-purple-300 animate-pulse" />
                        </div>
                        <h3 className="mt-5 text-2xl font-extrabold text-white tracking-tight">
                          Especialização Executiva
                        </h3>
                        <p className="mt-2 text-xs sm:text-sm font-mono text-purple-300 bg-purple-950/60 px-3.5 py-1.5 rounded-full border border-purple-500/30 inline-flex items-center gap-1.5 mt-3">
                          <span>Clique ou passe o cursor para desbloquear a meta</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </p>
                      </div>
                    ) : (
                      <div className="py-2 animate-fadeIn transition-all duration-300">
                        <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded text-xs font-mono text-amber-300 bg-amber-500/15 border border-amber-500/40 mb-3 font-bold">
                          <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                          Interesse para 2027
                        </div>
                        <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                          MBA in Project Management
                        </h3>
                        <div className="text-sm sm:text-base text-purple-300 font-semibold mt-1">
                          Gestão de Projetos & Governança de TI
                        </div>
                        <p className="mt-3 text-sm sm:text-base text-zinc-200 leading-relaxed font-normal">
                          Tenho interesse em iniciar esta especialização executiva em <strong className="text-amber-300">2027</strong>, ainda em fase de planejamento. A formação seria voltada à liderança de operações de suporte, governança de serviços corporativos de TI, gestão de incidentes críticos, ITIL e metodologias ágeis.
                        </p>
                      </div>
                    )}
                  </div>

                  <div className="mt-6 pt-4 border-t border-purple-500/30 flex items-center justify-between text-xs font-mono text-zinc-400">
                    <span className="text-zinc-300 font-medium">Liderança & Governança</span>
                    <span className="text-amber-400 font-bold">Perspectiva • 2027</span>
                  </div>
                </div>
              </div>
            );
          }

          return (
            <BeamCard
              key={item.id}
              glowColor="amber"
              beamSpeed="slow"
              className="h-full"
              innerClassName="p-7 flex flex-col justify-between"
            >
              <div>
                {/* Header with Institution Logo */}
                <div className="flex items-center justify-between gap-4 mb-5">
                  {/* Institution Logo Box */}
                  {item.logo ? (
                    <div className="relative h-12 w-44 rounded-lg bg-white/[0.04] border border-white/[0.08] p-2 flex items-center justify-center shrink-0 overflow-hidden">
                      <Image
                        src={item.logo}
                        alt={`${item.institution} Logo`}
                        width={140}
                        height={40}
                        className="h-8 w-auto max-w-full object-contain filter grayscale contrast-125 opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300"
                      />
                    </div>
                  ) : (
                    <div className="p-3 rounded-lg bg-white/[0.05] border border-white/[0.1]">
                      <GraduationCap className="w-6 h-6 text-orange-400" />
                    </div>
                  )}

                  <span className="text-xs font-mono text-zinc-300 bg-white/[0.04] px-3 py-1 rounded-md border border-white/[0.08] font-medium shrink-0">
                    {item.status}
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                  {item.degree}
                </h3>
                <div className="text-sm sm:text-base font-semibold text-orange-400 mt-1">
                  {item.institution}
                </div>

                <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs sm:text-sm font-mono text-zinc-400 mt-3 mb-4">
                  <span className="flex items-center gap-1.5">
                    <Calendar className="w-4 h-4 text-zinc-400" />
                    {item.period}
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-1.5">
                    <MapPin className="w-4 h-4 text-zinc-400" />
                    {item.location}
                  </span>
                </div>

                <p className="text-sm sm:text-base text-zinc-300 leading-relaxed font-normal">
                  {item.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-white/[0.08] text-xs font-mono text-zinc-500">
                Formação Acadêmica Oficial
              </div>
            </BeamCard>
          );
        })}
      </div>
    </section>
  );
}
