import React, { useEffect } from 'react';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import RevealSection from '@/components/ui/reveal-section';
import ComparisonSlider from '@/components/ui/comparison-slider';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import SeoHead from '@/components/SeoHead';
import BreadcrumbSchema from '@/components/ui/breadcrumb-schema';

const Portfolio: React.FC = () => {
  const { language, t } = useLanguage();
  
  // SEO data based on current language
  const seoData = {
    sv: {
      title: "Portfolio - Se Våra Webbplatsprojekt & Transformationer | RemakeiT",
      description: "Utforska våra framgångsrika webbdesignprojekt. Se skillnaden före och efter när vi förvandlar föråldrade webbplatser till moderna, konverterande digitala upplevelser.",
      keywords: "webbdesign portfolio, webbplats före och efter, webbplats transformationer, webbdesign exempel, designprojekt, webbyrå case studies, webbplatsomvandlingar, responsiv design exempel, UX förbättringar, konverteringsoptimering resultat"
    },
    en: {
      title: "Portfolio - See Our Website Projects & Transformations | RemakeiT",
      description: "Explore our successful web design projects. See the before and after difference as we transform outdated websites into modern, converting digital experiences.",
      keywords: "web design portfolio, website before and after, website transformations, web design examples, design projects, web agency case studies, website makeovers, responsive design examples, UX improvements, conversion optimization results"
    }
  };
  
  // Breadcrumbs for portfolio page
  const breadcrumbItems = [
    {
      name: language === 'sv' ? 'Hem' : 'Home',
      url: language === 'sv' ? 'https://remakeit.com/sv/' : 'https://remakeit.com/'
    },
    {
      name: language === 'sv' ? 'Portfolio' : 'Portfolio',
      url: language === 'sv' ? 'https://remakeit.com/sv/portfolio' : 'https://remakeit.com/portfolio'
    }
  ];
  
  // Sample portfolio items with before/after images
  // In a real implementation, these would come from a database or API
  const portfolioItems = {
    sv: [
      {
        id: 1,
        title: "Lokal restaurang",
        description: "Förvandlade en föråldrad statisk webbplats till en modern, mobilanpassad upplevelse med möjlighet till onlinebeställning, vilket resulterade i en 40% ökning av onlinebeställningar.",
        category: "Restaurang",
        before: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=800&q=80",
        after: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&w=800&q=80",
        testimonial: "Förvandlingen var otrolig. Våra kunder älskar hur enkelt det är att beställa online nu, och vi har sett en betydande ökning av verksamheten sedan den nya sajten lanserades.",
        client: "Maria G., Ägare"
      },
      {
        id: 2,
        title: "Advokatbyrå",
        description: "Omdesignade en textung, föråldrad webbplats till en modern, klientfokuserad plattform som ökade leadgenereringen med 65% inom de första tre månaderna.",
        category: "Professionella tjänster",
        before: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
        after: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&w=800&q=80",
        testimonial: "Vår gamla webbplats var pinsam och representerade inte vår professionella nivå. Den nya designen har helt förändrat hur potentiella klienter uppfattar oss online.",
        client: "Robert T., Managing Partner"
      },
      {
        id: 3,
        title: "E-handelsbutik",
        description: "Byggde om en underpresterad onlinebutik med förbättrad produktnavigering, mobiloptimering och förenklad utcheckning, vilket resulterade i en 78% ökning av konverteringsgraden.",
        category: "E-handel",
        before: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800&q=80",
        after: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&w=800&q=80",
        testimonial: "Skillnaden i våra onlineförsäljningar före och efter RemakeiT är som natt och dag. Den nya sajten är vacker, snabb och, viktigast av allt, den konverterar besökare till köpare.",
        client: "Jennifer L., Grundare"
      }
    ],
    en: [
      {
        id: 1,
        title: "Local Restaurant",
        description: "Transformed an outdated static site into a modern, mobile-friendly experience with online ordering capabilities, resulting in a 40% increase in online orders.",
        category: "Restaurant",
        before: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=800&q=80",
        after: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&w=800&q=80",
        testimonial: "The transformation was incredible. Our customers love how easy it is to order online now, and we've seen a significant increase in business since the new site launched.",
        client: "Maria G., Owner"
      },
      {
        id: 2,
        title: "Law Firm",
        description: "Redesigned a text-heavy, outdated website into a modern, client-focused platform that increased lead generation by 65% within the first three months.",
        category: "Professional Services",
        before: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
        after: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&w=800&q=80",
        testimonial: "Our old website was embarrassing and didn't represent our level of professionalism. The new design has completely changed how potential clients perceive us online.",
        client: "Robert T., Managing Partner"
      },
      {
        id: 3,
        title: "E-commerce Store",
        description: "Rebuilt an underperforming online store with improved product navigation, mobile optimization, and streamlined checkout, resulting in a 78% increase in conversion rate.",
        category: "E-commerce",
        before: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800&q=80",
        after: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&w=800&q=80",
        testimonial: "The difference in our online sales before and after RemakeiT is night and day. The new site is beautiful, fast, and most importantly, it converts browsers into buyers.",
        client: "Jennifer L., Founder"
      }
    ]
  };

  // Scroll to top when the page loads
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const currentItems = portfolioItems[language];

  return (
    <div className="min-h-screen bg-background text-foreground touch-auto">
      <SeoHead 
        title={seoData[language].title}
        description={seoData[language].description}
        keywords={seoData[language].keywords}
        canonical={language === 'sv' ? 'https://remakeit.com/sv/portfolio' : 'https://remakeit.com/portfolio'}
      />
      <BreadcrumbSchema items={breadcrumbItems} />
      <Nav />
      
      <section className="pt-32 pb-16 relative overflow-visible">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-brand-purple/20 blur-[150px] rounded-full pointer-events-none"></div>
        <div className="absolute bottom-1/3 left-1/3 w-96 h-96 bg-brand-teal/20 blur-[150px] rounded-full pointer-events-none"></div>
        
        <div className="container max-w-7xl mx-auto px-4">
          <RevealSection>
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold font-display mb-6">
                {language === 'sv' ? 'Vår ' : 'Our '}<span className="text-brand-teal">{language === 'sv' ? 'Portfolio' : 'Portfolio'}</span>
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                {language === 'sv' 
                  ? 'Se skillnaden en modern, optimerad webbplats kan göra. Dra i reglagen nedan för att jämföra transformationerna vi har gjort för våra kunder.'
                  : 'See the difference a modern, optimized website can make. Drag the sliders below to compare the transformations we\'ve made for our clients.'}
              </p>
            </div>
          </RevealSection>
          
          <div className="space-y-20 mb-16">
            {currentItems.map((item, index) => (
              <RevealSection key={item.id} delay={index * 100}>
                <div className="glass-panel p-8 rounded-lg">
                  <div className="flex flex-col lg:flex-row gap-8 items-start">
                    <div className="lg:w-1/2">
                      <div className="mb-6">
                        <span className="inline-block px-3 py-1 bg-brand-teal/20 text-brand-teal text-sm font-medium rounded-full mb-4">
                          {item.category}
                        </span>
                        <h2 className="text-2xl md:text-3xl font-bold font-display mb-4">{item.title}</h2>
                        <p className="text-gray-300 mb-6">{item.description}</p>
                      </div>
                      
                      <div className="glass-panel p-6 rounded-lg bg-white/5">
                        <p className="text-gray-300 italic mb-4">"{item.testimonial}"</p>
                        <p className="text-brand-teal font-medium">— {item.client}</p>
                      </div>
                    </div>
                    
                    <div className="lg:w-1/2">
                      <ComparisonSlider
                        beforeImage={item.before}
                        afterImage={item.after}
                        alt={`${language === 'sv' ? 'Före och efter jämförelse för ' : 'Before and after comparison for '}${item.title}`}
                      />
                    </div>
                  </div>
                </div>
              </RevealSection>
            ))}
          </div>
          
          <RevealSection delay={400} className="text-center">
            <h2 className="text-2xl md:text-3xl font-bold font-display mb-6">
              {language === 'sv' 
                ? 'Redo att bli en av våra framgångshistorier?' 
                : 'Ready to Join Our Success Stories?'}
            </h2>
            <Button asChild size="lg" className="bg-brand-teal text-black hover:bg-brand-teal/90">
              <Link to="/contact">
                {language === 'sv' ? 'Få din gratis webbplats-mockup' : 'Get Your Free Website Mockup'}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </RevealSection>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Portfolio;
