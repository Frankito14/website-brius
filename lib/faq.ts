import { site } from "./site";

export interface FAQItem {
  pregunta: string;
  respuesta: string;
}

export const homeFAQs: FAQItem[] = [
  {
    pregunta: "¿Cómo puedo solicitar un turno?",
    respuesta: `Podés pedir tu turno de manera rápida comunicándote telefónicamente al ${site.contact.phoneDisplay} o enviándonos un mensaje directo por WhatsApp. También podés dejarnos tus datos en el formulario de contacto y te llamamos a la brevedad.`,
  },
  {
    pregunta: "¿Qué obras sociales y prepagas atienden?",
    respuesta:
      "Atendemos diversas obras sociales y PAMI. Para el servicio de Kinesiología trabajamos con IOMA, Docthos, Medifé, Sancor Salud, Swiss Medical y Colegio de Escribanos, entre otras. Dado que los convenios se actualizan periódicamente, te recomendamos consultarnos por tu cobertura puntual.",
  },
  {
    pregunta: "¿Cuáles son los requisitos y costos para asociarme?",
    respuesta:
      "Podés asociarte a Centro Médico Brius sin cuota de ingreso y sin límites de edad. Escribinos por WhatsApp o acercate a nuestra sede para conocer los planes disponibles para vos y tu grupo familiar.",
  },
  {
    pregunta: "¿La primera consulta de estética tiene costo?",
    respuesta:
      "En tratamientos corporales, la primera consulta y evaluación es sin cargo. Además, brindamos asesoramiento y orientación personalizada atendida por profesionales médicos.",
  },
  {
    pregunta: "¿Dónde están ubicados y cuáles son los medios de transporte?",
    respuesta: `${site.address.street}, ${site.address.locality}, Provincia de Buenos Aires. Nos encontramos a pocas cuadras del centro de Villa Bosch, con fácil acceso y opciones de transporte público cercanas.`,
  },
];
