"use client";

import { cn } from "@/lib/utils";
import * as React from "react";

interface BentoGridProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
  children?: React.ReactNode;
}

export const BentoGrid = ({
  className,
  children,
  ...props
}: BentoGridProps) => {
  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};

interface BentoCardProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
  title?: string;
  description?: string;
  icon?: React.ReactNode;
  cta?: string;
  href?: string;
  ctaIcon?: React.ReactNode;
  header?: React.ReactNode;
  content?: React.ReactNode;
  footer?: React.ReactNode;
  background?: string;
  variant?: "default" | "feature" | "wide" | "tall";
  isHighlighted?: boolean;
}

export const BentoCard = ({
  className,
  title,
  description,
  icon,
  cta,
  href,
  ctaIcon,
  header,
  content,
  footer,
  background,
  variant = "default",
  isHighlighted = false,
  ...props
}: BentoCardProps) => {
  const cardClasses = cn(
    "relative overflow-hidden rounded-xl border bg-card text-card-foreground shadow transition-all hover:shadow-lg group",
    {
      "md:col-span-2": variant === "wide",
      "md:row-span-2": variant === "tall",
      "md:col-span-2 md:row-span-2": variant === "feature",
      "border-accent/50 shadow-accent/20": isHighlighted,
    },
    className
  );

  const cardStyles = {
    backgroundImage: background ? `url(${background})` : undefined,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  return (
    <div className={cardClasses} style={cardStyles} {...props}>
      <div className="p-6 flex h-full flex-col">
        {header || (
          <div className="flex items-center justify-between">
            {icon && (
              <div className="rounded-full bg-primary/10 p-3 text-primary">
                {icon}
              </div>
            )}
            {isHighlighted && (
              <span className="inline-flex items-center rounded-full border border-accent/50 bg-accent/10 px-2.5 py-0.5 text-xs font-medium text-accent">
                Featured
              </span>
            )}
          </div>
        )}
        <div className="space-y-2 mt-4 flex-1">
          {title && (
            <h3 className="font-bold tracking-tight text-xl transition-colors group-hover:text-primary">
              {title}
            </h3>
          )}
          {description && (
            <p className="text-muted-foreground text-sm">{description}</p>
          )}
          {content}
        </div>
        {(cta || footer) && (
          <div className="pt-4 mt-auto">
            {footer || (
              <div className="flex items-center text-accent text-sm font-medium">
                {cta}
                {ctaIcon && <span className="ml-1">{ctaIcon}</span>}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
