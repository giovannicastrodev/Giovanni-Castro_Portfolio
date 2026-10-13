"use client";

import React from "react";
import Image from "next/image";
import { Download, ArrowUpRight, Shield, Terminal } from "lucide-react";
import { PERSONAL_INFO } from "@/data/portfolio-data";
import { TechLogosCarousel } from "./tech-logos-carousel";
import { BlurTextReveal } from "@/components/ui/blur-text-reveal";
import { BeamCard } from "@/components/ui/beam-card";

export function HeroSection() {
  return (
    <section id="hero" className="relative w-full pt-16 pb-14 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      {/* Background ambient radial glow */}
      <div className="pointer-events-none absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-orange-500/[0.05] blur-[140px] rounded-full" />

      <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-10">
        {/* Main Content Info */}
        <div className="flex-1 max-w-2xl">
          {/* Status Pill */}
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-lg bg-orange-500/[0.1] border border-orange-500/30 text-orange-300 text-xs sm:text-sm font-mono mb-5 shadow-sm">
            <Shield className="w-4 h-4 text-orange-400 shrink-0" />
            <span className="font-semibold">Assistente de Suporte a Sistemas</span>
            <span className="text-zinc-600">•</span>
            <span className="text-zinc-300">Nexdom Healthtech</span>
          </div>

          {/* Name with prominent Blur Reveal */}
          <div className="mb-4">
            <BlurTextReveal
              text={PERSONAL_INFO.name}
              className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-[1.08]"
              delay={0.1}
              as="h2"
            />
          </div>

          {/* Personal Bio */}
          <p className="text-base sm:text-lg text-zinc-300 leading-relaxed font-normal">
            Atuo focado em assegurar a <strong className="text-white font-semibold">estabilidade operacional</strong>, confiabilidade e alta eficiência de sistemas corporativos de missão crítica. Experiência sólida em <span className="text-amber-300 font-medium">diagnósticos técnicos aprofundados</span>, consultas analíticas em <span className="text-rose-300 font-medium">SQL Server</span> e desenvolvimento de automações com <span className="text-emerald-300 font-medium">Python</span> para otimização de fluxos de suporte e manufatura.
          </p>

          {/* Quick Strengths */}
          <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 gap-3">
            <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/[0.08]">
              <div className="text-xs text-zinc-400 font-mono">Especialidade</div>
              <div className="text-sm sm:text-base font-bold text-zinc-100 mt-0.5">Estabilidade & Confiabilidade</div>
            </div>
            <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/[0.08]">
              <div className="text-xs text-zinc-400 font-mono">Automação</div>
              <div className="text-sm sm:text-base font-bold text-zinc-100 mt-0.5">Python & Scripts</div>
            </div>
            <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/[0.08] col-span-2 sm:col-span-1">
              <div className="text-xs text-zinc-400 font-mono">Bancos de Dados</div>
              <div className="text-sm sm:text-base font-bold text-zinc-100 mt-0.5">SQL Server & Queries</div>
            </div>
          </div>

          {/* CTAs */}
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href={PERSONAL_INFO.cvDownloadPath}
              download="GIOVANNI_CASTRO_Curriculo.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-7 py-3.5 rounded-xl text-sm sm:text-base font-semibold text-white bg-orange-600 hover:bg-orange-500 border border-orange-400/30 transition-all duration-200 shadow-[0_0_25px_rgba(249,115,22,0.35)] hover:shadow-[0_0_35px_rgba(249,115,22,0.55)] active:scale-[0.98]"
            >
              <Download className="w-5 h-5" />
              <span>Baixar Currículo (PDF)</span>
            </a>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-sm sm:text-base font-medium text-zinc-300 hover:text-white bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.1] hover:border-white/[0.2] transition-all duration-200"
            >
              <span>Vamos nos conectar</span>
              <ArrowUpRight className="w-4 h-4 text-zinc-400" />
            </a>
          </div>
        </div>

        {/* Profile Card with Beam Light */}
        <div className="shrink-0 mx-auto md:mx-0">
          <BeamCard
            className="w-52 sm:w-64"
            innerClassName="p-2 flex flex-col items-center"
            glowColor="amber"
            beamSpeed="normal"
          >
            <div className="relative w-48 h-48 sm:w-60 sm:h-60 rounded-lg overflow-hidden">
              <Image
                src="/assets/profile.jpg"
                alt="Giovanni Castro"
                fill
                sizes="(max-width: 640px) 192px, 240px"
                className="object-cover object-center filter grayscale contrast-[1.08] hover:grayscale-0 transition-all duration-500"
                priority
              />
            </div>
            <div className="mt-3 text-center pb-1">
              <div className="text-base font-bold text-white font-mono">Giovanni Castro</div>
              <div className="text-xs text-orange-400 font-mono mt-0.5">Systems Support & IT Reliability</div>
            </div>
          </BeamCard>
        </div>
      </div>

      {/* Spell UI Logos Carousel (Big Graphical Logos) */}
      <div className="mt-14 pt-8 border-t border-white/[0.06]">
        <div className="flex items-center justify-between mb-2 px-1">
          <span className="text-xs font-mono uppercase tracking-widest text-zinc-400 font-semibold flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
            Stack Tecnológica & Ferramentas
          </span>
          <span className="text-xs font-mono text-zinc-500 hidden sm:inline">
            Passe o mouse para inspecionar
          </span>
        </div>
        <TechLogosCarousel />
      </div>
    </section>
  );
}
