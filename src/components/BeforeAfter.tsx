
import React from 'react';
import ComparisonSlider from './ui/comparison-slider';
import RevealSection from './ui/reveal-section';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';

const BeforeAfter: React.FC = () => {
  const { t } = useLanguage();
  
  // We're using placeholder images here. In a real implementation, you'd use actual before/after images
  const examples = [
    {
      id: 1,
      titleKey: "before-after.example.title",
      descriptionKey: "before-after.example.description",
      before: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=800&q=80",
      after: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&w=800&q=80"
    }
  ];

  return (
    <section className="py-20 bg-secondary/30 relative overflow-hidden">
      <div className="absolute bottom-1/3 right-1/3 w-96 h-96 bg-brand-teal/20 blur-[150px] rounded-full pointer-events-none"></div>
      
      <div className="container max-w-7xl mx-auto px-4">
        <RevealSection>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-display mb-4">
              {t('before-after.title')}
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              {t('before-after.subtitle')}
            </p>
          </div>
        </RevealSection>

        <div className="max-w-4xl mx-auto mb-16">
          <RevealSection delay={100}>
            <div className="glass-panel p-6 rounded-lg">
              <h3 className="text-xl font-semibold font-display mb-4 text-white">{t(examples[0].titleKey)}</h3>
              <div className="mb-4">
                <ComparisonSlider 
                  beforeImage={examples[0].before} 
                  afterImage={examples[0].after}
                  alt={`Före och efter jämförelse för ${t(examples[0].titleKey)}`}
                />
              </div>
              <p className="text-gray-300 mb-4">{t(examples[0].descriptionKey)}</p>
            </div>
          </RevealSection>
        </div>

        <RevealSection delay={200} className="text-center">
          <Button asChild size="lg" className="bg-brand-teal text-black hover:bg-brand-teal/90">
            <Link to="/portfolio">
              {t('before-after.cta')}
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </RevealSection>
      </div>
    </section>
  );
};

export default BeforeAfter;
