
import React from 'react';
import RevealSection from './ui/reveal-section';
import { Search, Zap, Check, DollarSign } from 'lucide-react';

const BenefitCard: React.FC<{
  title: string;
  description: string;
  icon: React.ReactNode;
  delay: number;
}> = ({ title, description, icon, delay }) => {
  return (
    <RevealSection delay={delay} className="glass-panel p-6 rounded-lg h-full">
      <div className="flex flex-col h-full">
        <div className="flex items-center mb-4">
          <div className="w-12 h-12 flex items-center justify-center rounded-full bg-brand-teal/10 text-brand-teal mr-4">
            {icon}
          </div>
          <h3 className="text-xl font-semibold font-display text-white">{title}</h3>
        </div>
        <p className="text-gray-300 flex-grow">{description}</p>
      </div>
    </RevealSection>
  );
};

const Benefits: React.FC = () => {
  return (
    <section className="py-20 bg-secondary/30">
      <div className="container max-w-7xl mx-auto px-4">
        <RevealSection>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-display mb-4">
              Why Choose <span className="text-brand-teal">RemakeiT</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              We build websites that don't just look good – they perform. Here's why businesses trust us.
            </p>
          </div>
        </RevealSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <BenefitCard
            title="SEO-Optimized for Growth"
            description="Every website we build is designed with search engines in mind, helping you rank higher and attract more visitors."
            icon={<Search className="w-6 h-6" />}
            delay={100}
          />
          <BenefitCard
            title="Fast, Mobile-Friendly & Secure"
            description="Lightning-fast loading times, perfect on every device, and built with security at its core."
            icon={<Zap className="w-6 h-6" />}
            delay={200}
          />
          <BenefitCard
            title="No Risk – See a Demo First"
            description="Our unique approach: get a 70% finished mockup before you pay, so you know exactly what you're getting."
            icon={<Check className="w-6 h-6" />}
            delay={300}
          />
          <BenefitCard
            title="One Fixed Price – No Hidden Fees"
            description="Transparent pricing with everything included – no surprises, no ongoing costs unless you want additional services."
            icon={<DollarSign className="w-6 h-6" />}
            delay={400}
          />
        </div>
      </div>
    </section>
  );
};

export default Benefits;
