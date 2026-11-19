# Changelog

All notable changes to `greta-studio-web` will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Added
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
