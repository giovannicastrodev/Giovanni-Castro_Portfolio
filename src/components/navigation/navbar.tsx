"use client";

import React, { useState, useEffect } from "react";
import { Download, Menu, X } from "lucide-react";
import { PERSONAL_INFO } from "@/data/portfolio-data";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Início", href: "#hero" },
    { name: "Metodologia", href: "#process" },
    { name: "Experiência", href: "#experience" },
    { name: "Projetos", href: "#projects" },
    { name: "Formação", href: "#education" },
    { name: "Contato", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#04060a]/85 backdrop-blur-xl border-b border-white/[0.08] py-3.5 shadow-2xl"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Name / Brand (without any GC icon) */}
        <a href="#hero" className="flex items-center gap-2 group">
          <span className="w-2 h-2 rounded-full bg-emerald-400 group-hover:scale-125 transition-transform" />
          <span className="text-base font-bold text-white tracking-tight group-hover:text-orange-300 transition-colors">
            Giovanni Castro
          </span>
          <span className="text-xs text-zinc-500 font-mono hidden sm:inline ml-1">
            • Portfólio
          </span>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-1.5 rounded-full bg-white/[0.04] border border-white/[0.08] px-4 py-1.5 backdrop-blur-xl shadow-inner">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="px-3.5 py-1 text-xs sm:text-sm font-medium text-zinc-300 hover:text-white transition-colors rounded-full hover:bg-white/[0.08]"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Right CTA: Baixar CV */}
        <div className="flex items-center gap-3">
          <a
            href={PERSONAL_INFO.cvDownloadPath}
            download="GIOVANNI_CASTRO_Curriculo.pdf"
            className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold text-white bg-orange-600 hover:bg-orange-500 border border-orange-400/30 transition-all shadow-[0_0_15px_rgba(249,115,22,0.3)]"
          >
            <Download className="w-4 h-4" />
            <span>Currículo</span>
          </a>

          {/* Mobile menu toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg bg-white/[0.06] text-zinc-300 hover:text-white border border-white/[0.1]"
            aria-label="Alternar menu de navegação"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#070b13] border-b border-white/[0.08] px-6 py-5 space-y-3 shadow-2xl">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block text-sm font-medium text-zinc-200 hover:text-white py-1.5"
            >
              {link.name}
            </a>
          ))}
          <a
            href={PERSONAL_INFO.cvDownloadPath}
            download="GIOVANNI_CASTRO_Curriculo.pdf"
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center justify-center gap-2 w-full py-3 rounded-xl text-sm font-semibold text-white bg-orange-600 mt-3"
          >
            <Download className="w-4 h-4" />
            <span>Baixar Currículo (PDF)</span>
          </a>
        </div>
      )}
    </header>
  );
}
