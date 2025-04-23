"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import React from "react";

interface BlurFadeProps {
  className?: string;
  children: React.ReactNode;
  duration?: number;
  delay?: number;
  blur?: number;
  y?: number;
  x?: number;
  scale?: number;
  viewportMargin?: string;
  once?: boolean;
}

export const BlurFade = ({
  className,
  children,
  duration = 0.5,
  delay = 0,
  blur = 8,
  y = 20,
  x = 0,
  scale = 1,
  viewportMargin = "0px 0px -100px 0px",
  once = true,
}: BlurFadeProps) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
        filter: `blur(${blur}px)`,
        transform: `translate(${x}px, ${y}px) scale(${scale})`,
      }}
      whileInView={{
        opacity: 1,
        filter: "blur(0px)",
        transform: "translate(0px, 0px) scale(1)",
      }}
      transition={{
        duration,
        delay,
        ease: [0.17, 0.67, 0.83, 0.91],
      }}
      viewport={{ margin: viewportMargin, once }}
      className={cn(className)}
    >
      {children}
    </motion.div>
  );
};
