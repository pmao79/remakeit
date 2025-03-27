
import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
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
              We build modern, SEO-optimized websites that convert visitors into customers. Get started with a free mockup today.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-gray-400 hover:text-brand-teal transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-brand-teal transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/portfolio" className="text-gray-400 hover:text-brand-teal transition-colors">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-brand-teal transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Services</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-gray-400 hover:text-brand-teal transition-colors">
                  Website Design
                </Link>
              </li>
              <li>
                <Link to="/" className="text-gray-400 hover:text-brand-teal transition-colors">
                  Website Redesign
                </Link>
              </li>
              <li>
                <Link to="/" className="text-gray-400 hover:text-brand-teal transition-colors">
                  SEO Optimization
                </Link>
              </li>
              <li>
                <Link to="/" className="text-gray-400 hover:text-brand-teal transition-colors">
                  Conversion Optimization
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="text-gray-400">
                <span className="block">Phone:</span>
                <a href="tel:5551234567" className="text-brand-teal hover:text-brand-teal/80 transition-colors">
                  (555) 123-4567
                </a>
              </li>
              <li className="text-gray-400">
                <span className="block">Email:</span>
                <a href="mailto:hello@remakeit.com" className="text-brand-teal hover:text-brand-teal/80 transition-colors">
                  hello@remakeit.com
                </a>
              </li>
              <li className="text-gray-400">
                <span className="block">Hours:</span>
                Monday - Friday: 9am - 5pm EST
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 mb-4 md:mb-0">
            &copy; {currentYear} RemakeiT. All rights reserved.
          </p>
          <div className="flex space-x-4">
            <Link to="/privacy" className="text-gray-500 hover:text-brand-teal transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-gray-500 hover:text-brand-teal transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
