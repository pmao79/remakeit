
import React from 'react';
import RevealSection from './ui/reveal-section';

const ProcessStep: React.FC<{
  number: number;
  title: string;
  description: string;
  delay: number;
}> = ({ number, title, description, delay }) => {
  return (
    <RevealSection delay={delay} className="relative">
      <div className="relative z-10 glass-panel rounded-lg p-8 h-full">
        <div className="absolute -top-8 -left-8 w-16 h-16 bg-brand-teal text-black rounded-full flex items-center justify-center text-2xl font-bold">
          {number}
        </div>
        <div className="pt-4">
          <h3 className="text-xl font-semibold font-display mb-4 text-white">{title}</h3>
          <p className="text-gray-300">{description}</p>
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
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/3 w-96 h-96 bg-brand-purple/20 blur-[150px] rounded-full pointer-events-none"></div>
      
      <div className="container max-w-7xl mx-auto px-4">
        <RevealSection>
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-4xl font-bold font-display mb-4">
              How It <span className="text-brand-teal">Works</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Our transparent process is designed to give you confidence at every step. Here's what to expect:
            </p>
          </div>
        </RevealSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-8 relative">
          <ProcessStep
            number={1}
            title="Discovery"
            description="We find businesses that need a website upgrade and understand your specific needs and goals."
            delay={100}
          />
          <ProcessStep
            number={2}
            title="Free Mockup"
            description="We create a free mockup that's approximately 70% complete so you can see exactly what you're getting."
            delay={200}
          />
          <ProcessStep
            number={3}
            title="Approval & Content"
            description="You approve the design and provide any additional content needed to complete the website."
            delay={300}
          />
          <ProcessStep
            number={4}
            title="Launch"
            description="We finalize the website, optimize it for search engines, and launch it to the world!"
            delay={400}
          />
        </div>
      </div>
    </section>
  );
};

export default Process;
