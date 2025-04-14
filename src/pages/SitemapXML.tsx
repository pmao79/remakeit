
import React, { useEffect } from 'react';
import SeoHead from '@/components/SeoHead';
import { useNavigate } from 'react-router-dom';

const SitemapXML: React.FC = () => {
  useEffect(() => {
    // Use the window.location for a direct redirect to the XML file
    window.location.href = '/sitemap.xml';
  }, []);

  return (
    <>
      <SeoHead 
        title="Sitemap | RemakeiT"
        description="XML Sitemap för RemakeiT webbplats"
        canonical="https://www.remakeit.se/sitemap.xml"
        noIndex={true} // No need to index this redirect page
      />
      <div className="min-h-screen flex items-center justify-center">
        <p>Omdirigerar till sitemap.xml...</p>
      </div>
    </>
  );
};

export default SitemapXML;
