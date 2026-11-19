'use client';

import React from 'react';
import { Check, Gift, Users, Zap } from 'lucide-react';
import { useI18n } from '@/i18n/I18nProvider';

export const Pricing: React.FC = () => {
  const { t } = useI18n();

  return (
    <section id="pricing" className="border-t border-[#2A2E39]/70 py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-[11px] font-bold tracking-widest text-orange-400">
            {t.pricing.eyebrow}
          </p>
          <h2 className="mt-2.5 text-balance text-2xl font-bold tracking-tight text-[#F3F4F6] sm:text-3xl">
            {t.pricing.title}
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-[#9CA3AF] sm:text-base">
            {t.pricing.subtitle}
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {/* Tier 1: Free Trial */}
          <div className="flex flex-col rounded-2xl border border-[#2A2E39] bg-[#15171C] p-6 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.04)]">
            <div className="flex items-center gap-2 text-xs font-semibold text-[#D1D5DB]">
              <Gift className="h-4 w-4 text-[#9CA3AF]" />
              <span>{t.pricing.tiers.trial.name}</span>
            </div>

            <div className="mt-4 flex items-baseline gap-2">
              <span className="tabular-nums text-4xl font-extrabold tracking-tight text-[#F3F4F6]">
                {t.pricing.tiers.trial.price}
              </span>
              <span className="text-xs text-[#6B7280]">{t.pricing.freeLabel}</span>
            </div>

            <p className="mt-3 text-xs leading-relaxed text-[#9CA3AF]">
              {t.pricing.tiers.trial.description}
            </p>

            <ul className="mt-6 flex-1 space-y-3 border-t border-[#2A2E39] pt-5">
              {t.pricing.tiers.trial.features.map((feat, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-xs text-[#D1D5DB]">
                  <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#9CA3AF]" />
                  <span>{feat}</span>
                </li>
              ))}
            </ul>

            <a
              href="#download"
              className="mt-8 inline-flex h-10 w-full items-center justify-center rounded-lg border border-[#2A2E39] bg-[#1E2128] text-xs font-semibold text-[#F3F4F6] shadow-[inset_0_1px_0_0_rgba(255,255,255,0.06)] transition-all duration-150 ease-[cubic-bezier(0.16,1,0.3,1)] hover:border-[#3B4150] hover:bg-[#272B35] active:scale-[0.97]"
            >
              {t.pricing.tiers.trial.cta}
            </a>
          </div>

          {/* Tier 2: Greta Studio Pro (Popular) */}
          <div className="relative flex flex-col rounded-2xl border border-orange-500/45 bg-[#181B22] p-6 shadow-xl shadow-orange-500/10 shadow-[inset_0_1px_0_0_rgba(249,115,22,0.18)]">
            <span className="absolute -top-3 right-6 rounded-full border border-orange-400/40 bg-gradient-to-b from-orange-500 to-orange-600 px-3 py-0.5 text-[10px] font-bold tracking-widest text-white shadow-sm">
              {t.pricing.popularBadge}
            </span>

            <div className="flex items-center gap-2 text-xs font-semibold text-orange-300">
              <Zap className="h-4 w-4 text-orange-400" />
              <span>{t.pricing.tiers.pro.name}</span>
            </div>

            <div className="mt-4 flex items-baseline gap-2">
              <span className="tabular-nums text-4xl font-extrabold tracking-tight text-[#F3F4F6]">
                {t.pricing.tiers.pro.price}
              </span>
              <span className="tabular-nums text-sm text-[#6B7280] line-through">
                {t.pricing.tiers.pro.originalPrice}
              </span>
              <span className="text-xs text-[#9CA3AF]">{t.pricing.oneTimeLabel}</span>
            </div>

            <p className="mt-3 text-xs leading-relaxed text-[#D1D5DB]">
              {t.pricing.tiers.pro.description}
            </p>

            <ul className="mt-6 flex-1 space-y-3 border-t border-[#2A2E39] pt-5">
              {t.pricing.tiers.pro.features.map((feat, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-xs text-[#F3F4F6]">
                  <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-orange-400" />
                  <span>{feat}</span>
                </li>
              ))}
            </ul>

            <a
              href="#download"
              className="mt-8 inline-flex h-10 w-full items-center justify-center rounded-lg bg-gradient-to-b from-orange-500 to-orange-600 text-xs font-semibold text-white shadow-md shadow-orange-500/25 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.25)] transition-all duration-150 ease-[cubic-bezier(0.16,1,0.3,1)] hover:from-orange-400 hover:to-orange-500 active:scale-[0.97]"
            >
              {t.pricing.tiers.pro.cta}
            </a>
          </div>

          {/* Tier 3: Studio Pack (5 Devices) */}
          <div className="flex flex-col rounded-2xl border border-[#2A2E39] bg-[#15171C] p-6 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.04)]">
            <div className="flex items-center gap-2 text-xs font-semibold text-[#D1D5DB]">
              <Users className="h-4 w-4 text-orange-400" />
              <span>{t.pricing.tiers.studio.name}</span>
            </div>

            <div className="mt-4 flex items-baseline gap-2">
              <span className="tabular-nums text-4xl font-extrabold tracking-tight text-[#F3F4F6]">
                {t.pricing.tiers.studio.price}
              </span>
              <span className="text-xs text-[#6B7280]">{t.pricing.oneTimeLabel}</span>
            </div>

            <p className="mt-3 text-xs leading-relaxed text-[#9CA3AF]">
              {t.pricing.tiers.studio.description}
            </p>

            <ul className="mt-6 flex-1 space-y-3 border-t border-[#2A2E39] pt-5">
              {t.pricing.tiers.studio.features.map((feat, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-xs text-[#D1D5DB]">
                  <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-orange-400" />
                  <span>{feat}</span>
                </li>
              ))}
            </ul>

            <a
              href="#download"
              className="mt-8 inline-flex h-10 w-full items-center justify-center rounded-lg border border-[#2A2E39] bg-[#1E2128] text-xs font-semibold text-[#F3F4F6] shadow-[inset_0_1px_0_0_rgba(255,255,255,0.06)] transition-all duration-150 ease-[cubic-bezier(0.16,1,0.3,1)] hover:border-[#3B4150] hover:bg-[#272B35] active:scale-[0.97]"
            >
              {t.pricing.tiers.studio.cta}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
