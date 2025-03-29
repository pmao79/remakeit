
import React from 'react';
import ServicePageLayout from '@/components/ServicePageLayout';
import ServiceBenefits from '@/components/ServiceBenefits';
import RevealSection from '@/components/ui/reveal-section';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Check, Search, TrendingUp, BarChart, Globe, Users, ArrowRight, Layers } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const SeoOptimization = () => {
  const { language } = useLanguage();
  
  const benefits = [
    {
      icon: <TrendingUp className="h-10 w-10" />,
      title: {
        sv: "Ökad organisk trafik",
        en: "Increased organic traffic"
      },
      description: {
        sv: "Få fler besökare från Google och andra sökmotorer utan att betala för annonser, genom att ranka högre för relevanta sökord.",
        en: "Get more visitors from Google and other search engines without paying for ads, by ranking higher for relevant keywords."
      }
    },
    {
      icon: <Users className="h-10 w-10" />,
      title: {
        sv: "Riktade besökare med köpintention",
        en: "Targeted visitors with buying intent"
      },
      description: {
        sv: "SEO drar till sig besökare som aktivt söker efter dina produkter eller tjänster, vilket leder till högre konverteringsgrad.",
        en: "SEO attracts visitors who are actively looking for your products or services, leading to higher conversion rates."
      }
    },
    {
      icon: <Globe className="h-10 w-10" />,
      title: {
        sv: "Bättre användarupplevelse",
        en: "Better user experience"
      },
      description: {
        sv: "Våra SEO-optimeringar förbättrar inte bara rankningar utan även webbplatsens användbarhet, vilket gör besökarna nöjdare.",
        en: "Our SEO optimizations improve not just rankings but also website usability, making visitors more satisfied."
      }
    },
    {
      icon: <Layers className="h-10 w-10" />,
      title: {
        sv: "Långsiktiga resultat",
        en: "Long-term results"
      },
      description: {
        sv: "Till skillnad från betald marknadsföring ger SEO långvariga resultat som fortsätter ge avkastning långt efter att arbetet är genomfört.",
        en: "Unlike paid marketing, SEO provides long-lasting results that continue to deliver returns long after the work is completed."
      }
    },
    {
      icon: <BarChart className="h-10 w-10" />,
      title: {
        sv: "Mätbara förbättringar",
        en: "Measurable improvements"
      },
      description: {
        sv: "Vi tillhandahåller detaljerade rapporter som visar exakt hur vårt SEO-arbete påverkar din webbplats rankningar, trafik och konverteringar.",
        en: "We provide detailed reports showing exactly how our SEO work affects your website rankings, traffic, and conversions."
      }
    },
    {
      icon: <Search className="h-10 w-10" />,
      title: {
        sv: "Konkurrenskraftiga fördelar",
        en: "Competitive advantages"
      },
      description: {
        sv: "Få ett försprång gentemot konkurrenter genom bättre synlighet i sökresultaten för nyckelord som driver din bransch.",
        en: "Gain an edge over competitors through better visibility in search results for keywords that drive your industry."
      }
    }
  ];
  
  const seoFactors = [
    {
      title: {
        sv: "Teknisk SEO",
        en: "Technical SEO"
      },
      items: [
        { sv: "Webbplats-hastighet", en: "Website speed" },
        { sv: "Mobil-optimering", en: "Mobile optimization" },
        { sv: "Sitemap & robotar", en: "Sitemap & robots" },
        { sv: "Strukturerad data", en: "Structured data" },
        { sv: "Säkerhets-certifikat (SSL)", en: "Security certificate (SSL)" },
        { sv: "Optimerad URL-struktur", en: "Optimized URL structure" }
      ]
    },
    {
      title: {
        sv: "On-Page SEO",
        en: "On-Page SEO"
      },
      items: [
        { sv: "Innehållsoptimering", en: "Content optimization" },
        { sv: "Keyword-research", en: "Keyword research" },
        { sv: "Meta-taggar", en: "Meta tags" },
        { sv: "Interna länkar", en: "Internal linking" },
        { sv: "Bildoptimering", en: "Image optimization" },
        { sv: "Header-struktur", en: "Header structure" }
      ]
    },
    {
      title: {
        sv: "Off-Page SEO",
        en: "Off-Page SEO"
      },
      items: [
        { sv: "Länkbyggande", en: "Link building" },
        { sv: "Social signal", en: "Social signals" },
        { sv: "Online recensioner", en: "Online reviews" },
        { sv: "Gästbloggning", en: "Guest blogging" },
        { sv: "Lokala listor", en: "Local listings" },
        { sv: "Branschauktoritet", en: "Industry authority" }
      ]
    }
  ];

  return (
    <ServicePageLayout
      title={{
        sv: "SEO-optimering som driver organisk tillväxt",
        en: "SEO optimization that drives organic growth"
      }}
      subtitle={{
        sv: "Öka din synlighet i sökmotorer och få kvalificerad trafik som konverterar till kunder.",
        en: "Increase your visibility in search engines and get qualified traffic that converts into customers."
      }}
      heroImage="https://images.unsplash.com/photo-1548094891-c4ba474efd16?q=80&w=2000&auto=format&fit=crop"
    >
      {/* Intro Section */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-black to-background">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <RevealSection>
              <h2 className="text-3xl md:text-4xl font-bold font-display mb-6">
                {language === 'sv' 
                  ? "Varför är SEO avgörande för din framgång?" 
                  : "Why is SEO crucial for your success?"}
              </h2>
              <p className="text-gray-300 mb-6">
                {language === 'sv'
                  ? "93% av alla online-upplevelser börjar med en sökmotor, och 75% av användarna klickar aldrig förbi första sidan av sökresultaten. Om din webbplats inte syns på första sidan för relevanta sökord går du miste om värdefull trafik och potentiella kunder."
                  : "93% of all online experiences begin with a search engine, and 75% of users never scroll past the first page of search results. If your website isn't visible on the first page for relevant keywords, you're missing out on valuable traffic and potential customers."}
              </p>
              <p className="text-gray-300 mb-6">
                {language === 'sv'
                  ? "Vår omfattande SEO-tjänst hjälper dig att klättra i rankningar, öka din organiska trafik och få ett övertag mot dina konkurrenter. Vi använder beprövade strategier för att förbättra din webbplats synlighet i sökmotorer och generera kvalitativ trafik som konverterar."
                  : "Our comprehensive SEO service helps you climb rankings, increase your organic traffic, and gain an edge over your competitors. We use proven strategies to improve your website's visibility in search engines and generate quality traffic that converts."}
              </p>
              <div className="mt-8 space-y-4">
                {[
                  language === 'sv' ? "Högre ROI än traditionell marknadsföring" : "Higher ROI than traditional marketing",
                  language === 'sv' ? "Stärker din trovärdighet och auktoritet" : "Strengthens your credibility and authority",
                  language === 'sv' ? "Konstant trafik utan löpande annonskostnader" : "Consistent traffic without ongoing ad costs"
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
                  src="https://images.unsplash.com/photo-1562577308-c8b2614b9b9a?q=80&w=900&auto=format&fit=crop" 
                  alt="SEO Analytics" 
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
          sv: "Fördelar med vår SEO-optimering",
          en: "Benefits of our SEO optimization"
        }}
        subtitle={{
          sv: "Skaffa långsiktig tillväxt och högre avkastning på din digitala närvaro",
          en: "Secure long-term growth and higher returns on your digital presence"
        }}
      />
      
      {/* SEO Factors Section */}
      <RevealSection className="py-16 md:py-24 bg-gradient-to-b from-background to-secondary/30">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-display mb-6">
              {language === 'sv' ? "Vårt heltäckande SEO-tillvägagångssätt" : "Our comprehensive SEO approach"}
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              {language === 'sv' 
                ? "Vi optimerar alla aspekter som påverkar dina rankningar" 
                : "We optimize all aspects that affect your rankings"}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {seoFactors.map((factor, index) => (
              <RevealSection key={index} delay={index * 150}>
                <Card className="bg-secondary/50 border-white/5 h-full">
                  <CardContent className="p-8">
                    <div className="flex justify-center items-center h-16 w-16 bg-background/50 rounded-full mx-auto mb-6">
                      {index === 0 && <Search className="h-8 w-8 text-brand-teal" />}
                      {index === 1 && <Layers className="h-8 w-8 text-brand-teal" />}
                      {index === 2 && <Globe className="h-8 w-8 text-brand-teal" />}
                    </div>
                    <h3 className="text-xl font-semibold font-display mb-6 text-center">{factor.title[language]}</h3>
                    <ul className="space-y-3">
                      {factor.items.map((item, idx) => (
                        <li key={idx} className="flex items-center">
                          <Check className="h-4 w-4 text-brand-teal mr-3 flex-shrink-0" />
                          <span className="text-gray-300">{item[language]}</span>
                        </li>
                      ))}
                    </ul>
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
              {language === 'sv' ? "Vår SEO-process" : "Our SEO process"}
            </h2>
          </div>
          
          <div className="space-y-12 max-w-4xl mx-auto">
            {[
              {
                number: "01",
                title: { sv: "SEO-granskning & analys", en: "SEO audit & analysis" },
                description: { 
                  sv: "Vi genomför en grundlig granskning av din webbplats för att identifiera nuvarande styrkor, svagheter och möjligheter för SEO-förbättringar.", 
                  en: "We conduct a thorough audit of your website to identify current strengths, weaknesses, and opportunities for SEO improvements." 
                }
              },
              {
                number: "02",
                title: { sv: "Nyckelordsanalys & strategi", en: "Keyword analysis & strategy" },
                description: { 
                  sv: "Vi identifierar de mest värdefulla nyckelorden för din bransch med hög sökvolym och kommersiell avsikt, samt analyserar konkurrenterna.", 
                  en: "We identify the most valuable keywords for your industry with high search volume and commercial intent, and analyze competitors." 
                }
              },
              {
                number: "03",
                title: { sv: "On-page & teknisk optimering", en: "On-page & technical optimization" },
                description: { 
                  sv: "Vi optimerar dina webbsidor med målnyckelord, förbättrar metauppgifter, och åtgärdar tekniska problem som kan hindra dina rankningar.", 
                  en: "We optimize your web pages with target keywords, improve meta information, and fix technical issues that may hinder your rankings." 
                }
              },
              {
                number: "04",
                title: { sv: "Innehållsstrategi & utveckling", en: "Content strategy & development" },
                description: { 
                  sv: "Vi utvecklar en innehållsstrategi och skapar högkvalitativt, relevant innehåll som tilltalar både sökmotorer och besökare.", 
                  en: "We develop a content strategy and create high-quality, relevant content that appeals to both search engines and visitors." 
                }
              },
              {
                number: "05",
                title: { sv: "Länkbyggande & off-page SEO", en: "Link building & off-page SEO" },
                description: { 
                  sv: "Vi förbättrar din webbplats auktoritet genom att skaffa högkvalitativa backlinks från pålitliga källor i din bransch.", 
                  en: "We improve your website's authority by acquiring high-quality backlinks from reputable sources in your industry." 
                }
              },
              {
                number: "06",
                title: { sv: "Uppföljning & rapportering", en: "Monitoring & reporting" },
                description: { 
                  sv: "Vi spårar dina rankningar, trafik och konverteringar kontinuerligt, och ger detaljerade rapporter om framsteg och ROI.", 
                  en: "We continuously track your rankings, traffic, and conversions, providing detailed reports on progress and ROI." 
                }
              }
            ].map((step, index) => (
              <RevealSection key={index} delay={index * 100}>
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="flex-shrink-0 flex items-center justify-center h-20 w-20 rounded-full bg-brand-teal/10 text-brand-teal text-2xl font-bold font-display">
                    {step.number}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold font-display mb-2">{step.title[language]}</h3>
                    <p className="text-gray-400">{step.description[language]}</p>
                  </div>
                </div>
              </RevealSection>
            ))}
          </div>
        </div>
      </RevealSection>
      
      {/* Results Section */}
      <RevealSection className="py-16 md:py-24 bg-gradient-to-b from-secondary/30 to-background">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-display mb-6">
              {language === 'sv' ? "Resultat du kan förvänta dig" : "Results you can expect"}
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              {language === 'sv' 
                ? "Vi levererar mätbara SEO-resultat för företag i alla branscher" 
                : "We deliver measurable SEO results for businesses in all industries"}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <RevealSection className="text-center">
              <div className="p-6">
                <div className="text-4xl font-bold text-brand-teal mb-2">+187%</div>
                <p className="text-gray-300">{language === 'sv' ? "Genomsnittlig ökning i organisk trafik" : "Average increase in organic traffic"}</p>
              </div>
            </RevealSection>
            <RevealSection className="text-center" delay={100}>
              <div className="p-6">
                <div className="text-4xl font-bold text-brand-teal mb-2">85%</div>
                <p className="text-gray-300">{language === 'sv' ? "Av våra kunder rankar på första sidan av Google" : "Of our clients rank on the first page of Google"}</p>
              </div>
            </RevealSection>
            <RevealSection className="text-center" delay={200}>
              <div className="p-6">
                <div className="text-4xl font-bold text-brand-teal mb-2">42%</div>
                <p className="text-gray-300">{language === 'sv' ? "Genomsnittlig ökning i konverteringsgrad" : "Average increase in conversion rate"}</p>
              </div>
            </RevealSection>
          </div>
          
          {/* Case Study */}
          <div className="bg-secondary/50 rounded-2xl overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="p-8 md:p-12 flex flex-col justify-center">
                <h3 className="text-2xl font-bold font-display mb-4">
                  {language === 'sv' ? "Case: Hälsobranschen" : "Case: Health Industry"}
                </h3>
                <p className="text-gray-300 mb-6">
                  {language === 'sv'
                    ? "En ledande vitamintillverkare kom till oss med sjunkande organisk trafik och konkurrens från lågprismärken. Efter sex månader av strategiskt SEO-arbete gav resultaten en dramatisk förbättring."
                    : "A leading vitamin manufacturer came to us with declining organic traffic and competition from low-cost brands. After six months of strategic SEO work, the results showed dramatic improvement."}
                </p>
                <div className="grid grid-cols-2 gap-6 mb-6">
                  <div>
                    <p className="text-sm text-gray-400 mb-1">
                      {language === 'sv' ? "Nyckelordsrankningar" : "Keyword rankings"}
                    </p>
                    <div className="flex items-baseline">
                      <p className="text-3xl font-bold text-brand-teal">237</p>
                      <p className="text-brand-teal ml-1">+156%</p>
                    </div>
                  </div>
                  <div>
                    <p className="text-sm text-gray-400 mb-1">
                      {language === 'sv' ? "Organisk trafik/mån" : "Organic traffic/month"}
                    </p>
                    <div className="flex items-baseline">
                      <p className="text-3xl font-bold text-brand-teal">25k</p>
                      <p className="text-brand-teal ml-1">+312%</p>
                    </div>
                  </div>
                  <div>
                    <p className="text-sm text-gray-400 mb-1">
                      {language === 'sv' ? "Online-försäljning" : "Online sales"}
                    </p>
                    <div className="flex items-baseline">
                      <p className="text-3xl font-bold text-brand-teal">+89%</p>
                    </div>
                  </div>
                  <div>
                    <p className="text-sm text-gray-400 mb-1">
                      {language === 'sv' ? "ROI" : "ROI"}
                    </p>
                    <div className="flex items-baseline">
                      <p className="text-3xl font-bold text-brand-teal">412%</p>
                    </div>
                  </div>
                </div>
                <Button asChild className="mt-4 bg-brand-teal text-black hover:bg-brand-teal/90 self-start">
                  <Link to="/contact">
                    {language === 'sv' ? "Få liknande resultat" : "Get similar results"}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
              <div className="relative h-64 md:h-auto">
                <img 
                  src="https://images.unsplash.com/photo-1533750349088-cd871a92f312?q=80&w=1000&auto=format&fit=crop" 
                  alt="SEO Case Study" 
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </RevealSection>
      
      {/* FAQ Section */}
      <RevealSection className="py-16 md:py-24">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-display mb-6">
              {language === 'sv' ? "Vanliga frågor om SEO" : "Common questions about SEO"}
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8 max-w-5xl mx-auto">
            {[
              {
                q: {
                  sv: "Hur lång tid tar det att se resultat från SEO?",
                  en: "How long does it take to see results from SEO?"
                },
                a: {
                  sv: "SEO är en långsiktig strategi. Vanligtvis börjar man se initiala förbättringar inom 3-6 månader, men mer betydande resultat kommer oftast efter 6-12 månader av konsekvent arbete. Faktorer som webbplatsens nuvarande tillstånd, konkurrensen i din bransch och målnyckelorden påverkar tidsramen.",
                  en: "SEO is a long-term strategy. Typically, you'll start seeing initial improvements within 3-6 months, but more significant results usually come after 6-12 months of consistent work. Factors like your website's current state, competition in your industry, and target keywords affect the timeline."
                }
              },
              {
                q: {
                  sv: "Garanterar ni rankningar på första sidan?",
                  en: "Do you guarantee first-page rankings?"
                },
                a: {
                  sv: "Vi garanterar inte specifika rankningar eftersom sökmotorresultat beror på många faktorer utanför vår kontroll, inklusive Googles algoritmer som ständigt förändras. Det vi garanterar är implementering av SEO-best practices och strategier som har bevisat sig framgångsrika för våra kunder tidigare.",
                  en: "We don't guarantee specific rankings because search engine results depend on many factors outside our control, including Google's constantly changing algorithms. What we do guarantee is the implementation of SEO best practices and strategies that have proven successful for our clients in the past."
                }
              },
              {
                q: {
                  sv: "Är SEO en engångsinsats eller en pågående process?",
                  en: "Is SEO a one-time effort or an ongoing process?"
                },
                a: {
                  sv: "SEO är definitivt en pågående process. Sökmotorers algoritmer uppdateras regelbundet, konkurrensen förändras, och nya innehållsmöjligheter uppstår kontinuerligt. För att behålla och förbättra dina rankningar över tid rekommenderar vi en kontinuerlig SEO-strategi.",
                  en: "SEO is definitely an ongoing process. Search engine algorithms are regularly updated, competition changes, and new content opportunities emerge continuously. To maintain and improve your rankings over time, we recommend a continuous SEO strategy."
                }
              },
              {
                q: {
                  sv: "Hur mäter ni SEO-framgång?",
                  en: "How do you measure SEO success?"
                },
                a: {
                  sv: "Vi mäter framgång genom flera nyckeltal: förbättrade rankningar för målnyckelord, ökad organisk trafik, högre engagemang (som längre besökstid och lägre avvisningsfrekvens), förbättrade konverteringsgrader, och till sist, ROI i form av leads eller försäljning från organisk trafik.",
                  en: "We measure success through several key metrics: improved rankings for target keywords, increased organic traffic, higher engagement (such as longer visit durations and lower bounce rates), improved conversion rates, and ultimately, ROI in the form of leads or sales from organic traffic."
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

export default SeoOptimization;
