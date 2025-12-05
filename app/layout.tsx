import type { Metadata } from 'next';
import './globals.css';
import SiteHeader from '../components/SiteHeader';
import SiteFooter from '../components/SiteFooter';
import { defaultLocale, type Locale, languageAlternates } from '../lib/i18n';
import { SpeedInsights } from '@vercel/speed-insights/next';

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
  children,
  params
}: {
  children: React.ReactNode;
  params: { locale?: Locale };
}) {
  const locale = params?.locale ?? defaultLocale;

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
