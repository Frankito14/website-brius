import React from "react";
import type { Metadata } from "next";
import { site } from "@/lib/site";
import { buildMetadata } from "@/lib/seo";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";

export const metadata: Metadata = buildMetadata({
  title: "Política de Privacidad y Protección de Datos Personales",
  description:
    "Información sobre el tratamiento y resguardo de datos personales en el sitio web de Centro Médico Brius, conforme a la Ley 25.326 de la República Argentina.",
  path: "/politica-de-privacidad",
});

export default function PoliticaDePrivacidad() {
  return (
    <div className="max-w-4xl mx-auto px-5 sm:px-8 py-10 lg:py-16 space-y-8">
      <Breadcrumbs items={[{ label: "Política de Privacidad" }]} />

      <header className="space-y-3 pb-6 border-b border-ink-200">
        <h1 className="font-display text-3xl md:text-4xl font-bold text-ink-950">
          Política de Privacidad
        </h1>
        <p className="text-sm text-ink-500">
          Última actualización: Octubre 2026 — Conforme a la Ley Nacional N° 25.326 de Protección de Datos Personales (República Argentina).
        </p>
      </header>

      <div className="space-y-6 text-base text-ink-700 leading-relaxed max-w-prose">
        <section className="space-y-3">
          <h2 className="font-display text-xl font-bold text-ink-950">
            1. Responsable del Tratamiento
          </h2>
          <p>
            El responsable del tratamiento de los datos recolectados a través de este sitio web es <strong>{site.name}</strong>, con domicilio legal y sede de atención en {site.address.street}, {site.address.locality}, Provincia de Buenos Aires, República Argentina.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-display text-xl font-bold text-ink-950">
            2. Datos que Recolectamos y Finalidad
          </h2>
          <p>
            Los datos personales facilitados por los usuarios a través del formulario de contacto (tales como nombre, teléfono, correo electrónico y motivo de consulta) son recopilados exclusivamente para:
          </p>
          <ul className="list-disc pl-5 space-y-1.5 text-ink-800">
            <li>Responder a consultas informativas y solicitudes de turnos médicos o estéticos.</li>
            <li>Coordinar comunicaciones directas relacionadas con los servicios asistenciales del centro.</li>
            <li>Verificar coberturas y convenios con obras sociales y prepagas previa solicitud del paciente.</li>
          </ul>
          <p className="p-4 rounded-xl bg-ink-100 text-xs text-ink-700 border border-ink-200">
            <strong>Aviso importante:</strong> A través de los formularios web no se solicita ni se debe ingresar información médica confidencial, diagnósticos ni historias clínicas. La información de salud sensible se gestiona de manera presencial o mediante canales clínicos habilitados.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-display text-xl font-bold text-ink-950">
            3. Confidencialidad y Seguridad
          </h2>
          <p>
            {site.name} adopta las medidas técnicas y organizativas necesarias para garantizar la seguridad y confidencialidad de los datos personales, evitando su adulteración, pérdida, consulta o tratamiento no autorizado. Los datos no son comercializados, cedidos ni transferidos a terceros con fines publicitarios.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-display text-xl font-bold text-ink-950">
            4. Derechos del Titular de los Datos (ARCO)
          </h2>
          <p>
            De conformidad con la Ley N° 25.326, el titular de los datos personales tiene la facultad de ejercer el derecho de acceso a los mismos en forma gratuita a intervalos no inferiores a seis meses, salvo que se acredite un interés legítimo al efecto, así como también solicitar su rectificación o supresión.
          </p>
          <p>
            Para ejercer estos derechos, podrá comunicarse por correo electrónico a <a href={`mailto:${site.contact.email}`} className="text-accent-600 underline">{site.contact.email}</a> indicando su nombre completo y el derecho que desea ejercer.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-display text-xl font-bold text-ink-950">
            5. Contacto
          </h2>
          <p>
            Para cualquier consulta sobre esta política de privacidad, puede comunicarse telefónicamente al {site.contact.phoneDisplay} o dirigirse a nuestra sede en {site.address.street}, {site.address.locality}.
          </p>
        </section>
      </div>
    </div>
  );
}
