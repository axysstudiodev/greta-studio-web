import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { I18nProvider } from '@/i18n/I18nProvider';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://gretastudio.app'),
  title: 'Greta Studio — Fast Batch Watermarking & Branding for Photographers',
  description:
    'Protect, sign, and brand thousands of photos in seconds. Built for Windows and macOS photographers.',
  icons: {
    icon: '/images/gretastudio_app_icon.png',
  },
  openGraph: {
    title: 'Greta Studio — Batch Watermarking & Branding for Photographers',
    description:
      'Protect, sign, and brand thousands of photos in seconds. 100% offline desktop app for Windows and macOS.',
    type: 'website',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Greta Studio — Fast Batch Watermarking & Branding for Photographers',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Greta Studio — Batch Watermarking & Branding for Photographers',
    description:
      'Protect, sign, and brand thousands of photos in seconds. Built for Windows and macOS photographers.',
    images: ['/images/og-image.jpg'],
  },
};

const SOFTWARE_JSON_LD = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Greta Studio',
  operatingSystem: 'Windows, macOS',
  applicationCategory: 'PhotographyApplication',
  url: 'https://gretastudio.app',
  description:
    'Protect, sign, and brand thousands of photos in seconds. 100% offline desktop app for Windows and macOS.',
  offers: [
    {
      '@type': 'Offer',
      name: 'Free Trial',
      price: '0',
      priceCurrency: 'USD',
    },
    {
      '@type': 'Offer',
      name: 'Greta Studio Pro',
      price: '29',
      priceCurrency: 'USD',
    },
    {
      '@type': 'Offer',
      name: 'Studio Pack',
      price: '69',
      priceCurrency: 'USD',
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="min-h-screen bg-[#0D0E11] text-[#F3F4F6] selection:bg-orange-500/30 selection:text-orange-100">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(SOFTWARE_JSON_LD) }}
        />
        <I18nProvider>{children}</I18nProvider>
      </body>
    </html>
  );
}
