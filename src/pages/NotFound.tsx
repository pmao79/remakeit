
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { useLanguage } from '@/contexts/LanguageContext';
import SeoHead from '@/components/SeoHead';

const NotFound = () => {
  const location = useLocation();
  const { language } = useLanguage();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  // Get the home path based on current language
  const homePath = language === 'en' ? '/en' : '/';

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <SeoHead 
        title={language === 'sv' ? "Sidan hittades inte - 404 | RemakeiT" : "Page Not Found - 404 | RemakeiT"}
        description={language === 'sv' ? "Tyvärr kunde vi inte hitta sidan du sökte." : "Sorry, we couldn't find the page you were looking for."}
        noIndex={true}
      />
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">404</h1>
        <p className="text-xl text-gray-600 mb-4">
          {language === 'sv' ? 'Hoppsan! Sidan hittades inte' : 'Oops! Page not found'}
        </p>
        <Link to={homePath} className="text-blue-500 hover:text-blue-700 underline">
          {language === 'sv' ? 'Tillbaka till Startsidan' : 'Return to Home'}
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
