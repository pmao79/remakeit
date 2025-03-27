
import React, { createContext, useState, useContext, ReactNode } from 'react';

type Language = 'sv' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (language: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Svenska och engelska översättningar
const translations: Record<Language, Record<string, string>> = {
  sv: {
    // Navigation
    'nav.home': 'Hem',
    'nav.about': 'Om oss',
    'nav.portfolio': 'Portfolio',
    'nav.contact': 'Kontakt',
    'nav.cta': 'Få en gratis mockup',
    
    // Hero
    'hero.title': 'Ditt företag förtjänar en webbplats som fungerar – Låt oss göra om den!',
    'hero.subtitle': 'Föråldrad webbplats? Eller ingen alls? Vi bygger moderna, SEO-optimerade webbplatser som konverterar besökare till kunder.',
    'hero.cta.primary': 'Få en gratis webbplats-mockup',
    'hero.cta.secondary': 'Se våra arbeten',
    
    // Benefits
    'benefits.title': 'Varför välja RemakeiT',
    'benefits.subtitle': 'Vi bygger webbplatser som inte bara ser bra ut – de presterar. Här är varför företag litar på oss.',
    'benefits.seo.title': 'SEO-optimerad för tillväxt',
    'benefits.seo.description': 'Varje webbplats vi bygger är designad med sökmotorer i åtanke, vilket hjälper dig att ranka högre och locka fler besökare.',
    'benefits.fast.title': 'Snabb, mobilanpassad och säker',
    'benefits.fast.description': 'Blixtsnabba laddningstider, perfekt på alla enheter och byggd med säkerhet som grund.',
    'benefits.risk.title': 'Ingen risk – se en demo först',
    'benefits.risk.description': 'Vår unika metod: få en 70% färdig mockup innan du betalar, så att du vet exakt vad du får.',
    'benefits.price.title': 'Ett fast pris – inga dolda avgifter',
    'benefits.price.description': 'Transparent prissättning med allt inkluderat – inga överraskningar, inga löpande kostnader om du inte vill ha ytterligare tjänster.',
    
    // Process
    'process.title': 'Hur det fungerar',
    'process.subtitle': 'Vår transparenta process är utformad för att ge dig förtroende i varje steg. Här är vad du kan förvänta dig:',
    'process.step1': 'Upptäckt',
    'process.step1.description': 'Vi hittar företag som behöver en webbplatsuppgradering och förstår dina specifika behov och mål.',
    'process.step2': 'Gratis mockup',
    'process.step2.description': 'Vi skapar en gratis mockup som är ungefär 70% färdig så att du kan se exakt vad du får.',
    'process.step3': 'Godkännande och innehåll',
    'process.step3.description': 'Du godkänner designen och tillhandahåller eventuellt ytterligare innehåll som behövs för att slutföra webbplatsen.',
    'process.step4': 'Lansering',
    'process.step4.description': 'Vi slutför webbplatsen, optimerar den för sökmotorer och lanserar den för världen!',
    
    // Before/After
    'before-after.title': 'Före och efter showcase',
    'before-after.subtitle': 'Se skillnaden en modern, optimerad webbplats kan göra. Dra i reglaget för att jämföra transformationen.',
    'before-after.example.title': 'Lokal restaurang',
    'before-after.example.description': 'Förvandlade en föråldrad statisk webbplats till en modern, mobilanpassad upplevelse med möjlighet till onlinebeställning.',
    'before-after.cta': 'Se fler exempel',
    
    // Pricing
    'pricing.title': 'Enkla, transparenta priser',
    'pricing.subtitle': 'Inga dolda avgifter eller överraskningskostnader. Bara tydlig, direkt prissättning för en webbplats som fungerar.',
    'pricing.package': 'Komplett webbplatspaket',
    'pricing.price': '14 999 kr',
    'pricing.onetime': 'engångsbetalning',
    'pricing.feature1': 'Skräddarsydd, responsiv webbplats (5-7 sidor)',
    'pricing.feature2': 'SEO-optimering för bättre placering i sökmotorer',
    'pricing.feature3': 'Mobilanpassad design med snabb laddning',
    'pricing.feature4': 'Kontaktformulär och lead capture-inställning',
    'pricing.feature5': 'Google Analytics-integration',
    'pricing.feature6': '1 timmes utbildning i hur man uppdaterar innehåll',
    'pricing.feature7': '3 månaders teknisk support',
    'pricing.cta': 'Kom igång med en gratis mockup',
    'pricing.nocost': 'Ingen förpliktelse. Se vad vi kan bygga innan du betalar.',
    
    // Contact form
    'contact.title': 'Kontakta oss',
    'contact.subtitle': 'Redo att förvandla din online-närvaro? Fyll i formuläret nedan för att komma igång med en gratis webbplats-mockup.',
    
    // Footer
    'footer.description': 'Vi bygger moderna, SEO-optimerade webbplatser som konverterar besökare till kunder. Kom igång med en gratis mockup idag.',
    'footer.links': 'Snabblänkar',
    'footer.services': 'Tjänster',
    'footer.service1': 'Webbdesign',
    'footer.service2': 'Webbplatsomdesign',
    'footer.service3': 'SEO-optimering',
    'footer.service4': 'Konverteringsoptimering',
    'footer.contact': 'Kontakt',
    'footer.phone': 'Telefon:',
    'footer.email': 'E-post:',
    'footer.hours': 'Öppettider:',
    'footer.hours.value': 'Måndag - Fredag: 9:00 - 17:00',
    'footer.rights': 'Alla rättigheter förbehållna.',
    'footer.privacy': 'Integritetspolicy',
    'footer.terms': 'Användarvillkor',
  },
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.portfolio': 'Portfolio',
    'nav.contact': 'Contact',
    'nav.cta': 'Get Free Mockup',
    
    // Hero
    'hero.title': 'Your Business Deserves a Website That Works – Let\'s Remake It!',
    'hero.subtitle': 'Outdated website? Or none at all? We build modern, SEO-optimized websites that convert visitors into customers.',
    'hero.cta.primary': 'Get a Free Website Mockup',
    'hero.cta.secondary': 'View Our Work',
    
    // Benefits
    'benefits.title': 'Why Choose RemakeiT',
    'benefits.subtitle': 'We build websites that don\'t just look good – they perform. Here\'s why businesses trust us.',
    'benefits.seo.title': 'SEO-Optimized for Growth',
    'benefits.seo.description': 'Every website we build is designed with search engines in mind, helping you rank higher and attract more visitors.',
    'benefits.fast.title': 'Fast, Mobile-Friendly & Secure',
    'benefits.fast.description': 'Lightning-fast loading times, perfect on every device, and built with security at its core.',
    'benefits.risk.title': 'No Risk – See a Demo First',
    'benefits.risk.description': 'Our unique approach: get a 70% finished mockup before you pay, so you know exactly what you\'re getting.',
    'benefits.price.title': 'One Fixed Price – No Hidden Fees',
    'benefits.price.description': 'Transparent pricing with everything included – no surprises, no ongoing costs unless you want additional services.',
    
    // Process
    'process.title': 'How It Works',
    'process.subtitle': 'Our transparent process is designed to give you confidence at every step. Here\'s what to expect:',
    'process.step1': 'Discovery',
    'process.step1.description': 'We find businesses that need a website upgrade and understand your specific needs and goals.',
    'process.step2': 'Free Mockup',
    'process.step2.description': 'We create a free mockup that\'s approximately 70% complete so you can see exactly what you\'re getting.',
    'process.step3': 'Approval & Content',
    'process.step3.description': 'You approve the design and provide any additional content needed to complete the website.',
    'process.step4': 'Launch',
    'process.step4.description': 'We finalize the website, optimize it for search engines, and launch it to the world!',
    
    // Before/After
    'before-after.title': 'Before & After Showcase',
    'before-after.subtitle': 'See the difference a modern, optimized website can make. Drag the slider to compare the transformation.',
    'before-after.example.title': 'Local Restaurant',
    'before-after.example.description': 'Transformed an outdated static site into a modern, mobile-friendly experience with online ordering.',
    'before-after.cta': 'View More Examples',
    
    // Pricing
    'pricing.title': 'Simple, Transparent Pricing',
    'pricing.subtitle': 'No hidden fees or surprise costs. Just clear, upfront pricing for a website that works.',
    'pricing.package': 'Complete Website Package',
    'pricing.price': '$1,499',
    'pricing.onetime': 'one-time payment',
    'pricing.feature1': 'Custom designed, responsive website (5-7 pages)',
    'pricing.feature2': 'SEO optimization for better search engine ranking',
    'pricing.feature3': 'Mobile-friendly, fast-loading design',
    'pricing.feature4': 'Contact form and lead capture setup',
    'pricing.feature5': 'Google Analytics integration',
    'pricing.feature6': '1 hour of training on how to update content',
    'pricing.feature7': '3 months of technical support',
    'pricing.cta': 'Get Started with a Free Mockup',
    'pricing.nocost': 'No obligation. See what we can build before you pay.',
    
    // Contact form
    'contact.title': 'Get in Touch',
    'contact.subtitle': 'Ready to transform your online presence? Fill out the form below to get started with a free website mockup.',
    
    // Footer
    'footer.description': 'We build modern, SEO-optimized websites that convert visitors into customers. Get started with a free mockup today.',
    'footer.links': 'Quick Links',
    'footer.services': 'Services',
    'footer.service1': 'Website Design',
    'footer.service2': 'Website Redesign',
    'footer.service3': 'SEO Optimization',
    'footer.service4': 'Conversion Optimization',
    'footer.contact': 'Contact',
    'footer.phone': 'Phone:',
    'footer.email': 'Email:',
    'footer.hours': 'Hours:',
    'footer.hours.value': 'Monday - Friday: 9am - 5pm',
    'footer.rights': 'All rights reserved.',
    'footer.privacy': 'Privacy Policy',
    'footer.terms': 'Terms of Service',
  }
};

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('sv');

  // Översättningsfunktion
  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

// Hook för att använda språkkontext
export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
