
import React from 'react';
import { useLanguage, Language } from '../contexts/LanguageContext';

const LanguageSwitcher: React.FC = () => {
  const { language, setLanguage } = useLanguage();

  const handleLanguageChange = (lang: Language) => {
    setLanguage(lang);
  };

  return (
    <div className="fixed top-4 right-4 z-50 flex bg-white rounded-full shadow-lg border border-gray-200 overflow-hidden">
      <button
        onClick={() => handleLanguageChange('es')}
        className={`px-3 py-2 text-xs sm:text-sm font-medium transition-all duration-200 cursor-pointer whitespace-nowrap ${
          language === 'es'
            ? 'bg-orange-500 text-white'
            : 'text-gray-700 hover:bg-gray-50'
        }`}
      >
        ES
      </button>
      <button
        onClick={() => handleLanguageChange('en')}
        className={`px-3 py-2 text-xs sm:text-sm font-medium transition-all duration-200 cursor-pointer whitespace-nowrap ${
          language === 'en'
            ? 'bg-orange-500 text-white'
            : 'text-gray-700 hover:bg-gray-50'
        }`}
      >
        EN
      </button>
    </div>
  );
};

export default LanguageSwitcher;
