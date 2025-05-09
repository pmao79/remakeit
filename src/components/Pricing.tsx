import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Check, Shield, Award, Star } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import RevealSection from '@/components/ui/reveal-section';

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

        {/* Special Offer Banner */}
        <RevealSection delay={50} className="mb-10">
          <div className="bg-gradient-to-r from-brand-teal/20 to-brand-purple/20 p-4 md:p-6 rounded-lg border border-brand-teal/30 text-center">
            <div className="flex flex-col md:flex-row items-center justify-center gap-3 mb-2">
              <Award className="h-8 w-8 text-brand-teal" />
              <h3 className="text-xl md:text-2xl font-bold text-white">
                {language === 'sv' ? 'Specialerbjudande!' : 'Special Offer!'}
              </h3>
              <Award className="h-8 w-8 text-brand-teal" />
            </div>
            <p className="text-lg text-white mb-1">
              {language === 'sv' 
                ? 'Just nu: Få Premium för samma pris som Bas!' 
                : 'Limited time: Get Premium for the same price as Basic!'}
            </p>
            <p className="text-sm text-gray-300">
              {language === 'sv' 
                ? 'Mer funktionalitet, samma investering. Uppgradera utan extra kostnad!' 
                : 'More functionality, same investment. Upgrade at no extra cost!'}
            </p>
          </div>
        </RevealSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* Basic Plan */}
          <RevealSection delay={100} className="h-full">
            <Card className="h-full bg-background/50 border-white/10 shadow-lg hover:shadow-xl transition-all duration-300 relative">
              <div className="absolute top-0 left-0 w-full h-full bg-black/20 backdrop-blur-sm rounded-lg flex items-center justify-center z-10">
                <div className="bg-black/70 p-4 rounded-lg text-center transform rotate-10 shadow-lg border border-white/10">
                  <p className="text-lg font-bold text-white mb-1">
                    {language === 'sv' ? 'Varför nöja sig med mindre?' : 'Why settle for less?'}
                  </p>
                  <p className="text-sm text-gray-300">
                    {language === 'sv' ? 'Få Premium utan extra kostnad!' : 'Get Premium at no extra cost!'}
                  </p>
                  <Button asChild className="mt-3 bg-brand-teal text-black hover:bg-brand-teal/90">
                    <Link to="/contact">{language === 'sv' ? 'Uppgradera nu' : 'Upgrade now'}</Link>
                  </Button>
                </div>
              </div>
              <CardHeader className="pb-4">
                <CardTitle className="text-xl text-white">{t('pricing.basicTitle')}</CardTitle>
                <div className="mt-2">
                  <span className="text-4xl font-bold text-brand-teal whitespace-nowrap">{t('pricing.basicPrice')}</span>
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
            <Card className="h-full bg-background/50 border-brand-teal/40 shadow-lg shadow-brand-teal/5 relative overflow-hidden transform scale-105 md:scale-110 z-10">
              <div className="absolute -top-1 -right-1 w-32 h-32 overflow-hidden">
                <div className="absolute top-0 right-0 transform rotate-45 translate-y-6 translate-x-6 w-28 h-6 bg-brand-teal flex items-center justify-center text-xs font-bold text-black">
                  {language === 'sv' ? 'BÄSTA VÄRDET!' : 'BEST VALUE!'}
                </div>
              </div>
              <div className="absolute -top-2 -left-2">
                <div className="bg-brand-teal text-black px-3 py-1 text-sm font-bold rounded-md shadow-lg">
                  {language === 'sv' ? 'SAMMA PRIS!' : 'SAME PRICE!'}
                </div>
              </div>
              <CardHeader className="pb-4">
                <CardTitle className="text-xl text-white">{t('pricing.premiumTitle')}</CardTitle>
                <div className="mt-2">
                  <span className="text-4xl font-bold text-brand-teal whitespace-nowrap">{t('pricing.basicPrice')}</span>
                  <span className="ml-2 line-through text-gray-500 text-sm">{t('pricing.premiumPrice')}</span>
                </div>
                <div className="mt-1 flex items-center">
                  <Star className="text-yellow-400 h-4 w-4 mr-1" />
                  <p className="text-sm text-yellow-400 font-medium">
                    {language === 'sv' ? 'Tidsbegränsat erbjudande!' : 'Limited time offer!'}
                  </p>
                </div>
              </CardHeader>
              <CardContent className="pb-6">
                <div className="mb-4 p-2 bg-brand-teal/10 rounded-md border border-brand-teal/20">
                  <h4 className="text-sm font-medium text-brand-teal mb-1 flex items-center">
                    <Award className="h-4 w-4 mr-1" />
                    {language === 'sv' ? 'Du får extra:' : 'You get extras:'}
                  </h4>
                  <ul className="text-xs text-gray-300 space-y-1 pl-5">
                    <li>{language === 'sv' ? '• 2 extra sidor' : '• 2 extra pages'}</li>
                    <li>{language === 'sv' ? '• Avancerad SEO' : '• Advanced SEO'}</li>
                    <li>{language === 'sv' ? '• 1 timmes utbildning' : '• 1 hour training'}</li>
                  </ul>
                </div>
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
                <Button asChild className="w-full bg-brand-teal text-black hover:bg-brand-teal/90 font-bold">
                  <Link to="/contact">{language === 'sv' ? 'Få detta specialerbjudande!' : 'Get this special offer!'}</Link>
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
                  <span className="text-4xl font-bold text-brand-teal whitespace-nowrap">{t('pricing.enterprisePrice')}</span>
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
