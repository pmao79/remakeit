
import React, { useEffect } from 'react';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import Contact from '@/components/Contact';
import RevealSection from '@/components/ui/reveal-section';
import { useLanguage } from '@/contexts/LanguageContext';
import SeoHead from '@/components/SeoHead';
import BreadcrumbSchema from '@/components/schema/BreadcrumbSchema';
import { getRouteByKey } from '@/utils/routeTranslations';

const ContactPage: React.FC = () => {
  const { t, language } = useLanguage();
  
  // SEO data based on current language
  const seoData = {
    sv: {
      title: "Kontakta Oss - Få Hjälp Med Din Webbplats | RemakeiT",
      description: "Kontakta vårt team för att diskutera din webbplats. Få en gratis konsultation och se hur vi kan hjälpa dig att förbättra din digitala närvaro.",
      keywords: "kontakta webbdesign byrå, webbplats konsultation, webbplats förbättring, digital närvaro, kontaktformulär, webbyrå kontakt, webbdesign konsultation, webbplatsoptimering, SEO konsultation, designprojekt"
    },
    en: {
      title: "Contact Us - Get Help With Your Website | RemakeiT",
      description: "Contact our team to discuss your website. Get a free consultation and see how we can help you improve your digital presence.",
      keywords: "contact web design agency, website consultation, website improvement, digital presence, contact form, web agency contact, web design consultation, website optimization, SEO consultation, design project"
    }
  };
  
  // Get URLs for the current language
  const homeUrl = `https://remakeit.com${language === 'en' ? '/en' : ''}`;
  const contactUrl = `https://remakeit.com${getRouteByKey('contact', language)}`;
  
  // Breadcrumbs for contact page
  const breadcrumbItems = [
    {
      name: language === 'sv' ? 'Hem' : 'Home',
      url: homeUrl
    },
    {
      name: language === 'sv' ? 'Kontakt' : 'Contact',
      url: contactUrl
    }
  ];
  
  // Scroll to top when the page loads
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SeoHead 
        title={seoData[language].title}
        description={seoData[language].description}
        keywords={seoData[language].keywords}
      />
      <BreadcrumbSchema items={breadcrumbItems} />
      <Nav />
      
      <section className="pt-32 pb-16 relative overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-purple/20 blur-[150px] rounded-full pointer-events-none"></div>
        
        <div className="container max-w-7xl mx-auto px-4 mb-16">
          <RevealSection>
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold font-display mb-6">
                {t('contact.title')}
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                {t('contact.subtitle')}
              </p>
            </div>
          </RevealSection>
        </div>
        
        <Contact />
      </section>
      
      <Footer />
    </div>
  );
};

export default ContactPage;
