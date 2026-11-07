import React from "react";
import { Activity, Sparkles, HeartPulse, Stethoscope } from "lucide-react";
import { cn } from "@/lib/utils";

interface ImagePlaceholderProps {
  label: string;
  theme?: "medicina" | "estetica" | "neutral";
  aspectRatio?: string;
  className?: string;
  icon?: "activity" | "sparkles" | "pulse" | "stethoscope";
}

export function ImagePlaceholder({
  label,
  theme = "neutral",
  aspectRatio = "aspect-[4/3]",
  className,
  icon = "activity",
}: ImagePlaceholderProps) {
  const themes = {
    neutral: "bg-gradient-to-br from-ink-100 to-brand-50 text-brand-700 border-ink-200",
    medicina: "bg-gradient-to-br from-med-100 to-med-50 text-med-700 border-med-200",
    estetica: "bg-gradient-to-br from-est-100 to-est-50 text-est-700 border-est-200",
  };

  const icons = {
    activity: <Activity className="size-10 stroke-[1.5]" />,
    sparkles: <Sparkles className="size-10 stroke-[1.5]" />,
    pulse: <HeartPulse className="size-10 stroke-[1.5]" />,
    stethoscope: <Stethoscope className="size-10 stroke-[1.5]" />,
  };

  return (
    <div
      className={cn(
        "relative w-full rounded-2xl border flex flex-col items-center justify-center p-6 text-center select-none overflow-hidden group shadow-soft",
        aspectRatio,
        themes[theme],
        className
      )}
      role="img"
      aria-label={label}
    >
      {/* Decorative subtle ambient pattern */}
      <div className="absolute inset-0 bg-radial from-white/60 to-transparent pointer-events-none opacity-80" />
      <div className="relative z-10 flex flex-col items-center gap-3">
        <div className="size-16 rounded-2xl bg-white/80 backdrop-blur-xs flex items-center justify-center shadow-soft">
          {icons[icon]}
        </div>
        <p className="font-display font-medium text-sm md:text-base max-w-[200px] leading-snug">
          {label}
        </p>
      </div>
    </div>
  );
}
