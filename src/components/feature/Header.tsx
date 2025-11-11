import React, { useState } from 'react';
import { useLanguage } from '../../contexts/LanguageContext';

const Header: React.FC = () => {
  const { t, language, setLanguage } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="bg-white shadow-lg sticky top-0 z-40">
      {/* Language Switcher - Fixed Position */}
      <div className="fixed top-4 right-4 z-50 flex bg-white rounded-full shadow-md overflow-hidden">
        <button
          onClick={() => setLanguage('es')}
          className={`px-2 sm:px-3 py-1 sm:py-2 text-xs sm:text-sm font-medium transition-all duration-200 cursor-pointer whitespace-nowrap ${
            language === 'es'
              ? 'bg-orange-500 text-white'
              : 'text-gray-600 hover:bg-orange-50 hover:text-orange-600'
          }`}
        >
          ES
        </button>
        <button
          onClick={() => setLanguage('en')}
          className={`px-2 sm:px-3 py-1 sm:py-2 text-xs sm:text-sm font-medium transition-all duration-200 cursor-pointer whitespace-nowrap ${
            language === 'en'
              ? 'bg-orange-500 text-white'
              : 'text-gray-600 hover:bg-orange-50 hover:text-orange-600'
          }`}
        >
          EN
        </button>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4 lg:py-6">
          {/* Logo */}
          <div className="flex items-center">
            <h1>
              <img 
                src="https://static.readdy.ai/image/c20aca5312312f77b05f596981163b7e/c1c1e44cc5b71ad3da20f0f815dfdda4.jpeg" 
                alt="DES 831 Logo" 
                className="h-20 sm:h-24 lg:h-28 xl:h-32 w-auto object-contain"
              />
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8 xl:space-x-12">
            <button 
              onClick={() => scrollToSection('home')}
              className="text-gray-700 hover:text-orange-500 font-medium transition-colors duration-200 cursor-pointer whitespace-nowrap"
            >
              {t('nav.home')}
            </button>
            <button 
              onClick={() => scrollToSection('services')}
              className="text-gray-700 hover:text-orange-500 font-medium transition-colors duration-200 cursor-pointer whitespace-nowrap"
            >
              {t('nav.services')}
            </button>
            <button 
              onClick={() => scrollToSection('products')}
              className="text-gray-700 hover:text-orange-500 font-medium transition-colors duration-200 cursor-pointer whitespace-nowrap"
            >
              {t('nav.products')}
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-gray-700 hover:text-orange-500 font-medium transition-colors duration-200 cursor-pointer whitespace-nowrap"
            >
              {t('nav.contact')}
            </button>
            <button 
              onClick={scrollToContact}
              className="bg-orange-500 text-white px-6 py-3 rounded-full hover:bg-orange-600 transition-colors duration-200 font-medium cursor-pointer whitespace-nowrap"
            >
              {t('nav.getQuote')}
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded-md text-gray-700 hover:text-orange-500 hover:bg-gray-100 transition-colors duration-200 cursor-pointer"
          >
            <div className="w-6 h-6 flex items-center justify-center">
              <i className={`ri-${isMenuOpen ? 'close' : 'menu'}-line text-xl`}></i>
            </div>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden border-t border-gray-200 py-4">
            <nav className="flex flex-col space-y-4">
              <button 
                onClick={() => scrollToSection('home')}
                className="text-gray-700 hover:text-orange-500 font-medium transition-colors duration-200 text-left cursor-pointer py-2"
              >
                {t('nav.home')}
              </button>
              <button 
                onClick={() => scrollToSection('services')}
                className="text-gray-700 hover:text-orange-500 font-medium transition-colors duration-200 text-left cursor-pointer py-2"
              >
                {t('nav.services')}
              </button>
              <button 
                onClick={() => scrollToSection('products')}
                className="text-gray-700 hover:text-orange-500 font-medium transition-colors duration-200 text-left cursor-pointer py-2"
              >
                {t('nav.products')}
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="text-gray-700 hover:text-orange-500 font-medium transition-colors duration-200 text-left cursor-pointer py-2"
              >
                {t('nav.contact')}
              </button>
              <button 
                onClick={scrollToContact}
                className="bg-orange-500 text-white px-6 py-3 rounded-full hover:bg-orange-600 transition-colors duration-200 font-medium text-center cursor-pointer whitespace-nowrap mt-4"
              >
                {t('nav.getQuote')}
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
