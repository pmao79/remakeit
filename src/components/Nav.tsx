
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

  // Get base path for current language
  const langBase = language === 'en' ? '/en' : '';

  // Generate path for appropriate language
  const getPath = (svPath: string, enPath: string) => {
    return language === 'en' ? `/en${enPath}` : svPath;
  };

  // Check if a path is active
  const isActive = (svPath: string, enPath: string) => {
    const path = getPath(svPath, enPath);
    return location.pathname === path;
  };

  // Check if any service page is active
  const isServiceActive = () => {
    const servicesPrefix = language === 'en' ? '/en/services' : '/tjanster';
    return location.pathname.startsWith(servicesPrefix);
  };

  // Define services with language-specific paths
  const services = [
    { 
      svPath: '/tjanster/webbdesign', 
      enPath: '/services/web-design', 
      name: { sv: 'Webbdesign', en: 'Web Design' }
    },
    { 
      svPath: '/tjanster/webbplats-remake', 
      enPath: '/services/web-redesign', 
      name: { 
        sv: 'Webbplats<span class="text-brand-teal">Remake</span>iT', 
        en: 'Website<span class="text-brand-teal">Remake</span>iT'
      },
      isHTML: true
    },
    { 
      svPath: '/tjanster/seo-optimering', 
      enPath: '/services/seo-optimization', 
      name: { sv: 'SEO-optimering', en: 'SEO Optimization' } 
    },
    { 
      svPath: '/tjanster/konverteringsoptimering', 
      enPath: '/services/conversion-optimization', 
      name: { sv: 'Konverteringsoptimering', en: 'Conversion Optimization' } 
    },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'py-2 bg-background/80 backdrop-blur-lg border-b border-white/10' : 'py-6'
    }`}>
      <div className="container max-w-7xl mx-auto px-4 flex justify-between items-center">
        <Link to={langBase || '/'} className="flex items-center">
          <span className="text-2xl font-bold font-display tracking-tight text-white">
            Remake<span className="text-brand-teal">iT</span>
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <div className="flex gap-8">
            <Link 
              to={langBase || '/'} 
              className={`text-sm font-medium transition-colors relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 hover:after:origin-bottom-left hover:after:scale-x-100 after:transition-transform after:duration-300 ${
                location.pathname === (langBase || '/') ? 'text-white after:bg-brand-teal after:scale-x-100' : 'text-gray-400 hover:text-white after:bg-brand-teal/70'
              }`}
            >
              {t('nav.home')}
            </Link>
            
            {/* Services Dropdown */}
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
                    <DropdownMenuItem key={service.svPath} asChild>
                      <Link 
                        to={getPath(service.svPath, service.enPath)} 
                        className={`w-full px-4 py-2 text-sm hover:bg-secondary/80 ${
                          isActive(service.svPath, service.enPath) ? 'text-brand-teal' : 'text-foreground'
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
            
            <Link 
              to={getPath('/om', '/about')} 
              className={`text-sm font-medium transition-colors relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 hover:after:origin-bottom-left hover:after:scale-x-100 after:transition-transform after:duration-300 ${
                isActive('/om', '/about') ? 'text-white after:bg-brand-teal after:scale-x-100' : 'text-gray-400 hover:text-white after:bg-brand-teal/70'
              }`}
            >
              {t('nav.about')}
            </Link>
            <Link 
              to={getPath('/portfolio', '/portfolio')} 
              className={`text-sm font-medium transition-colors relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 hover:after:origin-bottom-left hover:after:scale-x-100 after:transition-transform after:duration-300 ${
                isActive('/portfolio', '/portfolio') ? 'text-white after:bg-brand-teal after:scale-x-100' : 'text-gray-400 hover:text-white after:bg-brand-teal/70'
              }`}
            >
              {t('nav.portfolio')}
            </Link>
            <Link 
              to={getPath('/blogg', '/blog')} 
              className={`text-sm font-medium transition-colors relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 hover:after:origin-bottom-left hover:after:scale-x-100 after:transition-transform after:duration-300 ${
                isActive('/blogg', '/blog') ? 'text-white after:bg-brand-teal after:scale-x-100' : 'text-gray-400 hover:text-white after:bg-brand-teal/70'
              }`}
            >
              {language === 'sv' ? 'Blogg' : 'Blog'}
            </Link>
            <Link 
              to={getPath('/kontakt', '/contact')} 
              className={`text-sm font-medium transition-colors relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 hover:after:origin-bottom-left hover:after:scale-x-100 after:transition-transform after:duration-300 ${
                isActive('/kontakt', '/contact') ? 'text-white after:bg-brand-teal after:scale-x-100' : 'text-gray-400 hover:text-white after:bg-brand-teal/70'
              }`}
            >
              {t('nav.contact')}
            </Link>
          </div>
          <LanguageSwitcher />
          <Button asChild className="bg-brand-teal text-black hover:bg-brand-teal/90 transition-all">
            <Link to={getPath('/kontakt', '/contact')}>{t('nav.cta')}</Link>
          </Button>
        </div>

        {/* Mobile Menu */}
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
                    to={langBase || '/'}
                    className={`text-lg font-medium py-2 ${location.pathname === (langBase || '/') ? 'text-brand-teal' : 'text-white'}`}
                  >
                    {t('nav.home')}
                  </Link>
                  
                  {/* Services section in mobile menu */}
                  <div className="flex flex-col items-center gap-4">
                    <span className="text-lg font-medium text-white">{t('nav.services')}</span>
                    <div className="flex flex-col items-center gap-3 pl-4">
                      {services.map((service) => (
                        <Link 
                          key={service.svPath}
                          to={getPath(service.svPath, service.enPath)}
                          className={`text-base py-1 ${
                            isActive(service.svPath, service.enPath) ? 'text-brand-teal' : 'text-gray-300'
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
                  
                  <Link 
                    to={getPath('/om', '/about')}
                    className={`text-lg font-medium py-2 ${isActive('/om', '/about') ? 'text-brand-teal' : 'text-white'}`}
                  >
                    {t('nav.about')}
                  </Link>
                  <Link 
                    to={getPath('/portfolio', '/portfolio')}
                    className={`text-lg font-medium py-2 ${isActive('/portfolio', '/portfolio') ? 'text-brand-teal' : 'text-white'}`}
                  >
                    {t('nav.portfolio')}
                  </Link>
                  <Link 
                    to={getPath('/blogg', '/blog')}
                    className={`text-lg font-medium py-2 ${isActive('/blogg', '/blog') ? 'text-brand-teal' : 'text-white'}`}
                  >
                    {language === 'sv' ? 'Blogg' : 'Blog'}
                  </Link>
                  <Link 
                    to={getPath('/kontakt', '/contact')}
                    className={`text-lg font-medium py-2 ${isActive('/kontakt', '/contact') ? 'text-brand-teal' : 'text-white'}`}
                  >
                    {t('nav.contact')}
                  </Link>
                  <Button asChild className="mt-4 w-full bg-brand-teal text-black hover:bg-brand-teal/90">
                    <Link to={getPath('/kontakt', '/contact')}>{t('nav.cta')}</Link>
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
