import type { Metadata } from 'next';
import Link from 'next/link';
import { defaultLocale, Locale } from '../../../lib/i18n';
import { netzwerktechnikWlanContent } from '../../../lib/content/netzwerktechnik-wlan';
import { getAbsoluteUrl, getLocalizedPathWithAnchor, getMetadataForPage } from '../../../lib/seo-config';

function buildJsonLd(locale: Locale) {
  const t = netzwerktechnikWlanContent[locale];
  const meta = getMetadataForPage('netzwerktechnik-wlan', locale);
  const pageUrl = getAbsoluteUrl('netzwerktechnik-wlan', locale);
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
        '@id': 'https://smarttechnik.eu/#service-netzwerktechnik-wlan',
        name: 'Netzwerktechnik & WLAN',
        provider: {
          '@id': 'https://smarttechnik.eu/#localbusiness'
        },
        serviceType: [
          'Netzwerktechnik',
          'LAN-Verkabelung',
          'WLAN-Planung',
          'WLAN-Ausleuchtung',
          'Netzwerk-Erweiterungen'
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
          'Planung, Installation und Erweiterung von Netzwerk- und WLAN-Infrastrukturen für Unternehmen im Rhein-Main-Gebiet – inklusive strukturierter Verkabelung, Netzwerkschränken, Access Points und Dokumentation.'
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
            name: 'Netzwerktechnik & WLAN',
            item: pageUrl
          }
        ]
      }
    ]
  };
}

export const metadata: Metadata = getMetadataForPage('netzwerktechnik-wlan', defaultLocale);

type PageProps = { params: { locale?: Locale } };

export default function NetzwerktechnikPage({ params }: PageProps) {
  const locale = params.locale ?? defaultLocale;
  const jsonLd = buildJsonLd(locale);
  const t = netzwerktechnikWlanContent[locale];
  const link = (pageId: Parameters<typeof getLocalizedPathWithAnchor>[0], anchor?: string) =>
    getLocalizedPathWithAnchor(pageId, locale, anchor);
  return (
    <>
      <script
        id="schema-netzwerktechnik-wlan"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <section className="hero">
        <div className="container hero-content">
          <h1>{t.hero.title}</h1>
          <p>
            {t.hero.bodyPrefix} <span className="brand">{t.hero.brand}</span>{' '}
            {t.hero.bodySuffix}
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
            <Link href={link('glasfaser-ausbau')} className="btn-secondary">
              {t.hero.ctaSecondary}
            </Link>
          </div>
        </div>
      </section>

      <section className="section" id="warum-netzwerktechnik">
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
            <h2>{t.leistungenNetz.title}</h2>
          </header>
          <div className="grid two leistungen-grid">
            {t.leistungenNetz.items.map((item) => (
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
        </div>
      </section>

      <section className="section" id="wlan">
        <div className="container">
          <header>
            <h2>{t.wlan.title}</h2>
          </header>
          <div className="grid two leistungen-grid">
            {t.wlan.items.map((item) => (
              <article key={item.title} className="card">
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </article>
            ))}
          </div>
          <p className="inline-note">
            {t.wlan.note}{' '}
            <Link href={link('glasfaser-ausbau')}>Glasfaser-Ausbau</Link>.
          </p>
        </div>
      </section>

      <section className="section soft" id="branchen">
        <div className="container">
          <header>
            <h2>{t.branchen.title}</h2>
          </header>
          <div className="grid four branchen-grid">
            {t.branchen.items.map((item) => (
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
            <Link href={link('service-wartung')}>Service &amp; Wartung</Link>.
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

      <section className="section soft" id="kontakt">
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
            Direktkontakt: <a href={`tel:${t.contact.phones[0].replace(/\s+/g, '')}`}>{t.contact.phones[0]}</a> ·{' '}
            <a href={`tel:${t.contact.phones[1].replace(/\s+/g, '')}`}>{t.contact.phones[1]}</a> ·{' '}
            <a href={`mailto:${t.contact.email}`}>{t.contact.email}</a>
          </p>
        </div>
      </section>
    </>
  );
}
