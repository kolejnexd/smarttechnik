import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { defaultLocale, Locale } from '../../lib/i18n';
import { ueberUnsContent } from '../../lib/content/ueber-uns';
import { getLocalizedPathWithAnchor, getMetadataForPage } from '../../lib/seo-config';

export const metadata: Metadata = getMetadataForPage('ueber-uns', defaultLocale);

type PageProps = { params: { locale?: Locale } };

export default function UeberUnsPage({ params }: PageProps) {
  const locale = params.locale ?? defaultLocale;
  const t = ueberUnsContent[locale];
  
  const link = (pageId: Parameters<typeof getLocalizedPathWithAnchor>[0], anchor?: string) =>
    getLocalizedPathWithAnchor(pageId, locale, anchor);

  return (
    <>
      {/* --- NOWA SEKCJA HERO (Glassmorphism Identity) --- */}
      <section className="hero-about">
        <div className="container hero-about__grid">
          
          {/* LEWA STRONA: Treść */}
          <div className="hero-about__content">
            <span className="hero-about__eyebrow">— WER WIR SIND</span>
            
            <h1 className="hero-about__headline">
              smaRTtechnik <br />
              <span style={{ color: 'var(--smart-magenta)' }}>Lebek & Stawczyk GbR</span>
            </h1>
            
            <p className="hero-about__lead">
              smaRTtechnik ist ein auf Glasfaser- und Netzwerktechnik spezialisiertes Team mit Sitz in Rodenbach bei Frankfurt am Main. Wir planen, bauen und messen leistungsfähige Datennetze für Stadtwerke, Netzbetreiber, Wohnungsbaugesellschaften und Unternehmen im Rhein-Main-Gebiet.
            </p>
            
            <p className="hero-about__lead hero-about__lead--highlight">
              Unser Anspruch: saubere, nachvollziehbare und langfristig wartbare Lösungen, mit denen Ihre Infrastruktur nicht nur am ersten Tag, sondern über viele Jahre zuverlässig funktioniert.
            </p>
          </div>

          {/* PRAWA STRONA: Wizualizacja z efektem głębi */}
          <div className="hero-about__visual">
            
            {/* Ramka w tle (Stack Effect) */}
            <div className="hero-about__frame-deco" aria-hidden="true" />
            
            <div className="hero-about__image-wrapper">
              <Image
                src="/img/Über-uns-smaRTtechnik.webp" 
                alt="smaRTtechnik Team bei der Arbeit"
                fill
                className="hero-about__img"
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            
              {/* Szklana wizytówka (Overlay) */}
              <div className="hero-about__glass-card">
                <div className="glass-icon">
                  {/* Ikona Map Pin */}
                  <svg viewBox="0 0 24 24">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                  </svg>
                </div>
                <div className="glass-content">
                  <strong>Ihr Partner im Rhein-Main-Gebiet</strong>
                  <span>Standort: Rodenbach / Frankfurt</span>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </section>

      {/* --- POZOSTAŁE SEKCJE BEZ ZMIAN --- */}

      <section className="section" id="wer-wir-sind">
        <div className="container">
          <header className="section-header">
            <h2>{t.aboutTitle}</h2>
          </header>
          {t.aboutParagraphs.map((para) => (
            <p key={para} className="lead" style={{ maxWidth: '800px', margin: '0 auto 1.5rem' }}>
              {para}
            </p>
          ))}
        </div>
      </section>

      <section className="section soft" id="team">
        <div className="container">
          <header className="section-header">
            <h2>{t.teamTitle}</h2>
          </header>
          <p style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto 2rem' }}>{t.teamIntro}</p>
          <ul className="benefits-list">
            {t.teamItems.map((item) => (
              <li key={item.label}>
                <strong>{item.label}</strong> {item.text}
              </li>
            ))}
          </ul>
          <p style={{ textAlign: 'center', marginTop: '2rem' }}>{t.teamOutro}</p>
        </div>
      </section>

      <section className="section" id="werte">
        <div className="container">
          <header className="section-header">
            <h2>{t.valuesTitle}</h2>
          </header>
          <div className="grid two leistungen-grid">
            {t.valuesItems.map((item) => (
              <article key={item.title} className="smart-card">
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section soft" id="qualifikationen">
        <div className="container">
          <header className="section-header">
            <h2>{t.qualificationsTitle}</h2>
          </header>
          <p style={{ textAlign: 'center', marginBottom: '2rem' }}>{t.qualificationsIntro}</p>
          <ul className="benefits-list">
            {t.qualificationsList.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <p className="inline-note" style={{ textAlign: 'center', marginTop: '2rem' }}>
            {t.qualificationsNote}{' '}
            <Link href={link('glasfaser-ausbau')}>Glasfaser-Ausbau</Link>,{' '}
            <Link href={link('netzwerktechnik-wlan')}>Netzwerktechnik &amp; WLAN</Link> und{' '}
            <Link href={link('messtechnik-fehlersuche')}>Messtechnik &amp; Fehlersuche</Link>.
          </p>
        </div>
      </section>

      <section className="section" id="warum">
        <div className="container">
          <header className="section-header">
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
          <header className="section-header">
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

      <section className="section soft" id="cta">
        <div className="container">
          <header className="section-header">
            <h2>{t.ctaTitle}</h2>
            <p className="lead">{t.ctaLead}</p>
          </header>
          <div className="hero-actions" style={{ justifyContent: 'center' }}>
            <Link href={link('kontakt')} className="btn-primary">
              {t.ctaButton}
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
