
import React from 'react';
import RevealSection from './ui/reveal-section';
import { Search, Zap, Check, DollarSign } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const BenefitCard: React.FC<{
  titleKey: string;
  descriptionKey: string;
  icon: React.ReactNode;
  delay: number;
}> = ({ titleKey, descriptionKey, icon, delay }) => {
  const { t } = useLanguage();
  
  return (
    <RevealSection delay={delay} className="glass-panel p-6 rounded-lg h-full">
      <div className="flex flex-col h-full">
        <div className="flex items-center mb-4">
          <div className="w-12 h-12 flex items-center justify-center rounded-full bg-brand-teal/10 text-brand-teal mr-4">
            {icon}
          </div>
          <h3 className="text-xl font-semibold font-display text-white">{t(titleKey)}</h3>
        </div>
        <p className="text-gray-300 flex-grow">{t(descriptionKey)}</p>
      </div>
    </RevealSection>
  );
};

const Benefits: React.FC = () => {
  const { t } = useLanguage();
  
  return (
    <section className="py-20 bg-secondary/30">
      <div className="container max-w-7xl mx-auto px-4">
        <RevealSection>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-display mb-4">
              {t('benefits.title')}
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              {t('benefits.subtitle')}
            </p>
          </div>
        </RevealSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <BenefitCard
            titleKey="benefits.seo.title"
            descriptionKey="benefits.seo.description"
            icon={<Search className="w-6 h-6" />}
            delay={100}
          />
          <BenefitCard
            titleKey="benefits.fast.title"
            descriptionKey="benefits.fast.description"
            icon={<Zap className="w-6 h-6" />}
            delay={200}
          />
          <BenefitCard
            titleKey="benefits.risk.title"
            descriptionKey="benefits.risk.description"
            icon={<Check className="w-6 h-6" />}
            delay={300}
          />
          <BenefitCard
            titleKey="benefits.price.title"
            descriptionKey="benefits.price.description"
            icon={<DollarSign className="w-6 h-6" />}
            delay={400}
          />
        </div>
      </div>
    </section>
  );
};

export default Benefits;
