
import React, { useState } from 'react';
import Button from '../../../components/base/Button';
import { useLanguage } from '../../../contexts/LanguageContext';

interface Product {
  id: number;
  name: string;
  category: string;
  rating: number;
  image: string;
  images: { color: string; url: string }[];
  description: string;
  features: string[];
  materials: string;
  sizes: string[];
  colors: string[];
  care: string;
}

const ProductsSection: React.FC = () => {
  const { t } = useLanguage();
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState<{ [key: number]: number }>({});

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const products: Product[] = [
    {
      id: 1,
      name: 'Camiseta Básica Premium',
      category: 'tshirts',
      rating: 4.8,
      image: 'https://readdy.ai/api/search-image?query=Young%20attractive%20model%20wearing%20premium%20basic%20t-shirt%2C%20high-quality%20cotton%20fabric%20with%20soft%20texture%2C%20elegant%20fit%2C%20professional%20fashion%20photography%2C%20clean%20studio%20background%2C%20modern%20casual%20style%2C%20person%20showing%20the%20premium%20quality%20and%20comfort%20of%20the%20garment%2C%20natural%20lighting%2C%20white%20color%20t-shirt&width=300&height=300&seq=tshirt-premium-white-001&orientation=squarish',
      images: [
        { color: 'Blanco', url: 'https://readdy.ai/api/search-image?query=Young%20attractive%20model%20wearing%20premium%20basic%20t-shirt%2C%20high-quality%20cotton%20fabric%20with%20soft%20texture%2C%20elegant%20fit%2C%20professional%20fashion%20photography%2C%20clean%20studio%20background%2C%20modern%20casual%20style%2C%20person%20showing%20the%20premium%20quality%20and%20comfort%20of%20the%20garment%2C%20natural%20lighting%2C%20white%20color%20t-shirt&width=300&height=300&seq=tshirt-premium-white-001&orientation=squarish' },
        { color: 'Negro', url: 'https://readdy.ai/api/search-image?query=Young%20attractive%20model%20wearing%20premium%20basic%20t-shirt%2C%20high-quality%20cotton%20fabric%20with%20soft%20texture%2C%20elegant%20fit%2C%20professional%20fashion%20photography%2C%20clean%20studio%20background%2C%20modern%20casual%20style%2C%20person%20showing%20the%20premium%20quality%20and%20comfort%20of%20the%20garment%2C%20natural%20lighting%2C%20black%20color%20t-shirt&width=300&height=300&seq=tshirt-premium-black-001&orientation=squarish' },
        { color: 'Gris', url: 'https://readdy.ai/api/search-image?query=Young%20attractive%20model%20wearing%20premium%20basic%20t-shirt%2C%20high-quality%20cotton%20fabric%20with%20soft%20texture%2C%20elegant%20fit%2C%20professional%20fashion%20photography%2C%20clean%20studio%20background%2C%20modern%20casual%20style%2C%20person%20showing%20the%20premium%20quality%20and%20comfort%20of%20the%20garment%2C%20natural%20lighting%2C%20gray%20color%20t-shirt&width=300&height=300&seq=tshirt-premium-gray-001&orientation=squarish' },
        { color: 'Azul Marino', url: 'https://readdy.ai/api/search-image?query=Young%20attractive%20model%20wearing%20premium%20basic%20t-shirt%2C%20high-quality%20cotton%20fabric%20with%20soft%20texture%2C%20elegant%20fit%2C%20professional%20fashion%20photography%2C%20clean%20studio%20background%2C%20modern%20casual%20style%2C%20person%20showing%20the%20premium%20quality%20and%20comfort%20of%20the%20garment%2C%20natural%20lighting%2C%20navy%20blue%20color%20t-shirt&width=300&height=300&seq=tshirt-premium-navy-001&orientation=squarish' },
        { color: 'Rojo', url: 'https://readdy.ai/api/search-image?query=Young%20attractive%20model%20wearing%20premium%20basic%20t-shirt%2C%20high-quality%20cotton%20fabric%20with%20soft%20texture%2C%20elegant%20fit%2C%20professional%20fashion%20photography%2C%20clean%20studio%20background%2C%20modern%20casual%20style%2C%20person%20showing%20the%20premium%20quality%20and%20comfort%20of%20the%20garment%2C%20natural%20lighting%2C%20red%20color%20t-shirt&width=300&height=300&seq=tshirt-premium-red-001&orientation=squarish' }
      ],
      description: 'Camiseta básica de alta calidad confeccionada con algodón 100% premium. Diseño clásico y versátil perfecto para uso diario.',
      features: ['Corte clásico unisex', 'Cuello reforzado', 'Costuras dobles', 'Pre-encogida'],
      materials: '100% Algodón Premium (180 gsm)',
      sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
      colors: ['Blanco', 'Negro', 'Gris', 'Azul Marino', 'Rojo'],
      care: 'Lavar a máquina agua fría, no usar blanqueador, secar a baja temperatura'
    },
    {
      id: 2,
      name: 'Sudadera con Capucha',
      category: 'hoodies',
      rating: 4.9,
      image: 'https://readdy.ai/api/search-image?query=Stylish%20young%20person%20wearing%20comfortable%20hooded%20sweatshirt%2C%20cozy%20and%20relaxed%20fit%2C%20model%20showing%20the%20hoodie%20in%20casual%20lifestyle%20setting%2C%20professional%20fashion%20photography%2C%20clean%20background%2C%20modern%20urban%20style%2C%20soft%20fabric%20texture%20visible%2C%20black%20color%20hoodie&width=300&height=300&seq=hoodie-black-001&orientation=squarish',
      images: [
        { color: 'Negro', url: 'https://readdy.ai/api/search-image?query=Stylish%20young%20person%20wearing%20comfortable%20hooded%20sweatshirt%2C%20cozy%20and%20relaxed%20fit%2C%20model%20showing%20the%20hoodie%20in%20casual%20lifestyle%20setting%2C%20professional%20fashion%20photography%2C%20clean%20background%2C%20modern%20urban%20style%2C%20soft%20fabric%20texture%20visible%2C%20black%20color%20hoodie&width=300&height=300&seq=hoodie-black-001&orientation=squarish' },
        { color: 'Gris Melange', url: 'https://readdy.ai/api/search-image?query=Stylish%20young%20person%20wearing%20comfortable%20hooded%20sweatshirt%2C%20cozy%20and%20relaxed%20fit%2C%20model%20showing%20the%20hoodie%20in%20casual%20lifestyle%20setting%2C%20professional%20fashion%20photography%2C%20clean%20background%2C%20modern%20urban%20style%2C%20soft%20fabric%20texture%20visible%2C%20gray%20melange%20color%20hoodie&width=300&height=300&seq=hoodie-gray-001&orientation=squarish' },
        { color: 'Azul Marino', url: 'https://readdy.ai/api/search-image?query=Stylish%20young%20person%20wearing%20comfortable%20hooded%20sweatshirt%2C%20cozy%20and%20relaxed%20fit%2C%20model%20showing%20the%20hoodie%20in%20casual%20lifestyle%20setting%2C%20professional%20fashion%20photography%2C%20clean%20background%2C%20modern%20urban%20style%2C%20soft%20fabric%20texture%20visible%2C%20navy%20blue%20color%20hoodie&width=300&height=300&seq=hoodie-navy-001&orientation=squarish' },
        { color: 'Burdeos', url: 'https://readdy.ai/api/search-image?query=Stylish%20young%20person%20wearing%20comfortable%20hooded%20sweatshirt%2C%20cozy%20and%20relaxed%20fit%2C%20model%20showing%20the%20hoodie%20in%20casual%20lifestyle%20setting%2C%20professional%20fashion%20photography%2C%20clean%20background%2C%20modern%20urban%20style%2C%20soft%20fabric%20texture%20visible%2C%20burgundy%20color%20hoodie&width=300&height=300&seq=hoodie-burgundy-001&orientation=squarish' }
      ],
      description: 'Sudadera con capucha de máxima comodidad. Perfecta para días frescos con su interior afelpado y ajuste relajado.',
      features: ['Capucha ajustable con cordones', 'Bolsillo canguro frontal', 'Puños y dobladillo elásticos', 'Interior afelpado'],
      materials: '80% Algodón, 20% Poliéster (320 gsm)',
      sizes: ['S', 'M', 'L', 'XL', 'XXL'],
      colors: ['Negro', 'Gris Melange', 'Azul Marino', 'Burdeos'],
      care: 'Lavar a máquina agua tibia, secar a temperatura media, planchar a baja temperatura'
    },
    {
      id: 3,
      name: 'Taza Personalizada',
      category: 'gifts',
      rating: 4.7,
      image: 'https://static.readdy.ai/image/c20aca5312312f77b05f596981163b7e/f48c678609bcbfc48833bfffb1636e4d.jpeg',
      images: [
        { color: 'Blanco', url: 'https://static.readdy.ai/image/c20aca5312312f77b05f596981163b7e/f48c678609bcbfc48833bfffb1636e4d.jpeg' }
      ],
      description: 'Taza de cerámica de alta calidad perfecta para personalizar con tu diseño favorito. Ideal para regalos únicos.',
      features: ['Impresión de alta resolución', 'Resistente al microondas', 'Apta para lavavajillas', 'Diseño ergonómico'],
      materials: 'Cerámica de grado alimentario',
      sizes: ['330ml (11 oz)', '450ml (15 oz)'],
      colors: ['Blanco'],
      care: 'Apta para lavavajillas y microondas, evitar cambios bruscos de temperatura'
    },
    {
      id: 4,
      name: 'Camiseta Deportiva',
      category: 'tshirts',
      rating: 4.6,
      image: 'https://readdy.ai/api/search-image?query=Athletic%20young%20model%20wearing%20performance%20sports%20t-shirt%2C%20moisture-wicking%20fabric%2C%20fitted%20athletic%20cut%2C%20person%20in%20active%20pose%20showing%20the%20sporty%20design%2C%20professional%20sports%20photography%2C%20gym%20or%20outdoor%20setting%2C%20modern%20athletic%20wear%2C%20black%20color%20sports%20shirt&width=300&height=300&seq=tshirt-sport-black-001&orientation=squarish',
      images: [
        { color: 'Negro', url: 'https://readdy.ai/api/search-image?query=Athletic%20young%20model%20wearing%20performance%20sports%20t-shirt%2C%20moisture-wicking%20fabric%2C%20fitted%20athletic%20cut%2C%20person%20in%20active%20pose%20showing%20the%20sporty%20design%2C%20professional%20sports%20photography%2C%20gym%20or%20outdoor%20setting%2C%20modern%20athletic%20wear%2C%20black%20color%20sports%20shirt&width=300&height=300&seq=tshirt-sport-black-001&orientation=squarish' },
        { color: 'Blanco', url: 'https://readdy.ai/api/search-image?query=Athletic%20young%20model%20wearing%20performance%20sports%20t-shirt%2C%20moisture-wicking%20fabric%2C%20fitted%20athletic%20cut%2C%20person%20in%20active%20pose%20showing%20the%20sporty%20design%2C%20professional%20sports%20photography%2C%20gym%20or%20outdoor%20setting%2C%20modern%20athletic%20wear%2C%20white%20color%20sports%20shirt&width=300&height=300&seq=tshirt-sport-white-001&orientation=squarish' },
        { color: 'Azul Royal', url: 'https://readdy.ai/api/search-image?query=Athletic%20young%20model%20wearing%20performance%20sports%20t-shirt%2C%20moisture-wicking%20fabric%2C%20fitted%20athletic%20cut%2C%20person%20in%20active%20pose%20showing%20the%20sporty%20design%2C%20professional%20sports%20photography%2C%20gym%20or%20outdoor%20setting%2C%20modern%20athletic%20wear%2C%20royal%20blue%20color%20sports%20shirt&width=300&height=300&seq=tshirt-sport-blue-001&orientation=squarish' },
        { color: 'Rojo', url: 'https://readdy.ai/api/search-image?query=Athletic%20young%20model%20wearing%20performance%20sports%20t-shirt%2C%20moisture-wicking%20fabric%2C%20fitted%20athletic%20cut%2C%20person%20in%20active%20pose%20showing%20the%20sporty%20design%2C%20professional%20sports%20photography%2C%20gym%20or%20outdoor%20setting%2C%20modern%20athletic%20wear%2C%20red%20color%20sports%20shirt&width=300&height=300&seq=tshirt-sport-red-001&orientation=squarish' },
        { color: 'Verde', url: 'https://readdy.ai/api/search-image?query=Athletic%20young%20model%20wearing%20performance%20sports%20t-shirt%2C%20moisture-wicking%20fabric%2C%20fitted%20athletic%20cut%2C%20person%20in%20active%20pose%20showing%20the%20sporty%20design%2C%20professional%20sports%20photography%2C%20gym%20or%20outdoor%20setting%2C%20modern%20athletic%20wear%2C%20green%20color%20sports%20shirt&width=300&height=300&seq=tshirt-sport-green-001&orientation=squarish' }
      ],
      description: 'Camiseta deportiva de alto rendimiento con tecnología de absorción de humedad. Ideal para entrenamientos y actividades físicas.',
      features: ['Tecnología Dri-FIT', 'Corte atlético', 'Costuras planas', 'Protección UV'],
      materials: '100% Poliéster técnico (140 gsm)',
      sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
      colors: ['Negro', 'Blanco', 'Azul Royal', 'Rojo', 'Verde'],
      care: 'Lavar a máquina agua fría, no usar suavizante, secar al aire'
    },
    {
      id: 5,
      name: 'Sudadera Zip',
      category: 'hoodies',
      rating: 4.8,
      image: 'https://readdy.ai/api/search-image?query=Trendy%20young%20person%20wearing%20zip-up%20hoodie%20sweatshirt%2C%20modern%20casual%20style%2C%20model%20showing%20the%20zipper%20detail%20and%20comfortable%20fit%2C%20professional%20fashion%20photography%2C%20urban%20background%2C%20contemporary%20design%2C%20black%20color%20zip%20hoodie&width=300&height=300&seq=zip-hoodie-black-001&orientation=squarish',
      images: [
        { color: 'Negro', url: 'https://readdy.ai/api/search-image?query=Trendy%20young%20person%20wearing%20zip-up%20hoodie%20sweatshirt%2C%20modern%20casual%20style%2C%20model%20showing%20the%20zipper%20detail%20and%20comfortable%20fit%2C%20professional%20fashion%20photography%2C%20urban%20background%2C%20contemporary%20design%2C%20black%20color%20zip%20hoodie&width=300&height=300&seq=zip-hoodie-black-001&orientation=squarish' },
        { color: 'Gris', url: 'https://readdy.ai/api/search-image?query=Trendy%20young%20person%20wearing%20zip-up%20hoodie%20sweatshirt%2C%20modern%20casual%20style%2C%20model%20showing%20the%20zipper%20detail%20and%20comfortable%20fit%2C%20professional%20fashion%20photography%2C%20urban%20background%2C%20contemporary%20design%2C%20gray%20color%20zip%20hoodie&width=300&height=300&seq=zip-hoodie-gray-001&orientation=squarish' },
        { color: 'Azul Marino', url: 'https://readdy.ai/api/search-image?query=Trendy%20young%20person%20wearing%20zip-up%20hoodie%20sweatshirt%2C%20modern%20casual%20style%2C%20model%20showing%20the%20zipper%20detail%20and%20comfortable%20fit%2C%20professional%20fashion%20photography%2C%20urban%20background%2C%20contemporary%20design%2C%20navy%20blue%20color%20zip%20hoodie&width=300&height=300&seq=zip-hoodie-navy-001&orientation=squarish' },
        { color: 'Verde Oliva', url: 'https://readdy.ai/api/search-image?query=Trendy%20young%20person%20wearing%20zip-up%20hoodie%20sweatshirt%2C%20modern%20casual%20style%2C%20model%20showing%20the%20zipper%20detail%20and%20comfortable%20fit%2C%20professional%20fashion%20photography%2C%20urban%20background%2C%20contemporary%20design%2C%20olive%20green%20color%20zip%20hoodie&width=300&height=300&seq=zip-hoodie-olive-001&orientation=squarish' }
      ],
      description: 'Sudadera con cremallera completa de estilo moderno. Versátil y cómoda para cualquier ocasión casual.',
      features: ['Cremallera YKK de calidad', 'Dos bolsillos laterales', 'Capucha forrada', 'Corte moderno'],
      materials: '65% Algodón, 35% Poliéster (280 gsm)',
      sizes: ['S', 'M', 'L', 'XL', 'XXL'],
      colors: ['Negro', 'Gris', 'Azul Marino', 'Verde Oliva'],
      care: 'Lavar a máquina agua tibia, cerrar cremallera antes del lavado, secar a baja temperatura'
    },
    {
      id: 6,
      name: 'Set de Regalos Corporativos',
      category: 'gifts',
      rating: 4.9,
      image: 'https://readdy.ai/api/search-image?query=Elegant%20corporate%20gift%20set%20with%20laser-engraved%20leather%20agenda%20with%20company%20logo%2C%20premium%20fine%20pen%2C%20luxury%20wooden%20keychain%20with%20personalized%20laser%20engraving%2C%20professional%20presentation%20in%20elegant%20box%2C%20business%20promotional%20products%2C%20black%20leather%20materials&width=300&height=300&seq=corporate-gifts-black-001&orientation=squarish',
      images: [
        { color: 'Negro', url: 'https://readdy.ai/api/search-image?query=Elegant%20corporate%20gift%20set%20with%20laser-engraved%20leather%20agenda%20with%20company%20logo%2C%20premium%20fine%20pen%2C%20luxury%20wooden%20keychain%20with%20personalized%20laser%20engraving%2C%20professional%20presentation%20in%20elegant%20box%2C%20business%20promotional%20products%2C%20black%20leather%20materials&width=300&height=300&seq=corporate-gifts-black-001&orientation=squarish' },
        { color: 'Marrón', url: 'https://readdy.ai/api/search-image?query=Elegant%20corporate%20gift%20set%20with%20laser-engraved%20leather%20agenda%20with%20company%20logo%2C%20premium%20fine%20pen%2C%20luxury%20wooden%20keychain%20with%20personalized%20laser%20engraving%2C%20professional%20presentation%20in%20elegant%20box%2C%20business%20promotional%20products%2C%20brown%20leather%20materials&width=300&height=300&seq=corporate-gifts-brown-001&orientation=squarish' }
      ],
      description: 'Set ejecutivo de regalos corporativos de lujo. Incluye agenda de cuero, bolígrafo premium y llavero personalizado.',
      features: ['Grabado láser de precisión', 'Materiales premium', 'Presentación en caja elegante', 'Personalización completa'],
      materials: 'Cuero genuino, metal premium, madera noble',
      sizes: ['Set estándar', 'Set ejecutivo', 'Set premium'],
      colors: ['Negro', 'Marrón'],
      care: 'Limpiar con paño seco, evitar humedad excesiva, guardar en lugar seco'
    }
  ];

  const getColorStyle = (color: string) => {
    const colorMap: { [key: string]: string } = {
      'Blanco': '#FFFFFF',
      'Negro': '#000000',
      'Gris': '#808080',
      'Gris Melange': '#A0A0A0',
      'Azul Marino': '#1E3A8A',
      'Azul Royal': '#1E40AF',
      'Rojo': '#DC2626',
      'Verde': '#16A34A',
      'Verde Oliva': '#65A30D',
      'Burdeos': '#7C2D12',
      'Marrón': '#92400E'
    };
    return colorMap[color] || '#808080';
  };

  const getCurrentImage = (product: Product) => {
    const currentIndex = currentImageIndex[product.id] || 0;
    return product.images[currentIndex]?.url || product.image;
  };

  const nextImage = (productId: number, totalImages: number) => {
    setCurrentImageIndex(prev => ({
      ...prev,
      [productId]: ((prev[productId] || 0) + 1) % totalImages
    }));
  };

  const prevImage = (productId: number, totalImages: number) => {
    setCurrentImageIndex(prev => ({
      ...prev,
      [productId]: ((prev[productId] || 0) - 1 + totalImages) % totalImages
    }));
  };

  const setImageByIndex = (productId: number, index: number) => {
    setCurrentImageIndex(prev => ({
      ...prev,
      [productId]: index
    }));
  };

  const filteredProducts = activeFilter === 'all' 
    ? products 
    : products.filter(product => product.category === activeFilter);

  const filters = [
    { key: 'all', label: t('products.filter.all') },
    { key: 'tshirts', label: t('products.filter.tshirts') },
    { key: 'hoodies', label: t('products.filter.hoodies') },
    { key: 'gifts', label: t('products.filter.gifts') }
  ];

  const openModal = (product: Product) => {
    setSelectedProduct(product);
  };

  const closeModal = () => {
    setSelectedProduct(null);
  };

  return (
    <section id="products" className="py-16 sm:py-20 lg:py-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 sm:mb-6">
            {t('products.title')}
          </h2>
          <p className="text-lg sm:text-xl lg:text-2xl text-gray-600 max-w-4xl mx-auto px-4">
            {t('products.subtitle')}
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-12 sm:mb-16 px-4">
          {filters.map((filter) => (
            <button
              key={filter.key}
              onClick={() => setActiveFilter(filter.key)}
              className={`px-4 sm:px-6 py-2 sm:py-3 rounded-full font-medium transition-all duration-200 cursor-pointer whitespace-nowrap text-sm sm:text-base ${
                activeFilter === filter.key
                  ? 'bg-orange-500 text-white shadow-lg transform scale-105'
                  : 'bg-white text-gray-700 hover:bg-orange-50 hover:text-orange-600 shadow-md hover:shadow-lg'
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10" data-product-shop>
          {filteredProducts.map((product) => (
            <div 
              key={product.id} 
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group hover:-translate-y-2 transform"
              data-product-shop
            >
              <div className="relative overflow-hidden">
                <img 
                  src={getCurrentImage(product)}
                  alt={product.name}
                  className="w-full h-48 sm:h-56 lg:h-64 object-cover group-hover:scale-105 transition-transform duration-300 cursor-pointer"
                  onClick={() => openModal(product)}
                />
                
                {/* Carousel Controls */}
                {product.images.length > 1 && (
                  <>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        prevImage(product.id, product.images.length);
                      }}
                      className="absolute left-2 top-1/2 transform -translate-y-1/2 w-8 h-8 bg-black/50 hover:bg-black/70 text-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 cursor-pointer"
                    >
                      <i className="ri-arrow-left-s-line text-lg"></i>
                    </button>
                    
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        nextImage(product.id, product.images.length);
                      }}
                      className="absolute right-2 top-1/2 transform -translate-y-1/2 w-8 h-8 bg-black/50 hover:bg-black/70 text-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 cursor-pointer"
                    >
                      <i className="ri-arrow-right-s-line text-lg"></i>
                    </button>
                    
                    {/* Color Dots */}
                    <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex gap-1">
                      {product.images.map((_, index) => (
                        <button
                          key={index}
                          onClick={(e) => {
                            e.stopPropagation();
                            setImageByIndex(product.id, index);
                          }}
                          className={`w-2 h-2 rounded-full transition-all duration-200 cursor-pointer ${
                            (currentImageIndex[product.id] || 0) === index
                              ? 'bg-orange-500 scale-125'
                              : 'bg-white/70 hover:bg-white'
                          }`}
                        />
                      ))}
                    </div>
                  </>
                )}
                
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <Button 
                    size="sm" 
                    onClick={() => openModal(product)}
                    className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 whitespace-nowrap"
                  >
                    Ver Detalles
                  </Button>
                </div>
              </div>
              
              <div className="p-4 sm:p-6">
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4">
                  {product.name}
                </h3>
                
                <div className="flex items-center mb-4 sm:mb-6">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <i 
                        key={i} 
                        className={`ri-star-${i < Math.floor(product.rating) ? 'fill' : 'line'} text-sm sm:text-base`}
                      ></i>
                    ))}
                  </div>
                  <span className="text-gray-600 text-sm sm:text-base ml-2">({product.rating})</span>
                </div>
                
                <div className="flex justify-center">
                  <Button 
                    size="sm" 
                    onClick={scrollToContact}
                    className="w-full sm:w-auto border-orange-500 text-orange-600 hover:bg-orange-500 hover:text-white whitespace-nowrap transition-all duration-200"
                  >
                    {t('products.customize')}
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedProduct && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4" onClick={closeModal}>
          <div className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
            <div className="relative">
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 w-8 h-8 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center z-10 cursor-pointer"
              >
                <i className="ri-close-line text-xl"></i>
              </button>
              
              <div className="grid md:grid-cols-2 gap-8 p-6 sm:p-8">
                <div className="relative">
                  <img 
                    src={getCurrentImage(selectedProduct)}
                    alt={selectedProduct.name}
                    className="w-full h-64 sm:h-80 object-cover rounded-lg"
                  />
                  
                  {/* Modal Carousel Controls */}
                  {selectedProduct.images.length > 1 && (
                    <>
                      <button
                        onClick={() => prevImage(selectedProduct.id, selectedProduct.images.length)}
                        className="absolute left-2 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-black/50 hover:bg-black/70 text-white rounded-full flex items-center justify-center cursor-pointer"
                      >
                        <i className="ri-arrow-left-s-line text-xl"></i>
                      </button>
                      
                      <button
                        onClick={() => nextImage(selectedProduct.id, selectedProduct.images.length)}
                        className="absolute right-2 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-black/50 hover:bg-black/70 text-white rounded-full flex items-center justify-center cursor-pointer"
                      >
                        <i className="ri-arrow-right-s-line text-xl"></i>
                      </button>
                      
                      {/* Modal Color Thumbnails */}
                      <div className="flex gap-2 mt-4 justify-center">
                        {selectedProduct.images.map((image, index) => (
                          <button
                            key={index}
                            onClick={() => setImageByIndex(selectedProduct.id, index)}
                            className={`w-12 h-12 rounded-lg overflow-hidden border-2 transition-all duration-200 cursor-pointer ${
                              (currentImageIndex[selectedProduct.id] || 0) === index
                                ? 'border-orange-500 scale-110'
                                : 'border-gray-300 hover:border-orange-300'
                            }`}
                          >
                            <img 
                              src={image.url}
                              alt={image.color}
                              className="w-full h-full object-cover"
                            />
                          </button>
                        ))}
                      </div>
                    </>
                  )}
                </div>
                
                <div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                    {selectedProduct.name}
                  </h3>
                  
                  <div className="flex items-center mb-6">
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <i 
                          key={i} 
                          className={`ri-star-${i < Math.floor(selectedProduct.rating) ? 'fill' : 'line'} text-lg`}
                        ></i>
                      ))}
                    </div>
                    <span className="text-gray-600 ml-2">({selectedProduct.rating})</span>
                  </div>
                  
                  <p className="text-gray-600 mb-6 text-sm sm:text-base">
                    {selectedProduct.description}
                  </p>
                  
                  <div className="space-y-4 mb-6">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Características:</h4>
                      <ul className="space-y-1">
                        {selectedProduct.features.map((feature, index) => (
                          <li key={index} className="flex items-center text-gray-700 text-sm">
                            <i className="ri-check-line text-orange-500 mr-2 flex-shrink-0"></i>
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Material:</h4>
                      <p className="text-gray-700 text-sm">{selectedProduct.materials}</p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Colores Disponibles:</h4>
                      <div className="flex flex-wrap gap-2">
                        {selectedProduct.colors.map((color, index) => (
                          <div key={index} className="flex items-center gap-2 px-3 py-1 bg-gray-100 rounded-md">
                            {(selectedProduct.category === 'tshirts' || selectedProduct.category === 'hoodies' || selectedProduct.id === 6) && (
                              <div 
                                className="w-4 h-4 rounded-full border border-gray-300"
                                style={{ backgroundColor: getColorStyle(color) }}
                              ></div>
                            )}
                            <span className="text-gray-700 text-sm">{color}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    {selectedProduct.id !== 6 && (
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Tallas Disponibles:</h4>
                        <div className="flex flex-wrap gap-2">
                          {selectedProduct.sizes.map((size, index) => (
                            <span key={index} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-md text-sm">
                              {size}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                    
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Cuidado:</h4>
                      <p className="text-gray-700 text-sm">{selectedProduct.care}</p>
                    </div>
                  </div>
                  
                  <Button 
                    onClick={scrollToContact}
                    className="w-full whitespace-nowrap"
                  >
                    Solicitar Cotización
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default ProductsSection;
