
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

const NotFound = () => {
  const location = useLocation();
  const { language } = useLanguage();
  
  const homeLink = language === 'en' ? '/en' : '/';
  const homeText = language === 'en' ? 'Return to Home' : 'Tillbaka till startsidan';
  const notFoundTitle = language === 'en' ? 'Oops! Page not found' : 'Hoppsan! Sidan kunde inte hittas';
  const errorTitle = language === 'en' ? '404' : '404';

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">{errorTitle}</h1>
        <p className="text-xl text-gray-600 mb-4">{notFoundTitle}</p>
        <Link to={homeLink} className="text-blue-500 hover:text-blue-700 underline">
          {homeText}
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
