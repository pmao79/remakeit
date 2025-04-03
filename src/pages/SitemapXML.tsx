
import React, { useEffect } from 'react';

const SitemapXML: React.FC = () => {
  useEffect(() => {
    // Simply redirect to the static sitemap.xml file in the public directory
    window.location.href = '/sitemap.xml';
  }, []);

  // Return null since this component doesn't render anything
  return null;
};

export default SitemapXML;
