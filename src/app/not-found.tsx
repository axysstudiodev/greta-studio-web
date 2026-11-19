'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft } from 'lucide-react';
import { useI18n } from '@/i18n/I18nProvider';

export default function NotFound() {
  const { t } = useI18n();

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-[#0D0E11] px-4 text-center text-[#F3F4F6]">
      <Image
        src="/images/gretastudio_app_icon.png"
        alt="Greta Studio"
        width={48}
        height={48}
        className="mb-6 h-12 w-12 rounded-xl border border-white/10 object-contain shadow-lg"
      />
      <p className="tabular-nums text-xs font-bold tracking-widest text-orange-400">
        {t.notFound.code}
      </p>
      <h1 className="mt-2 text-2xl font-bold tracking-tight sm:text-3xl">
        {t.notFound.title}
      </h1>
      <p className="mt-2 max-w-sm text-sm text-[#9CA3AF]">
        {t.notFound.description}
      </p>
      <Link
        href="/"
        className="mt-6 inline-flex h-10 items-center gap-2 rounded-lg bg-gradient-to-b from-orange-500 to-orange-600 px-5 text-xs font-semibold text-white shadow-md shadow-orange-500/20 transition-all duration-150 hover:from-orange-400 hover:to-orange-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-400 active:scale-[0.97]"
      >
        <ArrowLeft className="h-3.5 w-3.5" />
        <span>{t.notFound.backHome}</span>
      </Link>
    </div>
  );
}
