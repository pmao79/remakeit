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
  
  const formattedTitle = title.includes('RemakeiT') ? title : `${title} | RemakeiT`;
  
  const currentPath = location.pathname;
  
  let absoluteCanonical = canonical;
  
  if (!canonical) {
    if (language === 'sv') {
      absoluteCanonical = `https://www.remakeit.se${currentPath}`;
    } else {
      if (currentPath.startsWith('/en')) {
        absoluteCanonical = `https://www.remakeit.se${currentPath}`;
      } else {
        absoluteCanonical = `https://www.remakeit.se/en${currentPath === '/' ? '' : currentPath}`;
      }
    }
  }
  
  if (!absoluteCanonical.startsWith('http')) {
    absoluteCanonical = `https://www.remakeit.se${absoluteCanonical.startsWith('/') ? absoluteCanonical : `/${absoluteCanonical}`}`;
  }
  
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
      
      <link rel="alternate" hrefLang="sv" href={svURL} />
      <link rel="alternate" hrefLang="en" href={enURL} />
      <link rel="alternate" hrefLang="x-default" href={svURL} />
      
      {noIndex && <meta name="robots" content="noindex, nofollow" />}
      
      <style type="text/css">{`
        @font-face {
          font-display: swap;
        }
      `}</style>
      
      {dnsPrefetch.map((url, idx) => (
        <link key={`dns-prefetch-${idx}`} rel="dns-prefetch" href={url} />
      ))}
      
      {preconnect.map((url, idx) => (
        <link key={`preconnect-${idx}`} rel="preconnect" href={url} crossOrigin="anonymous" />
      ))}
      
      {prefetch.map((url, idx) => (
        <link key={`prefetch-${idx}`} rel="prefetch" href={url} />
      ))}
      
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
      
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={absoluteCanonical} />
      <meta property="og:title" content={formattedTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={formattedTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      
      {children}
    </Helmet>
  );
};

export default SeoHead;
