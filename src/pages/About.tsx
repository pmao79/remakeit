
import React, { useEffect } from 'react';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import RevealSection from '@/components/ui/reveal-section';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Check, ArrowRight } from 'lucide-react';

const About: React.FC = () => {
  // Scroll to top when the page loads
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      
      <section className="pt-32 pb-16 relative overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-purple/20 blur-[150px] rounded-full pointer-events-none"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-brand-teal/20 blur-[150px] rounded-full pointer-events-none"></div>
        
        <div className="container max-w-7xl mx-auto px-4">
          <RevealSection>
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold font-display mb-6">
                About <span className="text-brand-teal">RemakeiT</span>
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We're on a mission to transform outdated websites into modern, high-performing digital assets that help businesses grow.
              </p>
            </div>
          </RevealSection>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
            <RevealSection delay={100}>
              <div className="glass-panel p-8 rounded-lg h-full">
                <h2 className="text-2xl font-semibold font-display mb-4 text-white">Our Story</h2>
                <p className="text-gray-300 mb-4">
                  RemakeiT was founded with a simple observation: too many businesses are held back by outdated websites that don't perform in today's digital landscape.
                </p>
                <p className="text-gray-300 mb-4">
                  Our founder, who has over 15 years of experience in web development and digital marketing, noticed a gap in the market. Many business owners were hesitant to invest in a new website because they couldn't visualize the end result or were burned by previous web developers.
                </p>
                <p className="text-gray-300">
                  That's why we pioneered our unique "see-before-you-buy" approach, creating 70% complete mockups at no cost, so businesses can see exactly what they're getting before making a commitment.
                </p>
              </div>
            </RevealSection>
            
            <RevealSection delay={200}>
              <div className="glass-panel p-8 rounded-lg h-full">
                <h2 className="text-2xl font-semibold font-display mb-4 text-white">Why Choose RemakeiT?</h2>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <span className="flex-shrink-0 w-6 h-6 bg-brand-teal/20 rounded-full flex items-center justify-center mr-3 mt-0.5">
                      <Check className="h-4 w-4 text-brand-teal" />
                    </span>
                    <span className="text-gray-300">No-risk approach with our free mockup model</span>
                  </li>
                  <li className="flex items-start">
                    <span className="flex-shrink-0 w-6 h-6 bg-brand-teal/20 rounded-full flex items-center justify-center mr-3 mt-0.5">
                      <Check className="h-4 w-4 text-brand-teal" />
                    </span>
                    <span className="text-gray-300">Expertise in both design and SEO/conversion optimization</span>
                  </li>
                  <li className="flex items-start">
                    <span className="flex-shrink-0 w-6 h-6 bg-brand-teal/20 rounded-full flex items-center justify-center mr-3 mt-0.5">
                      <Check className="h-4 w-4 text-brand-teal" />
                    </span>
                    <span className="text-gray-300">Transparent, fixed pricing with no hidden fees</span>
                  </li>
                  <li className="flex items-start">
                    <span className="flex-shrink-0 w-6 h-6 bg-brand-teal/20 rounded-full flex items-center justify-center mr-3 mt-0.5">
                      <Check className="h-4 w-4 text-brand-teal" />
                    </span>
                    <span className="text-gray-300">Fast turnaround times - from concept to launch in weeks, not months</span>
                  </li>
                  <li className="flex items-start">
                    <span className="flex-shrink-0 w-6 h-6 bg-brand-teal/20 rounded-full flex items-center justify-center mr-3 mt-0.5">
                      <Check className="h-4 w-4 text-brand-teal" />
                    </span>
                    <span className="text-gray-300">Ongoing support and guidance even after your website launches</span>
                  </li>
                </ul>
              </div>
            </RevealSection>
          </div>
          
          <RevealSection delay={300}>
            <div className="glass-panel p-8 rounded-lg mb-20">
              <h2 className="text-2xl font-semibold font-display mb-6 text-white text-center">Our Unique Process</h2>
              <p className="text-gray-300 mb-8 text-center max-w-3xl mx-auto">
                What makes RemakeiT different is our commitment to showing you what you're getting before you pay. Here's how our 70% ready mockup model works:
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-brand-teal/10 rounded-full flex items-center justify-center mx-auto mb-4 text-brand-teal">
                    <span className="text-xl font-bold">1</span>
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">Discovery</h3>
                  <p className="text-gray-300">
                    We learn about your business, industry, and goals to understand what you need.
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-brand-teal/10 rounded-full flex items-center justify-center mx-auto mb-4 text-brand-teal">
                    <span className="text-xl font-bold">2</span>
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">Free 70% Mockup</h3>
                  <p className="text-gray-300">
                    We create a working prototype of your new website with real design elements.
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-brand-teal/10 rounded-full flex items-center justify-center mx-auto mb-4 text-brand-teal">
                    <span className="text-xl font-bold">3</span>
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">No-Pressure Decision</h3>
                  <p className="text-gray-300">
                    You see what you're getting before you pay, so you can make a confident decision.
                  </p>
                </div>
              </div>
            </div>
          </RevealSection>
          
          <RevealSection delay={400}>
            <div className="glass-panel p-8 rounded-lg mb-20">
              <h2 className="text-2xl font-semibold font-display mb-6 text-white text-center">Frequently Asked Questions</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
                <div>
                  <h3 className="text-lg font-semibold text-brand-teal mb-2">What does "70% complete mockup" mean exactly?</h3>
                  <p className="text-gray-300">
                    It means we create a functional design with real pages, layout, and design elements. It's not just a sketch or wireframe—it's a working prototype that shows how your site will look and function, just missing your final content and any custom functionality.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-brand-teal mb-2">How long does it take to get the free mockup?</h3>
                  <p className="text-gray-300">
                    Typically 3-5 business days after our initial consultation, depending on the complexity of your project.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-brand-teal mb-2">What if I don't like the mockup?</h3>
                  <p className="text-gray-300">
                    No problem! There's no obligation. We can either make revisions based on your feedback or you can walk away with no cost or commitment.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-brand-teal mb-2">What's included in the $1,499 price?</h3>
                  <p className="text-gray-300">
                    A complete 5-7 page website, fully responsive, SEO-optimized, with contact forms, Google Analytics integration, basic SEO setup, and 3 months of technical support.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-brand-teal mb-2">Are there any ongoing costs?</h3>
                  <p className="text-gray-300">
                    The only ongoing costs would be domain registration (typically $15/year) and hosting (typically $10-20/month), which we can help set up but are not included in our package.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-brand-teal mb-2">How long does it take to complete the website after approval?</h3>
                  <p className="text-gray-300">
                    Typically 2-3 weeks, depending on how quickly you can provide any content we need and your feedback on revisions.
                  </p>
                </div>
              </div>
            </div>
          </RevealSection>
          
          <RevealSection delay={500} className="text-center">
            <h2 className="text-2xl md:text-3xl font-bold font-display mb-6">
              Ready to Transform Your Online Presence?
            </h2>
            <Button asChild size="lg" className="bg-brand-teal text-black hover:bg-brand-teal/90">
              <Link to="/contact">
                Get Your Free Website Mockup
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </RevealSection>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default About;
