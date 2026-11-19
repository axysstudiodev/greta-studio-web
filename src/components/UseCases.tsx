'use client';

import React from 'react';
import { Briefcase, Camera, Trophy } from 'lucide-react';
import { useI18n } from '@/i18n/I18nProvider';

export const UseCases: React.FC = () => {
  const { t } = useI18n();

  const items = [
    {
      key: 'sports',
      icon: Trophy,
      tag: t.useCases.items.sports.tag,
      title: t.useCases.items.sports.title,
      description: t.useCases.items.sports.description,
    },
    {
      key: 'weddings',
      icon: Camera,
      tag: t.useCases.items.weddings.tag,
      title: t.useCases.items.weddings.title,
      description: t.useCases.items.weddings.description,
    },
    {
      key: 'studios',
      icon: Briefcase,
      tag: t.useCases.items.studios.tag,
      title: t.useCases.items.studios.title,
      description: t.useCases.items.studios.description,
    },
  ];

  return (
    <section id="use-cases" className="border-t border-[#2A2E39]/70 py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-12">
          {/* Left Sticky Editorial Column */}
          <div className="lg:sticky lg:top-24 lg:col-span-5 lg:self-start">
            <p className="text-[11px] font-bold tracking-widest text-orange-400">
              {t.useCases.eyebrow}
            </p>
            <h2 className="mt-2.5 text-balance text-2xl font-bold tracking-tight text-[#F3F4F6] sm:text-4xl">
              {t.useCases.title}
            </h2>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-[#9CA3AF]">
              {t.hero.subtitle}
            </p>
          </div>

          {/* Right Stacked Niche Cards */}
          <div className="space-y-4 lg:col-span-7">
            {items.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.key}
                  className="group flex flex-col gap-4 rounded-2xl border border-[#2A2E39] bg-[#15171C] p-6 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.04)] transition-all duration-150 hover:border-[#3B4150] hover:bg-[#181B21] sm:flex-row sm:items-start"
                >
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-orange-500/25 bg-orange-500/10 text-orange-400 transition-transform duration-150 group-hover:scale-105">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <span className="text-[10px] font-bold tracking-widest text-orange-400">
                      {item.tag}
                    </span>
                    <h3 className="mt-1.5 text-base font-bold tracking-tight text-[#F3F4F6]">
                      {item.title}
                    </h3>
                    <p className="mt-1.5 text-xs leading-relaxed text-[#9CA3AF] sm:text-[13px]">
                      {item.description}
                    </p>
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
