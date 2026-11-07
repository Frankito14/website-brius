import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  CheckCircle2,
  Stethoscope,
  Sparkles,
  CreditCard,
  Users,
  ShieldCheck,
  ScanLine,
  HeartHandshake,
  Activity,
  Award,
} from "lucide-react";
import { site } from "@/lib/site";
import { especialidades } from "@/lib/especialidades";
import { kinesiologiaObrasSociales } from "@/lib/coberturas";
import { homeFAQs } from "@/lib/faq";
import { waLink } from "@/lib/whatsapp";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { CTABand } from "@/components/ui/CTABand";
import { FAQ } from "@/components/ui/FAQ";
import { Reveal } from "@/components/ui/Reveal";
import { LocationBlock } from "@/components/sections/LocationBlock";
import { PlusMark } from "@/components/icons/PlusMark";
import { WhatsAppIcon } from "@/components/icons/SocialIcons";

export default function Home() {
  const specialtiesCount = especialidades.length;

  return (
    <div className="flex flex-col gap-20 lg:gap-32 pb-16">
      {/* ─────────────────────────────────────────────────────────────
          1. HERO SECTION (EDITORIAL SPLIT)
      ───────────────────────────────────────────────────────────── */}
      <section className="relative pt-6 sm:pt-8  pb-12 sm:pb-16 lg:pb-20 overflow-hidden">
        {/* Imagen de fondo con overlay para legibilidad */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/landing/bg-hero.jpg"
            alt="Centro Médico Brius"
            fill
            priority
            className="object-cover object-center"
          />
          {/* Capas de oscurecimiento y degradé hacia el lienzo general */}
          <div className="absolute inset-0 bg-brand-950/80" />
        </div>

        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 relative z-10">
          <Reveal delayMs={10}>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center min-h-[75vh]">
              {/* Left Column: Editorial Headline & Actions */}
              <div className="lg:col-span-7 flex flex-col items-start gap-6">
                <h1 className="font-display pt-16 sm:pt-0 text-display text-white tracking-tight text-balance">
                  Asistencia médica desde el {" "}
                  <em className="italic text-emerald-300 font-normal">
                    {site.foundedYear}
                  </em>
                </h1>

                <p className="text-lg text-ink-200 leading-relaxed max-w-xl text-pretty">
                  Abocamos nuestros servicios a la gente que más lo necesitaba. Así fuimos creciendo y desarrollándonos en las distintas áreas de la salud.
                </p>

                {/* CTAs */}
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2 w-full sm:w-auto">
                  <Button
                    href={waLink("Hola, quisiera solicitar un turno en Centro Médico Brius.")}
                    variant="whatsapp"
                    size="lg"
                    className="w-full sm:w-auto"
                  >
                    <WhatsAppIcon className="size-5" />
                    Solicitar un Turno
                  </Button>

                  <Button
                    href="/medicina"
                    variant="inverse"
                    size="lg"
                    className="w-full sm:w-auto"
                  >
                    Ver especialidades
                    <ArrowRight className="size-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </div>

              {/* Right Column: Hero Visual with Ambient Glow and Floating Badges */}
              <div className="lg:col-span-4 relative w-full flex items-center justify-center">


              </div>

            </div>
          </Reveal>

        </div>
      </section>
      {/* ─────────────────────────────────────────────────────────────
          3. NUESTROS SERVICIOS (MEDICINA & ESTÉTICA) — DESTACADO
      ───────────────────────────────────────────────────────────── */}
      <section id="servicios" className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 w-full scroll-mt-28">
        <SectionHeading
          eyebrow=""
          title="Nuestros Servicios"
          lead="Salud y bienestar integral en un mismo centro médico, con tecnología avanzada y atención cálida."
          className="mb-12"
        />

        <div className="grid grid-cols-1 gap-8">
          {/* Card 1: Medicina */}
          <Reveal delayMs={100}>
            <div className="group relative rounded-xl bg-white border border-med-200/80  shadow-soft hover:shadow-lift transition-all duration-300 flex flex-col md:flex-row gap-8 items-stretch justify-between h-full overflow-hidden">
              <div className="absolute top-0 right-0 w-48 h-48 bg-med-100/50 rounded-full blur-3xl pointer-events-none -mr-16 -mt-16" />

              {/* Columna izquierda: Contenido */}
              <div className="w-full md:w-1/2 p-8 md:p-10 flex flex-col justify-between flex-1 relative z-10 space-y-8">
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <span className="size-14 rounded-2xl bg-med-100 text-med-700 flex items-center justify-center shadow-soft">
                      <Stethoscope className="size-7 stroke-[1.6]" />
                    </span>
                    <Badge variant="soft" className="border-med-300 text-med-800">
                      Atención Médica
                    </Badge>
                  </div>

                  <div>
                    <h3 className="font-display text-3xl font-bold text-ink-950 group-hover:text-med-700 transition-colors">
                      Medicina
                    </h3>
                    <p className="text-base text-ink-600 leading-relaxed mt-3">
                      Una empresa de salud dedicada al cuidado de Ud. y su familia. Cubrimos más de {specialtiesCount} especialidades médicas y estudios complementarios con profesionales de amplia experiencia.
                    </p>
                  </div>
                </div>

                <div className="pt-2">
                  <Link
                    href="/medicina"
                    className="inline-flex items-center gap-2 font-sans font-bold text-med-600 hover:text-med-700 text-base group/link"
                  >
                    Conocer todas las especialidades
                    <ArrowRight className="size-4 group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>

              {/* Columna derecha: Imagen con overlay de oscurecimiento */}
              <div className="relative z-10 w-full md:w-1/2 shrink-0 aspect-[4/3] md:aspect-auto min-h-[190px] overflow-hidden shadow-inner group/img">
                <Image
                  src="/images/landing/medicina-card.png"
                  alt="Atención médica en Centro Médico Brius"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                {/* Filtro leve de oscurecimiento */}
                <div className="absolute inset-0 bg-ink-950/30 group-hover:bg-ink-950/20 transition-colors duration-300 pointer-events-none" />
              </div>
            </div>
          </Reveal>

          {/* Card 2: Estética */}
          <Reveal delayMs={200}>
            <div className="group relative rounded-xl bg-white border border-est-200/80 shadow-soft hover:shadow-lift transition-all duration-300 flex flex-col md:flex-row gap-8 items-stretch justify-between h-full overflow-hidden">
              <div className="absolute top-0 right-0 w-48 h-48 bg-est-100/50 rounded-full blur-3xl pointer-events-none -mr-16 -mt-16" />

              {/* Columna izquierda: Imagen con overlay de oscurecimiento */}
              <div className="relative z-10 w-full md:w-1/2 shrink-0 aspect-[4/3] md:aspect-auto min-h-[190px] overflow-hidden shadow-inner group/img order-last md:order-first">
                <Image
                  src="/images/landing/estetica-card.png"
                  alt="Brius Estética - Bienestar & Belleza"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                {/* Filtro leve de oscurecimiento */}
                <div className="absolute inset-0 bg-ink-950/30 group-hover:bg-ink-950/20 transition-colors duration-300 pointer-events-none" />
              </div>

              {/* Columna derecha: Contenido */}
              <div className="w-full md:w-1/2 p-8 md:p-10 flex flex-col justify-between flex-1 relative z-10 space-y-8">
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <span className="size-14 rounded-2xl bg-est-100 text-est-700 flex items-center justify-center shadow-soft">
                      <Sparkles className="size-7 stroke-[1.6]" />
                    </span>
                    <Badge variant="soft" className="bg-est-100 border-est-300 text-est-800">
                      Bienestar & Belleza
                    </Badge>
                  </div>

                  <div>
                    <h3 className="font-display text-3xl font-bold text-ink-950 group-hover:text-est-700 transition-colors">
                      Estética
                    </h3>
                    <p className="text-base text-ink-600 leading-relaxed mt-3">
                      Estética corporal y facial no invasiva. Tratamientos cosmiátricos, podología, masajes relajantes y depilación definitiva láser, siempre bajo estricta supervisión médica.
                    </p>
                  </div>
                </div>

                <div className="pt-2">
                  <Link
                    href="/estetica"
                    className="inline-flex items-center gap-2 font-sans font-bold text-est-600 hover:text-est-700 text-base group/link"
                  >
                    Ver tratamientos de estética
                    <ArrowRight className="size-4 group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          4. BANDA DIAGNÓSTICO POR IMAGEN (NAVY CONTRASTE)
      ───────────────────────────────────────────────────────────── */}
      <section id="estudios" className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 w-full scroll-mt-28">
        <SectionHeading
          eyebrow=""
          title="Estudios y Prácticas"
          lead="Contamos con tecnología digital para diagnóstico por imagen."
          className="mb-12"
        />
        <Reveal delayMs={200}>

          <div className="group relative rounded-xl bg-ink-950 text-white shadow-soft hover:shadow-lift transition-all duration-300 flex flex-col md:flex-row gap-8 items-stretch justify-between overflow-hidden border border-white/10">
            {/* Background subtle plus-mark watermark */}
            <div className="absolute top-6 right-6 opacity-5 pointer-events-none">
              <PlusMark className="size-48 text-white" />
            </div>

            {/* Columna izquierda: Contenido y Acciones */}
            <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-between flex-1 relative z-10 space-y-8">
              <div className="space-y-5">

                <h2 className="font-display text-h2 text-white leading-tight">
                  Diagnóstico por Imagenes
                </h2>

                <p className="text-base text-ink-300 max-w-xl leading-relaxed text-pretty">
                  Contamos con tecnología digital para diagnóstico por imagen. Somos uno de los pocos centros en toda la provincia de Buenos Aires capacitados para realizar <strong className="text-white">espinograma digital</strong> con la mayor nitidez y precisión médica.
                </p>
              </div>

              <div className="pt-2 flex flex-col sm:flex-row gap-3">
                <Button
                  href={waLink("Hola, quisiera consultar por turnos para diagnóstico por imagen.")}
                  variant="whatsapp"
                  size="lg"
                  className="w-full sm:w-auto"
                >
                  <WhatsAppIcon className="size-5" />
                  Consultar por estudios
                </Button>
              </div>
            </div>

            {/* Columna derecha: Imagen con overlay de oscurecimiento */}
            <div className="relative z-10 w-full md:w-1/2 shrink-0 aspect-[4/3] md:aspect-auto min-h-[220px] overflow-hidden shadow-inner group/img">
              <Image
                src="/images/landing/diagnostico-card.png"
                alt="Diagnóstico por imagen y espinograma digital"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              {/* Filtro leve de oscurecimiento */}
              <div className="absolute inset-0 bg-ink-950/30 group-hover:bg-ink-950/20 transition-colors duration-300 pointer-events-none" />
            </div>
          </div>
        </Reveal>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          6. SECCIÓN ASÓCIESE (2 CARDS NAVY)
      ───────────────────────────────────────────────────────────── */}
      <section id="estudios" className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 w-full scroll-mt-28">
        <SectionHeading
          eyebrow=""
          title="Formar parte"
          lead="Únase a nuestra red médica hoy mismo sin costos iniciales de inscripción."
          className="mb-12"
        />
        <Reveal delayMs={200}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Card 1: Sin cuota de ingreso */}
            <div className="relative rounded-3xl bg-brand-900 text-white p-8 md:p-10 shadow-soft overflow-hidden flex flex-col justify-between group">
              <div className="absolute top-4 right-4 opacity-5 pointer-events-none">
                <PlusMark className="size-32 text-white" />
              </div>
              <div className="space-y-3 relative z-10">
                <div className="size-12 rounded-2xl bg-white/10 text-white flex items-center justify-center mb-4">
                  <CreditCard className="size-6" />
                </div>
                <h3 className="font-display text-2xl md:text-3xl font-bold">
                  Asóciese sin cuota de ingreso
                </h3>
                <p className="text-sm md:text-base text-brand-100 leading-relaxed">
                  Únase a nuestra red médica hoy mismo sin costos iniciales de inscripción. Acceda a tarifas preferenciales para toda la familia.
                </p>
              </div>
              <div className="pt-6 relative z-10">
                <Link
                  href="/coberturas#asociate"
                  className="inline-flex items-center gap-2 text-sm font-bold text-brand-200 hover:text-white transition-colors"
                >
                  Quiero asociarme <ArrowRight className="size-4" />
                </Link>
              </div>
            </div>

            {/* Card 2: Sin límites de edad */}
            <div className="relative rounded-3xl bg-ink-950 text-white p-8 md:p-10 shadow-soft overflow-hidden flex flex-col justify-between group">
              <div className="absolute top-4 right-4 opacity-5 pointer-events-none">
                <PlusMark className="size-32 text-white" />
              </div>
              <div className="space-y-3 relative z-10">
                <div className="size-12 rounded-2xl bg-white/10 text-white flex items-center justify-center mb-4">
                  <Users className="size-6" />
                </div>
                <h3 className="font-display text-2xl md:text-3xl font-bold">
                  Sin límites de edad
                </h3>
                <p className="text-sm md:text-base text-ink-300 leading-relaxed">
                  Nuestra cobertura y atención están abiertas a todas las etapas de la vida, garantizando cuidado médico digno para niños, jóvenes y adultos mayores.
                </p>
              </div>
              <div className="pt-6 relative z-10">
                <Link
                  href="/coberturas#asociate"
                  className="inline-flex items-center gap-2 text-sm font-bold text-ink-300 hover:text-white transition-colors"
                >
                  Conocer condiciones <ArrowRight className="size-4" />
                </Link>
              </div>
            </div>
          </div>
        </Reveal>

      </section>

      {/* ─────────────────────────────────────────────────────────────
          8. PREGUNTAS FRECUENTES (FAQ)
      ───────────────────────────────────────────────────────────── */}
      <section className="max-w-4xl mx-auto px-5 sm:px-8 w-full">
        <SectionHeading
          title="Preguntas Frecuentes"
          lead="Respuestas a las consultas más habituales sobre turnos, coberturas y atención."
          align="center"
          className="mb-12"
        />

        <FAQ items={homeFAQs} />
      </section>

      {/* ─────────────────────────────────────────────────────────────
          9. CÓMO ENCONTRARNOS (MAPA & LOCATION BLOCK)
      ───────────────────────────────────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 w-full">
        <SectionHeading
          title="Cómo Encontrarnos"
          lead="Visitanos en nuestras instalaciones de Villa Bosch, con acceso ágil y comodidades para el paciente."
          className="mb-10"
        />

        <LocationBlock />
      </section>
    </div>
  );
}
