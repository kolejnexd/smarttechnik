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
  
  // Przygotowanie nawigacji z obsługą podstron (children)
  const localizedNav = useMemo(
    () =>
      navContent.navLinks.map((link) => ({
        ...link,
        href: `${getLocalizedPath(link.pageId, locale)}${link.anchor ?? ''}`,
        children: link.children?.map(child => ({
          ...child,
          href: getLocalizedPath(child.pageId, locale)
        }))
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
          <Image src="/assets/images/Logo-SmaRTechnik.svg" alt="smaRTtechnik Logo" width={160} height={64} />
          <span className="brand-text">smaRTtechnik</span>
        </Link>

        <nav className={`nav-links-wrapper ${open ? 'is-open' : ''}`} aria-label="Hauptnavigation">
          <div className="nav-links">
            {localizedNav.map((link) => (
              <div key={link.href} className="nav-item-group">
                <Link 
                  href={link.href} 
                  className="nav-link" 
                  onClick={() => !link.children && setOpen(false)}
                >
                  {link.label}
                </Link>
                
                {/* Renderowanie Dropdown, jeśli są podstrony */}
                {link.children && link.children.length > 0 && (
                  <div className="dropdown-menu">
                    {link.children.map((child) => (
                      <Link 
                        key={child.href} 
                        href={child.href} 
                        className="dropdown-link"
                        onClick={() => setOpen(false)}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
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