
import React, { useEffect } from 'react';
import SeoHead from '@/components/SeoHead';

const SitemapXML: React.FC = () => {
  useEffect(() => {
    // Enkel omdirigering till sitemap.xml
    window.location.href = '/sitemap.xml';
  }, []);

  return (
    <>
      <SeoHead 
        title="Sitemap | RemakeiT"
        description="XML Sitemap for RemakeiT website"
      />
      <div className="min-h-screen flex items-center justify-center">
        <p>Redirecting to sitemap.xml...</p>
      </div>
    </>
  );
};

export default SitemapXML;
