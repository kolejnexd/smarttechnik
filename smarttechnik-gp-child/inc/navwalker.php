<?php
/**
 * Minimal navigation walker for smartTechnik GP Child.
 *
 * This walker keeps markup lean and accessible without megamenu logic.
 * Extend if more complex structures are required.
 *
 * @package smarttechnik-gp-child
 */

defined( 'ABSPATH' ) || exit;

if ( ! class_exists( 'SmartTechnik_Navwalker' ) ) {
    /**
     * Simple walker that wraps menu items with BEM classes.
     */
    class SmartTechnik_Navwalker extends Walker_Nav_Menu {
        /**
         * Start the element output.
         *
         * @param string $output Menu HTML output.
         * @param object $item   Menu item data object.
         * @param int    $depth  Depth of menu item.
         * @param array  $args   Additional arguments.
         * @param int    $id     Current item ID.
         */
        public function start_el( &$output, $item, $depth = 0, $args = array(), $id = 0 ) {
            $classes   = empty( $item->classes ) ? array() : (array) $item->classes;
            $classes[] = 'nav__item';
            $class_str = implode( ' ', array_map( 'sanitize_html_class', $classes ) );

            $output .= '<li class="' . esc_attr( $class_str ) . '">';
            $attributes  = ! empty( $item->attr_title ) ? ' title="' . esc_attr( $item->attr_title ) . '"' : '';
            $attributes .= ! empty( $item->target ) ? ' target="' . esc_attr( $item->target ) . '"' : '';
            $attributes .= ! empty( $item->xfn ) ? ' rel="' . esc_attr( $item->xfn ) . '"' : '';
            $attributes .= ! empty( $item->url ) ? ' href="' . esc_url( $item->url ) . '"' : '';

            $output .= '<a class="nav__link"' . $attributes . '>';
            $output .= apply_filters( 'the_title', $item->title, $item->ID );
            $output .= '</a>';
        }

        /**
         * Ends the element output, if needed.
         *
         * @param string $output Menu HTML output.
         * @param object $item   Menu item data object.
         * @param int    $depth  Depth of menu item.
         * @param array  $args   Additional arguments.
         */
        public function end_el( &$output, $item, $depth = 0, $args = array() ) {
            unset( $item );
            unset( $args );
            $output .= '</li>';
        }
    }
}
