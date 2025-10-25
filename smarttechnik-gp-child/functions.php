<?php
/**
 * smartTechnik GP Child functions and definitions.
 *
 * @package smarttechnik-gp-child
 */

defined( 'ABSPATH' ) || exit;

require_once get_stylesheet_directory() . '/inc/setup.php';
require_once get_stylesheet_directory() . '/inc/navwalker.php';

if ( ! function_exists( 'smarttechnik_menu_fallback' ) ) {
    /**
     * Fallback navigation markup showing top-level pages when no menu is assigned.
     */
    function smarttechnik_menu_fallback() {
        echo '<ul class="menu">';
        wp_list_pages(
            array(
                'title_li' => false,
                'depth'    => 1,
            )
        );
        echo '</ul>';
    }
}

/**
 * Enqueue child theme assets.
 */
function smarttechnik_child_enqueue_scripts() {
    wp_enqueue_style(
        'smarttechnik-child-fonts',
        'https://fonts.googleapis.com/css2?family=Inter:wght@400;500&family=Poppins:wght@500;600&display=swap',
        array(),
        null
    );

    wp_enqueue_style(
        'smarttechnik-child-style',
        get_stylesheet_directory_uri() . '/style.css',
        array( 'generate-style' ),
        wp_get_theme()->get( 'Version' )
    );

    wp_enqueue_style(
        'smarttechnik-child-custom',
        get_stylesheet_directory_uri() . '/assets/css/custom.css',
        array( 'smarttechnik-child-style' ),
        wp_get_theme()->get( 'Version' )
    );

    wp_enqueue_script(
        'smarttechnik-child-main',
        get_stylesheet_directory_uri() . '/assets/js/main.js',
        array(),
        wp_get_theme()->get( 'Version' ),
        true
    );
    wp_script_add_data( 'smarttechnik-child-main', 'defer', true );
}
add_action( 'wp_enqueue_scripts', 'smarttechnik_child_enqueue_scripts', 20 );

/**
 * Disable emoji scripts and styles for performance.
 */
function smarttechnik_disable_emojis() {
    remove_action( 'wp_head', 'print_emoji_detection_script', 7 );
    remove_action( 'wp_print_styles', 'print_emoji_styles' );
    remove_action( 'admin_print_scripts', 'print_emoji_detection_script' );
    remove_action( 'admin_print_styles', 'print_emoji_styles' );
}
add_action( 'init', 'smarttechnik_disable_emojis' );

/**
 * Remove WP generator tag.
 */
remove_action( 'wp_head', 'wp_generator' );

/**
 * Output contextual meta descriptions for key pages.
 */
function smarttechnik_meta_descriptions() {
    if ( is_admin() ) {
        return;
    }

    $descriptions = array(
        'leistungen'                    => 'Glasfaser-Spleißen, strukturierte Netzwerktechnik, OTDR-Messungen und Abnahmeprotokolle im Rhein-Main-Gebiet. smartTechnik GmbH – zertifizierte Techniker vor Ort in Frankfurt am Main.',
        'glasfaser-spleissen-frankfurt'  => 'Professionelles Glasfaser-Spleißen, OTDR-Messungen und Express-Reparaturen in Frankfurt am Main. Dokumentierte Qualität & schnelle Vor-Ort-Reaktion.',
        'netzwerktechnik-frankfurt'     => 'Planung und Installation strukturierter Netzwerktechnik, Racks und Backbone-Verbindungen in Frankfurt am Main und Rhein-Main.',
        'messtechnik-otdr-datenmessung' => 'OTDR- und Dämpfungsmessungen, Abnahmeprotokolle und Qualitätsnachweise für Glasfaser- und Datennetze in Frankfurt am Main.',
        'referenzen'                    => 'Ausgewählte Projekte zu Glasfaser-Spleißen, Netzwerktechnik und Messtechnik im Raum Frankfurt am Main & Rhein-Main.',
        'ueber-uns'                     => 'smartTechnik GmbH – regionale Spezialisten für Glasfaser, Netzwerktechnik und Messtechnik in Frankfurt am Main.',
        'faq'                           => 'Antworten auf häufige Fragen zu Glasfaser-Spleißen, Netzwerktechnik, OTDR-Messungen und Abnahmeprotokollen im Rhein-Main-Gebiet.',
        'kontakt'                       => 'Kontaktieren Sie smartTechnik in Frankfurt am Main. Angebot innerhalb von 24 Stunden, Telefon +49 157 31685721, E-Mail info@smarttechnik.eu.',
        'impressum'                     => 'Impressum der smartTechnik GmbH – Technikstandort Rodenbach bei Frankfurt am Main. Kontakt und Unternehmensdaten.',
        'datenschutz'                   => 'Informationen zur Verarbeitung personenbezogener Daten durch die smartTechnik GmbH in Frankfurt am Main.',
    );

    $description = 'smartTechnik GmbH – Glasfaser-Spleißen, Netzwerktechnik, Messtechnik und Server-Infrastruktur für Unternehmen in Frankfurt am Main & Rhein-Main.';

    if ( is_front_page() || is_home() ) {
        $description = 'Zertifiziertes Glasfaser-Spleißen, Netzwerktechnik, OTDR-Messungen und Server-Infrastruktur in Frankfurt am Main & Rhein-Main. Schnelle Reaktionszeiten, dokumentierte Abnahmen, 24/7 Bereitschaft.';
    } else {
        $object = get_queried_object();
        if ( $object instanceof WP_Post && ! empty( $object->post_name ) ) {
            $slug = $object->post_name;
            if ( isset( $descriptions[ $slug ] ) ) {
                $description = $descriptions[ $slug ];
            }
        }
    }

    printf( "\n<meta name=\"description\" content=\"%s\" />\n", esc_attr( $description ) );
}
add_action( 'wp_head', 'smarttechnik_meta_descriptions', 1 );

/**
 * Output LocalBusiness schema markup.
 */
function smarttechnik_local_business_schema() {
    if ( is_admin() ) {
        return;
    }

    $schema = array(
        '@context'   => 'https://schema.org',
        '@type'      => 'LocalBusiness',
        '@id'        => trailingslashit( home_url() ) . '#smarttechnik-gmbh',
        'name'       => 'smartTechnik GmbH',
        'description'=> 'Glasfaser-Spleißen, Netzwerktechnik, OTDR-Messtechnik und Abnahmeprotokolle in Frankfurt am Main und Rhein-Main.',
        'address'    => array(
            '@type'           => 'PostalAddress',
            'streetAddress'   => 'Odenwaldstr. 14',
            'postalCode'      => '63517',
            'addressLocality' => 'Rodenbach',
            'addressRegion'   => 'Hessen',
            'addressCountry'  => 'DE',
        ),
        'areaServed' => array(
            'Frankfurt am Main',
            'Rhein-Main-Gebiet',
            'Offenbach',
            'Hanau',
            'Wiesbaden',
            'Mainz',
            'Darmstadt',
        ),
        'telephone'  => '+49 157 31685721',
        'url'        => home_url( '/' ),
        'serviceType'=> array(
            'Glasfaser Spleißen',
            'OTDR-Messung',
            'Netzwerktechnik',
            'Strukturverkabelung',
            'Abnahmeprotokolle',
        ),
        'sameAs'     => array(),
    );

    echo "\n<script type=\"application/ld+json\">" . wp_json_encode( $schema, JSON_UNESCAPED_SLASHES | JSON_UNESCAPED_UNICODE ) . "</script>\n";
}
add_action( 'wp_head', 'smarttechnik_local_business_schema', 20 );
