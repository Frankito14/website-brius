# Centro Médico Brius — Sitio Web

Sitio institucional del **Centro Médico Brius** (Villa Bosch, Provincia de Buenos Aires). Sirve para **generar turnos y consultas**, publicitar los servicios (Medicina y Estética), mostrar las especialidades disponibles y brindar información de contacto y del centro.

> **Dirección:** Gaucho Cruz 5510, B1682AKN Villa Bosch, Provincia de Buenos Aires

---

## 📚 Documentación del proyecto

| Documento | Para qué sirve |
| :-- | :-- |
| [`REQUIREMENTS.md`](./REQUIREMENTS.md) | **Qué se construye:** alcance, contenido final, modelo de datos, requisitos funcionales, SEO, criterios de aceptación y plan de trabajo |
| [`DESIGN.md`](./DESIGN.md) | **Cómo se ve y se siente:** sistema de diseño (color, tipografía, componentes, movimiento, accesibilidad, wireframes) |
| `README.md` | Este archivo: cómo correr, configurar y mantener el proyecto |

Si vas a modificar algo del sitio, **leé primero esos dos documentos**.

---

## 🧰 Tecnologías

- [Next.js 16](https://nextjs.org/) (App Router) + [React 19](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/) (modo estricto)
- [Tailwind CSS v4](https://tailwindcss.com/) (configuración *CSS-first*, sin `tailwind.config.js`)
- [Lucide React](https://lucide.dev/) (íconos funcionales) + SVGs propios para redes sociales
- [Zod](https://zod.dev/) (validación del formulario de contacto)
- Tipografías con `next/font/google`: **Fraunces** (títulos) y **Manrope** (interfaz y texto)

---

## ✨ Características

- **Diseño premium, Mobile First** y responsive (mobile, tablet, escritorio).
- **Solo light mode**, pensado para legibilidad y accesibilidad (WCAG 2.1 AA).
- **Dos universos visuales con una sola gramática:** *Medicina* (celeste, estructurado) y *Estética* (rosa, aireado), alternados con `data-theme`.
- **Conversión primero:** teléfono y WhatsApp siempre a mano (barra fija en mobile, botón flotante en escritorio).
- **Especialidades con buscador en vivo** (insensible a acentos) y estudios expandibles.
- **Estética por secciones**, cada tratamiento con su propio bloque.
- **Mapa de Google** embebido, "Cómo llegar" y horarios.
- **Formulario de contacto** con validación, estados de carga/éxito/error, honeypot y rate limit.
- **SEO local:** metadata por página, datos estructurados (`MedicalClinic`, `FAQPage`, `BreadcrumbList`), sitemap y robots.
- **Contenido y colores centralizados:** cambiar un teléfono, una especialidad o el color de la marca se hace en **un solo lugar**.

---

## 🗺️ Mapa del sitio

| Ruta | Descripción |
| :-- | :-- |
| `/` | Inicio (también responde `/landing` e `/inicio`, que redirigen a `/`) |
| `/nosotros` | Información institucional |
| `/medicina` | Listado de especialidades médicas |
| `/estetica` | Tratamientos de estética, podología y masajes |
| `/coberturas` | Obras sociales, PAMI y cómo asociarse |
| `/contacto` | Mapa, horarios y formulario |
| `/politica-de-privacidad` | Política de privacidad |

---

## 🚀 Instalación y ejecución local

**Requisitos:** Node.js **20.9 o superior** (recomendado 22 LTS) y npm.

1. Instalá las dependencias:
   ```bash
   npm install
   ```

2. Configurá las variables de entorno (ver sección siguiente):
   ```bash
   cp .env.example .env.local
   ```

3. Iniciá el servidor de desarrollo:
   ```bash
   npm run dev
   ```

4. Abrí [http://localhost:3000](http://localhost:3000).

### Scripts disponibles

| Comando | Descripción |
| :-- | :-- |
| `npm run dev` | Servidor de desarrollo |
| `npm run build` | Build de producción |
| `npm run start` | Sirve el build de producción |
| `npm run lint` | Linter (ESLint) |

---

## 🔐 Variables de entorno

Copiá `.env.example` a `.env.local` y completá los valores:

| Variable | Descripción |
| :-- | :-- |
| `NEXT_PUBLIC_SITE_URL` | URL canónica del sitio (SEO, sitemap, Open Graph) |
| `CONTACT_TO_EMAIL` | Email que recibe las consultas del formulario |
| `CONTACT_FROM_EMAIL` | Remitente verificado de los correos |
| `RESEND_API_KEY` | Clave del proveedor de email (o credenciales SMTP, según el proveedor elegido) |

> En desarrollo, si faltan las variables de email, el formulario **no falla**: registra el mensaje en consola y responde OK. En producción es obligatorio configurarlas.

---

## 🎨 Cómo cambiar los colores de la marca

Todo el color del sitio está en **`app/globals.css`**, dentro del bloque `@theme`. **No hace falta tocar ningún componente.**

- **Marca (azul):** escala `--color-brand-50 … 950`. El color de acción principal es `--color-brand-600`.
- **Medicina (celeste):** escala `--color-med-*`.
- **Estética (rosa):** escala `--color-est-*`.
- **Neutros (tinta):** escala `--color-ink-*`.

Los componentes usan nombres **semánticos** (`bg-accent-600`, `text-ink-950`). El acento (`accent`) cambia solo según el atributo `data-theme` de cada página (`medicina` / `estetica`; por defecto, marca).

> ⚠️ Al cambiar un color, verificá el contraste (texto blanco sobre `*-600` debe superar **4.5:1**). Detalles en `DESIGN.md` §4.3.

---

## ✏️ Cómo editar el contenido

Todo el contenido del negocio vive en **`/lib`**. Nunca se escribe directamente en los componentes.

| Quiero cambiar… | Archivo |
| :-- | :-- |
| Teléfono, WhatsApp, email, dirección, horarios, redes, habilitación | `lib/site.ts` |
| Agregar/quitar una especialidad o sus estudios | `lib/especialidades.ts` |
| Tratamientos de Estética | `lib/estetica.ts` |
| Obras sociales | `lib/coberturas.ts` |
| Preguntas frecuentes | `lib/faq.ts` |
| Menú de navegación | `lib/nav.ts` |
| Textos de una página | `app/<ruta>/page.tsx` |

**Datos opcionales:** si `redes`, `horarios` o datos de habilitación están vacíos en `lib/site.ts`, el sitio **oculta** ese bloque en lugar de mostrar enlaces rotos.

---

## 🖼️ Imágenes

- Se guardan en `public/images/` (organizadas por sección) en formato **`.webp`/`.avif`**.
- Se renderizan **siempre** con `next/image` y con `alt` en español.
- **No se usan imágenes remotas** (hotlinking).
- Registrá la fuente y licencia de cada imagen en `public/images/CREDITS.md`.
- El logo oficial va en `public/brand/logo.svg` (y `logo-white.svg` para fondos oscuros).

---

## 📁 Estructura del proyecto

```
website-brius/
├── app/
│   ├── layout.tsx                  # Shell global: fuentes, Header, Footer, acciones de contacto, JSON-LD
│   ├── globals.css                 # Tailwind v4 + tokens de diseño (@theme)
│   ├── page.tsx                    # Inicio
│   ├── nosotros/                   # Institucional
│   ├── medicina/                   # Especialidades (+ _components)
│   ├── estetica/                   # Tratamientos (+ _components)
│   ├── coberturas/                 # Obras sociales y asociarse
│   ├── contacto/                   # Mapa, horarios y formulario
│   ├── politica-de-privacidad/
│   ├── api/contacto/route.ts       # Endpoint del formulario
│   ├── not-found.tsx · error.tsx
│   └── sitemap.ts · robots.ts
├── components/
│   ├── layout/                     # Header, MegaMenu, MobileDrawer, Footer, MobileActionBar, WhatsAppFab, Breadcrumbs
│   ├── ui/                         # Button, Badge, SectionHeading, Reveal, FAQ, CTABand, PlusMark…
│   ├── icons/                      # Instagram, Facebook, WhatsApp (SVG)
│   ├── sections/                   # Secciones reutilizables (HeroHome, TrustStrip, LocationBlock…)
│   └── forms/ContactForm.tsx
├── lib/                            # Datos del negocio y utilidades (única fuente de verdad)
├── public/                         # Imágenes, logo y archivos estáticos
├── DESIGN.md · REQUIREMENTS.md · README.md
└── next.config.ts                  # Redirects y headers de seguridad
```

---

## ✅ Calidad y estándares

- **Accesibilidad:** WCAG 2.1 AA. Navegación completa por teclado, foco visible, `prefers-reduced-motion` respetado, objetivos táctiles de 48 px.
- **Performance (mobile):** LCP < 2.5 s, CLS < 0.05, Lighthouse ≥ 95 (Performance) y 100 en Accesibilidad, Buenas prácticas y SEO.
- **Código:** TypeScript estricto, ESLint sin errores, sin colores ni datos hardcodeados en componentes.

Antes de abrir un PR, ejecutá:

```bash
npm run lint && npm run build
```

---

## 🌐 Despliegue

El proyecto está listo para desplegarse en [Vercel](https://vercel.com/) (recomendado) o cualquier plataforma compatible con Next.js.

1. Importá el repositorio y configurá las **variables de entorno** de producción.
2. Definí `NEXT_PUBLIC_SITE_URL` con el dominio final.
3. Verificá `/sitemap.xml`, `/robots.txt` y los datos estructurados antes de publicar.

---

## 📝 Pendientes antes de salir a producción

Datos que el cliente debe proveer (detalle completo en `REQUIREMENTS.md` §11):

- [ ] Teléfono y WhatsApp reales (hoy hay un **placeholder**)
- [ ] Email de contacto real
- [ ] Horarios de atención
- [ ] URLs de Instagram y Facebook
- [ ] Logo oficial en SVG
- [ ] Fotografías propias del centro
- [ ] N.º de habilitación y director médico (nombre y matrícula)
- [ ] Revisión legal de la política de privacidad y del texto de publicidad de estética
- [ ] Confirmación de las decisiones marcadas como `[VALIDAR]` (`REQUIREMENTS.md` §12)

---

## 📄 Licencia y créditos

Proyecto privado de **Centro Médico Brius**. Todos los derechos reservados. Los créditos de las imágenes de terceros se detallan en `public/images/CREDITS.md`.