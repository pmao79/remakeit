
import React from 'react';
import RevealSection from './ui/reveal-section';
import { Check, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

const Pricing: React.FC = () => {
  const { t, language } = useLanguage();
  
  return (
    <section className="py-20 relative overflow-hidden" id="pricing">
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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* Basic Plan */}
          <RevealSection delay={100} className="h-full">
            <Card className="h-full bg-background/50 border-white/10 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardHeader className="pb-4">
                <CardTitle className="text-xl text-white">{t('pricing.basicTitle')}</CardTitle>
                <div className="mt-2">
                  <span className="text-4xl font-bold text-brand-teal">{t('pricing.basicPrice')}</span>
                  <span className="text-gray-400 ml-2 text-sm">{t('pricing.onetime')}</span>
                </div>
              </CardHeader>
              <CardContent className="pb-6">
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="flex-shrink-0 w-5 h-5 bg-brand-teal/20 rounded-full flex items-center justify-center mr-3 mt-0.5">
                      <Check className="h-3 w-3 text-brand-teal" />
                    </span>
                    <span className="text-gray-300 text-sm">{t('pricing.feature1')}</span>
                  </li>
                  <li className="flex items-start">
                    <span className="flex-shrink-0 w-5 h-5 bg-brand-teal/20 rounded-full flex items-center justify-center mr-3 mt-0.5">
                      <Check className="h-3 w-3 text-brand-teal" />
                    </span>
                    <span className="text-gray-300 text-sm">{t('pricing.feature2')}</span>
                  </li>
                  <li className="flex items-start">
                    <span className="flex-shrink-0 w-5 h-5 bg-brand-teal/20 rounded-full flex items-center justify-center mr-3 mt-0.5">
                      <Check className="h-3 w-3 text-brand-teal" />
                    </span>
                    <span className="text-gray-300 text-sm">{t('pricing.feature3')}</span>
                  </li>
                  <li className="flex items-start">
                    <span className="flex-shrink-0 w-5 h-5 bg-brand-teal/20 rounded-full flex items-center justify-center mr-3 mt-0.5">
                      <Check className="h-3 w-3 text-brand-teal" />
                    </span>
                    <span className="text-gray-300 text-sm">{t('pricing.feature4')}</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button asChild className="w-full bg-white/10 hover:bg-brand-teal/90 hover:text-black text-white border-white/20 border transition-all duration-300">
                  <Link to="/contact">{t('pricing.cta')}</Link>
                </Button>
              </CardFooter>
            </Card>
          </RevealSection>

          {/* Premium Plan */}
          <RevealSection delay={200} className="h-full">
            <Card className="h-full bg-background/50 border-brand-teal/40 shadow-lg shadow-brand-teal/5 relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-brand-teal text-black text-xs font-bold px-3 py-1">
                {language === 'sv' ? 'Populärast' : 'Most Popular'}
              </div>
              <CardHeader className="pb-4">
                <CardTitle className="text-xl text-white">{t('pricing.premiumTitle')}</CardTitle>
                <div className="mt-2">
                  <span className="text-4xl font-bold text-brand-teal">{t('pricing.premiumPrice')}</span>
                  <span className="text-gray-400 ml-2 text-sm">{t('pricing.onetime')}</span>
                </div>
              </CardHeader>
              <CardContent className="pb-6">
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="flex-shrink-0 w-5 h-5 bg-brand-teal/20 rounded-full flex items-center justify-center mr-3 mt-0.5">
                      <Check className="h-3 w-3 text-brand-teal" />
                    </span>
                    <span className="text-gray-300 text-sm">{t('pricing.feature1')} (7 {language === 'sv' ? 'sidor' : 'pages'})</span>
                  </li>
                  <li className="flex items-start">
                    <span className="flex-shrink-0 w-5 h-5 bg-brand-teal/20 rounded-full flex items-center justify-center mr-3 mt-0.5">
                      <Check className="h-3 w-3 text-brand-teal" />
                    </span>
                    <span className="text-gray-300 text-sm">{language === 'sv' ? 'Avancerad SEO-optimering' : 'Advanced SEO optimization'}</span>
                  </li>
                  <li className="flex items-start">
                    <span className="flex-shrink-0 w-5 h-5 bg-brand-teal/20 rounded-full flex items-center justify-center mr-3 mt-0.5">
                      <Check className="h-3 w-3 text-brand-teal" />
                    </span>
                    <span className="text-gray-300 text-sm">{t('pricing.feature3')}</span>
                  </li>
                  <li className="flex items-start">
                    <span className="flex-shrink-0 w-5 h-5 bg-brand-teal/20 rounded-full flex items-center justify-center mr-3 mt-0.5">
                      <Check className="h-3 w-3 text-brand-teal" />
                    </span>
                    <span className="text-gray-300 text-sm">{language === 'sv' ? 'Avancerat kontaktformulär' : 'Advanced contact form'}</span>
                  </li>
                  <li className="flex items-start">
                    <span className="flex-shrink-0 w-5 h-5 bg-brand-teal/20 rounded-full flex items-center justify-center mr-3 mt-0.5">
                      <Check className="h-3 w-3 text-brand-teal" />
                    </span>
                    <span className="text-gray-300 text-sm">{t('pricing.feature5')}</span>
                  </li>
                  <li className="flex items-start">
                    <span className="flex-shrink-0 w-5 h-5 bg-brand-teal/20 rounded-full flex items-center justify-center mr-3 mt-0.5">
                      <Check className="h-3 w-3 text-brand-teal" />
                    </span>
                    <span className="text-gray-300 text-sm">{language === 'sv' ? '1 timmes utbildning' : '1 hour of training'}</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button asChild className="w-full bg-brand-teal text-black hover:bg-brand-teal/90">
                  <Link to="/contact">{t('pricing.cta')}</Link>
                </Button>
              </CardFooter>
            </Card>
          </RevealSection>

          {/* Enterprise Plan */}
          <RevealSection delay={300} className="h-full">
            <Card className="h-full bg-background/50 border-white/10 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardHeader className="pb-4">
                <CardTitle className="text-xl text-white">{t('pricing.enterpriseTitle')}</CardTitle>
                <div className="mt-2">
                  <span className="text-4xl font-bold text-brand-teal">{t('pricing.enterprisePrice')}</span>
                  <span className="text-gray-400 ml-2 text-sm">{t('pricing.onetime')}</span>
                </div>
              </CardHeader>
              <CardContent className="pb-6">
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="flex-shrink-0 w-5 h-5 bg-brand-teal/20 rounded-full flex items-center justify-center mr-3 mt-0.5">
                      <Check className="h-3 w-3 text-brand-teal" />
                    </span>
                    <span className="text-gray-300 text-sm">{language === 'sv' ? 'Skräddarsydd webbplats (obegränsat antal sidor)' : 'Custom website (unlimited pages)'}</span>
                  </li>
                  <li className="flex items-start">
                    <span className="flex-shrink-0 w-5 h-5 bg-brand-teal/20 rounded-full flex items-center justify-center mr-3 mt-0.5">
                      <Check className="h-3 w-3 text-brand-teal" />
                    </span>
                    <span className="text-gray-300 text-sm">{language === 'sv' ? 'Premiumfunktioner (e-handel, bokningssystem, m.m.)' : 'Premium features (e-commerce, booking systems, etc.)'}</span>
                  </li>
                  <li className="flex items-start">
                    <span className="flex-shrink-0 w-5 h-5 bg-brand-teal/20 rounded-full flex items-center justify-center mr-3 mt-0.5">
                      <Check className="h-3 w-3 text-brand-teal" />
                    </span>
                    <span className="text-gray-300 text-sm">{language === 'sv' ? 'Expertoptimering för sökmotorer' : 'Expert SEO optimization'}</span>
                  </li>
                  <li className="flex items-start">
                    <span className="flex-shrink-0 w-5 h-5 bg-brand-teal/20 rounded-full flex items-center justify-center mr-3 mt-0.5">
                      <Check className="h-3 w-3 text-brand-teal" />
                    </span>
                    <span className="text-gray-300 text-sm">{language === 'sv' ? 'Alla premiumfunktioner' : 'All premium features'}</span>
                  </li>
                  <li className="flex items-start">
                    <span className="flex-shrink-0 w-5 h-5 bg-brand-teal/20 rounded-full flex items-center justify-center mr-3 mt-0.5">
                      <Check className="h-3 w-3 text-brand-teal" />
                    </span>
                    <span className="text-gray-300 text-sm">{language === 'sv' ? '3 månaders prioriterad support' : '3 months of priority support'}</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button asChild className="w-full bg-white/10 hover:bg-brand-teal/90 hover:text-black text-white border-white/20 border transition-all duration-300">
                  <Link to="/contact">{t('pricing.cta')}</Link>
                </Button>
              </CardFooter>
            </Card>
          </RevealSection>
        </div>

        <RevealSection delay={400} className="max-w-3xl mx-auto mt-16">
          <div className="glass-panel p-6 rounded-lg border border-brand-teal/30 flex items-center gap-4">
            <div className="bg-brand-teal/20 p-3 rounded-full">
              <Shield className="w-8 h-8 text-brand-teal" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white mb-2">{language === 'sv' ? 'Vår garanti' : 'Our Guarantee'}</h3>
              <p className="text-gray-300">{t('pricing.guarantee')}</p>
            </div>
          </div>
        </RevealSection>
      </div>
    </section>
  );
};

export default Pricing;
