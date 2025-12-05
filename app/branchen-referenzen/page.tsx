import type { Metadata } from 'next';
import Link from 'next/link';
import { Locale, defaultLocale } from '../../lib/i18n';
import { branchenReferenzenContent } from '../../lib/content/branchen-referenzen';
import { getAbsoluteUrl, getLocalizedPathWithAnchor, getMetadataForPage } from '../../lib/seo-config';

function buildJsonLd(locale: Locale) {
  const t = branchenReferenzenContent[locale];
  const meta = getMetadataForPage('branchen-referenzen', locale);
  const pageUrl = getAbsoluteUrl('branchen-referenzen', locale);
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
        },
        hasPart: {
          '@id': `${pageUrl}#referenzen`
        }
      },
      {
        '@type': 'ItemList',
        '@id': `${pageUrl}#referenzen`,
        name: t.referencesTitle,
        inLanguage: locale,
        itemListElement: t.references.map((item, index) => ({
          '@type': 'ListItem',
          position: index + 1,
          name: item.title,
          description: item.body
        }))
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
            name: 'Branchen & Referenzen',
            item: pageUrl
          }
        ]
      }
    ]
  };
}

export const metadata: Metadata = getMetadataForPage('branchen-referenzen', defaultLocale);

export default function BranchenReferenzenPage({ params }: { params?: { locale?: Locale } }) {
  const locale = (params?.locale as Locale) ?? defaultLocale;
  const t = branchenReferenzenContent[locale];
  const jsonLd = buildJsonLd(locale);
  const buildLink = (pageId: Parameters<typeof getLocalizedPathWithAnchor>[0], anchor?: string) =>
    getLocalizedPathWithAnchor(pageId, locale, anchor);
  return (
    <>
      <script
        id="schema-branchen-referenzen"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <section className="hero">
        <div className="container hero-content">
          <h1>{t.heroTitle}</h1>
          <p>
            <span className="brand">smaRTtechnik Lebek &amp; Stawczyk GbR</span> {t.heroIntro}
          </p>
          <p>{t.heroIntro2}</p>
          <div className="hero-actions">
            <Link href={buildLink('kontakt')} className="btn-primary">
              {t.ctaPrimary}
            </Link>
            <Link href={buildLink('home', '#leistungen')} className="btn-secondary">
              {t.ctaSecondary}
            </Link>
          </div>
        </div>
      </section>

      <section className="section" id="branchen">
        <div className="container">
          <header>
            <h2>{t.branchesTitle}</h2>
            <p className="lead">{t.branchesLead}</p>
          </header>
          <div className="grid three branchen-grid">
            {t.branches.map((item) => (
              <article key={item.title} className="card">
                <h3>{item.title}</h3>
                <p>{item.body}</p>
                <p className="inline-link">
                  → Relevante Leistungen:{' '}
                  {item.links.map((linkItem, index) => (
                    <span key={linkItem.label}>
                      <Link href={buildLink(linkItem.pageId as any)}>{linkItem.label}</Link>
                      {index < item.links.length - 1 ? ', ' : ''}
                    </span>
                  ))}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section soft" id="referenzen">
        <div className="container">
          <header>
            <h2>{t.referencesTitle}</h2>
            <p className="lead">{t.referencesIntro}</p>
          </header>
          <div className="referenzen-list">
            {t.references.map((item) => (
              <article key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
                <ul>
                  {item.details.map((detail) => (
                    <li key={detail}>{detail}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="kundenliebe">
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

      <section className="section soft" id="zahlen">
        <div className="container">
          <header>
            <h2>{t.factsTitle}</h2>
          </header>
          <div className="facts-grid">
            {t.factsItems.map((item) => (
              <article key={item.value}>
                <strong>{item.value}</strong>
                <p>{item.label}</p>
              </article>
            ))}
          </div>
          <p className="facts-note">{t.factsNote}</p>
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
            <h2>{t.ctaEndTitle}</h2>
            <p className="lead">{t.ctaEndLead}</p>
          </header>
          <div className="hero-actions">
            <Link href={buildLink('kontakt')} className="btn-primary">
              {t.ctaEndButton}
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

