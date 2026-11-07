import React from "react";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

export function Breadcrumbs({ items }: { items: BreadcrumbItem[] }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Inicio",
        item: "https://www.centromedicobrius.com.ar",
      },
      ...items.map((it, idx) => ({
        "@type": "ListItem",
        position: idx + 2,
        name: it.label,
        item: it.href ? `https://www.centromedicobrius.com.ar${it.href}` : undefined,
      })),
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <nav aria-label="Miga de pan" className="mb-6 flex items-center gap-2 text-xs font-medium text-ink-500">
        <Link href="/" className="hover:text-accent-700 transition-colors">
          Inicio
        </Link>
        {items.map((it, idx) => {
          const isLast = idx === items.length - 1;
          return (
            <React.Fragment key={idx}>
              <ChevronRight className="size-3 text-ink-300" aria-hidden="true" />
              {isLast || !it.href ? (
                <span className="text-ink-800 font-semibold" aria-current="page">
                  {it.label}
                </span>
              ) : (
                <Link href={it.href} className="hover:text-accent-700 transition-colors">
                  {it.label}
                </Link>
              )}
            </React.Fragment>
          );
        })}
      </nav>
    </>
  );
}
