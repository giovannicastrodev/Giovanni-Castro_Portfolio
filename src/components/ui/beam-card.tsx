"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface BeamCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  innerClassName?: string;
  glowColor?: "orange" | "amber" | "indigo" | "cyan" | "emerald" | "multi";
  beamSpeed?: "normal" | "slow" | "fast";
  noBorderBeam?: boolean;
}

export function BeamCard({
  children,
  className,
  innerClassName,
  glowColor = "amber",
  beamSpeed = "normal",
  noBorderBeam = false,
  ...props
}: BeamCardProps) {
  const gradientMap = {
    orange: "bg-[conic-gradient(from_0deg_at_50%_50%,transparent_0deg,transparent_280deg,#f97316_320deg,#fbbf24_360deg)]",
    amber: "bg-[conic-gradient(from_0deg_at_50%_50%,transparent_0deg,transparent_280deg,#f59e0b_320deg,#ea580c_360deg)]",
    indigo: "bg-[conic-gradient(from_0deg_at_50%_50%,transparent_0deg,transparent_280deg,#f97316_320deg,#f59e0b_360deg)]",
    cyan: "bg-[conic-gradient(from_0deg_at_50%_50%,transparent_0deg,transparent_290deg,#06b6d4_330deg,#3b82f6_360deg)]",
    emerald: "bg-[conic-gradient(from_0deg_at_50%_50%,transparent_0deg,transparent_290deg,#10b981_330deg,#06b6d4_360deg)]",
    multi: "bg-[conic-gradient(from_0deg_at_50%_50%,transparent_0deg,transparent_260deg,#ec4899_300deg,#8b5cf6_330deg,#06b6d4_360deg)]",
  };

  const speedClass = {
    fast: "animate-[spin_4s_linear_infinite]",
    normal: "animate-[spin_7s_linear_infinite]",
    slow: "animate-[spin_12s_linear_infinite]",
  }[beamSpeed];

  return (
    <div
      className={cn(
        "relative rounded-xl p-[1px] overflow-hidden bg-white/[0.08] hover:bg-white/[0.14] transition-all duration-300 group shadow-lg",
        className
      )}
      {...props}
    >
      {/* Infinite Rotating Border Beam */}
      {!noBorderBeam && (
        <div
          className={cn(
            "pointer-events-none absolute inset-[-150%] opacity-40 group-hover:opacity-100 transition-opacity duration-500",
            gradientMap[glowColor],
            speedClass
          )}
        />
      )}

      {/* Card Content Surface with Crisp Modern Chamfer (11px) */}
      <div
        className={cn(
          "relative z-10 rounded-[11px] bg-[#070b13] p-6 sm:p-7 h-full w-full backdrop-blur-md",
          innerClassName
        )}
      >
        {children}
      </div>
    </div>
  );
}

