import React from "react";
import { cn } from "@/lib/utils";
import { Badge } from "./Badge";

export interface SectionHeadingProps {
  eyebrow?: string;
  title: React.ReactNode;
  lead?: React.ReactNode;
  align?: "left" | "center";
  invert?: boolean;
  className?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  lead,
  align = "left",
  invert = false,
  className,
}: SectionHeadingProps) {
  const isCentered = align === "center";

  return (
    <div
      className={cn(
        "flex flex-col gap-3 max-w-3xl",
        isCentered && "mx-auto text-center items-center",
        className
      )}
    >
      {eyebrow && (
        <Badge variant={invert ? "solid" : "soft"}>
          {eyebrow}
        </Badge>
      )}

      <h2
        className={cn(
          "font-display text-h2 tracking-tight text-balance",
          invert ? "text-white" : "text-ink-950"
        )}
      >
        {title}
      </h2>

      {lead && (
        <p
          className={cn(
            "text-base md:text-lg leading-relaxed text-pretty mt-1",
            invert ? "text-ink-300" : "text-ink-600"
          )}
        >
          {lead}
        </p>
      )}
    </div>
  );
}
