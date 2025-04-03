
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Pagination, PaginationContent, PaginationItem, PaginationLink } from '@/components/ui/pagination';
import RevealSection from '@/components/ui/reveal-section';
import SeoHead from '@/components/SeoHead';
import { useLanguage } from '@/contexts/LanguageContext';
import BreadcrumbSchema from '@/components/schema/BreadcrumbSchema';
import BlogPostSchema from '@/components/schema/BlogPostSchema';

const Blog: React.FC = () => {
  const { language, t } = useLanguage();
  
  // Scroll to top when the page loads
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // SEO data based on current language
  const seoData = {
    sv: {
      title: "Blogg - RemakeiT: Tips inom SEO, Webbutveckling & AI-trender",
      description: "Läs våra insiktsfulla artiklar om SEO, webbutveckling, AI och digitala strategier för företag. Få expertråd för att förbättra din online-närvaro.",
      keywords: "webbyrå Kristianstad, hemsida företag Skåne, SEO-optimerad webbsida, AI för företag, ny hemsida företag, webbutveckling, digital marknadsföring"
    },
    en: {
      title: "Blog - RemakeiT: SEO Tips, Web Development & AI Trends",
      description: "Read our insightful articles about SEO, web development, AI and digital strategies for businesses. Get expert advice to improve your online presence.",
      keywords: "web agency Kristianstad, website company Skåne, SEO-optimized website, AI for business, new business website, web development, digital marketing"
    }
  };

  // Blog posts data
  const blogPosts = [
    {
      id: 1,
      slug: 'why-seo-is-crucial-for-businesses',
      title: {
        sv: 'Varför SEO är avgörande för företag',
        en: 'Why SEO is crucial for businesses'
      },
      excerpt: {
        sv: 'En hemsida utan SEO är som en butik utan skylt. Optimera din sida för Google och nå fler kunder!',
        en: 'A website without SEO is like a store without a sign. Optimize your site for Google and reach more customers!'
      },
      date: '2023-09-15',
      category: {
        sv: 'SEO',
        en: 'SEO'
      }
    },
    {
      id: 2,
      slug: 'modern-website-increases-sales',
      title: {
        sv: 'Hur en modern hemsida ökar försäljningen',
        en: 'How a modern website increases sales'
      },
      excerpt: {
        sv: '75 % av kunder litar mer på företag med professionella hemsidor. Är din uppdaterad?',
        en: '75% of customers trust companies with professional websites more. Is yours updated?'
      },
      date: '2023-09-28',
      category: {
        sv: 'Webbutveckling',
        en: 'Web Development'
      }
    },
    {
      id: 3,
      slug: '5-things-business-website-must-have',
      title: {
        sv: '5 saker varje företagshemsida måste ha',
        en: '5 things every business website must have'
      },
      excerpt: {
        sv: 'Mobilvänlig design, snabb laddning, tydlig CTA, SEO-optimering och kontaktuppgifter. Har du allt?',
        en: 'Mobile-friendly design, fast loading, clear CTA, SEO optimization and contact details. Do you have it all?'
      },
      date: '2023-10-10',
      category: {
        sv: 'Webbutveckling',
        en: 'Web Development'
      }
    },
    {
      id: 4,
      slug: 'ai-and-web-design',
      title: {
        sv: 'AI och webbdesign – framtiden är här',
        en: 'AI and web design – the future is here'
      },
      excerpt: {
        sv: 'AI kan skapa snabbare, smartare och mer användarvänliga hemsidor. Är ditt företag redo?',
        en: 'AI can create faster, smarter and more user-friendly websites. Is your business ready?'
      },
      date: '2023-10-25',
      category: {
        sv: 'AI',
        en: 'AI'
      }
    },
    {
      id: 5,
      slug: 'improve-google-ranking',
      title: {
        sv: 'Så förbättrar du din hemsidas Google-rankning',
        en: 'How to improve your website\'s Google ranking'
      },
      excerpt: {
        sv: 'Snabba sidor, bra SEO-texter och mobilvänlighet – tre nycklar för en topposition på Google.',
        en: 'Fast pages, good SEO texts and mobile friendliness – three keys for a top position on Google.'
      },
      date: '2023-11-05',
      category: {
        sv: 'SEO',
        en: 'SEO'
      }
    },
    {
      id: 6,
      slug: 'small-businesses-invest-ai',
      title: {
        sv: 'Därför ska småföretag satsa på AI',
        en: 'Why small businesses should invest in AI'
      },
      excerpt: {
        sv: 'AI effektiviserar marknadsföring, kundservice och hemsideutveckling. Missa inte den digitala revolutionen!',
        en: 'AI streamlines marketing, customer service and website development. Don\'t miss the digital revolution!'
      },
      date: '2023-11-18',
      category: {
        sv: 'AI',
        en: 'AI'
      }
    },
    {
      id: 7,
      slug: 'how-often-update-website',
      title: {
        sv: 'Hur ofta ska du uppdatera din hemsida?',
        en: 'How often should you update your website?'
      },
      excerpt: {
        sv: 'Minst vartannat år! Teknik, SEO och design utvecklas snabbt – håll din sida aktuell.',
        en: 'At least every two years! Technology, SEO and design develop quickly – keep your site up to date.'
      },
      date: '2023-12-02',
      category: {
        sv: 'Webbutveckling',
        en: 'Web Development'
      }
    },
    {
      id: 8,
      slug: 'common-mistakes-business-websites',
      title: {
        sv: 'Vanliga misstag företag gör med sina hemsidor',
        en: 'Common mistakes businesses make with their websites'
      },
      excerpt: {
        sv: 'Saknar SEO, långsam laddning, dålig mobilanpassning. Gör inte dessa misstag!',
        en: 'Lacks SEO, slow loading, poor mobile adaptation. Don\'t make these mistakes!'
      },
      date: '2023-12-15',
      category: {
        sv: 'Webbutveckling',
        en: 'Web Development'
      }
    },
    {
      id: 9,
      slug: 'cheap-website-can-be-expensive',
      title: {
        sv: 'Varför en billig hemsida kan bli dyr',
        en: 'Why a cheap website can become expensive'
      },
      excerpt: {
        sv: 'Billiga lösningar saknar ofta SEO och support – välj kvalitet och få fler kunder.',
        en: 'Cheap solutions often lack SEO and support – choose quality and get more customers.'
      },
      date: '2024-01-08',
      category: {
        sv: 'Webbutveckling',
        en: 'Web Development'
      }
    },
    {
      id: 10,
      slug: 'website-needs-upgrade',
      title: {
        sv: 'Så vet du att din hemsida behöver en uppgradering',
        en: 'How to know your website needs an upgrade'
      },
      excerpt: {
        sv: 'Om den är långsam, gammal eller svår att hitta på Google är det dags för en ny hemsida!',
        en: 'If it\'s slow, old or hard to find on Google, it\'s time for a new website!'
      },
      date: '2024-01-22',
      category: {
        sv: 'Webbutveckling',
        en: 'Web Development'
      }
    }
  ];

  // Format date to display in user's locale format
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
    return date.toLocaleDateString(language === 'sv' ? 'sv-SE' : 'en-US', options);
  };
  
  // Get breadcrumb data for schema
  const breadcrumbItems = [
    {
      name: language === 'sv' ? 'Hem' : 'Home',
      url: language === 'sv' ? 'https://remakeit.com/sv/' : 'https://remakeit.com/'
    },
    {
      name: language === 'sv' ? 'Blogg' : 'Blog',
      url: language === 'sv' ? 'https://remakeit.com/sv/blog' : 'https://remakeit.com/blog'
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SeoHead 
        title={seoData[language].title}
        description={seoData[language].description}
        keywords={seoData[language].keywords}
        canonical={language === 'sv' ? 'https://remakeit.com/sv/blog' : 'https://remakeit.com/blog'}
      />
      <BreadcrumbSchema items={breadcrumbItems} />
      <BlogPostSchema 
        posts={blogPosts.map(post => ({
          headline: post.title[language],
          description: post.excerpt[language],
          datePublished: post.date,
          url: `https://remakeit.com/${language === 'sv' ? 'sv/' : ''}blog/${post.slug}`,
          image: "https://remakeit.com/images/blog/default.jpg"
        }))}
      />
      
      <Nav />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/40 z-10" />
          <img
            src="/lovable-uploads/f8a50cb9-78e9-4aa1-a5e9-55894c5c8407.png"
            alt="RemakeiT Blog"
            className="w-full h-full object-cover object-center"
          />
        </div>
        <div className="container relative z-10 max-w-7xl mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display tracking-tight text-white mb-6">
              {language === 'sv' ? 'Blogg' : 'Blog'}
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8">
              {language === 'sv' 
                ? 'Insikter och expertråd om SEO, webbutveckling, AI och digitala strategier för ditt företag' 
                : 'Insights and expert advice on SEO, web development, AI and digital strategies for your business'}
            </p>
          </div>
        </div>
      </section>
      
      {/* Blog Posts Grid */}
      <RevealSection className="py-16 md:py-24">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {blogPosts.map((post) => (
              <Card key={post.id} className="bg-secondary/50 border-none overflow-hidden hover:shadow-lg transition-all">
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
                  >
                    {language === 'sv' ? 'Läs mer' : 'Read more'}
                  </Link>
                </CardFooter>
              </Card>
            ))}
          </div>
          
          {/* Pagination - for future expansion */}
          <Pagination className="mt-16">
            <PaginationContent>
              <PaginationItem>
                <PaginationLink isActive>1</PaginationLink>
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </div>
      </RevealSection>
      
      <Footer />
    </div>
  );
};

export default Blog;
