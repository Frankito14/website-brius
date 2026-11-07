export interface NavItem {
  label: string;
  href: string;
  description?: string;
  theme?: "medicina" | "estetica";
  children?: NavItem[];
}

export const nav: NavItem[] = [
  { label: "Inicio", href: "/" },
  { label: "Nosotros", href: "/nosotros" },
  {
    label: "Servicios",
    href: "/#servicios",
    children: [
      {
        label: "Medicina",
        href: "/medicina",
        description: "Más de 25 especialidades médicas y estudios complementarios",
        theme: "medicina",
      },
      {
        label: "Estética",
        href: "/estetica",
        description: "Estética corporal y facial no invasiva con supervisión médica",
        theme: "estetica",
      },
    ],
  },
  { label: "Coberturas", href: "/coberturas" },
  { label: "Contacto", href: "/contacto" },
];
