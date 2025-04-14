
import React from 'react';
import { Helmet } from 'react-helmet-async';

interface OrganizationSchemaProps {
  url?: string;
  logo?: string;
}

const OrganizationSchema: React.FC<OrganizationSchemaProps> = ({
  url = 'https://www.remakeit.se',
  logo = 'https://www.remakeit.se/lovable-uploads/f8a50cb9-78e9-4aa1-a5e9-55894c5c8407.png',
}) => {
  const schemaData = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'RemakeiT',
    url: url,
    logo: logo,
    sameAs: [
      'https://www.facebook.com/remakeit',
      'https://www.linkedin.com/company/remakeit',
      'https://twitter.com/remakeit'
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+46-123-456789',
      contactType: 'customer service',
      availableLanguage: ['English', 'Swedish']
    }
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(schemaData)}
      </script>
    </Helmet>
  );
};

export default OrganizationSchema;
