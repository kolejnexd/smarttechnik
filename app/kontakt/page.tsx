import type { Metadata } from 'next';

import Link from 'next/link';
import { Locale, defaultLocale } from '../../lib/i18n';
import { kontaktContent } from '../../lib/content/kontakt';
import { getAbsoluteUrl, getLocalizedPathWithAnchor, getMetadataForPage } from '../../lib/seo-config';

function buildJsonLd(locale: Locale) {
  const t = kontaktContent[locale];
  const meta = getMetadataForPage('kontakt', locale);
  const pageUrl = getAbsoluteUrl('kontakt', locale);
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'ContactPage',
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
            name: 'Kontakt',
            item: pageUrl
          }
        ]
      }
    ]
  };
}

export const metadata: Metadata = getMetadataForPage('kontakt', defaultLocale);

export default function KontaktPage({ params }: { params?: { locale?: Locale } }) {
  const locale = (params?.locale as Locale) ?? defaultLocale;
  const jsonLd = buildJsonLd(locale);
  const t = kontaktContent[locale];
  const link = (pageId: Parameters<typeof getLocalizedPathWithAnchor>[0], anchor?: string) =>
    getLocalizedPathWithAnchor(pageId, locale, anchor);
  return (
    <>
      <script id="schema-kontakt" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <section className="hero">
        <div className="container hero-content">
          <h1>{t.heroTitle}</h1>
          <p>{t.heroIntro}</p>
          <ul className="hero-bullets">
            {t.heroBullets.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <div className="hero-actions">
            <Link href="#kontakt" className="btn-primary">
              Jetzt Kontakt aufnehmen
            </Link>
            <Link href="#anfahrt" className="btn-secondary">
              Anfahrt anzeigen
            </Link>
          </div>
        </div>
      </section>

      <section className="section" id="kontakt">
        <div className="container">
          <header>
            <h2>{t.contactHeadline}</h2>
          </header>
          <div className="grid two kontakt-grid">
            <article className="card">
              <h3>Kontaktinformationen</h3>
              <p>
                <strong>smaRTtechnik Lebek &amp; Stawczyk GbR</strong>
              </p>
              <p>
                Odenwaldstr. 14
                <br />
                63517 Rodenbach (bei Frankfurt am Main)
              </p>
              <p>
                <strong>E-Mail:</strong>{' '}
                <a href="mailto:info@smarttechnik.eu">info@smarttechnik.eu</a>
                <br />
                <strong>Telefon:</strong> <a href="tel:+4915731685721">+49 157 31685721</a>
                <br />
                <strong>Telefon:</strong> <a href="tel:+4915782854321">+49 157 82854321</a>
              </p>
              <p>
                {t.contactInfoText}
              </p>
            </article>
            <article className="card">
              <h3>{t.contactWhenTitle}</h3>
              <ul>
                {t.contactWhenItems.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          </div>
        </div>
      </section>

      <section className="section soft" id="kontaktformular">
        <div className="container">
          <header>
            <h2>{t.formTitle}</h2>
          </header>
          <p>{t.formIntro}</p>
          <p>
            <strong>{t.formHelpful.length ? 'Hilfreiche Angaben für Projektanfragen:' : ''}</strong>
          </p>
          <ul>
            {t.formHelpful.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          {t.formNote ? <p className="inline-note">{t.formNote}</p> : null}
        </div>
      </section>

      <section className="section" id="stoerungen">
        <div className="container">
          <header>
            <h2>{t.stoerungTitle}</h2>
          </header>
          <p>
            Für Kunden mit <Link href={link('service-wartung')}>Service- &amp; Wartungsvertrag</Link>{' '}
            bieten wir definierte Reaktionszeiten und nach Vereinbarung eine{' '}
            <strong>Störungsbereitschaft (optional 24/7)</strong>.
          </p>
          <p>Bitte halten Sie bei Störungen nach Möglichkeit folgende Informationen bereit:</p>
          <ul>
            {t.stoerungList.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <p>{t.stoerungNote}</p>
        </div>
      </section>

      <section className="section soft" id="anfahrt">
        <div className="container">
          <header>
            <h2>{t.anfahrtTitle}</h2>
          </header>
          <p>
            {t.anfahrtIntro}
          </p>
          <p>
            <strong>{t.anfahrtAddressLabel}</strong>
            <br />
            {t.anfahrtAddress}
          </p>
          <p>{t.anfahrtParking}</p>
          <div className="map-container" id="anfahrt-karte">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d159.81336925017837!2d9.019439107031477!3d50.142171664566995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47bd3d6a7bfacd4b%3A0x3df3ba5377c9ac37!2sOdenwaldstra%C3%9Fe%2014%2C%2063517%20Rodenbach%2C%20Niemcy!5e0!3m2!1spl!2spl!4v1764365151679!5m2!1spl!2spl"
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              aria-label="Anfahrt zu smaRTtechnik in Rodenbach"
            ></iframe>
          </div>
        </div>
      </section>

      <section className="section" id="termine">
        <div className="container">
          <header>
            <h2>{t.termineTitle}</h2>
          </header>
          <p>{t.termineIntro}</p>
          <p>{t.termineIntro}</p>
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

      <section className="section" id="cta">
        <div className="container">
          <header>
            <h2>{t.ctaTitle}</h2>
            <p className="lead">{t.ctaLead}</p>
          </header>
          <div className="hero-actions">
            <Link href={link('kontakt', '#kontaktformular')} className="btn-primary">
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
