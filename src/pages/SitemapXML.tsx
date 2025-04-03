
import React, { useEffect } from 'react';

const SitemapXML: React.FC = () => {
  useEffect(() => {
    // Create a temporary link to force proper browser handling of the XML file
    const link = document.createElement('a');
    link.href = '/sitemap.xml';
    link.setAttribute('type', 'application/xml');
    link.click();
    
    // Alternatively, redirect with a delay to ensure proper page navigation
    setTimeout(() => {
      window.location.replace('/sitemap.xml');
    }, 100);
  }, []);

  return null;
};

export default SitemapXML;
