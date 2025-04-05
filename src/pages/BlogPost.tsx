import React, { useEffect, useMemo } from 'react';
import { Link, useParams } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import RevealSection from '@/components/ui/reveal-section';
import { Button } from '@/components/ui/button';
import SeoHead from '@/components/SeoHead';
import { useLanguage } from '@/contexts/LanguageContext';
import BreadcrumbSchema from '@/components/schema/BreadcrumbSchema';
import ArticleSchema from '@/components/schema/ArticleSchema';
import NotFound from './NotFound';

// Import blog data
import { blogPosts } from '@/data/blogData';

const BlogPost: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const { language, t } = useLanguage();
  
  // Find the current post based on slug
  const post = useMemo(() => {
    return blogPosts.find(p => p.slug === slug);
  }, [slug]);
  
  // Scroll to top when the post loads
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  // If post not found, show 404
  if (!post) {
    return <NotFound />;
  }

  // Format date to display in user's locale format
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
    return date.toLocaleDateString(language === 'sv' ? 'sv-SE' : 'en-US', options);
  };
  
  // SEO data based on current post and language
  const title = post.title[language];
  const description = post.excerpt[language];
  const keywords = `${post.category[language]}, ${post.keywords?.[language] || ''}webbyrå kristianstad, hemsida företag skåne, SEO-optimerad webbsida`;
  const canonical = `https://www.remakeit.se/${language === 'sv' ? 'sv/' : ''}blog/${slug}`;
  
  // Get breadcrumb data for schema
  const breadcrumbItems = [
    {
      name: language === 'sv' ? 'Hem' : 'Home',
      url: language === 'sv' ? 'https://www.remakeit.se/sv/' : 'https://www.remakeit.se/'
    },
    {
      name: language === 'sv' ? 'Blogg' : 'Blog',
      url: language === 'sv' ? 'https://www.remakeit.se/sv/blog' : 'https://www.remakeit.se/blog'
    },
    {
      name: post.title[language],
      url: canonical
    }
  ];

  // Prepare preloaded resources for LCP optimization
  const preloadResources = [
    // Preload the hero image which is likely the LCP element
    {
      href: "/lovable-uploads/f8a50cb9-78e9-4aa1-a5e9-55894c5c8407.png",
      as: "image",
      type: "image/png" 
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SeoHead 
        title={title}
        description={description}
        keywords={keywords}
        canonical={canonical}
        preload={preloadResources}
      />
      <BreadcrumbSchema items={breadcrumbItems} />
      <ArticleSchema 
        headline={title}
        description={description}
        image="https://www.remakeit.se/images/blog/default.jpg"
        datePublished={post.date}
        url={canonical}
      />
      
      <Nav />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/40 z-10" />
          <img
            src="/lovable-uploads/f8a50cb9-78e9-4aa1-a5e9-55894c5c8407.png"
            alt={post.title[language]}
            className="w-full h-full object-cover object-center"
            loading="eager" 
            fetchPriority="high"
          />
        </div>
        <div className="container relative z-10 max-w-7xl mx-auto px-4">
          <div className="flex space-x-2 items-center mb-6">
            <Button variant="ghost" size="sm" className="text-white hover:bg-white/10" asChild>
              <Link to="/blog">
                <ArrowLeft className="h-4 w-4 mr-2" />
                {language === 'sv' ? 'Tillbaka till bloggen' : 'Back to blog'}
              </Link>
            </Button>
          </div>
          
          <div className="max-w-3xl">
            <div className="flex items-center space-x-4 mb-6">
              <span className="text-sm font-medium px-2 py-1 rounded bg-primary/20 text-primary">
                {post.category[language]}
              </span>
              <span className="text-sm text-gray-400">
                {formatDate(post.date)}
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold font-display tracking-tight text-white mb-6">
              {post.title[language]}
            </h1>
          </div>
        </div>
      </section>
      
      {/* Content */}
      <RevealSection className="py-16 md:py-24">
        <div className="container max-w-3xl mx-auto px-4">
          <div className="prose prose-lg dark:prose-invert">
            <p className="text-xl font-medium mb-8 text-foreground/90">
              {post.excerpt[language]}
            </p>
            <div className="space-y-6">
              <p className="text-foreground/80">
                {language === 'sv' 
                  ? `I dagens digitala landskap är det avgörande för företag att ha en stark online-närvaro. ${post.content?.sv || post.excerpt.sv} Detta är något vi på RemakeiT hjälper våra kunder med dagligen.`
                  : `In today's digital landscape, it's crucial for businesses to have a strong online presence. ${post.content?.en || post.excerpt.en} This is something we at RemakeiT help our customers with every day.`}
              </p>
              <p className="text-foreground/80">
                {language === 'sv'
                  ? 'Genom att implementera bästa praxis inom webbutveckling och SEO kan din verksamhet nå nya höjder. Vårt team av experter är dedikerade till att skapa moderna, responsiva webbplatser som inte bara ser fantastiska ut utan också presterar exceptionellt.'
                  : 'By implementing best practices in web development and SEO, your business can reach new heights. Our team of experts is dedicated to creating modern, responsive websites that not only look amazing but also perform exceptionally.'}
              </p>
              <p className="text-foreground/80">
                {language === 'sv'
                  ? 'Kontakta oss idag för att diskutera hur vi kan hjälpa ditt företag att förbättra sin digitala närvaro och nå fler kunder online.'
                  : 'Contact us today to discuss how we can help your business improve its digital presence and reach more customers online.'}
              </p>
            </div>
          </div>
        </div>
      </RevealSection>
      
      {/* Call to action */}
      <RevealSection className="bg-secondary/50 py-20">
        <div className="container max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold font-display mb-6">
            {language === 'sv' ? 'Redo att förbättra din hemsida?' : 'Ready to improve your website?'}
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            {language === 'sv'
              ? 'Ta det första steget mot en bättre digital närvaro idag'
              : 'Take the first step toward a better digital presence today'}
          </p>
          <Button asChild size="lg" className="bg-brand-teal text-black hover:bg-brand-teal/90">
            <Link to="/contact">
              {language === 'sv' ? 'Kontakta oss' : 'Contact us'}
            </Link>
          </Button>
        </div>
      </RevealSection>
      
      <Footer />
    </div>
  );
};

export default BlogPost;
