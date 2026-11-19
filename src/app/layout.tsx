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
  title: 'Greta Studio — Fast Batch Watermarking & Branding for Photographers',
  description:
    'Protect, sign, and brand thousands of photos in seconds with native Rust speed. Built for Windows and macOS photographers.',
  icons: {
    icon: '/images/gretastudio_app_icon.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="min-h-screen bg-[#0D0E11] text-[#F3F4F6] selection:bg-orange-500/30 selection:text-orange-100">
        <I18nProvider>{children}</I18nProvider>
      </body>
    </html>
  );
}
