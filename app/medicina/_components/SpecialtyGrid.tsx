"use client";

import React, { useState, useMemo } from "react";
import { Search, ChevronDown, Stethoscope, ArrowUpRight, X } from "lucide-react";
import { especialidades } from "@/lib/especialidades";
import { normalizeText, cn } from "@/lib/utils";
import { PlusMark } from "@/components/icons/PlusMark";
import { WhatsAppIcon } from "@/components/icons/SocialIcons";
import { Button } from "@/components/ui/Button";
import { waLink, waMessages } from "@/lib/whatsapp";

export function SpecialtyGrid() {
  const [query, setQuery] = useState("");
  const [expandedSlugs, setExpandedSlugs] = useState<Record<string, boolean>>({});

  const filteredEspecialidades = useMemo(() => {
    if (!query.trim()) return especialidades;
    const normQuery = normalizeText(query);
    return especialidades.filter((esp) => {
      const matchName = normalizeText(esp.nombre).includes(normQuery);
      const matchStudies = esp.estudios?.some((est) => normalizeText(est).includes(normQuery));
      return matchName || matchStudies;
    });
  }, [query]);

  const toggleExpand = (slug: string) => {
    setExpandedSlugs((prev) => ({
      ...prev,
      [slug]: !prev[slug],
    }));
  };

  return (
    <div className="space-y-8" id="listado">
      {/* Search Toolbar */}
      <div className="p-4 sm:p-6 rounded-3xl bg-white border border-med-200/80 shadow-soft flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="relative w-full sm:max-w-md">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 size-5 text-med-400" />
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Buscá una especialidad (ej.: cardiología, niños, ecografía)..."
            className="w-full h-12 pl-12 pr-10 rounded-full border border-med-200 bg-med-50/30 text-ink-950 placeholder:text-ink-400 text-sm md:text-base focus:outline-none focus:border-med-500 focus:ring-4 focus:ring-med-100 transition-all"
          />
          {query && (
            <button
              type="button"
              onClick={() => setQuery("")}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-ink-400 hover:text-ink-700"
              aria-label="Limpiar búsqueda"
            >
              <X className="size-4" />
            </button>
          )}
        </div>

        <div className="text-sm font-semibold text-med-800 whitespace-nowrap self-end sm:self-center pr-4">
          Mostrando {filteredEspecialidades.length} de {especialidades.length} especialidades
        </div>
      </div>

      {/* Empty State */}
      {filteredEspecialidades.length === 0 ? (
        <div className="p-12 rounded-3xl bg-white border border-med-200 text-center flex flex-col items-center gap-4 shadow-soft">
          <div className="size-16 rounded-full bg-med-100 text-med-600 flex items-center justify-center">
            <Stethoscope className="size-8" />
          </div>
          <h3 className="font-display text-2xl font-bold text-ink-950">
            No encontramos resultados para &ldquo;{query}&rdquo;
          </h3>
          <p className="text-base text-ink-600 max-w-md leading-relaxed">
            Podés consultarnos directamente por WhatsApp si contamos con profesionales en esa disciplina o para coordinar una derivación.
          </p>
          <div className="pt-2 flex flex-col sm:flex-row gap-3">
            <Button
              href={waLink(`Hola, quisiera consultar si tienen la especialidad de ${query}.`)}
              variant="whatsapp"
              size="md"
            >
              <WhatsAppIcon className="size-4" />
              Consultar por WhatsApp
            </Button>
            <Button variant="secondary" size="md" onClick={() => setQuery("")}>
              Ver todas las especialidades
            </Button>
          </div>
        </div>
      ) : (
        /* Specialties Grid */
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredEspecialidades.map((esp) => {
            const isExpanded = !!expandedSlugs[esp.slug];
            const hasStudies = esp.estudios && esp.estudios.length > 0;

            return (
              <div
                key={esp.slug}
                className={cn(
                  "rounded-2xl border bg-white p-6 transition-all duration-200 flex flex-col justify-between shadow-soft hover:shadow-lift",
                  isExpanded
                    ? "border-med-400 ring-2 ring-med-100"
                    : "border-med-200/80 hover:border-med-300"
                )}
              >
                <div>
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex items-center gap-2.5">
                      <div className="size-2 rounded-full bg-med-500 shrink-0" />
                      <h3 className="font-display font-bold text-xl text-ink-950">
                        {esp.nombre}
                      </h3>
                    </div>

                    {hasStudies && (
                      <button
                        type="button"
                        onClick={() => toggleExpand(esp.slug)}
                        aria-expanded={isExpanded}
                        className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-med-100 text-med-800 text-xs font-semibold hover:bg-med-200 transition-colors cursor-pointer select-none"
                      >
                        <span>Ver más</span>
                        <ChevronDown
                          className={cn(
                            "size-3.5 transition-transform duration-200",
                            isExpanded && "rotate-180"
                          )}
                        />
                      </button>
                    )}
                  </div>

                  {/* Expandable in-flow sub-studies */}
                  {hasStudies && isExpanded && (
                    <div className="mt-4 pt-4 border-t border-med-100 animate-in fade-in duration-200">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-med-700 block mb-2">
                        Estudios complementarios:
                      </span>
                      <ul className="space-y-1.5">
                        {esp.estudios!.map((est, i) => (
                          <li
                            key={i}
                            className="text-sm text-ink-700 flex items-start gap-2"
                          >
                            <PlusMark className="size-2.5 text-med-500 mt-1 shrink-0" />
                            <span>{est}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>

                {/* Card Action Link */}
                <div className="pt-6 mt-4 border-t border-ink-100 flex items-center justify-between text-xs">
                  <a
                    href={waLink(waMessages.specialty(esp.nombre))}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-bold text-med-600 hover:text-med-700 inline-flex items-center gap-1.5 transition-colors"
                  >
                    <span>Pedir turno</span>
                    <ArrowUpRight className="size-3.5" />
                  </a>
                  {hasStudies && !isExpanded && (
                    <button
                      type="button"
                      onClick={() => toggleExpand(esp.slug)}
                      className="text-ink-400 hover:text-med-600 font-medium transition-colors cursor-pointer"
                    >
                      Ver estudios
                    </button>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
