<?php
/**
 * Front page template.
 *
 * @package smarttechnik-gp-child
 */

defined( 'ABSPATH' ) || exit;

get_header();
?>
<main id="primary" class="site-main container" role="main">
  <?php
  get_template_part( 'template-parts/hero-home' );
  get_template_part( 'template-parts/services-grid' );
  get_template_part( 'template-parts/why-us' );
  get_template_part( 'template-parts/process' );
  get_template_part( 'template-parts/trust' );
  get_template_part( 'template-parts/stats-band' );
  get_template_part( 'template-parts/cta-contact' );
  ?>
</main>
<?php
get_footer();
