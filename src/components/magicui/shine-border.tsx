"use client";

import { cn } from "@/lib/utils";
import * as React from "react";

interface ShineBorderProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  borderWidth?: number;
  shine?: boolean;
  shineStrength?: number;
  borderRadius?: string;
  background?: string;
  shimmerColor?: string;
}

export const ShineBorder = ({
  children,
  className,
  borderWidth = 1,
  shine = true,
  shineStrength = 0.5,
  borderRadius = "0.5rem",
  background = "hsl(var(--accent)/0.1)",
  shimmerColor = "hsl(var(--accent)/0.3)",
  ...props
}: ShineBorderProps) => {
  return (
    <div
      className={cn("relative group overflow-hidden", className)}
      style={{
        padding: borderWidth,
        borderRadius: borderRadius,
      }}
      {...props}
    >
      {/* Shimmer effect */}
      {shine && (
        <div
          className="absolute inset-0 z-[1] overflow-hidden"
          style={{
            borderRadius,
            background,
          }}
        >
          <div
            className="absolute inset-0 z-[1] opacity-0 group-hover:opacity-100 transition-opacity duration-1000"
            style={{
              background: `linear-gradient(90deg, transparent, ${shimmerColor}, transparent)`,
              transform: "translateX(-100%)",
              animation: "shimmer 2s infinite",
            }}
          />
        </div>
      )}

      {/* Content */}
      <div
        className="relative z-[2] rounded-sm w-full h-full"
        style={{
          background: "var(--background)",
          borderRadius: `calc(${borderRadius} - ${borderWidth}px)`,
        }}
      >
        {children}
      </div>

      <style jsx>{`
        @keyframes shimmer {
          100% {
            transform: translateX(100%);
          }
        }
      `}</style>
    </div>
  );
};
