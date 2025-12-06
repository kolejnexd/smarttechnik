import type { Metadata } from 'next';
import './globals.css';
import SiteHeader from '../components/SiteHeader';
import SiteFooter from '../components/SiteFooter';
import { defaultLocale, type Locale, languageAlternates, getLocaleFromPath } from '../lib/i18n';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { headers } from 'next/headers';

export const metadata: Metadata = {
  metadataBase: new URL('https://smarttechnik.eu'),
  title: 'smaRTtechnik Lebek & Stawczyk GbR',
  description:
    'smaRTtechnik plant, spleißt, misst und wartet Glasfaser- und Datennetze für Stadtwerke, Netzbetreiber, Wohnungsbaugesellschaften und Unternehmen im Rhein-Main-Gebiet.',
  alternates: {
    canonical: '/',
    languages: languageAlternates('/')
  }
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  const headerList = headers();
  const pathHeader =
    headerList.get('x-invoke-path') ||
    headerList.get('x-next-url') ||
    headerList.get('referer') ||
    '/';
  const locale: Locale = (() => {
    try {
      const pathname = new URL(pathHeader, 'http://localhost').pathname;
      return getLocaleFromPath(pathname);
    } catch {
      return defaultLocale;
    }
  })();

  return (
    <html lang={locale}>
      <body className="antialiased">
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
        <SpeedInsights />
      </body>
    </html>
  );
}
