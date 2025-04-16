import React, { createContext, useState, useContext, ReactNode, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

type Language = 'sv' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (language: Language) => void;
  t: (key: string) => string;
  changeLanguage: (newLang: Language) => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Svenska och engelska översättningar
const translations: Record<Language, Record<string, string>> = {
  sv: {
    // Navigation
    'nav.home': 'Hem',
    'nav.services': 'Tjänster',
    'nav.about': 'Om oss',
    'nav.portfolio': 'Portfolio',
    'nav.contact': 'Kontakt',
    'nav.cta': 'Få en gratis mockup',
    
    // Hero
    'hero.title': 'Premiumhemsidor till en bråkdel av priset - AI-optimerat!',
    'hero.subtitle': 'Vi skapar professionella, SEO-optimerade hemsidor för en bråkdel av vad traditionella webbyråer tar. Vår AI-drivna process ger samma kvalitet men till ett mycket lägre pris.',
    'hero.cta.primary': 'Få en gratis webbplats-mockup',
    'hero.cta.secondary': 'Se våra arbeten',
    'hero.traditional': 'Traditionell webbyrå',
    'hero.ourPrice': 'Från 7 000 SEK',
    'hero.pricingClaim': 'Samma kvalitet - en bråkdel av priset!',
    
    // Benefits
    'benefits.title': 'Varför välja RemakeiT',
    'benefits.subtitle': 'Vi bygger hemsidor som inte bara ser bra ut – de presterar. Med vår AI-drivna process får du en premiumhemsida utan premiumpris.',
    'benefits.seo.title': 'SEO-optimerad för tillväxt',
    'benefits.seo.description': 'Varje webbplats vi bygger är designad med sökmotorer i åtanke, vilket hjälper dig att ranka högre och locka fler besökare.',
    'benefits.fast.title': 'Snabb, mobilanpassad och säker',
    'benefits.fast.description': 'Blixtsnabba laddningstider, perfekt på alla enheter och byggd med säkerhet som grund.',
    'benefits.risk.title': 'Ingen risk – se en demo först',
    'benefits.risk.description': 'Vår unika metod: få en färdig mockup innan du betalar, så att du vet exakt vad du får.',
    'benefits.price.title': 'Ett fast pris – inga dolda avgifter',
    'benefits.price.description': 'Transparent prissättning med allt inkluderat – inga överraskningar, inga löpande kostnader om du inte vill ha ytterligare tjänster.',
    
    // Process
    'process.title': 'Hur det fungerar',
    'process.subtitle': 'Vår AI-drivna process är designad för att vara enkel, effektiv och ge dig en premiumhemsida till ett oslagbart pris.',
    'process.step1': 'Analys',
    'process.step1.description': 'Vi analyserar ditt företag, din målgrupp och dina mål för att förstå exakt vad din nya hemsida behöver leverera.',
    'process.step2': 'Gratis design',
    'process.step2.description': 'Vi skapar en gratis mockup så att du kan se exakt vad du får innan du behöver betala en krona.',
    'process.step3': 'Feedback & justering',
    'process.step3.description': 'Du godkänner designen och ger feedback. Vi justerar allt tills du är 100% nöjd med resultatet.',
    'process.step4': 'Lansering',
    'process.step4.description': 'Vi slutför hemsidan, optimerar den för sökmotorer och lanserar den snabbt och smidigt!',
    
    // Before/After
    'before-after.title': 'Före & Efter showcase',
    'before-after.subtitle': 'Se skillnaden en modern, AI-optimerad hemsida kan göra för ditt företag. Dra i reglaget för att jämföra transformationen.',
    'before-after.example.title': 'Våra kunders transformationer',
    'before-after.example.description': 'Vi förvandlar föråldrade eller icke-existerande hemsidor till moderna, konverterande verktyg för ditt företag.',
    'before-after.cta': 'Se fler exempel',
    
    // Pricing
    'pricing.title': 'Prisvärt & Transparent',
    'pricing.subtitle': 'Inga dolda avgifter eller överraskningskostnader. Bara tydlig, direkt prissättning för en hemsida som både ser bra ut och presterar.',
    'pricing.package': 'Hemsidapaket',
    'pricing.basicTitle': 'Bas',
    'pricing.basicPrice': '7 000 kr',
    'pricing.premiumTitle': 'Premium',
    'pricing.premiumPrice': '10 000 kr',
    'pricing.enterpriseTitle': 'Enterprise',
    'pricing.enterprisePrice': 'Från 15 000 kr',
    'pricing.onetime': 'engångsbetalning',
    'pricing.feature1': 'Skräddarsydd, responsiv hemsida (upp till 5 sidor)',
    'pricing.feature2': 'Grundläggande SEO-optimering',
    'pricing.feature3': 'Mobilanpassad design med snabb laddning',
    'pricing.feature4': 'Kontaktformulär',
    'pricing.feature5': 'Google Analytics-integration',
    'pricing.feature6': '30 minuters utbildning',
    'pricing.feature7': '1 månads teknisk support',
    'pricing.cta': 'Kom igång med en gratis mockup',
    'pricing.nocost': 'Ingen förpliktelse. Se vad vi kan bygga innan du betalar.',
    'pricing.guarantee': 'Du betalar ingenting förrän du är 100% nöjd med designen',
    
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
    'nav.services': 'Services',
    'nav.about': 'About',
    'nav.portfolio': 'Portfolio',
    'nav.contact': 'Contact',
    'nav.cta': 'Get Free Mockup',
    
    // Hero
    'hero.title': 'Premium Websites at a Fraction of the Cost - AI-Optimized!',
    'hero.subtitle': 'We create professional, SEO-optimized websites for a fraction of what traditional agencies charge. Our AI-powered process delivers the same quality at a much lower price.',
    'hero.cta.primary': 'Get a Free Website Mockup',
    'hero.cta.secondary': 'View Our Work',
    'hero.traditional': 'Traditional Agency',
    'hero.ourPrice': 'From $699',
    'hero.pricingClaim': 'Same quality - fraction of the price!',
    
    // Benefits
    'benefits.title': 'Why Choose RemakeiT',
    'benefits.subtitle': 'We build websites that don\'t just look good – they perform. Our AI-driven process gives you a premium website without the premium price.',
    'benefits.seo.title': 'SEO-Optimized for Growth',
    'benefits.seo.description': 'Every website we build is designed with search engines in mind, helping you rank higher and attract more visitors.',
    'benefits.fast.title': 'Fast, Mobile-Friendly & Secure',
    'benefits.fast.description': 'Lightning-fast loading times, perfect on every device, and built with security at its core.',
    'benefits.risk.title': 'No Risk – See a Demo First',
    'benefits.risk.description': 'Our unique approach: get a finished mockup before you pay, so you know exactly what you\'re getting.',
    'benefits.price.title': 'One Fixed Price – No Hidden Fees',
    'benefits.price.description': 'Transparent pricing with everything included – no surprises, no ongoing costs unless you want additional services.',
    
    // Process
    'process.title': 'How It Works',
    'process.subtitle': 'Our AI-driven process is designed to be simple, efficient, and deliver you a premium website at an unbeatable price.',
    'process.step1': 'Analysis',
    'process.step1.description': 'We analyze your business, audience, and goals to understand exactly what your new website needs to deliver.',
    'process.step2': 'Free Design',
    'process.step2.description': 'We create a free mockup so you can see exactly what you\'re getting before you need to pay a penny.',
    'process.step3': 'Feedback & Adjustments',
    'process.step3.description': 'You approve the design and provide feedback. We adjust everything until you\'re 100% satisfied with the result.',
    'process.step4': 'Launch',
    'process.step4.description': 'We finalize the website, optimize it for search engines, and launch it quickly and smoothly!',
    
    // Before/After
    'before-after.title': 'Before & After Showcase',
    'before-after.subtitle': 'See the difference a modern, AI-optimized website can make for your business. Drag the slider to compare the transformation.',
    'before-after.example.title': 'Our Client Transformations',
    'before-after.example.description': 'We transform outdated or non-existent websites into modern, converting tools for your business.',
    'before-after.cta': 'View More Examples',
    
    // Pricing
    'pricing.title': 'Affordable & Transparent',
    'pricing.subtitle': 'No hidden fees or surprise costs. Just clear, upfront pricing for a website that both looks good and performs.',
    'pricing.package': 'Website Package',
    'pricing.basicTitle': 'Basic',
    'pricing.basicPrice': '$699',
    'pricing.premiumTitle': 'Premium',
    'pricing.premiumPrice': '$999',
    'pricing.enterpriseTitle': 'Enterprise',
    'pricing.enterprisePrice': 'From $1499',
    'pricing.onetime': 'one-time payment',
    'pricing.feature1': 'Custom responsive website (up to 5 pages)',
    'pricing.feature2': 'Basic SEO optimization',
    'pricing.feature3': 'Mobile-friendly, fast-loading design',
    'pricing.feature4': 'Contact form',
    'pricing.feature5': 'Google Analytics integration',
    'pricing.feature6': '30 minutes of training',
    'pricing.feature7': '1 month of technical support',
    'pricing.cta': 'Get Started with a Free Mockup',
    'pricing.nocost': 'No obligation. See what we can build before you pay.',
    'pricing.guarantee': 'You pay nothing until you\'re 100% satisfied with the design',
    
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

// Helper function to get language from pathname
const getLanguageFromPathname = (pathname: string): Language => {
  return pathname.startsWith('/en') ? 'en' : 'sv';
};

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const initialLanguage = getLanguageFromPathname(location.pathname);
  const [language, setInternalLanguage] = useState<Language>(initialLanguage);

  // Effect to sync language with URL changes
  useEffect(() => {
    const langFromPath = getLanguageFromPathname(location.pathname);
    if (langFromPath !== language) {
      setInternalLanguage(langFromPath);
    }
  }, [location.pathname, language]);

  // Translation function
  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  // Function to change language and update URL
  const changeLanguage = (newLang: Language) => {
    const currentPath = location.pathname;
    let newPath = currentPath;

    if (newLang === 'en' && !currentPath.startsWith('/en')) {
      newPath = `/en${currentPath === '/' ? '' : currentPath}`;
    } else if (newLang === 'sv' && currentPath.startsWith('/en')) {
      newPath = currentPath.substring(3);
      if (newPath === '') newPath = '/';
    }

    if (newPath !== currentPath) {
      setInternalLanguage(newLang);
      navigate(newPath);
    } else if (language !== newLang) {
      setInternalLanguage(newLang);
    }
  };

  // Legacy setLanguage function (kept for backward compatibility)
  const setLanguage = (lang: Language) => {
    console.warn("setLanguage is deprecated. Please use changeLanguage instead.");
    setInternalLanguage(lang);
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, changeLanguage }}>
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
