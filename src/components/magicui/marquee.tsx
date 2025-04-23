"use client";

import { cn } from "@/lib/utils";
import * as React from "react";

interface MarqueeProps {
  className?: string;
  reverse?: boolean;
  pauseOnHover?: boolean;
  vertical?: boolean;
  children: React.ReactNode;
  repeat?: number;
}

export const Marquee = ({
  className,
  reverse,
  pauseOnHover,
  vertical,
  children,
  repeat = 2,
}: MarqueeProps) => {
  const contentRef = React.useRef<HTMLDivElement>(null);
  const [contentWidth, setContentWidth] = React.useState(0);
  const [contentHeight, setContentHeight] = React.useState(0);

  React.useEffect(() => {
    if (contentRef.current) {
      setContentWidth(contentRef.current.scrollWidth);
      setContentHeight(contentRef.current.scrollHeight);
    }
  }, [children]);

  const contentsArray = Array.from({ length: repeat }, (_, i) => (
    <div key={i}>{children}</div>
  ));

  return (
    <div
      className={cn(
        "flex overflow-hidden relative",
        vertical ? "flex-col" : "flex-row",
        className
      )}
    >
      <div
        ref={contentRef}
        className={cn(
          "flex",
          vertical ? "flex-col" : "flex-row",
          "animate-marquee whitespace-nowrap",
          reverse && "animate-marquee-reverse",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
        style={{
          animationDuration: `${
            vertical ? contentHeight / 50 : contentWidth / 50
          }s`,
        }}
      >
        {contentsArray}
      </div>
      <div
        className={cn(
          "flex absolute top-0",
          vertical ? "flex-col" : "flex-row",
          "animate-marquee whitespace-nowrap",
          reverse && "animate-marquee-reverse",
          pauseOnHover && "hover:[animation-play-state:paused]",
          vertical ? "left-0" : "left-full"
        )}
        style={{
          animationDuration: `${
            vertical ? contentHeight / 50 : contentWidth / 50
          }s`,
        }}
      >
        {contentsArray}
      </div>
    </div>
  );
};
