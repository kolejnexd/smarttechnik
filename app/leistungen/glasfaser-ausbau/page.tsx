import type { Metadata } from 'next';
import Link from 'next/link';
import { defaultLocale, Locale } from '../../../lib/i18n';
import { glasfaserAusbauContent } from '../../../lib/content/glasfaser-ausbau';
import { getAbsoluteUrl, getLocalizedPathWithAnchor, getMetadataForPage } from '../../../lib/seo-config';

function buildJsonLd(locale: Locale) {
  const t = glasfaserAusbauContent[locale];
  const meta = getMetadataForPage('glasfaser-ausbau', locale);
  const pageUrl = getAbsoluteUrl('glasfaser-ausbau', locale);
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
        '@id': 'https://smarttechnik.eu/#service-glasfaser-ausbau',
        name: 'Glasfaser-Ausbau & Spleißen',
        provider: {
          '@id': 'https://smarttechnik.eu/#localbusiness'
        },
        serviceType: [
          'Glasfaser-Ausbau',
          'FTTH-Ausbau',
          'FTTB-Ausbau',
          'Glasfaser-Spleißen',
          'Glasfaser-Messtechnik'
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
          'Planung, Verlegung, Spleißen, Messung und Dokumentation von Glasfasernetzen (FTTH und FTTB) für Stadtwerke, Netzbetreiber, Wohnungsbaugesellschaften und Unternehmen im Rhein-Main-Gebiet.',
        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          name: 'Leistungspakete im Glasfaser-Ausbau',
          itemListElement: [
            {
              '@type': 'Offer',
              name: 'Planung & Trassenkonzept'
            },
            {
              '@type': 'Offer',
              name: 'Glasfaser verlegen & einblasen'
            },
            {
              '@type': 'Offer',
              name: 'Spleißen & Patchen von Glasfasern'
            },
            {
              '@type': 'Offer',
              name: 'Abnahmemessung & Dokumentation'
            }
          ]
        }
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
            name: 'Glasfaser-Ausbau',
            item: pageUrl
          }
        ]
      }
    ]
  };
}

export const metadata: Metadata = getMetadataForPage('glasfaser-ausbau', defaultLocale);

export default function GlasfaserAusbauPage({ params }: { params?: { locale?: Locale } } = {}) {
  const locale = (params?.locale as Locale) ?? defaultLocale;
  const jsonLd = buildJsonLd(locale);
  const t = glasfaserAusbauContent[locale];
  const link = (pageId: Parameters<typeof getLocalizedPathWithAnchor>[0], anchor?: string) =>
    getLocalizedPathWithAnchor(pageId, locale, anchor);
  return (
    <>
      <script
        id="schema-glasfaser-ausbau"
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
            <Link href={link('home', '#leistungen')} className="btn-secondary">
              {t.hero.ctaSecondary}
            </Link>
          </div>
        </div>
      </section>

      <section className="section" id="was-ist-glasfaser-ausbau">
        <div className="container">
          <header>
            <h2>{t.whatIs.title}</h2>
          </header>
          {t.whatIs.paragraphs.map((para) => (
            <p key={para}>
              {para}
            </p>
          ))}
        </div>
      </section>

      <section className="section soft" id="leistungen">
        <div className="container">
          <header>
            <h2>Unsere Leistungen im Glasfaser-Ausbau</h2>
          </header>
          <div className="grid two leistungen-grid">
            {t.packages.map((item) => (
              <article key={item.title} className="card">
                <h3>{item.title}</h3>
                <p>{item.body}</p>
                <ul>
                  {item.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
                {item.inlineNote ? (
                  <p className="inline-note">
                    {item.inlineNote}{' '}
                    <Link href={link('messtechnik-fehlersuche')}>Messtechnik &amp; Fehlersuche</Link>.
                  </p>
                ) : null}
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="einsatz">
        <div className="container">
          <header>
            <h2>{t.einsatz.title}</h2>
            <p className="lead">{t.einsatz.lead}</p>
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

      <section className="section soft" id="prozess">
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

      <section className="section" id="vorteile">
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
            {t.benefits.notePrefix}{' '}
            <Link href={link('netzwerktechnik-wlan')}>Netzwerktechnik &amp; WLAN</Link> und{' '}
            <Link href={link('service-wartung')}>Service &amp; Wartung</Link>.
          </p>
        </div>
      </section>

      <section className="section soft" id="faq">
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

      <section className="section" id="kontakt">
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
            {t.contact.phoneIntro}{' '}
            <a href={`tel:${t.contact.phones[0].replace(/\\s+/g, '')}`}>{t.contact.phones[0]}</a> oder{' '}
            <a href={`tel:${t.contact.phones[1].replace(/\\s+/g, '')}`}>{t.contact.phones[1]}</a> ·{' '}
            <a href={`mailto:${t.contact.email}`}>{t.contact.email}</a>
          </p>
        </div>
      </section>
    </>
  );
}
