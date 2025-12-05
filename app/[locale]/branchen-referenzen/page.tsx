import type { Metadata } from 'next';
import { Locale } from '../../../lib/i18n';
import { getMetadataForPage } from '../../../lib/seo-config';

export { default } from '../../branchen-referenzen/page';

export function generateMetadata({ params }: { params: { locale: Locale } }): Metadata {
  return getMetadataForPage('branchen-referenzen', params.locale);
}
