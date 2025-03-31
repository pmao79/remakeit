
import React from 'react';
import ServicePageLayout from '@/components/ServicePageLayout';
import ServiceBenefits from '@/components/ServiceBenefits';
import RevealSection from '@/components/ui/reveal-section';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Check, RefreshCw, TrendingUp, Search, Clock, Shield, ArrowRight, BarChart } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import ComparisonSlider from '@/components/ui/comparison-slider';

const WebRedesign = () => {
  const { language } = useLanguage();
  
  const benefits = [
    {
      icon: <RefreshCw className="h-10 w-10" />,
      title: {
        sv: "Modern och tidsenlig design",
        en: "Modern and timely design"
      },
      description: {
        sv: "Vi förvandlar din föråldrade webbplats till en modern digital upplevelse som imponerar på besökare och speglar din brands nuvarande position.",
        en: "We transform your outdated website into a modern digital experience that impresses visitors and reflects your brand's current position."
      }
    },
    {
      icon: <TrendingUp className="h-10 w-10" />,
      title: {
        sv: "Förbättrad konverteringsgrad",
        en: "Improved conversion rate"
      },
      description: {
        sv: "Vår redesign fokuserar på att optimera användarresan och driva fler besökare till att bli kunder genom strategiska CTA:er och användarvänlig design.",
        en: "Our redesign focuses on optimizing the user journey and driving more visitors to become customers through strategic CTAs and user-friendly design."
      }
    },
    {
      icon: <Search className="h-10 w-10" />,
      title: {
        sv: "Bättre synlighet i sökmotorer",
        en: "Better search engine visibility"
      },
      description: {
        sv: "Vi bygger in SEO-bästa praxis i din nya webbplats för att förbättra dina rankningar och driva mer organisk trafik till din verksamhet.",
        en: "We build SEO best practices into your new website to improve your rankings and drive more organic traffic to your business."
      }
    },
    {
      icon: <Clock className="h-10 w-10" />,
      title: {
        sv: "Snabbare laddningstider",
        en: "Faster loading times"
      },
      description: {
        sv: "Våra redesigns sätter prestanda i fokus, vilket leder till snabbare webbplatser som ger bättre användarupplevelse och högre konverteringar.",
        en: "Our redesigns put performance at the forefront, resulting in faster websites that provide better user experience and higher conversions."
      }
    },
    {
      icon: <Shield className="h-10 w-10" />,
      title: {
        sv: "Förbättrad säkerhet",
        en: "Enhanced security"
      },
      description: {
        sv: "Vi uppgraderar din webbplats med de senaste säkerhetsåtgärderna för att skydda din verksamhet och dina kunders data från hot.",
        en: "We upgrade your website with the latest security measures to protect your business and your customers' data from threats."
      }
    },
    {
      icon: <BarChart className="h-10 w-10" />,
      title: {
        sv: "Datadrivna förbättringar",
        en: "Data-driven improvements"
      },
      description: {
        sv: "Vår redesignprocess börjar med analys av din nuvarande webbplats för att identifiera problem och möjligheter baserade på riktiga användardata.",
        en: "Our redesign process starts with analyzing your current website to identify problems and opportunities based on real user data."
      }
    }
  ];

  const beforeAfter = [
    {
      title: {
        sv: "Förbättrad användarupplevelse",
        en: "Improved user experience"
      },
      before: {
        sv: "Förvirrande navigation och struktur",
        en: "Confusing navigation and structure"
      },
      after: {
        sv: "Intuitiv och användarvänlig design",
        en: "Intuitive and user-friendly design"
      }
    },
    {
      title: {
        sv: "Modern design",
        en: "Modern design"
      },
      before: {
        sv: "Föråldrad visuell stil som skadar varumärket",
        en: "Outdated visual style that harms the brand"
      },
      after: {
        sv: "Fräsch, modern design som stärker varumärkesidentiteten",
        en: "Fresh, modern design that strengthens brand identity"
      }
    },
    {
      title: {
        sv: "Konverteringsoptimering",
        en: "Conversion optimization"
      },
      before: {
        sv: "Låga konverteringsgrader och oklara uppmaningar",
        en: "Low conversion rates and unclear calls-to-action"
      },
      after: {
        sv: "Strategiska CTA:er och optimerade konverteringsvägar",
        en: "Strategic CTAs and optimized conversion paths"
      }
    },
    {
      title: {
        sv: "Mobil upplevelse",
        en: "Mobile experience"
      },
      before: {
        sv: "Bristfällig mobilanpassning eller ingen alls",
        en: "Poor mobile adaptation or none at all"
      },
      after: {
        sv: "Fullt responsiv design för alla enheter",
        en: "Fully responsive design for all devices"
      }
    }
  ];

  return (
    <ServicePageLayout
      title={{
        sv: "Webbplats<span class=\"text-brand-teal\">Remake</span>iT som ger nytt liv till din digitala närvaro",
        en: "Website<span class=\"text-brand-teal\">Remake</span>iT that gives new life to your digital presence"
      }}
      subtitle={{
        sv: "Förvandla din föråldrade webbplats till en modern, effektiv och konverterande digital tillgång.",
        en: "Transform your outdated website into a modern, efficient, and converting digital asset."
      }}
      heroImage="https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?q=80&w=2000&auto=format&fit=crop"
    >
      {/* Intro Section */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-black to-background">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <RevealSection>
              <h2 className="text-3xl md:text-4xl font-bold font-display mb-6">
                {language === 'sv' 
                  ? "Är det dags att förnya din webbplats?" 
                  : "Is it time to refresh your website?"}
              </h2>
              <p className="text-gray-300 mb-6">
                {language === 'sv'
                  ? "En föråldrad eller ineffektiv webbplats kan aktivt skada ditt företag genom att driva bort potentiella kunder och minska din trovärdighet. Vår omdesignstjänst förvandlar din befintliga webbplats till en modern, effektiv och resultatdriven digital tillgång."
                  : "An outdated or ineffective website can actively harm your business by driving away potential customers and diminishing your credibility. Our redesign service transforms your existing website into a modern, efficient, and results-driven digital asset."}
              </p>
              <p className="text-gray-300 mb-6">
                {language === 'sv'
                  ? "Vi bevarar det som fungerar, förbättrar det som inte gör det, och adderar nya funktioner som tar din digitala närvaro till nästa nivå – allt med målet att öka konverteringar och stärka ditt varumärke."
                  : "We preserve what works, improve what doesn't, and add new features that take your digital presence to the next level – all with the goal of increasing conversions and strengthening your brand."}
              </p>
              <div className="mt-8 space-y-4">
                {[
                  language === 'sv' ? "Baserad på analys av din befintliga webbplats" : "Based on analysis of your existing website",
                  language === 'sv' ? "Bevarar SEO-värde och bygger vidare på det" : "Preserves SEO value and builds upon it",
                  language === 'sv' ? "Minimal nedtid vid övergången" : "Minimal downtime during transition"
                ].map((item, index) => (
                  <div key={index} className="flex items-start">
                    <div className="mr-4 mt-1">
                      <Check className="h-5 w-5 text-brand-teal" />
                    </div>
                    <p className="text-gray-300">{item}</p>
                  </div>
                ))}
              </div>
            </RevealSection>
            <RevealSection delay={200}>
              <div className="relative">
                <div className="absolute -inset-4 rounded-xl bg-brand-teal/20 blur-xl opacity-70"></div>
                <img 
                  src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=900&auto=format&fit=crop" 
                  alt="Web Redesign Process" 
                  className="rounded-lg relative z-10 w-full h-auto shadow-2xl border border-white/10" 
                />
              </div>
            </RevealSection>
          </div>
        </div>
      </section>
      
      {/* Before & After Comparison - Updated for mobile */}
      <RevealSection className="py-16 md:py-24 bg-gradient-to-b from-background to-secondary/30">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-display mb-6">
              {language === 'sv' ? "Före och efter omdesign" : "Before and after redesign"}
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              {language === 'sv' 
                ? "Se den dramatiska skillnaden en professionell omdesign kan göra" 
                : "See the dramatic difference a professional redesign can make"}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            <div className="relative h-[300px] sm:h-[400px] rounded-lg overflow-hidden">
              <img 
                src="https://placehold.co/800x800/111827/CCCCCC?text=Old+Website+Design" 
                alt="Before Redesign" 
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/60 flex flex-col justify-end p-4 sm:p-8">
                <h3 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4 text-white">
                  {language === 'sv' ? "FÖRE" : "BEFORE"}
                </h3>
                <ul className="space-y-1 sm:space-y-2">
                  {[
                    language === 'sv' ? "Föråldrad design från 2010" : "Outdated design from 2010",
                    language === 'sv' ? "Långsam laddningstid (8+ sekunder)" : "Slow loading time (8+ seconds)",
                    language === 'sv' ? "Inte mobilanpassad" : "Not mobile-friendly",
                    language === 'sv' ? "Konverteringsgrad: 0.8%" : "Conversion rate: 0.8%"
                  ].map((item, index) => (
                    <li key={index} className="flex items-center text-gray-300">
                      <span className="mr-2">•</span>
                      <span className="text-sm sm:text-base">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            
            <div className="relative h-[300px] sm:h-[400px] rounded-lg overflow-hidden">
              <img 
                src="https://placehold.co/800x800/0a2540/0CFAE8?text=New+Website+Design" 
                alt="After Redesign" 
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex flex-col justify-end p-4 sm:p-8">
                <h3 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4 text-brand-teal">
                  {language === 'sv' ? "EFTER" : "AFTER"}
                </h3>
                <ul className="space-y-1 sm:space-y-2">
                  {[
                    language === 'sv' ? "Modern, varumärkesanpassad design" : "Modern, brand-aligned design",
                    language === 'sv' ? "Snabb laddningstid (under 2 sekunder)" : "Fast loading time (under 2 seconds)",
                    language === 'sv' ? "Fullt responsiv på alla enheter" : "Fully responsive on all devices",
                    language === 'sv' ? "Konverteringsgrad: 3.5% (337% ökning)" : "Conversion rate: 3.5% (337% increase)"
                  ].map((item, index) => (
                    <li key={index} className="flex items-center text-white">
                      <Check className="h-4 w-4 mr-2 text-brand-teal flex-shrink-0" />
                      <span className="text-sm sm:text-base">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </RevealSection>
      
      {/* Benefits Section */}
      <ServiceBenefits 
        benefits={benefits} 
        title={{
          sv: "Fördelar med webbplatsomdesign",
          en: "Benefits of website redesign"
        }}
        subtitle={{
          sv: "En väl genomförd omdesign ger märkbara fördelar för din verksamhet",
          en: "A well-executed redesign provides tangible benefits for your business"
        }}
      />
      
      {/* Before/After Details - Improved for mobile */}
      <RevealSection className="py-16 md:py-24">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-display mb-6">
              {language === 'sv' ? "Vad förändrar vi?" : "What do we change?"}
            </h2>
            <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
              {language === 'sv' 
                ? "Vi fokuserar på nyckelområden som skapar störst impact" 
                : "We focus on key areas that create the biggest impact"}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {beforeAfter.map((item, index) => (
              <Card key={index} className="bg-secondary/50 border-white/5">
                <CardContent className="p-6 md:p-8">
                  <h3 className="text-lg md:text-xl font-semibold font-display mb-4 md:mb-5">{item.title[language]}</h3>
                  <div className="grid grid-cols-1 gap-3 md:gap-4">
                    <div className="flex items-start">
                      <div className="mr-3 md:mr-4 p-1 bg-red-900/30 rounded-full flex-shrink-0">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-red-500" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <div>
                        <p className="font-semibold text-red-400 text-sm md:text-base">
                          {language === 'sv' ? "FÖRE:" : "BEFORE:"}
                        </p>
                        <p className="text-gray-400 text-sm md:text-base">{item.before[language]}</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="mr-3 md:mr-4 p-1 bg-brand-teal/30 rounded-full flex-shrink-0">
                        <Check className="h-5 w-5 text-brand-teal" />
                      </div>
                      <div>
                        <p className="font-semibold text-brand-teal text-sm md:text-base">
                          {language === 'sv' ? "EFTER:" : "AFTER:"}
                        </p>
                        <p className="text-gray-300 text-sm md:text-base">{item.after[language]}</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </RevealSection>
      
      {/* Our Process - Completely reworked for mobile */}
      <RevealSection className="py-16 md:py-24 bg-gradient-to-b from-secondary/30 to-background">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-display mb-6">
              {language === 'sv' ? "Vår omdesignprocess" : "Our redesign process"}
            </h2>
          </div>
          
          {/* Mobile-first timeline with responsive design */}
          <div className="relative max-w-5xl mx-auto">
            {/* Timeline line - hidden on mobile, shown on larger screens */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-brand-teal/80 to-brand-teal/20 transform translate-x-[-50%]"></div>
            
            {/* Timeline items - stack vertically on mobile */}
            {[
              {
                title: { sv: "Analys & Utvärdering", en: "Analysis & Evaluation" },
                description: { 
                  sv: "Vi gör en djupgående analys av din nuvarande webbplats för att identifiera styrkor, svagheter och möjligheter till förbättring.", 
                  en: "We conduct an in-depth analysis of your current website to identify strengths, weaknesses, and opportunities for improvement." 
                },
                icon: <Search className="h-6 w-6 md:h-8 md:w-8" />
              },
              {
                title: { sv: "Strategi & Planering", en: "Strategy & Planning" },
                description: { 
                  sv: "Baserat på analysen utvecklar vi en omfattande omdesignstrategi som fokuserar på dina affärsmål och användarnas behov.", 
                  en: "Based on the analysis, we develop a comprehensive redesign strategy that focuses on your business goals and users' needs." 
                },
                icon: <ArrowRight className="h-6 w-6 md:h-8 md:w-8" />
              },
              {
                title: { sv: "Design & Prototyp", en: "Design & Prototype" },
                description: { 
                  sv: "Vi skapar moderna designkoncept och interaktiva prototyper för att visualisera den nya webbplatsen innan utveckling.", 
                  en: "We create modern design concepts and interactive prototypes to visualize the new website before development." 
                },
                icon: <ArrowRight className="h-6 w-6 md:h-8 md:w-8" />
              },
              {
                title: { sv: "Utveckling & Optimering", en: "Development & Optimization" },
                description: { 
                  sv: "Vårt utvecklingsteam bygger din nya webbplats med fokus på prestanda, säkerhet och SEO-optimering.", 
                  en: "Our development team builds your new website with a focus on performance, security, and SEO optimization." 
                },
                icon: <ArrowRight className="h-6 w-6 md:h-8 md:w-8" />
              },
              {
                title: { sv: "Lansering & Uppföljning", en: "Launch & Follow-up" },
                description: { 
                  sv: "Efter noggrann testning lanseras din nya webbplats, och vi fortsätter att övervaka och finjustera för att säkerställa optimal prestanda.", 
                  en: "After thorough testing, your new website is launched, and we continue to monitor and fine-tune to ensure optimal performance." 
                },
                icon: <ArrowRight className="h-6 w-6 md:h-8 md:w-8" />
              }
            ].map((item, index) => (
              <div key={index} className="relative mb-8 md:mb-12">
                {/* Mobile layout - vertical stack */}
                <div className="md:hidden flex">
                  <div className="mr-4 mt-1">
                    <div className="bg-background border-4 border-brand-teal rounded-full p-1">
                      <div className="bg-brand-teal/20 rounded-full p-1">
                        {item.icon}
                      </div>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold mb-2">{item.title[language]}</h3>
                    <p className="text-gray-400 text-sm">{item.description[language]}</p>
                  </div>
                </div>

                {/* Desktop layout - horizontal alternating */}
                <div className={`hidden md:flex items-center ${
                  index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                }`}>
                  <div className={`w-1/2 ${
                    index % 2 === 0 ? 'pr-12 text-right' : 'pl-12 text-left'
                  }`}>
                    <div className={`${index % 2 === 0 ? 'ml-auto' : ''}`}>
                      <h3 className="text-xl font-semibold font-display mb-3">{item.title[language]}</h3>
                      <p className="text-gray-400">{item.description[language]}</p>
                    </div>
                  </div>
                  
                  <div className="absolute left-1/2 transform translate-x-[-50%] bg-background border-4 border-brand-teal rounded-full p-2">
                    <div className="bg-brand-teal/20 rounded-full p-2">
                      {item.icon}
                    </div>
                  </div>
                  
                  <div className="w-1/2"></div>
                </div>

                {/* Vertical connector line for mobile */}
                {index < 4 && (
                  <div className="md:hidden absolute left-4 top-10 bottom-0 w-0.5 h-[calc(100%+1rem)] bg-gradient-to-b from-brand-teal/60 to-brand-teal/10"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </RevealSection>
      
      {/* Case Study/Testimonial - Updated for small business focus and mobile view */}
      <RevealSection className="py-16 md:py-24">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="bg-gradient-to-r from-secondary via-secondary/80 to-secondary/50 rounded-2xl overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="relative h-56 sm:h-64 lg:h-auto">
                <img 
                  src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1000&auto=format&fit=crop" 
                  alt="Small Business Case Study" 
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
              <div className="p-6 sm:p-8 md:p-12">
                <h3 className="text-xl sm:text-2xl font-bold font-display mb-4">
                  {language === 'sv' ? "Case: Lokal designbyrå" : "Case: Local design agency"}
                </h3>
                <p className="text-gray-300 mb-6 text-sm sm:text-base">
                  {language === 'sv'
                    ? "En mindre designbyrå med fem anställda kom till oss eftersom deras webbplats från 2018 inte längre representerade deras moderna portfölj eller attraherade rätt kunder."
                    : "A small design agency with five employees came to us because their website from 2018 no longer represented their modern portfolio or attracted the right clients."}
                </p>
                <div className="grid grid-cols-2 gap-4 sm:gap-6 mb-6">
                  <div>
                    <p className="text-xs sm:text-sm text-gray-400 mb-1">
                      {language === 'sv' ? "Nya kundförfrågningar" : "New client inquiries"}
                    </p>
                    <p className="text-2xl sm:text-3xl font-bold text-brand-teal">+156%</p>
                  </div>
                  <div>
                    <p className="text-xs sm:text-sm text-gray-400 mb-1">
                      {language === 'sv' ? "Kvalificerade leads" : "Qualified leads"}
                    </p>
                    <p className="text-2xl sm:text-3xl font-bold text-brand-teal">+89%</p>
                  </div>
                  <div>
                    <p className="text-xs sm:text-sm text-gray-400 mb-1">
                      {language === 'sv' ? "Besökstid på sidan" : "Time on site"}
                    </p>
                    <p className="text-2xl sm:text-3xl font-bold text-brand-teal">+118%</p>
                  </div>
                  <div>
                    <p className="text-xs sm:text-sm text-gray-400 mb-1">
                      {language === 'sv' ? "Sidladdningstid" : "Page load time"}
                    </p>
                    <p className="text-2xl sm:text-3xl font-bold text-brand-teal">0.9s</p>
                  </div>
                </div>
                <blockquote className="border-l-4 border-brand-teal pl-4 italic text-gray-300 text-sm sm:text-base">
                  {language === 'sv'
                    ? "Som ett mindre företag var vi oroliga för att en omdesign skulle vara utom vår budget. RemakeiT anpassade processen för våra behov och levererade en webbplats som direkt började generera fler och bättre kundförfrågningar. ROI blev tydlig redan efter första månaden."
                    : "As a small business, we were worried a redesign would be out of our budget. RemakeiT tailored the process to our needs and delivered a website that immediately started generating more and better client inquiries. The ROI became clear after just the first month."}
                  <footer className="mt-2 text-xs sm:text-sm text-gray-400 not-italic">
                    — {language === 'sv' ? "Ägare" : "Owner"}, {language === 'sv' ? "Designbyrå i Göteborg" : "Design Agency in Gothenburg"}
                  </footer>
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </RevealSection>
    </ServicePageLayout>
  );
};

export default WebRedesign;
