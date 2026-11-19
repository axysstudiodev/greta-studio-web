'use client';

import React, { createContext, useContext, useEffect, useMemo, useState } from 'react';
import en from './en.json';
import es from './es.json';

export type Locale = 'en' | 'es';
type Dictionary = typeof en;

const DICTIONARIES: Record<Locale, Dictionary> = { en, es };
const STORAGE_KEY = 'greta_web_locale';

interface I18nContextValue {
  locale: Locale;
  setLocale: (next: Locale) => void;
  t: Dictionary;
}

const I18nContext = createContext<I18nContextValue>({
  locale: 'en',
  setLocale: () => {},
  t: en,
});

export function I18nProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>('en');

  useEffect(() => {
    try {
      const saved = window.localStorage.getItem(STORAGE_KEY);
      if (saved === 'en' || saved === 'es') {
        setLocaleState(saved);
        document.documentElement.lang = saved;
        document.title = DICTIONARIES[saved].meta.title;
        return;
      }

      const browserLang = (navigator.language || 'en').toLowerCase();
      const detected: Locale = browserLang.startsWith('es') ? 'es' : 'en';
      setLocaleState(detected);
      document.documentElement.lang = detected;
      document.title = DICTIONARIES[detected].meta.title;
    } catch {
      // Fallback to default English
    }
  }, []);

  const setLocale = (next: Locale) => {
    setLocaleState(next);
    try {
      window.localStorage.setItem(STORAGE_KEY, next);
      document.documentElement.lang = next;
      document.title = DICTIONARIES[next].meta.title;
    } catch {
      // Ignore storage errors
    }
  };

  const value = useMemo<I18nContextValue>(
    () => ({
      locale,
      setLocale,
      t: DICTIONARIES[locale],
    }),
    [locale]
  );

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n() {
  return useContext(I18nContext);
}
