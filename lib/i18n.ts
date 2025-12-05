export const locales = ['de', 'en', 'pl'] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = 'de';

const localeSet = new Set<Locale>(locales);

export function getLocaleFromPath(pathname: string): Locale {
  const segment = pathname.split('/').filter(Boolean)[0];
  return localeSet.has(segment as Locale) ? (segment as Locale) : defaultLocale;
}

export function removeLocalePrefix(pathname: string): string {
  const parts = pathname.split('/');
  const first = parts[1];
  if (localeSet.has(first as Locale)) {
    return '/' + parts.slice(2).join('/');
  }
  return pathname || '/';
}

export function getPathWithLocale(path: string, locale: Locale): string {
  const clean = path.startsWith('/') ? path : `/${path}`;
  if (locale === defaultLocale) return clean === '//' ? '/' : clean;
  if (clean === '/' || clean === '') return `/${locale}`;
  return `/${locale}${clean}`;
}

export function languageAlternates(path: string) {
  const clean = path.startsWith('/') ? path : `/${path}`;
  return {
    'x-default': clean,
    de: clean,
    en: getPathWithLocale(clean, 'en'),
    pl: getPathWithLocale(clean, 'pl')
  };
}
