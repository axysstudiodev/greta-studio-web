# Greta Studio Web — Auditoría Profunda de Diseño, UX, Accesibilidad, Animación & CRO (Dictamen Argon)

> **Estándares aplicados:** `impeccable` (Craft Floor), `ui-ux-pro-max` (Prioridades 1–10), `emil-design-eng` & `emil-animations` (10 Reglas No Negociables), `accessibility` (WCAG 2.2 AA) y `seo`.  
> **Metodología:** Inspección línea por línea de los 10 archivos de `src/` evaluando contraste matemático, ergonomía táctil, física de movimiento, psicología de conversión y SEO técnico.

---

## 📊 Matriz de Hallazgos (14 Puntos Detectados)

| ID | Hallazgo | Archivo(s) | Severidad | Fase |
| :- | :--- | :--- | :--- | :-: |
| **F1.1** | **Contraste WCAG 2.2 AA (`< 4.5:1`):** `text-[#6B7280]` sobre `#0D0E11` (3.95:1) y `#15171C` (3.55:1) falla en textos legibles pequeños. | `Hero`, `Pricing`, `BentoFeatures`, `Footer` | 🔴 Crítica | **1** |
| **F1.2** | **Ergonomía Táctil Móvil (`< 44px`):** Botones de modo y subida en Hero tienen ~26px de alto (`py-1`); botones de Navbar tienen 32px (`h-8`). | `Hero.tsx`, `Navbar.tsx` | 🔴 Crítica | **1** |
| **F1.3** | **Sin Navegación en Móvil (`< 768px`):** `<nav className="hidden md:flex">` oculta los 5 enlaces sin ofrecer menú móvil desplegable. | `Navbar.tsx` | 🔴 Crítica | **1** |
| **F1.4** | **Anclas tapadas por Navbar Sticky (`64px`):** Ninguna `<section id="...">` tiene `scroll-mt-16`, por lo que el header sticky tapa el inicio al navegar. | Todas las secciones | 🔴 Alta | **1** |
| **F1.5** | **Anillos de Foco (`focus-visible`) y `prefers-reduced-motion`:** Faltan estados de foco de teclado uniformes y soporte para reducir movimiento. | Global / Componentes | 🔴 Alta | **1** |
| **F2.1** | **Recorte del botón circular del Slider en 0% y 100%:** En `splitPct = 0` o `100`, el círculo `w-8 h-8 -translate-x-1/2` se corta a la mitad por `overflow-hidden`. | `Hero.tsx:319` | 🟡 Media | **2** |
| **F2.2** | **Hint `"Arrastra para comparar"` oculto en Móvil:** Tiene `hidden md:inline-flex`; en celular el usuario no recibe la pista visual de que la foto es interactiva. | `Hero.tsx:338` | 🟡 Media | **2** |
| **F2.3** | **Pérdida de contexto en `AppShowcase` Móvil:** Los paneles de Modos y Anclaje de 9 Puntos tienen `hidden md:flex`; en móvil no se ve el cambio de anclaje ni auto-contraste. | `AppShowcase.tsx` | 🟡 Media | **2** |
| **F2.4** | **Acordeón `FAQ` sin transición (0ms DOM mount):** `{isOpen && ...}` monta/desmonta de golpe causando salto de layout. Debe usar CSS Grid `0fr -> 1fr` en `200ms`. | `FAQ.tsx:48` | 🟡 Media | **2** |
| **F2.5** | **Monotonía de Superficies (`border-t` plano):** Todas las secciones usan `#0D0E11` + `border-t`. Alternar luminancia (`#101217`) y halos radiales crea profundidad real. | `page.tsx` / Secciones | 🟡 Media | **2** |
| **F3.1** | **Auto-detección de SO (Windows vs macOS):** Resaltar automáticamente el instalador que coincide con el sistema operativo del visitante (*"Recomendado para tu equipo"*). | `DownloadSection.tsx` | 🟢 CRO | **3** |
| **F3.2** | **Micro-copy de Confianza en `Pricing`:** Añadir garantía de tranquilidad bajo los planes pagos (*"Entrega inmediata · Pago único seguro · Windows y macOS"*). | `Pricing.tsx`, `i18n` | 🟢 CRO | **3** |
| **F3.3** | **Jerga residual `"Rust"` en Metadata + Título dinámico por idioma:** `layout.tsx:15` aún menciona `"native Rust speed"` y `I18nProvider` no sincroniza `document.title`. | `layout.tsx`, `I18nProvider.tsx` | 🟢 SEO | **3** |
| **F3.4** | **Open Graph, `robots.ts`, `sitemap.ts` y `not-found.tsx`:** Tarjetas visuales para WhatsApp / X / Instagram y página 404 personalizada en Studio Dark. | `src/app/` | 🟢 SEO | **3** |

---

## 🚀 Plan de Trabajo por Fases (Checklist Accionable)

### 🔴 FASE 1: Accesibilidad WCAG 2.2, Ergonomía Móvil y Navegación
- [ ] **1.1 Contraste AA (`≥ 4.5:1`):** Elevar `text-[#6B7280]` a `text-[#8E96A4]` / `text-[#9CA3AF]` en todos los textos informativos de `Hero.tsx`, `Pricing.tsx`, `BentoFeatures.tsx` y `Footer.tsx`.
- [ ] **1.2 Targets Táctiles Mobile-First:** Aumentar altura táctil en móvil (`py-1.5 sm:py-1`, `h-9 sm:h-8`) en los controles del playground de `Hero.tsx` y botones de `Navbar.tsx`.
- [ ] **1.3 Menú Móvil en `Navbar.tsx`:** Añadir botón de menú en `< md` con panel desplegable animado (`scale(0.98) -> scale(1)`, `180ms cubic-bezier(0.16, 1, 0.3, 1)`), soporte de tecla `Escape` y cierre automático al elegir sección.
- [ ] **1.4 `scroll-mt-16` en Secciones:** Agregar `scroll-mt-16` en `#features`, `#use-cases`, `#pricing`, `#faq` y `#download` para que el Navbar sticky nunca tape los encabezados.
- [ ] **1.5 Focus Rings & Reduced Motion:** Estandarizar `focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500/60` en todos los elementos interactivos y añadir regla `@media (prefers-reduced-motion: reduce)` en `globals.css`.

---

### 🟡 FASE 2: Craft Visual, Física de Movimiento (`Emil Kowalski`) y Fidelidad Móvil
- [ ] **2.1 Clamping del Handle del Slider (`Hero.tsx`):** Usar `left: clamp(18px, ${splitPct}%, calc(100% - 18px))` en el botón circular del divisor para que jamás se corte a la mitad al llegar a `0%` o `100%`.
- [ ] **2.2 Pista Táctil en Móvil (`Hero.tsx`):** Hacer visible un pill compacto `"Arrastra para comparar"` en pantallas móviles para que el usuario descubra de inmediato que el Hero es interactivo.
- [ ] **2.3 Barra Resumen Móvil en `AppShowcase.tsx`:** Agregar una tira compacta `flex md:hidden` en `AppShowcase` que muestre el **Logo Claro/Oscuro activo** y la **mini-rejilla de 9 puntos cambiando de posición** para usuarios que visitan desde el teléfono.
- [ ] **2.4 Acordeón Suave en `FAQ.tsx`:** Reemplazar el render condicional brusco por transición CSS Grid (`grid-rows-[0fr]` a `grid-rows-[1fr]` + `opacity`) en `200ms cubic-bezier(0.16, 1, 0.3, 1)`.
- [ ] **2.5 Jerarquía de Profundidad entre Secciones:** Alternar fondos sutiles (`bg-[#101217]/80`) y halos radiales tenues en `AppShowcase` y `Pricing` para eliminar la monotonía de cajas planas con `border-t`.

---

### 🟢 FASE 3: Conversión (CRO), SEO Técnico y Redes Sociales
- [ ] **3.1 Detección Inteligente de SO en `DownloadSection.tsx`:** Detectar en cliente si el visitante usa Windows o macOS y destacar su tarjeta correspondiente con borde naranja suave y badge *"Recomendado para tu equipo"*.
- [ ] **3.2 Sello de Confianza en `Pricing.tsx`:** Agregar línea de seguridad y entrega inmediata bajo las tarjetas de precios (*"Entrega inmediata por correo · Pago único seguro · Windows y macOS"*).
- [ ] **3.3 Limpieza de Metadata y `document.title` Bilingüe:** Quitar `"with native Rust speed"` de `layout.tsx` y sincronizar `document.title` en `I18nProvider.tsx` al cambiar entre ES y EN.
- [ ] **3.4 Open Graph, `robots.ts`, `sitemap.ts` y `not-found.tsx`:** Configurar tarjetas sociales con imagen de preview y crear las rutas estándar de SEO y página 404 con estética Studio Dark.
