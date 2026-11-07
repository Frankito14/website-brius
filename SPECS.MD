# Centro Médico Brius — Requerimientos del Sitio Web (v2.0)

> **Reemplaza a:** `SPECS.MD`
> **Para:** agente/desarrollador que implementa el rediseño.
> **Léelo junto con:** `DESIGN.md` (cómo se ve y se siente). Este documento define **qué se construye, con qué contenido y cuándo está terminado**.

---

## 0. Cómo usar este documento (leer primero)

1. **Orden de trabajo:** seguí la sección 14. No empieces por las páginas: primero tokens, primitivas, datos y layout global.
2. **Fuente de verdad del contenido:** todos los datos del negocio (teléfono, dirección, horarios, redes, especialidades, tratamientos, obras sociales) viven en `lib/` (sección 4). **Ningún componente hardcodea datos del negocio.**
3. **Fuente de verdad visual:** `DESIGN.md`. Si hay conflicto entre ambos documentos sobre algo visual, gana `DESIGN.md`; si es sobre contenido o comportamiento, gana este.
4. **Marcadores:**
   - `[COMPLETAR]` → dato que **no tenemos** (teléfono real, horarios, redes, matrícula…). Usá el valor placeholder definido en `lib/site.ts`, **no inventes datos**, y dejá el TODO documentado. No debe quedar visible como “[COMPLETAR]” en producción: la UI oculta o muestra un fallback razonable cuando el dato falta (ver 4.1).
   - `[VALIDAR]` → decisión o interpretación mía que el cliente debe confirmar.
5. **Cuando el contenido se mejoró respecto del SPECS original** (por pedido explícito de “sonar más profesional”), el texto final está en la sección 7 y es **el que se implementa**.
6. **No agregues dependencias** fuera de las permitidas en la sección 2.

---

## 1. Objetivo del sitio

Sitio institucional del **Centro Médico Brius** (Villa Bosch, Buenos Aires). Objetivos de negocio, en orden de prioridad:

1. **Generar turnos y consultas** (teléfono, WhatsApp, formulario).
2. Publicitar los servicios (Medicina y Estética).
3. Mostrar las especialidades disponibles.
4. Dar información de contacto y ubicación.
5. Dar información del centro y generar confianza (trayectoria, tecnología, coberturas).

**Objetivo de percepción:** que cualquier persona que entre perciba una clínica **premium, moderna y de confianza**.

**Público:** familias y adultos de la zona (incluye mucho adulto mayor), pacientes de obras sociales/PAMI, y mujeres interesadas en estética. Casi todos entran **desde el celular**.

---

## 2. Stack y restricciones técnicas

| Ítem | Decisión |
| :-- | :-- |
| Framework | **Next.js 16** (App Router), **React 19** |
| Lenguaje | **TypeScript** estricto (`"strict": true`) |
| Estilos | **Tailwind CSS v4** (CSS-first, sin `tailwind.config.js`). Solo **clases por defecto** + tokens definidos en `app/globals.css` (ver `DESIGN.md` §4) |
| Íconos | `lucide-react` (+ SVGs propios para marcas) |
| Fuentes | `next/font/google`: **Fraunces** (display) + **Manrope** (UI/cuerpo) |
| Validación | `zod` (única dependencia extra permitida, para formulario/API) |
| Email (opcional) | `resend` **o** `nodemailer`, elegir uno `[VALIDAR proveedor]` |
| Node | 20.9+ (recomendado 22 LTS) |
| Package manager | `npm` |
| Modo | **Solo light mode.** `color-scheme: light` fijo. Sin dark mode |
| Reglas Tailwind | No configuraciones complejas. Los colores se modifican **solo** desde `@theme` en `globals.css` |
| Prohibido | Librerías de animación, carruseles, UI kits pesados, jQuery, CSS-in-JS, imágenes remotas (hotlinking) |

**Diseño:** Mobile First → Tablet → Escritorio. Puntos de control: 360, 768, 1280 px.

---

## 3. Arquitectura y estructura de carpetas

```
website-brius/
├── app/
│   ├── layout.tsx                  # html lang="es-AR", fuentes, Header, Footer, ActionBar, metadata base, JSON-LD
│   ├── globals.css                 # @import tailwindcss + @theme (tokens) + base + reduced-motion
│   ├── page.tsx                    # Home
│   ├── nosotros/page.tsx
│   ├── medicina/
│   │   ├── page.tsx
│   │   └── _components/{SpecialtyGrid,SpecialtyCard}.tsx
│   ├── estetica/
│   │   ├── page.tsx
│   │   └── _components/{TreatmentSection,LaserBanner,ClosingBand,AnchorNav}.tsx
│   ├── coberturas/page.tsx
│   ├── contacto/page.tsx
│   ├── politica-de-privacidad/page.tsx
│   ├── api/contacto/route.ts       # POST del formulario
│   ├── not-found.tsx
│   ├── error.tsx
│   ├── sitemap.ts
│   ├── robots.ts
│   ├── opengraph-image.*           # o /public/og-default.jpg
│   └── icon.* / apple-icon.*       # favicon
├── components/
│   ├── layout/{Header,MegaMenu,MobileDrawer,Footer,MobileActionBar,WhatsAppFab,Breadcrumbs}.tsx
│   ├── ui/{Button,Badge,SectionHeading,Reveal,CTABand,FAQ,ImagePlaceholder,PlusMark}.tsx
│   ├── icons/{InstagramIcon,FacebookIcon,WhatsAppIcon}.tsx
│   ├── sections/{HeroHome,TrustStrip,ServiceCards,ImagingBand,CoverageCards,MembershipCards,WhyUs,LocationBlock}.tsx
│   └── forms/ContactForm.tsx
├── lib/
│   ├── site.ts                     # datos del negocio (única fuente de verdad)
│   ├── nav.ts                      # navegación
│   ├── especialidades.ts           # especialidades de Medicina
│   ├── estetica.ts                 # tratamientos de Estética
│   ├── coberturas.ts               # obras sociales
│   ├── faq.ts
│   ├── whatsapp.ts                 # helper para armar links wa.me
│   ├── seo.ts                      # helpers de metadata y JSON-LD
│   └── utils.ts                    # cn(), normalizeText() (sin acentos)
├── public/
│   ├── brand/logo.svg, logo-white.svg
│   └── images/{home,medicina,estetica,nosotros,contacto}/…  + CREDITS.md
├── .env.example
├── next.config.ts                  # redirects (4.6) + headers de seguridad
├── DESIGN.md
├── REQUIREMENTS.md
└── README.md
```

---

## 4. Modelo de datos (única fuente de verdad)

### 4.1 `lib/site.ts`

```ts
export const site = {
  name: "Centro Médico Brius",
  shortName: "Brius",
  foundedYear: 2002,
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  tagline: "Una empresa dedicada al cuidado de la salud",

  contact: {
    phoneDisplay: "011 1234-5678",     // [COMPLETAR] el del SPECS/v1 es placeholder
    phoneHref: "+541112345678",        // [COMPLETAR] formato E.164
    whatsapp: "5491112345678",         // [COMPLETAR] sin "+", con 549 para móviles AR
    email: "info@centromedicobrius.com.ar", // [COMPLETAR]
  },

  address: {
    street: "Gaucho Cruz 5510",
    zip: "B1682AKN",
    locality: "Villa Bosch",
    region: "Provincia de Buenos Aires",
    country: "AR",
    // Mapa sin API key:
    mapsEmbed:
      "https://www.google.com/maps?q=Gaucho%20Cruz%205510%2C%20B1682AKN%20Villa%20Bosch%2C%20Buenos%20Aires&output=embed",
    mapsLink:
      "https://www.google.com/maps/search/?api=1&query=Gaucho%20Cruz%205510%2C%20B1682AKN%20Villa%20Bosch%2C%20Buenos%20Aires",
  },

  hours: [ // [COMPLETAR] — si queda vacío, la UI oculta el bloque de horarios
    // { days: "Lunes a Viernes", time: "8:00 a 20:00" },
    // { days: "Sábados", time: "8:00 a 13:00" },
  ] as { days: string; time: string }[],

  social: {
    instagram: "", // [COMPLETAR] URL completa. Si está vacío, el ícono NO se renderiza
    facebook: "",  // [COMPLETAR]
  },

  legal: {
    habilitacion: "",   // [COMPLETAR] N° de habilitación del establecimiento
    directorMedico: "", // [COMPLETAR] Nombre y matrícula (MP/MN)
    razonSocial: "",    // [COMPLETAR]
  },
} as const;
```

**Reglas de robustez (obligatorias):**
- Si `social.instagram`/`facebook` están vacíos → no se renderiza ese ícono (nada de links a `#`).
- Si `hours` está vacío → no se muestra “horarios” ni “abierto ahora”, y se muestra “Consultá nuestros horarios por teléfono o WhatsApp”.
- Si `legal.*` está vacío → no se muestra la línea de habilitación (y se deja un `// TODO` visible en el código).
- Los links `tel:` y `wa.me` se generan **siempre** desde `site.contact`.

### 4.2 `lib/whatsapp.ts`
```ts
export const waLink = (message = "Hola, quisiera pedir un turno.") =>
  `https://wa.me/${site.contact.whatsapp}?text=${encodeURIComponent(message)}`;
```
Mensajes prellenados por contexto: general, por especialidad (“Hola, quisiera un turno de {{especialidad}}.”), por tratamiento (“Hola, quisiera consultar por {{tratamiento}}.”), cobertura (“Hola, quisiera consultar si atienden {{obra social}}.”), asociarse.

### 4.3 `lib/nav.ts`
```ts
export const nav = [
  { label: "Inicio", href: "/" },
  { label: "Nosotros", href: "/nosotros" },
  {
    label: "Servicios",
    children: [
      { label: "Medicina", href: "/medicina", description: "Más de 25 especialidades médicas", theme: "medicina" },
      { label: "Estética", href: "/estetica", description: "Estética corporal y facial no invasiva", theme: "estetica" },
    ],
  },
  { label: "Coberturas", href: "/coberturas" },
  { label: "Contacto", href: "/contacto" },
];
```

### 4.4 `lib/especialidades.ts` — tipos y datos

```ts
export type Especialidad = { slug: string; nombre: string; estudios?: string[] };
```

**Lista completa (25).** Corrigiendo capitalización, acentos y ortografía del SPECS:

| # | Especialidad | Estudios / prestaciones |
| :-: | :-- | :-- |
| 1 | Alergia | — |
| 2 | Cardiología | ECG · Eco-Doppler arterial y venoso `[VALIDAR]`* · Ecocardiograma Doppler B/N y color · Ergometría 12 derivaciones · Holter 24 hs · Presurometría 24 hs |
| 3 | Cirugía general | — |
| 4 | Clínica médica | — |
| 5 | Dermatología | — |
| 6 | Diabetología | — |
| 7 | Endocrinología | — |
| 8 | Fonoaudiología | Audiometrías · Logoaudiometría · Otoemisiones acústicas · Timpanometría |
| 9 | Flebología y vascular | — |
| 10 | Gastroenterología | — |
| 11 | Gerontología | — |
| 12 | Ginecología | PAP y colposcopía |
| 13 | Inmunología | — |
| 14 | Nefrología | — |
| 15 | Neumonología | Espirometría |
| 16 | Nutrición | — |
| 17 | Obesidad | — |
| 18 | Oftalmología | — |
| 19 | Ortopedia | — |
| 20 | Otorrinolaringología (ORL) `[VALIDAR]`** | Rinoscopía |
| 21 | Pediatría | — |
| 22 | Reumatología | — |
| 23 | Traumatología | — |
| 24 | Traumatología infantil | — |
| 25 | Urología | — |

> \* **`[VALIDAR]`** El SPECS dice “Ecocardiograma, arterial y venoso”. Un ecocardiograma es cardíaco; “arterial y venoso” corresponde a un **eco-Doppler vascular**. Implementar como **“Eco-Doppler arterial y venoso”** salvo que el cliente indique lo contrario.
> \*\* **`[VALIDAR]`** El SPECS dice “OTR” con “Rinoscopía”. Lo más probable es **ORL (Otorrinolaringología)**. Implementar con ese nombre y confirmar. Si el cliente confirma que es “OTR”, cambiar solo el dato en `lib/especialidades.ts`.

- Orden: **alfabético** por defecto (usar `localeCompare("es")`).
- `slug` generado con `normalizeText` (sin acentos).
- El número “25” que aparece en el sitio **se calcula** con `especialidades.length`.

### 4.5 `lib/estetica.ts` — tratamientos

```ts
export type Tratamiento = {
  id: string; numero: string; titulo: string; bajada: string;
  items?: string[]; tag?: string; imagen: string; tipo?: "lista" | "banner";
};
```

| id | Título | Ítems | Notas |
| :-- | :-- | :-- | :-- |
| `cosmiatria` | Cosmiatría | Acné, rosácea y manchas · Lifting · Anti-age / Peeling · Punta de diamante · Radiofrecuencia | |
| `corporales` | Tratamientos corporales | Masaje reductor y modelador · Tratamiento para la celulitis · Tonificación con electrodos · Tratamiento esclerosante · Lipoescultura láser · Depilación láser definitiva · Drenaje linfático · Crioterapia · Botox · Criolipólisis · Mesoterapia · Radiofrecuencia | **Tag: “Primera consulta sin cargo”** |
| `podologia` | Podología | Onicomicosis · Onicocriptosis · Tratamientos láser · Pie diabético | |
| `masajes` | Masajes | Descontracturantes · Tailandés · Californiano · Drenaje linfático | |
| `depilacion-laser` | Depilación láser definitiva | **Sin ítems** | `tipo: "banner"`, **Tag: “¡Las leonas se atienden con nosotros!”** |

> `[VALIDAR]` “Las leonas se atienden con nosotros” hace referencia a la selección argentina de hockey. Confirmar que el centro tiene **autorización/convenio** para usar esa referencia en comunicación pública.

### 4.6 `lib/coberturas.ts`
```ts
export const kinesiologiaObrasSociales = [
  "IOMA", "Docthos", "Medifé", "Sancor Salud", "Swiss Medical", "Colegio de Escribanos",
]; // "y otras" se agrega como texto, no como chip
```
- El SPECS dice “colegios escribano”. Se implementa como **“Colegio de Escribanos”** `[VALIDAR]`.
- Texto general: “También atendemos obras sociales y PAMI.” (**no se listan más obras sociales sin confirmación del cliente**).
- **Aviso legal en la UI:** “Los convenios y coberturas pueden variar. Consultanos antes de tu turno.”

### 4.7 Redirecciones (`next.config.ts`)
`/landing` → `/` y `/inicio` → `/` con **308 permanente**. Además headers de seguridad básicos (`X-Content-Type-Options`, `Referrer-Policy`, `X-Frame-Options: SAMEORIGIN`, `Permissions-Policy`). Ojo: si se define una CSP, permitir el iframe de `www.google.com/maps` (`frame-src`).

---

## 5. Sitemap del sitio

| Ruta | Estado | Notas |
| :-- | :-- | :-- |
| `/` (alias `/landing`, `/inicio` → redirect) | Existente, rediseñar | Home |
| `/nosotros` | Existente, rediseñar | |
| `/medicina` | Existente, rediseñar | |
| `/estetica` | Existente, rediseñar | |
| `/contacto` | Existente, rediseñar | |
| `/coberturas` | **NUEVA** | Obras sociales, PAMI y cómo asociarse (da destino a las cards de “Asóciese”/“Obras sociales”) |
| `/politica-de-privacidad` | **NUEVA** | Obligatoria porque se recolectan datos en el formulario |
| `404` y `error` | **NUEVAS** | En estilo de marca |
| `/sitemap.xml`, `/robots.txt` | **NUEVAS** | SEO |

Navegación principal: **Inicio · Nosotros · Servicios ▾ (Medicina, Estética) · Coberturas · Contacto** + teléfono + CTA “Pedir turno”.
> El SPECS pedía 4 ítems; sumamos **Coberturas** por ser la consulta nº1 del paciente.

---

## 6. Requerimientos funcionales — componentes globales

> Cada requisito tiene **criterios de aceptación (CA)** verificables. Especificación visual detallada: `DESIGN.md` §7.

### 6.1 Header / Navigator
- **RF-H1:** Logo (link a `/`), navegación, teléfono y CTA “Pedir turno” (WhatsApp).
- **RF-H2:** “Servicios” es un **dropdown** con Medicina y Estética (mega-menú con descripciones).
- **RF-H3:** Top bar (solo ≥ lg) con teléfono, horarios (si existen) y localidad.
- **RF-H4:** Sticky; cambia de estilo al scrollear.
- **RF-H5:** Mobile: drawer a pantalla completa con Llamar y WhatsApp.
- **CA:** navegable 100% con teclado; `Esc` cierra menús; ítem activo resaltado según ruta (`usePathname`); `aria-expanded`, `aria-controls`, `aria-current="page"`; foco atrapado en el drawer; no hay layout shift al abrir.

### 6.2 Acciones de contacto persistentes
- **RF-A1:** Mobile: barra inferior fija con **Llamar · WhatsApp · Cómo llegar**.
- **RF-A2:** Desktop: FAB de WhatsApp.
- **RF-A3:** No debe tapar el footer, el formulario ni el contenido (padding inferior en `body` mobile; el FAB se oculta cerca del footer o tiene offset).
- **CA:** todos los links funcionan (`tel:`, `wa.me`, Google Maps); `rel="noopener noreferrer"` en externos.

### 6.3 Footer + contacto
- **RF-F1:** Contenido: número de contacto, dirección, teléfono, mail, redes (Instagram y Facebook), **formulario de contacto**, links legales.
- **RF-F2:** Bloque de contacto destacado (pre-footer) con el formulario.
- **RF-F3:** Redes con **íconos de marca reales** (SVG), condicionadas a que la URL exista.
- **CA:** ningún ícono placeholder; ningún `href="#"`; año del copyright dinámico.

### 6.4 Formulario de contacto
- **Campos:** Nombre (req.) · Teléfono (req.) · Email (opcional pero validado si se completa) · Motivo (req.: *Turno de Medicina · Consulta de Estética · Obras sociales / Asociarme · Otro*) · Mensaje (opcional, máx. 1000) · **Consentimiento** (req.) · Honeypot.
- **RF-C1:** Validación en cliente **y** en servidor con `zod` (mismas reglas).
- **RF-C2:** `POST /api/contacto` → valida, aplica **rate limit simple** (por IP, en memoria, p. ej. 5/10 min), descarta si el honeypot viene lleno, y envía email a `CONTACT_TO_EMAIL`.
- **RF-C3:** Si faltan variables de entorno de email → en desarrollo loguea el payload y responde 200; en producción responde 500 con mensaje controlado (y la UI ofrece WhatsApp como alternativa).
- **RF-C4:** Estados UI: reposo, enviando, éxito, error de validación, error de servidor (ver `DESIGN.md` §7.15).
- **RF-C5:** No se guarda información sensible en logs ni se pide información clínica en el formulario (agregar aviso: “No envíes datos clínicos por este medio”).
- **CA:** con JS deshabilitado el formulario degrada (mensaje con teléfono/WhatsApp); los errores se anuncian por lector de pantalla; el foco va al primer error; el envío exitoso limpia el formulario.

### 6.5 Mapa y ubicación
- **RF-M1:** Google Maps embebido apuntando a **Gaucho Cruz 5510, B1682AKN Villa Bosch, Provincia de Buenos Aires**, con `loading="lazy"` y `title`.
- **RF-M2:** Botón “Cómo llegar” (`site.address.mapsLink`) y botón de WhatsApp.
- **RF-M3:** Mostrar dirección y horarios (si existen).
- **CA:** el mapa no bloquea el LCP; si el iframe falla se ve la dirección y el botón “Cómo llegar”.

### 6.6 Utilidades globales
- **Skip link** “Saltar al contenido”.
- **Reveal** de entrada en secciones (con reduced-motion).
- **`<Breadcrumbs>`** en páginas internas.
- **`<FAQ>`** acordeón accesible reutilizable.

---

## 7. Requerimientos por página (contenido final)

> **Convenciones de copy:** español rioplatense; institucional en 1ª persona plural / impersonal; CTAs con voseo. **Sin promesas médicas ni superlativos absolutos.**

### 7.1 Home `/`

**Orden de secciones (decisión de diseño, ver `DESIGN.md` §11.1):**
Hero → Franja de confianza → Servicios → Diagnóstico por Imagen → Coberturas (3 cards) → Asociate (2 cards) → Por qué elegirnos → FAQ → Cómo llegar (mapa) → CTA final → Footer.

**Hero**
- Eyebrow: `Desde 2002`
- H1: `En el año 2002 comenzamos a brindar asistencia médica` *(“2002” en itálica de acento)*
- Bajada: *“Abocamos nuestros servicios a la gente que más lo necesitaba. Así fuimos creciendo en las distintas áreas de la salud, hasta cubrir todas las especialidades médicas.”*
- CTAs: **Pedir turno** (WhatsApp) · **Ver especialidades** (`/medicina`)
- Checks: *Obras sociales y PAMI · Diagnóstico por imagen digital · Más de 25 especialidades*
- Tarjetas flotantes: *“Desde 2002 · Más de dos décadas cuidando a la comunidad”* · *“Espinograma digital · Uno de los pocos centros de la provincia que lo realiza”*

**Franja de confianza (4 datos):** `2002` Año de inicio · `25` (calculado) Especialidades médicas · `Digital` Diagnóstico por imagen · `PAMI y más` Obras sociales.

**Sección Servicios (la más importante del sitio)**
- Título: `Nuestros servicios` · Lead: `Salud y bienestar en un mismo lugar.`
- **Card 1 — Medicina:** “Una empresa de salud dedicada al cuidado de usted y su familia.” → botón **Leer más** → `/medicina`
- **Card 2 — Estética:** “Estética corporal y facial no invasiva.” → botón **Leer más** → `/estetica`
- Cards grandes, con imagen, tematizadas (celeste / rosa), card entera clickeable.

**Banda Diagnóstico por Imagen**
- Eyebrow: `Tecnología`
- H2: `Diagnóstico por imagen digital`
- Texto: “Contamos con tecnología digital para diagnóstico por imagen y somos uno de los pocos centros de la provincia de Buenos Aires en realizar **espinograma digital**.”
- CTA: “Consultar por estudios” (WhatsApp)

**Coberturas — 3 cards**
1. **Kinesiología** — “Kinesiología atiende:” + chips: IOMA · Docthos · Medifé · Sancor Salud · Swiss Medical · Colegio de Escribanos · *y otras.*
2. **Tecnología digital** — “Tecnología digital para diagnóstico por imagen.”
3. **Obras sociales y PAMI** — “También atendemos obras sociales y PAMI.” → link a `/coberturas`

**Asociate — 2 cards (navy)**
1. **“Asóciese sin cuota de ingreso”** → CTA “Quiero asociarme” (`/coberturas#asociate`)
2. **“Sin límites de edad”** → texto de apoyo: “Nuestra cobertura está abierta a toda la familia.” `[VALIDAR]`

**Por qué elegirnos (nuevo) — 3 pilares**
- *Trayectoria* — “Desde 2002 acompañando a la comunidad.”
- *Trato cordial* — “Atención cálida y cercana: la clave de nuestro crecimiento.”
- *Supervisión médica* — “Todo tratamiento está supervisado y controlado por nuestros profesionales médicos.”

**FAQ (nuevo)** — 5 preguntas, **solo con respuestas basadas en información confirmada**:
1. *¿Cómo pido un turno?* — “Por teléfono ({{phone}}) o por WhatsApp. También podés dejarnos tus datos en el formulario y te contactamos.”
2. *¿Qué obras sociales atienden?* — “Atendemos obras sociales y PAMI. Para Kinesiología trabajamos con IOMA, Docthos, Medifé, Sancor Salud, Swiss Medical y Colegio de Escribanos, entre otras. Consultanos por tu cobertura.”
3. *¿Cómo me asocio?* — “Sin cuota de ingreso y sin límites de edad. Escribinos y te contamos cómo hacerlo.”
4. *¿La primera consulta de estética tiene costo?* — “En tratamientos corporales, la primera consulta es sin cargo.” *(Además: “Consultas y asesoramiento sin cargo” según cierre de Estética `[VALIDAR alcance]`.)*
5. *¿Dónde están?* — “Gaucho Cruz 5510, Villa Bosch, Provincia de Buenos Aires.” + link “Cómo llegar”.

**Cómo llegar:** `LocationBlock` (mapa + dirección + horarios + botones).
**CTA final:** “Tu salud, en buenas manos.” → *Pedir turno* · *Llamar*.

### 7.2 Nosotros `/nosotros`

- **H1:** `Centro Médico Brius`
- Eyebrow: `Quiénes somos` · Lead: `Una empresa dedicada al cuidado de la salud.`
- **Texto (versión profesional — implementar tal cual):**

> **Quiénes somos.** Centro Médico Brius es una empresa dedicada al cuidado de la salud.
>
> Comenzamos a brindar asistencia médica en el año 2002, orientando nuestros servicios a quienes más lo necesitaban. Esa vocación, junto con la constancia y el trato cordial, fue la clave de nuestro crecimiento.
>
> Hoy nos destacamos en distintas áreas de la salud y cubrimos todas las especialidades médicas.
>
> Contamos con servicio de Diagnóstico por Imagen y somos uno de los pocos centros de la provincia de Buenos Aires que realiza espinograma digital.
>
> Además, desarrollamos tratamientos de estética corporal y facial no invasiva, siempre supervisados y controlados por nuestros profesionales médicos.

- **Secciones extra:** línea de tiempo corta (2002 → Hoy, con 3 hitos **solo con datos confirmados**: *2002 inicio · crecimiento en todas las especialidades · diagnóstico por imagen digital y estética*), 4 pilares (Trayectoria · Trato cordial · Tecnología · Supervisión médica), banda de Diagnóstico por Imagen, CTA.
- **Equipo médico:** **no incluir** sección de profesionales hasta tener fotos, nombres y matrículas reales `[COMPLETAR]`. (Dejar el componente listo pero oculto.)

### 7.3 Medicina `/medicina`

- **H1:** `Brius Medicina` · Eyebrow `Salud` · Lead: “Más de {{n}} especialidades para el cuidado integral de usted y su familia.”
- `data-theme="medicina"` (celeste). Mini-hero (ver `DESIGN.md` §7.11).
- **Listado de especialidades** (sección 4.4) con **buscador en vivo** (insensible a acentos y mayúsculas), contador y estado vacío.
- Cardiología, Fonoaudiología, Ginecología, Neumonología y ORL se expanden mostrando sus estudios.
- **Banda Diagnóstico por Imagen** al final + CTA “¿No encontrás tu especialidad? Consultanos”.
- **CA:** buscar “cardio” muestra Cardiología; “ginecologia” (sin tilde) encuentra Ginecología; las cards abiertas no se superponen con otras ni salen del viewport en mobile; todo accesible por teclado.

### 7.4 Estética `/estetica`

- **H1:** `Brius Estética` · Eyebrow `Bienestar & belleza` · Lead: “Estética corporal y facial no invasiva, con supervisión de profesionales médicos.”
- `data-theme="estetica"` (rosa). Mini-hero (ver `DESIGN.md` §7.11).
- **Cada tratamiento es su propia sección** (sección 4.5), con imagen (placeholder de belleza/cuidado femenino, ver `DESIGN.md` §9).
- **Tratamientos corporales:** tag **“Primera consulta sin cargo”** visible junto al título.
- **Depilación Láser Definitiva:** banner **sin lista de servicios**, con el tag **“¡Las leonas se atienden con nosotros!”**.
- **Cierre:** *“Consultas y asesoramiento sin cargo”* / *• Atendido por profesionales •*.
- Cada sección tiene CTA “Consultar por WhatsApp” con mensaje prellenado por tratamiento.
- **Aviso legal discreto (pie de página de la sección):** “Los tratamientos son supervisados por profesionales médicos. Los resultados pueden variar según cada persona.” `[VALIDAR texto con dirección médica]`
- **CA:** mini-nav de anclas con scroll-spy; sin promesas de resultados; imágenes con `alt` y créditos registrados.

### 7.5 Contacto `/contacto`

- **H1:** `Contacto` · Lead: “Estamos para ayudarte. Escribinos, llamanos o visitanos.”
- Cards rápidas: Teléfono · WhatsApp · Email · Redes (condicionales a datos disponibles).
- **Mapa grande + dirección + horarios** (`LocationBlock`).
- Formulario de contacto (mismo componente del footer, versión expandida).
- FAQ corto (logística: turnos, dirección, coberturas).
- **CA:** el mapa se carga lazy; las cards con dato faltante no se renderizan.

### 7.6 Coberturas `/coberturas` (nueva)

- **H1:** `Coberturas y planes`
- **Obras sociales:** “Atendemos obras sociales y PAMI.” + listado de chips (solo las confirmadas) + aviso de variabilidad de convenios + CTA “Consultar mi cobertura” (WhatsApp con mensaje prellenado).
- **Asociate** (`id="asociate"`): “Asóciese sin cuota de ingreso” + “Sin límites de edad” + CTA. Beneficios y requisitos `[COMPLETAR]` (no inventar).
- FAQ de coberturas.

### 7.7 Política de privacidad `/politica-de-privacidad`
Texto base sobre datos recolectados por el formulario, finalidad, conservación y derechos del titular (Ley 25.326 de Protección de Datos Personales, Argentina). `[VALIDAR]` con asesoría legal; **el agente deja un texto base marcado como borrador**.

### 7.8 404 / Error
Mensaje cálido en estilo de marca, link a Inicio y buscador/links a Medicina, Estética, Contacto.

---

## 8. SEO y datos estructurados

- **Metadata por página** (`generateMetadata` / `metadata`): `title`, `description`, `openGraph`, `twitter`, `alternates.canonical`. Plantilla de título: `%s | Centro Médico Brius`.
- **Idioma y región:** `<html lang="es-AR">`, `og:locale="es_AR"`.
- **JSON-LD** (inyectado con `<script type="application/ld+json">`):
  - `MedicalClinic` (+ `LocalBusiness`) en el layout: nombre, dirección postal, teléfono, email, `sameAs` (redes si existen), `medicalSpecialty`/`availableService`, `openingHoursSpecification` si hay horarios, `geo` si se conocen coordenadas `[COMPLETAR]`.
  - `BreadcrumbList` en páginas internas.
  - `FAQPage` donde haya FAQ.
- **`sitemap.ts`** con todas las rutas públicas; **`robots.ts`** (permitir todo, apuntar al sitemap).
- **Open Graph image** 1200×630 por defecto.
- **Favicon / apple-icon / manifest** con el isotipo de la marca.
- **SEO local:** el nombre, dirección y teléfono (NAP) deben ser **idénticos** en footer, contacto y JSON-LD (y en la ficha de Google Business Profile — recomendación para el cliente).
- `h1` único por página; URLs cortas y sin acentos.

**Metadata sugerida:**

| Página | Title | Description |
| :-- | :-- | :-- |
| Home | Centro Médico Brius — Salud y estética en Villa Bosch | Centro médico en Villa Bosch con más de 25 especialidades, diagnóstico por imagen digital y estética no invasiva. Atendemos obras sociales y PAMI. |
| Nosotros | Nosotros | Desde 2002 brindamos asistencia médica a la comunidad. Conocé nuestra trayectoria, tecnología y valores. |
| Medicina | Medicina: especialidades médicas | Cardiología, pediatría, ginecología, traumatología y más. Conocé todas las especialidades del Centro Médico Brius. |
| Estética | Estética corporal y facial | Cosmiatría, tratamientos corporales, podología, masajes y depilación láser, supervisados por profesionales médicos. |
| Coberturas | Obras sociales, PAMI y cómo asociarte | Consultá las coberturas que atendemos y cómo asociarte sin cuota de ingreso ni límites de edad. |
| Contacto | Contacto y cómo llegar | Gaucho Cruz 5510, Villa Bosch. Teléfono, WhatsApp, horarios y mapa. |

---

## 9. Requerimientos no funcionales

### 9.1 Accesibilidad
Cumplir **WCAG 2.1 AA** (objetivo AAA en cuerpo/títulos) y el checklist de `DESIGN.md` §12. Es requisito de aceptación, no un deseable.

### 9.2 Performance (mobile, 4G simulada)
LCP < 2.5 s · CLS < 0.05 · INP < 200 ms · Lighthouse ≥ 95 (Performance) y **100** en Accesibilidad, Buenas prácticas y SEO.

### 9.3 Seguridad y privacidad
- Headers de seguridad básicos; sin secretos en el cliente (solo `NEXT_PUBLIC_*` públicos).
- Sanitización/validación en servidor; honeypot + rate limit; sin almacenar datos del formulario más allá del envío por email.
- Enlaces externos con `rel="noopener noreferrer"`.
- Sin cookies ni trackers por defecto. **Si se agrega analítica** (p. ej. GA4/Plausible), solo con un componente aislado y, de usar cookies, un banner de consentimiento `[VALIDAR]`.

### 9.4 Compatibilidad
Últimas 2 versiones de Chrome, Safari (iOS incluido), Firefox, Edge. Android Chrome y Safari iOS son **prioritarios**.

### 9.5 Mantenibilidad
- TypeScript estricto, ESLint y Prettier sin errores; sin `any` injustificado.
- Componentes pequeños y tipados; datos separados de la presentación.
- Un **cambio de contenido** (nueva especialidad, nuevo teléfono) debe requerir editar **un solo archivo** de `lib/`.
- Un **cambio de marca** (color) debe requerir editar **solo** `app/globals.css`.

---

## 10. Variables de entorno (`.env.example`)

```bash
NEXT_PUBLIC_SITE_URL=https://www.ejemplo.com.ar     # URL canónica de producción
CONTACT_TO_EMAIL=info@ejemplo.com.ar                # destinatario del formulario
CONTACT_FROM_EMAIL=no-reply@ejemplo.com.ar          # remitente verificado
RESEND_API_KEY=                                     # o credenciales SMTP según proveedor elegido
```

---

## 11. Datos pendientes del cliente (`[COMPLETAR]`)

| Dato | Dónde se usa | Estado actual |
| :-- | :-- | :-- |
| Teléfono real (y formato WhatsApp) | Header, footer, CTAs, JSON-LD | Placeholder `011 1234-5678` ⚠️ |
| Email real | Footer, contacto, JSON-LD, destino del form | Placeholder |
| Horarios de atención | Top bar, mapa, contacto, JSON-LD | Vacío (la UI lo oculta) |
| URLs de Instagram y Facebook | Footer, contacto | Vacío (la UI oculta los íconos) |
| Logo oficial (SVG) | Header, footer, favicon | Wordmark temporal |
| Fotografías propias del centro | Hero, Nosotros, Medicina, Estética | Stock/placeholder |
| N° de habilitación y director médico (nombre + matrícula) | Footer, Nosotros | Vacío |
| Razón social / CUIT (si se muestra) | Footer, privacidad | Vacío |
| Coordenadas exactas | JSON-LD `geo` | Vacío |
| Listado completo de obras sociales y detalle de planes | Coberturas | Solo lo del SPECS |
| Estudios de Diagnóstico por Imagen | Home / Medicina | Solo “espinograma digital” confirmado |
| Beneficios/requisitos para asociarse | Coberturas | Vacío |
| Proveedor de email para el formulario | API de contacto | Por definir |
| `/examples/hero_estetica.png` | Referencia visual del mini-hero | **No fue entregado** |

---

## 12. Decisiones a validar con el cliente (`[VALIDAR]`)

1. “**Ecocardiograma arterial y venoso**” → ¿es **Eco-Doppler arterial y venoso**? (se implementó así).
2. “**OTR**” → ¿es **ORL / Otorrinolaringología**? (se implementó así).
3. “**Colegios escribano**” → ¿**Colegio de Escribanos**? (se implementó así).
4. “**¡Las leonas se atienden con nosotros!**” → ¿autorización/convenio para usar la referencia?
5. “**Consultas y asesoramiento sin cargo**” → ¿aplica a **todo** Estética o solo a la primera consulta de corporales?
6. “**Sin límites de edad**” → ¿qué significa exactamente (cobertura/planes)? Se redactó una frase neutra.
7. Textos legales y de publicidad médica (estética): revisar con la dirección médica y asesoría legal.
8. Proveedor de email y política de analítica/cookies.

---

## 13. Fuera de alcance (por ahora)

Sistema de turnos online con agenda, portal de pacientes/historia clínica, e-commerce, blog/CMS, multi-idioma, pasarela de pagos, dark mode, chatbots. (El diseño y la estructura de datos permiten sumarlos después sin rehacer.)

---

## 14. Plan de trabajo (orden obligatorio)

| Fase | Entregable | Criterio de salida |
| :-: | :-- | :-- |
| **1. Fundaciones** | `globals.css` con tokens, fuentes, layout base, `lib/*` con datos, utilidades, `.env.example`, redirects | `npm run build` OK; cambiar `--color-brand-600` cambia el sitio; `data-theme` funciona |
| **2. Primitivas** | Button, Badge, SectionHeading, Reveal, PlusMark, iconos de marca, ImagePlaceholder, FAQ, CTABand | Documentadas por uso real; accesibles |
| **3. Shell global** | Header (+MegaMenu, Drawer), ActionBar/FAB, Footer, ContactForm + `/api/contacto` | Navegación y contacto funcionando en todas las pantallas |
| **4. Home** | Todas las secciones de 7.1 | Cumple CA y Lighthouse |
| **5. Medicina** | PageHero + SpecialtyGrid con buscador | CA de 7.3 |
| **6. Estética** | TreatmentSections + banner láser + cierre | CA de 7.4 |
| **7. Resto de páginas** | Nosotros, Contacto, Coberturas, Privacidad, 404/error | CA de 7.2, 7.5–7.8 |
| **8. SEO** | Metadata, JSON-LD, sitemap, robots, OG, favicon | Validación con Rich Results Test |
| **9. QA y cierre** | Responsive (360/768/1280), accesibilidad, Lighthouse, imágenes finales, `CREDITS.md`, README al día | Definición de terminado (sección 15) |

---

## 15. Definición de terminado (DoD)

- [ ] Todas las páginas de la sección 5 existen y cumplen sus CA.
- [ ] Todo el **contenido del SPECS original está presente** (con las mejoras de redacción de la sección 7 y las correcciones de la sección 4).
- [ ] **Cero datos hardcodeados** fuera de `lib/`; **cero hex** fuera de `globals.css`.
- [ ] `npm run lint`, `npm run build` y `tsc --noEmit` sin errores ni warnings relevantes.
- [ ] Lighthouse mobile ≥ 95 / 100 / 100 / 100 en Home, Medicina y Estética.
- [ ] Checklist de accesibilidad (`DESIGN.md` §12) completo y probado con teclado y lector de pantalla.
- [ ] Probado en 360, 768, 1280 px, Safari iOS y Chrome Android; sin scroll horizontal.
- [ ] Formulario probado de punta a punta (éxito, error de validación, error de servidor, honeypot).
- [ ] Ningún `[COMPLETAR]` visible en la UI; los datos faltantes se ocultan con elegancia.
- [ ] Ninguna imagen remota; `public/images/CREDITS.md` completo.
- [ ] `README.md` actualizado con cualquier cambio de arquitectura realizado.

---

## 16. Apéndice — Copy de microtextos

| Contexto | Texto |
| :-- | :-- |
| CTA principal | Pedir turno |
| CTA secundario | Ver especialidades |
| Servicios (botón) | Leer más |
| WhatsApp (tooltip) | Escribinos por WhatsApp |
| Mensaje WhatsApp general | Hola, quisiera pedir un turno. |
| Buscador | Buscá una especialidad (ej.: cardiología) |
| Sin resultados | No encontramos esa especialidad. Escribinos y te orientamos. |
| Formulario — éxito | ¡Gracias! Recibimos tu consulta y te vamos a contactar a la brevedad. |
| Formulario — error | No pudimos enviar tu mensaje. Probá de nuevo o escribinos por WhatsApp. |
| Aviso formulario | No envíes datos clínicos por este medio. |
| Skip link | Saltar al contenido |
| Cierre Estética | Consultas y asesoramiento sin cargo · • Atendido por profesionales • |
| Aviso coberturas | Los convenios y coberturas pueden variar. Consultanos antes de tu turno. |

---

*Requerimientos v2.0 — Centro Médico Brius. Reemplaza a `SPECS.MD`.*