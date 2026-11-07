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
      <section className="relative pt-8 pb-14 lg:py-20 bg-gradient-to-br from-med-50 via-white to-med-100/40 border-b border-med-200/80">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          <Breadcrumbs items={[{ label: "Servicios", href: "/#servicios" }, { label: "Medicina" }]} />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <Badge variant="soft">
                Salud & Especialidades
              </Badge>

              <h1 className="font-display text-h1 text-ink-950 tracking-tight text-balance">
                Brius Medicina
              </h1>

              <p className="text-lg md:text-xl text-ink-600 leading-relaxed max-w-xl text-pretty">
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
              <div className="w-full max-w-sm p-6 rounded-2xl bg-white border border-med-200 shadow-lift space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-med-100">
                  <div className="flex items-center gap-2">
                    <div className="size-3 rounded-full bg-med-500" />
                    <span className="text-xs font-bold uppercase tracking-wider text-med-800">
                      Cuidado Médico
                    </span>
                  </div>
                  <Stethoscope className="size-5 text-med-600" />
                </div>
                <h3 className="font-display text-xl font-bold text-ink-950">
                  Atención Integral y Estudios
                </h3>
                <p className="text-sm text-ink-600 leading-relaxed">
                  Evaluaciones clínicas completas, seguimiento preventivo y estudios complementarios en un mismo lugar.
                </p>
                <div className="pt-2 text-xs font-semibold text-med-700 flex items-center gap-2">
                  <PlusMark className="size-3 text-med-500" />
                  <span>Cardiología, Pediatría, Traumatología y más</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          2. SPECIALTIES LIST & SEARCH
      ───────────────────────────────────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 py-16 lg:py-24 space-y-12">
        <SectionHeading
          eyebrow="Especialidades Disponibles"
          title="Nuestras Especialidades Médicas"
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
              ¿Buscás realizarte un espinograma digital o estudio por imagen?
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
