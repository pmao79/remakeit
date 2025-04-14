
import React, { useEffect } from 'react';
import SeoHead from '@/components/SeoHead';

const SitemapXML: React.FC = () => {
  useEffect(() => {
    // Simple redirect to sitemap.xml
    window.location.href = '/sitemap.xml';
  }, []);

  return (
    <>
      <SeoHead 
        title="Sitemap | RemakeiT"
        description="XML Sitemap for RemakeiT website"
        canonical="https://www.remakeit.se/sitemap.xml"
        noIndex={true} // No need to index this redirect page
      />
      <div className="min-h-screen flex items-center justify-center">
        <p>Redirecting to sitemap.xml...</p>
      </div>
    </>
  );
};

export default SitemapXML;
