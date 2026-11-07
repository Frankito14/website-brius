import React from "react";
import type { Metadata } from "next";
import { ShieldCheck, CreditCard, Users, CheckCircle2 } from "lucide-react";
import { buildMetadata } from "@/lib/seo";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { CTABand } from "@/components/ui/CTABand";
import { kinesiologiaObrasSociales, coberturaInfo } from "@/lib/coberturas";
import { WhatsAppIcon } from "@/components/icons/SocialIcons";
import { waLink } from "@/lib/whatsapp";
import { FAQ } from "@/components/ui/FAQ";

export const metadata: Metadata = buildMetadata({
  title: "Coberturas, Obras Sociales y Planes de Asociación",
  description:
    "Atendemos obras sociales, PAMI y pacientes asociados sin cuota de ingreso ni límites de edad. Conocé cómo atenderte en Centro Médico Brius.",
  path: "/coberturas",
});

const coberturasFAQs = [
  {
    pregunta: "¿Qué documentación debo presentar el día del turno?",
    respuesta:
      "DNI vigente, carnet o credencial física/digital de tu obra social o prepaga y la orden médica o derivación correspondiente si la prestación así lo requiere.",
  },
  {
    pregunta: "¿Cómo funciona la asociación sin cuota de ingreso?",
    respuesta:
      "Te inscribís en el centro médico sin pagar costo de matrícula inicial ni cuota de ingreso. Accedés a aranceles preferenciales y prioridad en la gestión de turnos para todas las especialidades.",
  },
  {
    pregunta: "¿Hay límite de edad para asociarme?",
    respuesta:
      "No. Podés asociarte o asociar a cualquier integrante de tu grupo familiar sin importar la edad.",
  },
];

export default function Coberturas() {
  return (
    <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 py-10 lg:py-16 flex flex-col gap-16 lg:gap-24">
      {/* Breadcrumbs */}
      <Breadcrumbs items={[{ label: "Coberturas" }]} />

      {/* Header */}
      <section className="max-w-3xl">
        <SectionHeading
          eyebrow="Convenios y Afiliaciones"
          title="Coberturas, Obras Sociales y Planes"
          lead="En Centro Médico Brius trabajamos para que accedas a la atención de los mejores especialistas con tu cobertura habitual o mediante nuestros planes de asociación directa."
        />
      </section>

      {/* Health Insurances Section */}
      <section className="rounded-3xl bg-white border border-ink-200 p-8 lg:p-12 shadow-soft space-y-8">
        <div className="space-y-4">
          <span className="text-xs font-bold uppercase tracking-wider text-accent-700 block">
            Financiadores y Prepagas
          </span>
          <h2 className="font-display text-2xl lg:text-3xl font-bold text-ink-950">
            Atendemos Obras Sociales y PAMI
          </h2>
          <p className="text-base text-ink-600 leading-relaxed max-w-2xl">
            A continuación se detallan algunas de las coberturas atendidas habitualmente para kinesiología y especialidades médicas:
          </p>
        </div>

        <div className="flex flex-wrap gap-3">
          {kinesiologiaObrasSociales.map((os, i) => (
            <div
              key={i}
              className="px-5 py-3 rounded-2xl bg-ink-50 border border-ink-200 font-bold text-ink-900 text-sm sm:text-base flex items-center gap-2"
            >
              <ShieldCheck className="size-4.5 text-accent-600" />
              <span>{os}</span>
            </div>
          ))}
          <div className="px-5 py-3 rounded-2xl bg-accent-50 border border-accent-200 font-bold text-accent-800 text-sm sm:text-base flex items-center gap-2">
            <span>PAMI</span>
          </div>
          <div className="px-5 py-3 rounded-2xl bg-ink-50 border border-ink-200 text-ink-500 font-medium text-sm sm:text-base flex items-center">
            <span>y muchas más...</span>
          </div>
        </div>

        <div className="p-5 rounded-2xl bg-ink-50 border border-ink-200 text-xs md:text-sm text-ink-600 leading-relaxed">
          <p>
            <strong className="text-ink-900">Aviso importante:</strong> {coberturaInfo.disclaimer}
          </p>
        </div>

        <div className="pt-2">
          <Button
            href={waLink("Hola, quisiera consultar si atienden con mi cobertura médica.")}
            variant="whatsapp"
            size="lg"
          >
            <WhatsAppIcon className="size-5" />
            Consultar por mi obra social o plan
          </Button>
        </div>
      </section>

      {/* Membership Section */}
      <section id="asociate" className="scroll-mt-32 rounded-[2.5rem] bg-ink-950 text-white p-8 md:p-14 lg:p-16 shadow-lift relative overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7 space-y-6">
            <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-white/10 text-white border border-white/20">
              Asociación Directa
            </span>

            <h2 className="font-display text-3xl md:text-4xl font-bold leading-tight">
              {coberturaInfo.asociate.titulo}
            </h2>

            <p className="text-base md:text-lg text-ink-300 leading-relaxed max-w-xl">
              {coberturaInfo.asociate.subtitulo}
            </p>

            <ul className="space-y-3 pt-2">
              {coberturaInfo.asociate.beneficios.map((b, i) => (
                <li key={i} className="flex items-center gap-3 text-sm md:text-base text-white">
                  <CheckCircle2 className="size-5 text-accent-400 shrink-0" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>

            <div className="pt-4">
              <Button
                href={waLink("Hola, quisiera recibir información para asociarme sin cuota de ingreso.")}
                variant="inverse"
                size="lg"
                className="font-bold"
              >
                Quiero Asociarme Ahora
              </Button>
            </div>
          </div>

          <div className="lg:col-span-5 grid grid-cols-1 gap-4">
            <div className="p-6 rounded-2xl bg-white/10 backdrop-blur-md border border-white/15 space-y-2">
              <CreditCard className="size-8 text-accent-400 mb-2" />
              <h4 className="font-display font-bold text-xl text-white">
                Sin cuota de ingreso
              </h4>
              <p className="text-sm text-ink-300">
                Sumate a nuestra comunidad médica sin pagar inscripción ni desembolsos iniciales.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white/10 backdrop-blur-md border border-white/15 space-y-2">
              <Users className="size-8 text-accent-400 mb-2" />
              <h4 className="font-display font-bold text-xl text-white">
                Sin límites de edad
              </h4>
              <p className="text-sm text-ink-300">
                Abierto a personas de todas las edades con el mismo estándar de calidad y calidez.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Coberturas */}
      <section className="max-w-4xl mx-auto w-full space-y-8">
        <SectionHeading
          eyebrow="Dudas Frecuentes"
          title="Preguntas sobre Coberturas y Planes"
          align="center"
        />
        <FAQ items={coberturasFAQs} />
      </section>

      {/* CTA Final */}
      <CTABand
        eyebrow="Comunicate con nosotros"
        title="¿Tenés dudas sobre tu plan o cobertura?"
        lead="Nuestro equipo administrativo te asesora de manera clara y personalizada para que te atiendas sin demoras."
      />
    </div>
  );
}
