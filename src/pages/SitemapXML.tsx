
import React, { useEffect } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

const SitemapXML: React.FC = () => {
  const { language } = useLanguage();
  const baseUrl = 'https://remakeit.com';

  useEffect(() => {
    // Create the XML string with no leading whitespace
    const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
  <url>
    <loc>${baseUrl}/</loc>
    <xhtml:link rel="alternate" hreflang="en" href="${baseUrl}/" />
    <xhtml:link rel="alternate" hreflang="sv" href="${baseUrl}/sv/" />
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>${baseUrl}/about</loc>
    <xhtml:link rel="alternate" hreflang="en" href="${baseUrl}/about" />
    <xhtml:link rel="alternate" hreflang="sv" href="${baseUrl}/sv/about" />
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>${baseUrl}/portfolio</loc>
    <xhtml:link rel="alternate" hreflang="en" href="${baseUrl}/portfolio" />
    <xhtml:link rel="alternate" hreflang="sv" href="${baseUrl}/sv/portfolio" />
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>${baseUrl}/contact</loc>
    <xhtml:link rel="alternate" hreflang="en" href="${baseUrl}/contact" />
    <xhtml:link rel="alternate" hreflang="sv" href="${baseUrl}/sv/contact" />
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>${baseUrl}/blog</loc>
    <xhtml:link rel="alternate" hreflang="en" href="${baseUrl}/blog" />
    <xhtml:link rel="alternate" hreflang="sv" href="${baseUrl}/sv/blog" />
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>${baseUrl}/services/web-design</loc>
    <xhtml:link rel="alternate" hreflang="en" href="${baseUrl}/services/web-design" />
    <xhtml:link rel="alternate" hreflang="sv" href="${baseUrl}/sv/services/web-design" />
    <changefreq>monthly</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>${baseUrl}/services/web-redesign</loc>
    <xhtml:link rel="alternate" hreflang="en" href="${baseUrl}/services/web-redesign" />
    <xhtml:link rel="alternate" hreflang="sv" href="${baseUrl}/sv/services/web-redesign" />
    <changefreq>monthly</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>${baseUrl}/services/seo-optimization</loc>
    <xhtml:link rel="alternate" hreflang="en" href="${baseUrl}/services/seo-optimization" />
    <xhtml:link rel="alternate" hreflang="sv" href="${baseUrl}/sv/services/seo-optimization" />
    <changefreq>monthly</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>${baseUrl}/services/conversion-optimization</loc>
    <xhtml:link rel="alternate" hreflang="en" href="${baseUrl}/services/conversion-optimization" />
    <xhtml:link rel="alternate" hreflang="sv" href="${baseUrl}/sv/services/conversion-optimization" />
    <changefreq>monthly</changefreq>
    <priority>0.9</priority>
  </url>
</urlset>`;

    // Set proper XML Content-Type header
    document.title = "XML Sitemap";
    
    // Create a blob with the XML content and the correct MIME type
    const blob = new Blob([xml], { type: 'application/xml' });
    const url = URL.createObjectURL(blob);
    
    // Replace the current document with the XML content
    window.location.replace(url);
    
    return () => {
      URL.revokeObjectURL(url);
    };
  }, [baseUrl]); // Add baseUrl to dependency array

  return null; // We don't need to render anything as we're redirecting
};

export default SitemapXML;
