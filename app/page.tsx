import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { defaultLocale, Locale } from '../lib/i18n';
import { homeContent } from '../lib/content/home';
import { getAbsoluteUrl, getLocalizedPath, getMetadataForPage } from '../lib/seo-config';
import CountingStat from '../components/CountingStat';
import ImageReveal from '../components/ImageReveal';

const qualityCopy: Record<
  Locale,
  {
    title: string;
    body: string;
    accent: string;
  }
> = {
  de: {
    title: 'Neugier wecken: X-Ray Blick in den Verteiler',
    body:
      'Geschlossen wirkt aufgeräumt, offen noch präziser: Mit dem Slider zeigen Sie, wie sauber Spleißarbeiten und Pigtails geführt sind – auch dort, wo sonst niemand hinschaut.',
    accent: 'Innenleben sichtbar machen'
  },
  en: {
    title: 'Curious? See inside the cabinet',
    body:
      'Closed looks tidy, open looks precise: The slider reveals how clean splices and pigtails are routed – even where no one usually looks.',
    accent: 'Reveal inside'
  },
  pl: {
    title: 'Zajrzyj do środka skrzynki',
    body:
      'Zamknięta wygląda schludnie, otwarta pokazuje precyzję: suwak odsłania, jak czysto prowadzone są spawy i pigtaily – nawet tam, gdzie nikt nie zagląda.',
    accent: 'Odsłoń wnętrze'
  }
};

const galleryCopy: Record<
  Locale,
  {
    title: string;
    lead: string;
  }
> = {
  de: {
    title: 'Technische Galerie',
    lead: 'Cable-Management, saubere Racks und dokumentierte Wege – ein Blick für IT-Entscheider.'
  },
  en: {
    title: 'Technical gallery',
    lead: 'Cable management, tidy racks and documented routes – quick evidence for IT decision makers.'
  },
  pl: {
    title: 'Galeria techniczna',
    lead: 'Porządek w kablach, czyste szafy i udokumentowane trasy – szybki dowód dla decydentów IT.'
  }
};

function buildJsonLd(locale: Locale) {
  // POPRAWKA: Użyj domyślnego języka, jeśli wybrany nie istnieje
  const t = homeContent[locale] || homeContent[defaultLocale];
  
  // Zabezpieczenie krytyczne: jeśli nadal nie ma treści, zwróć pusty obiekt, aby nie zepsuć strony
  if (!t) return {};

  const pageUrl = getAbsoluteUrl('home', locale);
  const imageUrl = 'https://smarttechnik.eu/assets/images/glasfaser-ausbau-frankfurt-skyline-hero.webp';
  
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebPage',
        '@id': `${pageUrl}#webpage`,
        url: pageUrl,
        name: getMetadataForPage('home', locale).title,
        inLanguage: locale,
        isPartOf: {
          '@id': 'https://smarttechnik.eu/#website'
        },
        about: {
          '@id': 'https://smarttechnik.eu/#localbusiness'
        },
        description: getMetadataForPage('home', locale).description,
        potentialAction: {
          '@type': 'ContactAction',
          target: getAbsoluteUrl('kontakt', locale),
          name: 'Projektanfrage senden'
        }
      },
      {
        '@type': 'WebSite',
        '@id': 'https://smarttechnik.eu/#website',
        url: 'https://smarttechnik.eu/',
        name: 'smaRTtechnik Lebek & Stawczyk GbR',
        inLanguage: locale
      },
      {
        '@type': 'LocalBusiness',
        '@id': 'https://smarttechnik.eu/#localbusiness',
        name: 'smaRTtechnik Lebek & Stawczyk GbR',
        legalName: 'smaRTtechnik Lebek & Stawczyk GbR',
        image: imageUrl,
        url: 'https://smarttechnik.eu/',
        telephone: ['+49-157-31685721', '+49-157-82854321'],
        email: 'info@smarttechnik.eu',
        address: {
          '@type': 'PostalAddress',
          streetAddress: 'Odenwaldstr. 14',
          postalCode: '63517',
          addressLocality: 'Rodenbach',
          addressRegion: 'Hessen',
          addressCountry: 'DE'
        },
        priceRange: '$$',
        areaServed: [
          {
            '@type': 'City',
            name: 'Frankfurt am Main'
          },
          {
            '@type': 'AdministrativeArea',
            name: 'Rhein-Main-Gebiet'
          }
        ],
        description:
          'Dienstleister für Glasfaser- und Netzwerktechnik: Planung, Spleißen, Messung und Wartung von Glasfaser- und Datennetzen für Stadtwerke, Netzbetreiber, Wohnungsbau, Unternehmen und IT-Dienstleister im Rhein-Main-Gebiet.',
        serviceType: [
          'Glasfaser-Ausbau und Spleißen',
          'FTTH- und FTTB-Projekte',
          'Netzwerktechnik und strukturierte Verkabelung',
          'WLAN-Planung und -Ausleuchtung',
          'OTDR-, Leistungs- und Dämpfungsmessungen',
          'Fehlersuche und Störungsdienst',
          'Service- und Wartungsverträge für Netze'
        ]
      },
      {
        '@type': 'FAQPage',
        '@id': `${pageUrl}#faq`,
        url: pageUrl,
        inLanguage: locale,
        // Używamy optional chaining (?.) dla bezpieczeństwa
        mainEntity: t.faq?.items?.map((item) => ({
          '@type': 'Question',
          name: item.question,
          acceptedAnswer: {
            '@type': 'Answer',
            text: item.answer
          }
        })) || []
      },
      {
        '@type': 'BreadcrumbList',
        '@id': `${pageUrl}#breadcrumb`,
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Startseite',
            item: pageUrl
          }
        ]
      }
    ]
  };
}

export const metadata: Metadata = getMetadataForPage('home', defaultLocale);

export default function HomePage({ params }: { params?: { locale?: Locale } } = {}) {
  const locale = (params?.locale as Locale) ?? defaultLocale;
  
  // POPRAWKA: Pobieranie treści z fallbackiem
  const t = homeContent[locale] || homeContent[defaultLocale];

  // Jeśli nawet domyślny język nie działa, zwróć null (lub komponent błędu), aby nie wywołać crasha
  if (!t) {
    console.error(`Błąd krytyczny: Brak tłumaczeń dla języka ${locale} oraz domyślnego.`);
    return null; 
  }

  const jsonLd = buildJsonLd(locale);
  const heroHighlights = t.hero.bullets.slice(0, 2);
  const heroPills = t.hero.bullets.slice(2);
  const servicesMedia = [
    {
      src: '/img/glasfaser-spleisskassette-spleissarbeiten-detail.webp',
      alt: 'Glasfaser Spleisskassette im Detail'
    },
    {
      src: '/img/lwl-patchfeld-glasfaserverteiler-19-zoll-rack.webp',
      alt: 'LWL Patchfeld im 19 Zoll Rack'
    },
    {
      src: '/img/glasfaser-otdr-messung-exfo-maxtester.webp',
      alt: 'OTDR Messgerät EXFO MaxTester'
    },
    {
      src: '/img/industrie-netzwerkinstallation-kabeltrassen-hebebuehne.webp',
      alt: 'Industrie Netzwerkinstallation mit Kabeltrassen und Hebebühne'
    }
  ];
  const quality = qualityCopy[locale] || qualityCopy[defaultLocale];
  const galleryText = galleryCopy[locale] || galleryCopy[defaultLocale];
  const galleryItems = [
    {
      src: '/img/strukturierte-verkabelung-kabelmanagement-patchpanel.webp',
      alt: 'Strukturierte Verkabelung und Kabelmanagement am Patchpanel',
      className: 'tall'
    },
    {
      src: '/img/netzwerkschrank-wandgehaeuse-switch-verkabelung.webp',
      alt: 'Netzwerkschrank als Wandgehäuse mit Switch und Verkabelung',
      className: 'wide'
    },
    {
      src: '/img/glasfaser-hausanschluss-apl-hekatron-bmz.webp',
      alt: 'Glasfaser Hausanschluss APL in Hekatron BMZ Umgebung',
      className: 'square'
    }
  ];

  return (
    <>
      <script id="smarttechnik-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <section className="hero hero--neon" id="top">
        <div className="hero__bg">
          <Image
            src="/img/glasfaser-ausbau-frankfurt-skyline-hero.webp"
            alt="Frankfurter Skyline mit Glasfaser-Ausbau"
            fill
            priority
            sizes="100vw"
            className="hero__bg-img"
          />
          <div className="hero__overlay" />
          <svg className="fiber-lines" viewBox="0 0 1440 640" aria-hidden="true" preserveAspectRatio="none">
            <defs>
              <linearGradient id="fiberGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#6ac1ff" />
                <stop offset="50%" stopColor="#7a6dff" />
                <stop offset="100%" stopColor="#e45ca5" />
              </linearGradient>
            </defs>
            <path className="fiber-line" d="M0 520 C 220 460, 520 400, 780 460 S 1200 600, 1440 520" stroke="url(#fiberGradient)" strokeWidth="3" fill="none" />
            <path className="fiber-line" d="M0 560 C 260 520, 520 500, 820 560 S 1200 660, 1440 560" stroke="url(#fiberGradient)" strokeWidth="2.4" fill="none" />
            <path className="fiber-line" d="M0 600 C 280 580, 560 560, 840 600 S 1220 700, 1440 600" stroke="url(#fiberGradient)" strokeWidth="2" fill="none" />
          </svg>
        </div>
        <div className="container hero-content hero-content--center">
          <div className="hero__copy">
            <span className="eyebrow eyebrow--ghost">{t.hero.eyebrow}</span>
            <h1 className="hero__headline">{t.hero.title}</h1>
            <p className="hero__lead">{t.hero.lead}</p>

            <div className="hero-glass">
              {heroHighlights.map((item) => (
                <div key={item} className="hero-glass-card">
                  <span className="hero-badge__dot" aria-hidden="true" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
            {heroPills.length > 0 && (
              <div className="hero-pills">
                {heroPills.map((item) => (
                  <span key={item} className="hero-pill">
                    {item}
                  </span>
                ))}
              </div>
            )}
            <div className="hero-actions hero-actions--center">
              <Link href="#kontakt" className="btn-primary btn-primary--wide">
                {t.hero.primaryCta}
              </Link>
              <Link href="#leistungen" className="btn-secondary btn-secondary--outline">
                {t.hero.secondaryCta}
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section services" id="leistungen">
        <div className="container">
          <header className="section-header">
            <h2>{t.leistungen.title}</h2>
            <p className="lead">{t.leistungen.lead}</p>
          </header>
          <div className="services-grid">
            {t.leistungen.items.map((item, index) => {
              const media = servicesMedia[index] || servicesMedia[servicesMedia.length - 1];
              return (
                <article key={item.title} className="smart-card service-card">
                  <div className="service-card__media">
                    <Image
                      src={media.src}
                      alt={media.alt}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 320px"
                      className="service-card__img"
                    />
                  </div>
                  <div className="service-card__body">
                    <h3>{item.title}</h3>
                    <p>{item.body}</p>
                    <ul className="service-card__list">
                      {item.bullets.map((bullet) => (
                        <li key={bullet}>{bullet}</li>
                      ))}
                    </ul>
                    <Link href={getLocalizedPath(item.pageId, locale)} className="text-link arrow-link">
                      {item.linkText}
                    </Link>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section quality-section" id="qualitaet">
        <div className="container quality-grid">
          <div className="smart-card quality-copy">
            <span className="eyebrow">{quality.accent}</span>
            <h2>{quality.title}</h2>
            <p>{quality.body}</p>
            <div className="quality-captions">
              <div>
                <strong>Estetyka / Außen</strong>
                <p className="muted">lwl-wandverteiler-geschlossen-installation.webp</p>
              </div>
              <div>
                <strong>Technik / Innen</strong>
                <p className="muted">lwl-spleissbox-offen-pigtails-innenleben.webp</p>
              </div>
            </div>
          </div>
          <div className="smart-card quality-visual">
            <ImageReveal
              topSrc="/img/lwl-wandverteiler-geschlossen-installation.webp"
              topAlt="LWL Wandverteiler geschlossen montiert"
              bottomSrc="/img/lwl-spleissbox-offen-pigtails-innenleben.webp"
              bottomAlt="LWL Spleissbox offen mit sauberem Innenleben"
              initial={88}
            />
          </div>
        </div>
      </section>

      <section className="section metrics" id="fakten">
        <div className="container">
          <header className="section-header">
            <h2>{t.facts.title}</h2>
            <p className="lead">{t.facts.note}</p>
          </header>
          <div className="metrics-grid">
            {t.facts.items.map((item) => (
              <article key={item.value} className="metric-card">
                <CountingStat value={item.value} />
                <p>{item.label}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section gallery-section" id="galerie">
        <div className="container">
          <header className="section-header">
            <h2>{galleryText.title}</h2>
            <p className="lead">{galleryText.lead}</p>
          </header>
        </div>
        <div className="masonry-grid">
          {galleryItems.map((item) => (
            <figure key={item.src} className={`gallery-item ${item.className}`}>
              <Image src={item.src} alt={item.alt} fill sizes="(max-width: 768px) 100vw, 480px" className="gallery-img" />
              <div className="gallery-hover" aria-hidden="true">
                <span>🔍</span>
              </div>
              <figcaption>{item.alt}</figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section className="section alt" id="faq">
        <div className="container">
          <header>
            <h2>{t.faq.title}</h2>
          </header>
          <div className="faq-list">
            {t.faq.items.map((item) => (
              <article key={item.question} className="faq-item">
                <h3>{item.question}</h3>
                <p>{item.answer}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section soft" id="kontakt">
        <div className="container">
          <header>
            <h2>{t.contact.title}</h2>
            <p className="lead">{t.contact.lead}</p>
          </header>
          <div className="hero-actions">
            <Link href={getLocalizedPath('kontakt', locale)} className="btn-primary">
              {t.contact.primaryCta}
            </Link>
          </div>
          <div className="smart-card kontakt-block">
            <p>
              <strong>{t.contact.company}</strong>
            </p>
            <p>{t.contact.addressLine}</p>
            <p>
              {t.contact.emailLabel} <a href={`mailto:${t.contact.email}`}>{t.contact.email}</a>
            </p>
            <p>
              {t.contact.phoneLabel}:{' '}
              {t.contact.phones.map((phone, index) => (
                <span key={phone}>
                  <a href={`tel:${phone.replace(/\s+/g, '')}`}>{phone}</a>
                  {index === 0 ? ' · ' : ''}
                </span>
              ))}
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
