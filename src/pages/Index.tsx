
import React, { useEffect } from 'react';
import Nav from '@/components/Nav';
import Hero from '@/components/Hero';
import Benefits from '@/components/Benefits';
import Process from '@/components/Process';
import BeforeAfter from '@/components/BeforeAfter';
import Pricing from '@/components/Pricing';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index: React.FC = () => {
  // Scroll to top when the page loads
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <Hero />
      <Benefits />
      <Process />
      <BeforeAfter />
      <Pricing />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
