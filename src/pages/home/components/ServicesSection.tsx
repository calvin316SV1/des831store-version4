import React from 'react';
import Button from '../../../components/base/Button';
import { useLanguage } from '../../../contexts/LanguageContext';

const ServicesSection: React.FC = () => {
  const { t } = useLanguage();

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 sm:mb-6">
            {t('services.title')}
          </h2>
          <p className="text-lg sm:text-xl lg:text-2xl text-gray-600 max-w-4xl mx-auto px-4">
            {t('services.subtitle')}
          </p>
        </div>

        {/* Featured Service - Graphic Design */}
        <div className="mb-12 sm:mb-16 lg:mb-20">
          <div className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl p-6 sm:p-8 lg:p-12 text-white shadow-2xl">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              <div className="order-2 lg:order-1">
                <div className="inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 bg-white/20 rounded-full mb-4 sm:mb-6">
                  <i className="ri-palette-line text-2xl sm:text-3xl"></i>
                </div>
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6">
                  {t('services.graphic.title')}
                </h3>
                <p className="text-lg sm:text-xl lg:text-2xl mb-6 sm:mb-8 text-orange-100">
                  {t('services.graphic.description')}
                </p>
                <ul className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
                  <li className="flex items-center text-sm sm:text-base lg:text-lg">
                    <i className="ri-check-line text-xl sm:text-2xl mr-3 flex-shrink-0"></i>
                    <span>{t('services.graphic.feature1')}</span>
                  </li>
                  <li className="flex items-center text-sm sm:text-base lg:text-lg">
                    <i className="ri-check-line text-xl sm:text-2xl mr-3 flex-shrink-0"></i>
                    <span>{t('services.graphic.feature2')}</span>
                  </li>
                  <li className="flex items-center text-sm sm:text-base lg:text-lg">
                    <i className="ri-check-line text-xl sm:text-2xl mr-3 flex-shrink-0"></i>
                    <span>{t('services.graphic.feature3')}</span>
                  </li>
                  <li className="flex items-center text-sm sm:text-base lg:text-lg">
                    <i className="ri-check-line text-xl sm:text-2xl mr-3 flex-shrink-0"></i>
                    <span>{t('services.graphic.feature4')}</span>
                  </li>
                </ul>
                <Button 
                  variant="outline" 
                  size="lg"
                  onClick={scrollToContact}
                  className="w-full sm:w-auto border-white text-white hover:bg-white hover:text-orange-600 whitespace-nowrap"
                >
                  {t('services.cta')}
                </Button>
              </div>
              <div className="relative order-1 lg:order-2">
                <img 
                  src="https://readdy.ai/api/search-image?query=Professional%20graphic%20designer%20working%20on%20creative%20logo%20design%20projects%2C%20modern%20computer%20setup%20with%20design%20software%2C%20colorful%20brand%20identity%20materials%2C%20sketches%20and%20color%20palettes%2C%20bright%20studio%20lighting%2C%20creative%20workspace%20atmosphere%2C%20orange%20accent%20elements&width=600&height=400&seq=graphic-design-001&orientation=landscape"
                  alt={t('services.graphic.title')}
                  className="rounded-xl shadow-lg object-cover w-full h-64 sm:h-80 lg:h-96"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Other Services Grid */}
        <div className="grid md:grid-cols-2 gap-6 sm:gap-8 lg:gap-12">
          {/* T-Shirt Printing */}
          <div className="bg-white rounded-xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 transform">
            <div className="w-12 h-12 sm:w-16 sm:h-16 bg-orange-100 rounded-full flex items-center justify-center mb-4 sm:mb-6">
              <i className="ri-t-shirt-line text-2xl sm:text-3xl text-orange-600"></i>
            </div>
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-4 sm:mb-6">
              {t('services.printing.title')}
            </h3>
            <p className="text-gray-600 mb-4 sm:mb-6 text-sm sm:text-base">
              {t('services.printing.description')}
            </p>
            <ul className="space-y-2 sm:space-y-3 mb-4 sm:mb-6">
              <li className="flex items-center text-gray-700 text-sm sm:text-base">
                <i className="ri-check-line text-orange-500 mr-2 flex-shrink-0"></i>
                <span>{t('services.printing.feature1')}</span>
              </li>
              <li className="flex items-center text-gray-700 text-sm sm:text-base">
                <i className="ri-check-line text-orange-500 mr-2 flex-shrink-0"></i>
                <span>{t('services.printing.feature2')}</span>
              </li>
              <li className="flex items-center text-gray-700 text-sm sm:text-base">
                <i className="ri-check-line text-orange-500 mr-2 flex-shrink-0"></i>
                <span>{t('services.printing.feature3')}</span>
              </li>
              <li className="flex items-center text-gray-700 text-sm sm:text-base">
                <i className="ri-check-line text-orange-500 mr-2 flex-shrink-0"></i>
                <span>{t('services.printing.feature4')}</span>
              </li>
            </ul>
            <img 
              src="https://readdy.ai/api/search-image?query=Professional%20t-shirt%20printing%20workshop%20with%20screen%20printing%20equipment%2C%20colorful%20custom%20printed%20shirts%20displayed%2C%20modern%20printing%20machinery%2C%20vibrant%20textile%20inks%2C%20clean%20industrial%20workspace%2C%20orange%20color%20accents&width=400&height=250&seq=printing-001&orientation=landscape"
              alt={t('services.printing.title')}
              className="w-full h-40 sm:h-48 object-cover rounded-lg mb-4 sm:mb-6"
            />
            <Button onClick={scrollToContact} className="w-full whitespace-nowrap">
              {t('services.cta')}
            </Button>
          </div>

          {/* Personalized Gifts */}
          <div className="bg-white rounded-xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 transform">
            <div className="w-12 h-12 sm:w-16 sm:h-16 bg-orange-100 rounded-full flex items-center justify-center mb-4 sm:mb-6">
              <i className="ri-gift-line text-2xl sm:text-3xl text-orange-600"></i>
            </div>
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-4 sm:mb-6">
              {t('services.gifts.title')}
            </h3>
            <p className="text-gray-600 mb-4 sm:mb-6 text-sm sm:text-base">
              {t('services.gifts.description')}
            </p>
            <ul className="space-y-2 sm:space-y-3 mb-4 sm:mb-6">
              <li className="flex items-center text-gray-700 text-sm sm:text-base">
                <i className="ri-check-line text-orange-500 mr-2 flex-shrink-0"></i>
                <span>{t('services.gifts.feature1')}</span>
              </li>
              <li className="flex items-center text-gray-700 text-sm sm:text-base">
                <i className="ri-check-line text-orange-500 mr-2 flex-shrink-0"></i>
                <span>{t('services.gifts.feature2')}</span>
              </li>
              <li className="flex items-center text-gray-700 text-sm sm:text-base">
                <i className="ri-check-line text-orange-500 mr-2 flex-shrink-0"></i>
                <span>{t('services.gifts.feature3')}</span>
              </li>
              <li className="flex items-center text-gray-700 text-sm sm:text-base">
                <i className="ri-check-line text-orange-500 mr-2 flex-shrink-0"></i>
                <span>{t('services.gifts.feature4')}</span>
              </li>
            </ul>
            <img 
              src="https://static.readdy.ai/image/c20aca5312312f77b05f596981163b7e/18a201c5f0aaa1723271b961b5e72a64.jpeg"
              alt="Regalos Personalizados" 
              className="w-full h-40 sm:h-48 object-cover rounded-lg mb-4 sm:mb-6"
            />
            <Button onClick={scrollToContact} className="w-full whitespace-nowrap">
              {t('services.cta')}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
