
import React from 'react';
import RevealSection from './ui/reveal-section';
import { Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';

const Pricing: React.FC = () => {
  const { t } = useLanguage();
  
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-brand-purple/20 blur-[150px] rounded-full pointer-events-none"></div>
      
      <div className="container max-w-7xl mx-auto px-4">
        <RevealSection>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-display mb-4">
              {t('pricing.title')}
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              {t('pricing.subtitle')}
            </p>
          </div>
        </RevealSection>

        <div className="max-w-3xl mx-auto">
          <RevealSection delay={100} className="glass-panel rounded-lg overflow-hidden">
            <div className="bg-brand-teal/10 border-b border-brand-teal/20 p-8 text-center">
              <h3 className="text-2xl font-bold font-display text-white mb-2">{t('pricing.package')}</h3>
              <div className="flex justify-center items-baseline">
                <span className="text-5xl font-bold text-brand-teal">{t('pricing.price')}</span>
                <span className="text-gray-300 ml-2">{t('pricing.onetime')}</span>
              </div>
            </div>
            
            <div className="p-8">
              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <span className="flex-shrink-0 w-6 h-6 bg-brand-teal/20 rounded-full flex items-center justify-center mr-3 mt-0.5">
                    <Check className="h-4 w-4 text-brand-teal" />
                  </span>
                  <span className="text-gray-300">{t('pricing.feature1')}</span>
                </li>
                <li className="flex items-start">
                  <span className="flex-shrink-0 w-6 h-6 bg-brand-teal/20 rounded-full flex items-center justify-center mr-3 mt-0.5">
                    <Check className="h-4 w-4 text-brand-teal" />
                  </span>
                  <span className="text-gray-300">{t('pricing.feature2')}</span>
                </li>
                <li className="flex items-start">
                  <span className="flex-shrink-0 w-6 h-6 bg-brand-teal/20 rounded-full flex items-center justify-center mr-3 mt-0.5">
                    <Check className="h-4 w-4 text-brand-teal" />
                  </span>
                  <span className="text-gray-300">{t('pricing.feature3')}</span>
                </li>
                <li className="flex items-start">
                  <span className="flex-shrink-0 w-6 h-6 bg-brand-teal/20 rounded-full flex items-center justify-center mr-3 mt-0.5">
                    <Check className="h-4 w-4 text-brand-teal" />
                  </span>
                  <span className="text-gray-300">{t('pricing.feature4')}</span>
                </li>
                <li className="flex items-start">
                  <span className="flex-shrink-0 w-6 h-6 bg-brand-teal/20 rounded-full flex items-center justify-center mr-3 mt-0.5">
                    <Check className="h-4 w-4 text-brand-teal" />
                  </span>
                  <span className="text-gray-300">{t('pricing.feature5')}</span>
                </li>
                <li className="flex items-start">
                  <span className="flex-shrink-0 w-6 h-6 bg-brand-teal/20 rounded-full flex items-center justify-center mr-3 mt-0.5">
                    <Check className="h-4 w-4 text-brand-teal" />
                  </span>
                  <span className="text-gray-300">{t('pricing.feature6')}</span>
                </li>
                <li className="flex items-start">
                  <span className="flex-shrink-0 w-6 h-6 bg-brand-teal/20 rounded-full flex items-center justify-center mr-3 mt-0.5">
                    <Check className="h-4 w-4 text-brand-teal" />
                  </span>
                  <span className="text-gray-300">{t('pricing.feature7')}</span>
                </li>
              </ul>
              
              <div className="text-center">
                <Button asChild size="lg" className="w-full bg-brand-teal text-black hover:bg-brand-teal/90">
                  <Link to="/contact">{t('pricing.cta')}</Link>
                </Button>
                <p className="mt-4 text-sm text-gray-400">{t('pricing.nocost')}</p>
              </div>
            </div>
          </RevealSection>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
