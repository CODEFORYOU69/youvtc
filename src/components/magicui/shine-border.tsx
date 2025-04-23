"use client";

import { cn } from "@/lib/utils";
import * as React from "react";

interface ShineBorderProps {
  children: React.ReactNode;
  isHovering?: boolean;
  className?: string;
  shimmerClassName?: string;
  shimmerSize?: string;
  shimmerDuration?: number;
  borderWidth?: string;
  radius?: number;
  wrapperClassName?: string;
  shimmerColor?: string;
  borderRadius?: string;
}

/**
 * Shine Border
 *
 * An animated background border effect component with configurable properties.
 */
export function ShineBorder({
  children,
  isHovering = false,
  className,
  shimmerClassName,
  shimmerSize = "150%",
  shimmerDuration = 5,
  borderWidth = "1px",
  radius = 8,
  wrapperClassName,
  shimmerColor = "hsl(0 0% 100% / 0.2)",
  borderRadius,
}: ShineBorderProps) {
  return (
    <div
      className={cn(
        "group relative overflow-hidden rounded-md p-[1px]",
        wrapperClassName
      )}
      style={{
        borderRadius,
        padding: borderWidth,
      }}
    >
      <div
        className={cn("absolute inset-0 overflow-hidden", shimmerClassName)}
        style={{
          borderRadius: borderRadius || `${radius}px`,
        }}
      >
        <div
          className={cn(
            "absolute inset-[-100%] animate-[spin_4s_linear_infinite]",
            isHovering && "opacity-100",
            !isHovering && "opacity-0",
            "transition-opacity duration-500"
          )}
          style={{
            background: `conic-gradient(from 0deg, transparent 0 210deg, ${shimmerColor} 240deg 300deg, transparent)`,
            animationDuration: `${shimmerDuration}s`,
            backgroundSize: shimmerSize,
          }}
        />
      </div>
      <div
        className={cn("relative z-10", className)}
        style={{
          borderRadius: borderRadius || `calc(${radius}px - 1px)`,
        }}
      >
        {children}
      </div>
    </div>
  );
}
