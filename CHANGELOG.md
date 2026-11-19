# Changelog

All notable changes to `greta-studio-web` will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Added
- **Design Audit Phase 3 — CRO, OS Detection & Technical SEO (`GRETA-21`):**
  - Added client-side OS detection in `DownloadSection.tsx` to highlight the matching Windows or macOS installer with a localized *"Recommended for your device"* badge.
  - Added localized trust & instant-delivery note in `Pricing.tsx`.
  - Removed technical jargon from `layout.tsx` metadata, added dedicated 1200x630 Open Graph & Twitter banner (`og-image.jpg`), injected `SoftwareApplication` JSON-LD structured data, synchronized `document.title` with `I18nProvider.tsx`, and added `robots.ts`, `sitemap.ts`, and a Studio Dark `not-found.tsx` page.
  - Added global `cursor: pointer` rule for interactive buttons in `globals.css`, localized tagline refinement for professional photographers, and added a micro-animated back-to-top button in `Footer.tsx`.
- **Design Audit Phase 2 — Visual Craft, Motion & Mobile Parity (`GRETA-21`):**
  - Clamped the `Hero.tsx` comparison slider handle (`clamp(16px, ..., calc(100% - 16px))`) to prevent edge clipping at `0%`/`100%` and surfaced a compact mobile drag hint pill.
  - Added a mobile summary bar in `AppShowcase.tsx` (`md:hidden`) displaying active Light/Dark logo state and live 9-point anchor transitions, plus alternating `bg-[#101217]/80` surface depth across `AppShowcase`, `UseCases`, and `FAQ`.
  - Upgraded `FAQ.tsx` accordion to smooth CSS Grid `0fr -> 1fr` transitions (`200ms cubic-bezier(0.16, 1, 0.3, 1)`).
- **Design Audit Phase 1 — WCAG 2.2 Accessibility & Mobile Navigation (`GRETA-21`):**
  - Added accessible responsive mobile navigation drawer in `Navbar.tsx` (`aria-expanded`, `Escape` dismissal, `44px` touch targets, localized labels in `en.json` / `es.json`).
  - Upgraded secondary text contrast to WCAG 2.2 AA (`≥ 4.5:1`) across `Hero.tsx`, `BentoFeatures.tsx`, `Pricing.tsx`, and `Footer.tsx`, standardized `focus-visible` rings, added `scroll-mt-16` to all anchored sections, increased mobile touch padding on `Hero.tsx` controls, and added `prefers-reduced-motion` support in `globals.css`.
- **High-Conversion Landing Redesign (`GRETA-19`):**
  - Upgraded `Hero.tsx` with a real editorial sports action photograph (`hero-sport-sample.jpg`), draggable Before/After comparison slider (`ORIGINAL` vs `GRETA PRO`), and live mode switcher (`Signature` with `gretastudio_light.svg`, `Pattern` with `DSC_0452` frosted vector capsule, and `Sponsor Ribbon`).
  - Replaced standard feature cards with an asymmetric 12-column `BentoFeatures.tsx` grid featuring a live auto-contrast split demonstration (`bento-portrait-sample.jpg` pairing `gretastudio_dark.svg` and `gretastudio_light.svg`), Rust + Rayon batch speed benchmark bar, proofing mesh preview, sponsor ribbon preview, and shortest-edge geometry visual.
  - Added `UseCases.tsx` targeting Sports & Marathons, Weddings & Events, and Studios & Agencies.
  - Added `FAQ.tsx` interactive accordion addressing one-time pricing, 30-day offline licensing, device seat transfers, and Apple Silicon / Windows 11 compatibility.
  - Added `AppShowcase.tsx` animated 3-step studio workspace preview faithfully recreating Greta Studio's 3-pane layout (`LeftSidebar`, live canvas + `BatchFilmstrip`, `RightInspector` with 9-point anchor grid, and animated 200-photo batch export progress).
  - Created `SponsorMarks.tsx` with 6 distinct Costa Rican butterfly genus athletic sponsor marks (`MORPHO`, `URANIA`, `CALIGO`, `DANAUS`, `ITHOMIA`, `ANARTIA`), added a delivery workflow strip below the Hero, and alternated 2-column visual rhythm across `UseCases.tsx` and `FAQ.tsx`.
  - Added `/api/download` route handler resolving the latest Windows (`.exe`) and macOS (`.dmg`) installer assets from `greta-studio-releases` for direct one-click browser downloads.
  - Added local browser-only custom logo & multi-sponsor (up to 6) live preview uploaders in `Hero.tsx` using `URL.createObjectURL` with automatic cleanup and reset.
  - Replaced technical jargon across `en.json` and `es.json` with photographer-oriented copy, enabled full `0%–100%` Hero comparison slider travel, and updated Watermark & 6-logo Sponsor Ribbon previews to use official Greta Studio SVG logo assets.
- **Initial Commercial Web Scaffold (`GRETA-18`):**
  - Initialized Next.js 15 (App Router), React 19, TypeScript, and Tailwind CSS v4 in Studio Dark (`#0D0E11`, `#15171C`) + Aperture Orange (`#F97316`) theme.
  - Implemented `I18nProvider.tsx` with automatic browser locale detection (`navigator.language`), `localStorage` persistence, and ES/EN toggle.
  - Added `Pricing.tsx` (`Free Trial $0`, `Greta Studio Pro $29`, `Studio Pack $69`), `DownloadSection.tsx` linked to `greta-studio-releases`, and `Footer.tsx`.
