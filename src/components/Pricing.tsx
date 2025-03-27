
import React from 'react';
import RevealSection from './ui/reveal-section';
import { Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Pricing: React.FC = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-brand-purple/20 blur-[150px] rounded-full pointer-events-none"></div>
      
      <div className="container max-w-7xl mx-auto px-4">
        <RevealSection>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-display mb-4">
              Simple, Transparent <span className="text-brand-teal">Pricing</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              No hidden fees or surprise costs. Just clear, upfront pricing for a website that works.
            </p>
          </div>
        </RevealSection>

        <div className="max-w-3xl mx-auto">
          <RevealSection delay={100} className="glass-panel rounded-lg overflow-hidden">
            <div className="bg-brand-teal/10 border-b border-brand-teal/20 p-8 text-center">
              <h3 className="text-2xl font-bold font-display text-white mb-2">Complete Website Package</h3>
              <div className="flex justify-center items-baseline">
                <span className="text-5xl font-bold text-brand-teal">$1,499</span>
                <span className="text-gray-300 ml-2">one-time payment</span>
              </div>
            </div>
            
            <div className="p-8">
              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <span className="flex-shrink-0 w-6 h-6 bg-brand-teal/20 rounded-full flex items-center justify-center mr-3 mt-0.5">
                    <Check className="h-4 w-4 text-brand-teal" />
                  </span>
                  <span className="text-gray-300">Custom designed, responsive website (5-7 pages)</span>
                </li>
                <li className="flex items-start">
                  <span className="flex-shrink-0 w-6 h-6 bg-brand-teal/20 rounded-full flex items-center justify-center mr-3 mt-0.5">
                    <Check className="h-4 w-4 text-brand-teal" />
                  </span>
                  <span className="text-gray-300">SEO optimization for better search engine ranking</span>
                </li>
                <li className="flex items-start">
                  <span className="flex-shrink-0 w-6 h-6 bg-brand-teal/20 rounded-full flex items-center justify-center mr-3 mt-0.5">
                    <Check className="h-4 w-4 text-brand-teal" />
                  </span>
                  <span className="text-gray-300">Mobile-friendly, fast-loading design</span>
                </li>
                <li className="flex items-start">
                  <span className="flex-shrink-0 w-6 h-6 bg-brand-teal/20 rounded-full flex items-center justify-center mr-3 mt-0.5">
                    <Check className="h-4 w-4 text-brand-teal" />
                  </span>
                  <span className="text-gray-300">Contact form and lead capture setup</span>
                </li>
                <li className="flex items-start">
                  <span className="flex-shrink-0 w-6 h-6 bg-brand-teal/20 rounded-full flex items-center justify-center mr-3 mt-0.5">
                    <Check className="h-4 w-4 text-brand-teal" />
                  </span>
                  <span className="text-gray-300">Google Analytics integration</span>
                </li>
                <li className="flex items-start">
                  <span className="flex-shrink-0 w-6 h-6 bg-brand-teal/20 rounded-full flex items-center justify-center mr-3 mt-0.5">
                    <Check className="h-4 w-4 text-brand-teal" />
                  </span>
                  <span className="text-gray-300">1 hour of training on how to update content</span>
                </li>
                <li className="flex items-start">
                  <span className="flex-shrink-0 w-6 h-6 bg-brand-teal/20 rounded-full flex items-center justify-center mr-3 mt-0.5">
                    <Check className="h-4 w-4 text-brand-teal" />
                  </span>
                  <span className="text-gray-300">3 months of technical support</span>
                </li>
              </ul>
              
              <div className="text-center">
                <Button asChild size="lg" className="w-full bg-brand-teal text-black hover:bg-brand-teal/90">
                  <Link to="/contact">Get Started with a Free Mockup</Link>
                </Button>
                <p className="mt-4 text-sm text-gray-400">No obligation. See what we can build before you pay.</p>
              </div>
            </div>
          </RevealSection>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
