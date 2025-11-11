import React from 'react';
import { useLanguage } from '../../contexts/LanguageContext';

const Footer: React.FC = () => {
  const { t } = useLanguage();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-slate-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-12">
          {/* Company Info */}
          <div className="space-y-4 sm:space-y-6 sm:col-span-2 lg:col-span-1">
            <div className="flex items-center space-x-3">
              <img 
                src="https://static.readdy.ai/image/c20aca5312312f77b05f596981163b7e/c1c1e44cc5b71ad3da20f0f815dfdda4.jpeg" 
                alt="DES 831 Logo" 
                className="w-16 h-16 sm:w-20 sm:h-20 object-contain"
              />
            </div>
            <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
              {t('footer.company.description')}
            </p>
            <div className="flex space-x-3 sm:space-x-4">
              <a href="#" className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-orange-500 transition-colors cursor-pointer">
                <i className="ri-facebook-fill text-lg"></i>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-base sm:text-lg font-semibold mb-4 sm:mb-6">{t('footer.quickLinks.title')}</h4>
            <ul className="space-y-2 sm:space-y-3">
              <li>
                <button 
                  onClick={() => scrollToSection('home')}
                  className="text-gray-300 hover:text-orange-400 transition-colors text-sm sm:text-base cursor-pointer block"
                >
                  {t('nav.home')}
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('services')}
                  className="text-gray-300 hover:text-orange-400 transition-colors text-sm sm:text-base cursor-pointer block"
                >
                  {t('nav.services')}
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('products')}
                  className="text-gray-300 hover:text-orange-400 transition-colors text-sm sm:text-base cursor-pointer block"
                >
                  {t('nav.products')}
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="text-gray-300 hover:text-orange-400 transition-colors text-sm sm:text-base cursor-pointer block"
                >
                  {t('nav.contact')}
                </button>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-base sm:text-lg font-semibold mb-4 sm:mb-6">{t('footer.services.title')}</h4>
            <ul className="space-y-2 sm:space-y-3">
              <li>
                <span className="text-gray-300 text-sm sm:text-base">{t('services.graphic.title')}</span>
              </li>
              <li>
                <span className="text-gray-300 text-sm sm:text-base">{t('services.printing.title')}</span>
              </li>
              <li>
                <span className="text-gray-300 text-sm sm:text-base">{t('services.gifts.title')}</span>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-base sm:text-lg font-semibold mb-4 sm:mb-6">{t('footer.contact.title')}</h4>
            <div className="space-y-3 sm:space-y-4">
              <div className="flex items-start space-x-3">
                <i className="ri-map-pin-line text-orange-400 mt-1 flex-shrink-0"></i>
                <span className="text-gray-300 text-sm sm:text-base">Hollister, California 95023</span>
              </div>
              <div className="flex items-center space-x-3">
                <i className="ri-phone-line text-orange-400 flex-shrink-0"></i>
                <span className="text-gray-300 text-sm sm:text-base">+1 (831) 673-2181</span>
              </div>
              <div className="flex items-center space-x-3">
                <i className="ri-mail-line text-orange-400 flex-shrink-0"></i>
                <span className="text-gray-300 text-sm sm:text-base break-all">des831store@gmail.com</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-8 sm:mt-12 lg:mt-16 pt-6 sm:pt-8 flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
          <p className="text-gray-400 text-sm sm:text-base text-center sm:text-left">
            © 2025 DES 831. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
