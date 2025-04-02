
import React from 'react';
import { Helmet } from 'react-helmet-async';

interface ServiceSchemaProps {
  name: string;
  description: string;
  url: string;
  providerName?: string;
  providerUrl?: string;
  serviceArea?: string;
}

const ServiceSchema: React.FC<ServiceSchemaProps> = ({
  name,
  description,
  url,
  providerName = 'RemakeiT',
  providerUrl = 'https://remakeit.com',
  serviceArea = 'Worldwide'
}) => {
  const schemaData = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: name,
    name: name,
    description: description,
    url: url,
    provider: {
      '@type': 'Organization',
      name: providerName,
      url: providerUrl
    },
    areaServed: serviceArea
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(schemaData)}
      </script>
    </Helmet>
  );
};

export default ServiceSchema;
