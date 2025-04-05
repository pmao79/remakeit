
import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SeoHeadProps {
  title: string;
  description: string;
  keywords?: string;
  canonical?: string;
  ogImage?: string;
  ogType?: string;
  noIndex?: boolean;
  children?: React.ReactNode;
  preload?: {
    href: string;
    as: string;
    type?: string;
    media?: string;
    fetchPriority?: "high" | "low" | "auto";
  }[];
  preconnect?: string[];
}

const SeoHead: React.FC<SeoHeadProps> = ({
  title,
  description,
  keywords,
  canonical = 'https://www.remakeit.se/',
  ogImage = 'https://www.remakeit.se/opengraph-image.png',
  ogType = 'website',
  noIndex = false,
  children,
  preload = [],
  preconnect = []
}) => {
  // Append brand name if not already included
  const formattedTitle = title.includes('RemakeiT') ? title : `${title} | RemakeiT`;

  // Make sure canonical URLs are absolute and use the primary domain
  const absoluteCanonical = canonical.startsWith('http') 
    ? canonical 
    : `https://www.remakeit.se${canonical.startsWith('/') ? canonical : `/${canonical}`}`;
  
  return (
    <Helmet>
      <title>{formattedTitle}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <link rel="canonical" href={absoluteCanonical} />
      
      {/* Robots directive for indexing control */}
      {noIndex && <meta name="robots" content="noindex, nofollow" />}
      
      {/* Font display strategy for better text visibility during font loading */}
      <style type="text/css">{`
        @font-face {
          font-display: swap;
        }
      `}</style>
      
      {/* Resource hints for performance optimization */}
      {preconnect.map((url, idx) => (
        <link key={`preconnect-${idx}`} rel="preconnect" href={url} crossOrigin="anonymous" />
      ))}
      
      {/* Preload critical resources with proper priority attributes */}
      {preload.map((item, idx) => (
        <link 
          key={`preload-${idx}`} 
          rel="preload" 
          href={item.href} 
          as={item.as} 
          type={item.type}
          media={item.media} 
          fetchPriority={item.fetchPriority}
        />
      ))}
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={absoluteCanonical} />
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
