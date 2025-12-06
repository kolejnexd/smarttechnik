import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { defaultLocale, Locale } from '../../lib/i18n';
import { branchenReferenzenContent } from '../../lib/content/branchen-referenzen';
import { getLocalizedPathWithAnchor, getMetadataForPage } from '../../lib/seo-config';

// Komponent dekoracyjny: Linia łącząca
const ConnectorLine = () => (
  <svg
    className="connector-line"
    viewBox="0 0 100 200"
    preserveAspectRatio="none"
    aria-hidden="true"
  >
    <path
      d="M0,20 C50,20 50,180 100,180"
      fill="none"
      stroke="url(#connectorGradient)"
      strokeWidth="2"
      vectorEffect="non-scaling-stroke"
    />
    <defs>
      <linearGradient id="connectorGradient" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="rgba(255,255,255,0.1)" />
        <stop offset="50%" stopColor="var(--smart-magenta)" />
        <stop offset="100%" stopColor="rgba(255,255,255,0.1)" />
      </linearGradient>
    </defs>
  </svg>
);

export const metadata: Metadata = getMetadataForPage('branchen-referenzen', defaultLocale);

type PageProps = { params: { locale?: Locale } };

export default function BranchenReferenzenPage({ params }: PageProps) {
  const locale = params.locale ?? defaultLocale;
  const t = branchenReferenzenContent[locale];
  const buildLink = (pageId: Parameters<typeof getLocalizedPathWithAnchor>[0], anchor?: string) =>
    getLocalizedPathWithAnchor(pageId, locale, anchor);

  return (
    <>
      {/* --- NOWA SEKCJA HERO (Gemini Style) --- */}
      <section className="hero-reference">
        {/* Tło Ambient Glow */}
        <div className="hero-reference__ambient-glow" />
        
        <div className="container hero-reference__grid">
          
          {/* LEWA KOLUMNA: Narracja */}
          <div className="hero-reference__content">
            <div className="hero-reference__eyebrow">
              — EURE PROJEKTE
            </div>
            
            <h1 className="hero-reference__headline">
              Unsere <span className="text-gradient">Branchen & Referenzen</span>
            </h1>
            
            <p className="hero-reference__lead">
              {t.heroIntro}
            </p>
            
            <div className="hero-reference__trust-badges">
              <span>Stadtwerke</span>
              <span className="dot">·</span>
              <span>Netzbetreiber</span>
              <span className="dot">·</span>
              <span>Wohnungsbau</span>
            </div>

            <div className="hero-actions">
              <Link href={buildLink('kontakt')} className="btn-primary">
                {t.ctaPrimary}
              </Link>
              <Link href={buildLink('home', '#leistungen')} className="btn-secondary btn-secondary--outline">
                {t.ctaSecondary}
              </Link>
            </div>
          </div>

          {/* ŚRODEK: Dekorator (tylko desktop) */}
          <div className="hero-reference__connector">
            <ConnectorLine />
          </div>

          {/* PRAWA KOLUMNA: Smart Frame */}
          <div className="hero-reference__visual">
            <div className="smart-frame">
              <div className="smart-frame__image-wrapper">
                <Image
                  src="/images/referenzen-hero.webp"
                  alt="Industrie Netzwerkinstallation"
                  fill
                  className="smart-frame__img"
                  priority
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="smart-frame__overlay" />
              </div>
              
              {/* Szklana Pigułka "Statystyka" */}
              <div className="smart-frame__stat-pill">
                <div className="stat-icon">🏆</div>
                <div className="stat-text">
                  <strong>200+</strong>
                  <span>Projekte</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* --- Pozostałe sekcje (bez zmian merytorycznych, tylko stylowe dopasowanie) --- */}

      <section className="section" id="branchen">
        <div className="container">
          <header className="section-header">
            <h2>{t.branchesTitle}</h2>
            <p className="lead">{t.branchesLead}</p>
          </header>
          <div className="grid three branchen-grid">
            {t.branches.map((item) => (
              <article key={item.title} className="smart-card">
                <h3>{item.title}</h3>
                <p>{item.body}</p>
                <div className="inline-link-group">
                  <span className="text-sm muted">Relevante Leistungen:</span>
                  <div className="link-tags">
                    {item.links.map((linkItem) => (
                      <Link key={linkItem.label} href={buildLink(linkItem.pageId as any)} className="link-tag">
                        {linkItem.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section soft" id="referenzen">
        <div className="container">
          <header className="section-header">
            <h2>{t.referencesTitle}</h2>
            <p className="lead">{t.referencesIntro}</p>
          </header>
          <div className="grid two referenzen-list">
            {t.references.map((item) => (
              <article key={item.title} className="smart-card reference-card">
                <div className="reference-card__header">
                  <h3>{item.title}</h3>
                </div>
                <p>{item.body}</p>
                <ul className="reference-details">
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
          <header className="section-header">
            <h2>{t.uspTitle}</h2>
          </header>
          <div className="usp-simple-grid">
            {t.uspItems.map((item, i) => (
              <div key={i} className="usp-simple-item">
                <span className="check-icon">✓</span>
                <p>{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section soft" id="zahlen">
        <div className="container">
          <header className="section-header">
            <h2>{t.factsTitle}</h2>
          </header>
          <div className="metrics-grid">
            {t.factsItems.map((item) => (
              <article key={item.value} className="metric-card">
                <strong className="metric-number">{item.value}</strong>
                <p>{item.label}</p>
              </article>
            ))}
          </div>
          <p className="facts-note">{t.factsNote}</p>
        </div>
      </section>

      <section className="section" id="faq">
        <div className="container">
          <header className="section-header">
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
          <header className="section-header">
            <h2>{t.ctaEndTitle}</h2>
            <p className="lead">{t.ctaEndLead}</p>
          </header>
          <div className="hero-actions" style={{ justifyContent: 'center' }}>
            <Link href={buildLink('kontakt')} className="btn-primary">
              {t.ctaEndButton}
            </Link>
          </div>
          <div className="smart-card kontakt-block">
            <p><strong>Direktkontakt:</strong></p>
            <p>
              <a href="tel:+4915731685721">+49 157 31685721</a> ·{' '}
              <a href="tel:+4915782854321">+49 157 82854321</a>
            </p>
            <p>
              <a href="mailto:info@smarttechnik.eu">info@smarttechnik.eu</a>
            </p>
          </div>
          </div>
      </section>
    </>
  );
}
