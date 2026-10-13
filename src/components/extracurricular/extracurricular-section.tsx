"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Github, Sparkles, ChevronLeft, ChevronRight, Layers } from "lucide-react";
import { EXTRACURRICULAR_PROJECTS } from "@/data/portfolio-data";
import { BeamCard } from "@/components/ui/beam-card";
import { BlurTextReveal } from "@/components/ui/blur-text-reveal";

export function ExtracurricularSection() {
  // Carousel showing cards in pairs (or 1 on smaller screens)
  const [currentPage, setCurrentPage] = useState(0);

  // Group into pages of 2 items each
  const pageSize = 2;
  const totalPages = Math.ceil(EXTRACURRICULAR_PROJECTS.length / pageSize);

  const handlePrev = () => {
    setCurrentPage((prev) => (prev === 0 ? totalPages - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentPage((prev) => (prev === totalPages - 1 ? 0 : prev + 1));
  };

  const currentItems = EXTRACURRICULAR_PROJECTS.slice(
    currentPage * pageSize,
    currentPage * pageSize + pageSize
  );

  return (
    <section id="projects" className="relative w-full py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      {/* Section Header with Blur Reveal */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.08] text-zinc-300 text-xs font-mono uppercase tracking-widest mb-3">
          <Layers className="w-3.5 h-3.5 text-amber-400" />
          Iniciativas & Conquistas
        </div>
        <div>
          <BlurTextReveal
            text="Projetos & Extracurriculares"
            className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight"
            delay={0.1}
            as="h2"
          />
        </div>
        <p className="mt-4 text-base sm:text-lg text-zinc-300 font-normal leading-relaxed">
          Navegue pelo carrossel para explorar projetos práticos de engenharia, inteligência artificial e conquistas de mérito acadêmico internacional.
        </p>
      </div>

      {/* Carousel Top Navigation Bar */}
      <div className="flex items-center justify-between mb-6 px-1">
        <div className="flex items-center gap-2 text-xs font-mono text-zinc-400">
          <span className="text-white font-bold text-sm">Página 0{currentPage + 1}</span>
          <span>/</span>
          <span>0{totalPages}</span>
        </div>

        {/* Carousel Arrow Controls */}
        <div className="flex items-center gap-2.5">
          <button
            onClick={handlePrev}
            className="p-2.5 rounded-xl bg-white/[0.05] hover:bg-white/[0.1] text-zinc-300 hover:text-white border border-white/[0.08] hover:border-white/[0.2] transition-all active:scale-95"
            aria-label="Página Anterior de Projetos"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={handleNext}
            className="p-2.5 rounded-xl bg-white/[0.05] hover:bg-white/[0.1] text-zinc-300 hover:text-white border border-white/[0.08] hover:border-white/[0.2] transition-all active:scale-95"
            aria-label="Próxima Página de Projetos"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Carousel Viewport */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentPage}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.35, ease: "easeInOut" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {currentItems.map((item) => (
            <BeamCard
              key={item.id}
              glowColor="amber"
              beamSpeed="slow"
              className="h-full"
              innerClassName="p-6 flex flex-col justify-between"
            >
              <div>
                {/* Visual Image Banner Frame */}
                <div className="relative w-full aspect-[16/10] rounded-lg overflow-hidden border border-white/[0.08] bg-zinc-950 mb-5 group/img">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover object-center filter contrast-105 group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#070b13] via-transparent to-transparent opacity-60" />

                  {/* Badge Overlay */}
                  <div className="absolute top-3 left-3">
                    <span className="text-[11px] font-mono uppercase tracking-wider text-amber-300 bg-black/75 backdrop-blur-md px-2.5 py-1 rounded-md border border-amber-500/30">
                      {item.badge || item.category}
                    </span>
                  </div>

                  {/* Action Links */}
                  <div className="absolute top-3 right-3 flex items-center gap-2">
                    {item.repoLink && (
                      <a
                        href={item.repoLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-1.5 rounded-md bg-black/75 backdrop-blur-md text-zinc-300 hover:text-white border border-white/[0.1] hover:border-white/[0.3] transition-colors"
                        aria-label="Repositório GitHub"
                      >
                        <Github className="w-4 h-4" />
                      </a>
                    )}
                    {item.linkedinLink && (
                      <a
                        href={item.linkedinLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-1.5 rounded-md bg-black/75 backdrop-blur-md text-zinc-300 hover:text-white border border-white/[0.1] hover:border-white/[0.3] transition-colors"
                        aria-label="Publicação no LinkedIn"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-white tracking-tight leading-snug">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="mt-3 text-sm text-zinc-300 leading-relaxed line-clamp-3">
                  {item.description}
                </p>

                {/* Key Achievement Pill */}
                <div className="mt-4 p-3 rounded-lg bg-white/[0.03] border border-white/[0.06] text-xs sm:text-sm text-zinc-300 flex items-start gap-2.5">
                  <Sparkles className="w-4 h-4 text-orange-400 shrink-0 mt-0.5" />
                  <span className="leading-snug">{item.keyAchievement}</span>
                </div>
              </div>

              {/* Technologies tags */}
              <div className="mt-6 pt-4 border-t border-white/[0.08] flex flex-wrap gap-2">
                {item.technologies.map((t) => (
                  <span
                    key={t}
                    className="px-2.5 py-1 rounded-md text-xs font-mono text-zinc-300 bg-white/[0.04] border border-white/[0.06]"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </BeamCard>
          ))}
        </motion.div>
      </AnimatePresence>

      {/* Pagination Dots indicator */}
      <div className="mt-8 flex items-center justify-center gap-2">
        {Array.from({ length: totalPages }).map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentPage(idx)}
            className={`h-2 rounded-full transition-all duration-300 ${
              currentPage === idx
                ? "w-8 bg-orange-500 shadow-[0_0_10px_rgba(249,115,22,0.5)]"
                : "w-2 bg-white/[0.15] hover:bg-white/[0.3]"
            }`}
            aria-label={`Ir para página ${idx + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
