import React from "react";
import type { Metadata } from "next";
import { Award, HeartHandshake, ScanLine, ShieldCheck } from "lucide-react";
import { buildMetadata } from "@/lib/seo";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CTABand } from "@/components/ui/CTABand";
import { PlusMark } from "@/components/icons/PlusMark";
import Image from "next/image";

export const metadata: Metadata = buildMetadata({
  title: "Quiénes Somos — Nuestra Historia y Vocación Médica",
  description:
    "Desde 2002 brindando asistencia médica en Villa Bosch. Conocé nuestra trayectoria, valores humanos y compromiso con la salud.",
  path: "/nosotros",
});

export default function Nosotros() {
  return (
    <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 py-10 lg:py-16 flex flex-col gap-4 ">
      {/* Breadcrumbs */}
      <Breadcrumbs items={[{ label: "Nosotros" }]} />

      {/* Header Section */}
      <section className="max-w-4xl">
        <SectionHeading
          title="Centro Médico Brius"
          lead="Una institución dedicada al cuidado integral de la salud y el bienestar de las familias."
        />
      </section>

      {/* Main Narrative Block & Timeline */}
      <section className="mt-16 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Story Text (7 cols) */}
        <div className="lg:col-span-7 space-y-6 text-base md:text-lg text-ink-700 leading-relaxed">

          <p>
            Comenzamos a brindar asistencia médica en el año <strong>2002</strong>, orientando nuestros servicios a quienes más lo necesitaban. Esa vocación inicial, junto con la constancia y el trato cordial, fue el pilar fundamental de nuestro crecimiento y arraigo en la comunidad.
          </p>

          <p>
            Con el paso de los años, nos fuimos destacando en distintas áreas de la medicina y expandiendo nuestras prestaciones hasta llegar a cubrir <strong>todas las especialidades médicas</strong> para brindar una respuesta integral a cada paciente.
          </p>

          <p>
            Contamos con servicio especializado de <strong>Diagnóstico por Imagen</strong>, siendo uno de los pocos centros en toda la provincia de Buenos Aires capacitados para realizar <strong>espinograma digital</strong> con precisión milimétrica.
          </p>

          <p>
            En la actualidad, desarrollamos también tratamientos avanzados de <strong>estética corporal y facial no invasiva</strong>, logrando notables resultados y pacientes plenamente satisfechos.
          </p>

        </div>

        {/* Timeline & Milestones (5 cols) */}
        <div className="col-span-5 rounded-xl border border-2 border-ink-200 shadow-soft space-y-6">
          <Image
            src="/images/landing/centro.png"
            alt="Centro Médico Brius"
            height={480}
            width={480}
            className="object-cover transition-transform duration-500 group-hover:scale-105 rounded-xl"

          />

        </div>
      </section>

      {/* 4 Pillars Grid */}
      <section className="space-y-8 my-24">
        <SectionHeading
          title="Nuestros Pilares"
          lead="Principios irrenunciables que guían cada consulta y tratamiento."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="p-6 rounded-2xl bg-white border border-ink-200 shadow-soft space-y-3">
            <div className="size-10 rounded-xl bg-accent-100 text-accent-700 flex items-center justify-center">
              <Award className="size-5" />
            </div>
            <h4 className="font-bold text-ink-950 text-lg">Trayectoria</h4>
            <p className="text-xs text-ink-600 leading-relaxed">
              Más de 20 años de constancia y respaldo al servicio de la salud en la región.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-ink-200 shadow-soft space-y-3">
            <div className="size-10 rounded-xl bg-accent-100 text-accent-700 flex items-center justify-center">
              <HeartHandshake className="size-5" />
            </div>
            <h4 className="font-bold text-ink-950 text-lg">Trato Cordial</h4>
            <p className="text-xs text-ink-600 leading-relaxed">
              Atención cercana, humana y empática desde la recepción hasta el consultorio.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-ink-200 shadow-soft space-y-3">
            <div className="size-10 rounded-xl bg-accent-100 text-accent-700 flex items-center justify-center">
              <ScanLine className="size-5" />
            </div>
            <h4 className="font-bold text-ink-950 text-lg">Tecnología</h4>
            <p className="text-xs text-ink-600 leading-relaxed">
              Equipamiento digital avanzado para estudios radiológicos y espinogramas.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-ink-200 shadow-soft space-y-3">
            <div className="size-10 rounded-xl bg-accent-100 text-accent-700 flex items-center justify-center">
              <ShieldCheck className="size-5" />
            </div>
            <h4 className="font-bold text-ink-950 text-lg">Supervisión</h4>
            <p className="text-xs text-ink-600 leading-relaxed">
              Todo acto asistencial es controlado por médicos especialistas matriculados.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Band */}
      <CTABand
        eyebrow="Cuidamos tu salud"
        title="Formá parte de nuestra comunidad de pacientes."
        lead="Acercate  o contactanos para programar tu turno en cualquiera de nuestras especialidades."
      />
    </div>
  );
}
