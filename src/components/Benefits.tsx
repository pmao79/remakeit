
import React from 'react';
import RevealSection from './ui/reveal-section';
import { Search, Zap, ShieldCheck, BadgeDollarSign, Clock, Smartphone, Lightbulb, Sparkles } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const Benefits: React.FC = () => {
  const { language, t } = useLanguage();
  
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute top-1/3 right-1/3 w-96 h-96 bg-brand-purple/20 blur-[150px] rounded-full pointer-events-none"></div>
      
      <div className="container max-w-7xl mx-auto px-4">
        <RevealSection>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-display mb-4">
              {t('benefits.title')}
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              {t('benefits.subtitle')}
            </p>
          </div>
        </RevealSection>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <RevealSection delay={100}>
            <div className="glass-panel p-6 rounded-lg h-full">
              <div className="bg-brand-purple/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <Search className="text-brand-purple w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-2">{t('benefits.seo.title')}</h3>
              <p className="text-gray-300">{t('benefits.seo.description')}</p>
            </div>
          </RevealSection>
          
          <RevealSection delay={200}>
            <div className="glass-panel p-6 rounded-lg h-full">
              <div className="bg-brand-teal/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <Zap className="text-brand-teal w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-2">{t('benefits.fast.title')}</h3>
              <p className="text-gray-300">{t('benefits.fast.description')}</p>
            </div>
          </RevealSection>
          
          <RevealSection delay={300}>
            <div className="glass-panel p-6 rounded-lg h-full">
              <div className="bg-brand-purple/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <ShieldCheck className="text-brand-purple w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-2">{t('benefits.risk.title')}</h3>
              <p className="text-gray-300">{t('benefits.risk.description')}</p>
            </div>
          </RevealSection>
          
          <RevealSection delay={400}>
            <div className="glass-panel p-6 rounded-lg h-full">
              <div className="bg-brand-teal/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <BadgeDollarSign className="text-brand-teal w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-2">{t('benefits.price.title')}</h3>
              <p className="text-gray-300">{t('benefits.price.description')}</p>
            </div>
          </RevealSection>
        </div>
        
        {/* Added Features Row */}
        <div className="mt-16">
          <RevealSection>
            <h3 className="text-2xl font-bold text-center mb-8">
              {language === 'sv' ? 'AI-driven webbdesign som levererar resultat' : 'AI-powered web design that delivers results'}
            </h3>
          </RevealSection>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <RevealSection delay={100}>
              <div className="flex flex-col items-center text-center">
                <div className="bg-brand-teal/20 p-4 rounded-full mb-4">
                  <Clock className="w-8 h-8 text-brand-teal" />
                </div>
                <h4 className="font-bold mb-2">
                  {language === 'sv' ? 'Snabb leverans' : 'Fast delivery'}
                </h4>
                <p className="text-gray-300 text-sm">
                  {language === 'sv' 
                    ? 'Färdig hemsida på dagar, inte veckor' 
                    : 'Finished website in days, not weeks'}
                </p>
              </div>
            </RevealSection>
            
            <RevealSection delay={200}>
              <div className="flex flex-col items-center text-center">
                <div className="bg-brand-purple/20 p-4 rounded-full mb-4">
                  <Search className="w-8 h-8 text-brand-purple" />
                </div>
                <h4 className="font-bold mb-2">
                  {language === 'sv' ? 'SEO-optimerad' : 'SEO-optimized'}
                </h4>
                <p className="text-gray-300 text-sm">
                  {language === 'sv' 
                    ? 'Syns i sökmotorer från start' 
                    : 'Visible in search engines from day one'}
                </p>
              </div>
            </RevealSection>
            
            <RevealSection delay={300}>
              <div className="flex flex-col items-center text-center">
                <div className="bg-brand-teal/20 p-4 rounded-full mb-4">
                  <Smartphone className="w-8 h-8 text-brand-teal" />
                </div>
                <h4 className="font-bold mb-2">
                  {language === 'sv' ? 'Mobiloptimerad' : 'Mobile optimized'}
                </h4>
                <p className="text-gray-300 text-sm">
                  {language === 'sv' 
                    ? 'Perfekt på alla enheter' 
                    : 'Perfect on all devices'}
                </p>
              </div>
            </RevealSection>
            
            <RevealSection delay={400}>
              <div className="flex flex-col items-center text-center">
                <div className="bg-brand-purple/20 p-4 rounded-full mb-4">
                  <Sparkles className="w-8 h-8 text-brand-purple" />
                </div>
                <h4 className="font-bold mb-2">
                  {language === 'sv' ? 'AI-driven design' : 'AI-powered design'}
                </h4>
                <p className="text-gray-300 text-sm">
                  {language === 'sv' 
                    ? 'Modern design som konverterar' 
                    : 'Modern design that converts'}
                </p>
              </div>
            </RevealSection>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
