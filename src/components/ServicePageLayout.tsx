
import React, { useEffect } from 'react';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import RevealSection from '@/components/ui/reveal-section';
import { useLanguage } from '@/contexts/LanguageContext';
import { Link } from 'react-router-dom';
import { ArrowRight, Check } from 'lucide-react';

interface ServicePageLayoutProps {
  title: {
    sv: string;
    en: string;
  };
  subtitle: {
    sv: string;
    en: string;
  };
  heroImage: string;
  children: React.ReactNode;
}

const ServicePageLayout: React.FC<ServicePageLayoutProps> = ({ 
  title, 
  subtitle, 
  heroImage,
  children 
}) => {
  const { language, t } = useLanguage();
  
  // Scroll to top when the page loads
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/40 z-10" />
          <img
            src="/lovable-uploads/f8a50cb9-78e9-4aa1-a5e9-55894c5c8407.png"
            alt={title[language]}
            className="w-full h-full object-cover object-center"
          />
        </div>
        <div className="container relative z-10 max-w-7xl mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display tracking-tight text-white mb-6">
              {title[language]}
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8">
              {subtitle[language]}
            </p>
            <Button asChild size="lg" className="bg-brand-teal text-black hover:bg-brand-teal/90">
              <Link to="/contact">
                {t('nav.cta')}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
      
      {/* Content */}
      <div className="bg-background">
        {children}
      </div>
      
      {/* CTA Section */}
      <RevealSection className="bg-secondary/50 py-20">
        <div className="container max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold font-display mb-6">
            {t('services.readyToStart')}
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            {t('services.readyToStartText')}
          </p>
          <Button asChild size="lg" className="bg-brand-teal text-black hover:bg-brand-teal/90">
            <Link to="/contact">
              {t('nav.cta')}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </RevealSection>
      
      <Footer />
    </div>
  );
};

export default ServicePageLayout;
