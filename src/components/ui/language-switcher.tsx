
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

// Path mapping for language switching
const getPathInLanguage = (currentPath: string, targetLanguage: 'sv' | 'en'): string => {
  // Special case for root
  if (currentPath === '/') {
    return targetLanguage === 'en' ? '/en' : '/';
  }
  
  // Handle switching from English to Swedish
  if (currentPath.startsWith('/en') && targetLanguage === 'sv') {
    // Remove /en prefix to get Swedish path
    const swedishPath = currentPath.replace(/^\/en/, '');
    // If the path is empty after removing /en, return root
    return swedishPath || '/';
  }
  
  // Handle switching from Swedish to English
  if (!currentPath.startsWith('/en') && targetLanguage === 'en') {
    // Add /en prefix to get English path
    return `/en${currentPath}`;
  }
  
  // Already on the correct language path
  return currentPath;
};

const LanguageSwitcher: React.FC = () => {
  const { language, setLanguage } = useLanguage();
  const { location, navigate } = useSafeRouter();

  const handleLanguageChange = (newLanguage: 'sv' | 'en') => {
    // Don't do anything if we're already on the right language
    if (newLanguage === language) {
      return;
    }
    
    // If we don't have router context, just set the language
    if (!location || !navigate) {
      setLanguage(newLanguage);
      return;
    }

    // Get target path in the requested language
    const currentPath = location.pathname;
    const newPath = getPathInLanguage(currentPath, newLanguage);
    
    // Navigate to the new path
    navigate(newPath);
    
    // Set language will happen automatically via useEffect in LanguageContext
    // because of the path change
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
