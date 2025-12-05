import type { Metadata } from 'next';
import { Locale } from '../../../lib/i18n';
import { getMetadataForPage } from '../../../lib/seo-config';

export { default } from '../../impressum/page';

export function generateMetadata({ params }: { params: { locale: Locale } }): Metadata {
  return getMetadataForPage('impressum', params.locale);
}
