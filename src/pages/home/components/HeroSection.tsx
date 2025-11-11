
import React from 'react';
import Button from '../../../components/base/Button';
import { useLanguage } from '../../../contexts/LanguageContext';

const HeroSection: React.FC = () => {
  const { t } = useLanguage();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('https://readdy.ai/api/search-image?query=Modern%20creative%20design%20studio%20workspace%20with%20professional%20printing%20equipment%2C%20graphic%20design%20tools%2C%20colorful%20fabric%20samples%2C%20and%20artistic%20materials%20arranged%20beautifully%2C%20bright%20natural%20lighting%2C%20clean%20minimalist%20aesthetic%2C%20orange%20accent%20colors%2C%20professional%20photography%20style&width=1920&height=1080&seq=hero-bg-001&orientation=landscape')`
      }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
        <div className="w-full max-w-6xl mx-auto text-center text-white">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 sm:mb-8 leading-tight">
            <span className="bg-gradient-to-r from-orange-300 to-orange-500 bg-clip-text text-transparent drop-shadow-lg">
              {t('hero.title')}
            </span>
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl mb-12 sm:mb-16 text-white max-w-4xl mx-auto leading-relaxed drop-shadow-lg font-medium px-4">
            {t('hero.subtitle')}
          </p>
          
          {/* Botones más grandes y mejor organizados */}
          <div className="flex flex-col sm:flex-row gap-6 sm:gap-8 justify-center items-center px-4 max-w-2xl mx-auto">
            <Button 
              size="lg" 
              onClick={() => scrollToSection('contact')}
              className="w-full sm:w-auto bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 transform hover:scale-105 transition-all duration-200 whitespace-nowrap shadow-2xl text-lg sm:text-xl px-12 py-5 sm:px-14 sm:py-6 font-bold rounded-xl"
            >
              {t('hero.cta.primary')}
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              onClick={() => scrollToSection('products')}
              className="w-full sm:w-auto border-3 border-white text-white hover:bg-white hover:text-gray-900 transform hover:scale-105 transition-all duration-200 whitespace-nowrap shadow-2xl backdrop-blur-sm bg-white/10 text-lg sm:text-xl px-12 py-5 sm:px-14 sm:py-6 font-bold rounded-xl"
            >
              {t('hero.cta.secondary')}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
