import React from 'react';

// Six Costa Rican butterfly genera styled as athletic & event sponsor brand marks
export const DEFAULT_SPONSOR_LOGOS: { id: string; label: string; svg: React.ReactNode }[] = [
  {
    id: 'morpho',
    label: 'MORPHO',
    svg: (
      <svg viewBox="0 0 116 28" className="h-4 w-auto fill-current sm:h-5" aria-label="Morpho">
        <path d="M4 20L12 8h5L9 20H4zm8 0L20 8h5l-8 12h-5z" />
        <text x="29" y="19" fontSize="13" fontWeight="800" letterSpacing="1.6" fontFamily="sans-serif">
          MORPHO
        </text>
      </svg>
    ),
  },
  {
    id: 'urania',
    label: 'URANIA',
    svg: (
      <svg viewBox="0 0 110 28" className="h-4 w-auto fill-current sm:h-5" aria-label="Urania">
        <polygon points="12,6 21,21 16,21 12,14 8,21 3,21" />
        <text x="26" y="19" fontSize="13" fontWeight="800" letterSpacing="1.8" fontFamily="sans-serif">
          URANIA
        </text>
      </svg>
    ),
  },
  {
    id: 'caligo',
    label: 'CALIGO',
    svg: (
      <svg viewBox="0 0 108 28" className="h-4 w-auto fill-current sm:h-5" aria-label="Caligo">
        <circle cx="11" cy="14" r="6" fill="none" stroke="currentColor" strokeWidth="2.5" />
        <circle cx="11" cy="14" r="2" />
        <text x="23" y="19" fontSize="13" fontWeight="800" letterSpacing="1.8" fontFamily="sans-serif">
          CALIGO
        </text>
      </svg>
    ),
  },
  {
    id: 'danaus',
    label: 'DANAUS',
    svg: (
      <svg viewBox="0 0 112 28" className="h-4 w-auto fill-current sm:h-5" aria-label="Danaus">
        <path
          d="M3 15h5l3-7 4 12 3-5h5"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <text x="27" y="19" fontSize="13" fontWeight="800" letterSpacing="1.6" fontFamily="sans-serif">
          DANAUS
        </text>
      </svg>
    ),
  },
  {
    id: 'ithomia',
    label: 'ITHOMIA',
    svg: (
      <svg viewBox="0 0 114 28" className="h-4 w-auto fill-current sm:h-5" aria-label="Ithomia">
        <rect x="4" y="8" width="4" height="12" rx="1" />
        <rect x="11" y="6" width="4" height="16" rx="1" />
        <text x="22" y="19" fontSize="13" fontWeight="800" letterSpacing="1.4" fontFamily="sans-serif">
          ITHOMIA
        </text>
      </svg>
    ),
  },
  {
    id: 'anartia',
    label: 'ANARTIA',
    svg: (
      <svg viewBox="0 0 118 28" className="h-4 w-auto fill-current sm:h-5" aria-label="Anartia">
        <path d="M3 20L10 8l5 8 3-4 5 8H3z" />
        <text x="27" y="19" fontSize="13" fontWeight="800" letterSpacing="1.5" fontFamily="sans-serif">
          ANARTIA
        </text>
      </svg>
    ),
  },
];
