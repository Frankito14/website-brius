# Centro Médico Brius — Documento de Diseño v2.0

> **Versión:** 2.0.0 (rediseño completo — reemplaza a `DESING.md` v1.0)
> **Fecha:** Octubre 2026
> **Stack:** Next.js 16 (App Router) · React 19 · TypeScript · Tailwind CSS v4 · Lucide React
> **Audiencia de este documento:** el agente/desarrollador que implementa el rediseño. Todo lo que está acá es **decisión tomada**, no sugerencia. Lo que hay que validar con el cliente está marcado con `[VALIDAR]` o `[COMPLETAR]`.
> **Documento hermano:** `REQUIREMENTS.md` (qué construir, contenido y criterios de aceptación). Este documento define **cómo se ve y se siente**.

---

## 0. TL;DR (lo que tenés que recordar si leés una sola sección)

1. **Concepto:** *“Clínica boutique de barrio con estándar de gran institución”*. Premium no significa frío ni caro: significa **orden, aire, tipografía con carácter, fotografía cuidada y cero detalles rotos**.
2. **Azul y blanco** siguen siendo la marca. Sumamos **azul noche** (casi negro azulado) para bandas de contraste y **una tipografía serif elegante** para los títulos. Ese par (serif + sans limpia) es lo que más separa un sitio “de clínica” de uno “premium”.
3. **Medicina = celeste, estructurado, rectilíneo. Estética = rosa, aireado, curvo (arcos).** Misma gramática, distinta temperatura. Se cambia con **un atributo** (`data-theme`) sobre el contenedor, no reescribiendo clases.
4. **Todo el color vive en `app/globals.css` dentro de `@theme`.** Los componentes usan nombres **semánticos** (`bg-accent-600`, `text-ink-950`), nunca hex ni escalas de Tailwind “a mano”. Cambiar la marca = editar un bloque.
5. **Conversión primero:** teléfono y WhatsApp siempre a un toque (barra fija en mobile, botón flotante en desktop). Es una clínica de barrio en Argentina: el turno se pide por WhatsApp.
6. **Accesibilidad real (WCAG AA mínimo):** gran parte del público es adulto mayor. Texto base 16–18px, botones de 48px, contraste verificado. El v1 tenía botones blancos sobre `#137fec` con contraste **3.98:1 (falla AA)**; acá está corregido.

---

## 1. Posicionamiento y personalidad de marca

### 1.1 Qué tiene que sentir quien entra
> “Esto es serio, es lindo, me van a atender bien y puedo pedir turno ya.”

| Atributo | Cómo se traduce visualmente | Cómo **no** se ve |
| :-- | :-- | :-- |
| **Confiable** | Azul profundo, grillas ordenadas, datos duros visibles (desde 2002, 25 especialidades) | Stock de doctores sonriendo con guardapolvo y estetoscopio mirando cámara |
| **Cálido** | Serif con itálicas, esquinas generosas, fotos con luz natural, copy cercano | Frialdad hospitalaria, gris cemento |
| **Premium** | Mucho espacio en blanco, jerarquía tipográfica fuerte, detalles finos (hairlines, sombras tintadas), animación sutil | Degradados saturados, sombras duras, bordes gruesos, íconos por todos lados |
| **Moderno** | Layout editorial asimétrico, tipografía grande, micro-interacciones | Plantilla genérica de “landing SaaS” |
| **Cercano** | Voseo moderado en CTAs, trato cordial, ubicación local visible | Jerga corporativa o médica innecesaria |

### 1.2 Principios de diseño (en orden de prioridad)
1. **Claridad antes que decoración.** Si un elemento no ayuda a entender, confiar o actuar, se va.
2. **Aire.** Los sitios premium se distinguen por lo que *no* ponen. Respetar el ritmo vertical de la sección 5.
3. **Una sola cosa destacada por pantalla.** Un CTA primario, un titular dominante.
4. **Consistencia radical.** Mismos radios, mismas sombras, mismos botones en todo el sitio. Cero valores sueltos.
5. **Mobile primero de verdad.** Se diseña y se prueba a 360px primero; desktop es la expansión.
6. **Confianza visible.** Matrícula, dirección médica, habilitación, obras sociales: todo a la vista y bien presentado.

### 1.3 Motivo gráfico firma: **la cruz suave (`+`)**
Un pequeño signo más con puntas redondeadas es el “sello” sutil de la marca. Se usa **con mucha moderación**:
- Como viñeta en listas (reemplaza al punto).
- Como separador entre datos (`Atendido por profesionales + Consultas sin cargo +`).
- Como marcador de sección en eyebrows (`+ Desde 2002`).
- Como patrón de fondo **a 4% de opacidad** en una sola banda del sitio (la de Diagnóstico por Imagen).

Se implementa como componente SVG `<PlusMark />` (ver sección 8). **Nunca** como ícono grande ni de color saturado.

---

## 2. Diagnóstico del diseño actual (v1) → qué se corrige

| # | Problema detectado en v1 | Impacto | Solución en v2 |
| :-: | :-- | :-- | :-- |
| 1 | Texto blanco sobre `#137fec` = **3.98:1** | Falla WCAG AA en botones | Primario de acción pasa a `brand-600` (`#1668DC`, 5.2:1). `#137fec` queda solo para elementos grandes/decorativos |
| 2 | Medicina usa **índigo/violeta**, el SPECS pedía **celeste** | Rompe la identidad azul de la marca | Medicina usa escala `med` (celeste/azul acero) |
| 3 | Íconos de Facebook/Instagram son `<Mail />` | Se ve roto y poco profesional | SVGs de marca propios (Lucide ya no incluye íconos de marcas) |
| 4 | Especialidades con menú flotante absoluto | Se pisa con otras cards, mal en mobile, problemas de teclado | Acordeón accesible que expande **en el flujo** de la grilla |
| 5 | Imágenes remotas (`lh3.googleusercontent.com`) | Se rompen, LCP malo, riesgo legal | Imágenes locales `.webp/.avif` con `next/image` |
| 6 | Hero oscurecido con overlay negro sobre foto | Look “promocional” genérico, tapa la foto | Hero editorial split: texto limpio + foto luminosa con tarjetas flotantes |
| 7 | Formulario enterrado en el footer, sin estados | Pierde conversiones | Bloque de contacto destacado + estados loading/éxito/error + validación |
| 8 | Mapa como imagen estática | No es interactivo | `<iframe>` de Google Maps lazy + botón “Cómo llegar” |
| 9 | Fondo `#f6f7f8` grisáceo + tarjetas blancas planas | Look “template” | Lienzo blanco azulado `ink-50`, bandas navy, sombras tintadas |
| 10 | Peso 800–900 en todos los títulos | Pesado, poco refinado | Serif display en peso medio + sans para UI |
| 11 | Teléfono placeholder `011 1234-5678` | Número falso en producción | Centralizado en `lib/site.ts` con `[COMPLETAR]` |
| 12 | Texto secundario 12px | Ilegible para adultos mayores | Mínimo 14px para microcopy, 16px cuerpo |
| 13 | Sin CTA de turno ni WhatsApp | Se pierde el canal #1 | Barra de acción mobile + FAB WhatsApp |
| 14 | Sin SEO local ni datos estructurados | Invisible en Google Maps/búsquedas | JSON-LD `MedicalClinic`, metadata por página, sitemap |

---

## 3. Referencias y benchmark

> **Nota de transparencia:** la búsqueda web que hice para este documento no devolvió capturas ni análisis útiles de los sitios de la competencia. El benchmark siguiente se basa en **patrones de diseño conocidos y consolidados del sector**, no en una auditoría pixel a pixel. **Antes de implementar, el equipo debería abrir 3–4 de estos sitios y validar que los patrones siguen vigentes.**

### 3.1 Qué se toma de cada referente

| Referente | Qué copiamos (el patrón) | Qué evitamos |
| :-- | :-- | :-- |
| **Instituciones argentinas de primer nivel** (Hospital Alemán, Hospital Italiano, Hospital Británico, Swiss Medical) | Buscador/entrada rápida a turnos, jerarquía clara de servicios, tono institucional sobrio, datos de confianza arriba | Portales sobrecargados con 40 links en el header, banners por todos lados, estética de intranet |
| **Mayo Clinic / Cleveland Clinic** | Lectura impecable, tipografía grande, estructura de información por especialidad, microcopy claro | Densidad de texto excesiva |
| **One Medical / Parsley Health** | Look moderno y humano, mucho blanco, fotografía luminosa, tipografía de personalidad, CTA único | Estilo startup demasiado “tech” |
| **Clínicas de estética premium** (dermocosmética, spas médicos) | Paletas suaves, tipografía serif, arcos y curvas, fotografía de piel/luz/texturas, secciones aireadas | Filtros exagerados, antes/después sin respaldo, promesas de resultado |
| **Hospitales boutique / clínicas privadas europeas** | Bandas oscuras de contraste, números grandes, hairlines finos | Minimalismo tan extremo que pierda calidez |

### 3.2 Patrones comunes del sector que **sí o sí** incluimos
- Teléfono y turno **visibles sin scrollear**.
- Bloque de **confianza** (años, especialidades, coberturas) inmediatamente después del hero.
- **Obras sociales** fáciles de encontrar (es la pregunta #1 del paciente argentino).
- **Mapa + horarios + cómo llegar** sin hacer clics extra.
- **Habilitación y dirección médica** visibles (genera confianza y es buena práctica regulatoria).
- Fotografía **real o de calidad editorial**, nunca clip art.

---

## 4. Sistema de color

### 4.1 Reglas de uso (60-30-10)
- **60% — Lienzo:** blanco (`#FFFFFF`) y `ink-50`.
- **30% — Estructura:** `ink-950` (azul noche) para bandas/footer, `brand`/`accent` para elementos activos.
- **10% — Acento:** `accent-600` para CTAs y detalles; `champagne` solo en Estética y solo como línea fina.

### 4.2 Tokens (copiar tal cual a `app/globals.css`)

```css
@import "tailwindcss";

/* `static` = emite TODAS las variables aunque no se usen (necesario porque
   las referenciamos desde los alias semánticos --accent-*). */
@theme static {
  /* ── Marca: Azul Brius ───────────────────────────── */
  --color-brand-50:  #EEF6FF;
  --color-brand-100: #D9EAFF;
  --color-brand-200: #BCDBFF;
  --color-brand-300: #8EC5FF;
  --color-brand-400: #59A5FF;
  --color-brand-500: #137FEC; /* azul histórico del sitio v1: solo decorativo/grande */
  --color-brand-600: #1668DC; /* ← ACCIÓN PRIMARIA (blanco encima = 5.2:1 ✔ AA) */
  --color-brand-700: #1253B3;
  --color-brand-800: #134591;
  --color-brand-900: #143B75;
  --color-brand-950: #0B2447;

  /* ── Neutros “tinta” (grises azulados) ───────────── */
  --color-ink-50:  #F6F9FC; /* lienzo de página */
  --color-ink-100: #EAF0F7;
  --color-ink-200: #D8E2EE; /* bordes */
  --color-ink-300: #B9C8DB;
  --color-ink-400: #8497B0;
  --color-ink-500: #5E7390;
  --color-ink-600: #475D7A; /* texto secundario (6.7:1 sobre blanco ✔) */
  --color-ink-700: #34475F; /* texto de cuerpo (9.5:1 ✔) */
  --color-ink-800: #1E3049;
  --color-ink-900: #0F2038;
  --color-ink-950: #0A1A33; /* títulos y bandas navy */

  /* ── Medicina: celeste / azul acero ──────────────── */
  --color-med-50:  #F0F9FF;
  --color-med-100: #E0F3FE;
  --color-med-200: #B9E5FB;
  --color-med-300: #7DD0F7;
  --color-med-400: #3DB6EE;
  --color-med-500: #139BDB;
  --color-med-600: #0A78B4; /* acción (blanco encima = 4.8:1 ✔) */
  --color-med-700: #0A5F92;
  --color-med-800: #0C4C75;
  --color-med-900: #0E3E5F;
  --color-med-950: #082A41;

  /* ── Estética: rosa empolvado ────────────────────── */
  --color-est-50:  #FFF6F8;
  --color-est-100: #FFE9EF;
  --color-est-200: #FFD3DF;
  --color-est-300: #FCAFC5;
  --color-est-400: #F67FA3;
  --color-est-500: #E8527F;
  --color-est-600: #CC2F64; /* acción (blanco encima = 5.1:1 ✔) */
  --color-est-700: #A92454;
  --color-est-800: #8A2047;
  --color-est-900: #6F1E3E;
  --color-est-950: #3E0E22;

  /* ── Champagne: detalle premium (solo Estética, solo líneas/sellos) ── */
  --color-champagne-300: #E6D3AE;
  --color-champagne-500: #C9A86A; /* decorativo, NUNCA texto sobre blanco */
  --color-champagne-700: #8E6F3A; /* texto permitido (4.7:1 ✔) */

  /* ── Estados ─────────────────────────────────────── */
  --color-success: #15803D;
  --color-success-bg: #ECFDF3;
  --color-danger:  #B42318;
  --color-danger-bg: #FEF3F2;
  --color-warning: #B54708;
  --color-warning-bg: #FFFAEB;

  /* ── Sombras tintadas (nunca negro puro) ─────────── */
  --shadow-soft: 0 1px 2px rgb(10 26 51 / 0.04), 0 8px 24px -8px rgb(10 26 51 / 0.10);
  --shadow-lift: 0 2px 4px rgb(10 26 51 / 0.05), 0 20px 40px -12px rgb(10 26 51 / 0.18);
  --shadow-glow: 0 10px 30px -10px rgb(22 104 220 / 0.45);

  /* ── Escala tipográfica fluida ───────────────────── */
  --text-display: clamp(2.5rem, 1.5rem + 4.4vw, 4.75rem);
  --text-display--line-height: 1.04;
  --text-display--letter-spacing: -0.025em;
  --text-h1: clamp(2.25rem, 1.6rem + 2.8vw, 3.75rem);
  --text-h1--line-height: 1.08;
  --text-h1--letter-spacing: -0.02em;
  --text-h2: clamp(1.75rem, 1.35rem + 1.7vw, 2.75rem);
  --text-h2--line-height: 1.15;
  --text-h2--letter-spacing: -0.015em;
  --text-h3: clamp(1.25rem, 1.1rem + 0.6vw, 1.625rem);
  --text-h3--line-height: 1.25;
}

/* ── Acento semántico: cambia según la sección ─────────
   Los componentes usan bg-accent-600, text-accent-800, etc.
   NO usan brand/med/est directamente (salvo el Home/branding global). */
:root {
  --accent-50: var(--color-brand-50);   --accent-100: var(--color-brand-100);
  --accent-200: var(--color-brand-200); --accent-300: var(--color-brand-300);
  --accent-400: var(--color-brand-400); --accent-500: var(--color-brand-500);
  --accent-600: var(--color-brand-600); --accent-700: var(--color-brand-700);
  --accent-800: var(--color-brand-800); --accent-900: var(--color-brand-900);
  --accent-950: var(--color-brand-950);
}
[data-theme="medicina"] {
  --accent-50: var(--color-med-50);   --accent-100: var(--color-med-100);
  --accent-200: var(--color-med-200); --accent-300: var(--color-med-300);
  --accent-400: var(--color-med-400); --accent-500: var(--color-med-500);
  --accent-600: var(--color-med-600); --accent-700: var(--color-med-700);
  --accent-800: var(--color-med-800); --accent-900: var(--color-med-900);
  --accent-950: var(--color-med-950);
}
[data-theme="estetica"] {
  --accent-50: var(--color-est-50);   --accent-100: var(--color-est-100);
  --accent-200: var(--color-est-200); --accent-300: var(--color-est-300);
  --accent-400: var(--color-est-400); --accent-500: var(--color-est-500);
  --accent-600: var(--color-est-600); --accent-700: var(--color-est-700);
  --accent-800: var(--color-est-800); --accent-900: var(--color-est-900);
  --accent-950: var(--color-est-950);
}
@theme inline {
  --color-accent-50: var(--accent-50);   --color-accent-100: var(--accent-100);
  --color-accent-200: var(--accent-200); --color-accent-300: var(--accent-300);
  --color-accent-400: var(--accent-400); --color-accent-500: var(--accent-500);
  --color-accent-600: var(--accent-600); --color-accent-700: var(--accent-700);
  --color-accent-800: var(--accent-800); --color-accent-900: var(--accent-900);
  --color-accent-950: var(--accent-950);

  --font-sans: var(--font-manrope), ui-sans-serif, system-ui, sans-serif;
  --font-display: var(--font-fraunces), Georgia, "Times New Roman", serif;
}
```

> **Cómo se cambia el color de la marca:** editar los hex de `--color-brand-*` (y `med`/`est` si corresponde). No hay que tocar ni un componente. **Esa es la “configuración fácil de colores” que pide el SPECS**, y no requiere `tailwind.config.js` (Tailwind v4 es CSS-first).

### 4.3 Matriz de contraste verificada (WCAG 2.1)

| Combinación | Ratio aprox. | Uso | Resultado |
| :-- | :-: | :-- | :-: |
| `ink-950` sobre blanco | 17:1 | Títulos | AAA |
| `ink-700` sobre blanco | 9.5:1 | Cuerpo | AAA |
| `ink-600` sobre blanco | 6.7:1 | Texto secundario | AA+ |
| Blanco sobre `brand-600` | 5.2:1 | Botón primario | AA |
| Blanco sobre `med-600` | 4.8:1 | Botón Medicina | AA |
| Blanco sobre `est-600` | 5.1:1 | Botón Estética | AA |
| Blanco sobre `ink-950` | 17:1 | Bandas navy | AAA |
| Blanco sobre `brand-500` (`#137FEC`) | **4.0:1** | ❌ NO usar para texto pequeño | Falla AA |
| `champagne-500` sobre blanco | <3:1 | ❌ NO texto, solo líneas | Decorativo |

**Reglas duras:**
- Texto sobre `accent-600` o más oscuro → **blanco**.
- Texto sobre `accent-50/100` → `accent-800` o `accent-900`.
- Nunca texto `ink-400` o más claro para contenido informativo (solo placeholders/disabled).
- Toda combinación nueva se verifica con una herramienta de contraste antes de mergear.

### 4.4 Personalidad cromática por sección

| Sección | Lienzo | Acento | Carácter |
| :-- | :-- | :-- | :-- |
| **Home / Nosotros / Contacto / Coberturas** | `ink-50` + blanco + bandas `ink-950` | `brand` | Institucional, confiable |
| **Medicina** (`data-theme="medicina"`) | blanco + `med-50` | `med` | Preciso, estructurado, “masculino” sin ser frío |
| **Estética** (`data-theme="estetica"`) | blanco + `est-50` | `est` + hairlines `champagne` | Suave, aireado, “femenino” sin ser infantil |

> El Header y el Footer **no cambian** de color entre secciones (siempre marca). Solo cambia el contenido de página. Esto mantiene cohesión.

---

## 5. Tipografía

### 5.1 Familias

| Rol | Fuente | Por qué | Pesos |
| :-- | :-- | :-- | :-- |
| **Display / Títulos** | **Fraunces** (Google Fonts, variable) | Serif moderna con carácter y calidez; da el aire “premium editorial” que el v1 no tenía. Funciona tanto para Medicina (peso más firme) como para Estética (itálicas elegantes) | 400, 500, 600 + itálica |
| **UI / Cuerpo** | **Manrope** (ya en el proyecto) | Muy legible, geométrica y amable; se conserva por continuidad | 400, 500, 600, 700 |

Carga con `next/font/google` (sin `<link>` externos):

```tsx
// app/layout.tsx
import { Fraunces, Manrope } from "next/font/google";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  style: ["normal", "italic"],
  axes: ["opsz"],
  display: "swap",
});
const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

// <html lang="es-AR" className={`${fraunces.variable} ${manrope.variable}`}>
// <body className="font-sans bg-ink-50 text-ink-700 antialiased">
```

### 5.2 Escala y uso

| Nivel | Clase | Tamaño (fluido) | Fuente / peso | Dónde |
| :-- | :-- | :-- | :-- | :-- |
| **Display** | `font-display text-display text-ink-950` | 40 → 76 px | Fraunces 500 | Solo H1 del hero del Home |
| **H1** | `font-display text-h1 text-ink-950` | 36 → 60 px | Fraunces 500 | Título de cada página |
| **H2** | `font-display text-h2 text-ink-950` | 28 → 44 px | Fraunces 500 | Títulos de sección |
| **H3** | `font-display text-h3 text-ink-950` | 20 → 26 px | Fraunces 600 | Títulos de card |
| **Lead** | `text-lg md:text-xl text-ink-600 leading-relaxed` | 18 → 20 px | Manrope 500 | Bajada bajo el título |
| **Cuerpo** | `text-base text-ink-700 leading-[1.7]` | 16 px (18 en bloques de lectura largos) | Manrope 400 | Párrafos |
| **UI / botones** | `text-base font-semibold` | 16 px | Manrope 600 | Botones, nav |
| **Eyebrow** | `text-xs font-semibold uppercase tracking-[0.14em] text-accent-700` | 12 px | Manrope 600 | Supra-título |
| **Microcopy** | `text-sm text-ink-600` | 14 px | Manrope 400 | Notas, legales (mínimo 14 px) |

**Recursos tipográficos que dan el look premium:**
- **Itálica serif de énfasis** en una palabra clave del título: `En el año <em class="italic text-accent-600">2002</em>…`. Una por título, máximo.
- Títulos con `text-balance`; párrafos con `text-pretty`.
- **Numeración editorial** `01 / 02 / 03` en Fraunces para secciones y pasos.
- Ancho máximo de lectura: `max-w-prose` (≈65 caracteres).
- Cifras destacadas (stats) en Fraunces con `tabular-nums`.

---

## 6. Layout, espaciado y forma

### 6.1 Contenedor y grilla
```html
<div class="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-12">…</div>
```
- Grilla de **12 columnas** en desktop (`lg:grid-cols-12 gap-x-8`), 4 en mobile.
- Breakpoints = **los por defecto de Tailwind** (`sm 640`, `md 768`, `lg 1024`, `xl 1280`). No se agregan custom.
- Se diseña a **360 px, 768 px, 1280 px** como puntos de control obligatorios.

### 6.2 Ritmo vertical
| Elemento | Mobile | Desktop |
| :-- | :-- | :-- |
| Padding de sección | `py-16` | `md:py-24 lg:py-32` |
| Separación título → contenido | `mt-10` | `lg:mt-14` |
| Gap entre cards | `gap-5` | `lg:gap-8` |
| Padding interno de card | `p-6` | `lg:p-8` |

### 6.3 Forma
| Elemento | Radio | Notas |
| :-- | :-- | :-- |
| Botones | `rounded-full` | Píldora (premium, amigable) |
| Inputs | `rounded-xl` | |
| Cards | `rounded-2xl` (Medicina) / `rounded-3xl` (Estética) | Estética un grado más curva |
| Imagen hero | `rounded-[2rem]` | |
| **Imágenes Estética** | **máscara de arco** `rounded-t-[999px] rounded-b-3xl` | Marca registrada de la sección femenina |
| **Imágenes Medicina** | `rounded-2xl` rectas, con recorte de esquina | Estructura y precisión |
| Badges | `rounded-full` | |

### 6.4 Bordes y sombras
- Borde estándar: `border border-ink-200` (1 px). En fondos oscuros: `border-white/10`.
- Sombras **solo** las tokens: `shadow-soft` (reposo), `shadow-lift` (hover), `shadow-glow` (botón primario).
- **Prohibido** `shadow-2xl` y sombras negras puras.
- Hairlines de 1 px (`h-px bg-ink-200`) para separar contenido: son más elegantes que bloques de color.

### 6.5 Z-index
`header: z-50` · `dropdown/mega-menu: z-50` · `mobile drawer: z-[60]` · `FAB / barra mobile: z-40` · `toasts: z-[70]`.

---

## 7. Componentes (especificación)

> Cada componente vive en `components/` (comunes) o `app/<ruta>/_components/` (específicos). Nombres en inglés para componentes, contenido en español. Todo componente es **Server Component** salvo que necesite interactividad (marcado `"use client"`).

### 7.1 Botones (`<Button />`)

| Variante | Estilo | Uso |
| :-- | :-- | :-- |
| **primary** | `bg-accent-600 text-white hover:bg-accent-700 shadow-glow` | CTA principal (1 por vista) |
| **secondary** | `bg-white text-ink-950 border border-ink-200 hover:border-accent-400 hover:bg-accent-50` | CTA secundario |
| **ghost** | `text-accent-700 hover:bg-accent-50` | Acciones terciarias |
| **inverse** | `bg-white text-ink-950 hover:bg-accent-50` | Sobre fondos navy |
| **whatsapp** | `bg-[#128C4A] text-white hover:bg-[#0F7A40]` | Siempre con ícono WhatsApp |

- Tamaños: `md` = `h-12 px-6` (48 px, **mínimo táctil**), `lg` = `h-14 px-8`.
- Transición: `transition-all duration-200`; hover `-translate-y-0.5`; active `translate-y-0`.
- Foco visible: `focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-600`.
- Ícono de flecha `ArrowUpRight`/`ArrowRight` que se desplaza 2–4 px en hover.
- Soporta `asChild`/`href` (renderiza `<a>`/`<Link>` cuando es navegación). **Un botón que navega es un link.**

### 7.2 Badge / Eyebrow
`inline-flex items-center gap-2 rounded-full bg-accent-100 text-accent-800 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.14em]` con `<PlusMark />` al inicio. Variantes: `soft`, `outline`, `solid` (sobre navy: `bg-white/10 text-white`).

### 7.3 Header (2 niveles)

```
┌──────────────────────────────────────────────────────────────┐  ← Top bar (solo ≥ lg) bg-ink-950
│ 📞 011 XXXX-XXXX   🕘 Lun a Vie 8–20 hs [COMPLETAR]   📍 Villa Bosch │
├──────────────────────────────────────────────────────────────┤
│ [Logo Brius]   Inicio  Nosotros  Servicios ▾  Coberturas  Contacto   [📞] [Pedir turno] │ ← bg-white/80 backdrop-blur
└──────────────────────────────────────────────────────────────┘
```
- **Sticky**, altura `h-16` mobile / `h-20` desktop; al scrollear > 8 px aplica `shadow-soft` + borde inferior (`"use client"` con listener liviano).
- **Top bar:** solo desktop. Se oculta al hacer scroll para ganar espacio.
- **Logo:** `public/brand/logo.svg`. Mientras no haya logo oficial `[COMPLETAR]`, crear **wordmark**: “Brius” en Fraunces 600 + “CENTRO MÉDICO” en Manrope `text-[10px] tracking-[0.22em]`, con `<PlusMark />` como acento en la “i”.
- **Servicios (mega-dropdown):** al hover/foco/click abre un panel `rounded-2xl shadow-lift` con **dos tarjetas grandes** (Medicina en celeste, Estética en rosa) con ícono, descripción corta y flecha. Accesible: botón con `aria-expanded`, `aria-controls`, cierra con `Esc` y click afuera, navegable con flechas/Tab. **No depende solo de `:hover`.**
- **Ítem activo:** subrayado de 2 px en `accent-600` con animación de entrada.
- **CTA “Pedir turno”:** botón primary, enlaza a WhatsApp con mensaje prellenado.
- **Teléfono:** `<a href="tel:…">` con ícono; en mobile es un botón circular de ícono.
- **Mobile:** hamburguesa → **drawer a pantalla completa** (`fixed inset-0 z-[60] bg-white`), enlaces grandes en Fraunces 28 px, “Servicios” como acordeón, y al pie dos botones grandes: **Llamar** y **WhatsApp**. Bloquea scroll del body, foco atrapado, `Esc` cierra, `aria-modal`.

### 7.4 Barra de acción mobile + FAB
- **Mobile (< lg):** barra fija inferior con 3 acciones iguales: **Llamar · WhatsApp · Cómo llegar** (`h-14`, íconos + texto, fondo blanco, `border-t`, safe-area `pb-[env(safe-area-inset-bottom)]`). El `body` recibe `pb-16` en mobile.
- **Desktop (≥ lg):** **FAB de WhatsApp** circular 56 px abajo a la derecha con un tooltip “Escribinos por WhatsApp” en hover; pulso sutil **solo la primera vez** (respeta `prefers-reduced-motion`).

### 7.5 Hero del Home (editorial split)

```
┌─────────────────────────────────────────────────────────────────┐
│  + DESDE 2002                              ┌──────────────┐      │
│                                            │              │      │
│  En el año 2002 comenzamos a               │   FOTO       │ ┌───┐│
│  brindar asistencia médica                 │   luminosa   │ │Esp│││
│  (2002 en itálica serif, azul)             │  rounded     │ │ino││
│                                            │  [2rem]      │ └───┘│
│  Abocamos nuestros servicios a la gente…   │              │      │
│                                            └──────────────┘      │
│  [Pedir turno →]  [Ver especialidades]                           │
│                                                                  │
│  ✓ Obras sociales y PAMI   ✓ Diagnóstico digital   ✓ 25 especialidades │
└─────────────────────────────────────────────────────────────────┘
```
- Desktop: `lg:grid-cols-12`; texto en 6–7 cols, imagen en 5–6. Mobile: texto primero, imagen abajo (`aspect-[4/5]`).
- Fondo: blanco con **un solo** halo radial muy suave (`radial-gradient` en `brand-100` al 60%) detrás de la imagen. Nada de degradados fuertes.
- **Imagen:** `next/image` con `priority`, `sizes` correctos, `rounded-[2rem]`, **sin overlay oscuro**. Foto luminosa, humana, desaturada levemente hacia azul.
- **Tarjetas flotantes** sobre la imagen (glassmorphism sutil: `bg-white/85 backdrop-blur border border-white/60 shadow-lift rounded-2xl`): una “Desde 2002 — más de dos décadas de trayectoria” y otra “Espinograma digital — uno de los pocos centros de la provincia”. Animación `float` lenta (6 s, ±6 px), desactivada con reduced-motion.
- **Fila de confianza** (3 checks) bajo los CTAs.
- Altura: contenido define la altura (no `520px` fijo). Mínimo `min-h-[80svh]` solo en desktop.

### 7.6 Franja de confianza (Stats)
Debajo del hero. 4 datos en una fila (2×2 en mobile), separados por hairlines verticales:
`2002` Desde · `25` Especialidades · `Digital` Diagnóstico por imagen · `PAMI y +` Obras sociales.
Número en Fraunces 40–56 px `text-ink-950`, etiqueta en `text-sm text-ink-600`. El `25` se **calcula** desde `lib/especialidades.ts` (no hardcodear).

### 7.7 Encabezado de sección (`<SectionHeading />`)
Eyebrow + H2 (serif) + lead opcional + hairline. Alineación izquierda por defecto; centrado solo en cierres/CTA. Props: `eyebrow`, `title`, `lead`, `align`.

### 7.8 Cards

| Tipo | Estructura | Estilo |
| :-- | :-- | :-- |
| **InfoCard** (Kinesiología, Tecnología, Obras sociales) | Ícono en caja `size-12 rounded-xl bg-accent-100 text-accent-700` → H3 → texto | `bg-white border border-ink-200 rounded-2xl p-6 lg:p-8 shadow-soft hover:shadow-lift hover:-translate-y-1 transition` |
| **CoverageChips** (obras sociales de Kinesiología) | Lista de chips `rounded-full bg-ink-50 border border-ink-200 px-3 py-1 text-sm` | Cada obra social es un chip individual, no un párrafo |
| **ServiceCard** (Medicina / Estética en Home) | Imagen grande (60% de la card) + eyebrow + H3 serif + descripción + CTA “Leer más →” | **Card gigante** (`lg:grid-cols-2 gap-8`), imagen con zoom 1.04 en hover, color de acento propio (celeste / rosa), la card entera es clickeable (`<Link>` envolvente con `after:absolute after:inset-0`) |
| **FeatureCard navy** (Asociate / Sin límite de edad) | Fondo `ink-950` (o `brand-900`), número grande en serif, texto blanco, `<PlusMark />` de fondo al 6% | Reemplaza las cards sólidas azul/pizarra del v1 |

### 7.9 Especialidades (Medicina) — `SpecialtyCard` + `SpecialtyGrid`
Reemplaza el menú flotante del v1.
- **Toolbar** sticky bajo el header: buscador (`<input type="search">` con ícono, filtra en vivo, sin acentos), chips de acceso rápido A–Z opcionales y contador “Mostrando 25 especialidades”.
- **Grilla:** `grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4`.
- **Card colapsada:** `rounded-2xl border border-ink-200 bg-white p-5`, `<PlusMark>` en `text-accent-600`, nombre en Manrope 600 18 px, y — si tiene estudios — un chip “6 estudios” + chevron.
- **Card con sub-estudios:** al abrir **expande en el flujo** (`grid-template-rows: 0fr → 1fr`, 250 ms) mostrando la lista de estudios con viñeta `+`. La card abierta ocupa `sm:col-span-2 lg:col-span-3` **o** crece solo en altura (decisión: **crece solo en altura**, más simple y estable).
- **Accesibilidad:** `<button aria-expanded aria-controls>` o `<details>`/`<summary>` nativo; flecha rota 180°. Sin overlays ni posicionamiento absoluto.
- **Estado vacío del buscador:** “No encontramos esa especialidad. Escribinos y te orientamos” + botón WhatsApp.
- Cada card sin sub-estudios es **link** a WhatsApp prellenado (“Hola, quiero un turno de {{especialidad}}”) o simplemente informativa — ver `REQUIREMENTS.md` §6.3.

### 7.10 Sección de tratamiento (Estética) — `TreatmentSection`
Una sección **por tratamiento**, alternando imagen izquierda/derecha en desktop.
```
┌───────────────────────────────────────────────┐
│  (arco)        01 / Cosmiatría                │
│  ┌─────┐       Titulo H2 serif                │
│  │IMG  │       Bajada corta                   │
│  │arco │       ✓ Acné, rosácea y manchas     │
│  └─────┘       ✓ Lifting                       │
│                ✓ Anti age / Peeling            │
│                [Consultar por WhatsApp →]      │
└───────────────────────────────────────────────┘
```
- Lista de prestaciones en **2 columnas** (desktop) con check `<Check />` en círculo `bg-accent-100 text-accent-700`.
- Etiqueta `01`, `02`… en Fraunces itálica `text-champagne-700` como sello editorial.
- Fondo alternado: blanco / `est-50`.
- **Tag “Primera consulta sin cargo”** en Tratamientos corporales: badge `solid` con `<Sparkles />`, ubicado sobre el título, **bien visible**.
- **Depilación Láser Definitiva:** *sin lista*, sección tipo banner ancho: fondo `est-950` con textura sutil, tag “¡Las leonas se atienden con nosotros!” y CTA. Tipografía grande, impactante.
- **Cierre** (antes del footer): banda centrada, serif grande: *“Consultas y asesoramiento sin cargo”* + `+ Atendido por profesionales +` en `champagne`.
- **Mini-nav de anclas** sticky (chips: Cosmiatría · Corporales · Podología · Masajes · Depilación láser) con scroll-spy.

### 7.11 Mini-Hero de Medicina / Estética (`PageHero`)
Hero compacto compartido por ambas páginas, tematizado por `data-theme`.
- **Medicina:** fondo `med-50`, composición **rectilínea**: texto a la izquierda, imagen en rectángulo `rounded-2xl` con una **esquina recortada** y una retícula de puntos sutil. Peso serif 600. Badge “Salud”. CTAs: “Pedir turno” + “Ver especialidades” (ancla).
- **Estética:** fondo `est-50`, composición **orgánica**: imagen en **arco**, un círculo difuso `est-200` detrás (`blur-3xl opacity-50`), tipografía con **itálica** en la palabra clave. Badge “Bienestar & belleza”.
- Estructura idéntica (misma jerarquía y proporciones) → **mismo componente**, distinta máscara/colores.
- `[VALIDAR]` El SPECS referencia `/examples/hero_estetica.png`. **Ese archivo no se me entregó.** Si existe, el agente debe abrirlo y alinear la composición con él; este documento define la dirección general mientras tanto.

### 7.12 Banda “Diagnóstico por Imagen”
Banda ancha `bg-ink-950 text-white` con patrón `<PlusMark />` al 4%. Izquierda: eyebrow “Tecnología”, H2 serif “Diagnóstico por imagen digital”, párrafo, y destaque **“Espinograma digital — uno de los pocos centros de la provincia de Buenos Aires”**. Derecha: imagen/ilustración de equipo con `rounded-2xl` y borde `white/10`. Es el **diferencial tecnológico**; merece la banda de más contraste del sitio.

### 7.13 Mapa (`<LocationBlock />`)
- Layout: mapa (7 cols) + tarjeta de datos (5 cols) en desktop; apilado en mobile.
- **Mapa real**: `<iframe>` de Google Maps con `loading="lazy"`, `title="Mapa de Centro Médico Brius"`, `referrerPolicy="no-referrer-when-downgrade"`, `rounded-3xl`, altura 360 (mobile) / 480 (desktop). URL sin API key: `https://www.google.com/maps?q=<dirección URL-encoded>&output=embed`.
- **Tarjeta de datos:** dirección, **horarios** (lista con día/horas), teléfono, botón **“Cómo llegar”** (abre Google Maps), botón WhatsApp.
- Dirección exacta: **Gaucho Cruz 5510, B1682AKN Villa Bosch, Provincia de Buenos Aires**.
- Estado “Abierto ahora / Cerrado” calculado por horarios `[COMPLETAR horarios]` (opcional; solo si los horarios son confiables).

### 7.14 Footer + bloque de contacto
- **Pre-footer (bloque de contacto):** tarjeta blanca grande `rounded-3xl shadow-lift` que **se solapa** (`-mb-24`) con el footer navy. A la izquierda texto “¿Querés que te contactemos?” (serif) + datos rápidos; a la derecha el **formulario**.
- **Footer:** `bg-ink-950 text-ink-300`, 4 columnas en desktop: Marca (logo blanco + frase + redes) · Servicios · Contacto (dirección, tel, mail, horarios) · Legal (política de privacidad, habilitación).
- Redes: Instagram y Facebook como botones circulares `size-11 bg-white/10 hover:bg-white/20` con **SVG de marca**, `aria-label`, `target="_blank" rel="noopener noreferrer"`.
- Línea legal final: © año dinámico · Centro Médico Brius · **Habilitación / Director médico `[COMPLETAR]`**.

### 7.15 Formulario de contacto (`<ContactForm />` — `"use client"`)
- Campos: Nombre · Teléfono · Email · Motivo (select) · Mensaje · Consentimiento (checkbox obligatorio con link a política de privacidad). Honeypot oculto.
- Inputs: `h-12 rounded-xl border border-ink-200 bg-white px-4 text-base`, **label visible arriba** (no solo placeholder), `focus:border-accent-600 focus:ring-4 focus:ring-accent-100`.
- Validación **inline** en `onBlur` + al enviar; errores en `text-danger` con ícono y `aria-describedby`; el primer campo inválido recibe foco.
- **Estados del botón:** reposo → `loading` (spinner + “Enviando…”, deshabilitado) → **éxito** (panel `bg-success-bg` con check animado + “¡Gracias! Te vamos a contactar a la brevedad”) → **error** (panel `bg-danger-bg` + botón “Reintentar” + alternativa WhatsApp).
- `autocomplete` correcto (`name`, `tel`, `email`), `inputmode="tel"`.

### 7.16 Otros componentes
- **`<Breadcrumbs />`** en páginas internas (Inicio › Servicios › Medicina), con JSON-LD `BreadcrumbList`.
- **`<FAQ />`** acordeón (ver `REQUIREMENTS.md`), `<details>` nativo con estilos.
- **`<CTABand />`** banda de cierre reutilizable (fondo `brand-950`, serif grande, 2 botones).
- **`<Reveal />`** wrapper de animación de entrada (sección 9).
- **`<PlusMark />`**, **`<SocialIcon name="instagram|facebook|whatsapp" />`**, **`<ImagePlaceholder />`** (para imágenes aún no provistas: fondo `ink-100` con degradado sutil + ícono + etiqueta, **claramente temporal**).
- **Página 404** en estilo de marca (“Esta página no existe. Volvamos al inicio.” + buscador de especialidades).

---

## 8. Iconografía

- **Librería:** `lucide-react`, `strokeWidth={1.5}`, tamaños 20 / 24 / 28 px. **Una sola librería, un solo grosor.**
- **Íconos de marcas (Instagram, Facebook, WhatsApp):** Lucide los deprecó/removió; usar **SVGs propios** en `components/icons/` (`InstagramIcon`, `FacebookIcon`, `WhatsAppIcon`), `fill="currentColor"`, `aria-hidden`.
- **`<PlusMark />`:** SVG 12×12 con cruz de puntas redondeadas, `currentColor`.
- **Íconos funcionales sugeridos:** `Phone`, `MessageCircle` (genérico), `MapPin`, `Clock`, `Mail`, `ShieldCheck` (supervisión médica), `ScanLine`/`Activity` (diagnóstico), `HeartPulse`, `Stethoscope`, `Sparkles` (estética), `Flower2`, `Check`, `ArrowUpRight`, `ChevronDown`, `Menu`, `X`, `Search`, `Users` (asociate), `BadgeCheck`.
- Cada ícono decorativo lleva `aria-hidden="true"`; los que son botones llevan `aria-label`.

---

## 9. Fotografía y arte

### 9.1 Dirección de arte
- **Luz natural, tonos claros, sensación de calma.** Gente real en situaciones reales (consulta, recepción, un paciente mayor sonriendo con su familia), no poses de catálogo.
- **Corrección de color unificada:** leve viraje a azul frío en Medicina; cálido/rosado suave en Estética.
- **Medicina:** instrumental, manos, consultas, tecnología de diagnóstico, equipo humano. Encuadres rectos.
- **Estética:** piel, texturas, flores, luz suave, masajes, spa, manos, bienestar. Encuadres suaves, mucho aire.
- **Evitar:** pacientes reales identificables sin autorización, fotos de bancos con marcas de agua, `antes/después` sin respaldo y consentimiento, imágenes de un hospital que no es Brius presentadas como propias.

### 9.2 Requisitos técnicos
- Formato `.webp`/`.avif`, almacenadas en `public/images/<seccion>/`. **Prohibido hotlinking.**
- Siempre `next/image` con `width/height` o `fill` + `sizes`, `alt` descriptivo en español, y `placeholder="blur"` donde se pueda.
- Hero: `priority`. Resto: lazy por defecto.
- Hero ≤ 180 KB, resto ≤ 120 KB.
- Mantener `public/images/CREDITS.md` con fuente y licencia de cada imagen.
- Mientras no haya fotos reales: descargar de **Unsplash/Pexels** (licencia libre) y listarlas en `CREDITS.md`, o usar `<ImagePlaceholder />`. **Las fotos del cliente reemplazan a las de stock en cuanto estén disponibles.**

### 9.3 Imágenes necesarias (checklist para el agente)

| Archivo | Uso | Búsqueda sugerida |
| :-- | :-- | :-- |
| `hero-home.webp` | Hero Home (vertical 4:5) | “doctor patient consultation warm light” / “médica atendiendo paciente mayor” |
| `servicio-medicina.webp` | ServiceCard Medicina | “medical consultation modern clinic” |
| `servicio-estetica.webp` | ServiceCard Estética | “facial treatment skin care soft light” |
| `diagnostico-imagen.webp` | Banda diagnóstico | “digital x-ray radiology modern equipment” |
| `nosotros-equipo.webp` | Nosotros | “medical team smiling clinic” |
| `medicina-hero.webp` | Hero Medicina | “stethoscope clinic light blue” |
| `estetica-hero.webp` | Hero Estética | “woman skincare glow pink soft” |
| `estetica-cosmiatria.webp` | Sección Cosmiatría | “facial peeling cosmetology” |
| `estetica-corporal.webp` | Sección Corporales | “body massage spa” |
| `estetica-podologia.webp` | Sección Podología | “podiatry foot care clinic” |
| `estetica-masajes.webp` | Sección Masajes | “relaxing massage towels candles” |
| `estetica-laser.webp` | Banner Láser | “laser hair removal treatment” |
| `contacto.webp` | Contacto (opcional) | “clinic reception welcoming” |
| `og-default.jpg` | Open Graph 1200×630 | Composición con logo + claim |

---

## 10. Movimiento y micro-interacciones

Principio: **el movimiento guía la atención, no entretiene.** Duraciones cortas, curvas suaves, nada que mueva el layout.

| Interacción | Especificación |
| :-- | :-- |
| **Reveal on scroll** | Entrada `opacity 0→1` + `translateY(16px→0)`, `600ms`, `cubic-bezier(.22,1,.36,1)`; **stagger** de 60 ms entre hermanos. Implementar con `IntersectionObserver` (componente `<Reveal />`), **una sola vez**. Sin libs de animación. |
| **Hover card** | `-translate-y-1` + `shadow-soft → shadow-lift`, `250ms`. |
| **Hover imagen** | `scale-[1.04]` dentro de `overflow-hidden`, `700ms ease-out`. |
| **Botón** | `-translate-y-0.5` en hover; flecha interna se desplaza 3 px. |
| **Acordeón** | `grid-template-rows 0fr→1fr`, `250ms`; chevron 180°. |
| **Mega-menú** | `fade + translateY(-4px→0)`, `180ms`. |
| **Hero floating cards** | `float` 6 s infinito ±6 px, `ease-in-out`. |
| **Foco** | Anillo de 2 px `accent-600` + offset 2 px (siempre visible por teclado). |

**`prefers-reduced-motion: reduce` → se desactivan reveal, float, pulso y scroll suave.** Obligatorio:
```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after { animation-duration: 0.01ms !important; animation-iteration-count: 1 !important; transition-duration: 0.01ms !important; scroll-behavior: auto !important; }
}
```

---

## 11. Páginas — composición (wireframes)

> Los wireframes definen **orden y jerarquía**. El contenido textual final está en `REQUIREMENTS.md`.

### 11.1 Home `/`
```
[Header 2 niveles]
[Hero editorial split]
[Franja de confianza: 2002 · 25 · Digital · PAMI y +]
[Servicios: 2 ServiceCards gigantes — Medicina | Estética]   ← lo más importante
[Banda navy: Diagnóstico por Imagen digital + Espinograma]
[Coberturas: 3 InfoCards (Kinesiología chips · Tecnología digital · Obras sociales y PAMI)]
[Asociate: 2 FeatureCards navy (Sin cuota de ingreso · Sin límites de edad)]
[Por qué elegirnos: 3 pilares (Trayectoria · Trato cordial · Supervisión médica)]
[Preguntas frecuentes (4–5)]
[Cómo llegar: mapa + horarios]
[CTA band final]
[Pre-footer: formulario] → [Footer]
```
> El orden **cambia respecto del SPECS** (se sube Servicios porque es “especialmente importante”). Todo el contenido del SPECS se conserva.

### 11.2 Nosotros `/nosotros`
```
[Header] → [PageHero: eyebrow “Nosotros” · H1 “Centro Médico Brius” · lead “Una empresa dedicada al cuidado de la salud”]
[Historia: texto editorial en 2 columnas + imagen + línea de tiempo corta (2002 → hoy)]
[Pilares: Trayectoria · Trato cordial · Tecnología · Supervisión médica]
[Banda Diagnóstico por Imagen / Espinograma]
[Estética supervisada por profesionales médicos]
[CTA band] → [Footer]
```

### 11.3 Medicina `/medicina`
```
[Header] → [PageHero tema celeste: “Brius Medicina”]
[Toolbar sticky: buscador + contador]
[SpecialtyGrid (25 cards, expansibles in-flow)]
[Banda Diagnóstico por Imagen]
[CTA band: “¿No encontrás tu especialidad? Consultanos”] → [Footer]
```

### 11.4 Estética `/estetica`
```
[Header] → [PageHero tema rosa: “Brius Estética”]
[Mini-nav sticky de anclas]
[01 Cosmiatría] [02 Corporales + tag primera consulta sin cargo] [03 Podología] [04 Masajes]
[05 Depilación láser definitiva — banner + tag “¡Las leonas se atienden con nosotros!”]
[Cierre: “Consultas y asesoramiento sin cargo • Atendido por profesionales •”] → [Footer]
```

### 11.5 Contacto `/contacto`
```
[Header] → [PageHero: “Contacto”]
[Grilla: 4 InfoCards rápidas — Teléfono · WhatsApp · Email · Redes]
[LocationBlock: mapa grande + dirección + horarios + cómo llegar]
[Formulario]
[FAQ corto] → [Footer]
```

### 11.6 Coberturas `/coberturas` (nueva)
```
[Header] → [PageHero: “Coberturas y planes”]
[Obras sociales: listado de chips + nota PAMI + aviso “consultá vigencia de convenios”]
[Asociate: sin cuota de ingreso, sin límites de edad + CTA]
[FAQ] → [Footer]
```

### 11.7 Páginas de sistema
`/politica-de-privacidad` (texto legal, tipografía de lectura) · `not-found.tsx` (404 de marca) · `error.tsx`.

---

## 12. Accesibilidad (checklist obligatorio)

- [ ] WCAG 2.1 **AA** en todo el sitio; objetivo AAA en cuerpo y títulos.
- [ ] `<html lang="es-AR">`; un solo `<h1>` por página; jerarquía de títulos sin saltos.
- [ ] Landmarks: `<header>`, `<nav aria-label>`, `<main id="contenido">`, `<footer>`; **skip link** “Saltar al contenido” visible al foco.
- [ ] Todo interactivo operable con **teclado** y con foco visible (mega-menú, drawer, acordeones, buscador).
- [ ] Objetivos táctiles ≥ **44×44 px** (usamos 48).
- [ ] Imágenes con `alt` significativo; decorativas con `alt=""`.
- [ ] Formularios con `<label>` asociado, errores anunciados (`aria-live="polite"`), `required` + `aria-invalid`.
- [ ] No transmitir información **solo por color** (los estados llevan ícono + texto).
- [ ] Respeta `prefers-reduced-motion`.
- [ ] Zoom hasta 200% sin pérdida de contenido ni scroll horizontal.
- [ ] Iframe de mapa con `title`; enlaces externos con aviso (“se abre en una pestaña nueva” en `sr-only`).
- [ ] Probar con **lector de pantalla** (VoiceOver/NVDA) los flujos: pedir turno, buscar especialidad, enviar formulario.

---

## 13. Performance y SEO técnico (impacto en diseño)

- Objetivos (mobile, 4G): **LCP < 2.5 s**, **CLS < 0.05**, **INP < 200 ms**, Lighthouse ≥ 95 en Performance, 100 en Accesibilidad / SEO / Buenas prácticas.
- Fuentes con `next/font` (`display: swap`), solo los pesos usados; **sin CLS** por fuentes.
- Reservar siempre el espacio de imágenes (`aspect-ratio`) para evitar saltos.
- JS de cliente mínimo: solo Header, mega-menú, buscador, formulario, `<Reveal />`, acordeones. El resto, Server Components.
- Sin librerías de animación ni de carruseles. Sin dependencias de UI pesadas.
- Mapa e imágenes bajo el fold: **lazy**.

---

## 14. Voz y tono (microcopy)

| Principio | Ejemplo bien | Ejemplo mal |
| :-- | :-- | :-- |
| Cercano pero profesional | “Pedí tu turno” | “Solicite una cita médica” |
| Claro y directo | “Atendemos IOMA, Medifé, Swiss Medical y más” | “Brindamos cobertura a múltiples financiadores” |
| Sin promesas médicas | “Tratamientos supervisados por profesionales médicos” | “Resultados garantizados”, “elimina la celulitis para siempre” |
| Cálido, sin exagerar | “Cuidamos de vos y de tu familia” | “¡¡La mejor clínica de Argentina!!” |

- **Voseo** en CTAs y microcopy (“Escribinos”, “Pedí tu turno”, “Cómo llegar”); texto institucional en forma impersonal o primera persona plural (“Comenzamos…”).
- **Cuidado normativo:** en estética y salud **no prometer resultados**, no usar superlativos absolutos (“el mejor”, “el único”) ni imágenes de antes/después sin respaldo y consentimiento. `[VALIDAR]` con la dirección médica y con asesoría legal la normativa de publicidad médica aplicable.

---

## 15. Anti-patrones (prohibido)

- ❌ Hex sueltos o escalas de Tailwind (`indigo-*`, `pink-*`, `slate-*`) en componentes. Todo por tokens.
- ❌ `shadow-2xl`, bordes gruesos, degradados saturados, overlays negros sobre fotos.
- ❌ Más de **un** CTA primario por pantalla.
- ❌ Menús o paneles con `position:absolute` que se superponen al contenido (acordeones in-flow).
- ❌ Íconos placeholder (`<Mail />` como Instagram), imágenes remotas, números/direcciones falsos hardcodeados.
- ❌ Dark mode. Solo light.
- ❌ `<div onClick>` en lugar de `<button>`/`<a>`.
- ❌ Texto < 14 px, o contraste < 4.5:1.
- ❌ Carruseles automáticos y popups que tapan el contenido.
- ❌ Texto en imágenes (no accesible, no traducible).

---

## 16. Definición de “terminado” (QA visual)

- [ ] Probado en 360, 390, 768, 1024, 1280 y 1536 px.
- [ ] Sin scroll horizontal en ninguna vista.
- [ ] Mobile: barra de acción inferior no tapa contenido ni el formulario.
- [ ] Todos los colores salen de tokens; cambiar `--color-brand-600` actualiza todo el sitio.
- [ ] `data-theme` cambia correctamente el acento en Medicina y Estética.
- [ ] Lighthouse ≥ 95 / 100 / 100 / 100 en mobile.
- [ ] Verificación de contraste hecha sobre toda combinación nueva.
- [ ] Checklist de accesibilidad (sección 12) completo.
- [ ] Ninguna imagen remota; `CREDITS.md` al día.
- [ ] Ningún `[COMPLETAR]` visible al usuario final en producción (o están ocultos tras config).

---

## 17. Orden sugerido de implementación

1. Tokens (`globals.css`), fuentes y layout base (`html lang`, skip link, `body`).
2. Primitivas: `Button`, `Badge`, `SectionHeading`, `Reveal`, `PlusMark`, `SocialIcon`, `ImagePlaceholder`.
3. `lib/site.ts` + `Header` + barra mobile/FAB + `Footer` + `ContactForm`.
4. Home completo.
5. Medicina (`PageHero`, `SpecialtyGrid`).
6. Estética (`TreatmentSection`, banner láser, cierre).
7. Nosotros, Contacto, Coberturas, Privacidad, 404.
8. SEO (metadata, JSON-LD, sitemap, robots, OG).
9. QA visual, accesibilidad, Lighthouse, reemplazo de imágenes.

---

*Documento de diseño v2.0 — Centro Médico Brius. Reemplaza íntegramente a `DESING.md` v1.0.*