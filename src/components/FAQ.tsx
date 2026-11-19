'use client';

import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { useI18n } from '@/i18n/I18nProvider';

export const FAQ: React.FC = () => {
  const { t } = useI18n();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section
      id="faq"
      className="scroll-mt-16 border-t border-[#2A2E39]/70 bg-[#101217]/80 py-16 sm:py-24"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-12">
          {/* Left Column */}
          <div className="lg:col-span-5">
            <p className="text-[11px] font-bold tracking-widest text-orange-400">
              {t.faq.eyebrow}
            </p>
            <h2 className="mt-2.5 text-balance text-2xl font-bold tracking-tight text-[#F3F4F6] sm:text-4xl">
              {t.faq.title}
            </h2>
          </div>

          {/* Right Column: Smooth CSS Grid Accordion */}
          <div className="space-y-3 lg:col-span-7">
            {t.faq.items.map((item, idx) => {
              const isOpen = openIndex === idx;
              return (
                <div
                  key={idx}
                  className="rounded-xl border border-[#2A2E39] bg-[#15171C] shadow-[inset_0_1px_0_0_rgba(255,255,255,0.04)] transition-colors duration-150 hover:border-[#3B4150]"
                >
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    onClick={() => setOpenIndex(isOpen ? null : idx)}
                    className="flex w-full items-center justify-between gap-4 rounded-xl px-5 py-4 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500/60"
                  >
                    <span className="text-sm font-semibold text-[#F3F4F6]">
                      {item.question}
                    </span>
                    <ChevronDown
                      className={`h-4 w-4 shrink-0 text-[#9CA3AF] transition-transform duration-200 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                        isOpen ? 'rotate-180 text-orange-400' : ''
                      }`}
                    />
                  </button>

                  <div
                    className={`grid transition-[grid-template-rows,opacity] duration-200 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                      isOpen
                        ? 'grid-rows-[1fr] opacity-100'
                        : 'grid-rows-[0fr] opacity-0'
                    }`}
                  >
                    <div className="overflow-hidden">
                      <div className="border-t border-[#2A2E39]/70 px-5 pt-3 pb-4 text-xs leading-relaxed text-[#9CA3AF] sm:text-[13px]">
                        {item.answer}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
