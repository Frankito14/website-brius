import React from "react";
import type { Metadata } from "next";
import { Stethoscope, ArrowRight, ScanLine } from "lucide-react";
import { buildMetadata } from "@/lib/seo";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { CTABand } from "@/components/ui/CTABand";
import { SpecialtyGrid } from "./_components/SpecialtyGrid";
import { WhatsAppIcon } from "@/components/icons/SocialIcons";
import { waLink } from "@/lib/whatsapp";
import { PlusMark } from "@/components/icons/PlusMark";
import Image from "next/image";

export const metadata: Metadata = buildMetadata({
  title: "Brius Medicina — Especialidades Médicas y Estudios",
  description:
    "Más de 25 especialidades médicas, electrocardiograma, ecocardiograma doppler, holter, ergometría, espirometría y diagnóstico por imagen en Villa Bosch.",
  path: "/medicina",
});

export default function Medicina() {
  return (
    <div data-theme="medicina" className="min-h-screen bg-med-50/20">
      {/* ─────────────────────────────────────────────────────────────
          1. MINI HERO MEDICINA (RECTILÍNEO, CELESTE)
      ───────────────────────────────────────────────────────────── */}
      <section className="relative pt-6 sm:pt-8 lg:pt-24 pb-14 sm:pb-16 lg:pb-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/landing/medicina-card.png"
            alt="Médicina en Centro Médico Brius"
            fill
            priority
            className="object-cover object-center"
          />
          {/* Capas de oscurecimiento y degradé hacia el lienzo general */}
          <div className="absolute inset-0 bg-brand-950/70" />
        </div>
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 relative z-10">
          {
            /*
              <Breadcrumbs items={[{ label: "Servicios", href: "/#servicios" }, { label: "Medicina" }]} />
            */
          }
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6 text-white">
              <Badge variant="soft">
                Especialidades Médicas
              </Badge>

              <h1 className="font-display text-h1 tracking-tight text-balance">
                Medicina
              </h1>

              <p className="text-lg md:text-xl text-ink-200/90 leading-relaxed max-w-xl text-pretty">
                Profesionales altamente calificados y equipamiento de precisión dedicados a tu salud integral. Cobertura en más de 25 especialidades y estudios diagnósticos.
              </p>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
                <Button
                  href={waLink("Hola, quisiera agendar un turno para una especialidad médica.")}
                  variant="whatsapp"
                  size="lg"
                >
                  <WhatsAppIcon className="size-5" />
                  Agendar Turno
                </Button>

                <Button
                  href="#listado"
                  variant="secondary"
                  size="lg"
                >
                  Ver Especialidades
                  <ArrowRight className="size-4" />
                </Button>
              </div>
            </div>

            {/* Right side illustration / rectilinea card */}
            <div className="lg:col-span-5 relative flex justify-center">

            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          2. SPECIALTIES LIST & SEARCH
      ───────────────────────────────────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 py-16 lg:py-24 space-y-12">
        <SectionHeading
          title="Nuestras Especialidades"
          lead="Utilizá el buscador para encontrar rápidamente tu médico especialista o estudio clínico."
        />

        <SpecialtyGrid />
      </section>

      {/* ─────────────────────────────────────────────────────────────
          3. BANDA DIAGNÓSTICO POR IMAGEN
      ───────────────────────────────────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 pb-16">
        <div className="rounded-3xl bg-med-900 text-white p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 shadow-soft">
          <div className="space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-med-300 flex items-center gap-2">
              <ScanLine className="size-4" />
              Diagnóstico por Imagen
            </span>
            <h3 className="font-display text-2xl md:text-3xl font-bold">
              ¿Buscás realizarte un estudio por imagen?
            </h3>
            <p className="text-sm md:text-base text-med-100 max-w-xl">
              Somos uno de los pocos centros en la provincia de Buenos Aires en realizar espinograma digital con alta resolución.
            </p>
          </div>
          <Button
            href={waLink("Hola, quisiera solicitar información para realizarme un estudio de diagnóstico por imagen.")}
            variant="whatsapp"
            size="lg"
            className="shrink-0"
          >
            <WhatsAppIcon className="size-4" />
            Consultar por estudios
          </Button>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          4. CTA BAND
      ───────────────────────────────────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 pb-20">
        <CTABand
          eyebrow="Turnos y Consultas"
          title="¿No encontrás tu especialidad o tenés dudas?"
          lead="Comunicate con nuestro equipo de recepción médica por teléfono o WhatsApp para brindarte asesoramiento inmediato."
        />
      </section>
    </div>
  );
}
