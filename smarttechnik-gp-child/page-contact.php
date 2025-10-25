<?php
/**
 * Template Name: Kontakt
 *
 * @package smarttechnik-gp-child
 */

defined( 'ABSPATH' ) || exit;

get_header();
?>
<main id="primary" class="site-main container" role="main">
  <section class="section" aria-labelledby="contact-title">
    <h1 id="contact-title">Kontakt &amp; Projektanfrage</h1>
    <p>Sie benötigen eine Express-Reparatur, möchten eine Abnahme dokumentieren lassen oder planen einen Ausbau? Senden Sie uns Ihr Anliegen – wir melden uns innerhalb von 24&nbsp;Stunden.</p>
    <div class="contact-grid">
      <section class="card" aria-labelledby="contact-form-heading">
        <h2 id="contact-form-heading">Direkte Anfrage</h2>
        <form method="post" action="#" class="contact-form" id="anfrage">
          <!-- TODO: handle wp_mail() submission here -->
          <div class="form-field">
            <label for="contact-name">Name / Firma</label>
            <input type="text" id="contact-name" name="contact-name" required>
          </div>
          <div class="form-field">
            <label for="contact-email">E-Mail</label>
            <input type="email" id="contact-email" name="contact-email" required>
          </div>
          <div class="form-field">
            <label for="contact-phone">Telefon</label>
            <input type="tel" id="contact-phone" name="contact-phone" required>
          </div>
          <div class="form-field">
            <label for="contact-message">Ihr Anliegen</label>
            <textarea id="contact-message" name="contact-message" rows="6" placeholder="z. B. Glasfaserbruch im Lager Frankfurt, OTDR-Abnahme für Neubau in Hanau" required></textarea>
          </div>
          <p>Ihre Angaben verwenden wir ausschließlich zur Bearbeitung Ihrer Anfrage. Details finden Sie in unserer <a href="<?php echo esc_url( home_url( '/datenschutz' ) ); ?>">Datenschutzerklärung</a>.</p>
          <button type="submit" class="btn-primary">Anfrage absenden</button>
        </form>
      </section>
      <aside class="contact-details" aria-label="smartTechnik Kontaktinformationen">
        <h2>smartTechnik GmbH</h2>
        <p>Technikstandort: Odenwaldstr. 14<br>63517 Rodenbach · Rhein-Main (bei Frankfurt am Main)</p>
        <p><strong>Tel. Direkt:</strong> <a href="tel:+4915731685721">+49 157 31685721</a></p>
        <p><strong>Tel. Bereitschaft:</strong> <a href="tel:+4915782854321">+49 157 82854321</a></p>
        <p><strong>E-Mail:</strong> <a href="mailto:info@smarttechnik.eu">info@smarttechnik.eu</a></p>
        <p>Wir bieten Glasfaser-Spleißen, strukturierte Verkabelung, Messtechnik und dokumentierte Abnahmen für Unternehmen im Rhein-Main-Gebiet.</p>
      </aside>
    </div>
    <div class="contact-map card" aria-label="Karte Frankfurt am Main">
      <iframe title="Frankfurt am Main" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10630.228655993832!2d8.6737823!3d50.1106442!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47bd09705f0cdbf7%3A0x662798c6da097c3!2sFrankfurt%20am%20Main%2C%20Germany!5e0!3m2!1sde!2sde!4v1700000000000" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    </div>
  </section>
</main>
<?php
get_footer();
