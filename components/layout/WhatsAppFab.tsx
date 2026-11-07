"use client";

import React, { useState } from "react";
import { WhatsAppIcon } from "../icons/SocialIcons";
import { waLink } from "@/lib/whatsapp";

export function WhatsAppFab() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <aside
      aria-label="Contacto rápido por WhatsApp"
      className="hidden lg:block fixed bottom-8 right-8 z-40 group"
    >
      <a
        href={waLink("Hola, quisiera hacer una consulta.")}
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="flex items-center gap-3 bg-[#128C4A] hover:bg-[#0F7A40] text-white p-3.5 rounded-full shadow-lift hover:shadow-2xl transition-all duration-300 hover:scale-105 cursor-pointer select-none"
        aria-label="Escribinos por WhatsApp"
      >
        <WhatsAppIcon className="size-7" />
        <span
          className={`overflow-hidden transition-all duration-300 font-sans font-semibold text-sm whitespace-nowrap pr-2 ${
            isHovered ? "max-w-xs opacity-100" : "max-w-0 opacity-0 pr-0"
          }`}
        >
          Escribinos por WhatsApp
        </span>
      </a>
    </aside>
  );
}
