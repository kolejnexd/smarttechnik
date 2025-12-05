/* eslint-disable react/jsx-no-undef */
"use client";

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useMemo, useState } from 'react';
import { getLocaleFromPath, getPathWithLocale, locales, removeLocalePrefix } from '../lib/i18n';
import { getLocalizedPath } from '../lib/seo-config';
import { getNavContent } from '../lib/navigation';

export default function SiteHeader() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname() || '/';
  const locale = getLocaleFromPath(pathname);
  const navContent = useMemo(() => getNavContent(locale), [locale]);
  const basePath = removeLocalePrefix(pathname) || '/';
  const localizedNav = useMemo(
    () =>
      navContent.navLinks.map((link) => ({
        ...link,
        href: `${getLocalizedPath(link.pageId, locale)}${link.anchor ?? ''}`
      })),
    [locale, navContent]
  );

  const localeSwitchLinks = useMemo(
    () =>
      locales.map((loc) => ({
        locale: loc,
        href: getPathWithLocale(basePath === '' ? '/' : basePath, loc)
      })),
    [basePath]
  );

  return (
    <header className="site-header">
      <div className="container nav">
        <Link href={getLocalizedPath('home', locale)} className="brand" aria-label={navContent.brandLabel}>
          <Image src="/assets/images/Logo-SmaRTechnik.svg" alt="smaRTtechnik Logo" width={160} height={48} />
          <span className="brand-text">smaRTtechnik</span>
        </Link>

        <nav className={`nav-links-wrapper ${open ? 'is-open' : ''}`} aria-label="Hauptnavigation">
          <div className="nav-links">
            {localizedNav.map((link) => (
              <Link key={link.href} href={link.href} className="nav-link" onClick={() => setOpen(false)}>
                {link.label}
              </Link>
            ))}
            <div className="lang-switch lang-switch--header" aria-label="Language selection">
              {localeSwitchLinks.map((loc) => (
                <Link
                  key={loc.locale}
                  href={loc.href}
                  className={`lang-pill ${loc.locale === locale ? 'is-active' : ''}`}
                  aria-current={loc.locale === locale ? 'page' : undefined}
                  onClick={() => setOpen(false)}
                >
                  {loc.locale.toUpperCase()}
                </Link>
              ))}
            </div>
          </div>
          <Link href={getLocalizedPath('kontakt', locale)} className="nav-cta" onClick={() => setOpen(false)}>
            {navContent.ctaLabel}
          </Link>
        </nav>

        <button
          className="mobile-toggle"
          aria-expanded={open}
          aria-label="Navigation öffnen"
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  );
}
