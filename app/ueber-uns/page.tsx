import type { Metadata } from 'next';
import Link from 'next/link';
import { Locale, defaultLocale } from '../../lib/i18n';
import { ueberUnsContent } from '../../lib/content/ueber-uns';
import { getAbsoluteUrl, getLocalizedPathWithAnchor, getMetadataForPage } from '../../lib/seo-config';

function buildJsonLd(locale: Locale) {
  const t = ueberUnsContent[locale];
  const meta = getMetadataForPage('ueber-uns', locale);
  const pageUrl = getAbsoluteUrl('ueber-uns', locale);
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'AboutPage',
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
            name: 'Über uns',
            item: pageUrl
          }
        ]
      }
    ]
  };
}

export const metadata: Metadata = getMetadataForPage('ueber-uns', defaultLocale);

export default function UeberUnsPage({ params }: { params?: { locale?: Locale } }) {
  const locale = (params?.locale as Locale) ?? defaultLocale;
  const t = ueberUnsContent[locale];
  const jsonLd = buildJsonLd(locale);
  const link = (pageId: Parameters<typeof getLocalizedPathWithAnchor>[0], anchor?: string) =>
    getLocalizedPathWithAnchor(pageId, locale, anchor);

  return (
    <>
      <script id="schema-ueber-uns" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <section className="hero">
        <div className="container hero-content">
          <h1>{t.heroTitle}</h1>
          {t.heroParagraphs.map((para) => (
            <p key={para}>{para}</p>
          ))}
        </div>
      </section>

      <section className="section" id="wer-wir-sind">
        <div className="container">
          <header>
            <h2>{t.aboutTitle}</h2>
          </header>
          {t.aboutParagraphs.map((para) => (
            <p key={para}>{para}</p>
          ))}
        </div>
      </section>

      <section className="section soft" id="team">
        <div className="container">
          <header>
            <h2>{t.teamTitle}</h2>
          </header>
          <p>{t.teamIntro}</p>
          <ul className="benefits-list">
            {t.teamItems.map((item) => (
              <li key={item.label}>
                <strong>{item.label}</strong> {item.text}
              </li>
            ))}
          </ul>
          <p>{t.teamOutro}</p>
        </div>
      </section>

      <section className="section" id="werte">
        <div className="container">
          <header>
            <h2>{t.valuesTitle}</h2>
          </header>
          <div className="grid two leistungen-grid">
            {t.valuesItems.map((item) => (
              <article key={item.title} className="card">
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section soft" id="qualifikationen">
        <div className="container">
          <header>
            <h2>{t.qualificationsTitle}</h2>
          </header>
          <p>{t.qualificationsIntro}</p>
          <ul className="benefits-list">
            {t.qualificationsList.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <p className="inline-note">
            {t.qualificationsNote}{' '}
            <Link href={link('glasfaser-ausbau')}>Glasfaser-Ausbau</Link>,{' '}
            <Link href={link('netzwerktechnik-wlan')}>Netzwerktechnik &amp; WLAN</Link> und{' '}
            <Link href={link('messtechnik-fehlersuche')}>Messtechnik &amp; Fehlersuche</Link>.
          </p>
        </div>
      </section>

      <section className="section" id="warum">
        <div className="container">
          <header>
            <h2>{t.uspTitle}</h2>
          </header>
          <ul className="benefits-list">
            {t.uspItems.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section soft" id="prozess">
        <div className="container">
          <header>
            <h2>{t.processTitle}</h2>
          </header>
          <ol className="prozess-steps">
            {t.processSteps.map((item) => (
              <li key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </li>
            ))}
          </ol>
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
            <h2>{t.ctaTitle}</h2>
            <p className="lead">{t.ctaLead}</p>
          </header>
          <div className="hero-actions">
            <Link href={link('kontakt')} className="btn-primary">
              {t.ctaButton}
            </Link>
          </div>
          <p className="kontakt-inline">
            Direktkontakt: <a href="tel:+4915731685721">+49 157 31685721</a> ·{' '}
            <a href="tel:+4915782854321">+49 157 82854321</a> ·{' '}
            <a href="mailto:info@smarttechnik.eu">info@smarttechnik.eu</a>
          </p>
        </div>
      </section>
    </>
  );
}

