
import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SeoHeadProps {
  title: string;
  description: string;
  keywords?: string;
  canonical?: string;
  ogImage?: string;
  ogType?: string;
  children?: React.ReactNode;
}

const SeoHead: React.FC<SeoHeadProps> = ({
  title,
  description,
  keywords,
  canonical = 'https://remakeit.com/',
  ogImage = 'https://lovable.dev/opengraph-image-p98pqg.png',
  ogType = 'website',
  children
}) => {
  // Append brand name if not already included
  const formattedTitle = title.includes('RemakeiT') ? title : `${title} | RemakeiT`;
  
  return (
    <Helmet>
      <title>{formattedTitle}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <link rel="canonical" href={canonical} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={canonical} />
      <meta property="og:title" content={formattedTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={formattedTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      
      {children}
    </Helmet>
  );
};

export default SeoHead;
