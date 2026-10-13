"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface BlurRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
}

export function BlurReveal({
  children,
  className,
  delay = 0.1,
  duration = 0.6,
}: BlurRevealProps) {
  return (
    <motion.div
      initial={{ opacity: 0, filter: "blur(8px)", y: 14 }}
      whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        duration,
        delay,
        ease: [0.16, 1, 0.3, 1], // Smooth cubic-bezier
      }}
      className={cn(className)}
    >
      {children}
    </motion.div>
  );
}

