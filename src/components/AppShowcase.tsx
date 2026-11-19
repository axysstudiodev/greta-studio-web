'use client';

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import {
  CheckCircle2,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Compass,
  Download,
  FolderOpen,
  Globe,
  Keyboard,
  Loader2,
  Maximize,
  Maximize2,
  Moon,
  PanelBottom,
  PenTool,
  Ruler,
  Shield,
  Sliders,
  Sun,
  Trash2,
  Upload,
  ZoomIn,
  ZoomOut,
} from 'lucide-react';
import { useI18n } from '@/i18n/I18nProvider';

// 0: Empty drop state | 1: Horizontal + Light logo | 2: Vertical + Dark logo | 3: Exporting | 4: Done
type ShowcasePhase = 0 | 1 | 2 | 3 | 4;

const DESKTOP_WIDTH = 1088;
const DESKTOP_HEIGHT = 660;

export const AppShowcase: React.FC = () => {
  const { locale, t } = useI18n();
  const [phase, setPhase] = useState<ShowcasePhase>(0);
  const [exportPct, setExportPct] = useState(0);
  const [scale, setScale] = useState(1);
  const containerRef = useRef<HTMLDivElement | null>(null);

  // Proportionally scale the 1088x660 desktop replica like a responsive video
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const updateScale = () => {
      const nextWidth = el.clientWidth;
      if (nextWidth > 0) {
        setScale(Math.min(1, nextWidth / DESKTOP_WIDTH));
      }
    };

    updateScale();
    const observer = new ResizeObserver(updateScale);
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const durations: Record<ShowcasePhase, number> = {
      0: 1900,
      1: 2300,
      2: 2500,
      3: 1900,
      4: 1700,
    };

    const timer = window.setTimeout(() => {
      setPhase((prev) => ((prev + 1) % 5) as ShowcasePhase);
    }, durations[phase]);

    return () => window.clearTimeout(timer);
  }, [phase]);

  useEffect(() => {
    if (phase < 3) {
      setExportPct(0);
      return;
    }
    if (phase === 4) {
      setExportPct(100);
      return;
    }

    const start = performance.now();
    const duration = 1700;
    let rafId = 0;

    const tick = (now: number) => {
      const progress = Math.min(1, (now - start) / duration);
      setExportPct(Math.round(progress * 100));
      if (progress < 1) {
        rafId = requestAnimationFrame(tick);
      }
    };

    rafId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafId);
  }, [phase]);

  const activeStepPill = phase === 0 ? 0 : phase === 1 || phase === 2 ? 1 : 2;
  const isVerticalPhoto = phase === 2;
  const hasPhotos = phase >= 1;
  const activePhotoMeta = !hasPhotos
    ? t.showcase.app.noPhoto
    : isVerticalPhoto
      ? 'IMG_0814.JPG · 4000×6000'
      : 'DSC_0452.JPG · 6000×4000';

  return (
    <section className="border-t border-[#2A2E39]/70 bg-[#101217]/80 py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Header + Non-Interactive Step Progress Pills */}
        <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <div className="max-w-xl">
            <p className="text-[11px] font-bold tracking-widest text-orange-400">
              {t.showcase.eyebrow}
            </p>
            <h2 className="mt-2.5 text-balance text-2xl font-bold tracking-tight text-[#F3F4F6] sm:text-4xl">
              {t.showcase.title}
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-[#9CA3AF]">
              {t.showcase.subtitle}
            </p>
          </div>

          <div
            aria-hidden="true"
            className="pointer-events-none flex flex-wrap items-center gap-2 select-none"
          >
            {[
              { idx: 0, label: t.showcase.steps.drop },
              { idx: 1, label: t.showcase.steps.style },
              { idx: 2, label: t.showcase.steps.export },
            ].map((step) => {
              const isActive = activeStepPill === step.idx;
              return (
                <span
                  key={step.idx}
                  className={`rounded-full border px-3 py-1.5 text-[11px] font-semibold transition-all duration-200 ${
                    isActive
                      ? 'border-orange-500/45 bg-orange-500/15 text-orange-300'
                      : 'border-[#2A2E39] bg-[#15171C] text-[#6B7280]'
                  }`}
                >
                  {step.label}
                </span>
              );
            })}
          </div>
        </div>

        {/* Video-like Proportional Desktop Frame Wrapper */}
        <div
          ref={containerRef}
          className="pointer-events-none relative mt-10 w-full select-none overflow-hidden rounded-xl border border-[#2A2E39] bg-[#0D0E11] shadow-2xl shadow-black/85"
          style={{ height: Math.round(DESKTOP_HEIGHT * scale) }}
        >
          <div
            className="flex flex-col overflow-hidden bg-[#0D0E11]"
            style={{
              width: DESKTOP_WIDTH,
              height: DESKTOP_HEIGHT,
              transform: `scale(${scale})`,
              transformOrigin: 'top left',
            }}
          >
            {/* Native OS Titlebar */}
            <div className="flex h-7 shrink-0 items-center justify-between border-b border-[#2A2E39] bg-[#15171C] px-3">
              <div className="flex items-center gap-2">
                <Image
                  src="/images/gretastudio_app_icon.png"
                  alt="Greta Studio"
                  width={14}
                  height={14}
                  className="h-3.5 w-3.5 rounded-xs"
                />
                <span className="text-[10px] font-medium text-[#D1D5DB]">
                  Greta Studio
                </span>
              </div>
              <div className="flex items-center gap-3 text-[10px] text-[#8E96A4]">
                <span>—</span>
                <span>□</span>
                <span>×</span>
              </div>
            </div>

            <div className="grid min-h-0 flex-1 grid-cols-12">
              {/* ZONE 1: LeftSidebar (#15171C) */}
              <div className="col-span-3 flex flex-col justify-between border-r border-[#2A2E39] bg-[#15171C] p-3">
                <div className="space-y-3.5">
                  {/* MODOS */}
                  <div className="space-y-1.5">
                    <span className="block text-[9px] font-semibold tracking-wider text-[#9CA3AF]">
                      {t.showcase.app.modesLabel}
                    </span>

                    <div className="flex items-center justify-between rounded-lg border border-orange-500/75 bg-[#1E2128] px-2 py-1.5 text-[11px] font-medium text-white shadow-sm shadow-orange-500/10">
                      <span className="flex items-center gap-2">
                        <span className="flex h-5 w-5 items-center justify-center rounded bg-orange-500/15 text-orange-400">
                          <PenTool className="h-3 w-3" />
                        </span>
                        <span>{t.showcase.app.modeSignature}</span>
                      </span>
                      <span className="rounded bg-orange-500/15 px-1.5 py-0.5 text-[9px] font-semibold text-orange-300">
                        1
                      </span>
                    </div>

                    <div className="flex items-center justify-between rounded-lg border border-[#2A2E39] bg-[#1E2128]/40 px-2 py-1.5 text-[11px] text-[#9CA3AF]">
                      <span className="flex items-center gap-2">
                        <span className="flex h-5 w-5 items-center justify-center rounded bg-[#0D0E11] text-[#9CA3AF]">
                          <Shield className="h-3 w-3" />
                        </span>
                        <span>{t.showcase.app.modeWatermark}</span>
                      </span>
                      <span className="rounded bg-[#0D0E11] px-1.5 py-0.5 text-[9px] text-[#9CA3AF]">
                        2
                      </span>
                    </div>

                    <div className="flex items-center justify-between rounded-lg border border-[#2A2E39] bg-[#1E2128]/40 px-2 py-1.5 text-[11px] text-[#9CA3AF]">
                      <span className="flex items-center gap-2">
                        <span className="flex h-5 w-5 items-center justify-center rounded bg-[#0D0E11] text-[#9CA3AF]">
                          <PanelBottom className="h-3 w-3" />
                        </span>
                        <span>{t.showcase.app.modeRibbon}</span>
                      </span>
                      <span className="rounded bg-[#0D0E11] px-1.5 py-0.5 text-[9px] text-[#9CA3AF]">
                        3
                      </span>
                    </div>
                  </div>

                  {/* PRESETS (1) */}
                  <div className="space-y-1.5 border-t border-[#2A2E39] pt-3">
                    <div className="flex items-center justify-between">
                      <span className="text-[9px] font-semibold tracking-wider text-[#9CA3AF]">
                        {t.showcase.app.presetsLabel}
                      </span>
                      <div className="flex items-center gap-1">
                        <span className="rounded border border-[#2A2E39] bg-[#1E2128] px-1.5 py-0.5 text-[9px] font-medium text-[#D1D5DB]">
                          {t.showcase.app.savePresetBtn}
                        </span>
                        <span className="rounded border border-[#2A2E39] bg-[#1E2128] p-0.5 text-[#9CA3AF]">
                          <Upload className="h-2.5 w-2.5" />
                        </span>
                        <span className="rounded border border-[#2A2E39] bg-[#1E2128] p-0.5 text-[#9CA3AF]">
                          <Download className="h-2.5 w-2.5" />
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between rounded-lg border border-orange-500/60 bg-[#1E2128] px-2.5 py-1.5">
                      <div className="flex items-center gap-2">
                        <PenTool className="h-3 w-3 text-orange-400" />
                        <div>
                          <div className="text-[10px] font-semibold text-[#F3F4F6]">
                            {t.showcase.app.presetActive}
                          </div>
                          <div className="text-[8px] text-[#9CA3AF]">
                            {t.showcase.app.modeSignature}
                          </div>
                        </div>
                      </div>
                      <span className="rounded border border-[#2A2E39] bg-[#0D0E11] px-1.5 py-0.5 text-[8px] text-[#9CA3AF]">
                        Ctrl+1
                      </span>
                    </div>
                  </div>
                </div>

                {/* EXPORTACIÓN */}
                <div className="space-y-2 border-t border-[#2A2E39] pt-3">
                  <div className="flex items-center justify-between text-[9px]">
                    <span className="font-semibold tracking-wider text-[#9CA3AF]">
                      {t.showcase.app.exportLabel}
                    </span>
                    <span className="text-[#9CA3AF]">Res. Original · JPG 100%</span>
                  </div>

                  <div className="grid grid-cols-2 gap-1 rounded-lg border border-[#2A2E39] bg-[#0D0E11] p-0.5 text-[10px] font-medium">
                    <span className="flex items-center justify-center gap-1 py-1 text-[#9CA3AF]">
                      <Globe className="h-2.5 w-2.5" />
                      <span>{t.showcase.app.qualityWeb}</span>
                    </span>
                    <span className="flex items-center justify-center gap-1 rounded-md border border-[#3B4150] bg-[#1E2128] py-1 text-[#F3F4F6]">
                      <Maximize className="h-2.5 w-2.5 text-orange-400" />
                      <span>{t.showcase.app.qualityOriginal}</span>
                    </span>
                  </div>

                  <div className="flex items-center justify-between rounded-md border border-[#2A2E39] bg-[#0D0E11] px-2.5 py-1.5 text-[10px] text-[#D1D5DB]">
                    <span className="flex items-center gap-1.5 truncate">
                      <FolderOpen className="h-3 w-3 text-orange-400" />
                      <span className="truncate">{t.showcase.app.subfolderValue}</span>
                    </span>
                    <ChevronDown className="h-3 w-3 shrink-0 text-[#9CA3AF]" />
                  </div>

                  <div
                    className={`flex h-8 w-full items-center justify-center gap-1.5 rounded-lg text-[11px] font-semibold transition-all duration-200 ${
                      !hasPhotos
                        ? 'border border-[#2A2E39] bg-[#1E2128] text-[#9CA3AF]'
                        : phase >= 3
                          ? 'bg-orange-500 text-white shadow-lg shadow-orange-500/30 ring-2 ring-orange-400/50'
                          : 'bg-gradient-to-b from-orange-500 to-orange-600 text-white shadow-sm shadow-orange-500/20'
                    }`}
                  >
                    <Download className="h-3.5 w-3.5" />
                    <span>
                      {t.showcase.app.exportBtn.replace(
                        '{count}',
                        hasPhotos ? '2' : '0'
                      )}
                    </span>
                  </div>
                </div>
              </div>

              {/* ZONE 2: Center DualPreviewCanvas + Bottom BatchFilmstrip */}
              <div className="col-span-6 flex min-h-0 flex-col bg-[#0D0E11]">
                <div className="relative flex min-h-0 flex-1 flex-col justify-between p-3">
                  {/* Top Canvas Header */}
                  <div className="flex items-center justify-between text-[10px]">
                    <span className="tabular-nums text-[#9CA3AF]">
                      {activePhotoMeta}
                    </span>
                    <div className="flex items-center gap-1 rounded-md border border-[#2A2E39] bg-[#15171C] px-2 py-0.5 text-[9px] font-medium">
                      <PenTool className="h-2.5 w-2.5 text-orange-400" />
                      <span className="text-[#F3F4F6]">
                        {t.showcase.app.modeSignature}
                      </span>
                      <span className="mx-0.5 text-[#2A2E39]">|</span>
                      <span className="tabular-nums text-[#9CA3AF]">
                        {t.showcase.app.opacityBadge}
                      </span>
                    </div>
                  </div>

                  {/* Live Studio Viewport */}
                  <div className="relative my-2 flex min-h-0 flex-1 items-center justify-center overflow-hidden rounded-lg">
                    {phase === 0 ? (
                      /* Exact Empty / Dropzone State */
                      <div className="flex w-full max-w-sm flex-col items-center justify-center rounded-xl border border-dashed border-[#2A2E39] bg-[#15171C]/40 px-5 py-9 text-center">
                        <div className="mb-2.5 flex h-9 w-9 items-center justify-center rounded-full border border-orange-500/30 bg-orange-500/10 text-orange-400">
                          <FolderOpen className="h-4 w-4" />
                        </div>
                        <p className="text-xs font-semibold text-[#F3F4F6]">
                          {t.showcase.app.dropTitle}
                        </p>
                        <p className="mt-1 text-[10px] text-[#9CA3AF]">
                          {t.showcase.app.dropSubtitle}
                        </p>
                        <span className="mt-3.5 inline-flex items-center gap-1.5 rounded-md bg-gradient-to-b from-orange-500 to-orange-600 px-3.5 py-1.5 text-[11px] font-semibold text-white shadow-sm shadow-orange-500/25">
                          <FolderOpen className="h-3.5 w-3.5" />
                          <span>{t.showcase.app.selectPhotosBtn}</span>
                        </span>
                      </div>
                    ) : (
                      /* Active Horizontal / Vertical Photo Frame */
                      <div
                        className={`relative overflow-hidden rounded border border-[#2A2E39] shadow-xl transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                          isVerticalPhoto
                            ? 'h-full aspect-[2/3]'
                            : 'w-full max-w-[460px] aspect-[3/2]'
                        }`}
                      >
                        <Image
                          src={
                            isVerticalPhoto
                              ? '/images/bento-portrait-sample.jpg'
                              : '/images/hero-sport-sample.jpg'
                          }
                          alt="Greta Studio Live Workspace"
                          fill
                          className="object-cover object-top"
                        />

                        <div className="absolute inset-2.5 rounded border border-dashed border-orange-400/30" />

                        {/* Auto-Adapted Signature */}
                        <div
                          className={`absolute bottom-3 rounded-md px-2 py-1 backdrop-blur-[2px] transition-all duration-300 ${
                            isVerticalPhoto
                              ? 'right-3 bg-white/65'
                              : 'left-3 bg-black/25'
                          }`}
                        >
                          <Image
                            src={
                              isVerticalPhoto
                                ? '/images/gretastudio_dark.svg'
                                : '/images/gretastudio_light.svg'
                            }
                            alt="Greta Signature"
                            width={96}
                            height={26}
                            className={`w-auto object-contain transition-all duration-300 ${
                              isVerticalPhoto ? 'h-4' : 'h-5'
                            }`}
                          />
                        </div>
                      </div>
                    )}

                    {/* Phase 3 & 4: BatchProgressModal Overlay */}
                    {(phase === 3 || phase === 4) && (
                      <div className="absolute inset-0 flex items-center justify-center bg-[#0D0E11]/75 p-4 backdrop-blur-xs">
                        <div className="w-full max-w-xs rounded-xl border border-[#2A2E39] bg-[#15171C] p-4 shadow-2xl">
                          <div className="flex items-center justify-between text-xs font-semibold text-[#F3F4F6]">
                            <span className="flex items-center gap-2">
                              {phase === 3 ? (
                                <Loader2 className="h-3.5 w-3.5 animate-spin text-orange-400" />
                              ) : (
                                <CheckCircle2 className="h-4 w-4 text-emerald-400" />
                              )}
                              <span>
                                {phase === 3
                                  ? t.showcase.app.exportingTitle
                                  : t.showcase.app.exportedDone}
                              </span>
                            </span>
                            <span className="tabular-nums text-[11px] text-orange-400">
                              {exportPct}%
                            </span>
                          </div>

                          <div className="mt-3 h-2 w-full overflow-hidden rounded-full border border-[#2A2E39] bg-[#0D0E11]">
                            <div
                              className={`h-full rounded-full transition-all duration-150 ${
                                phase === 4
                                  ? 'bg-emerald-500'
                                  : 'bg-gradient-to-r from-orange-500 to-amber-400'
                              }`}
                              style={{ width: `${exportPct}%` }}
                            />
                          </div>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Floating Bottom Canvas Toolbar */}
                  <div className="flex justify-center">
                    <div className="inline-flex items-center gap-1.5 rounded-lg border border-[#2A2E39] bg-[#15171C]/95 px-2 py-1 text-[10px] text-[#D1D5DB] shadow-lg">
                      <span className="rounded border border-[#2A2E39] bg-[#1E2128] p-0.5 text-[#9CA3AF]">
                        <ChevronLeft className="h-3 w-3" />
                      </span>
                      <span className="tabular-nums px-1 font-medium text-[#F3F4F6]">
                        {!hasPhotos ? '0 / 0' : isVerticalPhoto ? '2 / 2' : '1 / 2'}
                      </span>
                      <span className="rounded border border-[#2A2E39] bg-[#1E2128] p-0.5 text-[#9CA3AF]">
                        <ChevronRight className="h-3 w-3" />
                      </span>

                      <span className="mx-0.5 h-3.5 w-[1px] bg-[#2A2E39]" />

                      <span className="inline-flex items-center gap-1 rounded border border-orange-500/45 bg-orange-500/15 px-2 py-0.5 font-medium text-orange-300">
                        <Ruler className="h-2.5 w-2.5" />
                        <span>{t.showcase.app.guidesBtn}</span>
                      </span>

                      <span className="mx-0.5 h-3.5 w-[1px] bg-[#2A2E39]" />

                      <span className="inline-flex items-center gap-1">
                        <span className="rounded border border-[#2A2E39] bg-[#1E2128] p-0.5 text-[#9CA3AF]">
                          <ZoomOut className="h-2.5 w-2.5" />
                        </span>
                        <span className="rounded border border-[#2A2E39] bg-[#1E2128] px-1.5 py-0.5 font-medium text-[#F3F4F6]">
                          {t.showcase.app.fitBtn}
                        </span>
                        <span className="rounded border border-[#2A2E39] bg-[#1E2128] p-0.5 text-[#9CA3AF]">
                          <ZoomIn className="h-2.5 w-2.5" />
                        </span>
                      </span>

                      <span className="mx-0.5 h-3.5 w-[1px] bg-[#2A2E39]" />

                      <span className="inline-flex items-center gap-1 rounded border border-[#2A2E39] bg-[#1E2128] px-1.5 py-0.5 text-[#9CA3AF]">
                        <Maximize2 className="h-2.5 w-2.5" />
                        <span>Tab</span>
                      </span>
                    </div>
                  </div>
                </div>

                {/* Bottom BatchFilmstrip */}
                <div className="shrink-0 border-t border-[#2A2E39] bg-[#15171C]">
                  <div className="flex items-center justify-between gap-2 border-b border-[#2A2E39]/80 px-3 py-1.5 text-[9px]">
                    <div className="flex items-center gap-2">
                      <span className="font-semibold tracking-wider text-[#9CA3AF]">
                        {t.showcase.app.batchQueueLabel}
                      </span>
                      <span className="tabular-nums rounded border border-[#2A2E39] bg-[#0D0E11] px-2 py-0.5 text-[#D1D5DB]">
                        {t.showcase.app.allCount} · {hasPhotos ? 2 : 0} &nbsp; H ·{' '}
                        {hasPhotos ? 1 : 0} &nbsp; V · {hasPhotos ? 1 : 0}
                      </span>
                    </div>

                    <div className="flex items-center gap-1.5">
                      <span className="rounded border border-[#2A2E39] bg-[#1E2128] px-2 py-0.5 font-medium text-[#D1D5DB]">
                        {t.showcase.app.addPhotosBtn}
                      </span>
                      <span className="rounded border border-[#2A2E39] bg-[#1E2128] p-1 text-[#9CA3AF]">
                        <Trash2 className="h-2.5 w-2.5" />
                      </span>
                      <span className="inline-flex items-center gap-1 text-[#9CA3AF]">
                        <ChevronDown className="h-2.5 w-2.5" />
                        <span>{t.showcase.app.hideQueueBtn}</span>
                      </span>
                    </div>
                  </div>

                  {/* 2-Photo Filmstrip Row */}
                  <div className="flex h-12 items-center gap-2 px-3">
                    {hasPhotos ? (
                      <>
                        <div
                          className={`flex items-center gap-2 rounded-md border px-1.5 py-1 transition-all duration-200 ${
                            !isVerticalPhoto
                              ? 'border-orange-500 bg-[#1E2128] ring-1 ring-orange-500/35'
                              : 'border-[#2A2E39] bg-[#0D0E11] opacity-70'
                          }`}
                        >
                          <div className="relative h-6 w-9 overflow-hidden rounded-xs">
                            <Image
                              src="/images/hero-sport-sample.jpg"
                              alt="Horizontal photo"
                              fill
                              className="object-cover"
                            />
                          </div>
                          <span className="tabular-nums text-[9px] font-medium text-[#D1D5DB]">
                            DSC_0452 · 3:2
                          </span>
                        </div>

                        <div
                          className={`flex items-center gap-2 rounded-md border px-1.5 py-1 transition-all duration-200 ${
                            isVerticalPhoto
                              ? 'border-orange-500 bg-[#1E2128] ring-1 ring-orange-500/35'
                              : 'border-[#2A2E39] bg-[#0D0E11] opacity-70'
                          }`}
                        >
                          <div className="relative h-6 w-4.5 overflow-hidden rounded-xs">
                            <Image
                              src="/images/bento-portrait-sample.jpg"
                              alt="Vertical photo"
                              fill
                              className="object-cover object-top"
                            />
                          </div>
                          <span className="tabular-nums text-[9px] font-medium text-[#D1D5DB]">
                            IMG_0814 · 2:3
                          </span>
                        </div>
                      </>
                    ) : (
                      <span className="mx-auto text-[10px] text-[#9CA3AF]">
                        {t.showcase.app.dropTitle}
                      </span>
                    )}
                  </div>
                </div>
              </div>

              {/* ZONE 3: RightInspector (#15171C) */}
              <div className="col-span-3 flex flex-col border-l border-[#2A2E39] bg-[#15171C]">
                {/* TopHeaderBar inside RightInspector */}
                <div className="flex items-center justify-between border-b border-[#2A2E39] px-3 py-2">
                  <div className="flex items-center gap-1 text-[#9CA3AF]">
                    <span className="rounded border border-[#2A2E39] bg-[#1E2128] p-1">
                      <Compass className="h-2.5 w-2.5" />
                    </span>
                    <span className="rounded border border-[#2A2E39] bg-[#1E2128] p-1">
                      <Keyboard className="h-2.5 w-2.5" />
                    </span>
                    <span className="inline-flex items-center gap-1 rounded border border-[#2A2E39] bg-[#1E2128] px-1.5 py-0.5 text-[9px] font-medium">
                      <Globe className="h-2.5 w-2.5" />
                      <span className="uppercase">{locale}</span>
                    </span>
                  </div>
                  <span className="inline-flex items-center gap-1 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2 py-0.5 text-[9px] font-medium text-emerald-300">
                    <CheckCircle2 className="h-2.5 w-2.5" />
                    <span>{t.showcase.app.proBadge}</span>
                  </span>
                </div>

                <div className="flex-1 space-y-3 p-3">
                  {/* Logos */}
                  <div>
                    <div className="flex items-center justify-between text-[8px]">
                      <span className="font-semibold tracking-wider text-[#9CA3AF]">
                        {t.showcase.app.logosLabel}
                      </span>
                      <span className="text-[#9CA3AF]">{t.showcase.app.dualContrast}</span>
                    </div>
                    <div className="mt-1.5 grid grid-cols-2 gap-2">
                      <div
                        className={`flex flex-col gap-1 rounded-md border p-1.5 transition-all duration-200 ${
                          hasPhotos && !isVerticalPhoto
                            ? 'border-orange-500/70 bg-[#1E2128]'
                            : 'border-[#2A2E39] bg-[#1E2128]'
                        }`}
                      >
                        <span className="flex items-center gap-1 text-[9px] font-medium text-[#F3F4F6]">
                          <Sun className="h-2.5 w-2.5 text-orange-400" />
                          <span>{t.showcase.app.lightLogo}</span>
                        </span>
                        <div
                          className="flex h-9 items-center justify-center rounded border border-[#2A2E39]"
                          style={{
                            backgroundColor: '#111318',
                            backgroundImage:
                              'linear-gradient(45deg, #191C24 25%, transparent 25%), linear-gradient(-45deg, #191C24 25%, transparent 25%), linear-gradient(45deg, transparent 75%, #191C24 75%), linear-gradient(-45deg, transparent 75%, #191C24 75%)',
                            backgroundSize: '8px 8px',
                            backgroundPosition: '0 0, 0 4px, 4px -4px, -4px 0',
                          }}
                        >
                          <Image
                            src="/images/gretastudio_light.svg"
                            alt="Light"
                            width={72}
                            height={22}
                            className="h-5 w-auto max-w-[85%] object-contain"
                          />
                        </div>
                      </div>

                      <div
                        className={`flex flex-col gap-1 rounded-md border p-1.5 transition-all duration-200 ${
                          isVerticalPhoto
                            ? 'border-orange-500/70 bg-[#1E2128]'
                            : 'border-[#2A2E39] bg-[#1E2128]'
                        }`}
                      >
                        <span className="flex items-center gap-1 text-[9px] font-medium text-[#F3F4F6]">
                          <Moon className="h-2.5 w-2.5 text-orange-400" />
                          <span>{t.showcase.app.darkLogo}</span>
                        </span>
                        <div
                          className="flex h-9 items-center justify-center rounded border border-[#2A2E39]"
                          style={{
                            backgroundColor: '#E5E7EB',
                            backgroundImage:
                              'linear-gradient(45deg, #D1D5DB 25%, transparent 25%), linear-gradient(-45deg, #D1D5DB 25%, transparent 25%), linear-gradient(45deg, transparent 75%, #D1D5DB 75%), linear-gradient(-45deg, transparent 75%, #D1D5DB 75%)',
                            backgroundSize: '8px 8px',
                            backgroundPosition: '0 0, 0 4px, 4px -4px, -4px 0',
                          }}
                        >
                          <Image
                            src="/images/gretastudio_dark.svg"
                            alt="Dark"
                            width={72}
                            height={22}
                            className="h-5 w-auto max-w-[85%] object-contain"
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="h-[1px] bg-[#2A2E39]" />

                  {/* GEOMETRÍA DE FIRMA */}
                  <div className="space-y-2">
                    <span className="flex items-center gap-1 text-[9px] font-semibold tracking-wider text-[#9CA3AF]">
                      <Sliders className="h-2.5 w-2.5 text-orange-400" />
                      <span>{t.showcase.app.geometryLabel}</span>
                    </span>

                    {/* 9-Point Anchor Card */}
                    <div className="flex items-center justify-between gap-2 rounded-lg border border-[#2A2E39] bg-[#1E2128]/50 p-2">
                      <div>
                        <div className="text-[10px] font-semibold text-[#F3F4F6]">
                          {t.showcase.app.anchorTitle}
                        </div>
                        <div className="text-[9px] font-medium text-orange-400">
                          {isVerticalPhoto
                            ? t.showcase.app.anchorBottomRight
                            : t.showcase.app.anchorBottomLeft}
                        </div>
                        <div className="text-[8px] text-[#9CA3AF]">
                          {t.showcase.app.anchorSubtitle}
                        </div>
                      </div>

                      <div className="grid grid-cols-3 gap-1 rounded border border-[#2A2E39] bg-[#0D0E11] p-1">
                        {Array.from({ length: 9 }).map((_, idx) => {
                          const activeAnchorIdx = isVerticalPhoto ? 8 : 6;
                          const isActiveAnchor = idx === activeAnchorIdx;
                          return (
                            <div
                              key={idx}
                              className={`flex h-3.5 w-3.5 items-center justify-center rounded-xs border transition-colors duration-200 ${
                                isActiveAnchor
                                  ? 'border-orange-500 bg-orange-500/20'
                                  : 'border-[#2A2E39] bg-[#15171C]'
                              }`}
                            >
                              <span
                                className={`h-1 w-1 rounded-full ${
                                  isActiveAnchor ? 'bg-orange-400' : 'bg-[#4B5563]'
                                }`}
                              />
                            </div>
                          );
                        })}
                      </div>
                    </div>

                    {/* Size & Opacity Card */}
                    <div className="space-y-2 rounded-lg border border-[#2A2E39] bg-[#1E2128]/50 p-2 text-[9px]">
                      <div className="space-y-1">
                        <div className="flex justify-between text-[#D1D5DB]">
                          <span>{t.showcase.app.scaleLabel}</span>
                          <span className="tabular-nums rounded border border-[#2A2E39] bg-[#0D0E11] px-1.5 text-[#F3F4F6]">
                            14 %
                          </span>
                        </div>
                        <div className="relative h-1 rounded-full bg-[#0D0E11]">
                          <div className="h-full w-[32%] rounded-full bg-orange-500/80" />
                          <span className="absolute top-1/2 left-[32%] h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full border border-orange-100 bg-orange-500" />
                        </div>
                      </div>

                      <div className="space-y-1">
                        <div className="flex justify-between text-[#D1D5DB]">
                          <span>{t.showcase.app.opacityLabel}</span>
                          <span className="tabular-nums rounded border border-[#2A2E39] bg-[#0D0E11] px-1.5 text-[#F3F4F6]">
                            85 %
                          </span>
                        </div>
                        <div className="relative h-1 rounded-full bg-[#0D0E11]">
                          <div className="h-full w-[85%] rounded-full bg-orange-500/80" />
                          <span className="absolute top-1/2 left-[85%] h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full border border-orange-100 bg-orange-500" />
                        </div>
                      </div>
                    </div>

                    {/* Margins & Auto-Contrast Toggle Card */}
                    <div className="space-y-2 rounded-lg border border-[#2A2E39] bg-[#1E2128]/50 p-2 text-[9px]">
                      <div className="grid grid-cols-2 gap-2">
                        <div className="flex justify-between text-[#9CA3AF]">
                          <span>{t.showcase.app.marginXLabel}</span>
                          <span className="tabular-nums text-[#F3F4F6]">4%</span>
                        </div>
                        <div className="flex justify-between text-[#9CA3AF]">
                          <span>{t.showcase.app.marginYLabel}</span>
                          <span className="tabular-nums text-[#F3F4F6]">4%</span>
                        </div>
                      </div>
                      <div className="flex items-center justify-between border-t border-[#2A2E39]/80 pt-1.5">
                        <span className="flex items-center gap-1 truncate text-[#D1D5DB]">
                          <Sun className="h-2.5 w-2.5 shrink-0 text-orange-400" />
                          <span className="truncate">{t.showcase.app.autoSwitchLabel}</span>
                        </span>
                        <span className="flex h-3.5 w-6 shrink-0 items-center justify-end rounded-full bg-orange-500 p-0.5">
                          <span className="h-2.5 w-2.5 rounded-full bg-white" />
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
