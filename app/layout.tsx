import type { Metadata } from "next";
import { Fraunces, Manrope } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { MobileActionBar } from "@/components/layout/MobileActionBar";
import { WhatsAppFab } from "@/components/layout/WhatsAppFab";
import { getMedicalClinicJsonLd } from "@/lib/seo";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  style: ["normal", "italic"],
  axes: ["opsz"],
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://www.centromedicobrius.com.ar"),
  title: {
    default: "Centro Médico Brius — Excelencia en Salud y Estética en Villa Bosch",
    template: "%s | Centro Médico Brius",
  },
  description:
    "Centro médico de referencia en Villa Bosch con más de 25 especialidades, diagnóstico por imagen digital con espinograma y tratamientos de estética supervisados por profesionales.",
  openGraph: {
    type: "website",
    locale: "es_AR",
    siteName: "Centro Médico Brius",
    title: "Centro Médico Brius — Excelencia en Salud y Estética",
    description:
      "Atención médica integral, más de 25 especialidades, diagnóstico por imagen y estética no invasiva en Villa Bosch.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const clinicSchema = getMedicalClinicJsonLd();

  return (
    <html
      lang="es-AR"
      className={`${fraunces.variable} ${manrope.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(clinicSchema) }}
        />
      </head>
      <body className="min-h-full flex flex-col font-sans bg-ink-50 text-ink-700 antialiased pb-16 lg:pb-0">
        {/* Accessible Skip to Content Link */}
        <a
          href="#contenido"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-accent-600 focus:text-white focus:rounded-lg focus:shadow-lift focus:outline-none"
        >
          Saltar al contenido
        </a>

        <Header />

        <main id="contenido" className="flex-1 focus:outline-none">
          {children}
        </main>

        <Footer />
        <MobileActionBar />
        <WhatsAppFab />
      </body>
    </html>
  );
}
