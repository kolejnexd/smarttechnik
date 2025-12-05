"use client";

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { getLocaleFromPath, getPathWithLocale, locales, removeLocalePrefix } from '../lib/i18n';
import { getLocalizedPath } from '../lib/seo-config';
import { getNavContent } from '../lib/navigation';

export default function SiteFooter() {
  const pathname = usePathname() || '/';
  const locale = getLocaleFromPath(pathname);
  const navContent = getNavContent(locale);
  const basePath = removeLocalePrefix(pathname) || '/';
  const localizedNav = navContent.navLinks.map((link) => ({
    ...link,
    href: `${getLocalizedPath(link.pageId, locale)}${link.anchor ?? ''}`
  }));
  const localizedLeistungen = navContent.serviceLinks.map((link) => ({
    ...link,
    href: getLocalizedPath(link.pageId, locale)
  }));
  const localeSwitchLinks = locales.map((loc) => ({
    locale: loc,
    href: getPathWithLocale(basePath === '' ? '/' : basePath, loc)
  }));

  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <Link href={getLocalizedPath('home', locale)} className="brand brand--footer">
            <Image src="/assets/images/Logo-SmaRTechnik.svg" alt="smaRTtechnik Logo" width={160} height={48} />
            <span className="brand-text">smaRTtechnik</span>
          </Link>
          <p className="muted">
            smaRTtechnik Lebek &amp; Stawczyk GbR
            <br />
            Odenwaldstr. 14, 63517 Rodenbach
          </p>
          <p className="muted">
            <a href="mailto:info@smarttechnik.eu">info@smarttechnik.eu</a>
            <br />
            <a href="tel:+4915731685721">+49 157 31685721</a>
            <br />
            <a href="tel:+4915782854321">+49 157 82854321</a>
          </p>
        </div>
        <div>
          <h3 className="footer-title">{navContent.footerHeadings.navigation}</h3>
          <ul className="footer-links">
            {localizedNav.map((link) => (
              <li key={link.href}>
                <Link href={link.href}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="footer-title">{navContent.footerHeadings.services}</h3>
          <ul className="footer-links">
            {localizedLeistungen.map((link) => (
              <li key={link.href}>
                <Link href={link.href}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="footer-title">{navContent.footerHeadings.legal}</h3>
          <ul className="footer-links">
            <li>
              <Link href={getLocalizedPath('impressum', locale)}>
                {navContent.footerHeadings.legalLinks.impressum}
              </Link>
            </li>
            <li>
              <Link href={getLocalizedPath('datenschutz', locale)}>
                {navContent.footerHeadings.legalLinks.privacy}
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="footer-title">{navContent.footerHeadings.language}</h3>
          <div className="lang-switch lang-switch--footer">
            {localeSwitchLinks.map((loc) => (
              <Link
                key={loc.locale}
                href={loc.href}
                className={`lang-pill ${loc.locale === locale ? 'is-active' : ''}`}
                aria-current={loc.locale === locale ? 'page' : undefined}
              >
                {loc.locale.toUpperCase()}
              </Link>
            ))}
          </div>
        </div>
      </div>
      <div className="container footer-bottom">
        <p className="muted">
          © {new Date().getFullYear()} smaRTtechnik Lebek &amp; Stawczyk GbR. Alle Rechte vorbehalten.
        </p>
      </div>
    </footer>
  );
}
