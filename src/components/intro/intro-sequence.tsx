"use client";

import React from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { PlasmaBackground } from "./plasma-background";
import { BlurTextReveal } from "@/components/ui/blur-text-reveal";

export function IntroSequence() {
  const scrollToHero = () => {
    const hero = document.getElementById("hero");
    if (hero) {
      hero.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative w-full min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Spell UI WebGL Plasma Shader Background */}
      <PlasmaBackground />

      <div className="relative z-10 max-w-5xl mx-auto text-center flex flex-col items-center justify-center">

        {/* Big Personal Name & Role Headline */}
        <div className="max-w-4xl mx-auto">
          <BlurTextReveal
            text="Olá, sou o Giovanni Castro"
            className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white leading-[1.12]"
            delay={0.1}
            duration={0.6}
            as="h1"
          />
        </div>

        {/* Role & Mission Statement */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-4"
        >
          <span className="text-xl sm:text-2xl md:text-3xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-orange-300 via-amber-300 to-orange-200 font-sans">
            Assistente de Suporte a Sistemas & Confiabilidade de TI
          </span>
        </motion.div>

        {/* Catchphrase */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-5 text-base sm:text-lg md:text-xl text-zinc-300 max-w-2xl font-normal leading-relaxed"
        >
          Conectando análise técnica profunda, automação em Python e estabilidade operacional para sistemas de missão crítica.
        </motion.p>

        {/* Action Button */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-9 flex flex-wrap items-center justify-center gap-4"
        >
          <button
            onClick={scrollToHero}
            className="group relative inline-flex items-center gap-3 px-8 py-3.5 rounded-xl text-base font-semibold text-white bg-orange-600/90 hover:bg-orange-500 border border-orange-400/30 backdrop-blur-xl transition-all duration-300 shadow-[0_0_30px_rgba(249,115,22,0.35)] hover:shadow-[0_0_40px_rgba(249,115,22,0.6)] active:scale-[0.98]"
          >
            <span>Conhecer Minha Trajetória</span>
            <ChevronDown className="w-5 h-5 text-white/80 group-hover:translate-y-1 transition-transform duration-200" />
          </button>
        </motion.div>
      </div>

      {/* Subtle bottom scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.1, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer opacity-70 hover:opacity-100 transition-opacity"
        onClick={scrollToHero}
      >
        <span className="text-xs font-mono tracking-widest uppercase text-zinc-400 font-medium">Explorar</span>
        <div className="w-5 h-9 rounded-full border border-zinc-500 flex items-start justify-center p-1">
          <motion.div
            animate={{ y: [0, 14, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
            className="w-1.5 h-1.5 rounded-full bg-orange-400"
          />
        </div>
      </motion.div>
    </section>
  );
}
