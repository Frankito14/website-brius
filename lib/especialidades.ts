import { normalizeText } from "./utils";

export interface Especialidad {
  slug: string;
  nombre: string;
  estudios?: string[];
}

const rawEspecialidades: Omit<Especialidad, "slug">[] = [
  { nombre: "Alergia" },
  {
    nombre: "Cardiología",
    estudios: [
      "ECG (Electrocardiograma)",
      "Eco-Doppler arterial y venoso",
      "Ecocardiograma Doppler B/N y color",
      "Ergometría de 12 derivaciones",
      "Holter 24 hs",
      "Presurometría 24 hs (MAPA)",
    ],
  },
  { nombre: "Cirugía general" },
  { nombre: "Clínica médica" },
  { nombre: "Dermatología" },
  { nombre: "Diabetología" },
  { nombre: "Endocrinología" },
  {
    nombre: "Fonoaudiología",
    estudios: [
      "Audiometrías",
      "Logoaudiometría",
      "Otoemisiones acústicas",
      "Timpanometría",
    ],
  },
  { nombre: "Flebología y vascular" },
  { nombre: "Gastroenterología" },
  { nombre: "Gerontología" },
  {
    nombre: "Ginecología",
    estudios: ["PAP y colposcopía"],
  },
  { nombre: "Inmunología" },
  { nombre: "Nefrología" },
  {
    nombre: "Neumonología",
    estudios: ["Espirometría"],
  },
  { nombre: "Nutrición" },
  { nombre: "Obesidad" },
  { nombre: "Oftalmología" },
  { nombre: "Ortopedia" },
  {
    nombre: "Otorrinolaringología (ORL)",
    estudios: ["Rinoscopía"],
  },
  { nombre: "Pediatría" },
  { nombre: "Reumatología" },
  { nombre: "Traumatología" },
  { nombre: "Traumatología infantil" },
  { nombre: "Urología" },
];

export const especialidades: Especialidad[] = rawEspecialidades
  .map((item) => ({
    ...item,
    slug: normalizeText(item.nombre).replace(/[^a-z0-9]+/g, "-"),
  }))
  .sort((a, b) => a.nombre.localeCompare(b.nombre, "es"));
