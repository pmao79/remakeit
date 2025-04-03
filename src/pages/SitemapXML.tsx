
import React, { useEffect } from 'react';

const SitemapXML: React.FC = () => {
  useEffect(() => {
    // Set the correct MIME type and navigate to the sitemap.xml file
    const link = document.createElement('a');
    link.href = '/sitemap.xml';
    link.setAttribute('type', 'application/xml');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    // Fallback redirect with a delay
    setTimeout(() => {
      window.location.replace('/sitemap.xml');
    }, 100);
  }, []);

  return null;
};

export default SitemapXML;
