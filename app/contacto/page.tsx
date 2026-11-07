import React from "react";
import type { Metadata } from "next";
import { Phone, Mail, Clock } from "lucide-react";
import { site } from "@/lib/site";
import { buildMetadata } from "@/lib/seo";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { LocationBlock } from "@/components/sections/LocationBlock";
import { ContactForm } from "@/components/forms/ContactForm";
import { WhatsAppIcon } from "@/components/icons/SocialIcons";
import { waLink } from "@/lib/whatsapp";
import { FAQ } from "@/components/ui/FAQ";

export const metadata: Metadata = buildMetadata({
  title: "Contacto, Horarios y Ubicación en Villa Bosch",
  description:
    "Comunicate con Centro Médico Brius. Teléfono, WhatsApp, dirección en Gaucho Cruz 5510 Villa Bosch, horarios de atención y mapa interactivo.",
  path: "/contacto",
});

const contactoFAQs = [
  {
    pregunta: "¿Cómo coordino un turno por primera vez?",
    respuesta: `Podés comunicarte al ${site.contact.phoneDisplay} o enviarnos un mensaje de WhatsApp con tu nombre, especialidad requerida y cobertura médica.`,
  },
  {
    pregunta: "¿Se puede asistir sin turno previo?",
    respuesta:
      "Recomendamos siempre solicitar turno previo para evitar demoras, especialmente en especialidades de alta demanda o estudios de diagnóstico por imagen.",
  },
];

export default function Contacto() {
  return (
    <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 py-10 lg:py-16 flex flex-col gap-16 lg:gap-24">
      {/* Breadcrumbs */}
      <Breadcrumbs items={[{ label: "Contacto" }]} />

      {/* Header */}
      <section className="max-w-3xl">
        <SectionHeading
          eyebrow="Atención al Paciente"
          title="Contacto y Ubicación"
          lead="Estamos para ayudarte. Podés llamarnos, escribirnos por WhatsApp o visitarnos en nuestro centro en Villa Bosch."
        />
      </section>

      {/* 4 Quick Contact Cards */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Card 1: Phone */}
        <a
          href={`tel:${site.contact.phoneHref}`}
          className="p-6 rounded-2xl bg-white border border-ink-200 shadow-soft hover:shadow-lift hover:border-accent-400 transition-all group flex flex-col justify-between"
        >
          <div className="space-y-3">
            <div className="size-10 rounded-xl bg-accent-100 text-accent-700 flex items-center justify-center">
              <Phone className="size-5" />
            </div>
            <h4 className="font-bold text-ink-950 text-base">Teléfono</h4>
            <p className="text-sm font-semibold text-accent-700 group-hover:underline">
              {site.contact.phoneDisplay}
            </p>
          </div>
          <span className="text-xs text-ink-500 pt-4 block">Llamada directa</span>
        </a>

        {/* Card 2: WhatsApp */}
        <a
          href={waLink("Hola, quisiera hacer una consulta.")}
          target="_blank"
          rel="noopener noreferrer"
          className="p-6 rounded-2xl bg-white border border-emerald-200/80 shadow-soft hover:shadow-lift hover:border-emerald-400 transition-all group flex flex-col justify-between"
        >
          <div className="space-y-3">
            <div className="size-10 rounded-xl bg-emerald-100 text-[#128C4A] flex items-center justify-center">
              <WhatsAppIcon className="size-5" />
            </div>
            <h4 className="font-bold text-ink-950 text-base">WhatsApp</h4>
            <p className="text-sm font-semibold text-[#128C4A] group-hover:underline">
              Enviar mensaje
            </p>
          </div>
          <span className="text-xs text-ink-500 pt-4 block">Respuesta rápida</span>
        </a>

        {/* Card 3: Email */}
        <a
          href={`mailto:${site.contact.email}`}
          className="p-6 rounded-2xl bg-white border border-ink-200 shadow-soft hover:shadow-lift hover:border-accent-400 transition-all group flex flex-col justify-between"
        >
          <div className="space-y-3">
            <div className="size-10 rounded-xl bg-accent-100 text-accent-700 flex items-center justify-center">
              <Mail className="size-5" />
            </div>
            <h4 className="font-bold text-ink-950 text-base">Correo Electrónico</h4>
            <p className="text-xs font-semibold text-accent-700 group-hover:underline break-all">
              {site.contact.email}
            </p>
          </div>
          <span className="text-xs text-ink-500 pt-4 block">Consultas administrativas</span>
        </a>

        {/* Card 4: Hours */}
        <div className="p-6 rounded-2xl bg-white border border-ink-200 shadow-soft flex flex-col justify-between">
          <div className="space-y-3">
            <div className="size-10 rounded-xl bg-accent-100 text-accent-700 flex items-center justify-center">
              <Clock className="size-5" />
            </div>
            <h4 className="font-bold text-ink-950 text-base">Horarios</h4>
            <div className="text-xs text-ink-600 space-y-1">
              {site.hours.map((h, i) => (
                <p key={i}>
                  <strong>{h.days}:</strong> {h.time}
                </p>
              ))}
            </div>
          </div>
          <span className="text-xs text-ink-500 pt-4 block">Recepción central</span>
        </div>
      </section>

      {/* Location Map Section */}
      <section className="space-y-6">
        <h3 className="font-display text-2xl font-bold text-ink-950">
          Ubicación en Villa Bosch
        </h3>
        <LocationBlock />
      </section>

      {/* Dedicated Contact Form */}
      <section className="rounded-3xl bg-white border border-ink-200 p-8 lg:p-12 shadow-soft space-y-6">
        <div className="max-w-xl space-y-2">
          <span className="text-xs font-bold uppercase tracking-wider text-accent-700 block">
            Formulario de Consulta
          </span>
          <h3 className="font-display text-2xl lg:text-3xl font-bold text-ink-950">
            Dejanos tu mensaje
          </h3>
          <p className="text-sm text-ink-600">
            Completá tus datos a continuación y nos comunicaremos con vos a la brevedad.
          </p>
        </div>
        <div className="max-w-2xl">
          <ContactForm />
        </div>
      </section>

      {/* FAQ Contacto */}
      <section className="max-w-4xl mx-auto w-full space-y-8">
        <SectionHeading
          eyebrow="Consultas Rápidas"
          title="Preguntas sobre Turnos y Atención"
          align="center"
        />
        <FAQ items={contactoFAQs} />
      </section>
    </div>
  );
}
