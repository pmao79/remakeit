
import React from 'react';
import ServicePageLayout from '@/components/ServicePageLayout';
import ServiceBenefits from '@/components/ServiceBenefits';
import RevealSection from '@/components/ui/reveal-section';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Check, Brush, Code, Smartphone, Database, Zap, ArrowRight, Eye, Workflow } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Separator } from '@/components/ui/separator';

const WebDesign = () => {
  const { language } = useLanguage();
  
  const benefits = [
    {
      icon: <Eye className="h-10 w-10" />,
      title: {
        sv: "Attraktiv design som fångar uppmärksamhet",
        en: "Eye-catching design that captures attention"
      },
      description: {
        sv: "Vår design är inte bara vacker, den är strategiskt utformad för att väcka intresse och skapa en stark första impression hos dina besökare.",
        en: "Our design isn't just beautiful, it's strategically crafted to spark interest and create a strong first impression with your visitors."
      }
    },
    {
      icon: <Smartphone className="h-10 w-10" />,
      title: {
        sv: "Responsiv för alla enheter",
        en: "Responsive across all devices"
      },
      description: {
        sv: "Vi skapar webbplatser som ser perfekta ut och fungerar felfritt på alla enheter - från stora datorskärmar till små mobiltelefoner.",
        en: "We create websites that look perfect and function flawlessly on all devices - from large desktop screens to small mobile phones."
      }
    },
    {
      icon: <Code className="h-10 w-10" />,
      title: {
        sv: "Ren och optimerad kod",
        en: "Clean and optimized code"
      },
      description: {
        sv: "Vår kod är strukturerad, snabb och följer senaste standarder vilket säkerställer att din webbplats laddar snabbt och fungerar optimalt.",
        en: "Our code is structured, fast, and follows the latest standards, ensuring your website loads quickly and functions optimally."
      }
    },
    {
      icon: <Database className="h-10 w-10" />,
      title: {
        sv: "Skalbar lösning",
        en: "Scalable solution"
      },
      description: {
        sv: "Vi bygger din webbplats med tillväxt i åtanke så att den enkelt kan utökas och utvecklas i takt med att ditt företag växer.",
        en: "We build your website with growth in mind so it can easily be expanded and developed as your business grows."
      }
    },
    {
      icon: <Brush className="h-10 w-10" />,
      title: {
        sv: "Unikt varumärkesanpassad",
        en: "Uniquely brand-aligned"
      },
      description: {
        sv: "Din webbdesign skräddarsys efter ditt varumärke för att säkerställa att den speglar din unika identitet och vision.",
        en: "Your web design is tailored to your brand to ensure it reflects your unique identity and vision."
      }
    },
    {
      icon: <Zap className="h-10 w-10" />,
      title: {
        sv: "Snabb och effektiv process",
        en: "Fast and efficient process"
      },
      description: {
        sv: "Vår beprövade process gör att vi snabbt kan gå från idé till färdig webbplats utan att kompromissa med kvalitet.",
        en: "Our proven process allows us to quickly go from idea to finished website without compromising on quality."
      }
    }
  ];
  
  const process = [
    {
      number: "01",
      title: {
        sv: "Discovery & Strategi",
        en: "Discovery & Strategy"
      },
      description: {
        sv: "Vi börjar med att förstå dina mål, målgrupp och varumärke. Denna fas lägger grunden för hela projektet.",
        en: "We start by understanding your goals, target audience, and brand. This phase lays the foundation for the entire project."
      }
    },
    {
      number: "02",
      title: {
        sv: "Wireframes & Design",
        en: "Wireframes & Design"
      },
      description: {
        sv: "Vi skapar detaljerade skisser och designförslag som visar din webbplats layout, struktur och visuella stil.",
        en: "We create detailed wireframes and design proposals that show your website's layout, structure, and visual style."
      }
    },
    {
      number: "03",
      title: {
        sv: "Utveckling",
        en: "Development"
      },
      description: {
        sv: "Våra utvecklare omvandlar designen till en fullt fungerande webbplats med ren, snabb och framtidssäker kod.",
        en: "Our developers transform the design into a fully functioning website with clean, fast, and future-proof code."
      }
    },
    {
      number: "04",
      title: {
        sv: "Test & Lansering",
        en: "Testing & Launch"
      },
      description: {
        sv: "Vi genomför noggrann testning på olika enheter och webbläsare innan din nya webbplats lanseras för världen.",
        en: "We conduct thorough testing on different devices and browsers before your new website is launched to the world."
      }
    }
  ];

  return (
    <ServicePageLayout
      title={{
        sv: "Professionell webbdesign som konverterar besökare till kunder",
        en: "Professional web design that converts visitors into customers"
      }}
      subtitle={{
        sv: "Vi skapar moderna, användarvänliga och effektiva webbplatser anpassade för ditt företags unika behov.",
        en: "We create modern, user-friendly, and effective websites tailored to your company's unique needs."
      }}
      heroImage="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1920&auto=format&fit=crop"
    >
      {/* Intro Section */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-black to-background">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <RevealSection>
              <h2 className="text-3xl md:text-4xl font-bold font-display mb-6">
                {language === 'sv' 
                  ? "Skapa ett starkt digitalt första intryck" 
                  : "Create a powerful digital first impression"}
              </h2>
              <p className="text-gray-300 mb-6">
                {language === 'sv'
                  ? "I dagens digitala värld är din webbplats ofta det första mötet mellan ditt företag och potentiella kunder. Vi på RemakeiT skapar webbdesign som inte bara ser fantastisk ut, utan som också strategiskt utformats för att fånga besökarnas uppmärksamhet och omvandla dem till lojala kunder."
                  : "In today's digital world, your website is often the first encounter between your business and potential customers. At RemakeiT, we create web designs that not only look amazing but are also strategically designed to capture visitors' attention and convert them into loyal customers."}
              </p>
              <p className="text-gray-300 mb-6">
                {language === 'sv'
                  ? "Vårt team kombinerar kreativ design med teknisk expertis för att bygga webbplatser som är både visuellt tilltalande och funktionellt överlägsna. Vi fokuserar på användarupplevelse, konvertering och att spegla ditt varumärkes unika identitet."
                  : "Our team combines creative design with technical expertise to build websites that are both visually appealing and functionally superior. We focus on user experience, conversion, and reflecting your brand's unique identity."}
              </p>
              <div className="mt-8 space-y-4">
                {[
                  language === 'sv' ? "Användarvänlig design som driver resultat" : "User-friendly design that drives results",
                  language === 'sv' ? "Tekniskt perfekt implementation" : "Technically perfect implementation",
                  language === 'sv' ? "SEO-optimerad från grunden" : "SEO-optimized from the ground up"
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
                  src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?q=80&w=900&auto=format&fit=crop" 
                  alt="Web Design Process" 
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
          sv: "Fördelar med vår webbdesign",
          en: "Benefits of our web design"
        }}
        subtitle={{
          sv: "Vår webbdesign ger dig flera konkreta fördelar som hjälper din verksamhet att växa och nå dina mål",
          en: "Our web design provides you with several concrete benefits that help your business grow and reach your goals"
        }}
      />
      
      {/* Process Section */}
      <RevealSection className="bg-gradient-to-b from-background to-secondary/30 py-16 md:py-24">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-display mb-6">
              {language === 'sv' ? "Vår webbdesignprocess" : "Our web design process"}
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              {language === 'sv' 
                ? "En transparent och samarbetsinriktad process från start till mål" 
                : "A transparent and collaborative process from start to finish"}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <RevealSection key={index} delay={index * 150} className="relative">
                <Card className="bg-secondary/50 border-white/5 h-full overflow-hidden">
                  <CardContent className="p-8 relative z-10">
                    <div className="absolute -right-6 -top-6 text-7xl font-bold text-white/5">
                      {step.number}
                    </div>
                    <h3 className="text-xl font-semibold font-display mb-4">
                      {step.title[language]}
                    </h3>
                    <p className="text-gray-400">
                      {step.description[language]}
                    </p>
                  </CardContent>
                </Card>
                {index < process.length - 1 && (
                  <div className="hidden lg:flex absolute top-1/2 -right-4 transform -translate-y-1/2 z-20">
                    <ArrowRight className="h-6 w-6 text-brand-teal" />
                  </div>
                )}
              </RevealSection>
            ))}
          </div>
        </div>
      </RevealSection>
      
      {/* Case Studies Section */}
      <RevealSection className="py-16 md:py-24">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-display mb-6">
              {language === 'sv' ? "Våra framgångsrika webbdesignprojekt" : "Our successful web design projects"}
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="overflow-hidden bg-secondary/50 border-white/5 hover:border-brand-teal/30 transition-all duration-300">
              <div className="h-60 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?q=80&w=1000&auto=format&fit=crop" 
                  alt="Tech Company Website" 
                  className="w-full h-full object-cover object-center transition-transform duration-500 hover:scale-105"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold font-display mb-2">
                  {language === 'sv' ? "Techify - Teknologiföretag" : "Techify - Technology Company"}
                </h3>
                <p className="text-gray-400 mb-4">
                  {language === 'sv' 
                    ? "En modern webbplats för ett växande teknologiföretag som resulterade i 45% ökning av leads." 
                    : "A modern website for a growing technology company that resulted in a 45% increase in leads."}
                </p>
                <Button asChild variant="ghost" className="text-brand-teal hover:text-brand-teal/90 p-0 h-auto">
                  <Link to="/portfolio">
                    {language === 'sv' ? "Se hela projektet" : "View full project"}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
            
            <Card className="overflow-hidden bg-secondary/50 border-white/5 hover:border-brand-teal/30 transition-all duration-300">
              <div className="h-60 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1531297484001-80022131f5a1?q=80&w=1000&auto=format&fit=crop" 
                  alt="E-commerce Website" 
                  className="w-full h-full object-cover object-center transition-transform duration-500 hover:scale-105"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold font-display mb-2">
                  {language === 'sv' ? "StyleShop - E-handel" : "StyleShop - E-commerce"}
                </h3>
                <p className="text-gray-400 mb-4">
                  {language === 'sv' 
                    ? "En konverteringsoptimerad e-handelsplattform som ökade försäljningen med 67% första kvartalet." 
                    : "A conversion-optimized e-commerce platform that increased sales by 67% in the first quarter."}
                </p>
                <Button asChild variant="ghost" className="text-brand-teal hover:text-brand-teal/90 p-0 h-auto">
                  <Link to="/portfolio">
                    {language === 'sv' ? "Se hela projektet" : "View full project"}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </RevealSection>
      
      {/* Testimonial Section */}
      <RevealSection className="py-16 md:py-24 bg-gradient-to-b from-secondary/30 to-background">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-brand-teal mb-4 flex justify-center">
              <svg className="h-12 w-12" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5 3.871 3.871 0 01-2.748-1.179zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5 3.871 3.871 0 01-2.748-1.179z"/>
              </svg>
            </div>
            <blockquote className="text-center">
              <p className="text-2xl font-medium text-white mb-8">
                {language === 'sv' 
                  ? "RemakeiT har inte bara skapat en vacker webbplats för vårt företag, utan ett kraftfullt verktyg som genererar kvalificerade leads dagligen. Deras team förstod exakt vad vi behövde och levererade något som överträffade våra förväntningar." 
                  : "RemakeiT has not only created a beautiful website for our company, but a powerful tool that generates qualified leads daily. Their team understood exactly what we needed and delivered something that exceeded our expectations."}
              </p>
              <footer>
                <div className="flex items-center justify-center">
                  <div className="h-12 w-12 rounded-full overflow-hidden bg-secondary mr-4">
                    <img 
                      src="https://i.pravatar.cc/300?img=12" 
                      alt="Testimonial Author" 
                      className="h-full w-full object-cover" 
                    />
                  </div>
                  <div className="text-left">
                    <p className="font-semibold">
                      {language === 'sv' ? "Anna Lindberg" : "Anna Lindberg"}
                    </p>
                    <p className="text-gray-400 text-sm">
                      {language === 'sv' ? "VD, Nordic Solutions AB" : "CEO, Nordic Solutions AB"}
                    </p>
                  </div>
                </div>
              </footer>
            </blockquote>
          </div>
        </div>
      </RevealSection>
      
      {/* FAQ Section */}
      <RevealSection className="py-16 md:py-24">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-display mb-6">
              {language === 'sv' ? "Vanliga frågor om webbdesign" : "Common questions about web design"}
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8 max-w-5xl mx-auto">
            {[
              {
                q: {
                  sv: "Hur lång tid tar det att skapa en ny webbplats?",
                  en: "How long does it take to create a new website?"
                },
                a: {
                  sv: "Tidsramen varierar beroende på projektets omfattning och komplexitet. En enklare webbplats kan ta 4-6 veckor, medan mer omfattande projekt kan ta 2-3 månader. Vi ger alltid en detaljerad tidsplan i början av varje projekt.",
                  en: "The timeframe varies depending on the scope and complexity of the project. A simpler website might take 4-6 weeks, while more comprehensive projects can take 2-3 months. We always provide a detailed timeline at the beginning of each project."
                }
              },
              {
                q: {
                  sv: "Kommer jag kunna uppdatera webbplatsen själv?",
                  en: "Will I be able to update the website myself?"
                },
                a: {
                  sv: "Absolut! Vi bygger alla webbplatser med användarvänliga CMS (innehållshanteringssystem) som gör det enkelt för dig att uppdatera innehåll. Vi erbjuder också utbildning så att du känner dig bekväm med att hantera din webbplats.",
                  en: "Absolutely! We build all websites with user-friendly CMS (content management systems) that make it easy for you to update content. We also offer training so you feel comfortable managing your website."
                }
              },
              {
                q: {
                  sv: "Är era webbplatser mobilanpassade?",
                  en: "Are your websites mobile-friendly?"
                },
                a: {
                  sv: "Ja, alla våra webbplatser är fullt responsiva och optimerade för alla enheter – från stora datorskärmar till mobiler och surfplattor. Detta är en standard vi aldrig kompromissar med.",
                  en: "Yes, all our websites are fully responsive and optimized for all devices – from large desktop screens to mobiles and tablets. This is a standard we never compromise on."
                }
              },
              {
                q: {
                  sv: "Inkluderar ni SEO i webbdesignprocessen?",
                  en: "Do you include SEO in the web design process?"
                },
                a: {
                  sv: "Ja, grundläggande SEO-optimering ingår i alla våra webbdesignprojekt. Vi bygger webbplatser med en solid SEO-grund, rätt kodstruktur, och optimerade sidor. För mer avancerad SEO rekommenderar vi våra dedikerade SEO-tjänster.",
                  en: "Yes, basic SEO optimization is included in all our web design projects. We build websites with a solid SEO foundation, proper code structure, and optimized pages. For more advanced SEO, we recommend our dedicated SEO services."
                }
              }
            ].map((faq, index) => (
              <div key={index}>
                <h3 className="text-xl font-semibold font-display mb-3 text-white">{faq.q[language]}</h3>
                <p className="text-gray-400">{faq.a[language]}</p>
              </div>
            ))}
          </div>
        </div>
      </RevealSection>
    </ServicePageLayout>
  );
};

export default WebDesign;
