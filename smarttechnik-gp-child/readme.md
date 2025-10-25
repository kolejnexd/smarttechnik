# smartTechnik GP Child Theme

GeneratePress child theme optimised for smartTechnik GmbH – regionale Spezialisten für Glasfaser-Spleißen, Netzwerktechnik und Messtechnik im Rhein-Main-Gebiet.

## Anforderungen

- WordPress 6.x
- Aktiviertes GeneratePress (Parent Theme)
- PHP 7.4 oder höher

## Installation

1. `smarttechnik-gp-child` nach `wp-content/themes/` kopieren.
2. Im WordPress-Backend unter **Design → Themes** den Child Theme aktivieren.
3. Optional: [WordPress Importer](https://wordpress.org/plugins/wordpress-importer/) installieren.
4. Die Datei `demo-content/smarttechnik-demo-content.xml` importieren, um Startseite, Leistungen, Referenzen, Landingpages, FAQ, Impressum und Datenschutz automatisch anzulegen.
5. Unter **Einstellungen → Lesen** sicherstellen, dass „Startseite“ auf die importierte Seite „Startseite“ zeigt (Importer erledigt dies automatisch).

## Highlights

- Mobile-first Layout mit `.container`-Grid (max. 1200px) und großzügiger Typografie (H1 ~48px, Body 18px).
- Farbpalette: Hintergrund #ffffff, Akzent #0048ff, Hover #336bff, dezente Linien rgba(0,0,0,0.05).
- Sticky Header mit zugänglichem Burger-Menü, CTA „Angebot anfordern“ und Mobil-Navigation.
- Deutsche Frontpage-Sektionen: Hero, Kernleistungen, Warum smartTechnik, Prozess, Vertrauen & Nachweise, Kennzahlen, Abschluss-CTA.
- Lokalisierte Footer-Daten (NAP) inklusive Adresse Odenwaldstr. 14, 63517 Rodenbach sowie Tel. +49 157 31685721 / +49 157 82854321.
- Vanilla-JS für Menü-Toggle und Sticky-Verhalten – keine schweren Frameworks.
- `functions.php` liefert Meta-Descriptions pro Landingpage und LocalBusiness JSON-LD Schema.
- `page.php`-Wrapper sorgt dafür, dass importierte Inhalte automatisch im `.section`/`.container` Layout erscheinen.

## Inhalte anpassen

- Navigation über **Design → Menüs** pflegen (Primary Menü Location).
- Kontaktdaten oder rechtliche Angaben in `footer.php` ändern.
- Farben, Buttons und Spacing in `style.css` bzw. `assets/css/custom.css` anpassen.
- Startseitenabschnitte unter `template-parts/` bearbeiten (Hero, Services, Why, Process, Trust, Metrics, CTA).
- Formulartexte oder Hinweise in `page-contact.php` aktualisieren (inkl. TODO für `wp_mail()`).

## Demo Content (WXR)

Der Import erzeugt folgende Seiten & Menüs:

- **Startseite** (Slug `startseite`) mit hero, Leistungen, Prozess, Kennzahlen & CTA.
- Landingpages für `glasfaser-spleissen-frankfurt`, `netzwerktechnik-frankfurt`, `messtechnik-otdr-datenmessung`.
- **Leistungen**, **Referenzen**, **Über uns**, **FAQ**, **Kontakt**, **Impressum**, **Datenschutz**.
- Primary-Menü mit Startseite, Leistungen, Referenzen, Über uns, FAQ, Kontakt, Datenschutz, Impressum.

Alle Bilder werden von Unsplash/Pexels eingebunden und enthalten Lizenz-Hinweise als HTML-Kommentar. Für produktive Umgebungen nach Möglichkeit eigene, optimierte WebP-Dateien hinterlegen.
