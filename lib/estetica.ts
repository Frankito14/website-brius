export interface TratamientoEstetica {
  id: string;
  numero: string;
  titulo: string;
  bajada: string;
  items?: string[];
  tag?: string;
  tipo?: "lista" | "banner";
}

export const tratamientosEstetica: TratamientoEstetica[] = [
  {
    id: "cosmiatria",
    numero: "01",
    titulo: "Cosmiatría",
    bajada:
      "Tratamientos faciales orientados a renovar la salud, luminosidad y tonicidad de la piel con supervisión profesional.",
    items: [
      "Acné, rosácea y máculas (manchas)",
      "Lifting facial no invasivo",
      "Anti-age / Peeling químico y mecánico",
      "Punta de diamante (microdermoabrasión)",
      "Radiofrecuencia facial",
    ],
  },
  {
    id: "corporales",
    numero: "02",
    titulo: "Tratamientos Corporales",
    bajada:
      "Planes integrales modeladores y reductores adaptados a las necesidades y objetivos de cada paciente.",
    tag: "Primera consulta sin cargo",
    items: [
      "Masaje reductor y modelador",
      "Tratamiento para la celulitis",
      "Tonificación con electrodos",
      "Tratamiento esclerosante",
      "Lipoescultura láser",
      "Depilación láser definitiva",
      "Drenaje linfático",
      "Crioterapia",
      "Botox",
      "Criolipólisis",
      "Mesoterapia",
      "Radiofrecuencia",
    ],
  },
  {
    id: "podologia",
    numero: "03",
    titulo: "Podología",
    bajada:
      "Atención y cuidado especializado de la salud podológica, con instrumental esterilizado y respaldo médico.",
    items: [
      "Onicomicosis",
      "Onicocriptosis (uñas encarnadas)",
      "Tratamientos láser",
      "Pie diabético y cuidados preventivos",
    ],
  },
  {
    id: "masajes",
    numero: "04",
    titulo: "Masajes Terapéuticos y Relajantes",
    bajada:
      "Sesiones diseñadas para aliviar tensiones, reactivar la circulación y brindar una experiencia de bienestar profundo.",
    items: [
      "Descontracturantes",
      "Tailandés",
      "Californiano",
      "Drenaje linfático",
    ],
  },
  {
    id: "depilacion-laser",
    numero: "05",
    titulo: "Depilación Definitiva Láser",
    bajada:
      "Tecnología de última generación con máxima efectividad, confort y cuidado dermatológico.",
    tag: "¡Las leonas se atienden con nosotros!",
    tipo: "banner",
  },
];
