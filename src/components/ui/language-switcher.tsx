
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';

const LanguageSwitcher: React.FC = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex items-center gap-2">
      <Button
        variant="ghost"
        size="sm"
        className={`px-2 py-1 ${language === 'sv' ? 'bg-brand-teal/20 text-brand-teal' : 'text-gray-400'}`}
        onClick={() => setLanguage('sv')}
      >
        SV
      </Button>
      <Button
        variant="ghost"
        size="sm"
        className={`px-2 py-1 ${language === 'en' ? 'bg-brand-teal/20 text-brand-teal' : 'text-gray-400'}`}
        onClick={() => setLanguage('en')}
      >
        EN
      </Button>
    </div>
  );
};

export default LanguageSwitcher;
