'use client';

import React from 'react';
import Image from 'next/image';
import { useI18n } from '@/i18n/I18nProvider';

export const Footer: React.FC = () => {
  const { t } = useI18n();

  return (
    <footer className="border-t border-[#2A2E39]/80 bg-[#0D0E11] py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 text-center sm:flex-row sm:px-6 sm:text-left">
        <div className="flex items-center gap-2.5">
          <Image
            src="/images/gretastudio_app_icon.png"
            alt="Greta Studio"
            width={24}
            height={24}
            className="h-6 w-6 rounded-md border border-white/10 object-contain"
          />
          <div>
            <p className="text-xs font-semibold text-[#F3F4F6]">Greta Studio</p>
            <p className="text-[11px] text-[#6B7280]">{t.footer.tagline}</p>
          </div>
        </div>

        <span className="text-[11px] text-[#6B7280]">{t.footer.rights}</span>
      </div>
    </footer>
  );
};
