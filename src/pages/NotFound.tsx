
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import SeoHead from "@/components/SeoHead";

const NotFound = () => {
  const location = useLocation();
  const { language } = useLanguage();
  
  const homeLink = language === 'en' ? '/en' : '/';
  const homeText = language === 'en' ? 'Return to Home' : 'Tillbaka till startsidan';
  const notFoundTitle = language === 'en' ? 'Page not found' : 'Sidan kunde inte hittas';
  const notFoundText = language === 'en' ? 'The page you are looking for does not exist or has been moved.' : 'Sidan du letar efter finns inte eller har flyttats.';
  const errorTitle = '404';

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <>
      <SeoHead 
        title={notFoundTitle}
        description={notFoundText}
        noIndex={true}
      />
      <Nav />
      <main className="min-h-screen bg-background pt-24 pb-16">
        <div className="container mx-auto px-4 flex items-center justify-center">
          <div className="text-center max-w-md">
            <h1 className="text-7xl font-bold text-brand-teal mb-4">{errorTitle}</h1>
            <h2 className="text-2xl font-semibold text-foreground mb-6">{notFoundTitle}</h2>
            <p className="text-lg text-muted-foreground mb-8">{notFoundText}</p>
            <Link 
              to={homeLink} 
              className="inline-block bg-brand-teal text-background px-6 py-3 rounded-lg font-medium transition-colors hover:bg-brand-teal/90"
            >
              {homeText}
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default NotFound;
