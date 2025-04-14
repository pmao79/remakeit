
import React, { useEffect } from 'react';
import SeoHead from '@/components/SeoHead';
import { useLanguage } from '@/contexts/LanguageContext';

const SitemapXML: React.FC = () => {
  const { language } = useLanguage();
  
  useEffect(() => {
    // Use the window.location for a direct redirect to the XML file
    window.location.href = '/sitemap.xml';
  }, []);

  return (
    <>
      <SeoHead 
        title={language === 'sv' ? "Sitemap | RemakeiT" : "Sitemap | RemakeiT"}
        description={language === 'sv' ? "XML Sitemap för RemakeiT webbplats" : "XML Sitemap for RemakeiT website"}
        canonical="https://www.remakeit.se/sitemap.xml"
        noIndex={true} // No need to index this redirect page
      />
      <div className="min-h-screen flex items-center justify-center">
        <p>{language === 'sv' ? "Omdirigerar till sitemap.xml..." : "Redirecting to sitemap.xml..."}</p>
      </div>
    </>
  );
};

export default SitemapXML;
