import type { Metadata } from 'next';
import { defaultLocale } from '../../lib/i18n';
import { getMetadataForPage } from '../../lib/seo-config';

export const metadata: Metadata = getMetadataForPage('impressum', defaultLocale);

export default function ImpressumPage() {
  return (
    <section className="section">
      <div className="container">
        <h1 className="page-title">Impressum</h1>
        <p className="page-lead">
          Die nachstehenden Angaben sind Platzhalter und müssen rechtssicher vervollständigt
          werden. Lassen Sie den finalen Text durch einen spezialisierten Generator oder eine
          Rechtsberatung erstellen.
        </p>
        <div className="kontakt-block">
          <p>
            <strong>Angaben gemäß § 5 TMG</strong>
          </p>
          <p>
            smaRTtechnik Lebek &amp; Stawczyk GbR
            <br />
            Odenwaldstr. 14
            <br />
            63517 Rodenbach
          </p>
          <p>
            Telefon: +49 157 31685721, +49 157 82854321
            <br />
            E-Mail: info@smarttechnik.eu
          </p>
          <p>
            <strong>Vertreten durch die Gesellschafter:</strong>
            <br />
            [Vorname Nachname Gesellschafter 1]
            <br />
            [Vorname Nachname Gesellschafter 2]
          </p>
          <p>
            <strong>Umsatzsteuer-ID:</strong>
            <br />
            [DE XXX XXX XXX]
          </p>
          <p>
            <strong>Redaktionell verantwortlich:</strong>
            <br />
            [Vorname Nachname, Anschrift]
          </p>
          <p>
            <strong>EU-Streitschlichtung:</strong> Plattform zur Online-Streitbeilegung:{' '}
            <a href="https://ec.europa.eu/consumers/odr/" rel="noreferrer" target="_blank">
              https://ec.europa.eu/consumers/odr/
            </a>
            . Unsere E-Mail-Adresse finden Sie oben im Impressum.
          </p>
          <p>
            <strong>Verbraucher­streit­beilegung:</strong> Wir sind nicht bereit oder verpflichtet,
            an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
          </p>
        </div>
      </div>
    </section>
  );
}
