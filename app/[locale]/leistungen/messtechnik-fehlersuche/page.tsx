import type { Metadata } from 'next';
import Page from '../../../leistungen/messtechnik-fehlersuche/page';
import { Locale } from '../../../../lib/i18n';
import { getMetadataForPage } from '../../../../lib/seo-config';

export function generateMetadata({ params }: { params: { locale: Locale } }): Metadata {
  return getMetadataForPage('messtechnik-fehlersuche', params.locale);
}

export default function LocalePage(props: { params: { locale: Locale } }) {
  return <Page {...props} />;
}
