
import React from 'react';
import RevealSection from './ui/reveal-section';
import { useLanguage } from '@/contexts/LanguageContext';

const ProcessStep: React.FC<{
  number: number;
  titleKey: string;
  descriptionKey: string;
  delay: number;
}> = ({ number, titleKey, descriptionKey, delay }) => {
  const { t } = useLanguage();
  
  return (
    <RevealSection delay={delay} className="relative">
      <div className="relative z-10 glass-panel rounded-lg p-8 h-full">
        <div className="absolute -top-8 -left-8 w-16 h-16 bg-brand-teal text-black rounded-full flex items-center justify-center text-2xl font-bold">
          {number}
        </div>
        <div className="pt-4">
          <h3 className="text-xl font-semibold font-display mb-4 text-white">{t(titleKey)}</h3>
          <p className="text-gray-300">{t(descriptionKey)}</p>
        </div>
      </div>
      {number < 4 && (
        <div className="hidden md:block absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2 z-0">
          <svg width="80" height="16" viewBox="0 0 80 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 8H76L64 1V15L76 8" stroke="#0CFAE8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      )}
    </RevealSection>
  );
};

const Process: React.FC = () => {
  const { t } = useLanguage();
  
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/3 w-96 h-96 bg-brand-purple/20 blur-[150px] rounded-full pointer-events-none"></div>
      
      <div className="container max-w-7xl mx-auto px-4">
        <RevealSection>
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-4xl font-bold font-display mb-4">
              {t('process.title')}
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              {t('process.subtitle')}
            </p>
          </div>
        </RevealSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-8 relative">
          <ProcessStep
            number={1}
            titleKey="process.step1"
            descriptionKey="process.step1.description"
            delay={100}
          />
          <ProcessStep
            number={2}
            titleKey="process.step2"
            descriptionKey="process.step2.description"
            delay={200}
          />
          <ProcessStep
            number={3}
            titleKey="process.step3"
            descriptionKey="process.step3.description"
            delay={300}
          />
          <ProcessStep
            number={4}
            titleKey="process.step4"
            descriptionKey="process.step4.description"
            delay={400}
          />
        </div>
      </div>
    </section>
  );
};

export default Process;
