import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import LanguageSwitcher from '@/components/ui/language-switcher';
import { useLanguage } from '@/contexts/LanguageContext';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from '@/components/ui/sheet';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu';
import { useIsMobile } from '@/hooks/use-mobile';

const Nav: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const { t, language } = useLanguage();
  const isMobile = useIsMobile();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path: string) => {
    const normalizedPath = language === 'en' 
      ? path.startsWith('/en') ? path : `/en${path}`
      : path.startsWith('/en') ? path.replace('/en', '') : path;
    
    const normalizedCurrentPath = language === 'en'
      ? location.pathname.startsWith('/en') ? location.pathname : `/en${location.pathname}`
      : location.pathname.startsWith('/en') ? location.pathname.replace('/en', '') : location.pathname;
    
    return normalizedCurrentPath === normalizedPath;
  };

  const isServiceActive = () => {
    return location.pathname.includes('/services/');
  };

  const services = [
    { path: '/services/web-design', name: { sv: 'Webbdesign', en: 'Web Design' } },
    { 
      path: '/services/web-redesign', 
      name: { 
        sv: 'Webbplats<span class="text-brand-teal">Remake</span>iT', 
        en: 'Website<span class="text-brand-teal">Remake</span>iT'
      },
      isHTML: true
    },
    { path: '/services/seo-optimization', name: { sv: 'SEO-optimering', en: 'SEO Optimization' } },
    { path: '/services/conversion-optimization', name: { sv: 'Konverteringsoptimering', en: 'Conversion Optimization' } },
  ];

  const navLinks = [
    { path: '/', label: t('nav.home') },
    { path: '/about', label: t('nav.about') },
    { path: '/portfolio', label: t('nav.portfolio') },
    { path: '/blog', label: language === 'sv' ? 'Blogg' : 'Blog' },
    { path: '/contact', label: t('nav.contact') },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'py-2 bg-background/80 backdrop-blur-lg border-b border-white/10' : 'py-6'
    }`}>
      <div className="container max-w-7xl mx-auto px-4 flex justify-between items-center">
        <Link to={language === 'en' ? '/en' : '/'} className="flex items-center">
          <span className="text-2xl font-bold font-display tracking-tight text-white">
            Remake<span className="text-brand-teal">iT</span>
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          <div className="flex gap-8">
            <Link 
              to={language === 'en' ? '/en' : '/'} 
              className={`text-sm font-medium transition-colors relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 hover:after:origin-bottom-left hover:after:scale-x-100 after:transition-transform after:duration-300 ${
                isActive('/') ? 'text-white after:bg-brand-teal after:scale-x-100' : 'text-gray-400 hover:text-white after:bg-brand-teal/70'
              }`}
            >
              {t('nav.home')}
            </Link>
            
            <div className="relative">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <button 
                    className={`text-sm font-medium transition-colors flex items-center gap-1 relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 hover:after:origin-bottom-left hover:after:scale-x-100 after:transition-transform after:duration-300 ${
                      isServiceActive() ? 'text-white after:bg-brand-teal after:scale-x-100' : 'text-gray-400 hover:text-white after:bg-brand-teal/70'
                    }`}
                  >
                    {t('nav.services')} <ChevronDown size={16} />
                  </button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="center" className="bg-background/95 backdrop-blur-md border border-white/10 min-w-[200px]">
                  {services.map((service) => (
                    <DropdownMenuItem key={service.path} asChild>
                      <Link 
                        to={language === 'en' ? `/en${service.path}` : service.path} 
                        className={`w-full px-4 py-2 text-sm hover:bg-secondary/80 ${
                          isActive(service.path) ? 'text-brand-teal' : 'text-foreground'
                        }`}
                      >
                        {service.isHTML ? (
                          <span dangerouslySetInnerHTML={{ __html: service.name[language] }} />
                        ) : (
                          service.name[language]
                        )}
                      </Link>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
            
            {navLinks.slice(2).map((link) => (
              <Link 
                key={link.path}
                to={language === 'en' ? `/en${link.path}` : link.path} 
                className={`text-sm font-medium transition-colors relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 hover:after:origin-bottom-left hover:after:scale-x-100 after:transition-transform after:duration-300 ${
                  isActive(link.path) ? 'text-white after:bg-brand-teal after:scale-x-100' : 'text-gray-400 hover:text-white after:bg-brand-teal/70'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
          <LanguageSwitcher />
          <Button asChild className="bg-brand-teal text-black hover:bg-brand-teal/90 transition-all">
            <Link to={language === 'en' ? '/en/contact' : '/contact'}>{t('nav.cta')}</Link>
          </Button>
        </div>

        {isMobile && (
          <div className="md:hidden flex items-center">
            <LanguageSwitcher />
            <Sheet>
              <SheetTrigger asChild>
                <button 
                  className="ml-4 text-white p-2"
                  aria-label="Open menu"
                >
                  <Menu size={24} />
                </button>
              </SheetTrigger>
              <SheetContent side="left" className="w-full bg-background border-r border-white/10 p-0">
                <div className="container mx-auto px-4 py-16 flex flex-col items-center gap-8">
                  <Link 
                    to={language === 'en' ? '/en' : '/'}
                    className={`text-lg font-medium py-2 ${isActive('/') ? 'text-brand-teal' : 'text-white'}`}
                  >
                    {t('nav.home')}
                  </Link>
                  
                  <div className="flex flex-col items-center gap-4">
                    <span className="text-lg font-medium text-white">{t('nav.services')}</span>
                    <div className="flex flex-col items-center gap-3 pl-4">
                      {services.map((service) => (
                        <Link 
                          key={service.path}
                          to={language === 'en' ? `/en${service.path}` : service.path}
                          className={`text-base py-1 ${
                            isActive(service.path) ? 'text-brand-teal' : 'text-gray-300'
                          }`}
                        >
                          {service.isHTML ? (
                            <span dangerouslySetInnerHTML={{ __html: service.name[language] }} />
                          ) : (
                            service.name[language]
                          )}
                        </Link>
                      ))}
                    </div>
                  </div>
                  
                  {navLinks.slice(2).map((link) => (
                    <Link 
                      key={link.path}
                      to={language === 'en' ? `/en${link.path}` : link.path}
                      className={`text-lg font-medium py-2 ${isActive(link.path) ? 'text-brand-teal' : 'text-white'}`}
                    >
                      {link.label}
                    </Link>
                  ))}
                  <Button asChild className="mt-4 w-full bg-brand-teal text-black hover:bg-brand-teal/90">
                    <Link to={language === 'en' ? '/en/contact' : '/contact'}>{t('nav.cta')}</Link>
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Nav;
