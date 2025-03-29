
import React from 'react';
import ServicePageLayout from '@/components/ServicePageLayout';
import ServiceBenefits from '@/components/ServiceBenefits';
import RevealSection from '@/components/ui/reveal-section';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Check, BarChart4, Target, LineChart, Lightbulb, ArrowRight, Microscope, Gauge } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const ConversionOptimization = () => {
  const { language } = useLanguage();
  
  const benefits = [
    {
      icon: <BarChart4 className="h-10 w-10" />,
      title: {
        sv: "Ökade konverteringsgrader",
        en: "Increased conversion rates"
      },
      description: {
        sv: "Förvandla fler av dina befintliga besökare till kunder, leads eller prenumeranter utan att behöva öka din trafik.",
        en: "Convert more of your existing visitors into customers, leads, or subscribers without having to increase your traffic."
      }
    },
    {
      icon: <Target className="h-10 w-10" />,
      title: {
        sv: "Lägre anskaffningskostnad",
        en: "Lower acquisition cost"
      },
      description: {
        sv: "När din webbplats konverterar bättre får du mer värde från varje besökare, vilket sänker din kostnad per konvertering.",
        en: "When your website converts better, you get more value from each visitor, which lowers your cost per conversion."
      }
    },
    {
      icon: <Lightbulb className="h-10 w-10" />,
      title: {
        sv: "Datadrivna insikter",
        en: "Data-driven insights"
      },
      description: {
        sv: "Få djupgående förståelse för hur dina besökare interagerar med din webbplats och vad som motiverar dem till handling.",
        en: "Gain deep understanding of how your visitors interact with your website and what motivates them to take action."
      }
    },
    {
      icon: <LineChart className="h-10 w-10" />,
      title: {
        sv: "Förbättrad ROI",
        en: "Improved ROI"
      },
      description: {
        sv: "Maximera avkastningen på dina befintliga marknadsföringsinvesteringar genom att få fler konverteringar från samma trafikmängd.",
        en: "Maximize the return on your existing marketing investments by getting more conversions from the same amount of traffic."
      }
    },
    {
      icon: <Gauge className="h-10 w-10" />,
      title: {
        sv: "Snabbare tillväxt",
        en: "Faster growth"
      },
      description: {
        sv: "Genom att optimera konverteringsstigen kan du öka din tillväxttakt och uppnå dina affärsmål snabbare.",
        en: "By optimizing the conversion path, you can increase your growth rate and achieve your business goals faster."
      }
    },
    {
      icon: <Microscope className="h-10 w-10" />,
      title: {
        sv: "Kontinuerlig förbättring",
        en: "Continuous improvement"
      },
      description: {
        sv: "Vår process bygger på kontinuerlig testning och optimering, vilket ger ständiga förbättringar över tid.",
        en: "Our process is built on continuous testing and optimization, providing ongoing improvements over time."
      }
    }
  ];

  const methodologies = [
    {
      title: {
        sv: "Användarundersökningar",
        en: "User Research"
      },
      description: {
        sv: "Vi genomför djupgående undersökningar för att förstå dina användares beteenden, motivationer och hinder för konvertering.",
        en: "We conduct in-depth research to understand your users' behaviors, motivations, and barriers to conversion."
      },
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
            </svg>
    },
    {
      title: {
        sv: "A/B-testning",
        en: "A/B Testing"
      },
      description: {
        sv: "Vi testar systematiskt olika versioner av dina webbsidor för att hitta variationerna som ger högst konverteringsgrader.",
        en: "We systematically test different versions of your web pages to find the variations that yield the highest conversion rates."
      },
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>
    },
    {
      title: {
        sv: "UX-optimering",
        en: "UX Optimization"
      },
      description: {
        sv: "Vi förbättrar användarupplevelsen genom att ta bort friktion och förbättra användbarheten i din konverteringsstig.",
        en: "We enhance the user experience by removing friction and improving usability in your conversion path."
      },
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
    },
    {
      title: {
        sv: "Copy & innehållsoptimering",
        en: "Copy & Content Optimization"
      },
      description: {
        sv: "Vi optimerar dina texter och innehåll för att effektivt kommunicera värdet, bygga förtroende och motivera till handling.",
        en: "We optimize your copy and content to effectively communicate value, build trust, and motivate action."
      },
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
            </svg>
    }
  ];

  return (
    <ServicePageLayout
      title={{
        sv: "Konverteringsoptimering för ökad försäljning och leadsgenerering",
        en: "Conversion optimization for increased sales and lead generation"
      }}
      subtitle={{
        sv: "Omvandla fler av dina besökare till kunder med datadriven optimering av hela konverteringsstigen.",
        en: "Turn more of your visitors into customers with data-driven optimization of the entire conversion path."
      }}
      heroImage="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2000&auto=format&fit=crop"
    >
      {/* Intro Section */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-black to-background">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <RevealSection>
              <h2 className="text-3xl md:text-4xl font-bold font-display mb-6">
                {language === 'sv' 
                  ? "Få mer värde från din befintliga trafik" 
                  : "Get more value from your existing traffic"}
              </h2>
              <p className="text-gray-300 mb-6">
                {language === 'sv'
                  ? "Du spenderar resurser på att driva trafik till din webbplats, men om besökarna inte konverterar går du miste om potentiella intäkter. Konverteringsoptimering handlar om att maximera affärsvärdet från dina besökare genom att eliminera hinder och förbättra användarupplevelsen."
                  : "You spend resources driving traffic to your website, but if visitors don't convert, you're missing out on potential revenue. Conversion optimization is about maximizing business value from your visitors by eliminating obstacles and improving the user experience."}
              </p>
              <p className="text-gray-300 mb-6">
                {language === 'sv'
                  ? "Vår metodologi bygger på djup användarförståelse och datadrivna beslut. Vi identifierar var och varför besökare lämnar din webbplats och implementerar test-beprövade förbättringar som ökar konverteringsgraden."
                  : "Our methodology is built on deep user understanding and data-driven decisions. We identify where and why visitors are leaving your website and implement test-proven improvements that increase conversion rates."}
              </p>
              <div className="mt-8 space-y-4">
                {[
                  language === 'sv' ? "Öka konverteringsgraden med bevisat effektiva metoder" : "Increase conversion rate with proven effective methods",
                  language === 'sv' ? "Få mer avkastning från din befintliga trafik" : "Get more return from your existing traffic",
                  language === 'sv' ? "Datadrivna beslut baserade på verkliga användare" : "Data-driven decisions based on real users"
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
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=900&auto=format&fit=crop" 
                  alt="Conversion Optimization" 
                  className="rounded-lg relative z-10 w-full h-auto shadow-2xl border border-white/10" 
                />
              </div>
            </RevealSection>
          </div>
        </div>
      </section>
      
      {/* Benefits Section */}
      <ServiceBenefits 
        benefits={benefits} 
        title={{
          sv: "Fördelar med konverteringsoptimering",
          en: "Benefits of conversion optimization"
        }}
        subtitle={{
          sv: "Öka försäljning och leads utan att öka din marknadsföringsbudget",
          en: "Increase sales and leads without increasing your marketing budget"
        }}
      />
      
      {/* Methodology Section */}
      <RevealSection className="py-16 md:py-24 bg-gradient-to-b from-background to-secondary/30">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-display mb-6">
              {language === 'sv' ? "Vår optimeringsmetodik" : "Our optimization methodology"}
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              {language === 'sv' 
                ? "Vi följer en beprövad process för att maximera dina konverteringar" 
                : "We follow a proven process to maximize your conversions"}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {methodologies.map((method, index) => (
              <RevealSection key={index} delay={index * 100}>
                <Card className="bg-secondary/50 border-white/5 h-full">
                  <CardContent className="p-8">
                    <div className="text-brand-teal mb-6">
                      {method.icon}
                    </div>
                    <h3 className="text-xl font-semibold font-display mb-4">{method.title[language]}</h3>
                    <p className="text-gray-300">{method.description[language]}</p>
                  </CardContent>
                </Card>
              </RevealSection>
            ))}
          </div>
        </div>
      </RevealSection>
      
      {/* Process Section */}
      <RevealSection className="py-16 md:py-24">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-display mb-6">
              {language === 'sv' ? "Vår process för konverteringsoptimering" : "Our conversion optimization process"}
            </h2>
          </div>
          
          <div className="max-w-5xl mx-auto">
            {[
              {
                number: "01",
                title: { sv: "Analys & undersökning", en: "Analysis & research" },
                description: { 
                  sv: "Vi genomför en grundlig granskning av din webbplats och analyserar data från olika källor för att identifiera var besökare lämnar din konverteringsstig.", 
                  en: "We conduct a thorough review of your website and analyze data from various sources to identify where visitors are leaving your conversion path." 
                }
              },
              {
                number: "02",
                title: { sv: "Hypoteser & prioritering", en: "Hypotheses & prioritization" },
                description: { 
                  sv: "Baserat på våra fynd utvecklar vi hypoteser om förbättringar och prioriterar dem efter potential för konverteringsökning och implementeringssvårighet.", 
                  en: "Based on our findings, we develop hypotheses about improvements and prioritize them according to potential for conversion increase and implementation difficulty." 
                }
              },
              {
                number: "03",
                title: { sv: "Testning & implementering", en: "Testing & implementation" },
                description: { 
                  sv: "Vi skapar A/B-tester för att validera våra hypoteser och implementerar vinnande variationer som bevisat ökar konverteringsgraden.", 
                  en: "We create A/B tests to validate our hypotheses and implement winning variations that have proven to increase conversion rates." 
                }
              },
              {
                number: "04",
                title: { sv: "Analys & iteration", en: "Analysis & iteration" },
                description: { 
                  sv: "Vi analyserar resultaten, drar lärdomar och förfinar vår förståelse av dina användare, vilket leder till nya insikter och ytterligare tester.", 
                  en: "We analyze the results, draw learnings, and refine our understanding of your users, leading to new insights and further testing." 
                }
              }
            ].map((step, index) => (
              <div key={index} className="relative flex mb-16 last:mb-0">
                <div className="flex-shrink-0 w-20 h-20 rounded-full bg-brand-teal/20 flex items-center justify-center mr-8">
                  <span className="text-2xl font-bold font-display text-brand-teal">{step.number}</span>
                </div>
                
                <div className="flex-1 pt-2">
                  <h3 className="text-xl font-semibold font-display mb-3">{step.title[language]}</h3>
                  <p className="text-gray-300">{step.description[language]}</p>
                </div>
                
                {index < 3 && (
                  <div className="absolute top-20 left-10 h-24 w-[1px] bg-gradient-to-b from-brand-teal/50 to-transparent"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </RevealSection>
      
      {/* What We Optimize */}
      <RevealSection className="py-16 md:py-24 bg-gradient-to-b from-secondary/30 to-background">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-display mb-6">
              {language === 'sv' ? "Vad vi optimerar" : "What we optimize"}
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              {language === 'sv' 
                ? "Vi förbättrar alla delar av kundens resa på din webbplats" 
                : "We improve all parts of the customer journey on your website"}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: { sv: "Landing pages", en: "Landing pages" },
                items: [
                  { sv: "Värdeerbjudanden", en: "Value propositions" },
                  { sv: "Call-to-action knappar", en: "Call-to-action buttons" },
                  { sv: "Rubrik & text", en: "Headlines & copy" },
                  { sv: "Visuell hierarki", en: "Visual hierarchy" },
                  { sv: "Social proof", en: "Social proof" }
                ]
              },
              {
                title: { sv: "Checkout & formulär", en: "Checkout & forms" },
                items: [
                  { sv: "Formulärdesign", en: "Form design" },
                  { sv: "Checkoutprocess", en: "Checkout process" },
                  { sv: "Minska övergivna köp", en: "Reduce cart abandonment" },
                  { sv: "Förtroendeindikatorer", en: "Trust indicators" },
                  { sv: "Felhantering", en: "Error handling" }
                ]
              },
              {
                title: { sv: "Användarupplevelse", en: "User experience" },
                items: [
                  { sv: "Navigationsdesign", en: "Navigation design" },
                  { sv: "Webbplatshastighet", en: "Website speed" },
                  { sv: "Mobiloptimering", en: "Mobile optimization" },
                  { sv: "Personalisering", en: "Personalization" },
                  { sv: "Användarflöden", en: "User flows" }
                ]
              }
            ].map((category, index) => (
              <Card key={index} className="bg-secondary/50 border-white/5 overflow-hidden">
                <CardContent className="p-0">
                  <div className="bg-background/30 py-4 px-6 border-b border-white/5">
                    <h3 className="text-xl font-semibold font-display">{category.title[language]}</h3>
                  </div>
                  <div className="p-6">
                    <ul className="space-y-3">
                      {category.items.map((item, idx) => (
                        <li key={idx} className="flex items-center">
                          <Check className="h-5 w-5 text-brand-teal mr-3 flex-shrink-0" />
                          <span className="text-gray-300">{item[language]}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </RevealSection>
      
      {/* Results Section */}
      <RevealSection className="py-16 md:py-24">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-display mb-6">
              {language === 'sv' ? "Verkliga resultat från våra kunder" : "Real results from our clients"}
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                company: "E-commerce Fashion",
                image: "https://images.unsplash.com/photo-1607082349566-187342175e2f?q=80&w=300&auto=format&fit=crop",
                stats: [
                  { 
                    label: { sv: "Ökad konverteringsgrad", en: "Increased conversion rate" },
                    value: "+68%"
                  },
                  { 
                    label: { sv: "Ökning i genomsnittligt ordervärde", en: "Increase in average order value" },
                    value: "+25%"
                  }
                ],
                quote: {
                  sv: "RemakeiT hjälpte oss att identifiera och lösa flera problem i vår checkout-process som vi inte ens visste existerade. Resultaten överträffade alla våra förväntningar.",
                  en: "RemakeiT helped us identify and solve several issues in our checkout process that we didn't even know existed. The results exceeded all our expectations."
                },
                author: {
                  sv: "Sofia Bergström, E-handelschef",
                  en: "Sofia Bergström, E-commerce Manager"
                }
              },
              {
                company: "SaaS Platform",
                image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?q=80&w=300&auto=format&fit=crop",
                stats: [
                  { 
                    label: { sv: "Ökning av trial-registreringar", en: "Increase in trial registrations" },
                    value: "+43%"
                  },
                  { 
                    label: { sv: "Förbättrad trial-till-betalande konvertering", en: "Improved trial-to-paid conversion" },
                    value: "+37%"
                  }
                ],
                quote: {
                  sv: "Konverteringsoptimeringen förändrade hur vi tänker kring vår webbplats. Nu ser vi den som vårt kraftfullaste försäljningsverktyg, inte bara en informationsplats.",
                  en: "The conversion optimization changed how we think about our website. We now view it as our most powerful sales tool, not just an information hub."
                },
                author: {
                  sv: "Anders Lundqvist, CMO",
                  en: "Anders Lundqvist, CMO"
                }
              },
              {
                company: "Lead Generation",
                image: "https://images.unsplash.com/photo-1551135049-8a33b5883817?q=80&w=300&auto=format&fit=crop",
                stats: [
                  { 
                    label: { sv: "Ökning i lead-generering", en: "Increase in lead generation" },
                    value: "+92%"
                  },
                  { 
                    label: { sv: "Minskning i kostnad per lead", en: "Reduction in cost per lead" },
                    value: "-35%"
                  }
                ],
                quote: {
                  sv: "Vi har testat flera byråer tidigare, men ingen har levererat så konkreta resultat som RemakeiT. De går på djupet med analysen och deras rekommendationer är alltid baserade på data.",
                  en: "We've tested several agencies before, but none have delivered such concrete results as RemakeiT. They go deep with the analysis and their recommendations are always data-based."
                },
                author: {
                  sv: "Erik Nilsson, Marknadschef",
                  en: "Erik Nilsson, Marketing Director"
                }
              }
            ].map((case_study, index) => (
              <RevealSection key={index} delay={index * 100}>
                <Card className="overflow-hidden bg-secondary/50 border-white/5 h-full">
                  <div className="h-48 overflow-hidden relative">
                    <img 
                      src={case_study.image} 
                      alt={case_study.company} 
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
                    <div className="absolute bottom-4 left-4 text-xl font-semibold text-white">
                      {case_study.company}
                    </div>
                  </div>
                  
                  <CardContent className="p-6">
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      {case_study.stats.map((stat, idx) => (
                        <div key={idx} className="text-center">
                          <p className="text-3xl font-bold text-brand-teal mb-1">{stat.value}</p>
                          <p className="text-xs text-gray-400">{stat.label[language]}</p>
                        </div>
                      ))}
                    </div>
                    
                    <blockquote className="text-gray-300 italic mb-4">
                      "{case_study.quote[language]}"
                    </blockquote>
                    
                    <p className="text-sm text-gray-400">— {case_study.author[language]}</p>
                  </CardContent>
                </Card>
              </RevealSection>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button asChild size="lg" className="bg-brand-teal text-black hover:bg-brand-teal/90">
              <Link to="/contact">
                {language === 'sv' ? "Jag vill också ha dessa resultat" : "I want these results too"}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </RevealSection>
    </ServicePageLayout>
  );
};

export default ConversionOptimization;
