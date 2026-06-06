# Centro Médico Brius - Sitio Web

Sitio web oficial del Centro Médico Brius, desarrollado para publicitar los servicios ofrecidos, mostrar las especialidades disponibles y brindar información de contacto y del centro.

## Tecnologías Utilizadas

- [Next.js](https://nextjs.org/) (App Router)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Lucide React](https://lucide.dev/) (Iconos)

## Características

- **Diseño Mobile First:** Optimizado para dispositivos móviles, tablets y escritorio.
- **Light Mode Exclusivo:** Diseño limpio en modo claro, priorizando legibilidad y accesibilidad.
- **Colores Personalizables:** Fácilmente configurables desde los estilos de Tailwind.

## Instalación y Ejecución Local

Para correr el proyecto en modo de desarrollo:

1. Instala las dependencias:
```bash
npm install
```

2. Inicia el servidor de desarrollo:
```bash
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000) en tu navegador para ver el resultado.

## Estructura del Proyecto

- `/app`: Rutas de la aplicación (App Router de Next.js), layouts y página principal.
  - `/app/nosotros`: Página de información institucional.
  - `/app/medicina`: Listado de especialidades médicas.
  - `/app/estetica`: Servicios de estética y tratamientos.
  - `/app/contacto`: Mapa interactivo y formulario de contacto.
- `/components`: Componentes reutilizables de la interfaz de usuario (Header, Footer, etc.).
- `/public`: Archivos estáticos e imágenes.
