
import React from 'react';
import RevealSection from '@/components/ui/reveal-section';
import { Card, CardContent } from '@/components/ui/card';
import { useLanguage } from '@/contexts/LanguageContext';

interface Benefit {
  icon: React.ReactNode;
  title: {
    sv: string;
    en: string;
  };
  description: {
    sv: string;
    en: string;
  };
}

interface ServiceBenefitsProps {
  benefits: Benefit[];
  title: {
    sv: string;
    en: string;
  };
  subtitle?: {
    sv: string;
    en: string;
  };
}

const ServiceBenefits: React.FC<ServiceBenefitsProps> = ({ benefits, title, subtitle }) => {
  const { language } = useLanguage();
  
  return (
    <section className="py-16 md:py-24">
      <div className="container max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-display mb-6">{title[language]}</h2>
          {subtitle && <p className="text-xl text-gray-300 max-w-3xl mx-auto">{subtitle[language]}</p>}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <RevealSection key={index} delay={index * 100} className="h-full">
              <Card className="h-full bg-secondary/50 border-white/5 hover:border-brand-teal/30 transition-colors">
                <CardContent className="p-8">
                  <div className="mb-5 text-brand-teal">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-semibold font-display mb-4">{benefit.title[language]}</h3>
                  <p className="text-gray-400">{benefit.description[language]}</p>
                </CardContent>
              </Card>
            </RevealSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceBenefits;
