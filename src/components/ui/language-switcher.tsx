
import React from 'react';
import { useLocation } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';

const LanguageSwitcher: React.FC = () => {
  const { language, changeLanguage } = useLanguage();
  const location = useLocation();
  
  const handleLanguageChange = (newLanguage: 'sv' | 'en') => {
    // Don't do anything if already on this language
    if (language === newLanguage) return;
    
    // Use the new changeLanguage function that handles URL syncing
    changeLanguage(newLanguage);
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
