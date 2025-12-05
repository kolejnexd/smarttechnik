import { Locale, defaultLocale, locales } from './i18n';

export type PageId =
  | 'home'
  | 'glasfaser-ausbau'
  | 'netzwerktechnik-wlan'
  | 'messtechnik-fehlersuche'
  | 'service-wartung'
  | 'branchen-referenzen'
  | 'faq'
  | 'kontakt'
  | 'ueber-uns'
  | 'impressum'
  | 'datenschutz';

type LocaleMap<T> = Record<Locale, T>;

interface SeoEntry {
  slug: LocaleMap<string>;
  title: LocaleMap<string>;
  description: LocaleMap<string>;
}

const seoConfig: Record<PageId, SeoEntry> = {
  home: {
    slug: { de: '', en: '', pl: '' },
    title: {
      de: 'smaRTtechnik – Glasfaser- & Netzwerktechnik für Frankfurt & Rhein-Main',
      en: 'smaRTtechnik – Fiber Optic & Network Engineering in Frankfurt & Rhein-Main',
      pl: 'smaRTtechnik – Światłowody i sieci komputerowe Frankfurt / Rhein-Main'
    },
    description: {
      de: 'smaRTtechnik Lebek & Stawczyk GbR plant, baut und misst zuverlässige Glasfaser- und Datennetze für Stadtwerke, Unternehmen und Wohnungsbau im Rhein-Main-Gebiet. Planung, Spleißen, Messtechnik, Service.',
      en: 'smaRTtechnik Lebek & Stawczyk GbR designs, builds and tests reliable fiber optic and data networks for utilities, businesses and residential developments across the Frankfurt / Rhein-Main region. FTTH, structured cabling, professional measurements and service.',
      pl: 'smaRTtechnik Lebek & Stawczyk GbR projektuje, buduje i mierzy niezawodne sieci światłowodowe oraz LAN dla zakładów komunalnych, firm i inwestycji mieszkaniowych w regionie Frankfurt / Rhein-Main. FTTH, okablowanie strukturalne, pomiary i serwis.'
    }
  },

  'glasfaser-ausbau': {
    slug: {
      de: 'leistungen/glasfaser-ausbau',
      en: 'leistungen/glasfaser-ausbau',
      pl: 'leistungen/glasfaser-ausbau'
    },
    title: {
      de: 'Glasfaser-Ausbau & FTTH-Spleißen in Frankfurt & Rhein-Main | smaRTtechnik',
      en: 'Fiber Optic Deployment & FTTH Splicing in Frankfurt | smaRTtechnik',
      pl: 'Rozbudowa światłowodów i spawanie FTTH – Frankfurt / Rhein-Main'
    },
    description: {
      de: 'Planung, Spleißen, Patchen und Dokumentation von Glasfaserstrecken vom Hausanschluss bis zum PoP. FTTH/FTTB-Projekte für Stadtwerke, Carrier und Wohnungswirtschaft im Rhein-Main-Gebiet.',
      en: 'Comprehensive fiber optic deployment: planning, FTTH/FTTB splicing, patching and documentation from building entry to PoP. Trusted partner for utilities, carriers and residential developers in Frankfurt / Rhein-Main.',
      pl: 'Kompleksowa rozbudowa światłowodów: projektowanie, spawanie FTTH/FTTB, patchowanie i dokumentacja – od przyłącza budynku po węzeł PoP. Sprawdzony partner dla zakładów komunalnych, operatorów i deweloperów w regionie Frankfurt / Rhein-Main.'
    }
  },

  'netzwerktechnik-wlan': {
    slug: {
      de: 'leistungen/netzwerktechnik-wlan',
      en: 'leistungen/netzwerktechnik-wlan',
      pl: 'leistungen/netzwerktechnik-wlan'
    },
    title: {
      de: 'Netzwerktechnik & WLAN für Unternehmen in Frankfurt | smaRTtechnik',
      en: 'Structured Cabling & Business Wi-Fi Solutions in Frankfurt | smaRTtechnik',
      pl: 'Sieci LAN i profesjonalne Wi-Fi dla firm – Frankfurt / Rhein-Main'
    },
    description: {
      de: 'Planung und Aufbau von strukturierter Gebäudeverkabelung, Switches, Firewalls und professioneller WLAN-Ausleuchtung für Büros, Hallen und Rechenräume im Rhein-Main-Gebiet.',
      en: 'Professional design and installation of structured cabling, LAN networks, switches, firewalls and enterprise-grade Wi-Fi surveys for offices, warehouses and data centers across Frankfurt / Rhein-Main.',
      pl: 'Projektujemy i wdrażamy okablowanie strukturalne, sieci LAN, przełączniki, firewalle oraz profesjonalne pomiary i pokrycie Wi-Fi dla biur, magazynów i serwerowni w regionie Frankfurt / Rhein-Main.'
    }
  },

  'messtechnik-fehlersuche': {
    slug: {
      de: 'leistungen/messtechnik-fehlersuche',
      en: 'leistungen/messtechnik-fehlersuche',
      pl: 'leistungen/messtechnik-fehlersuche'
    },
    title: {
      de: 'Glasfaser-Messtechnik & Fehlersuche (OTDR, Dämpfung) | smaRTtechnik',
      en: 'Fiber Measurement & Fault Diagnostics (OTDR, Loss Testing) | smaRTtechnik',
      pl: 'Pomiary światłowodów i diagnostyka usterek (OTDR, tłumienność)'
    },
    description: {
      de: 'Präzise OTDR-, Leistungs- und Dämpfungsmessungen mit zertifizierten Geräten. Fehlerlokalisierung, Abnahmeprotokolle und Dokumentation für bestehende Glasfaser- und Kupfernetze.',
      en: 'Certified OTDR, power and loss testing for fiber networks. Precise fault location, acceptance measurements and complete documentation for new and existing infrastructure.',
      pl: 'Wykonujemy certyfikowane pomiary OTDR, mocy i tłumienności. Precyzyjna lokalizacja usterek, pomiary odbiorcze oraz pełna dokumentacja dla nowych i istniejących sieci światłowodowych.'
    }
  },

  'service-wartung': {
    slug: {
      de: 'leistungen/service-wartung',
      en: 'leistungen/service-wartung',
      pl: 'leistungen/service-wartung'
    },
    title: {
      de: 'Service & Wartung für Glasfaser- und Datennetze | smaRTtechnik',
      en: 'Service & Maintenance for Fiber and LAN Networks | smaRTtechnik',
      pl: 'Serwis i utrzymanie sieci światłowodowych i LAN | smaRTtechnik'
    },
    description: {
      de: 'Individuelle Service- und Wartungsverträge für Glasfaser- und LAN-Infrastrukturen. 24/7-Bereitschaft nach Vereinbarung, schnelle Entstörung und laufende Betreuung von Netzen im Rhein-Main-Gebiet.',
      en: 'Flexible service and maintenance contracts for fiber optic and LAN infrastructures. 24/7 on-call support (optional), rapid troubleshooting and continuous network monitoring in the Frankfurt / Rhein-Main region.',
      pl: 'Oferujemy elastyczne umowy serwisowe dla sieci światłowodowych i LAN. Całodobowa gotowość (opcjonalnie), szybkie usuwanie awarii oraz stała opieka nad infrastrukturą w regionie Frankfurt / Rhein-Main.'
    }
  },

  'branchen-referenzen': {
    slug: {
      de: 'branchen-referenzen',
      en: 'branchen-referenzen',
      pl: 'branchen-referenzen'
    },
    title: {
      de: 'Branchen & Referenzen – Glasfaser- & Netzwerktechnik Rhein-Main',
      en: 'Industries & References – Fiber & Network Projects in Frankfurt',
      pl: 'Branże i realizacje – sieci światłowodowe i LAN Frankfurt / Rhein-Main'
    },
    description: {
      de: 'Projekte für Stadtwerke, Carrier, Industrie, Bürogebäude und Wohnungsbau im Raum Frankfurt. Auswahl realisierter Glasfaser- und Netzwerkinstallationen mit messbaren Ergebnissen.',
      en: 'Selected fiber and network installations for utilities, carriers, industry, office buildings and residential projects in the Frankfurt / Rhein-Main area.',
      pl: 'Realizacje dla zakładów komunalnych, operatorów, przemysłu, biurowców i inwestycji mieszkaniowych w regionie Frankfurt / Rhein-Main.'
    }
  },

  faq: {
    slug: { de: 'faq', en: 'faq', pl: 'faq' },
    title: {
      de: 'FAQ – Häufige Fragen zu Glasfaser- & Netzwerktechnik | smaRTtechnik',
      en: 'FAQ – Fiber & Network Services | smaRTtechnik',
      pl: 'FAQ – pytania o światłowody i sieci komputerowe | smaRTtechnik'
    },
    description: {
      de: 'Antworten auf häufige Fragen zu Planung, Ausbau, Messtechnik, Service und Zusammenarbeit mit smaRTtechnik im Raum Frankfurt / Rhein-Main.',
      en: 'Answers to common questions about planning, fiber deployment, measurements, troubleshooting and working with smaRTtechnik in the Frankfurt / Rhein-Main region.',
      pl: 'Odpowiedzi na najczęstsze pytania dotyczące projektowania, budowy, pomiarów i serwisu światłowodów oraz sieci LAN w regionie Frankfurt / Rhein-Main.'
    }
  },

  kontakt: {
    slug: { de: 'kontakt', en: 'kontakt', pl: 'kontakt' },
    title: {
      de: 'Kontakt & Anfahrt – smaRTtechnik Lebek & Stawczyk GbR',
      en: 'Contact & Directions – smaRTtechnik near Frankfurt',
      pl: 'Kontakt i dojazd – smaRTtechnik pod Frankfurtem'
    },
    description: {
      de: 'Kontakt zu smaRTtechnik in Rodenbach bei Frankfurt: E-Mail, Telefon, Kontaktformular und Anfahrtsbeschreibung für Projekte im Rhein-Main-Gebiet.',
      en: 'Contact smaRTtechnik in Rodenbach near Frankfurt: email, phone, contact form and directions for fiber and network projects in the Rhein-Main region.',
      pl: 'Skontaktuj się ze smaRTtechnik w Rodenbach koło Frankfurtu: e-mail, telefon, formularz kontaktowy i dojazd dla projektów światłowodowych i LAN w regionie Frankfurt / Rhein-Main.'
    }
  },

  'ueber-uns': {
    slug: { de: 'ueber-uns', en: 'ueber-uns', pl: 'ueber-uns' },
    title: {
      de: 'Über uns – smaRTtechnik Lebek & Stawczyk GbR',
      en: 'About Us – smaRTtechnik Fiber & Network Experts',
      pl: 'O nas – eksperci od światłowodów i sieci Frankfurt / Rhein-Main'
    },
    description: {
      de: 'Regionaler Spezialist für Glasfaser- und Netzwerktechnik mit über 10 Jahren Erfahrung im Rhein-Main-Gebiet. Zertifizierte Techniker, saubere Dokumentation und zuverlässige Projektabwicklung.',
      en: 'Regional fiber optic and network specialists with 10+ years of experience in the Frankfurt / Rhein-Main region. Certified technicians, precise documentation and reliable project execution.',
      pl: 'Lokalny zespół specjalistów z ponad 10-letnim doświadczeniem w projektowaniu, budowie i serwisie sieci światłowodowych oraz LAN w regionie Frankfurt / Rhein-Main. Certyfikowani technicy i rzetelna dokumentacja.'
    }
  },

  impressum: {
    slug: { de: 'impressum', en: 'impressum', pl: 'impressum' },
    title: {
      de: 'Impressum | smaRTtechnik',
      en: 'Impressum | smaRTtechnik',
      pl: 'Impressum | smaRTtechnik'
    },
    description: {
      de: 'Impressum der smaRTtechnik Lebek & Stawczyk GbR.',
      en: 'Imprint of smaRTtechnik Lebek & Stawczyk GbR.',
      pl: 'Impressum firmy smaRTtechnik Lebek & Stawczyk GbR.'
    }
  },

  datenschutz: {
    slug: { de: 'datenschutz', en: 'datenschutz', pl: 'datenschutz' },
    title: {
      de: 'Datenschutz | smaRTtechnik',
      en: 'Privacy Policy | smaRTtechnik',
      pl: 'Polityka prywatności | smaRTtechnik'
    },
    description: {
      de: 'Datenschutzhinweise der smaRTtechnik Lebek & Stawczyk GbR.',
      en: 'Privacy policy information of smaRTtechnik Lebek & Stawczyk GbR.',
      pl: 'Informacje dotyczące ochrony danych osobowych w smaRTtechnik Lebek & Stawczyk GbR.'
    }
  }
};

const siteOrigin = 'https://smarttechnik.eu';

function combinePath(locale: Locale, slug?: string): string {
  const cleanSlug = (slug ?? '').replace(/^\/+/, '').replace(/\/+$/, '');
  if (locale === defaultLocale) {
    return cleanSlug ? `/${cleanSlug}` : '/';
  }
  return cleanSlug ? `/${locale}/${cleanSlug}` : `/${locale}`;
}

export function getPageSeo(pageId: PageId, locale: Locale): SeoEntry {
  return seoConfig[pageId];
}

export function getLocalizedPath(pageId: PageId, locale: Locale): string {
  const entry = seoConfig[pageId];
  const safeLocale = locales.includes(locale) ? locale : defaultLocale;
  const slug = entry.slug[safeLocale] ?? entry.slug[defaultLocale] ?? '';
  return combinePath(safeLocale, slug);
}

export function getLocalizedPathWithAnchor(
  pageId: PageId,
  locale: Locale,
  anchor?: string
): string {
  const base = getLocalizedPath(pageId, locale);
  if (!anchor) return base;
  const cleaned = anchor.startsWith('#') ? anchor : `#${anchor}`;
  return `${base}${cleaned}`;
}

export function getAbsoluteUrl(pageId: PageId, locale: Locale): string {
  return `${siteOrigin}${getLocalizedPath(pageId, locale)}`;
}

export function getHreflangLinks(pageId: PageId): Record<string, string> {
  const entry = seoConfig[pageId];
  const links: Record<string, string> = {};
  locales.forEach((loc) => {
    const slug = entry.slug[loc] ?? entry.slug[defaultLocale] ?? '';
    links[loc] = combinePath(loc, slug);
  });
  links['x-default'] = combinePath(defaultLocale, entry.slug[defaultLocale]);
  return links;
}

export function getMetadataForPage(pageId: PageId, locale: Locale) {
  const entry = seoConfig[pageId];
  const canonical = getLocalizedPath(pageId, locale);
  return {
    title: entry.title[locale],
    description: entry.description[locale],
    canonical,
    alternates: {
      canonical,
      languages: getHreflangLinks(pageId)
    }
  };
}
