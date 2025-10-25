<?php
/**
 * Theme footer template.
 *
 * @package smarttechnik-gp-child
 */

defined( 'ABSPATH' ) || exit;
?>
</div><!-- #content -->
<footer class="site-footer" role="contentinfo">
  <div class="container">
    <div class="footer-cols">
      <div>
        <p class="footer-heading">smartTechnik GmbH</p>
        <p>Technikstandort: Odenwaldstr. 14<br>63517 Rodenbach · Rhein-Main (bei Frankfurt am Main)</p>
        <p>Glasfaser-Spleißen, Netzwerktechnik, Messtechnik &amp; Dokumentation.</p>
      </div>
      <div>
        <p class="footer-heading">Kontakt</p>
        <p>Tel.: <a href="tel:+4915731685721">+49 157 31685721</a></p>
        <p>Tel.: <a href="tel:+4915782854321">+49 157 82854321</a></p>
        <p>E-Mail: <a href="mailto:info@smarttechnik.eu">info@smarttechnik.eu</a></p>
        <p><a class="btn-primary" href="<?php echo esc_url( home_url( '/kontakt' ) ); ?>">Kostenlose Beratung anfragen</a></p>
      </div>
      <div>
        <p class="footer-heading">Schnelle Navigation</p>
        <p><a href="<?php echo esc_url( home_url( '/' ) ); ?>">Startseite</a></p>
        <p><a href="<?php echo esc_url( home_url( '/leistungen' ) ); ?>">Leistungen</a></p>
        <p><a href="<?php echo esc_url( home_url( '/referenzen' ) ); ?>">Referenzen</a></p>
        <p><a href="<?php echo esc_url( home_url( '/ueber-uns' ) ); ?>">Über uns</a></p>
        <p><a href="<?php echo esc_url( home_url( '/faq' ) ); ?>">FAQ</a></p>
        <p><a href="<?php echo esc_url( home_url( '/kontakt' ) ); ?>">Kontakt</a></p>
      </div>
      <div>
        <p class="footer-heading">Rechtliches &amp; Vertrauen</p>
        <p>smartTechnik GmbH – Technikteam für Glasfaser &amp; Netzwerke.</p>
        <p>USt-IdNr.: <span lang="de">[eintragen]</span></p>
        <p>Handelsregister: <span lang="de">[Amtsgericht / HRB eintragen]</span></p>
        <p>24/7 SLA verfügbar für kritische Infrastrukturen im Rhein-Main-Gebiet.</p>
      </div>
    </div>
    <div class="footer-bottom">
      <span>© smartTechnik GmbH <?php echo esc_html( date( 'Y' ) ); ?> · Frankfurt am Main · Rhein-Main</span>
      <span class="footer-links"><a href="<?php echo esc_url( home_url( '/datenschutz' ) ); ?>">Datenschutz</a> · <a href="<?php echo esc_url( home_url( '/impressum' ) ); ?>">Impressum</a></span>
    </div>
  </div>
</footer>
<?php wp_footer(); ?>
</body>
</html>
