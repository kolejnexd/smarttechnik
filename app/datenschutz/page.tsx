import type { Metadata } from 'next';
import { defaultLocale } from '../../lib/i18n';
import { getMetadataForPage } from '../../lib/seo-config';

export const metadata: Metadata = getMetadataForPage('datenschutz', defaultLocale);

export default function DatenschutzPage() {
  return (
    <section className="section">
      <div className="container">
        <h1 className="page-title">Datenschutz</h1>
        <p className="page-lead">
          Diese Seite ist ein Platzhalter. Bitte ersetzen Sie den Text durch eine gültige,
          rechtssichere Datenschutzerklärung gemäß DSGVO.
        </p>
        <div className="kontakt-block">
          <p>
            <strong>Verantwortlicher</strong>
            <br />
            smaRTtechnik Lebek &amp; Stawczyk GbR
            <br />
            Odenwaldstr. 14, 63517 Rodenbach
            <br />
            E-Mail: info@smarttechnik.eu
          </p>
          <p>
            <strong>Hosting &amp; Zugriffsdaten</strong>
            <br />
            Beim Aufruf der Website werden serverseitig Logfiles (IP-Adresse, Datum, Uhrzeit,
            Browser, Referrer) verarbeitet, um die Stabilität und Sicherheit des Angebots zu
            gewährleisten.
          </p>
          <p>
            <strong>Kontaktaufnahme</strong>
            <br />
            Wenn Sie uns per E-Mail oder Telefon kontaktieren, verarbeiten wir Ihre Angaben zur
            Bearbeitung der Anfrage und für den Fall von Anschlussfragen.
          </p>
          <p>
            <strong>Rechte der betroffenen Personen</strong>
            <br />
            Sie haben das Recht auf Auskunft, Berichtigung, Löschung, Einschränkung der
            Verarbeitung, Datenübertragbarkeit sowie Beschwerde bei einer Aufsichtsbehörde.
          </p>
        </div>
      </div>
    </section>
  );
}
