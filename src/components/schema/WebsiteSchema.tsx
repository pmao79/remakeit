
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLanguage } from '@/contexts/LanguageContext';

interface WebsiteSchemaProps {
  url?: string;
  name?: string;
  description?: string;
  keywords?: string[];
  sameAs?: string[];
}

const WebsiteSchema: React.FC<WebsiteSchemaProps> = ({
  url = 'https://remakeit.com',
  name = 'RemakeiT',
  description = 'Professional web design, redesign and optimization services',
  keywords = ['web design', 'web redesign', 'SEO', 'conversion optimization'],
  sameAs = ['https://www.facebook.com/remakeit', 'https://twitter.com/remakeit', 'https://www.linkedin.com/company/remakeit']
}) => {
  const { language } = useLanguage();
  
  const schemaData = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: name,
    url: url,
    description: description,
    keywords: keywords.join(', '),
    potentialAction: {
      '@type': 'SearchAction',
      target: `${url}/search?q={search_term_string}`,
      'query-input': 'required name=search_term_string'
    },
    inLanguage: language === 'sv' ? 'sv-SE' : 'en-US',
    sameAs: sameAs
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(schemaData)}
      </script>
    </Helmet>
  );
};

export default WebsiteSchema;
