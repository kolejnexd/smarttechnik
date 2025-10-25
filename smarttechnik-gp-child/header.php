<?php
/**
 * Theme header.
 *
 * @package smarttechnik-gp-child
 */

defined( 'ABSPATH' ) || exit;
?><!DOCTYPE html>
<html lang="en">
<head>
<meta charset="<?php bloginfo( 'charset' ); ?>">
<meta name="viewport" content="width=device-width, initial-scale=1">
<?php wp_head(); ?>
</head>
<body <?php body_class(); ?>>
<?php wp_body_open(); ?>
<header class="site-header" role="banner">
  <div class="container header-inner">
    <a href="<?php echo esc_url( home_url( '/' ) ); ?>" class="logo" rel="home">
      <span class="logo-accent">smart</span><span class="logo-highlight">Technik</span>
    </a>

    <nav class="main-nav" aria-label="Primary navigation">
      <?php
      wp_nav_menu(
          array(
              'theme_location' => 'primary',
              'menu_id'        => 'primary-menu',
              'container'      => false,
              'depth'          => 1,
              'fallback_cb'    => 'smarttechnik_menu_fallback',
          )
      );
      ?>
    </nav>

    <a href="<?php echo esc_url( home_url( '/kontakt' ) ); ?>" class="btn-primary header-cta">Angebot anfordern</a>

    <button class="burger" type="button" aria-label="Toggle navigation" aria-expanded="false" aria-controls="mobile-menu">
      <span class="burger-line"></span>
      <span class="burger-line"></span>
      <span class="burger-line"></span>
    </button>
  </div>

  <nav id="mobile-menu" class="mobile-nav" aria-label="Mobile primary navigation" hidden>
    <?php
    wp_nav_menu(
        array(
            'theme_location' => 'primary',
            'menu_id'        => 'mobile-primary-menu',
            'container'      => false,
            'depth'          => 1,
            'fallback_cb'    => 'smarttechnik_menu_fallback',
        )
    );
    ?>
    <div class="mobile-nav__cta">
      <a class="btn-primary" href="<?php echo esc_url( home_url( '/kontakt' ) ); ?>">Angebot anfordern</a>
    </div>
  </nav>
</header>
<div id="content" class="site-content">
