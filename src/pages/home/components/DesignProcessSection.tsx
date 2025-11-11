import React from 'react';
import Button from '../../../components/base/Button';
import { useLanguage } from '../../../contexts/LanguageContext';

const DesignProcessSection: React.FC = () => {
  const { t } = useLanguage();

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const processSteps = [
    {
      number: '01',
      title: t('process.step1.title'),
      description: t('process.step1.description'),
      icon: 'ri-discuss-line',
      image: 'https://readdy.ai/api/search-image?query=Personal%20one-on-one%20consultation%20meeting%20between%20designer%20and%20client%2C%20intimate%20professional%20setting%2C%20single%20designer%20showing%20design%20concepts%20to%20one%20client%2C%20modern%20office%20space%20with%20design%20materials%2C%20warm%20personal%20atmosphere%2C%20orange%20accent%20lighting%2C%20professional%20yet%20friendly%20environment%2C%20close%20collaboration&width=300&height=200&seq=personal-consultation-002&orientation=landscape'
    },
    {
      number: '02',
      title: t('process.step2.title'),
      description: t('process.step2.description'),
      icon: 'ri-brush-line',
      image: 'https://readdy.ai/api/search-image?query=Creative%20design%20process%20in%20action%2C%20designer%20working%20on%20innovative%20visual%20concepts%2C%20digital%20design%20tools%2C%20color%20palettes%2C%20sketches%20and%20mockups%2C%20inspiring%20creative%20workspace%2C%20orange%20design%20elements&width=300&height=200&seq=creative-design-001&orientation=landscape'
    },
    {
      number: '03',
      title: t('process.step3.title'),
      description: t('process.step3.description'),
      icon: 'ri-edit-line',
      image: 'https://readdy.ai/api/search-image?query=Design%20review%20and%20refinement%20process%2C%20multiple%20design%20iterations%20displayed%2C%20feedback%20session%2C%20detailed%20design%20adjustments%2C%20professional%20workspace%2C%20orange%20accent%20colors%2C%20collaborative%20environment&width=300&height=200&seq=review-001&orientation=landscape'
    },
    {
      number: '04',
      title: t('process.step4.title'),
      description: t('process.step4.description'),
      icon: 'ri-settings-line',
      image: 'https://readdy.ai/api/search-image?query=High-quality%20production%20facility%2C%20professional%20printing%20and%20manufacturing%20equipment%2C%20final%20products%20being%20created%2C%20quality%20control%20process%2C%20modern%20industrial%20setting%2C%20orange%20branding%20elements&width=300&height=200&seq=production-001&orientation=landscape'
    }
  ];

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 sm:mb-6">
            {t('process.title')}
          </h2>
          <p className="text-lg sm:text-xl lg:text-2xl text-gray-600 max-w-4xl mx-auto px-4">
            {t('process.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-10 mb-12 sm:mb-16">
          {processSteps.map((step, index) => (
            <div key={index} className="relative">
              <div className="bg-white rounded-xl p-4 sm:p-6 shadow-lg hover:shadow-xl transition-all duration-300 h-full hover:-translate-y-2 transform">
                <div className="text-center mb-4 sm:mb-6">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                    <i className={`${step.icon} text-lg sm:text-xl text-white`}></i>
                  </div>
                </div>
                
                <img 
                  src={step.image}
                  alt={step.title}
                  className="w-full h-24 sm:h-32 lg:h-36 object-cover rounded-lg mb-3 sm:mb-4"
                />
                
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3 text-center">
                  {step.title}
                </h3>
                <p className="text-gray-600 text-center text-sm sm:text-base leading-relaxed">
                  {step.description}
                </p>
              </div>
              
              {/* Arrow connector for desktop */}
              {index < processSteps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-5 xl:-right-6 transform -translate-y-1/2 z-10">
                  <i className="ri-arrow-right-line text-xl xl:text-2xl text-orange-500"></i>
                </div>
              )}
              
              {/* Arrow connector for mobile/tablet */}
              {index < processSteps.length - 1 && (
                <div className="lg:hidden flex justify-center mt-4 sm:mt-6">
                  <i className="ri-arrow-down-line text-xl text-orange-500"></i>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button 
            size="lg" 
            onClick={scrollToContact}
            className="w-full sm:w-auto bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 transform hover:scale-105 transition-all duration-200 whitespace-nowrap text-base sm:text-lg px-8 py-4"
          >
            {t('process.cta')}
          </Button>
        </div>
      </div>
    </section>
  );
};

export default DesignProcessSection;
