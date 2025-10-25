<?php
/**
 * Default page template wrapper.
 *
 * @package smarttechnik-gp-child
 */

defined( 'ABSPATH' ) || exit;

get_header();
?>
<main id="primary" class="site-main container" role="main">
  <section class="section">
    <?php
    if ( have_posts() ) {
        while ( have_posts() ) {
            the_post();
            the_content();
        }
    }
    ?>
  </section>
</main>
<?php
get_footer();
