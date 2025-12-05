import { defaultLocale, type Locale } from './i18n';
import { type PageId } from './seo-config';

// 1. Dodajemy opcjonalne pole 'children' do typu NavLink
type NavLink = { 
  pageId: PageId; 
  label: string; 
  anchor?: string; 
  children?: NavLink[]; 
};

type ServiceLink = { pageId: PageId; label: string };
type LegalLinks = { impressum: string; privacy: string };

type NavCopy = {
  brandLabel: string;
  ctaLabel: string;
  navLinks: NavLink[];
  serviceLinks: ServiceLink[];
  footerHeadings: {
    navigation: string;
    services: string;
    legal: string;
    language: string;
    legalLinks: LegalLinks;
  };
};

const navContent: Record<Locale, NavCopy> = {
  de: {
    brandLabel: 'smaRTtechnik Startseite',
    ctaLabel: 'Projekt anfragen',
    navLinks: [
      { pageId: 'home', label: 'Startseite' },
      { 
        pageId: 'home', 
        label: 'Leistungen', 
        anchor: '#leistungen',
        // 2. Dodajemy podstrony tutaj
        children: [
          { pageId: 'glasfaser-ausbau', label: 'Glasfaser-Ausbau' },
          { pageId: 'netzwerktechnik-wlan', label: 'Netzwerktechnik & WLAN' },
          { pageId: 'messtechnik-fehlersuche', label: 'Messtechnik & Fehlersuche' },
          { pageId: 'service-wartung', label: 'Service & Wartung' }
        ]
      },
      { pageId: 'branchen-referenzen', label: 'Branchen & Referenzen' },
      { pageId: 'ueber-uns', label: 'Über uns' },
      { pageId: 'faq', label: 'FAQ' },
      { pageId: 'kontakt', label: 'Kontakt' }
    ],
    // Reszta pliku bez zmian...
    serviceLinks: [
      { pageId: 'glasfaser-ausbau', label: 'Glasfaser-Ausbau' },
      { pageId: 'netzwerktechnik-wlan', label: 'Netzwerktechnik & WLAN' },
      { pageId: 'messtechnik-fehlersuche', label: 'Messtechnik & Fehlersuche' },
      { pageId: 'service-wartung', label: 'Service & Wartung' }
    ],
    footerHeadings: {
      navigation: 'Navigation',
      services: 'Leistungen',
      legal: 'Rechtliches',
      language: 'Sprache',
      legalLinks: {
        impressum: 'Impressum',
        privacy: 'Datenschutz'
      }
    }
  },
  en: {
    brandLabel: 'smaRTtechnik Home',
    ctaLabel: 'Request a project',
    navLinks: [
      { pageId: 'home', label: 'Home' },
      { 
        pageId: 'home', 
        label: 'Services', 
        anchor: '#leistungen',
        children: [
            { pageId: 'glasfaser-ausbau', label: 'Fiber optic deployment' },
            { pageId: 'netzwerktechnik-wlan', label: 'Network technology & Wi-Fi' },
            { pageId: 'messtechnik-fehlersuche', label: 'Measurement & troubleshooting' },
            { pageId: 'service-wartung', label: 'Service & maintenance' }
        ]
      },
      { pageId: 'branchen-referenzen', label: 'Industries & References' },
      { pageId: 'ueber-uns', label: 'About us' },
      { pageId: 'faq', label: 'FAQ' },
      { pageId: 'kontakt', label: 'Contact' }
    ],
    // Reszta pliku EN...
    serviceLinks: [
      { pageId: 'glasfaser-ausbau', label: 'Fiber optic deployment' },
      { pageId: 'netzwerktechnik-wlan', label: 'Network technology & Wi-Fi' },
      { pageId: 'messtechnik-fehlersuche', label: 'Measurement & troubleshooting' },
      { pageId: 'service-wartung', label: 'Service & maintenance' }
    ],
    footerHeadings: {
      navigation: 'Navigation',
      services: 'Services',
      legal: 'Legal',
      language: 'Language',
      legalLinks: {
        impressum: 'Imprint',
        privacy: 'Privacy policy'
      }
    }
  },
  pl: {
    brandLabel: 'Strona główna smaRTtechnik',
    ctaLabel: 'Zapytaj o projekt',
    navLinks: [
      { pageId: 'home', label: 'Strona główna' },
      { 
        pageId: 'home', 
        label: 'Usługi', 
        anchor: '#leistungen',
        children: [
            { pageId: 'glasfaser-ausbau', label: 'Rozbudowa światłowodów' },
            { pageId: 'netzwerktechnik-wlan', label: 'Sieci i Wi‑Fi' },
            { pageId: 'messtechnik-fehlersuche', label: 'Pomiary i diagnostyka' },
            { pageId: 'service-wartung', label: 'Serwis i utrzymanie' }
        ]
      },
      { pageId: 'branchen-referenzen', label: 'Branże i realizacje' },
      { pageId: 'ueber-uns', label: 'O nas' },
      { pageId: 'faq', label: 'FAQ' },
      { pageId: 'kontakt', label: 'Kontakt' }
    ],
    // Reszta pliku PL...
    serviceLinks: [
      { pageId: 'glasfaser-ausbau', label: 'Rozbudowa światłowodów' },
      { pageId: 'netzwerktechnik-wlan', label: 'Sieci i Wi‑Fi' },
      { pageId: 'messtechnik-fehlersuche', label: 'Pomiary i diagnostyka' },
      { pageId: 'service-wartung', label: 'Serwis i utrzymanie' }
    ],
    footerHeadings: {
      navigation: 'Nawigacja',
      services: 'Usługi',
      legal: 'Informacje prawne',
      language: 'Język',
      legalLinks: {
        impressum: 'Impressum',
        privacy: 'Polityka prywatności'
      }
    }
  }
};

export function getNavContent(locale: Locale): NavCopy {
  return navContent[locale] ?? navContent[defaultLocale];
}