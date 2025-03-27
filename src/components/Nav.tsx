
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Nav: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

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

  // Close menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'py-2 bg-background/80 backdrop-blur-lg border-b border-white/10' : 'py-6'
    }`}>
      <div className="container max-w-7xl mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <span className="text-2xl font-bold font-display tracking-tight text-white">
            Remake<span className="text-brand-teal">iT</span>
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <div className="flex gap-8">
            <Link 
              to="/" 
              className={`text-sm font-medium transition-colors relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 hover:after:origin-bottom-left hover:after:scale-x-100 after:transition-transform after:duration-300 ${
                isActive('/') ? 'text-white after:bg-brand-teal after:scale-x-100' : 'text-gray-400 hover:text-white after:bg-brand-teal/70'
              }`}
            >
              Home
            </Link>
            <Link 
              to="/about" 
              className={`text-sm font-medium transition-colors relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 hover:after:origin-bottom-left hover:after:scale-x-100 after:transition-transform after:duration-300 ${
                isActive('/about') ? 'text-white after:bg-brand-teal after:scale-x-100' : 'text-gray-400 hover:text-white after:bg-brand-teal/70'
              }`}
            >
              About
            </Link>
            <Link 
              to="/portfolio" 
              className={`text-sm font-medium transition-colors relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 hover:after:origin-bottom-left hover:after:scale-x-100 after:transition-transform after:duration-300 ${
                isActive('/portfolio') ? 'text-white after:bg-brand-teal after:scale-x-100' : 'text-gray-400 hover:text-white after:bg-brand-teal/70'
              }`}
            >
              Portfolio
            </Link>
            <Link 
              to="/contact" 
              className={`text-sm font-medium transition-colors relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 hover:after:origin-bottom-left hover:after:scale-x-100 after:transition-transform after:duration-300 ${
                isActive('/contact') ? 'text-white after:bg-brand-teal after:scale-x-100' : 'text-gray-400 hover:text-white after:bg-brand-teal/70'
              }`}
            >
              Contact
            </Link>
          </div>
          <Button asChild className="bg-brand-teal text-black hover:bg-brand-teal/90 transition-all">
            <Link to="/contact">Get Free Mockup</Link>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button 
          onClick={toggleMenu} 
          className="md:hidden text-white"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      <div 
        className={`md:hidden fixed inset-0 z-40 bg-background/95 backdrop-blur-lg transition-transform duration-300 ${
          isMenuOpen ? 'translate-y-0' : '-translate-y-full'
        }`}
      >
        <div className="container mx-auto px-4 py-24 flex flex-col items-center gap-8">
          <Link 
            to="/"
            className={`text-lg font-medium py-2 ${isActive('/') ? 'text-brand-teal' : 'text-white'}`}
          >
            Home
          </Link>
          <Link 
            to="/about"
            className={`text-lg font-medium py-2 ${isActive('/about') ? 'text-brand-teal' : 'text-white'}`}
          >
            About
          </Link>
          <Link 
            to="/portfolio"
            className={`text-lg font-medium py-2 ${isActive('/portfolio') ? 'text-brand-teal' : 'text-white'}`}
          >
            Portfolio
          </Link>
          <Link 
            to="/contact"
            className={`text-lg font-medium py-2 ${isActive('/contact') ? 'text-brand-teal' : 'text-white'}`}
          >
            Contact
          </Link>
          <Button asChild className="mt-4 w-full bg-brand-teal text-black hover:bg-brand-teal/90">
            <Link to="/contact">Get Free Mockup</Link>
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
