"use client";

import React, { useEffect, useRef } from "react";

export function PlasmaBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const gl = canvas.getContext("webgl") || (canvas.getContext("experimental-webgl") as WebGLRenderingContext | null);
    if (!gl) return;

    let animationFrameId: number;

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      gl.viewport(0, 0, canvas.width, canvas.height);
    };

    window.addEventListener("resize", resize);
    resize();

    // Vertex shader
    const vsSource = `
      attribute vec2 position;
      void main() {
        gl_Position = vec4(position, 0.0, 1.0);
      }
    `;

    // Fragment shader: Spell UI style animated plasma / prism liquid gradient
    const fsSource = `
      precision highp float;
      uniform float u_time;
      uniform vec2 u_resolution;
      uniform vec2 u_mouse;

      void main() {
        vec2 st = (gl_FragCoord.xy * 2.0 - u_resolution.xy) / min(u_resolution.x, u_resolution.y);
        float t = u_time * 0.35;

        // Interactive mouse offset with gentle easing
        vec2 m = (u_mouse / u_resolution) * 2.0 - 1.0;
        st += m * 0.08;

        // Fluid trigonometric domain warping
        vec2 p = st * 1.1;
        for (int i = 1; i < 4; i++) {
          float fi = float(i);
          p.x += 0.35 / fi * sin(fi * 2.4 * p.y + t * 0.8 + 0.4 * fi);
          p.y += 0.35 / fi * cos(fi * 2.4 * p.x + t * 0.7 + 0.3 * fi);
        }

        // Plasma wave superposition
        float v1 = sin(p.x * 2.2 + t * 1.1) + cos(p.y * 2.2 + t * 0.9);
        float v2 = sin(sqrt(p.x * p.x + p.y * p.y + 1.0) * 2.8 - t * 1.3);
        float v = (v1 + v2) * 0.5;

        // Warm Orange & Deep Black Spectrum (Obsidian, Terracotta, Vibrant Orange, Warm Crimson, Golden Amber)
        vec3 dark = vec3(0.015, 0.012, 0.022);       // Deep Obsidian Black #040306
        vec3 terracotta = vec3(0.68, 0.20, 0.04);   // Deep Burnt Terracotta
        vec3 orange = vec3(0.96, 0.44, 0.06);       // Vibrant Warm Orange #f5700f
        vec3 crimson = vec3(0.82, 0.12, 0.05);      // Deep Crimson Undertone
        vec3 amber = vec3(1.00, 0.68, 0.12);        // Glowing Golden Amber #ffad1f

        vec3 col = mix(dark, terracotta, smoothstep(-0.7, 0.2, v));
        col = mix(col, orange, smoothstep(-0.1, 0.65, sin(v * 2.5 + t * 0.6)));
        col = mix(col, crimson, smoothstep(0.3, 1.1, cos(p.x * 2.8 + t * 0.8)));
        col = mix(col, amber, smoothstep(0.55, 1.35, sin(p.y * 3.0 - t * 0.5)));

        // Vignette to blend into deep dark background seamlessly
        float dist = length(st * 0.65);
        float vignette = smoothstep(1.35, 0.2, dist);
        col *= vignette * 0.88;

        // Subtle film grain / dither to eliminate color banding
        float noise = fract(sin(dot(gl_FragCoord.xy, vec2(12.9898, 78.233))) * 43758.5453) * 0.028;
        col += noise;

        gl_FragColor = vec4(col, 1.0);
      }
    `;

    const createShader = (type: number, source: string) => {
      const shader = gl.createShader(type);
      if (!shader) return null;
      gl.shaderSource(shader, source);
      gl.compileShader(shader);
      if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
        gl.deleteShader(shader);
        return null;
      }
      return shader;
    };

    const vs = createShader(gl.VERTEX_SHADER, vsSource);
    const fs = createShader(gl.FRAGMENT_SHADER, fsSource);
    if (!vs || !fs) return;

    const program = gl.createProgram();
    if (!program) return;
    gl.attachShader(program, vs);
    gl.attachShader(program, fs);
    gl.linkProgram(program);
    gl.useProgram(program);

    // Full screen quad buffer
    const positionBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
    gl.bufferData(
      gl.ARRAY_BUFFER,
      new Float32Array([-1, -1, 1, -1, -1, 1, -1, 1, 1, -1, 1, 1]),
      gl.STATIC_DRAW
    );

    const positionLocation = gl.getAttribLocation(program, "position");
    gl.enableVertexAttribArray(positionLocation);
    gl.vertexAttribPointer(positionLocation, 2, gl.FLOAT, false, 0, 0);

    const uTime = gl.getUniformLocation(program, "u_time");
    const uResolution = gl.getUniformLocation(program, "u_resolution");
    const uMouse = gl.getUniformLocation(program, "u_mouse");

    let mouseX = window.innerWidth * 0.5;
    let mouseY = window.innerHeight * 0.5;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };
    window.addEventListener("mousemove", handleMouseMove);

    const startTime = performance.now();
    const render = () => {
      const elapsed = (performance.now() - startTime) * 0.001;
      gl.uniform1f(uTime, elapsed);
      gl.uniform2f(uResolution, canvas.width, canvas.height);
      gl.uniform2f(uMouse, mouseX, mouseY);

      gl.drawArrays(gl.TRIANGLES, 0, 6);
      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden select-none">
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full block opacity-85" />
      {/* Subtle high-tech grid overlay */}
      <div className="absolute inset-0 bg-grid-subtle opacity-30 mix-blend-overlay" />
      {/* Bottom feathering into content */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#04060a]/40 to-[#04060a]" />
    </div>
  );
}

