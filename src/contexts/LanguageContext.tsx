import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

export type Language = 'es' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

interface LanguageProviderProps {
  children: ReactNode;
}

const translations = {
  es: {
    // Header
    'nav.home': 'Inicio',
    'nav.services': 'Servicios',
    'nav.products': 'Productos',
    'nav.contact': 'Contacto',
    'nav.getQuote': 'Cotizar',
    
    // Hero Section
    'hero.title': 'Diseño Profesional & Impresión Personalizada',
    'hero.subtitle': 'Transformamos tus ideas en realidad con diseños únicos y productos personalizados de alta calidad',
    'hero.cta.primary': 'Comenzar Proyecto',
    'hero.cta.secondary': 'Ver Portafolio',
    
    // Services Section
    'services.title': 'Nuestros Servicios',
    'services.subtitle': 'Soluciones completas de diseño e impresión para tu marca',
    'services.graphic.title': 'Diseño Gráfico',
    'services.graphic.description': 'Creamos identidades visuales únicas que destacan tu marca',
    'services.graphic.feature1': 'Diseño de logos y marca',
    'services.graphic.feature2': 'Material publicitario',
    'services.graphic.feature3': 'Diseño web y digital',
    'services.graphic.feature4': 'Consultoría creativa',
    'services.printing.title': 'Impresión de Camisetas',
    'services.printing.description': 'Impresión de alta calidad en textiles con técnicas profesionales',
    'services.printing.feature1': 'Serigrafía profesional',
    'services.printing.feature2': 'Impresión digital DTF',
    'services.printing.feature3': 'Bordado personalizado',
    'services.printing.feature4': 'Variedad de textiles',
    'services.gifts.title': 'Regalos Personalizados',
    'services.gifts.description': 'Productos únicos personalizados para ocasiones especiales',
    'services.gifts.feature1': 'Tazas y termos',
    'services.gifts.feature2': 'Artículos promocionales',
    'services.gifts.feature3': 'Decoración personalizada',
    'services.gifts.feature4': 'Llaveros y gorras personalizadas',
    'services.cta': 'Solicitar Cotización',
    
    // Design Process Section
    'process.title': 'Nuestro Proceso de Diseño',
    'process.subtitle': 'Un enfoque profesional paso a paso para garantizar resultados excepcionales',
    'process.step1.title': 'Consulta',
    'process.step1.description': 'Entendemos tus necesidades, objetivos y visión para el proyecto',
    'process.step2.title': 'Diseño Creativo',
    'process.step2.description': 'Desarrollamos conceptos únicos y propuestas visuales innovadoras',
    'process.step3.title': 'Revisión y Refinamiento',
    'process.step3.description': 'Perfeccionamos el diseño basado en tu feedback hasta lograr la perfección',
    'process.step4.title': 'Producción',
    'process.step4.description': 'Ejecutamos el proyecto final con los más altos estándares de calidad',
    'process.cta': 'Iniciar Proyecto',
    
    // Products Section
    'products.title': 'Nuestros Productos',
    'products.subtitle': 'Explora nuestra amplia gama de productos personalizables',
    'products.filter.all': 'Todos',
    'products.filter.tshirts': 'Camisetas',
    'products.filter.hoodies': 'Sudaderas',
    'products.filter.gifts': 'Regalos',
    'products.customize': 'Personalizar Ahora',
    
    // Contact Section
    'contact.title': 'Contáctanos',
    'contact.subtitle': 'Estamos listos para hacer realidad tu próximo proyecto',
    'contact.form.name': 'Nombre completo',
    'contact.form.email': 'Correo electrónico',
    'contact.form.phone': 'Teléfono',
    'contact.form.service': 'Servicio de interés',
    'contact.form.service.graphic': 'Diseño Gráfico',
    'contact.form.service.printing': 'Impresión de Camisetas',
    'contact.form.service.gifts': 'Regalos Personalizados',
    'contact.form.service.other': 'Otro',
    'contact.form.message': 'Describe tu proyecto',
    'contact.form.submit': 'Enviar Mensaje',
    'contact.info.title': 'Información de Contacto',
    'contact.info.address': 'Dirección',
    'contact.info.phone': 'Teléfono',
    'contact.info.email': 'Email',
    'contact.info.hours': 'Horarios',
    
    // Footer
    'footer.company.title': 'DES 831',
    'footer.company.description': 'Tu socio creativo para diseño profesional e impresión personalizada de alta calidad.',
    'footer.quickLinks.title': 'Enlaces Rápidos',
    'footer.services.title': 'Servicios',
    'footer.contact.title': 'Contacto',
    'footer.copyright': '© 2024 DES 831. Todos los derechos reservados.',
    'footer.poweredBy': 'Desarrollado por Readdy'
  },
  en: {
    // Header
    'nav.home': 'Home',
    'nav.services': 'Services',
    'nav.products': 'Products',
    'nav.contact': 'Contact',
    'nav.getQuote': 'Get Quote',
    
    // Hero Section
    'hero.title': 'Professional Design & Custom Printing',
    'hero.subtitle': 'We transform your ideas into reality with unique designs and high-quality personalized products',
    'hero.cta.primary': 'Start Project',
    'hero.cta.secondary': 'View Portfolio',
    
    // Services Section
    'services.title': 'Our Services',
    'services.subtitle': 'Complete design and printing solutions for your brand',
    'services.graphic.title': 'Graphic Design',
    'services.graphic.description': 'We create unique visual identities that make your brand stand out',
    'services.graphic.feature1': 'Logo and brand design',
    'services.graphic.feature2': 'Marketing materials',
    'services.graphic.feature3': 'Web and digital design',
    'services.graphic.feature4': 'Creative consulting',
    'services.printing.title': 'T-Shirt Printing',
    'services.printing.description': 'High-quality textile printing with professional techniques',
    'services.printing.feature1': 'Professional screen printing',
    'services.printing.feature2': 'DTF digital printing',
    'services.printing.feature3': 'Custom embroidery',
    'services.printing.feature4': 'Variety of textiles',
    'services.gifts.title': 'Personalized Gifts',
    'services.gifts.description': 'Unique personalized products for special occasions',
    'services.gifts.feature1': 'Mugs and tumblers',
    'services.gifts.feature2': 'Promotional items',
    'services.gifts.feature3': 'Custom decoration',
    'services.gifts.feature4': 'Custom keychains and caps',
    'services.cta': 'Request Quote',
    
    // Design Process Section
    'process.title': 'Our Design Process',
    'process.subtitle': 'A professional step-by-step approach to ensure exceptional results',
    'process.step1.title': 'Consultation',
    'process.step1.description': 'We understand your needs, goals and vision for the project',
    'process.step2.title': 'Creative Design',
    'process.step2.description': 'We develop unique concepts and innovative visual proposals',
    'process.step3.title': 'Review & Refinement',
    'process.step3.description': 'We perfect the design based on your feedback until achieving perfection',
    'process.step4.title': 'Production',
    'process.step4.description': 'We execute the final project with the highest quality standards',
    'process.cta': 'Start Project',
    
    // Products Section
    'products.title': 'Our Products',
    'products.subtitle': 'Explore our wide range of customizable products',
    'products.filter.all': 'All',
    'products.filter.tshirts': 'T-Shirts',
    'products.filter.hoodies': 'Hoodies',
    'products.filter.gifts': 'Gifts',
    'products.customize': 'Customize Now',
    
    // Contact Section
    'contact.title': 'Contact Us',
    'contact.subtitle': 'We are ready to bring your next project to life',
    'contact.form.name': 'Full name',
    'contact.form.email': 'Email address',
    'contact.form.phone': 'Phone',
    'contact.form.service': 'Service of interest',
    'contact.form.service.graphic': 'Graphic Design',
    'contact.form.service.printing': 'T-Shirt Printing',
    'contact.form.service.gifts': 'Personalized Gifts',
    'contact.form.service.other': 'Other',
    'contact.form.message': 'Describe your project',
    'contact.form.submit': 'Send Message',
    'contact.info.title': 'Contact Information',
    'contact.info.address': 'Address',
    'contact.info.phone': 'Phone',
    'contact.info.email': 'Email',
    'contact.info.hours': 'Hours',
    
    // Footer
    'footer.company.title': 'DES 831',
    'footer.company.description': 'Your creative partner for professional design and high-quality custom printing.',
    'footer.quickLinks.title': 'Quick Links',
    'footer.services.title': 'Services',
    'footer.contact.title': 'Contact',
    'footer.copyright': '© 2024 DES 831. All rights reserved.',
    'footer.poweredBy': 'Powered by Readdy'
  }
};

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>('es');

  useEffect(() => {
    const savedLanguage = localStorage.getItem('language') as Language;
    if (savedLanguage && (savedLanguage === 'es' || savedLanguage === 'en')) {
      setLanguageState(savedLanguage);
    }
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('language', lang);
  };

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
