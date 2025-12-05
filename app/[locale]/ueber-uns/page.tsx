import type { Metadata } from 'next';
import { Locale } from '../../../lib/i18n';
import { getMetadataForPage } from '../../../lib/seo-config';

export { default } from '../../ueber-uns/page';

export function generateMetadata({ params }: { params: { locale: Locale } }): Metadata {
  return getMetadataForPage('ueber-uns', params.locale);
}
