export const site = {
  name: "Centro Médico Brius",
  shortName: "Brius",
  foundedYear: 2002,
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  tagline: "Una empresa dedicada al cuidado de la salud",

  contact: {
    phoneDisplay: "011 1234-5678", // [COMPLETAR] Placeholder
    phoneHref: "+541112345678", // [COMPLETAR] E.164
    whatsapp: "5491112345678", // [COMPLETAR] AR mobile format without '+'
    email: "info@centromedicobrius.com.ar", // [COMPLETAR]
  },

  address: {
    street: "Gaucho Cruz 5510",
    zip: "B1682AKN",
    locality: "Villa Bosch",
    region: "Buenos Aires",
    country: "AR",
    // Embed URL sin API key
    mapsEmbed:
      "https://www.google.com/maps?q=Gaucho%20Cruz%205510%2C%20B1682AKN%20Villa%20Bosch%2C%20Buenos%20Aires&output=embed",
    mapsLink:
      "https://www.google.com/maps/search/?api=1&query=Gaucho%20Cruz%205510%2C%20B1682AKN%20Villa%20Bosch%2C%20Buenos%20Aires",
  },

  // Si está vacío, la interfaz oculta el bloque de horarios o muestra aviso de consulta
  hours: [
    { days: "Lunes a Viernes", time: "08:00 a 20:00" },
    { days: "Sábados", time: "09:00 a 13:00" },
  ] as { days: string; time: string }[],

  social: {
    // Si están vacíos, los íconos no se renderizan para evitar enlaces a '#'
    instagram: "", // [COMPLETAR]
    facebook: "", // [COMPLETAR]
  },

  legal: {
    habilitacion: "", // [COMPLETAR] N° de habilitación sanitaria
    directorMedico: "", // [COMPLETAR] Nombre y matrícula
    razonSocial: "Centro Médico Brius S.R.L.", // [COMPLETAR]
  },
} as const;
