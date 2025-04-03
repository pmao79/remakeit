
import React, { useEffect } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

const SitemapXML: React.FC = () => {
  const { language } = useLanguage();
  const baseUrl = 'https://remakeit.com';

  useEffect(() => {
    // Instead of using template literals which might add invisible whitespace,
    // we'll create the XML string manually ensuring there's nothing before the declaration
    const xmlContent = '<?xml version="1.0" encoding="UTF-8"?>' +
      '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">' +
      '  <url>' +
      '    <loc>' + baseUrl + '/</loc>' +
      '    <xhtml:link rel="alternate" hreflang="en" href="' + baseUrl + '/" />' +
      '    <xhtml:link rel="alternate" hreflang="sv" href="' + baseUrl + '/sv/" />' +
      '    <changefreq>weekly</changefreq>' +
      '    <priority>1.0</priority>' +
      '  </url>' +
      '  <url>' +
      '    <loc>' + baseUrl + '/about</loc>' +
      '    <xhtml:link rel="alternate" hreflang="en" href="' + baseUrl + '/about" />' +
      '    <xhtml:link rel="alternate" hreflang="sv" href="' + baseUrl + '/sv/about" />' +
      '    <changefreq>monthly</changefreq>' +
      '    <priority>0.8</priority>' +
      '  </url>' +
      '  <url>' +
      '    <loc>' + baseUrl + '/portfolio</loc>' +
      '    <xhtml:link rel="alternate" hreflang="en" href="' + baseUrl + '/portfolio" />' +
      '    <xhtml:link rel="alternate" hreflang="sv" href="' + baseUrl + '/sv/portfolio" />' +
      '    <changefreq>monthly</changefreq>' +
      '    <priority>0.8</priority>' +
      '  </url>' +
      '  <url>' +
      '    <loc>' + baseUrl + '/contact</loc>' +
      '    <xhtml:link rel="alternate" hreflang="en" href="' + baseUrl + '/contact" />' +
      '    <xhtml:link rel="alternate" hreflang="sv" href="' + baseUrl + '/sv/contact" />' +
      '    <changefreq>monthly</changefreq>' +
      '    <priority>0.8</priority>' +
      '  </url>' +
      '  <url>' +
      '    <loc>' + baseUrl + '/blog</loc>' +
      '    <xhtml:link rel="alternate" hreflang="en" href="' + baseUrl + '/blog" />' +
      '    <xhtml:link rel="alternate" hreflang="sv" href="' + baseUrl + '/sv/blog" />' +
      '    <changefreq>weekly</changefreq>' +
      '    <priority>0.8</priority>' +
      '  </url>' +
      '  <url>' +
      '    <loc>' + baseUrl + '/services/web-design</loc>' +
      '    <xhtml:link rel="alternate" hreflang="en" href="' + baseUrl + '/services/web-design" />' +
      '    <xhtml:link rel="alternate" hreflang="sv" href="' + baseUrl + '/sv/services/web-design" />' +
      '    <changefreq>monthly</changefreq>' +
      '    <priority>0.9</priority>' +
      '  </url>' +
      '  <url>' +
      '    <loc>' + baseUrl + '/services/web-redesign</loc>' +
      '    <xhtml:link rel="alternate" hreflang="en" href="' + baseUrl + '/services/web-redesign" />' +
      '    <xhtml:link rel="alternate" hreflang="sv" href="' + baseUrl + '/sv/services/web-redesign" />' +
      '    <changefreq>monthly</changefreq>' +
      '    <priority>0.9</priority>' +
      '  </url>' +
      '  <url>' +
      '    <loc>' + baseUrl + '/services/seo-optimization</loc>' +
      '    <xhtml:link rel="alternate" hreflang="en" href="' + baseUrl + '/services/seo-optimization" />' +
      '    <xhtml:link rel="alternate" hreflang="sv" href="' + baseUrl + '/sv/services/seo-optimization" />' +
      '    <changefreq>monthly</changefreq>' +
      '    <priority>0.9</priority>' +
      '  </url>' +
      '  <url>' +
      '    <loc>' + baseUrl + '/services/conversion-optimization</loc>' +
      '    <xhtml:link rel="alternate" hreflang="en" href="' + baseUrl + '/services/conversion-optimization" />' +
      '    <xhtml:link rel="alternate" hreflang="sv" href="' + baseUrl + '/sv/services/conversion-optimization" />' +
      '    <changefreq>monthly</changefreq>' +
      '    <priority>0.9</priority>' +
      '  </url>' +
      '</urlset>';

    // Set content type to XML
    document.title = "XML Sitemap";
    
    // Create a blob with the XML content and the correct MIME type
    const blob = new Blob([xmlContent], { type: 'application/xml' });
    const url = URL.createObjectURL(blob);
    
    // Use document.open/write/close for direct control over the document content
    document.open('text/xml');
    document.write(xmlContent);
    document.close();
    
    return () => {
      URL.revokeObjectURL(url);
    };
  }, [baseUrl]); 

  return null;
};

export default SitemapXML;
