'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { Globe, Menu, X, Zap } from 'lucide-react';
import { useI18n } from '@/i18n/I18nProvider';

export const Navbar: React.FC = () => {
  const { locale, setLocale, t } = useI18n();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleLocale = () => {
    setLocale(locale === 'en' ? 'es' : 'en');
  };

  useEffect(() => {
    if (!isMobileMenuOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isMobileMenuOpen]);

  const navLinks = [
    { href: '#features', label: t.nav.features },
    { href: '#use-cases', label: t.nav.useCases },
    { href: '#pricing', label: t.nav.pricing },
    { href: '#faq', label: t.nav.faq },
    { href: '#download', label: t.nav.download },
  ];

  return (
    <header className="sticky top-0 z-40 w-full border-b border-[#2A2E39]/80 bg-[#0D0E11]/90 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        {/* Brand */}
        <a
          href="#"
          className="flex items-center gap-2.5 rounded-lg py-1 pr-2 transition-opacity duration-150 hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500/60"
        >
          <Image
            src="/images/gretastudio_app_icon.png"
            alt="Greta Studio"
            width={32}
            height={32}
            className="h-8 w-8 rounded-lg border border-white/10 object-contain shadow-sm"
            priority
          />
          <span className="text-sm font-bold tracking-tight text-[#F3F4F6]">
            Greta Studio
          </span>
        </a>

        {/* Navigation Links (Desktop) */}
        <nav className="hidden items-center gap-6 text-xs font-medium text-[#9CA3AF] md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded px-1 py-0.5 transition-colors duration-150 hover:text-[#F3F4F6] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500/60"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={toggleLocale}
            aria-label={t.nav.langToggleLabel}
            title={t.nav.langToggleLabel}
            className="inline-flex h-9 items-center gap-1.5 rounded-md border border-[#2A2E39] bg-[#15171C] px-2.5 text-xs font-medium text-[#D1D5DB] transition-all duration-150 ease-[cubic-bezier(0.16,1,0.3,1)] hover:border-[#3B4150] hover:bg-[#1E2128] hover:text-[#F3F4F6] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500/60 active:scale-[0.97] sm:h-8"
          >
            <Globe className="h-3.5 w-3.5 text-orange-400" />
            <span className="tabular-nums uppercase">{locale}</span>
          </button>

          <a
            href="#pricing"
            className="inline-flex h-9 items-center gap-1.5 rounded-md bg-gradient-to-b from-orange-500 to-orange-600 px-3.5 text-xs font-semibold text-white shadow-sm shadow-orange-500/25 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.25)] transition-all duration-150 ease-[cubic-bezier(0.16,1,0.3,1)] hover:from-orange-400 hover:to-orange-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-400 active:scale-[0.97] sm:h-8"
          >
            <Zap className="h-3.5 w-3.5" />
            <span>{t.nav.buyPro}</span>
          </a>

          {/* Mobile Menu Toggle */}
          <button
            type="button"
            onClick={() => setIsMobileMenuOpen((prev) => !prev)}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-nav"
            aria-label={
              isMobileMenuOpen ? t.nav.closeMenuLabel : t.nav.openMenuLabel
            }
            className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-[#2A2E39] bg-[#15171C] text-[#D1D5DB] transition-colors duration-150 hover:border-[#3B4150] hover:bg-[#1E2128] hover:text-[#F3F4F6] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500/60 active:scale-[0.97] md:hidden"
          >
            {isMobileMenuOpen ? (
              <X className="h-4 w-4" />
            ) : (
              <Menu className="h-4 w-4" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {isMobileMenuOpen && (
        <nav
          id="mobile-nav"
          className="border-t border-[#2A2E39] bg-[#0D0E11]/95 px-4 py-3 backdrop-blur-md md:hidden"
        >
          <div className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex h-11 items-center rounded-lg px-3 text-sm font-medium text-[#D1D5DB] transition-colors duration-150 hover:bg-[#15171C] hover:text-[#F3F4F6] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500/60"
              >
                {link.label}
              </a>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
};
