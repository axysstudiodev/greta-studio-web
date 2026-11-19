'use client';

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import {
  ArrowRight,
  Cpu,
  Download,
  MoveHorizontal,
  PanelBottom,
  PenTool,
  RotateCcw,
  Shield,
  ShieldCheck,
  Upload,
} from 'lucide-react';
import { useI18n } from '@/i18n/I18nProvider';
import { DEFAULT_SPONSOR_LOGOS } from '@/components/SponsorMarks';

type PreviewMode = 'signature' | 'pattern' | 'ribbon';

export const Hero: React.FC = () => {
  const { t } = useI18n();
  const [previewMode, setPreviewMode] = useState<PreviewMode>('signature');
  const [splitPct, setSplitPct] = useState<number>(64);
  const [customLogoUrl, setCustomLogoUrl] = useState<string | null>(null);
  const [customSponsorUrls, setCustomSponsorUrls] = useState<string[]>([]);

  const logoInputRef = useRef<HTMLInputElement | null>(null);
  const sponsorsInputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    return () => {
      if (customLogoUrl) URL.revokeObjectURL(customLogoUrl);
    };
  }, [customLogoUrl]);

  useEffect(() => {
    return () => {
      customSponsorUrls.forEach((url) => URL.revokeObjectURL(url));
    };
  }, [customSponsorUrls]);

  const handleLogoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    if (customLogoUrl) URL.revokeObjectURL(customLogoUrl);
    setCustomLogoUrl(URL.createObjectURL(file));
    e.target.value = '';
  };

  const handleSponsorsUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files ?? []).slice(0, 6);
    if (files.length === 0) return;
    customSponsorUrls.forEach((url) => URL.revokeObjectURL(url));
    setCustomSponsorUrls(files.map((f) => URL.createObjectURL(f)));
    e.target.value = '';
  };

  const handleResetCustom = () => {
    if (previewMode === 'ribbon') {
      customSponsorUrls.forEach((url) => URL.revokeObjectURL(url));
      setCustomSponsorUrls([]);
    } else if (customLogoUrl) {
      URL.revokeObjectURL(customLogoUrl);
      setCustomLogoUrl(null);
    }
  };

  const activeLogoSrc = customLogoUrl ?? '/images/gretastudio_light.svg';

  const hasCustomActive =
    previewMode === 'ribbon'
      ? customSponsorUrls.length > 0
      : customLogoUrl !== null;

  return (
    <section className="relative overflow-hidden pt-12 pb-16 sm:pt-20 sm:pb-24">
      {/* Subtle Studio Aperture Ambient Glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 left-1/2 -z-10 h-[500px] w-[860px] -translate-x-1/2 rounded-full bg-orange-500/12 blur-[130px]"
      />

      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-3xl text-center">
          {/* Headline */}
          <h1 className="text-balance text-3xl font-extrabold tracking-tight text-[#F3F4F6] sm:text-5xl lg:text-[56px] lg:leading-[1.06]">
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
              className="inline-flex h-11 w-full items-center justify-center gap-2 rounded-lg bg-gradient-to-b from-orange-500 to-orange-600 px-6 text-sm font-semibold text-white shadow-lg shadow-orange-500/25 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.25)] transition-all duration-150 ease-[cubic-bezier(0.16,1,0.3,1)] hover:from-orange-400 hover:to-orange-500 active:scale-[0.97] sm:w-auto"
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

        {/* Interactive Before / After Studio Playground */}
        <div className="mx-auto mt-12 max-w-4xl rounded-2xl border border-[#2A2E39] bg-[#15171C] p-2 shadow-2xl shadow-black/75 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.06)] sm:mt-16">
          {/* Mock Window Chrome */}
          <div className="flex flex-wrap items-center justify-between gap-2 rounded-t-xl border-b border-[#2A2E39] bg-[#0D0E11] px-4 py-2.5">
            <div className="hidden items-center gap-1.5 sm:flex">
              <span className="h-2.5 w-2.5 rounded-full bg-[#2A2E39]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#2A2E39]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#2A2E39]" />
            </div>

            <div className="flex flex-1 flex-wrap items-center justify-between gap-2 sm:flex-initial">
              {/* Interactive Mode Switcher */}
              <div className="flex items-center gap-1 rounded-lg border border-[#2A2E39] bg-[#15171C] p-0.5">
                <button
                  type="button"
                  onClick={() => setPreviewMode('signature')}
                  className={`inline-flex items-center gap-1.5 rounded-md px-2.5 py-1 text-[11px] font-medium transition-all duration-150 active:scale-[0.97] ${
                    previewMode === 'signature'
                      ? 'border border-orange-500/30 bg-orange-500/15 text-orange-300'
                      : 'border border-transparent text-[#9CA3AF] hover:text-[#F3F4F6]'
                  }`}
                >
                  <PenTool className="h-3 w-3" />
                  <span>{t.hero.previewModeSignature}</span>
                </button>
                <button
                  type="button"
                  onClick={() => setPreviewMode('pattern')}
                  className={`inline-flex items-center gap-1.5 rounded-md px-2.5 py-1 text-[11px] font-medium transition-all duration-150 active:scale-[0.97] ${
                    previewMode === 'pattern'
                      ? 'border border-orange-500/30 bg-orange-500/15 text-orange-300'
                      : 'border border-transparent text-[#9CA3AF] hover:text-[#F3F4F6]'
                  }`}
                >
                  <Shield className="h-3 w-3" />
                  <span>{t.hero.previewModePattern}</span>
                </button>
                <button
                  type="button"
                  onClick={() => setPreviewMode('ribbon')}
                  className={`inline-flex items-center gap-1.5 rounded-md px-2.5 py-1 text-[11px] font-medium transition-all duration-150 active:scale-[0.97] ${
                    previewMode === 'ribbon'
                      ? 'border border-orange-500/30 bg-orange-500/15 text-orange-300'
                      : 'border border-transparent text-[#9CA3AF] hover:text-[#F3F4F6]'
                  }`}
                >
                  <PanelBottom className="h-3 w-3" />
                  <span>{t.hero.previewModeRibbon}</span>
                </button>
              </div>

              {/* Try Your Own Brand / Sponsors Upload */}
              <div className="flex items-center gap-1.5">
                <input
                  ref={logoInputRef}
                  type="file"
                  accept="image/png,image/svg+xml,image/webp,image/jpeg"
                  onChange={handleLogoUpload}
                  className="hidden"
                />
                <input
                  ref={sponsorsInputRef}
                  type="file"
                  multiple
                  accept="image/png,image/svg+xml,image/webp,image/jpeg"
                  onChange={handleSponsorsUpload}
                  className="hidden"
                />

                <button
                  type="button"
                  onClick={() =>
                    previewMode === 'ribbon'
                      ? sponsorsInputRef.current?.click()
                      : logoInputRef.current?.click()
                  }
                  className="inline-flex items-center gap-1.5 rounded-md border border-[#2A2E39] bg-[#1E2128] px-2.5 py-1 text-[11px] font-medium text-[#E5E7EB] transition-all duration-150 hover:border-orange-500/40 hover:text-orange-300 active:scale-[0.97]"
                >
                  <Upload className="h-3 w-3 text-orange-400" />
                  <span>
                    {previewMode === 'ribbon'
                      ? t.hero.trySponsorsBtn
                      : t.hero.tryLogoBtn}
                  </span>
                </button>

                {hasCustomActive && (
                  <button
                    type="button"
                    onClick={handleResetCustom}
                    title={t.hero.resetPreviewBtn}
                    aria-label={t.hero.resetPreviewBtn}
                    className="inline-flex items-center gap-1 rounded-md border border-[#2A2E39] bg-[#15171C] px-2 py-1 text-[11px] font-medium text-[#9CA3AF] transition-colors hover:border-[#3B4150] hover:text-[#F3F4F6] active:scale-[0.97]"
                  >
                    <RotateCcw className="h-3 w-3" />
                    <span className="hidden sm:inline">
                      {t.hero.resetPreviewBtn}
                    </span>
                  </button>
                )}
              </div>
            </div>
          </div>

          {/* Interactive Comparison Canvas */}
          <div className="relative aspect-[16/9] w-full select-none overflow-hidden rounded-b-xl bg-[#0D0E11]">
            {/* Base Real Photograph */}
            <Image
              src="/images/hero-sport-sample.jpg"
              alt="Greta Studio sample action photograph"
              fill
              className="object-cover"
              priority
            />

            {/* After Layer: Applied Greta Studio Watermark / Branding (Left side of slider) */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0"
              style={{ clipPath: `inset(0 ${100 - splitPct}% 0 0)` }}
            >
              {previewMode === 'signature' && (
                <div className="absolute bottom-5 left-5 flex items-center rounded-lg bg-black/20 px-2.5 py-1 backdrop-blur-[2px] sm:bottom-7 sm:left-7">
                  <img
                    src={activeLogoSrc}
                    alt="Greta Studio Signature"
                    className="h-7 w-auto max-w-[160px] object-contain drop-shadow-[0_2px_8px_rgba(0,0,0,0.65)] sm:h-9 sm:max-w-[200px]"
                  />
                </div>
              )}

              {previewMode === 'pattern' && (
                <>
                  <div className="absolute inset-0 grid -rotate-25 scale-125 grid-cols-3 place-items-center gap-6 opacity-35 sm:gap-10">
                    {Array.from({ length: 9 }).map((_, idx) => (
                      <div
                        key={idx}
                        className={idx % 2 === 1 ? 'translate-x-6' : ''}
                      >
                        <img
                          src={activeLogoSrc}
                          alt="Greta Studio Watermark"
                          className="h-5 w-auto max-w-[110px] object-contain drop-shadow-[0_1px_4px_rgba(0,0,0,0.85)] sm:h-7 sm:max-w-[130px]"
                        />
                      </div>
                    ))}
                  </div>
                  {/* Frosted Filename Stamp Pill */}
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 rounded-full border border-white/15 bg-[#0D0E11]/85 px-3.5 py-1 shadow-lg backdrop-blur-xs">
                    <span className="tabular-nums text-[11px] font-semibold tracking-wider text-[#F3F4F6]">
                      DSC_0452
                    </span>
                  </div>
                </>
              )}

              {previewMode === 'ribbon' && (
                <div className="absolute inset-x-0 bottom-0 flex h-11 items-center justify-evenly gap-3 border-t border-white/15 bg-[#0D0E11]/85 px-3 text-[#F3F4F6] backdrop-blur-sm sm:h-14 sm:px-6">
                  {customSponsorUrls.length > 0
                    ? customSponsorUrls.map((src, idx) => (
                        <img
                          key={`${src}-${idx}`}
                          src={src}
                          alt={`Sponsor logo ${idx + 1}`}
                          className="h-4 w-auto max-w-[90px] object-contain opacity-90 sm:h-6 sm:max-w-[120px]"
                        />
                      ))
                    : DEFAULT_SPONSOR_LOGOS.map((brand) => (
                        <div key={brand.id} className="opacity-90">
                          {brand.svg}
                        </div>
                      ))}
                </div>
              )}
            </div>

            {/* Top Badges: Greta Pro (Left) vs Original (Right) */}
            <div className="pointer-events-none absolute top-3.5 left-3.5 z-10 flex items-center gap-2">
              <span className="rounded-md border border-orange-500/40 bg-orange-500/20 px-2 py-0.5 text-[10px] font-bold tracking-wider text-orange-200 backdrop-blur-xs">
                {t.hero.afterLabel}
              </span>
              <span className="hidden items-center gap-1 rounded-md border border-emerald-500/30 bg-[#0D0E11]/85 px-2 py-0.5 text-[10px] font-semibold text-emerald-300 backdrop-blur-xs sm:inline-flex">
                <Cpu className="h-3 w-3" />
                <span className="tabular-nums">{t.hero.previewStatSpeed}</span>
              </span>
            </div>

            <div className="pointer-events-none absolute top-3.5 right-3.5 z-10 flex items-center gap-2">
              <span className="rounded-md border border-white/15 bg-[#0D0E11]/80 px-2 py-0.5 text-[10px] font-bold tracking-wider text-[#D1D5DB] backdrop-blur-xs">
                {t.hero.beforeLabel}
              </span>
            </div>

            {/* Vertical Divider Handle */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-y-0 z-20 w-0.5 bg-orange-400/90 shadow-[0_0_12px_rgba(249,115,22,0.8)]"
              style={{ left: `${splitPct}%` }}
            >
              <div className="absolute top-1/2 left-1/2 flex h-8 w-8 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-orange-300/70 bg-[#0D0E11]/95 text-orange-400 shadow-lg">
                <MoveHorizontal className="h-4 w-4" />
              </div>
            </div>

            {/* Accessible Invisible Range Control (0 to 100%) */}
            <input
              type="range"
              min={0}
              max={100}
              value={splitPct}
              aria-label={t.hero.dragHint}
              onChange={(e) => setSplitPct(Number(e.target.value))}
              className="absolute inset-0 z-30 h-full w-full cursor-ew-resize opacity-0"
            />

            {/* Top-Center Offline & Drag Hint (keeps bottom clear for Signature, Filename Pill & Ribbon) */}
            <div className="pointer-events-none absolute top-3.5 left-1/2 z-10 hidden -translate-x-1/2 items-center gap-1.5 rounded-md border border-white/10 bg-[#0D0E11]/80 px-2.5 py-1 text-[10px] font-medium whitespace-nowrap text-[#D1D5DB] backdrop-blur-xs md:inline-flex">
              <ShieldCheck className="h-3 w-3 text-orange-400" />
              <span>{t.hero.previewStatOffline}</span>
              <span className="text-[#4B5563]">·</span>
              <span className="text-[#9CA3AF]">{t.hero.dragHint}</span>
            </div>
          </div>
        </div>

        {/* Delivery Workflow Strip */}
        <div className="mx-auto mt-10 flex max-w-4xl flex-col items-center justify-between gap-3 border-t border-[#2A2E39]/60 pt-6 sm:flex-row">
          <span className="text-[10px] font-bold tracking-[0.2em] text-[#6B7280]">
            {t.hero.workflowLabel}
          </span>
          <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-xs font-semibold tracking-wide text-[#9CA3AF]">
            <span>{t.hero.workflowDragFolders}</span>
            <span className="text-[#2A2E39]">·</span>
            <span className="tabular-nums text-[#D1D5DB]">{t.hero.workflowFormats}</span>
            <span className="text-[#2A2E39]">·</span>
            <span>{t.hero.workflowQuality}</span>
          </div>
        </div>
      </div>
    </section>
  );
};
