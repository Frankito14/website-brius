import type { Metadata } from "next";
import { site } from "./site";

interface MetadataProps {
  title: string;
  description: string;
  path?: string;
}

export function buildMetadata({ title, description, path = "" }: MetadataProps): Metadata {
  const url = `${site.url}${path}`;
  const fullTitle = `${title} | ${site.name}`;

  return {
    title: fullTitle,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: site.name,
      locale: "es_AR",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
    },
  };
}

export function getMedicalClinicJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": ["MedicalClinic", "LocalBusiness"],
    name: site.name,
    description: site.tagline,
    url: site.url,
    telephone: site.contact.phoneHref,
    email: site.contact.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: site.address.street,
      addressLocality: site.address.locality,
      postalCode: site.address.zip,
      addressRegion: site.address.region,
      addressCountry: site.address.country,
    },
    priceRange: "$$",
    medicalSpecialty: [
      "Cardiology",
      "Pediatrics",
      "Gynecology",
      "Orthopedics",
      "Dermatology",
      "DiagnosticImaging",
    ],
    openingHoursSpecification: site.hours.map((h) => ({
      "@type": "OpeningHoursSpecification",
      dayOfWeek: h.days.includes("Sábado")
        ? ["Saturday"]
        : ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: h.time.split(" a ")[0].replace(":", "") + ":00",
      closes: h.time.split(" a ")[1].replace(":", "") + ":00",
    })),
  };
}
