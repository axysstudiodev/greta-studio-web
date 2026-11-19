'use client';

import React from 'react';
import Image from 'next/image';
import {
  Cpu,
  Maximize2,
  PanelBottom,
  PenTool,
  Shield,
  ShieldCheck,
} from 'lucide-react';
import { useI18n } from '@/i18n/I18nProvider';
import { DEFAULT_SPONSOR_LOGOS } from '@/components/SponsorMarks';

export const BentoFeatures: React.FC = () => {
  const { t } = useI18n();

  return (
    <section id="features" className="border-t border-[#2A2E39]/70 py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex flex-col justify-between gap-4 lg:flex-row lg:items-end">
          <div className="max-w-xl">
            <p className="text-[11px] font-bold tracking-widest text-orange-400">
              {t.bento.eyebrow}
            </p>
            <h2 className="mt-2.5 text-balance text-2xl font-bold tracking-tight text-[#F3F4F6] sm:text-4xl">
              {t.bento.title}
            </h2>
          </div>
          <p className="max-w-md text-sm leading-relaxed text-[#9CA3AF]">
            {t.bento.subtitle}
          </p>
        </div>

        {/* Asymmetric Bento Grid */}
        <div className="mt-12 grid grid-cols-1 gap-4 lg:grid-cols-12">
          {/* Card 1 (7 cols): Auto-Contrast Smart Signatures */}
          <div className="flex flex-col justify-between rounded-2xl border border-[#2A2E39] bg-[#15171C] p-6 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.05)] lg:col-span-7">
            <div>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-orange-500/25 bg-orange-500/10 px-2.5 py-0.5 text-[10px] font-bold tracking-widest text-orange-400">
                <PenTool className="h-3 w-3" />
                {t.bento.autoContrast.badge}
              </span>
              <h3 className="mt-3 text-lg font-bold tracking-tight text-[#F3F4F6]">
                {t.bento.autoContrast.title}
              </h3>
              <p className="mt-1.5 max-w-xl text-xs leading-relaxed text-[#9CA3AF] sm:text-sm">
                {t.bento.autoContrast.description}
              </p>
            </div>

            {/* Visual Split Demo on Real Portrait */}
            <div className="relative mt-6 grid h-48 grid-cols-2 overflow-hidden rounded-xl border border-[#2A2E39] bg-[#0D0E11] sm:h-56">
              <Image
                src="/images/bento-portrait-sample.jpg"
                alt="Editorial portrait auto-contrast demo"
                fill
                className="object-cover object-top"
              />
              {/* Left (Bright zone -> Dark Signature) */}
              <div className="relative flex items-end justify-start border-r border-white/20 p-3.5">
                <div className="rounded-lg bg-white/75 px-2.5 py-1.5 shadow-sm backdrop-blur-xs">
                  <Image
                    src="/images/gretastudio_dark.svg"
                    alt="Dark signature"
                    width={96}
                    height={26}
                    className="h-5 w-auto object-contain"
                  />
                </div>
                <span className="absolute top-2.5 left-2.5 rounded bg-black/55 px-2 py-0.5 text-[10px] font-medium text-white backdrop-blur-xs">
                  {t.bento.autoContrast.lightZoneLabel}
                </span>
              </div>

              {/* Right (Deep shadow zone -> Light Signature) */}
              <div className="relative flex items-end justify-end p-3.5">
                <div className="rounded-lg bg-black/45 px-2.5 py-1.5 shadow-sm backdrop-blur-xs">
                  <Image
                    src="/images/gretastudio_light.svg"
                    alt="Light signature"
                    width={96}
                    height={26}
                    className="h-5 w-auto object-contain"
                  />
                </div>
                <span className="absolute top-2.5 right-2.5 rounded bg-black/55 px-2 py-0.5 text-[10px] font-medium text-white backdrop-blur-xs">
                  {t.bento.autoContrast.darkZoneLabel}
                </span>
              </div>
            </div>
          </div>

          {/* Card 2 (5 cols): Rust + Rayon Multi-Core Speed Benchmark */}
          <div className="flex flex-col justify-between rounded-2xl border border-[#2A2E39] bg-[#15171C] p-6 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.05)] lg:col-span-5">
            <div>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/25 bg-emerald-500/10 px-2.5 py-0.5 text-[10px] font-bold tracking-widest text-emerald-400">
                <Cpu className="h-3 w-3" />
                {t.bento.speed.badge}
              </span>
              <h3 className="mt-3 text-lg font-bold tracking-tight text-[#F3F4F6]">
                {t.bento.speed.title}
              </h3>
              <p className="mt-1.5 text-xs leading-relaxed text-[#9CA3AF] sm:text-sm">
                {t.bento.speed.description}
              </p>
            </div>

            {/* Visual Benchmark Bars */}
            <div className="mt-6 space-y-4 rounded-xl border border-[#2A2E39] bg-[#0D0E11] p-4">
              <div className="space-y-1.5">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-semibold text-[#F3F4F6]">
                    {t.bento.speed.gretaBarLabel}
                  </span>
                  <span className="tabular-nums font-bold text-orange-400">
                    {t.bento.speed.gretaBarTime}
                  </span>
                </div>
                <div className="h-2.5 w-full overflow-hidden rounded-full bg-[#1E2128]">
                  <div className="h-full w-[14%] rounded-full bg-gradient-to-r from-orange-500 to-amber-400 shadow-[0_0_10px_rgba(249,115,22,0.5)]" />
                </div>
              </div>

              <div className="space-y-1.5">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-[#9CA3AF]">
                    {t.bento.speed.otherBarLabel}
                  </span>
                  <span className="tabular-nums text-[#6B7280]">
                    {t.bento.speed.otherBarTime}
                  </span>
                </div>
                <div className="h-2.5 w-full overflow-hidden rounded-full bg-[#1E2128]">
                  <div className="h-full w-[92%] rounded-full bg-[#2A2E39]" />
                </div>
              </div>
            </div>
          </div>

          {/* Card 3 (4 cols): Anti-Theft Proofing */}
          <div className="flex flex-col justify-between rounded-2xl border border-[#2A2E39] bg-[#15171C] p-6 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.05)] lg:col-span-4">
            <div>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-[#1E2128] px-2.5 py-0.5 text-[10px] font-bold tracking-widest text-[#D1D5DB]">
                <Shield className="h-3 w-3 text-orange-400" />
                {t.bento.proofing.badge}
              </span>
              <h3 className="mt-3 text-base font-bold tracking-tight text-[#F3F4F6]">
                {t.bento.proofing.title}
              </h3>
              <p className="mt-1.5 text-xs leading-relaxed text-[#9CA3AF]">
                {t.bento.proofing.description}
              </p>
            </div>

            <div className="relative mt-5 flex h-28 items-center justify-center overflow-hidden rounded-xl border border-[#2A2E39] bg-[#0D0E11]">
              <div className="grid -rotate-18 scale-110 grid-cols-3 place-items-center gap-4 opacity-30">
                {Array.from({ length: 6 }).map((_, idx) => (
                  <Image
                    key={idx}
                    src="/images/gretastudio_light.svg"
                    alt="Greta Watermark"
                    width={72}
                    height={20}
                    className="h-4 w-auto object-contain"
                  />
                ))}
              </div>
              <div className="absolute bottom-2.5 rounded-full border border-white/15 bg-[#15171C]/95 px-3 py-0.5 shadow-md">
                <span className="tabular-nums text-[10px] font-semibold tracking-wider text-[#F3F4F6]">
                  IMG_8841
                </span>
              </div>
            </div>
          </div>

          {/* Card 4 (4 cols): Sponsor Ribbons */}
          <div className="flex flex-col justify-between rounded-2xl border border-[#2A2E39] bg-[#15171C] p-6 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.05)] lg:col-span-4">
            <div>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-[#1E2128] px-2.5 py-0.5 text-[10px] font-bold tracking-widest text-[#D1D5DB]">
                <PanelBottom className="h-3 w-3 text-orange-400" />
                {t.bento.ribbon.badge}
              </span>
              <h3 className="mt-3 text-base font-bold tracking-tight text-[#F3F4F6]">
                {t.bento.ribbon.title}
              </h3>
              <p className="mt-1.5 text-xs leading-relaxed text-[#9CA3AF]">
                {t.bento.ribbon.description}
              </p>
            </div>

            <div className="mt-5 flex h-28 flex-col justify-end overflow-hidden rounded-xl border border-[#2A2E39] bg-gradient-to-br from-[#1B1F29] to-[#0D0E11]">
              <div className="flex h-10 items-center justify-evenly gap-1.5 border-t border-white/10 bg-[#0D0E11]/90 px-2.5 text-[#D1D5DB]">
                {DEFAULT_SPONSOR_LOGOS.slice(0, 4).map((brand) => (
                  <div key={brand.id} className="scale-75 opacity-85">
                    {brand.svg}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Card 5 (4 cols): Shortest-Edge & Offline Lease */}
          <div className="flex flex-col justify-between rounded-2xl border border-[#2A2E39] bg-[#15171C] p-6 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.05)] lg:col-span-4">
            <div>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-[#1E2128] px-2.5 py-0.5 text-[10px] font-bold tracking-widest text-[#D1D5DB]">
                <Maximize2 className="h-3 w-3 text-orange-400" />
                {t.bento.geometry.badge}
              </span>
              <h3 className="mt-3 text-base font-bold tracking-tight text-[#F3F4F6]">
                {t.bento.geometry.title}
              </h3>
              <p className="mt-1.5 text-xs leading-relaxed text-[#9CA3AF]">
                {t.bento.geometry.description}
              </p>
            </div>

            <div className="mt-5 flex h-28 items-center justify-center gap-4 rounded-xl border border-[#2A2E39] bg-[#0D0E11] px-4">
              {/* Landscape frame */}
              <div className="relative h-14 w-20 rounded-md border border-[#3B4150] bg-[#15171C]">
                <span className="absolute right-1.5 bottom-1.5 h-2 w-5 rounded-xs bg-orange-400/80" />
              </div>
              {/* Portrait frame */}
              <div className="relative h-20 w-14 rounded-md border border-[#3B4150] bg-[#15171C]">
                <span className="absolute right-1.5 bottom-1.5 h-2 w-5 rounded-xs bg-orange-400/80" />
              </div>
              <ShieldCheck className="h-5 w-5 text-emerald-400" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
