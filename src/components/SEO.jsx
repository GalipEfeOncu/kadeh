import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function SEO({ title, description, canonicalUrl, ogImage, ogType = 'website' }) {
  const siteUrl = 'https://kadeh.vercel.app';
  const fullTitle = title ? `${title} | Kadeh` : 'Kadeh — Türkçe Alkol Rehberi';
  const defaultDesc = 'Kadeh — Türkçe alkol rehberi. Her içkinin hikayesi, tadım profili, nasıl içileceği ve kültürel bağlamı. Viski, rakı, şarap, bira ve daha fazlası.';
  const fullDesc = description || defaultDesc;
  const fullCanonical = canonicalUrl ? `${siteUrl}${canonicalUrl}` : siteUrl;
  const defaultImage = `${siteUrl}/images/og-default.png`;
  const fullImage = ogImage ? `${siteUrl}${ogImage}` : defaultImage;

  return (
    <Helmet>
      {/* Standart Meta Etiketleri */}
      <title>{fullTitle}</title>
      <meta name="description" content={fullDesc} />
      <link rel="canonical" href={fullCanonical} />

      {/* Open Graph / Facebook */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={fullDesc} />
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={fullCanonical} />
      <meta property="og:image" content={fullImage} />
      <meta property="og:locale" content="tr_TR" />
      <meta property="og:site_name" content="Kadeh" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={fullDesc} />
      <meta name="twitter:image" content={fullImage} />
    </Helmet>
  );
}
