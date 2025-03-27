
import React, { useEffect } from 'react';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import Contact from '@/components/Contact';
import RevealSection from '@/components/ui/reveal-section';
import { useLanguage } from '@/contexts/LanguageContext';

const ContactPage: React.FC = () => {
  const { t } = useLanguage();
  
  // Scroll to top when the page loads
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
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
