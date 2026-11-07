import React from "react";
import { cn } from "@/lib/utils";
import { PlusMark } from "../icons/PlusMark";

export interface BadgeProps {
  variant?: "soft" | "outline" | "solid";
  withPlus?: boolean;
  className?: string;
  children: React.ReactNode;
}

export function Badge({
  variant = "soft",
  withPlus = true,
  className,
  children,
}: BadgeProps) {
  const baseStyles =
    "inline-flex items-center gap-1.5 rounded-full px-3.5 py-1 text-xs font-semibold uppercase tracking-[0.14em] select-none";

  const variantStyles = {
    soft: "bg-accent-100 text-accent-800",
    outline: "border border-accent-300 text-accent-800 bg-white/60 backdrop-blur-xs",
    solid: "bg-white/10 text-white backdrop-blur-xs border border-white/20",
  };

  return (
    <span className={cn(baseStyles, variantStyles[variant], className)}>
      {withPlus && <PlusMark className="size-2.5 opacity-75" />}
      {children}
    </span>
  );
}
