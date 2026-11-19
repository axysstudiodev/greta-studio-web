'use client';

import React from 'react';
import Image from 'next/image';
import { useI18n } from '@/i18n/I18nProvider';

export const Footer: React.FC = () => {
  const { t } = useI18n();

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-[#2A2E39]/80 bg-[#0D0E11] py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-4 text-center sm:flex-row sm:px-6 sm:text-left">
        <div className="flex flex-col items-center gap-1.5 sm:items-start">
          <div className="flex items-center gap-2">
            <Image
              src="/images/gretastudio_app_icon.png"
              alt="Greta Studio"
              width={24}
              height={24}
              className="h-6 w-6 rounded-md border border-white/10 object-contain"
            />
            <p className="text-xs font-semibold text-[#F3F4F6]">Greta Studio</p>
          </div>
          <p className="text-[11px] text-[#9CA3AF]">{t.footer.tagline}</p>
        </div>

        <div className="flex flex-col items-center gap-3 sm:flex-row sm:gap-6">
          <span className="text-[11px] text-[#9CA3AF]">{t.footer.rights}</span>
          <button
            type="button"
            onClick={handleScrollToTop}
            className="group inline-flex items-center gap-1.5 rounded-md border border-[#2A2E39] bg-[#1E2128] px-2.5 py-1.5 text-[11px] font-medium text-[#E5E7EB] transition-all duration-150 hover:border-orange-500/40 hover:text-orange-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500/60 active:scale-[0.97]"
            aria-label={t.footer.backToTop}
          >
            <span>{t.footer.backToTop}</span>
            <svg
              className="h-3 w-3 text-orange-400 transition-transform duration-200 group-hover:-translate-y-0.5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 10l7-7m0 0l7 7m-7-7v18" />
            </svg>
          </button>
        </div>
      </div>
    </footer>
  );
};
