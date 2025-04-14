
import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';

const LanguageSwitcher: React.FC = () => {
  const { language, setLanguage } = useLanguage();
  const navigate = useNavigate();
  const location = useLocation();
  
  const handleLanguageChange = (newLanguage: 'sv' | 'en') => {
    // Don't do anything if already on this language
    if (language === newLanguage) return;
    
    // Change language in context
    setLanguage(newLanguage);
    
    // Handle URL change
    const currentPath = location.pathname;
    
    // If switching to English from Swedish root
    if (newLanguage === 'en' && (currentPath === '/' || !currentPath.startsWith('/en'))) {
      if (currentPath === '/') {
        navigate('/en');
      } else {
        navigate(`/en${currentPath}`);
      }
    }
    
    // If switching to Swedish from English
    if (newLanguage === 'sv' && currentPath.startsWith('/en')) {
      // Remove /en prefix
      const swedishPath = currentPath.replace('/en', '') || '/';
      navigate(swedishPath);
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
