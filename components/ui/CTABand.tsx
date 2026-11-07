import React from "react";
import { Button } from "./Button";
import { Phone } from "lucide-react";
import { PlusMark } from "../icons/PlusMark";
import { WhatsAppIcon } from "../icons/SocialIcons";
import { site } from "@/lib/site";
import { waLink } from "@/lib/whatsapp";

export interface CTABandProps {
  eyebrow?: string;
  title?: React.ReactNode;
  lead?: React.ReactNode;
  primaryText?: string;
  primaryHref?: string;
  secondaryText?: string;
  secondaryHref?: string;
}

export function CTABand({
  eyebrow = "Atención Médica Integral",
  title = "Tu salud y la de tu familia, en las mejores manos.",
  lead = "Comunicate hoy mismo con nuestro equipo para agendar una consulta médica o coordinar un tratamiento.",
  primaryText = "Pedir turno por WhatsApp",
  primaryHref,
  secondaryText = `Llamar al ${site.contact.phoneDisplay}`,
  secondaryHref,
}: CTABandProps) {
  return (
    <section className="relative overflow-hidden rounded-[2.5rem] bg-ink-950 text-white p-8 md:p-16 lg:p-20 shadow-lift">
      {/* Background ambient pattern */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none grid grid-cols-6 md:grid-cols-12 gap-8 p-6">
        {Array.from({ length: 48 }).map((_, i) => (
          <PlusMark key={i} className="size-6 text-white" />
        ))}
      </div>

      <div className="relative z-10 max-w-3xl mx-auto text-center flex flex-col items-center gap-6">
        <span className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] bg-white/10 text-white backdrop-blur-xs border border-white/15">
          <PlusMark className="size-2.5 opacity-80" />
          {eyebrow}
        </span>

        <h2 className="font-display text-h2 md:text-display leading-tight text-balance">
          {title}
        </h2>

        {lead && (
          <p className="text-base md:text-xl text-ink-300 max-w-xl text-pretty">
            {lead}
          </p>
        )}

        <div className="flex flex-col sm:flex-row items-center gap-4 mt-4 w-full sm:w-auto">
          <Button
            href={primaryHref || waLink("Hola, quisiera solicitar un turno.")}
            variant="whatsapp"
            size="lg"
            className="w-full sm:w-auto"
          >
            <WhatsAppIcon className="size-5" />
            {primaryText}
          </Button>

          <Button
            href={secondaryHref || `tel:${site.contact.phoneHref}`}
            variant="inverse"
            size="lg"
            className="w-full sm:w-auto"
          >
            <Phone className="size-4 text-accent-700" />
            {secondaryText}
          </Button>
        </div>
      </div>
    </section>
  );
}
