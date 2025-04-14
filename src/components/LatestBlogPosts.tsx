
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import RevealSection from '@/components/ui/reveal-section';
import { useLanguage } from '@/contexts/LanguageContext';
import { blogPosts } from '@/data/blogData';

const LatestBlogPosts: React.FC = () => {
  const { language } = useLanguage();
  
  // Get only the three most recent blog posts
  const recentPosts = blogPosts.slice(0, 3);
  
  // Format date to display in user's locale format
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
    return date.toLocaleDateString(language === 'sv' ? 'sv-SE' : 'en-US', options);
  };

  // Generate descriptive link text based on post slug
  const getReadMoreText = (slug: string, title: string): string => {
    if (slug === 'why-seo-is-crucial-for-businesses') {
      return language === 'sv' 
        ? 'Läs mer om varför SEO är viktigt för företag' 
        : 'Read more about why SEO is crucial for businesses';
    } else if (slug === 'modern-website-increases-sales') {
      return language === 'sv'
        ? 'Läs mer om hur en modern webbplats ökar försäljning'
        : 'Read more about how a modern website increases sales';
    } else if (slug === '5-things-business-website-must-have') {
      return language === 'sv'
        ? 'Läs mer om 5 måsten för företagshemsidan'
        : 'Read more about 5 things every business website must have';
    }
    
    // Generic descriptive link for other posts
    return language === 'sv'
      ? `Läs mer om ${title.toLowerCase()}`
      : `Read more about ${title.toLowerCase()}`;
  };

  return (
    <RevealSection className="py-16 bg-secondary/20">
      <div className="container max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold font-display tracking-tight">
            {language === 'sv' ? 'Senaste inläggen' : 'Latest posts'}
          </h2>
          <Link 
            to="/blog"
            className="flex items-center text-brand-teal hover:text-brand-teal/80 transition-colors"
          >
            {language === 'sv' ? 'Se alla inlägg' : 'View all posts'}
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {recentPosts.map((post) => (
            <Card key={post.id} className="bg-secondary/50 border-none overflow-hidden hover:shadow-md transition-all">
              <CardHeader className="pb-2">
                <div className="flex justify-between items-start mb-2">
                  <span className="text-xs font-medium px-2 py-1 rounded bg-primary/10 text-primary">
                    {post.category[language]}
                  </span>
                  <span className="text-xs text-muted-foreground">
                    {formatDate(post.date)}
                  </span>
                </div>
                <CardTitle className="text-xl">
                  <Link to={`/blog/${post.slug}`} className="hover:text-primary transition-colors">
                    {post.title[language]}
                  </Link>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  {post.excerpt[language]}
                </CardDescription>
              </CardContent>
              <CardFooter>
                <Link 
                  to={`/blog/${post.slug}`} 
                  className="text-primary hover:underline text-sm font-medium"
                  aria-label={post.title[language]}
                >
                  {getReadMoreText(post.slug, post.title[language])}
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </RevealSection>
  );
};

export default LatestBlogPosts;
