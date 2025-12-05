import type { Metadata } from 'next';
import Link from 'next/link';
import { Locale, defaultLocale } from '../../lib/i18n';
import { faqContent } from '../../lib/content/faq';
import { getAbsoluteUrl, getLocalizedPathWithAnchor, getMetadataForPage } from '../../lib/seo-config';

function buildJsonLd(locale: Locale) {
  const t = faqContent[locale];
  const meta = getMetadataForPage('faq', locale);
  const pageUrl = getAbsoluteUrl('faq', locale);
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
        '@type': 'FAQPage',
        '@id': `${pageUrl}#faq`,
        url: pageUrl,
        inLanguage: locale,
        mainEntity: t.sections.flatMap((section) =>
          section.items.map((item) => ({
            '@type': 'Question',
            name: item.question,
            acceptedAnswer: {
              '@type': 'Answer',
              text: item.answer
            }
          }))
        )
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
            name: 'FAQ',
            item: pageUrl
          }
        ]
      }
    ]
  };
}


export const metadata: Metadata = getMetadataForPage('faq', defaultLocale);

export default function FaqPage({ params }: { params?: { locale?: Locale } }) {
  const locale = (params?.locale as Locale) ?? defaultLocale;
  const jsonLd = buildJsonLd(locale);
  const t = faqContent[locale];
  const link = (pageId: Parameters<typeof getLocalizedPathWithAnchor>[0], anchor?: string) =>
    getLocalizedPathWithAnchor(pageId, locale, anchor);
  return (
    <>
      <script id="schema-faq" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <section className="hero">
        <div className="container hero-content">
          <h1>{t.heroTitle}</h1>
          <p>{t.heroIntro}</p>
          <p>{t.heroIntro2}</p>
          <div className="hero-actions">
            <Link href={link('kontakt')} className="btn-primary">
              {t.primaryCta}
            </Link>
            <Link href={link('home', '#leistungen')} className="btn-secondary">
              {t.secondaryCta}
            </Link>
          </div>
        </div>
      </section>

      {t.sections.map((section) => (
        <section key={section.id} className={section.id === 'allgemein' ? 'section' : 'section soft'}>
          <div className="container" id={section.id}>
            <header>
              <h2>{section.title}</h2>
            </header>
            <div className="faq-list">
              {section.items.map((item) => (
                <article key={item.question} className="faq-item">
                  <h3>{item.question}</h3>
                  <p>{item.answer}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
      ))}

      <section className="section" id="kontakt">
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
