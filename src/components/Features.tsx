'use client';

import React from 'react';
import {
  Award,
  Cpu,
  Grid,
  Maximize2,
  ShieldCheck,
  Stamp,
} from 'lucide-react';
import { useI18n } from '@/i18n/I18nProvider';

export const Features: React.FC = () => {
  const { t } = useI18n();

  const features = [
    {
      key: 'signature',
      icon: Stamp,
      title: t.features.items.signature.title,
      description: t.features.items.signature.description,
    },
    {
      key: 'pattern',
      icon: Grid,
      title: t.features.items.pattern.title,
      description: t.features.items.pattern.description,
    },
    {
      key: 'ribbon',
      icon: Award,
      title: t.features.items.ribbon.title,
      description: t.features.items.ribbon.description,
    },
    {
      key: 'geometry',
      icon: Maximize2,
      title: t.features.items.geometry.title,
      description: t.features.items.geometry.description,
    },
    {
      key: 'rust',
      icon: Cpu,
      title: t.features.items.rust.title,
      description: t.features.items.rust.description,
    },
    {
      key: 'offline',
      icon: ShieldCheck,
      title: t.features.items.offline.title,
      description: t.features.items.offline.description,
    },
  ];

  return (
    <section id="features" className="border-t border-[#2A2E39]/70 py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-[11px] font-bold tracking-widest text-orange-400">
            {t.features.eyebrow}
          </p>
          <h2 className="mt-2.5 text-balance text-2xl font-bold tracking-tight text-[#F3F4F6] sm:text-3xl">
            {t.features.title}
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-[#9CA3AF] sm:text-base">
            {t.features.subtitle}
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.key}
                className="group rounded-xl border border-[#2A2E39] bg-[#15171C] p-6 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.04)] transition-all duration-150 hover:border-[#3B4150] hover:bg-[#181B21]"
              >
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg border border-orange-500/25 bg-orange-500/10 text-orange-400 transition-transform duration-150 group-hover:scale-105">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="text-sm font-semibold tracking-tight text-[#F3F4F6]">
                  {item.title}
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-[#9CA3AF] sm:text-[13px]">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
