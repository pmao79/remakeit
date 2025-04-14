
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { useLocation, useNavigate } from 'react-router-dom';

// Create a separate hook to safely get location and navigate
const useSafeRouter = () => {
  try {
    // Try to use location and navigate, but fall back to null if not in Router context
    return {
      location: useLocation(),
      navigate: useNavigate()
    };
  } catch (e) {
    return {
      location: null,
      navigate: null
    };
  }
};

const LanguageSwitcher: React.FC = () => {
  const { language, setLanguage } = useLanguage();
  const { location, navigate } = useSafeRouter();

  const handleLanguageChange = (newLanguage: 'sv' | 'en') => {
    // If we don't have router context, just set the language and let the app reload
    if (!location || !navigate) {
      setLanguage(newLanguage);
      return;
    }

    const currentPath = location.pathname;
    
    // Don't do anything if we're already on the right language
    if (newLanguage === language) {
      return;
    }
    
    // Handle navigation based on current path and target language
    if (newLanguage === 'sv') {
      // Switching to Swedish
      if (currentPath.startsWith('/en')) {
        // Remove '/en' prefix to get Swedish path
        const swedishPath = currentPath.replace(/^\/en/, '');
        // If after removing /en we get empty string, navigate to root
        navigate(swedishPath || '/');
      }
      // Already on Swedish path, no navigation needed
    } else {
      // Switching to English
      if (currentPath === '/') {
        // From root to English root
        navigate('/en');
      } else if (!currentPath.startsWith('/en')) {
        // Add '/en' prefix to get English path
        navigate(`/en${currentPath}`);
      }
      // Already on English path, no navigation needed
    }
  };

  return (
    <div className="flex items-center gap-2">
      <Button
        variant="ghost"
        size="sm"
        className={`px-2 py-1 ${language === 'sv' ? 'bg-brand-teal/20 text-brand-teal' : 'text-gray-400'}`}
        onClick={() => handleLanguageChange('sv')}
      >
        SV
      </Button>
      <Button
        variant="ghost"
        size="sm"
        className={`px-2 py-1 ${language === 'en' ? 'bg-brand-teal/20 text-brand-teal' : 'text-gray-400'}`}
        onClick={() => handleLanguageChange('en')}
      >
        EN
      </Button>
    </div>
  );
};

export default LanguageSwitcher;
