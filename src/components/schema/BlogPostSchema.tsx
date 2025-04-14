
import React from 'react';
import { Helmet } from 'react-helmet-async';

interface BlogPost {
  headline: string;
  description: string;
  image: string;
  datePublished: string;
  dateModified?: string;
  url: string;
}

interface BlogPostSchemaProps {
  posts: BlogPost[];
}

const BlogPostSchema: React.FC<BlogPostSchemaProps> = ({ posts }) => {
  const schemaData = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    itemListElement: posts.map((post, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      item: {
        '@type': 'BlogPosting',
        headline: post.headline,
        description: post.description,
        image: post.image,
        datePublished: post.datePublished,
        dateModified: post.dateModified || post.datePublished,
        url: post.url,
        author: {
          '@type': 'Organization',
          name: 'RemakeiT'
        },
        publisher: {
          '@type': 'Organization',
          name: 'RemakeiT',
          logo: {
            '@type': 'ImageObject',
            url: 'https://remakeit.com/logo.png'
          }
        },
        mainEntityOfPage: {
          '@type': 'WebPage',
          '@id': post.url
        }
      }
    }))
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(schemaData)}
      </script>
    </Helmet>
  );
};

export default BlogPostSchema;
