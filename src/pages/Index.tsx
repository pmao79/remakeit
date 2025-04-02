
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

const Index: React.FC = () => {
  const { language } = useLanguage();
  
  // Scroll to top when the page loads
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // SEO data based on current language
  const seoData = {
    sv: {
      title: "RemakeiT - Expertis inom Webbdesign & Webbplatsomdesign",
      description: "Förvandla din föråldrade webbplats till en modern, konverteringsoptimerad digital upplevelse. Få experthjälp med webbdesign, redesign och SEO.",
      keywords: "webbdesign, webbplatsomvandling, redesign, SEO, konverteringsoptimering, professionell webbyrå, moderna webbplatser"
    },
    en: {
      title: "RemakeiT - Professional Web Design & Redesign Services",
      description: "Transform your outdated website into a modern, conversion-optimized digital experience. Get expert help with web design, redesign and SEO.",
      keywords: "web design, website transformation, redesign, SEO, conversion optimization, professional web agency, modern websites"
    }
  };
  
  // Basic breadcrumbs for homepage
  const breadcrumbItems = [
    {
      name: language === 'sv' ? 'Hem' : 'Home',
      url: language === 'sv' ? 'https://remakeit.com/sv/' : 'https://remakeit.com/'
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground w-full">
      <SeoHead 
        title={seoData[language].title}
        description={seoData[language].description}
        keywords={seoData[language].keywords}
        canonical={language === 'sv' ? 'https://remakeit.com/sv/' : 'https://remakeit.com/'}
      />
      <OrganizationSchema />
      <WebsiteSchema />
      <BreadcrumbSchema items={breadcrumbItems} />
      <Nav />
      <main className="w-full overflow-visible">
        <Hero />
        <Benefits />
        <Process />
        <BeforeAfter />
        <Pricing />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
