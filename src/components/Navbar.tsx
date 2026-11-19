'use client';

import React from 'react';
import Image from 'next/image';
import { Globe, Sparkles } from 'lucide-react';
import { useI18n } from '@/i18n/I18nProvider';

export const Navbar: React.FC = () => {
  const { locale, setLocale, t } = useI18n();

  const toggleLocale = () => {
    setLocale(locale === 'en' ? 'es' : 'en');
  };

  return (
    <header className="sticky top-0 z-40 w-full border-b border-[#2A2E39]/80 bg-[#0D0E11]/85 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        {/* Brand */}
        <a
          href="#"
          className="flex items-center gap-2.5 rounded-lg py-1 pr-2 transition-opacity duration-150 hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500/50"
        >
          <Image
            src="/images/gretastudio_app_icon.png"
            alt="Greta Studio"
            width={32}
            height={32}
            className="h-8 w-8 rounded-lg border border-white/10 object-contain shadow-sm"
            priority
          />
          <div className="flex items-baseline gap-1.5">
            <span className="text-sm font-bold tracking-tight text-[#F3F4F6]">
              Greta Studio
            </span>
            <span className="hidden rounded-full border border-orange-500/25 bg-orange-500/10 px-1.5 py-0.5 text-[10px] font-semibold tracking-wider text-orange-400 sm:inline-block">
              v1.6
            </span>
          </div>
        </a>

        {/* Navigation Links (Desktop) */}
        <nav className="hidden items-center gap-6 text-xs font-medium text-[#9CA3AF] md:flex">
          <a
            href="#features"
            className="transition-colors duration-150 hover:text-[#F3F4F6]"
          >
            {t.nav.features}
          </a>
          <a
            href="#pricing"
            className="transition-colors duration-150 hover:text-[#F3F4F6]"
          >
            {t.nav.pricing}
          </a>
          <a
            href="#download"
            className="transition-colors duration-150 hover:text-[#F3F4F6]"
          >
            {t.nav.download}
          </a>
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-2.5">
          <button
            type="button"
            onClick={toggleLocale}
            aria-label={t.nav.langToggleLabel}
            title={t.nav.langToggleLabel}
            className="inline-flex h-8 items-center gap-1.5 rounded-md border border-[#2A2E39] bg-[#15171C] px-2.5 text-xs font-medium text-[#D1D5DB] transition-all duration-150 ease-[cubic-bezier(0.16,1,0.3,1)] hover:border-[#3B4150] hover:bg-[#1E2128] hover:text-[#F3F4F6] active:scale-[0.97]"
          >
            <Globe className="h-3.5 w-3.5 text-orange-400" />
            <span className="tabular-nums uppercase">{locale}</span>
          </button>

          <a
            href="#pricing"
            className="inline-flex h-8 items-center gap-1.5 rounded-md bg-gradient-to-b from-orange-500 to-orange-600 px-3.5 text-xs font-semibold text-white shadow-sm shadow-orange-500/25 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.25)] transition-all duration-150 ease-[cubic-bezier(0.16,1,0.3,1)] hover:from-orange-400 hover:to-orange-500 active:scale-[0.97]"
          >
            <Sparkles className="h-3.5 w-3.5" />
            <span>{t.nav.buyPro}</span>
          </a>
        </div>
      </div>
    </header>
  );
};
