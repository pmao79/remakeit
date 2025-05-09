
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useIsMobile } from '@/hooks/use-mobile';

const Hero: React.FC = () => {
  const { t } = useLanguage();
  const isMobile = useIsMobile();
  
  return (
    <section className="relative min-h-[90svh] flex items-center overflow-visible pt-20 pb-12 w-full touch-auto">
      {/* Background elements - optimized for faster loading */}
      <div className="absolute inset-0 bg-gradient-radial from-[#1a1d29] to-background z-0"></div>
      <div className="absolute inset-0 bg-grid-pattern bg-[length:30px_30px] opacity-20 z-0"></div>
      
      {/* Decorative blurs - reduced/removed for mobile */}
      {!isMobile && (
        <>
          <div className="absolute top-1/4 left-1/6 w-64 md:w-96 h-64 md:h-96 bg-brand-purple/20 blur-[100px] md:blur-[150px] rounded-full pointer-events-none"></div>
          <div className="absolute bottom-1/4 right-1/6 w-64 md:w-96 h-64 md:h-96 bg-brand-teal/20 blur-[100px] md:blur-[150px] rounded-full pointer-events-none"></div>
        </>
      )}
      
      <div className="container relative z-10 mt-16 md:mt-0 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col space-y-8 text-center lg:text-left">
            {/* Critical hero content */}
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display leading-tight tracking-tight">
                {t('hero.title')}
              </h1>
              
              <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto lg:mx-0">
                {t('hero.subtitle')}
              </p>

              <div className="bg-white/5 border border-white/10 rounded-lg p-4 mt-6">
                <div className="flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-6">
                  <div className="flex flex-col items-center sm:items-start">
                    <span className="text-brand-teal font-bold mb-1">
                      {t('hero.traditional')}:
                    </span>
                    <span className="line-through text-gray-400 whitespace-nowrap">25 000 - 100 000 SEK</span>
                  </div>
                  
                  <div className="hidden sm:block text-gray-400">|</div>
                  
                  <div className="flex flex-col items-center sm:items-start">
                    <span className="text-brand-teal font-bold mb-1">RemakeiT:</span>
                    <span className="text-white font-bold whitespace-nowrap">
                      {t('hero.ourPrice')}
                    </span>
                  </div>
                </div>
                <p className="text-sm text-brand-teal mt-3 text-center">
                  {t('hero.pricingClaim')}
                </p>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button asChild size="lg" className="bg-brand-teal text-black hover:bg-brand-teal/90 text-lg font-medium">
                <Link to="/contact">
                  {t('hero.cta.primary')}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-white/20 hover:bg-white/5 text-lg font-medium">
                <Link to="/portfolio">{t('hero.cta.secondary')}</Link>
              </Button>
            </div>
          </div>
          
          <div className="relative aspect-square max-w-lg mx-auto">
            <div className="w-full h-full flex items-center justify-center">
              <div className="relative w-4/5 aspect-video bg-gray-900 border border-white/10 rounded-lg overflow-hidden shadow-2xl animate-float">
                <div className="absolute inset-x-0 top-0 h-8 bg-black/40 backdrop-blur-sm flex items-center px-4">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                </div>
                <div className="absolute inset-0 flex items-center justify-center mt-8">
                  <div className="text-center">
                    <p className="text-gray-400 text-sm mb-2">Före</p>
                    <div className="w-64 h-20 bg-gray-800 flex items-center justify-center">
                      <p className="text-gray-500">Föråldrad webbplats</p>
                    </div>
                  </div>
                </div>
                <div className="absolute inset-0 translate-x-[55%] translate-y-[20%] w-4/5 aspect-video bg-secondary border border-brand-teal/40 rounded-lg overflow-hidden shadow-[0_0_40px_rgba(12,250,232,0.2)] animate-float" style={{animationDelay: '0.5s'}}>
                  <div className="absolute inset-x-0 top-0 h-8 bg-black/40 backdrop-blur-sm flex items-center px-4">
                    <div className="flex space-x-2">
                      <div className="w-3 h-3 rounded-full bg-red-500"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                      <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    </div>
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center mt-8">
                    <div className="text-center">
                      <p className="text-brand-teal text-sm mb-2">Efter</p>
                      <div className="w-64 h-20 bg-gray-800/60 border border-brand-teal/30 rounded flex items-center justify-center">
                        <p className="text-brand-teal">Modern webbplats</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
