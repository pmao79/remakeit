
import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { Facebook, Instagram } from 'lucide-react';

const Footer: React.FC = () => {
  const { language, t } = useLanguage();
  const currentYear = new Date().getFullYear();
  
  // Contact information based on language
  const contactInfo = {
    sv: {
      phone: '0708-62 52 53',
      email: 'info@remakeit.se',
      hours: 'Måndag - Fredag: 9:00 - 17:00'
    },
    en: {
      phone: '(+46) 708-62 52 53',
      email: 'hello@remakeit.com',
      hours: 'Monday - Friday: 9am - 5pm'
    }
  };

  const current = contactInfo[language];

  // Social media links with proper SEO attributes
  const socialLinks = [
    {
      name: 'Facebook',
      url: 'https://www.facebook.com/remakeit',
      icon: <Facebook className="w-5 h-5" />,
      ariaLabel: 'Besök vår Facebook sida',
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/remakeit.se',
      icon: <Instagram className="w-5 h-5" />,
      ariaLabel: 'Följ oss på Instagram',
    }
  ];
  
  return (
    <footer className="bg-secondary/50 border-t border-white/5">
      <div className="container max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1">
            <Link to="/" className="flex items-center mb-4">
              <span className="text-2xl font-bold font-display tracking-tight text-white">
                Remake<span className="text-brand-teal">iT</span>
              </span>
            </Link>
            <p className="text-gray-400 mb-6">
              {t('footer.description')}
            </p>
            
            {/* Social Media Icons */}
            <div className="flex items-center space-x-4 mt-4">
              {socialLinks.map((social, index) => (
                <a 
                  key={index} 
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.ariaLabel}
                  className="text-gray-400 hover:text-brand-teal transition-colors duration-200 flex items-center justify-center p-2 rounded-full bg-secondary hover:bg-secondary/80"
                  title={`Följ RemakeiT på ${social.name}`}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">{t('footer.links')}</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-gray-400 hover:text-brand-teal transition-colors">
                  {t('nav.home')}
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-brand-teal transition-colors">
                  {t('nav.about')}
                </Link>
              </li>
              <li>
                <Link to="/portfolio" className="text-gray-400 hover:text-brand-teal transition-colors">
                  {t('nav.portfolio')}
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-brand-teal transition-colors">
                  {t('nav.contact')}
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">{t('footer.services')}</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/services/web-design" className="text-gray-400 hover:text-brand-teal transition-colors">
                  {t('footer.service1')}
                </Link>
              </li>
              <li>
                <Link to="/services/web-redesign" className="text-gray-400 hover:text-brand-teal transition-colors">
                  {t('footer.service2')}
                </Link>
              </li>
              <li>
                <Link to="/services/seo-optimization" className="text-gray-400 hover:text-brand-teal transition-colors">
                  {t('footer.service3')}
                </Link>
              </li>
              <li>
                <Link to="/services/conversion-optimization" className="text-gray-400 hover:text-brand-teal transition-colors">
                  {t('footer.service4')}
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">{t('footer.contact')}</h3>
            <ul className="space-y-3">
              <li className="text-gray-400">
                <span className="block">{t('footer.phone')}</span>
                <a href={`tel:${current.phone.replace(/[^0-9+]/g, '')}`} className="text-brand-teal hover:text-brand-teal/80 transition-colors">
                  {current.phone}
                </a>
              </li>
              <li className="text-gray-400">
                <span className="block">{t('footer.email')}</span>
                <a href={`mailto:${current.email}`} className="text-brand-teal hover:text-brand-teal/80 transition-colors">
                  {current.email}
                </a>
              </li>
              <li className="text-gray-400">
                <span className="block">{t('footer.hours')}</span>
                {current.hours}
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 mb-4 md:mb-0">
            &copy; {currentYear} RemakeiT. {t('footer.rights')}
          </p>
          <div className="flex space-x-4">
            <Link to="/privacy" className="text-gray-500 hover:text-brand-teal transition-colors">
              {t('footer.privacy')}
            </Link>
            <Link to="/terms" className="text-gray-500 hover:text-brand-teal transition-colors">
              {t('footer.terms')}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
