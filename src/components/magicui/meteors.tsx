"use client";

import { cn } from "@/lib/utils";
import * as React from "react";
import { useEffect, useState } from "react";

export interface MeteorsProps extends React.HTMLAttributes<HTMLDivElement> {
  number?: number;
  className?: string;
  color?: string;
}

interface MeteorProps {
  size: number;
  top: number;
  left: number;
  animationDuration: number;
  animationDelay: number;
  color: string;
}

export const Meteors = ({
  number = 20,
  className,
  color = "var(--accent)",
  ...props
}: MeteorsProps) => {
  // Utiliser useState pour stocker les météores
  const [meteors, setMeteors] = useState<MeteorProps[]>([]);

  // Générer les météores uniquement côté client avec useEffect
  useEffect(() => {
    const generatedMeteors = Array.from({ length: number }).map(() => ({
      size: Math.floor(Math.random() * 3) + 1,
      top: Math.floor(Math.random() * 100),
      left: Math.floor(Math.random() * 100),
      animationDuration: Math.floor(Math.random() * 10) + 5,
      animationDelay: Math.floor(Math.random() * 10),
      color,
    }));

    setMeteors(generatedMeteors);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [number]); // Dépendance sur number uniquement pour éviter de regénérer à chaque rendu

  return (
    <div
      className={cn(
        "absolute inset-0 overflow-hidden pointer-events-none",
        className
      )}
      {...props}
    >
      {meteors.map((meteor, idx) => (
        <span
          key={idx}
          className="absolute w-px h-[100px] block rotate-[35deg]"
          style={{
            top: `${meteor.top}%`,
            left: `${meteor.left}%`,
            width: `${meteor.size}px`,
            boxShadow: `0 0 ${meteor.size * 8}px ${meteor.size * 2}px ${
              meteor.color
            }`,
            animationDuration: `${meteor.animationDuration}s`,
            animationDelay: `${meteor.animationDelay}s`,
            animation: "meteor linear infinite",
          }}
        />
      ))}

      <style jsx>{`
        @keyframes meteor {
          0% {
            transform: rotate(35deg) translateX(0);
            opacity: 1;
          }
          70% {
            opacity: 1;
          }
          100% {
            transform: rotate(35deg) translateX(-500px);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
};
