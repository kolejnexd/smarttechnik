import type { Metadata } from 'next';
import Page from '../page';
import { getMetadataForPage } from '../../lib/seo-config';
import { Locale } from '../../lib/i18n';

export function generateMetadata({ params }: { params: { locale: Locale } }): Metadata {
  return getMetadataForPage('home', params.locale);
}

export default function LocaleHome(props: { params: { locale: Locale } }) {
  return <Page {...props} />;
}
