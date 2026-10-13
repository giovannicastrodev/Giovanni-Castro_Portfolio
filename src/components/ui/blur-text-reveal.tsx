"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface BlurTextRevealProps {
  text: string;
  className?: string;
  wordClassName?: string;
  delay?: number;
  duration?: number;
  as?: "h1" | "h2" | "h3" | "h4" | "p" | "span" | "div";
}

export function BlurTextReveal({
  text,
  className,
  wordClassName,
  delay = 0.1,
  duration = 0.55,
  as: Component = "h2",
}: BlurTextRevealProps) {
  const words = text.split(" ");

  return (
    <Component className={cn("inline-block", className)}>
      {words.map((word, index) => (
        <motion.span
          key={`${word}-${index}`}
          initial={{ filter: "blur(16px)", opacity: 0, y: 16 }}
          whileInView={{ filter: "blur(0px)", opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-30px" }}
          transition={{
            duration,
            delay: delay + index * 0.045,
            ease: [0.16, 1, 0.3, 1],
          }}
          className={cn("inline-block mr-[0.26em] will-change-[filter,opacity,transform]", wordClassName)}
        >
          {word}
        </motion.span>
      ))}
    </Component>
  );
}

