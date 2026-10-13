"use client";

import React, { useState } from "react";
import { Mail, Linkedin, Github, Check, Copy, ArrowUpRight } from "lucide-react";
import { PERSONAL_INFO } from "@/data/portfolio-data";
import { BlurTextReveal } from "@/components/ui/blur-text-reveal";

export function FooterConnect() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <footer id="contact" className="relative w-full border-t border-white/[0.08] bg-[#030509] pt-24 pb-14 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Ambient bottom glow */}
      <div className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-80 bg-orange-600/[0.06] blur-[120px] rounded-full" />

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        {/* Prominent LinkedIn Emblem immediately anchoring the call to action */}
        <div className="flex flex-col items-center justify-center mb-6">
          <a
            href={PERSONAL_INFO.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center justify-center p-4 rounded-2xl bg-[#0A66C2]/15 border border-[#0A66C2]/40 shadow-[0_0_30px_rgba(10,102,194,0.35)] hover:shadow-[0_0_45px_rgba(10,102,194,0.6)] hover:scale-105 transition-all duration-300"
            aria-label="Perfil do LinkedIn"
          >
            <Linkedin className="w-10 h-10 text-[#0A66C2] fill-[#0A66C2]" />
          </a>

          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0A66C2]/10 border border-[#0A66C2]/30 text-[#70b5f9] text-xs sm:text-sm font-mono uppercase tracking-widest mt-4 font-semibold">
            Rede Profissional & Conexão
          </div>
        </div>

        {/* Headline with LinkedIn focus */}
        <div>
          <BlurTextReveal
            text="Vamos nos conectar no LinkedIn?"
            className="text-4xl sm:text-6xl md:text-7xl font-extrabold text-white tracking-tight"
            delay={0.1}
            as="h2"
          />
        </div>

        <p className="mt-4 text-base sm:text-xl text-zinc-300 max-w-2xl mx-auto font-normal leading-relaxed">
          Estou sempre aberto a trocar ideias sobre suporte a sistemas corporativos, resolução estruturada de problemas, automação e oportunidades na área de TI.
        </p>

        {/* Action Buttons: LinkedIn & Email */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          {/* Prominent LinkedIn Button */}
          <a
            href={PERSONAL_INFO.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center gap-3 px-8 py-4 rounded-xl text-base font-bold text-white bg-[#0A66C2] hover:bg-[#004182] transition-all duration-300 shadow-[0_0_35px_rgba(10,102,194,0.45)] hover:shadow-[0_0_55px_rgba(10,102,194,0.7)] active:scale-[0.98]"
          >
            <Linkedin className="w-5 h-5 text-white fill-white" />
            <span>Acessar Meu Perfil no LinkedIn</span>
            <ArrowUpRight className="w-5 h-5 text-white/90 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>

          {/* Email Copier Button */}
          <button
            onClick={handleCopyEmail}
            className="inline-flex items-center gap-3 px-7 py-4 rounded-xl text-base font-medium text-zinc-200 bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.1] hover:border-white/[0.25] transition-all duration-200 active:scale-[0.98]"
          >
            {copied ? (
              <>
                <Check className="w-5 h-5 text-emerald-400" />
                <span className="text-emerald-300 font-mono text-sm font-semibold">E-mail copiado!</span>
              </>
            ) : (
              <>
                <Mail className="w-5 h-5 text-zinc-400" />
                <span className="font-mono text-sm">{PERSONAL_INFO.email}</span>
                <Copy className="w-4 h-4 text-zinc-500" />
              </>
            )}
          </button>
        </div>

        {/* Secondary Info: Only GitHub link, no phone or city */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-6 text-sm text-zinc-400 font-mono">
          <a
            href={PERSONAL_INFO.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-white transition-colors"
          >
            <Github className="w-4 h-4" />
            <span>github.com/giovannicastrodev</span>
          </a>
          <span>•</span>
          <span className="text-zinc-500">
            {PERSONAL_INFO.email}
          </span>
        </div>

        <div className="mt-14 pt-8 border-t border-white/[0.04] text-center text-xs sm:text-sm text-zinc-500 font-mono">
          © {new Date().getFullYear()} Giovanni Castro. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
}
