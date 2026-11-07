"use client";

import React, { useEffect } from "react";
import { AlertCircle, RotateCcw, Home } from "lucide-react";
import { Button } from "@/components/ui/Button";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("[APPLICATION ERROR]", error);
  }, [error]);

  return (
    <div className="max-w-2xl mx-auto px-5 py-24 text-center flex flex-col items-center gap-6">
      <div className="size-16 rounded-2xl bg-danger-bg text-danger flex items-center justify-center">
        <AlertCircle className="size-8" />
      </div>

      <h1 className="font-display text-3xl md:text-4xl font-bold text-ink-950">
        Ocurrió un error inesperado
      </h1>

      <p className="text-base text-ink-600 max-w-md leading-relaxed">
        Disculpá las molestias. Tuvimos un inconveniente al cargar esta página. Podés volver a intentar o regresar al inicio.
      </p>

      <div className="flex flex-col sm:flex-row gap-3 pt-2">
        <Button onClick={() => reset()} variant="primary" size="md">
          <RotateCcw className="size-4" />
          Reintentar
        </Button>
        <Button href="/" variant="secondary" size="md">
          <Home className="size-4" />
          Ir al Inicio
        </Button>
      </div>
    </div>
  );
}
