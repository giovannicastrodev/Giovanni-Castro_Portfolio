"use client";

import React, { useEffect, useRef } from "react";

export function PrismBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);

    // Prism chromatic nodes representing light beams dispersing
    const beams = [
      { x: width * 0.25, y: height * 0.35, vx: 0.15, vy: 0.2, r: 240, color: "rgba(99, 102, 241, 0.22)" },  // Indigo
      { x: width * 0.75, y: height * 0.45, vx: -0.18, vy: 0.15, r: 280, color: "rgba(6, 182, 212, 0.20)" }, // Cyan
      { x: width * 0.50, y: height * 0.65, vx: 0.12, vy: -0.16, r: 260, color: "rgba(139, 92, 246, 0.18)" },// Violet
      { x: width * 0.35, y: height * 0.75, vx: -0.14, vy: -0.12, r: 220, color: "rgba(16, 185, 129, 0.12)" },// Emerald
      { x: width * 0.65, y: height * 0.25, vx: 0.16, vy: 0.14, r: 200, color: "rgba(236, 72, 153, 0.14)" }, // Rose/Magenta
    ];

    let t = 0;
    const render = () => {
      t += 0.005;
      ctx.clearRect(0, 0, width, height);

      // Deep dark background
      ctx.fillStyle = "#05070d";
      ctx.fillRect(0, 0, width, height);

      // Render prism spectral dispersion gradients
      beams.forEach((beam, i) => {
        beam.x += Math.sin(t + i) * 0.4;
        beam.y += Math.cos(t + i * 1.5) * 0.4;

        const grad = ctx.createRadialGradient(
          beam.x,
          beam.y,
          0,
          beam.x,
          beam.y,
          beam.r + Math.sin(t * 2 + i) * 30
        );
        grad.addColorStop(0, beam.color);
        grad.addColorStop(0.5, beam.color.replace(/[\d\.]+\)$/, "0.08)"));
        grad.addColorStop(1, "rgba(5, 7, 13, 0)");

        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(beam.x, beam.y, beam.r * 1.4, 0, Math.PI * 2);
        ctx.fill();
      });

      // Refraction line simulating a prism crystal edge across the screen
      const edgeGrad = ctx.createLinearGradient(0, height * 0.2, width, height * 0.8);
      edgeGrad.addColorStop(0, "rgba(99, 102, 241, 0)");
      edgeGrad.addColorStop(0.45, "rgba(6, 182, 212, 0.08)");
      edgeGrad.addColorStop(0.5, "rgba(255, 255, 255, 0.15)");
      edgeGrad.addColorStop(0.55, "rgba(236, 72, 153, 0.08)");
      edgeGrad.addColorStop(1, "rgba(139, 92, 246, 0)");

      ctx.save();
      ctx.strokeStyle = edgeGrad;
      ctx.lineWidth = 1.5;
      ctx.beginPath();
      ctx.moveTo(-100, height * 0.35 + Math.sin(t) * 15);
      ctx.bezierCurveTo(
        width * 0.3,
        height * 0.2 + Math.cos(t) * 20,
        width * 0.7,
        height * 0.8 + Math.sin(t) * 20,
        width + 100,
        height * 0.65 + Math.cos(t) * 15
      );
      ctx.stroke();
      ctx.restore();

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden select-none">
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full block" />
      {/* Subtle overlay grid for tech precision vibe */}
      <div className="absolute inset-0 bg-grid-subtle opacity-40 mix-blend-overlay" />
      {/* Top vignette & edge feathering */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#05070d]/30 to-[#05070d]" />
    </div>
  );
}

