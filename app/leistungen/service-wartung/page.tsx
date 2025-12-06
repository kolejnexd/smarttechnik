import type { Metadata } from 'next';
import Link from 'next/link';
import { defaultLocale, Locale } from '../../../lib/i18n';
import { serviceWartungContent } from '../../../lib/content/service-wartung';
import { getAbsoluteUrl, getLocalizedPathWithAnchor, getMetadataForPage } from '../../../lib/seo-config';

function buildJsonLd(locale: Locale) {
  const t = serviceWartungContent[locale];
  const meta = getMetadataForPage('service-wartung', locale);
  const pageUrl = getAbsoluteUrl('service-wartung', locale);
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebPage',
        '@id': `${pageUrl}#webpage`,
        url: pageUrl,
        name: meta.title,
        inLanguage: locale,
        isPartOf: {
          '@id': 'https://smarttechnik.eu/#website'
        },
        about: {
          '@id': 'https://smarttechnik.eu/#localbusiness'
        },
        description: meta.description,
        breadcrumb: {
          '@id': `${pageUrl}#breadcrumb`
        }
      },
      {
        '@type': 'Service',
        '@id': 'https://smarttechnik.eu/#service-service-wartung',
        name: 'Service & Wartung für Glasfaser- und Datennetze',
        provider: {
          '@id': 'https://smarttechnik.eu/#localbusiness'
        },
        serviceType: [
          'Service und Wartung von Glasfasernetzen',
          'Service und Wartung von Datennetzen',
          'Störungsdienst für Glasfaser- und Netzwerktechnik',
          'Dokumentationspflege',
          'Regelmäßige Prüfungen'
        ],
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
        url: pageUrl,
        inLanguage: locale,
        description:
          'Laufender Service und Wartung für Glasfaser-, LAN- und WLAN-Infrastrukturen im Rhein-Main-Gebiet – inklusive Prüfungen, Dokumentationspflege, Störungsdienst und Begleitung von Umbauten.'
      },
      {
        '@type': 'FAQPage',
        '@id': `${pageUrl}#faq`,
        url: pageUrl,
        inLanguage: locale,
        mainEntity: t.faq.items.map((item) => ({
          '@type': 'Question',
          name: item.question,
          acceptedAnswer: {
            '@type': 'Answer',
            text: item.answer
          }
        }))
      },
      {
        '@type': 'BreadcrumbList',
        '@id': `${pageUrl}#breadcrumb`,
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Startseite',
            item: getAbsoluteUrl('home', locale)
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'Leistungen',
            item: `${getAbsoluteUrl('home', locale)}#leistungen`
          },
          {
            '@type': 'ListItem',
            position: 3,
            name: 'Service & Wartung',
            item: pageUrl
          }
        ]
      }
    ]
  };
}

export const metadata: Metadata = getMetadataForPage('service-wartung', defaultLocale);

type PageProps = { params: { locale?: Locale } };

export default function ServiceWartungPage({ params }: PageProps) {
  const locale = params.locale ?? defaultLocale;
  const jsonLd = buildJsonLd(locale);
  const t = serviceWartungContent[locale];
  const link = (pageId: Parameters<typeof getLocalizedPathWithAnchor>[0], anchor?: string) =>
    getLocalizedPathWithAnchor(pageId, locale, anchor);

  return (
    <>
      <script
        id="schema-service-wartung"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <section className="hero">
        <div className="container hero-content">
          <h1>{t.hero.title}</h1>
          <p>
            {t.hero.bodyPrefix} <span className="brand">{t.hero.brand}</span> {t.hero.bodySuffix}
          </p>
          <ul className="hero-bullets">
            {t.hero.bullets.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <div className="hero-actions">
            <Link href={link('kontakt')} className="btn-primary">
              {t.hero.ctaPrimary}
            </Link>
            <Link href={link('home', '#leistungen')} className="btn-secondary">
              {t.hero.ctaSecondary}
            </Link>
          </div>
        </div>
      </section>

      <section className="section" id="warum-service">
        <div className="container">
          <header>
            <h2>{t.warum.title}</h2>
          </header>
          {t.warum.paragraphs.map((para) => (
            <p key={para}>{para}</p>
          ))}
        </div>
      </section>

      <section className="section soft" id="leistungen">
        <div className="container">
          <header>
            <h2>{t.leistungen.title}</h2>
          </header>
          <div className="grid two leistungen-grid">
            {t.leistungen.items.map((item) => (
              <article key={item.title} className="card">
                <h3>{item.title}</h3>
                <p>{item.body}</p>
                <ul>
                  {item.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
          <p className="inline-note">
            {t.leistungen.note}{' '}
            <Link href={link('messtechnik-fehlersuche')}>Messtechnik &amp; Fehlersuche</Link>.
          </p>
        </div>
      </section>

      <section className="section" id="servicevertraege">
        <div className="container">
          <header>
            <h2>{t.vertrag.title}</h2>
          </header>
          <p>
            {t.vertrag.lead}
          </p>
          <div className="grid four leistungen-grid">
            {t.vertrag.models.map((item) => (
              <article key={item.title} className="card">
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section soft" id="branchen">
        <div className="container">
          <header>
            <h2>{t.einsatz.title}</h2>
          </header>
          <div className="grid four branchen-grid">
            {t.einsatz.items.map((item) => (
              <article key={item.title} className="card">
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="prozess">
        <div className="container">
          <header>
            <h2>{t.prozess.title}</h2>
          </header>
          <ol className="prozess-steps">
            {t.prozess.steps.map((item) => (
              <li key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section soft" id="vorteile">
        <div className="container">
          <header>
            <h2>{t.benefits.title}</h2>
          </header>
        <ul className="benefits-list">
          {t.benefits.items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <p className="inline-note">
          {t.benefits.note}{' '}
          <Link href={link('glasfaser-ausbau')}>Glasfaser-Ausbau</Link>,{' '}
          <Link href={link('netzwerktechnik-wlan')}>Netzwerktechnik &amp; WLAN</Link> und{' '}
          <Link href={link('messtechnik-fehlersuche')}>Messtechnik &amp; Fehlersuche</Link>.
        </p>
        </div>
      </section>

      <section className="section" id="faq">
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

      <section className="section soft" id="cta">
        <div className="container">
          <header>
            <h2>{t.contact.title}</h2>
            <p className="lead">{t.contact.lead}</p>
          </header>
          <div className="hero-actions">
            <Link href={link('kontakt')} className="btn-primary">
              {t.contact.cta}
            </Link>
          </div>
          <p className="kontakt-inline">
            Direktkontakt:{' '}
            <a href={`tel:${t.contact.phones[0].replace(/\s+/g, '')}`}>{t.contact.phones[0]}</a> ·{' '}
            <a href={`tel:${t.contact.phones[1].replace(/\s+/g, '')}`}>{t.contact.phones[1]}</a> ·{' '}
            <a href={`mailto:${t.contact.email}`}>{t.contact.email}</a>
          </p>
        </div>
      </section>
    </>
  );
}
