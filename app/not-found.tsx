import React from "react";
import Link from "next/link";
import { ArrowLeft, Stethoscope, Sparkles, Phone } from "lucide-react";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <div className="max-w-3xl mx-auto px-5 py-24 text-center flex flex-col items-center gap-6">
      <span className="font-display text-7xl md:text-9xl font-bold text-accent-600/30">
        404
      </span>

      <h1 className="font-display text-3xl md:text-4xl font-bold text-ink-950 -mt-6">
        Página no encontrada
      </h1>

      <p className="text-base text-ink-600 max-w-md leading-relaxed text-pretty">
        La página que estás buscando no existe o fue movida. Te sugerimos regresar al inicio o explorar nuestras secciones principales.
      </p>

      <div className="pt-2 flex flex-wrap justify-center gap-3">
        <Button href="/" variant="primary" size="md">
          <ArrowLeft className="size-4" />
          Volver al Inicio
        </Button>
      </div>

      <div className="pt-10 border-t border-ink-200 w-full grid grid-cols-1 sm:grid-cols-3 gap-4 text-left">
        <Link
          href="/medicina"
          className="p-4 rounded-2xl bg-white border border-ink-200 hover:border-med-300 transition-colors shadow-soft"
        >
          <div className="size-8 rounded-lg bg-med-100 text-med-700 flex items-center justify-center mb-2">
            <Stethoscope className="size-4" />
          </div>
          <h4 className="font-bold text-ink-950 text-sm">Brius Medicina</h4>
          <p className="text-xs text-ink-500">Más de 25 especialidades</p>
        </Link>

        <Link
          href="/estetica"
          className="p-4 rounded-2xl bg-white border border-ink-200 hover:border-est-300 transition-colors shadow-soft"
        >
          <div className="size-8 rounded-lg bg-est-100 text-est-700 flex items-center justify-center mb-2">
            <Sparkles className="size-4" />
          </div>
          <h4 className="font-bold text-ink-950 text-sm">Brius Estética</h4>
          <p className="text-xs text-ink-500">Tratamientos y relax</p>
        </Link>

        <Link
          href="/contacto"
          className="p-4 rounded-2xl bg-white border border-ink-200 hover:border-accent-300 transition-colors shadow-soft"
        >
          <div className="size-8 rounded-lg bg-accent-100 text-accent-700 flex items-center justify-center mb-2">
            <Phone className="size-4" />
          </div>
          <h4 className="font-bold text-ink-950 text-sm">Contacto</h4>
          <p className="text-xs text-ink-500">Teléfonos y ubicación</p>
        </Link>
      </div>
    </div>
  );
}
