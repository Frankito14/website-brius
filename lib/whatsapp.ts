import { site } from "./site";

export const waLink = (message = "Hola, quisiera pedir un turno.") =>
  `https://wa.me/${site.contact.whatsapp}?text=${encodeURIComponent(message)}`;

export const waMessages = {
  general: "Hola, quisiera pedir un turno.",
  specialty: (nombre: string) => `Hola, quisiera pedir un turno para la especialidad de ${nombre}.`,
  treatment: (titulo: string) => `Hola, quisiera consultar por el tratamiento de ${titulo}.`,
  imaging: "Hola, quisiera consultar por turnos para diagnóstico por imagen y espinograma digital.",
  coverage: (cobertura?: string) =>
    cobertura
      ? `Hola, quisiera consultar si atienden con mi cobertura de ${cobertura}.`
      : "Hola, quisiera consultar qué obras sociales y coberturas atienden.",
  membership: "Hola, quisiera información para asociarme sin cuota de ingreso.",
};
