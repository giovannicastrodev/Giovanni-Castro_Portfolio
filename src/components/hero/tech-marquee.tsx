"use client";

import React from "react";
import { 
  Terminal, 
  Container, 
  Database, 
  FileCode2, 
  Cpu, 
  Layers, 
  Code2, 
  Binary, 
  HardDrive,
  GitBranch 
} from "lucide-react";
import { TECH_STACK } from "@/data/portfolio-data";

const TECH_ICONS: Record<string, React.ReactNode> = {
  Linux: <Terminal className="w-4 h-4 text-cyan-400" />,
  Docker: <Container className="w-4 h-4 text-blue-400" />,
  "SQL Server": <Database className="w-4 h-4 text-rose-400" />,
  Python: <FileCode2 className="w-4 h-4 text-emerald-400" />,
  Java: <Cpu className="w-4 h-4 text-amber-400" />,
  "Spring Boot": <Layers className="w-4 h-4 text-green-400" />,
  PHP: <Code2 className="w-4 h-4 text-indigo-400" />,
  JavaScript: <Binary className="w-4 h-4 text-yellow-400" />,
  "Bash & Shell": <Terminal className="w-4 h-4 text-zinc-300" />,
  PostgreSQL: <Database className="w-4 h-4 text-sky-400" />,
  "Git & GitHub": <GitBranch className="w-4 h-4 text-orange-400" />,
  "Hardware Diagnostics": <HardDrive className="w-4 h-4 text-teal-400" />,
};

export function TechMarquee() {
  // Duplicate array for seamless infinite marquee loop
  const duplicatedTech = [...TECH_STACK, ...TECH_STACK];

  return (
    <div className="relative w-full overflow-hidden py-4 my-6">
      {/* Edge gradient fade masks */}
      <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-r from-[#05070d] to-transparent z-10" />
      <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-l from-[#05070d] to-transparent z-10" />

      {/* Infinite scrolling ticker */}
      <div className="flex w-max animate-marquee hover:[animation-play-state:paused] gap-4">
        {duplicatedTech.map((tech, index) => (
          <div
            key={`${tech.name}-${index}`}
            className="flex items-center gap-2.5 px-4 py-2 rounded-xl bg-[#090d16]/90 border border-white/[0.08] hover:border-white/[0.2] transition-colors shadow-sm cursor-default"
          >
            {TECH_ICONS[tech.name] || <Terminal className="w-4 h-4 text-zinc-400" />}
            <span className="text-xs sm:text-sm font-medium text-zinc-200 tracking-wide whitespace-nowrap">
              {tech.name}
            </span>
            <span className="text-[10px] font-mono uppercase text-zinc-500 bg-white/[0.04] px-1.5 py-0.5 rounded border border-white/[0.05]">
              {tech.category}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

