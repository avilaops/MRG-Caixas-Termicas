import { Product } from '@/types';

export const products: Product[] = [
  {
    id: 'caixa-50l-inox304',
    name: 'Caixa Térmica 50L Inox 304',
    description: 'Caixa térmica profissional de 50 litros em aço inox 304, ideal para restaurantes, buffets e transporte de alimentos.',
    capacity: 50,
    material: 'inox-304',
    dimensions: {
      width: 60,
      height: 40,
      depth: 35
    },
    weight: 8.5,
    applications: ['alimentacao-gastronomia', 'corporativo-institucional'],
    features: [
      'Aço inox 304 para contato alimentar',
      'Isolamento em poliuretano injetado',
      'Vedação com borracha atóxica',
      'Alças ergonômicas reforçadas',
      'Sistema de drenagem',
      'Acabamento escovado'
    ],
    technicalSpecs: {
      thermalInsulation: 'Poliuretano injetado 5cm',
      sealType: 'Borracha atóxica alimentícia',
      temperatureRange: {
        min: -10,
        max: 85
      },
      retentionTime: {
        cold: '8-12 horas',
        hot: '6-8 horas'
      }
    },
    images: {
      main: '/images/products/caixa-50l-main.jpg',
      gallery: [
        '/images/products/caixa-50l-1.jpg',
        '/images/products/caixa-50l-2.jpg',
        '/images/products/caixa-50l-3.jpg'
      ]
    },
    price: {
      retail: 650,
      wholesale: 520
    },
    customizable: true,
    inStock: true,
    slug: 'caixa-termica-50l-inox304'
  },
  {
    id: 'caixa-100l-premium',
    name: 'Caixa Térmica 100L Premium',
    description: 'Modelo premium de 100 litros com isolamento superior e acabamento de alta qualidade para uso profissional intensivo.',
    capacity: 100,
    material: 'inox-316',
    dimensions: {
      width: 80,
      height: 50,
      depth: 45
    },
    weight: 15,
    applications: ['alimentacao-gastronomia', 'industria-logistica'],
    features: [
      'Aço inox 316L grau premium',
      'Isolamento duplo com vácuo parcial',
      'Sistema de vedação tripla',
      'Alças e rodízios profissionais',
      'Termômetro digital integrado',
      'Certificação alimentícia ANVISA'
    ],
    technicalSpecs: {
      thermalInsulation: 'Duplo com vácuo parcial 7cm',
      sealType: 'Sistema triplo com vedação magnética',
      temperatureRange: {
        min: -15,
        max: 95
      },
      retentionTime: {
        cold: '12-18 horas',
        hot: '8-12 horas'
      }
    },
    images: {
      main: '/images/products/caixa-100l-main.jpg',
      gallery: [
        '/images/products/caixa-100l-1.jpg',
        '/images/products/caixa-100l-2.jpg',
        '/images/products/caixa-100l-3.jpg'
      ]
    },
    price: {
      retail: 1200,
      wholesale: 950
    },
    customizable: true,
    inStock: true,
    slug: 'caixa-termica-100l-premium'
  },
  {
    id: 'caixa-200l-industrial',
    name: 'Caixa Térmica 200L Industrial',
    description: 'Solução robusta de 200 litros para uso industrial pesado, transporte logístico e grandes volumes.',
    capacity: 200,
    material: 'inox-304',
    dimensions: {
      width: 100,
      height: 60,
      depth: 55
    },
    weight: 25,
    applications: ['industria-logistica', 'corporativo-institucional'],
    features: [
      'Estrutura reforçada para uso industrial',
      'Sistema de travas múltiplas',
      'Isolamento de alta densidade',
      'Base com rodízios industriais',
      'Resistente a impactos extremos',
      'Drenagem com válvula profissional'
    ],
    technicalSpecs: {
      thermalInsulation: 'Poliuretano alta densidade 8cm',
      sealType: 'Vedação industrial reforçada',
      temperatureRange: {
        min: -20,
        max: 100
      },
      retentionTime: {
        cold: '18-24 horas',
        hot: '12-16 horas'
      }
    },
    images: {
      main: '/images/products/caixa-200l-main.jpg',
      gallery: [
        '/images/products/caixa-200l-1.jpg',
        '/images/products/caixa-200l-2.jpg',
        '/images/products/caixa-200l-3.jpg'
      ]
    },
    price: {
      retail: 2100,
      wholesale: 1680
    },
    customizable: true,
    inStock: true,
    slug: 'caixa-termica-200l-industrial'
  },
  {
    id: 'caixa-medical-30l',
    name: 'Caixa Médica 30L Farmacêutica',
    description: 'Caixa especial para transporte de medicamentos e vacinas com controle rigoroso de temperatura.',
    capacity: 30,
    material: 'inox-316',
    dimensions: {
      width: 50,
      height: 35,
      depth: 30
    },
    weight: 7,
    applications: ['saude-laboratorios'],
    features: [
      'Inox 316L grau farmacêutico',
      'Sistema de monitoramento digital',
      'Certificação ANVISA e ISO 13485',
      'Isolamento validado termicamente',
      'Vedação hermética absoluta',
      'Data logger de temperatura'
    ],
    technicalSpecs: {
      thermalInsulation: 'Isolamento validado farmacêutico',
      sealType: 'Vedação hermética certificada',
      temperatureRange: {
        min: 2,
        max: 8
      },
      retentionTime: {
        cold: '24-48 horas com gel packs',
        hot: 'N/A - uso específico para frio'
      }
    },
    images: {
      main: '/images/products/caixa-medical-main.jpg',
      gallery: [
        '/images/products/caixa-medical-1.jpg',
        '/images/products/caixa-medical-2.jpg',
        '/images/products/caixa-medical-3.jpg'
      ]
    },
    price: {
      retail: 1800,
      wholesale: 1440
    },
    customizable: false,
    inStock: true,
    slug: 'caixa-medica-30l-farmaceutica'
  },
  {
    id: 'caixa-pesca-80l',
    name: 'Caixa Pesca 80L Náutica',
    description: 'Caixa térmica especial para pesca com resistência à corrosão marinha e sistema de drenagem otimizado.',
    capacity: 80,
    material: 'inox-316',
    dimensions: {
      width: 70,
      height: 45,
      depth: 40
    },
    weight: 12,
    applications: ['pesca-lazer'],
    features: [
      'Resistência total à água salgada',
      'Sistema de drenagem múltipla',
      'Alças marítimas reforçadas',
      'Acabamento anti-corrosivo',
      'Divisórias removíveis',
      'Base antiderrapante'
    ],
    technicalSpecs: {
      thermalInsulation: 'Poliuretano marítimo 6cm',
      sealType: 'Vedação resistente à água',
      temperatureRange: {
        min: -5,
        max: 60
      },
      retentionTime: {
        cold: '10-15 horas',
        hot: '6-10 horas'
      }
    },
    images: {
      main: '/images/products/caixa-pesca-main.jpg',
      gallery: [
        '/images/products/caixa-pesca-1.jpg',
        '/images/products/caixa-pesca-2.jpg',
        '/images/products/caixa-pesca-3.jpg'
      ]
    },
    price: {
      retail: 980,
      wholesale: 784
    },
    customizable: true,
    inStock: true,
    slug: 'caixa-pesca-80l-nautica'
  },
  {
    id: 'caixa-premium-custom',
    name: 'Caixa Premium Personalizada',
    description: 'Solução completamente customizável com design exclusivo, materiais premium e acabamentos especiais.',
    capacity: 0, // Variável conforme projeto
    material: 'inox-316',
    dimensions: {
      width: 0, // Sob medida
      height: 0,
      depth: 0
    },
    weight: 0, // Variável
    applications: ['personalizados-premium'],
    features: [
      'Design 100% personalizado',
      'Materiais premium à escolha',
      'Gravação a laser de logos',
      'Acabamentos especiais',
      'Acessórios exclusivos',
      'Projeto 3D detalhado'
    ],
    technicalSpecs: {
      thermalInsulation: 'Conforme especificação do projeto',
      sealType: 'Sistema premium personalizado',
      temperatureRange: {
        min: -30,
        max: 120
      },
      retentionTime: {
        cold: 'Conforme projeto',
        hot: 'Conforme projeto'
      }
    },
    images: {
      main: '/images/products/caixa-custom-main.jpg',
      gallery: [
        '/images/products/caixa-custom-1.jpg',
        '/images/products/caixa-custom-2.jpg',
        '/images/products/caixa-custom-3.jpg'
      ]
    },
    customizable: true,
    inStock: false, // Produção sob encomenda
    slug: 'caixa-premium-personalizada'
  }
];

// Função para buscar produtos por filtros
export const filterProducts = (filters: {
  capacity?: number[];
  material?: string[];
  application?: string[];
  inStock?: boolean;
}) => {
  return products.filter(product => {
    if (filters.capacity && filters.capacity.length > 0) {
      const inRange = filters.capacity.some(range => {
        if (range === 50) return product.capacity <= 50;
        if (range === 100) return product.capacity > 50 && product.capacity <= 100;
        if (range === 200) return product.capacity > 100 && product.capacity <= 200;
        if (range === 300) return product.capacity > 200;
        return false;
      });
      if (!inRange) return false;
    }
    
    if (filters.material && filters.material.length > 0) {
      if (!filters.material.includes(product.material)) return false;
    }
    
    if (filters.application && filters.application.length > 0) {
      const hasApplication = filters.application.some(app => 
        product.applications.includes(app as any)
      );
      if (!hasApplication) return false;
    }
    
    if (filters.inStock !== undefined) {
      if (product.inStock !== filters.inStock) return false;
    }
    
    return true;
  });
};