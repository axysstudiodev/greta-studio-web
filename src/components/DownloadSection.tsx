'use client';

import React from 'react';
import { ArrowUpRight, Download, Laptop, Monitor } from 'lucide-react';
import { useI18n } from '@/i18n/I18nProvider';

const RELEASES_URL =
  'https://github.com/axysstudiodev/greta-studio-releases/releases/latest';

export const DownloadSection: React.FC = () => {
  const { t } = useI18n();

  return (
    <section id="download" className="border-t border-[#2A2E39]/70 py-16 sm:py-24">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <div className="rounded-2xl border border-[#2A2E39] bg-gradient-to-b from-[#181B22] to-[#121419] p-8 text-center shadow-2xl shadow-black/50 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.06)] sm:p-12">
          <p className="text-[11px] font-bold tracking-widest text-orange-400">
            {t.download.eyebrow}
          </p>
          <h2 className="mt-2.5 text-balance text-2xl font-bold tracking-tight text-[#F3F4F6] sm:text-3xl">
            {t.download.title}
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-[#9CA3AF]">
            {t.download.subtitle}
          </p>

          <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
            <a
              href={RELEASES_URL}
              target="_blank"
              rel="noreferrer"
              className="group flex items-center justify-between rounded-xl border border-[#2A2E39] bg-[#1E2128] p-4 text-left shadow-[inset_0_1px_0_0_rgba(255,255,255,0.06)] transition-all duration-150 ease-[cubic-bezier(0.16,1,0.3,1)] hover:border-orange-500/40 hover:bg-[#242832] active:scale-[0.98]"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-orange-500/25 bg-orange-500/10 text-orange-400">
                  <Monitor className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-[#F3F4F6]">
                    {t.download.windowsBtn}
                  </div>
                  <div className="text-[11px] text-[#9CA3AF]">
                    {t.download.windowsMeta}
                  </div>
                </div>
              </div>
              <Download className="h-4 w-4 text-[#9CA3AF] transition-colors group-hover:text-orange-400" />
            </a>

            <a
              href={RELEASES_URL}
              target="_blank"
              rel="noreferrer"
              className="group flex items-center justify-between rounded-xl border border-[#2A2E39] bg-[#1E2128] p-4 text-left shadow-[inset_0_1px_0_0_rgba(255,255,255,0.06)] transition-all duration-150 ease-[cubic-bezier(0.16,1,0.3,1)] hover:border-orange-500/40 hover:bg-[#242832] active:scale-[0.98]"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-orange-500/25 bg-orange-500/10 text-orange-400">
                  <Laptop className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-[#F3F4F6]">
                    {t.download.macBtn}
                  </div>
                  <div className="text-[11px] text-[#9CA3AF]">
                    {t.download.macMeta}
                  </div>
                </div>
              </div>
              <Download className="h-4 w-4 text-[#9CA3AF] transition-colors group-hover:text-orange-400" />
            </a>
          </div>

          <a
            href={RELEASES_URL}
            target="_blank"
            rel="noreferrer"
            className="mt-6 inline-flex items-center gap-1 text-xs font-medium text-[#9CA3AF] transition-colors hover:text-orange-400"
          >
            <span>{t.download.releasesLink}</span>
            <ArrowUpRight className="h-3.5 w-3.5" />
          </a>
        </div>
      </div>
    </section>
  );
};
