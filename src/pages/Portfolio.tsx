
import React, { useEffect } from 'react';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import RevealSection from '@/components/ui/reveal-section';
import ComparisonSlider from '@/components/ui/comparison-slider';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const Portfolio: React.FC = () => {
  // Sample portfolio items with before/after images
  // In a real implementation, these would come from a database or API
  const portfolioItems = [
    {
      id: 1,
      title: "Local Restaurant",
      description: "Transformed an outdated static site into a modern, mobile-friendly experience with online ordering capabilities, resulting in a 40% increase in online orders.",
      category: "Restaurant",
      before: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=800&q=80",
      after: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&w=800&q=80",
      testimonial: "The transformation was incredible. Our customers love how easy it is to order online now, and we've seen a significant increase in business since the new site launched.",
      client: "Maria G., Owner"
    },
    {
      id: 2,
      title: "Law Firm",
      description: "Redesigned a text-heavy, outdated website into a modern, client-focused platform that increased lead generation by 65% within the first three months.",
      category: "Professional Services",
      before: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
      after: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&w=800&q=80",
      testimonial: "Our old website was embarrassing and didn't represent our level of professionalism. The new design has completely changed how potential clients perceive us online.",
      client: "Robert T., Managing Partner"
    },
    {
      id: 3,
      title: "E-commerce Store",
      description: "Rebuilt an underperforming online store with improved product navigation, mobile optimization, and streamlined checkout, resulting in a 78% increase in conversion rate.",
      category: "E-commerce",
      before: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800&q=80",
      after: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&w=800&q=80",
      testimonial: "The difference in our online sales before and after RemakeiT is night and day. The new site is beautiful, fast, and most importantly, it converts browsers into buyers.",
      client: "Jennifer L., Founder"
    }
  ];

  // Scroll to top when the page loads
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      
      <section className="pt-32 pb-16 relative overflow-hidden">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-brand-purple/20 blur-[150px] rounded-full pointer-events-none"></div>
        <div className="absolute bottom-1/3 left-1/3 w-96 h-96 bg-brand-teal/20 blur-[150px] rounded-full pointer-events-none"></div>
        
        <div className="container max-w-7xl mx-auto px-4">
          <RevealSection>
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold font-display mb-6">
                Our <span className="text-brand-teal">Portfolio</span>
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                See the difference a modern, optimized website can make. Drag the sliders below to compare the transformations we've made for our clients.
              </p>
            </div>
          </RevealSection>
          
          <div className="space-y-20 mb-16">
            {portfolioItems.map((item, index) => (
              <RevealSection key={item.id} delay={index * 100}>
                <div className="glass-panel p-8 rounded-lg">
                  <div className="flex flex-col lg:flex-row gap-8 items-start">
                    <div className="lg:w-1/2">
                      <div className="mb-6">
                        <span className="inline-block px-3 py-1 bg-brand-teal/20 text-brand-teal text-sm font-medium rounded-full mb-4">
                          {item.category}
                        </span>
                        <h2 className="text-2xl md:text-3xl font-bold font-display mb-4">{item.title}</h2>
                        <p className="text-gray-300 mb-6">{item.description}</p>
                      </div>
                      
                      <div className="glass-panel p-6 rounded-lg bg-white/5">
                        <p className="text-gray-300 italic mb-4">"{item.testimonial}"</p>
                        <p className="text-brand-teal font-medium">— {item.client}</p>
                      </div>
                    </div>
                    
                    <div className="lg:w-1/2">
                      <ComparisonSlider
                        beforeImage={item.before}
                        afterImage={item.after}
                        alt={`Before and after comparison for ${item.title}`}
                      />
                    </div>
                  </div>
                </div>
              </RevealSection>
            ))}
          </div>
          
          <RevealSection delay={400} className="text-center">
            <h2 className="text-2xl md:text-3xl font-bold font-display mb-6">
              Ready to Join Our Success Stories?
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

export default Portfolio;
