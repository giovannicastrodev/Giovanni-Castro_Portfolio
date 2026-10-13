"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ChevronLeft, 
  ChevronRight, 
  Calendar, 
  MapPin, 
  CheckCircle2, 
  ArrowUpRight,
  Briefcase,
  ShieldCheck
} from "lucide-react";
import { EXPERIENCES } from "@/data/portfolio-data";
import { BeamCard } from "@/components/ui/beam-card";
import { BlurTextReveal } from "@/components/ui/blur-text-reveal";

export function ExperienceSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const activeExp = EXPERIENCES[currentIndex];

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? EXPERIENCES.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === EXPERIENCES.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="experience" className="relative w-full py-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
      {/* Section Header with Blur Reveal */}
      <div className="text-center max-w-3xl mx-auto mb-14">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.08] text-zinc-300 text-xs font-mono uppercase tracking-widest mb-3">
          Trajetória Profissional
        </div>
        <div>
          <BlurTextReveal
            text="Experiência em Sistemas & Engenharia"
            className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight"
            delay={0.1}
            as="h2"
          />
        </div>
        <p className="mt-4 text-base sm:text-lg text-zinc-300 font-normal leading-relaxed">
          Histórico focado em estabilidade de sistemas corporativos, análise de falhas de hardware/software e suporte técnico de alto nível.
        </p>
      </div>

      {/* Experience Carousel Navigation Tabs */}
      <div className="flex flex-wrap items-center justify-center gap-2.5 mb-8">
        {EXPERIENCES.map((exp, idx) => {
          const isActive = idx === currentIndex;
          return (
            <button
              key={exp.id}
              onClick={() => setCurrentIndex(idx)}
              className={`relative px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-300 flex items-center gap-2.5 ${
                isActive
                  ? "bg-orange-600 text-white shadow-[0_0_20px_rgba(249,115,22,0.4)] border border-orange-400/40"
                  : "bg-white/[0.04] text-zinc-400 hover:text-zinc-200 hover:bg-white/[0.08] border border-white/[0.08]"
              }`}
            >
              {exp.isCurrent && (
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
              )}
              <span>{exp.company}</span>
            </button>
          );
        })}
      </div>

      {/* Main Experience Slide Card */}
      <BeamCard
        glowColor="amber"
        beamSpeed="normal"
        innerClassName="p-7 sm:p-10"
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={activeExp.id}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className="flex flex-col gap-8"
          >
            {/* Top Header: BIG Company Logo Showcase & Role Title */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-white/[0.08]">
              {/* BIG Logo Container */}
              <div className="relative h-20 sm:h-24 w-auto min-w-[200px] sm:min-w-[260px] max-w-[320px] rounded-xl bg-white/[0.03] border border-white/[0.1] p-3 flex items-center justify-center shrink-0 group/logo shadow-inner">
                <div className="relative w-full h-full">
                  <Image
                    src={activeExp.logo}
                    alt={`${activeExp.company} Logo`}
                    fill
                    className="object-contain filter grayscale contrast-125 opacity-80 group-hover/logo:grayscale-0 group-hover/logo:opacity-100 group-hover/logo:scale-105 transition-all duration-300"
                    priority
                  />
                </div>
              </div>

              {/* Role & Company Header */}
              <div className="flex-1 min-w-0">
                <div className="flex flex-wrap items-center gap-3">
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                    {activeExp.role}
                  </h3>
                  {activeExp.isCurrent && (
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-mono font-medium text-emerald-300 bg-emerald-500/[0.12] border border-emerald-500/30">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      Cargo Atual
                    </span>
                  )}
                </div>

                <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5 text-sm sm:text-base text-zinc-300 mt-2">
                  <span className="font-semibold text-orange-400">{activeExp.company}</span>
                  <span className="text-zinc-600">•</span>
                  <span className="flex items-center gap-1.5 text-zinc-400 text-xs sm:text-sm font-mono">
                    <Calendar className="w-4 h-4 text-zinc-400" />
                    {activeExp.period}
                  </span>
                  <span className="text-zinc-600">•</span>
                  <span className="flex items-center gap-1.5 text-zinc-400 text-xs sm:text-sm font-mono">
                    <MapPin className="w-4 h-4 text-zinc-400" />
                    {activeExp.location}
                  </span>
                </div>
              </div>
            </div>

            {/* Narrative Description */}
            <p className="text-base sm:text-lg text-zinc-200 leading-relaxed font-normal">
              {activeExp.description}
            </p>

            {/* Responsibilities list with custom modern markers */}
            <div className="space-y-3">
              <div className="text-xs font-mono uppercase tracking-widest text-zinc-400 font-semibold mb-2">
                Principais Responsabilidades & Impacto:
              </div>
              {activeExp.responsibilities.map((resp, rIdx) => (
                <div key={rIdx} className="flex items-start gap-3 text-sm sm:text-base text-zinc-300">
                  <CheckCircle2 className="w-4 h-4 text-orange-400 shrink-0 mt-1" />
                  <span>{resp}</span>
                </div>
              ))}
            </div>

            {/* Technologies pills */}
            <div className="pt-6 border-t border-white/[0.08] flex flex-wrap items-center gap-2">
              <span className="text-xs font-mono text-zinc-400 uppercase tracking-wider mr-2 font-medium">Competências:</span>
              {activeExp.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 rounded-lg text-xs sm:text-sm font-mono font-medium text-zinc-200 bg-white/[0.04] border border-white/[0.08] hover:border-orange-400/40 transition-colors"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Carousel Bottom Controls: Previous / Next & Counter */}
        <div className="mt-8 pt-6 border-t border-white/[0.08] flex items-center justify-between">
          <div className="flex items-center gap-2 text-xs font-mono text-zinc-400">
            <span className="text-white font-bold">0{currentIndex + 1}</span>
            <span>/</span>
            <span>0{EXPERIENCES.length}</span>
            <span className="ml-2 text-zinc-500 hidden sm:inline">• {activeExp.company}</span>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={handlePrev}
              className="p-2.5 rounded-xl bg-white/[0.05] hover:bg-white/[0.1] text-zinc-300 hover:text-white border border-white/[0.08] hover:border-white/[0.2] transition-all"
              aria-label="Experiência Anterior"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={handleNext}
              className="p-2.5 rounded-xl bg-white/[0.05] hover:bg-white/[0.1] text-zinc-300 hover:text-white border border-white/[0.08] hover:border-white/[0.2] transition-all"
              aria-label="Próxima Experiência"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </BeamCard>
    </section>
  );
}
