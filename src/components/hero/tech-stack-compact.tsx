"use client";

import React, { useState } from "react";
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
  GitBranch,
  ShieldCheck,
  Check
} from "lucide-react";
import { TECH_STACK } from "@/data/portfolio-data";
import { BeamCard } from "@/components/ui/beam-card";

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

const CATEGORIES = [
  { id: "all", label: "Todas" },
  { id: "Core Systems", label: "Sistemas & Infra" },
  { id: "Databases", label: "Bancos de Dados" },
  { id: "Automation & Code", label: "Automação & Código" },
  { id: "DevOps", label: "DevOps & Ferramentas" },
];

export function TechStackCompact() {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const filteredTech = selectedCategory === "all"
    ? TECH_STACK
    : TECH_STACK.filter((t) => t.category === selectedCategory);

  return (
    <div className="w-full mt-10">
      {/* Category Pills Header */}
      <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
          <span className="text-xs sm:text-sm font-mono uppercase tracking-widest text-zinc-300 font-semibold">
            Stack Tecnológica & Ferramentas
          </span>
        </div>

        {/* Filter Segmented Controls */}
        <div className="flex flex-wrap gap-1.5 p-1 rounded-lg bg-white/[0.03] border border-white/[0.08]">
          {CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-3 py-1 rounded-md text-xs font-medium transition-all ${
                selectedCategory === cat.id
                  ? "bg-indigo-600 text-white shadow-[0_0_12px_rgba(99,102,241,0.4)]"
                  : "text-zinc-400 hover:text-zinc-200 hover:bg-white/[0.04]"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* Compact Grid with BeamCard styling */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2.5">
        {filteredTech.map((tech) => (
          <div
            key={tech.name}
            className="group relative rounded-lg p-[1px] overflow-hidden bg-white/[0.06] hover:bg-white/[0.14] transition-all duration-300"
          >
            {/* Subtle Infinite Rotating Beam on hover */}
            <div className="pointer-events-none absolute inset-[-150%] opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-[spin_5s_linear_infinite] bg-[conic-gradient(from_0deg_at_50%_50%,transparent_0deg,transparent_280deg,#6366f1_320deg,#06b6d4_360deg)]" />

            <div className="relative z-10 rounded-[7px] bg-[#070b13] px-3.5 py-2.5 flex items-center gap-2.5">
              <div className="p-1 rounded bg-white/[0.04] shrink-0">
                {TECH_ICONS[tech.name] || <Terminal className="w-4 h-4 text-zinc-400" />}
              </div>
              <div className="min-w-0">
                <div className="text-xs sm:text-sm font-semibold text-zinc-200 truncate group-hover:text-white transition-colors">
                  {tech.name}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

