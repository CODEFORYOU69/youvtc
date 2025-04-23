"use client";

import { cn } from "@/lib/utils";
import React from "react";

interface BorderBeamProps {
  className?: string;
  containerClassName?: string;
  children: React.ReactNode;
  size?: number;
  duration?: number;
  borderWidth?: number;
  yOffset?: number;
  hideBeam?: boolean;
  colorFrom?: string;
  colorTo?: string;
}

export const BorderBeam = ({
  className,
  containerClassName,
  children,
  duration = 2,
  size = 150,
  borderWidth = 1,
  yOffset = 100,
  hideBeam = false,
  colorFrom,
  colorTo,
}: BorderBeamProps) => {
  const gradientColors =
    colorFrom && colorTo
      ? `from-[${colorFrom}] via-transparent to-[${colorTo}]`
      : "from-transparent via-neutral-100 dark:via-neutral-950 to-transparent";

  return (
    <div className={cn("relative", containerClassName)}>
      <div
        style={{
          borderWidth: `${borderWidth}px`,
        }}
        className={cn(
          "border border-neutral-200 dark:border-neutral-800 rounded-lg p-4 relative",
          className
        )}
      >
        {!hideBeam && (
          <div
            style={{
              width: `${size}%`,
              height: `${size}%`,
              filter: "blur(100px)",
              animation: `beam ${duration}s ease-in-out infinite`,
              top: `${yOffset}%`,
            }}
            className={cn(
              "absolute inset-x-0 bg-gradient-to-r -z-10",
              gradientColors
            )}
          />
        )}
        {children}
      </div>
    </div>
  );
};
