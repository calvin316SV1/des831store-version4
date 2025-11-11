
import React from 'react';
import HeroSection from './components/HeroSection';
import ServicesSection from './components/ServicesSection';
import DesignProcessSection from './components/DesignProcessSection';
import ProductsSection from './components/ProductsSection';
import ContactSection from './components/ContactSection';

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <ServicesSection />
      <DesignProcessSection />
      <ProductsSection />
      <ContactSection />
    </div>
  );
};

export default HomePage;
