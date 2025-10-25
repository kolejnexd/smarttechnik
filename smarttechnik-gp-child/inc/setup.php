<?php
/**
 * Theme setup for smartTechnik GP Child.
 *
 * @package smarttechnik-gp-child
 */

defined( 'ABSPATH' ) || exit;

if ( ! function_exists( 'smarttechnik_setup' ) ) {
    /**
     * Configure theme supports and menus.
     */
    function smarttechnik_setup() {
        add_theme_support( 'title-tag' );
        add_theme_support( 'post-thumbnails' );

        register_nav_menus(
            array(
                'primary' => __( 'Primary Menu', 'smarttechnik-gp-child' ),
                'footer'  => __( 'Footer Menu', 'smarttechnik-gp-child' ),
            )
        );

        add_theme_support(
            'html5',
            array(
                'search-form',
                'comment-form',
                'comment-list',
                'gallery',
                'caption',
            )
        );
    }
}
add_action( 'after_setup_theme', 'smarttechnik_setup' );
