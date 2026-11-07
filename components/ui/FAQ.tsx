"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import type { FAQItem } from "@/lib/faq";

export function FAQ({ items }: { items: FAQItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <div className="flex flex-col divide-y divide-ink-200 border-y border-ink-200">
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        return (
          <div key={index} className="py-5 transition-colors">
            <button
              type="button"
              onClick={() => toggle(index)}
              aria-expanded={isOpen}
              className="flex w-full items-center justify-between gap-4 text-left font-display text-lg md:text-xl font-medium text-ink-950 hover:text-accent-700 transition-colors cursor-pointer select-none"
            >
              <span>{item.pregunta}</span>
              <div
                className={cn(
                  "size-8 rounded-full bg-ink-100 flex items-center justify-center shrink-0 transition-transform duration-200",
                  isOpen && "rotate-180 bg-accent-100 text-accent-700"
                )}
              >
                <ChevronDown className="size-4" />
              </div>
            </button>
            <div
              className={cn(
                "grid transition-all duration-300 ease-in-out",
                isOpen
                  ? "grid-rows-[1fr] opacity-100 pt-3"
                  : "grid-rows-[0fr] opacity-0"
              )}
            >
              <div className="overflow-hidden">
                <p className="text-base text-ink-600 leading-relaxed max-w-prose">
                  {item.respuesta}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
