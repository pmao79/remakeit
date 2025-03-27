
import React, { useEffect } from 'react';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import RevealSection from '@/components/ui/reveal-section';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Check, ArrowRight } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const About: React.FC = () => {
  const { language } = useLanguage();
  
  // Scroll to top when the page loads
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  // Content for both languages
  const content = {
    sv: {
      title: 'Om ',
      titleHighlight: 'RemakeiT',
      subtitle: 'Vi har ett uppdrag att förvandla föråldrade webbplatser till moderna, högpresterande digitala tillgångar som hjälper företag att växa.',
      
      story: {
        title: 'Vår historia',
        p1: 'RemakeiT grundades med en enkel observation: alltför många företag hålls tillbaka av föråldrade webbplatser som inte presterar i dagens digitala landskap.',
        p2: 'Vår grundare, som har över 15 års erfarenhet inom webbutveckling och digital marknadsföring, upptäckte en lucka på marknaden. Många företagsägare tvekade att investera i en ny webbplats eftersom de inte kunde visualisera slutresultatet eller hade blivit besvikna av tidigare webbutvecklare.',
        p3: 'Det är därför vi har skapat vår unika "se-innan-du-köper"-metod, där vi skapar 70% kompletta mockups utan kostnad, så att företag kan se exakt vad de får innan de gör ett åtagande.'
      },
      
      whyChoose: {
        title: 'Varför välja RemakeiT?',
        points: [
          'Riskfri strategi med vår kostnadsfria mockup-modell',
          'Expertis inom både design och SEO/konverteringsoptimering',
          'Transparent, fast prissättning utan dolda avgifter',
          'Snabb leveranstid - från koncept till lansering på veckor, inte månader',
          'Kontinuerligt stöd och vägledning även efter att din webbplats har lanserats'
        ]
      },
      
      process: {
        title: 'Vår unika process',
        intro: 'Det som gör RemakeiT annorlunda är vårt engagemang att visa dig vad du får innan du betalar. Så här fungerar vår 70% färdiga mockup-modell:',
        steps: [
          {
            title: 'Upptäckt',
            description: 'Vi lär oss om ditt företag, bransch och mål för att förstå vad du behöver.'
          },
          {
            title: 'Gratis 70% mockup',
            description: 'Vi skapar en fungerande prototyp av din nya webbplats med verkliga designelement.'
          },
          {
            title: 'Beslut utan press',
            description: 'Du ser vad du får innan du betalar, så att du kan fatta ett tryggt beslut.'
          }
        ]
      },
      
      faq: {
        title: 'Vanliga frågor',
        questions: [
          {
            q: 'Vad betyder "70% färdig mockup" exakt?',
            a: 'Det betyder att vi skapar en funktionell design med riktiga sidor, layout och designelement. Det är inte bara en skiss eller wireframe—det är en fungerande prototyp som visar hur din webbplats kommer att se ut och fungera, men saknar ditt slutgiltiga innehåll och eventuell anpassad funktionalitet.'
          },
          {
            q: 'Hur lång tid tar det att få den kostnadsfria mockupen?',
            a: 'Vanligtvis 3-5 arbetsdagar efter vårt inledande samråd, beroende på komplexiteten i ditt projekt.'
          },
          {
            q: 'Vad händer om jag inte gillar mockupen?',
            a: 'Inga problem! Det finns ingen förpliktelse. Vi kan antingen göra revideringar baserat på din feedback eller så kan du avsluta utan kostnad eller åtagande.'
          },
          {
            q: 'Vad ingår i priset på 14 999 kr?',
            a: 'En komplett 5-7 sidors webbplats, fullt responsiv, SEO-optimerad, med kontaktformulär, Google Analytics-integration, grundläggande SEO-installation och 3 månaders teknisk support.'
          },
          {
            q: 'Finns det några löpande kostnader?',
            a: 'De enda löpande kostnaderna skulle vara domänregistrering (vanligtvis 150 kr/år) och webbhotell (vanligtvis 100-200 kr/månad), vilket vi kan hjälpa till att konfigurera men som inte ingår i vårt paket.'
          },
          {
            q: 'Hur lång tid tar det att slutföra webbplatsen efter godkännande?',
            a: 'Vanligtvis 2-3 veckor, beroende på hur snabbt du kan tillhandahålla innehåll vi behöver och din feedback på revideringar.'
          }
        ]
      },
      
      cta: {
        title: 'Redo att förvandla din online-närvaro?',
        button: 'Få din gratis webbplats-mockup'
      }
    },
    en: {
      title: 'About ',
      titleHighlight: 'RemakeiT',
      subtitle: 'We\'re on a mission to transform outdated websites into modern, high-performing digital assets that help businesses grow.',
      
      story: {
        title: 'Our Story',
        p1: 'RemakeiT was founded with a simple observation: too many businesses are held back by outdated websites that don\'t perform in today\'s digital landscape.',
        p2: 'Our founder, who has over 15 years of experience in web development and digital marketing, noticed a gap in the market. Many business owners were hesitant to invest in a new website because they couldn\'t visualize the end result or were burned by previous web developers.',
        p3: 'That\'s why we pioneered our unique "see-before-you-buy" approach, creating 70% complete mockups at no cost, so businesses can see exactly what they\'re getting before making a commitment.'
      },
      
      whyChoose: {
        title: 'Why Choose RemakeiT?',
        points: [
          'No-risk approach with our free mockup model',
          'Expertise in both design and SEO/conversion optimization',
          'Transparent, fixed pricing with no hidden fees',
          'Fast turnaround times - from concept to launch in weeks, not months',
          'Ongoing support and guidance even after your website launches'
        ]
      },
      
      process: {
        title: 'Our Unique Process',
        intro: 'What makes RemakeiT different is our commitment to showing you what you\'re getting before you pay. Here\'s how our 70% ready mockup model works:',
        steps: [
          {
            title: 'Discovery',
            description: 'We learn about your business, industry, and goals to understand what you need.'
          },
          {
            title: 'Free 70% Mockup',
            description: 'We create a working prototype of your new website with real design elements.'
          },
          {
            title: 'No-Pressure Decision',
            description: 'You see what you\'re getting before you pay, so you can make a confident decision.'
          }
        ]
      },
      
      faq: {
        title: 'Frequently Asked Questions',
        questions: [
          {
            q: 'What does "70% complete mockup" mean exactly?',
            a: 'It means we create a functional design with real pages, layout, and design elements. It\'s not just a sketch or wireframe—it\'s a working prototype that shows how your site will look and function, just missing your final content and any custom functionality.'
          },
          {
            q: 'How long does it take to get the free mockup?',
            a: 'Typically 3-5 business days after our initial consultation, depending on the complexity of your project.'
          },
          {
            q: 'What if I don\'t like the mockup?',
            a: 'No problem! There\'s no obligation. We can either make revisions based on your feedback or you can walk away with no cost or commitment.'
          },
          {
            q: 'What\'s included in the $1,499 price?',
            a: 'A complete 5-7 page website, fully responsive, SEO-optimized, with contact forms, Google Analytics integration, basic SEO setup, and 3 months of technical support.'
          },
          {
            q: 'Are there any ongoing costs?',
            a: 'The only ongoing costs would be domain registration (typically $15/year) and hosting (typically $10-20/month), which we can help set up but are not included in our package.'
          },
          {
            q: 'How long does it take to complete the website after approval?',
            a: 'Typically 2-3 weeks, depending on how quickly you can provide any content we need and your feedback on revisions.'
          }
        ]
      },
      
      cta: {
        title: 'Ready to Transform Your Online Presence?',
        button: 'Get Your Free Website Mockup'
      }
    }
  };
  
  const currentContent = content[language];

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
                {currentContent.title}<span className="text-brand-teal">{currentContent.titleHighlight}</span>
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                {currentContent.subtitle}
              </p>
            </div>
          </RevealSection>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
            <RevealSection delay={100}>
              <div className="glass-panel p-8 rounded-lg h-full">
                <h2 className="text-2xl font-semibold font-display mb-4 text-white">{currentContent.story.title}</h2>
                <p className="text-gray-300 mb-4">
                  {currentContent.story.p1}
                </p>
                <p className="text-gray-300 mb-4">
                  {currentContent.story.p2}
                </p>
                <p className="text-gray-300">
                  {currentContent.story.p3}
                </p>
              </div>
            </RevealSection>
            
            <RevealSection delay={200}>
              <div className="glass-panel p-8 rounded-lg h-full">
                <h2 className="text-2xl font-semibold font-display mb-4 text-white">{currentContent.whyChoose.title}</h2>
                <ul className="space-y-4">
                  {currentContent.whyChoose.points.map((point, index) => (
                    <li key={index} className="flex items-start">
                      <span className="flex-shrink-0 w-6 h-6 bg-brand-teal/20 rounded-full flex items-center justify-center mr-3 mt-0.5">
                        <Check className="h-4 w-4 text-brand-teal" />
                      </span>
                      <span className="text-gray-300">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </RevealSection>
          </div>
          
          <RevealSection delay={300}>
            <div className="glass-panel p-8 rounded-lg mb-20">
              <h2 className="text-2xl font-semibold font-display mb-6 text-white text-center">{currentContent.process.title}</h2>
              <p className="text-gray-300 mb-8 text-center max-w-3xl mx-auto">
                {currentContent.process.intro}
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {currentContent.process.steps.map((step, index) => (
                  <div key={index} className="text-center">
                    <div className="w-16 h-16 bg-brand-teal/10 rounded-full flex items-center justify-center mx-auto mb-4 text-brand-teal">
                      <span className="text-xl font-bold">{index + 1}</span>
                    </div>
                    <h3 className="text-lg font-semibold text-white mb-2">{step.title}</h3>
                    <p className="text-gray-300">
                      {step.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </RevealSection>
          
          <RevealSection delay={400}>
            <div className="glass-panel p-8 rounded-lg mb-20">
              <h2 className="text-2xl font-semibold font-display mb-6 text-white text-center">{currentContent.faq.title}</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
                {currentContent.faq.questions.map((faq, index) => (
                  <div key={index}>
                    <h3 className="text-lg font-semibold text-brand-teal mb-2">{faq.q}</h3>
                    <p className="text-gray-300">
                      {faq.a}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </RevealSection>
          
          <RevealSection delay={500} className="text-center">
            <h2 className="text-2xl md:text-3xl font-bold font-display mb-6">
              {currentContent.cta.title}
            </h2>
            <Button asChild size="lg" className="bg-brand-teal text-black hover:bg-brand-teal/90">
              <Link to="/contact">
                {currentContent.cta.button}
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
