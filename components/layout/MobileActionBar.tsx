"use client";

import React from "react";
import { Phone, Navigation } from "lucide-react";
import { site } from "@/lib/site";
import { waLink } from "@/lib/whatsapp";
import { WhatsAppIcon } from "../icons/SocialIcons";

export function MobileActionBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 lg:hidden bg-white/95 backdrop-blur-md border-t border-ink-200 shadow-lift pb-[env(safe-area-inset-bottom)]">
      <div className="grid grid-cols-3 divide-x divide-ink-100 h-14">
        {/* Call */}
        <a
          href={`tel:${site.contact.phoneHref}`}
          className="flex flex-col items-center justify-center gap-1 text-ink-700 hover:text-accent-700 active:bg-ink-50 transition-colors"
          aria-label="Llamar a Centro Médico Brius"
        >
          <Phone className="size-4 text-accent-600" />
          <span className="text-[11px] font-semibold leading-none">Llamar</span>
        </a>

        {/* WhatsApp */}
        <a
          href={waLink("Hola, quisiera pedir un turno.")}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center gap-1 text-[#128C4A] hover:bg-emerald-50/50 active:bg-emerald-50 transition-colors"
          aria-label="Pedir turno por WhatsApp"
        >
          <WhatsAppIcon className="size-4.5" />
          <span className="text-[11px] font-bold leading-none">WhatsApp</span>
        </a>

        {/* Directions / Map */}
        <a
          href={site.address.mapsLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center gap-1 text-ink-700 hover:text-accent-700 active:bg-ink-50 transition-colors"
          aria-label="Ver cómo llegar en Google Maps"
        >
          <Navigation className="size-4 text-accent-600" />
          <span className="text-[11px] font-semibold leading-none">Cómo llegar</span>
        </a>
      </div>
    </div>
  );
}
