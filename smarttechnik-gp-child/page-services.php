<?php
/**
 * Template Name: Leistungen
 *
 * @package smarttechnik-gp-child
 */

defined( 'ABSPATH' ) || exit;

get_header();
?>
<main id="primary" class="site-main container" role="main">
  <section class="section" aria-labelledby="services-title">
    <header class="section-intro">
      <h1 id="services-title">Unsere Leistungen im Rhein-Main-Gebiet</h1>
      <p>Als regionaler Technikpartner rund um Frankfurt am Main liefern wir komplette Glasfaser- und Netzwerk-Infrastrukturen: Planung, Installation, Spleißen, Messen, Dokumentieren und Abnahme.</p>
    </header>
    <article class="card service-detail" aria-labelledby="fiber-heading">
      <h2 id="fiber-heading">Glasfasertechnik &amp; Spleißen</h2>
      <p>Wir spleißen Singlemode- und Multimode-Fasern mit präziser Kernjustierung. Jede Spleißstelle wird geprüft, eindeutig beschriftet und mit einem OTDR-Trace dokumentiert.</p>
      <ul>
        <li>Spleißen von LWL-Strecken (Singlemode &amp; Multimode)</li>
        <li>Montage von Muffen, Pigtails, Patchpanels und Abschlussboxen</li>
        <li>OTDR- und Dämpfungsmessungen inkl. digitaler Protokolle</li>
        <li>Express-Störungseinsätze im gesamten Rhein-Main-Gebiet</li>
      </ul>
    </article>
    <article class="card service-detail" aria-labelledby="network-heading">
      <h2 id="network-heading">Netzwerktechnik &amp; strukturierte Verkabelung</h2>
      <p>Wir planen und installieren strukturierte Kupfer- (Cat6A/Cat7) und Glasfaserverkabelung für Büros, Lagerhallen, Produktionsflächen und Rechenzentren.</p>
      <ul>
        <li>Planung von Patchfeldern, Racks, Backbone-Verbindungen</li>
        <li>Montage &amp; Beschriftung aller Ports für schnelle Fehlersuche</li>
        <li>Saubere Kabelführung nach Best Practices und Normen</li>
        <li>Skalierbare Netzwerke für wachsende Unternehmen</li>
      </ul>
    </article>
    <article class="card service-detail" aria-labelledby="measurement-heading">
      <h2 id="measurement-heading">Messtechnik &amp; Abnahmeprotokolle</h2>
      <p>Wir messen Glasfaser- und Datennetze mit modernem Equipment und erstellen nachvollziehbare Abnahmeprotokolle für Ihre Kunden oder Auditoren.</p>
      <ul>
        <li>OTDR- und Dämpfungsmessung für jede Strecke</li>
        <li>Fehleranalyse bei Störungen und Sanierungen</li>
        <li>Prüffähige Berichte (PDF) für Bauleitung und Endkunden</li>
        <li>Langfristige Archivierung der Messwerte in deutscher Sprache</li>
      </ul>
    </article>
    <article class="card service-detail" aria-labelledby="support-heading">
      <h2 id="support-heading">Support &amp; Bereitschaft in Frankfurt am Main</h2>
      <p>Kurze Wege bedeuten weniger Ausfallzeit. Wir sind schnell vor Ort in Frankfurt, Offenbach, Hanau, Wiesbaden, Mainz, Darmstadt und dem gesamten Rhein-Main-Gebiet.</p>
      <ul>
        <li>Entstörung kritischer Glasfaser- und Netzwerkverbindungen</li>
        <li>Notfall-Spleiß bei Beschädigungen oder Umbauten</li>
        <li>Temporäre Provisorien und Erweiterungen im laufenden Betrieb</li>
        <li>Optional 24/7 SLA für Rechenzentren und Industrie</li>
      </ul>
    </article>
    <div class="cta-panel services-cta">
      <p>Fragen zu einem konkreten Projekt in Frankfurt am Main oder Rhein-Main?</p>
      <a class="btn-primary" href="<?php echo esc_url( home_url( '/kontakt' ) ); ?>">Jetzt unverbindlich anfragen</a>
    </div>
  </section>
</main>
<?php
get_footer();
