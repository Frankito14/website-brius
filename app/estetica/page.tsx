import React from "react";
import type { Metadata } from "next";
import { Sparkles, Check, ArrowRight } from "lucide-react";
import { buildMetadata } from "@/lib/seo";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { CTABand } from "@/components/ui/CTABand";
import { WhatsAppIcon } from "@/components/icons/SocialIcons";
import { waLink, waMessages } from "@/lib/whatsapp";
import { PlusMark } from "@/components/icons/PlusMark";
import Image from "next/image";
import { Reveal } from "@/components/ui/Reveal";



export const metadata: Metadata = buildMetadata({
  title: "Brius Estética — Tratamientos Faciales, Corporales y Láser",
  description:
    "Cosmiatría, tratamientos corporales con primera consulta sin cargo, podología, masajes terapéuticos y depilación láser en Villa Bosch con supervisión médica.",
  path: "/estetica",
});

export default function Estetica() {
  return (
    <div data-theme="estetica" className="min-h-screen bg-est-50/20">
      {/* ─────────────────────────────────────────────────────────────
          1. MINI HERO ESTÉTICA (ORGÁNICO, ROSA, SUAVE)
      ───────────────────────────────────────────────────────────── */}
      <section className="relative pt-8 pb-14 lg:pt-24 lg:py-24 border-b border-est-200/80 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/landing/estetica-card.png"
            alt="Estética en Centro Médico Brius"
            fill
            priority
            className="object-cover object-center"
          />
          {/* Capas de oscurecimiento y degradé hacia el lienzo general */}
          <div className="absolute inset-0 bg-est-950/60" />
        </div>
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 relative z-10">
          {
            /*
            <Breadcrumbs items={[{ label: "Servicios", href: "/#servicios" }, { label: "Estética" }]} />
            */
          }

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6 text-white">
              <Badge variant="soft">
                Bienestar & Belleza
              </Badge>

              <h1 className="font-display text-6xl py-8 sm:py-0 sm:text-h1 text-ink-950 tracking-tight text-balance">
                <em className="text-white font-normal">
                  Estética
                </em>
              </h1>

              <p className="text-lg md:text-xl text-ink-200/90 leading-relaxed max-w-xl text-pretty">
                Descubrí un espacio diseñado para potenciar tu belleza natural y bienestar con tecnología de vanguardia, confort y estricta supervisión de profesionales médicos.
              </p>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
                <Button
                  href={waLink("Hola, quisiera agendar un turno para estética.")}
                  variant="whatsapp"
                  size="lg"
                  className="bg-pink-500 hover:bg-pink-600 transition"
                >
                  <WhatsAppIcon className="size-5" />
                  Agendar Turno
                </Button>

                <Button
                  href="#tratamientos"
                  variant="secondary"
                  size="lg"
                >
                  Ver Tratamientos
                  <ArrowRight className="size-4" />
                </Button>
              </div>
            </div>

            {/* Arch Masked Visual Feature */}
            <div className="lg:col-span-5 relative flex justify-center">

            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          2. QUICK ANCHOR NAV (CHIPS)
      ───────────────────────────────────────────────────────────── */}
      <div className="invisible sm:visible sticky top-16 lg:top-20 z-30 bg-white/90 backdrop-blur-md border-b border-est-100 py-3 shadow-xs">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 flex items-center gap-3 overflow-x-auto no-scrollbar text-xs font-semibold">
          <span className="text-ink-400 shrink-0 uppercase tracking-wider text-[11px]">
            Ir a:
          </span>
          <a
            href="#cosmiatria"
            className="px-4 py-1.5 rounded-full bg-est-50 hover:bg-est-100 text-est-900 border border-est-200 shrink-0 transition-colors"
          >
            Cosmiatría
          </a>
          <a
            href="#corporales"
            className="px-4 py-1.5 rounded-full bg-est-50 hover:bg-est-100 text-est-900 border border-est-200 shrink-0 transition-colors"
          >
            Corporales (Sin cargo)
          </a>
          <a
            href="#podologia"
            className="px-4 py-1.5 rounded-full bg-est-50 hover:bg-est-100 text-est-900 border border-est-200 shrink-0 transition-colors"
          >
            Podología
          </a>
          <a
            href="#masajes"
            className="px-4 py-1.5 rounded-full bg-est-50 hover:bg-est-100 text-est-900 border border-est-200 shrink-0 transition-colors"
          >
            Masajes
          </a>
          <a
            href="#depilacion-laser"
            className="px-4 py-1.5 rounded-full bg-est-600 text-white shrink-0 hover:bg-est-700 transition-colors"
          >
            Depilación Láser
          </a>
        </div>
      </div>

      {/* ─────────────────────────────────────────────────────────────
          3. TREATMENT SECTIONS
      ───────────────────────────────────────────────────────────── */}
      <div id="tratamientos" className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 py-16 space-y-16 lg:space-y-24 scroll-mt-36">
        {/* Section 01: Cosmiatría */}
        <Reveal delayMs={200}>
          <section id="cosmiatria" className="scroll-mt-32 rounded-3xl bg-white border border-est-200/80 p-8 lg:p-12 shadow-soft">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              <div className="lg:col-span-5 space-y-4">
                <span className="font-display italic text-2xl text-champagne-700 font-semibold">
                  01 / Facial
                </span>
                <h2 className="font-display text-3xl font-bold text-ink-950">
                  Cosmiatría
                </h2>
                <p className="text-base text-ink-600 leading-relaxed">
                  Tratamientos faciales profesionales diseñados para revitalizar la luminosidad cutánea, emparejar el tono y devolver frescura a tu piel.
                </p>
                <div className="pt-2">
                  <Button
                    href={waLink(waMessages.treatment("Cosmiatría"))}
                    variant="whatsapp"
                    size="md"
                  >
                    <WhatsAppIcon className="size-4" />
                    Consultar por Cosmiatría
                  </Button>
                </div>
              </div>

              <div className="lg:col-span-7 bg-est-50/50 p-6 sm:p-8 rounded-2xl border border-est-100">
                <h3 className="text-xs font-bold uppercase tracking-wider text-est-800 mb-4">
                  Tratamientos incluidos:
                </h3>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  {[
                    "Acné, rosácea y máculas (manchas)",
                    "Lifting facial no invasivo",
                    "Anti age / Peeling químico y mecánico",
                    "Punta de diamante (microdermoabrasión)",
                    "Radiofrecuencia facial",
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm font-medium text-ink-800">
                      <span className="size-6 rounded-full bg-est-100 text-est-700 flex items-center justify-center shrink-0">
                        <Check className="size-3.5" />
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>
        </Reveal>

        {/* Section 02: Corporales (With "Primera Consulta Sin Cargo" Tag) */}
        <Reveal delayMs={200}>

          <section id="corporales" className="scroll-mt-32 rounded-3xl bg-white border-2 border-est-300 p-8 lg:p-12 shadow-lift relative overflow-hidden">
            <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
              <div className="space-y-2">
                <span className="font-display italic text-2xl text-champagne-700 font-semibold">
                  02 / Corporal
                </span>
                <h2 className="font-display text-3xl md:text-4xl font-bold text-ink-950">
                  Tratamientos Corporales
                </h2>
              </div>

              <div className="px-4 py-2 rounded-full bg-est-600 text-white font-sans text-xs md:text-sm font-bold uppercase tracking-wider shadow-soft flex items-center gap-2">
                <Sparkles className="size-4" />
                Primera consulta sin cargo
              </div>
            </div>

            <p className="text-base text-ink-600 leading-relaxed max-w-3xl mb-8">
              Planes modeladores, reafirmantes y anticelulíticos adaptados a tus objetivos estéticos con tecnología médica comprobada y seguimiento continuo.
            </p>

            <div className="bg-est-50/60 p-6 sm:p-8 rounded-2xl border border-est-100 mb-8">
              <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {[
                  "Masaje reductor y modelador",
                  "Tratamiento para la celulitis",
                  "Tonificación con electrodos",
                  "Tratamiento Esclerosante",
                  "Lipoescultura láser",
                  "Depilación Láser definitiva",
                  "Drenaje Linfático",
                  "Crioterapia",
                  "Botox",
                  "Criolipólisis",
                  "Mesoterapia",
                  "Radiofrecuencia corporal",
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm font-medium text-ink-800">
                    <span className="size-6 rounded-full bg-est-100 text-est-700 flex items-center justify-center shrink-0">
                      <Check className="size-3.5" />
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-4">
              <Button
                href={waLink(waMessages.treatment("Tratamientos Corporales (Consulta sin cargo)"))}
                variant="whatsapp"
                size="lg"
              >
                <WhatsAppIcon className="size-5" />
                Solicitar 1° Consulta Sin Cargo
              </Button>
              <p className="text-xs text-ink-500">
                Evaluación y asesoramiento previo sin costo por profesionales.
              </p>
            </div>
          </section>
        </Reveal>

        {/* Section 03 & 04: Podología & Masajes (Dúo) */}
        <Reveal delayMs={200}>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Podología */}
            <section id="podologia" className="scroll-mt-32 rounded-3xl bg-white border border-est-200/80 p-8 shadow-soft flex flex-col justify-between">
              <div className="space-y-4">
                <span className="font-display italic text-2xl text-champagne-700 font-semibold">
                  03 / Podología
                </span>
                <h2 className="font-display text-2xl font-bold text-ink-950">
                  Salud Podológica Integral
                </h2>
                <p className="text-sm text-ink-600 leading-relaxed">
                  Cuidado integral de la salud del pie con instrumental esterilizado en autoclave y respaldo dermatológico.
                </p>

                <ul className="space-y-3 pt-2">
                  {[
                    "Onicomicosis (hongos en uñas)",
                    "Onicocriptosis (uñas encarnadas)",
                    "Tratamientos láser podológicos",
                    "Pie diabético y cuidados preventivos",
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm font-medium text-ink-800">
                      <span className="size-5 rounded-full bg-est-100 text-est-700 flex items-center justify-center shrink-0">
                        <Check className="size-3" />
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-6 mt-6 border-t border-est-100">
                <Button
                  href={waLink(waMessages.treatment("Podología"))}
                  variant="secondary"
                  size="md"
                  className="w-full"
                >
                  Consultar por Podología
                </Button>
              </div>
            </section>

            {/* Masajes */}
            <section id="masajes" className="scroll-mt-32 rounded-3xl bg-white border border-est-200/80 p-8 shadow-soft flex flex-col justify-between">
              <div className="space-y-4">
                <span className="font-display italic text-2xl text-champagne-700 font-semibold">
                  04 / Relax
                </span>
                <h2 className="font-display text-2xl font-bold text-ink-950">
                  Masajes Terapéuticos
                </h2>
                <p className="text-sm text-ink-600 leading-relaxed">
                  Técnicas manuales aplicadas para relajar tensiones musculares, desintoxicar tejidos y recuperar tu equilibrio.
                </p>

                <ul className="space-y-3 pt-2">
                  {[
                    "Masajes descontracturantes",
                    "Masaje tailandés tradicional",
                    "Masaje californiano relajante",
                    "Drenaje linfático manual",
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm font-medium text-ink-800">
                      <span className="size-5 rounded-full bg-est-100 text-est-700 flex items-center justify-center shrink-0">
                        <Check className="size-3" />
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-6 mt-6 border-t border-est-100">
                <Button
                  href={waLink(waMessages.treatment("Masajes"))}
                  variant="secondary"
                  size="md"
                  className="w-full"
                >
                  Consultar por Masajes
                </Button>
              </div>
            </section>
          </div>
        </Reveal>

        {/* Section 05: Depilación Láser Definitiva (BANNER IMPACTANTE) */}
        <Reveal delayMs={200}>
          <section id="depilacion-laser" className="scroll-mt-32 relative rounded-[2.5rem] bg-gradient-to-r from-est-700 via-est-600 to-rose-500 text-white p-8 md:p-14 lg:p-16 shadow-lift overflow-hidden text-center">
            <Sparkles className="absolute -top-6 -right-6 size-36 text-white/10 pointer-events-none" />
            <Sparkles className="absolute -bottom-6 -left-6 size-28 text-white/10 pointer-events-none" />

            <div className="relative z-10 max-w-2xl mx-auto space-y-6">
              <span className="inline-block px-4 py-1.5 rounded-full bg-white/20 backdrop-blur-md text-xs font-bold uppercase tracking-[0.2em] border border-white/25">
                ¡Las leonas se atienden con nosotros!
              </span>

              <h2 className="font-display text-3xl md:text-5xl font-extrabold leading-tight">
                Depilación Definitiva Láser
              </h2>

              <p className="text-base md:text-lg text-est-100 leading-relaxed">
                Equipamiento láser de última generación, máxima seguridad dermatológica y resultados duraderos con asesoramiento médico continuo.
              </p>

              <div className="pt-4 flex justify-center">
                <Button
                  href={waLink("Hola, quisiera consultar por turnos de depilación definitiva láser.")}
                  variant="inverse"
                  size="lg"
                  className="font-bold"
                >
                  <WhatsAppIcon className="size-5 text-[#128C4A]" />
                  Consultar Promociones y Turnos
                </Button>
              </div>
            </div>
          </section>
        </Reveal>

        {/* Closing Band (Required in SPECS) */}
        <div className="rounded-3xl bg-white p-10 border border-est-200 text-center space-y-3 shadow-soft">
          <p className="font-display text-2xl md:text-3xl font-bold text-est-950">
            Consultas y asesoramiento sin cargo
          </p>
          <p className="text-sm font-semibold text-champagne-700 tracking-[0.2em] uppercase">
            • Atendido por profesionales •
          </p>
        </div>

        {/* Regulatory Disclaimer */}
        <p className="text-center text-xs text-ink-500 max-w-2xl mx-auto leading-relaxed">
          Los tratamientos son supervisados por profesionales médicos habilitados. Los resultados y evolución pueden variar en función de las características biológicas individuales de cada persona.
        </p>
      </div>

      {/* CTA Final */}
      <section className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 pb-20">
        <CTABand
          eyebrow="Bienestar Integral"
          title="Renová tu energía y sentite bien todos los días."
          lead="Escribinos por WhatsApp para agendar tu consulta diagnóstica de estética sin cargo."
        />
      </section>
    </div>
  );
}
