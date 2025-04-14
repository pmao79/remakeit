
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';

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
  prefetch?: string[];
  dnsPrefetch?: string[];
}

const SeoHead: React.FC<SeoHeadProps> = ({
  title,
  description,
  keywords,
  canonical,
  ogImage = 'https://www.remakeit.se/opengraph-image.png',
  ogType = 'website',
  noIndex = false,
  children,
  preload = [],
  preconnect = [],
  prefetch = [],
  dnsPrefetch = []
}) => {
  const { language } = useLanguage();
  const location = useLocation();
  
  // Append brand name if not already included
  const formattedTitle = title.includes('RemakeiT') ? title : `${title} | RemakeiT`;
  
  // Get the current path and properly format it for canonical URLs
  const currentPath = location.pathname;
  
  // If a custom canonical wasn't provided, use the current path
  let absoluteCanonical = canonical;
  
  if (!canonical) {
    // For default language (sv), use the path as is
    if (language === 'sv') {
      absoluteCanonical = `https://www.remakeit.se${currentPath}`;
    } 
    // For English, make sure we're using /en/ prefix correctly
    else {
      if (currentPath.startsWith('/en')) {
        absoluteCanonical = `https://www.remakeit.se${currentPath}`;
      } else {
        absoluteCanonical = `https://www.remakeit.se/en${currentPath === '/' ? '' : currentPath}`;
      }
    }
  }
  
  // Make sure canonical URLs are absolute 
  if (!absoluteCanonical.startsWith('http')) {
    absoluteCanonical = `https://www.remakeit.se${absoluteCanonical.startsWith('/') ? absoluteCanonical : `/${absoluteCanonical}`}`;
  }
  
  // Create alternate language URLs for hreflang tags
  const svURL = language === 'sv' 
    ? absoluteCanonical 
    : absoluteCanonical.replace('/en/', '/').replace('/en', '/');
    
  const enURL = language === 'en' 
    ? absoluteCanonical 
    : absoluteCanonical.replace('https://www.remakeit.se/', 'https://www.remakeit.se/en/');
  
  return (
    <Helmet>
      <title>{formattedTitle}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <link rel="canonical" href={absoluteCanonical} />
      
      {/* Hreflang tags for internationalization */}
      <link rel="alternate" hreflang="sv" href={svURL} />
      <link rel="alternate" hreflang="en" href={enURL} />
      <link rel="alternate" hreflang="x-default" href={svURL} />
      
      {/* Robots directive for indexing control */}
      {noIndex && <meta name="robots" content="noindex, nofollow" />}
      
      {/* Font display strategy for better text visibility during font loading */}
      <style type="text/css">{`
        @font-face {
          font-display: swap;
        }
      `}</style>
      
      {/* DNS prefetch for performance optimization */}
      {dnsPrefetch.map((url, idx) => (
        <link key={`dns-prefetch-${idx}`} rel="dns-prefetch" href={url} />
      ))}
      
      {/* Preconnect for performance optimization */}
      {preconnect.map((url, idx) => (
        <link key={`preconnect-${idx}`} rel="preconnect" href={url} crossOrigin="anonymous" />
      ))}
      
      {/* Prefetch resources that will be needed soon */}
      {prefetch.map((url, idx) => (
        <link key={`prefetch-${idx}`} rel="prefetch" href={url} />
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
