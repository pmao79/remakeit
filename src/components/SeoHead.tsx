
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLanguage } from '@/contexts/LanguageContext';
import { useLocation } from 'react-router-dom';

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
  ogImage = 'https://www.remakeit.se/images/opengraph-image.png',
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

  // Get the current path for alternate language URL generation
  const path = location.pathname;
  
  // Determine canonical URL
  let absoluteCanonical = '';
  
  if (canonical) {
    // If canonical is explicitly provided, use it
    absoluteCanonical = canonical.startsWith('http') 
      ? canonical 
      : `https://www.remakeit.se${canonical.startsWith('/') ? canonical : `/${canonical}`}`;
  } else {
    // Otherwise generate based on current path and language
    // For Swedish (primary language)
    if (language === 'sv') {
      // If on root path
      if (path === '/') {
        absoluteCanonical = 'https://www.remakeit.se/';
      } 
      // If on another Swedish path
      else {
        absoluteCanonical = `https://www.remakeit.se${path}`;
      }
    } 
    // For English (secondary language)
    else {
      // If already on English path
      if (path.startsWith('/en')) {
        absoluteCanonical = `https://www.remakeit.se${path}`;
      } 
      // If on root path (should not happen with our URL-based language detection)
      else if (path === '/') {
        absoluteCanonical = 'https://www.remakeit.se/en';
      }
      // If on Swedish path (should not happen with our URL-based language detection)
      else {
        absoluteCanonical = `https://www.remakeit.se/en${path}`;
      }
    }
  }
  
  // Generate alternate language URLs for hreflang tags
  let svURL = '';
  let enURL = '';
  
  // Handle root path special case
  if (path === '/') {
    svURL = 'https://www.remakeit.se/';
    enURL = 'https://www.remakeit.se/en';
  }
  // Handle English paths
  else if (path.startsWith('/en')) {
    enURL = `https://www.remakeit.se${path}`;
    // Convert to Swedish equivalent by removing /en prefix
    const svPath = path.replace(/^\/en/, '');
    svURL = `https://www.remakeit.se${svPath}`;
  }
  // Handle Swedish paths
  else {
    svURL = `https://www.remakeit.se${path}`;
    enURL = `https://www.remakeit.se/en${path}`;
  }
  
  return (
    <Helmet>
      <title>{formattedTitle}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <link rel="canonical" href={absoluteCanonical} />
      
      {/* Hreflang tags for language alternates - Using correct hrefLang camelCase attribute */}
      <link rel="alternate" hrefLang="sv" href={svURL} />
      <link rel="alternate" hrefLang="en" href={enURL} />
      <link rel="alternate" hrefLang="x-default" href={svURL} />
      
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
