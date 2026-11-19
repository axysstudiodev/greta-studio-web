'use client';

import React, { useState } from 'react';
import {
  ArrowRight,
  Cpu,
  Download,
  ShieldCheck,
  Stamp,
  Grid,
  Award,
} from 'lucide-react';
import { useI18n } from '@/i18n/I18nProvider';

type PreviewMode = 'signature' | 'pattern' | 'ribbon';

export const Hero: React.FC = () => {
  const { t } = useI18n();
  const [previewMode, setPreviewMode] = useState<PreviewMode>('signature');

  return (
    <section className="relative overflow-hidden pt-12 pb-16 sm:pt-20 sm:pb-24">
      {/* Subtle Studio Ambient Glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-0 left-1/2 -z-10 h-[420px] w-[720px] -translate-x-1/2 rounded-full bg-orange-500/10 blur-[120px]"
      />

      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-3xl text-center">
          {/* Release Pill */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#2A2E39] bg-[#15171C] px-3 py-1 text-[11px] font-medium text-[#D1D5DB] shadow-[inset_0_1px_0_0_rgba(255,255,255,0.05)]">
            <span className="h-1.5 w-1.5 rounded-full bg-orange-400" />
            <span className="tabular-nums">{t.hero.badge}</span>
          </div>

          {/* Headline */}
          <h1 className="text-balance text-3xl font-extrabold tracking-tight text-[#F3F4F6] sm:text-5xl lg:text-[54px] lg:leading-[1.08]">
            {t.hero.titleStart}
            <span className="bg-gradient-to-r from-orange-400 via-orange-500 to-amber-400 bg-clip-text text-transparent">
              {t.hero.titleAccent}
            </span>
          </h1>

          {/* Subtitle */}
          <p className="mx-auto mt-5 max-w-2xl text-pretty text-sm leading-relaxed text-[#9CA3AF] sm:text-base">
            {t.hero.subtitle}
          </p>

          {/* Primary CTAs */}
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href="#download"
              className="inline-flex h-11 w-full items-center justify-center gap-2 rounded-lg bg-gradient-to-b from-orange-500 to-orange-600 px-6 text-sm font-semibold text-white shadow-lg shadow-orange-500/20 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.25)] transition-all duration-150 ease-[cubic-bezier(0.16,1,0.3,1)] hover:from-orange-400 hover:to-orange-500 active:scale-[0.97] sm:w-auto"
            >
              <Download className="h-4 w-4" />
              <span>{t.hero.ctaPrimary}</span>
            </a>

            <a
              href="#pricing"
              className="inline-flex h-11 w-full items-center justify-center gap-2 rounded-lg border border-[#2A2E39] bg-[#15171C] px-6 text-sm font-semibold text-[#F3F4F6] shadow-[inset_0_1px_0_0_rgba(255,255,255,0.06)] transition-all duration-150 ease-[cubic-bezier(0.16,1,0.3,1)] hover:border-[#3B4150] hover:bg-[#1E2128] active:scale-[0.97] sm:w-auto"
            >
              <span>{t.hero.ctaSecondary}</span>
              <ArrowRight className="h-4 w-4 text-orange-400" />
            </a>
          </div>

          <p className="mt-4 text-xs text-[#6B7280]">{t.hero.metaNote}</p>
        </div>

        {/* Interactive Studio Mockup Preview */}
        <div className="mx-auto mt-12 max-w-4xl rounded-2xl border border-[#2A2E39] bg-[#15171C] p-2 shadow-2xl shadow-black/70 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.06)] sm:mt-16">
          {/* Mock Window Chrome */}
          <div className="flex flex-wrap items-center justify-between gap-2 rounded-t-xl border-b border-[#2A2E39] bg-[#0D0E11] px-4 py-2.5">
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-1.5">
                <span className="h-2.5 w-2.5 rounded-full bg-[#2A2E39]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#2A2E39]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#2A2E39]" />
              </div>
              <span className="ml-2 text-[11px] font-medium text-[#9CA3AF]">
                {t.hero.previewWindowTitle}
              </span>
            </div>

            {/* Interactive Mode Switcher */}
            <div className="flex items-center gap-1 rounded-lg border border-[#2A2E39] bg-[#15171C] p-0.5">
              <button
                type="button"
                onClick={() => setPreviewMode('signature')}
                className={`inline-flex items-center gap-1.5 rounded-md px-2.5 py-1 text-[11px] font-medium transition-all duration-150 active:scale-[0.97] ${
                  previewMode === 'signature'
                    ? 'bg-orange-500/15 text-orange-300 border border-orange-500/30'
                    : 'text-[#9CA3AF] hover:text-[#F3F4F6] border border-transparent'
                }`}
              >
                <Stamp className="h-3 w-3" />
                <span>{t.hero.previewModeSignature}</span>
              </button>
              <button
                type="button"
                onClick={() => setPreviewMode('pattern')}
                className={`inline-flex items-center gap-1.5 rounded-md px-2.5 py-1 text-[11px] font-medium transition-all duration-150 active:scale-[0.97] ${
                  previewMode === 'pattern'
                    ? 'bg-orange-500/15 text-orange-300 border border-orange-500/30'
                    : 'text-[#9CA3AF] hover:text-[#F3F4F6] border border-transparent'
                }`}
              >
                <Grid className="h-3 w-3" />
                <span>{t.hero.previewModePattern}</span>
              </button>
              <button
                type="button"
                onClick={() => setPreviewMode('ribbon')}
                className={`inline-flex items-center gap-1.5 rounded-md px-2.5 py-1 text-[11px] font-medium transition-all duration-150 active:scale-[0.97] ${
                  previewMode === 'ribbon'
                    ? 'bg-orange-500/15 text-orange-300 border border-orange-500/30'
                    : 'text-[#9CA3AF] hover:text-[#F3F4F6] border border-transparent'
                }`}
              >
                <Award className="h-3 w-3" />
                <span>{t.hero.previewModeRibbon}</span>
              </button>
            </div>
          </div>

          {/* Canvas Viewport */}
          <div className="relative flex aspect-[16/9] w-full items-center justify-center overflow-hidden rounded-b-xl bg-gradient-to-br from-[#1B1F2A] via-[#12151C] to-[#0B0C10]">
            {/* Stylized Photography Subject Placeholder */}
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_30%_35%,rgba(249,115,22,0.16),transparent_48%),radial-gradient(circle_at_75%_65%,rgba(59,130,246,0.12),transparent_45%)]" />
            <div className="pointer-events-none select-none text-center">
              <div className="mx-auto mb-2 flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xs">
                <span className="text-xs font-bold tracking-widest text-orange-400">
                  RAW
                </span>
              </div>
              <p className="font-mono text-xs tracking-wider text-[#6B7280]">
                DSC_0452.JPG · 6000 × 4000
              </p>
            </div>

            {/* Mode Overlays */}
            {previewMode === 'signature' && (
              <div className="absolute right-5 bottom-5 flex items-center gap-2 rounded-lg border border-white/15 bg-black/45 px-3 py-1.5 backdrop-blur-xs transition-all duration-200">
                <span className="h-2 w-2 rounded-full bg-orange-400" />
                <span className="text-xs font-semibold tracking-wide text-white">
                  GRETA STUDIO
                </span>
              </div>
            )}

            {previewMode === 'pattern' && (
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 grid -rotate-25 scale-125 grid-cols-3 place-items-center gap-8 opacity-35"
              >
                {Array.from({ length: 9 }).map((_, idx) => (
                  <span
                    key={idx}
                    className="text-xs font-bold tracking-[0.22em] text-white/80"
                  >
                    GRETA PROOF
                  </span>
                ))}
              </div>
            )}

            {previewMode === 'ribbon' && (
              <div className="absolute inset-x-0 bottom-0 flex h-12 items-center justify-evenly border-t border-white/10 bg-[#0D0E11]/85 px-6 backdrop-blur-sm">
                <span className="text-[11px] font-bold tracking-widest text-[#D1D5DB]">
                  APERTURE CO.
                </span>
                <span className="text-[11px] font-bold tracking-widest text-orange-400">
                  SPORTVIEW
                </span>
                <span className="text-[11px] font-bold tracking-widest text-[#D1D5DB]">
                  COVADO LABS
                </span>
              </div>
            )}

            {/* Bottom-left live telemetry pills */}
            <div className="absolute top-4 left-4 flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-1 rounded-md border border-emerald-500/30 bg-emerald-500/10 px-2 py-0.5 text-[10px] font-semibold text-emerald-300">
                <Cpu className="h-3 w-3" />
                <span className="tabular-nums">{t.hero.previewStatSpeed}</span>
              </span>
              <span className="inline-flex items-center gap-1 rounded-md border border-white/10 bg-[#0D0E11]/80 px-2 py-0.5 text-[10px] font-medium text-[#D1D5DB]">
                <ShieldCheck className="h-3 w-3 text-orange-400" />
                <span>{t.hero.previewStatOffline}</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
