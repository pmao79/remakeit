
import React, { useEffect } from 'react';
import Nav from '@/components/Nav';
import Hero from '@/components/Hero';
import Benefits from '@/components/Benefits';
import Process from '@/components/Process';
import BeforeAfter from '@/components/BeforeAfter';
import Pricing from '@/components/Pricing';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import SeoHead from '@/components/SeoHead';
import { useLanguage } from '@/contexts/LanguageContext';
import OrganizationSchema from '@/components/schema/OrganizationSchema';
import WebsiteSchema from '@/components/schema/WebsiteSchema';
import BreadcrumbSchema from '@/components/schema/BreadcrumbSchema';
import ServiceSchema from '@/components/schema/ServiceSchema';
import LatestBlogPosts from '@/components/LatestBlogPosts';
import { useIsMobile } from '@/hooks/use-mobile';

const Index: React.FC = () => {
  const { language } = useLanguage();
  const isMobile = useIsMobile();
  
  // Scroll to top when the page loads
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // SEO data based on current language
  const seoData = {
    sv: {
      title: "RemakeiT - Expertis inom Webbdesign & Webbplatsomdesign",
      description: "Förvandla din föråldrade webbplats till en modern, konverteringsoptimerad digital upplevelse. Få experthjälp med webbdesign, redesign och SEO.",
      keywords: "webbdesign, webbplatsomvandling, redesign, SEO, konverteringsoptimering, professionell webbyrå, moderna webbplatser, webbplats förbättring, UX design, responsiv design, företagswebbplats, e-handel design, webbapplikation"
    },
    en: {
      title: "RemakeiT - Professional Web Design & Redesign Services",
      description: "Transform your outdated website into a modern, conversion-optimized digital experience. Get expert help with web design, redesign and SEO.",
      keywords: "web design, website transformation, redesign, SEO, conversion optimization, professional web agency, modern websites, website improvement, UX design, responsive design, business website, e-commerce design, web application"
    }
  };
  
  // Basic breadcrumbs for homepage
  const breadcrumbItems = [
    {
      name: language === 'sv' ? 'Hem' : 'Home',
      url: language === 'sv' ? 'https://www.remakeit.se/sv/' : 'https://www.remakeit.se/'
    }
  ];

  // LCP optimization - Preload the hero background image which is the LCP element
  const lcp_image = "/lovable-uploads/f8a50cb9-78e9-4aa1-a5e9-55894c5c8407.png";
  
  // Enhanced preload resources with priority on LCP image
  const preloadResources = [
    // Preload the hero image which is the LCP element - ensure highest priority
    {
      href: lcp_image,
      as: "image",
      type: "image/webp", // Use modern format with high compression
      fetchPriority: "high" as "high" // Explicitly cast to the correct type
    }
  ];

  // Domains to preconnect to
  const preconnectDomains = [
    "https://fonts.googleapis.com",
    "https://fonts.gstatic.com",
    "https://www.googletagmanager.com"
  ];

  // Add DNS prefetch for third-party domains
  const dnsPrefetchDomains = [
    "https://www.google-analytics.com",
    "https://www.googletagmanager.com"
  ];

  return (
    <div className="min-h-screen bg-background text-foreground w-full">
      <SeoHead 
        title={seoData[language].title}
        description={seoData[language].description}
        keywords={seoData[language].keywords}
        canonical={language === 'sv' ? 'https://www.remakeit.se/sv/' : 'https://www.remakeit.se/'}
        preload={preloadResources}
        preconnect={preconnectDomains}
        dnsPrefetch={dnsPrefetchDomains}
      />
      <OrganizationSchema />
      <WebsiteSchema />
      <BreadcrumbSchema items={breadcrumbItems} />
      <ServiceSchema 
        name="Web Design & Redesign Services"
        description="Professional web design and redesign services to transform your online presence and improve conversion rates."
        url={language === 'sv' ? 'https://www.remakeit.se/sv/' : 'https://www.remakeit.se/'}
      />
      <Nav />
      <main className="w-full overflow-visible">
        <Hero />
        <Benefits />
        <Process />
        <BeforeAfter />
        {/* LatestBlogPosts with lazy loading for below-the-fold content */}
        <div className="cv-auto">
          <LatestBlogPosts />
        </div>
        <div className="cv-auto">
          <Pricing />
        </div>
        <div className="cv-auto">
          <Contact />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
