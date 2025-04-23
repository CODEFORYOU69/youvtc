import { cn } from "@/lib/utils";
import { ComponentPropsWithoutRef, ReactNode } from "react";

interface BentoGridProps extends ComponentPropsWithoutRef<"div"> {
  children: ReactNode;
  className?: string;
}

interface BentoCardProps {
  title: string;
  description?: string;
  className?: string;
  content?: ReactNode;
  icon?: ReactNode;
  variant?: "default" | "wide" | "tall" | "feature";
  isHighlighted?: boolean;
}

const BentoGrid = ({ children, className, ...props }: BentoGridProps) => {
  return (
    <div
      className={cn("grid w-full grid-cols-1 md:grid-cols-3 gap-4", className)}
      {...props}
    >
      {children}
    </div>
  );
};

const BentoCard = ({
  title,
  description,
  className,
  content,
  icon,
  variant = "default",
  isHighlighted = false,
  ...props
}: BentoCardProps) => {
  const variantClassMap = {
    default: "col-span-1 row-span-1",
    wide: "col-span-1 md:col-span-2 row-span-1",
    tall: "col-span-1 row-span-2",
    feature: "col-span-1 md:col-span-2 row-span-2",
  };

  return (
    <div
      className={cn(
        "group relative flex flex-col overflow-hidden rounded-xl",
        "bg-card text-card-foreground shadow-sm",
        isHighlighted && "ring-2 ring-primary/20",
        variantClassMap[variant],
        className
      )}
      {...props}
    >
      <div className="flex flex-col space-y-1.5 p-6">
        {icon && <div className="mb-2 text-primary">{icon}</div>}
        <h3 className="text-lg font-semibold leading-none tracking-tight">
          {title}
        </h3>
        {description && (
          <p className="text-sm text-muted-foreground">{description}</p>
        )}
        {content && <div className="mt-auto">{content}</div>}
      </div>
    </div>
  );
};

export { BentoCard, BentoGrid };
