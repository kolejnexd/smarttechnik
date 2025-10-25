<?php
/**
 * Hero section for front page.
 *
 * @package smarttechnik-gp-child
 */

defined( 'ABSPATH' ) || exit;
?>
<section class="section" aria-labelledby="hero-heading">
  <div class="hero">
    <div class="hero-content">
      <h1 id="hero-heading">Glasfaser, Netzwerktechnik &amp; Messtechnik in Frankfurt am Main</h1>
      <p>smartTechnik GmbH ist Ihr zertifizierter Partner für Glasfaser-Spleißen, strukturierte Netzwerke und Messtechnik im Rhein-Main-Gebiet.</p>
      <p>Wir liefern stabile, dokumentierte Lösungen – vom ersten Spleiß bis zur abnahmefertigen Messdokumentation mit 24/7 Bereitschaft.</p>
      <div class="hero-actions">
        <a class="btn-primary" href="<?php echo esc_url( home_url( '/kontakt' ) ); ?>">Kostenlose Beratung anfragen</a>
        <a class="btn-secondary" href="<?php echo esc_url( home_url( '/kontakt#anfrage' ) ); ?>">Angebot erhalten &lt;24h</a>
        <a class="hero-phone" href="tel:+4915731685721">Direkt anrufen: +49&nbsp;157&nbsp;31685721</a>
      </div>
    </div>
    <div class="hero-media">
      <img src="https://images.unsplash.com/photo-1580894906472-6b1cbd8e59b1?auto=format&amp;fit=crop&amp;w=1200&amp;q=80" alt="Techniker führt Glasfaser-Spleiß in einem Rechenzentrum in Frankfurt am Main aus" loading="lazy" width="1200" height="800">
      <!-- Photo by Manuel Geissinger on Pexels | License: Pexels License -->
      <!-- TODO: Replace with local WebP asset in production. -->
    </div>
  </div>
</section>
