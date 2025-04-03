
import React, { useEffect } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

const SitemapXML: React.FC = () => {
  const { language } = useLanguage();
  const baseUrl = 'https://remakeit.com';

  useEffect(() => {
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

    // Create a blob with the XML content
    const blob = new Blob([xml], { type: 'application/xml' });
    const url = URL.createObjectURL(blob);
    
    // Download or display the XML content
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', 'sitemap.xml');
    
    // For a React app, we'll just redirect to the blob URL to display the XML
    window.location.href = url;
    
    return () => {
      URL.revokeObjectURL(url);
    };
  }, []);

  return <div>Generating sitemap.xml...</div>;
};

export default SitemapXML;
