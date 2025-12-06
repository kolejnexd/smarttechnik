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
  const t = homeContent[locale] || homeContent[defaultLocale];

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
        mainEntity:
          t.faq?.items?.map((item) => ({
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

type PageProps = { params: { locale?: Locale } };

export default function HomePage({ params }: PageProps) {
  const locale = params.locale ?? defaultLocale;
  const t = homeContent[locale] || homeContent[defaultLocale];

  if (!t) {
    console.error(`Błąd krytyczny: Brak tłumaczeń dla języka ${locale} oraz domyślnego.`);
    return null;
  }

  const jsonLd = buildJsonLd(locale);

  // --- NOWY KOMPONENT HERO: Definicja ikon SVG ---
  const icons = [
    // Ikona 1: Światłowód (Fiber)
    <svg viewBox="0 0 24 24" key="fiber" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
    </svg>,
    
    // Ikona 2: Sieć / Wi-Fi (POPRAWIONA)
    <svg viewBox="0 0 24 24" key="wifi" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 15.75a3.75 3.75 0 017.5 0M5.25 12.75a8.25 8.25 0 0113.5 0M2.25 9.75a12.75 12.75 0 0119.5 0" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 19.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
    </svg>,

    // Ikona 3: Pomiary (OTDR)
    <svg viewBox="0 0 24 24" key="otdr" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
    </svg>,

    // Ikona 4: Serwis / Narzędzia
    <svg viewBox="0 0 24 24" key="service" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.423 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.423 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437" />
    </svg>
  ];
  // --- KONIEC DEFINICJI IKON ---

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
        {/* Tło (Image i SVG) pozostaje bez zmian, aby było widoczne pod nową treścią */}
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

        {/* --- NOWA STRUKTURA TREŚCI HERO (Gemini Style) --- */}
        <div className="container">
          {/* Używamy diva z klasą hero-gemini wewnątrz istniejącej sekcji */}
          <div className="hero-gemini">
            {/* Eyebrow / "Pigułka" na górze */}
            <span className="hero-gemini__tag">
              {t.hero.eyebrow}
            </span>

            {/* Nagłówek - Centered */}
            <h1 className="hero-gemini__headline">
              {t.hero.title}
            </h1>

            {/* Lead Text */}
            <p className="hero-gemini__lead">
              {t.hero.lead}
            </p>

            {/* OKRĄGŁE IKONY (Grid) */}
            <div className="hero-gemini__icons-grid">
              {t.hero.bullets.map((item, index) => (
                <div key={index} className="hero-gemini__item">
                  {/* Okrąg z efektem szkła */}
                  <div className="hero-gemini__circle">
                    {/* Wybierz ikonę z tablicy icons, fallback do ostatniej */}
                    {icons[index] || icons[3]}
                  </div>
                  {/* Tekst pod ikoną */}
                  <span className="hero-gemini__label">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            {/* Przyciski */}
            <div className="hero-gemini__actions">
              <Link href="#kontakt" className="btn-primary">
                {t.hero.primaryCta}
              </Link>
              {/* Nowa klasa dla drugiego przycisku */}
              <Link href="#leistungen" className="btn-gemini-outline">
                {t.hero.secondaryCta}
              </Link>
            </div>
          </div>
        </div>
        {/* --- KONIEC NOWEJ STRUKTURY TREŚCI --- */}
      </section>

      <section className="section services" id="leistungen">
        {/* ... reszta sekcji bez zmian ... */}
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
