import { Application } from '@/types';

export const applications: Application[] = [
  {
    id: 'alimentacao-gastronomia',
    category: 'alimentacao-gastronomia',
    title: 'Alimentação e Gastronomia',
    description: 'Soluções térmicas profissionais para o setor gastronômico, garantindo qualidade e segurança alimentar em todas as etapas.',
    useCases: [
      'Transporte de alimentos quentes ou frios entre cozinhas e eventos',
      'Armazenamento de carnes, pescados, frios e sobremesas',
      'Buffets, catering, restaurantes e food trucks',
      'Delivery de refeições com temperatura controlada',
      'Conservação temporária em cozinhas industriais'
    ],
    requiredFeatures: [
      'Vedação hermética para segurança alimentar',
      'Isolamento térmico de alta performance',
      'Material inox 304 ou 316 para contato com alimentos',
      'Facilidade de higienização e manutenção',
      'Resistência a impactos durante transporte'
    ],
    recommendedProducts: ['caixa-50l-inox304', 'caixa-100l-premium', 'caixa-personalizada-restaurante'],
    images: [
      '/images/applications/gastronomia-1.jpg',
      '/images/applications/gastronomia-2.jpg',
      '/images/applications/gastronomia-3.jpg'
    ],
    benefits: [
      'Manutenção da qualidade nutricional dos alimentos',
      'Redução de desperdício por deterioração',
      'Conformidade com normas sanitárias (ANVISA)',
      'Economia em logística de distribuição',
      'Melhoria na experiência do cliente final'
    ],
    technicalRequirements: [
      'Temperatura de conservação: -5°C a +85°C',
      'Tempo de retenção: 6-12 horas (frio) / 4-8 horas (quente)',
      'Material em contato: Inox 304 mínimo',
      'Vedação: Borracha alimentícia atóxica'
    ]
  },
  {
    id: 'industria-logistica',
    category: 'industria-logistica',
    title: 'Indústria e Logística',
    description: 'Caixas térmicas robustas para transporte industrial, logística de perecíveis e processos que exigem controle rigoroso de temperatura.',
    useCases: [
      'Conservação de produtos perecíveis durante transporte',
      'Armazenamento temporário de insumos sensíveis',
      'Transporte interno em fábricas alimentícias e farmacêuticas',
      'Logística de última milha para produtos refrigerados',
      'Backup térmico em falhas de refrigeração'
    ],
    requiredFeatures: [
      'Resistência extrema a impactos e vibrações',
      'Isolamento de alto desempenho para longas distâncias',
      'Sistema de fechamento reforçado',
      'Identificação e rastreabilidade',
      'Capacidades variadas para otimização de carga'
    ],
    recommendedProducts: ['caixa-200l-industrial', 'caixa-300l-logistica', 'caixa-custom-industrial'],
    images: [
      '/images/applications/industria-1.jpg',
      '/images/applications/industria-2.jpg',
      '/images/applications/logistica-1.jpg'
    ],
    benefits: [
      'Redução significativa de perdas em transporte',
      'Otimização de rotas e custos logísticos',
      'Conformidade com regulamentações industriais',
      'Durabilidade que reduz custo por operação',
      'Versatilidade para diferentes tipos de carga'
    ],
    technicalRequirements: [
      'Resistência a impactos: Classe industrial pesada',
      'Isolamento: Poliuretano injetado ou equivalente',
      'Fechamento: Sistema de travas múltiplas',
      'Capacidade: 100L a 500L conforme necessidade'
    ]
  },
  {
    id: 'saude-laboratorios',
    category: 'saude-laboratorios',
    title: 'Saúde e Laboratórios',
    description: 'Soluções de transporte térmica para o setor da saúde, garantindo a integridade de medicamentos, vacinas e materiais biológicos.',
    useCases: [
      'Transporte de amostras biológicas e laboratoriais',
      'Conservação de vacinas e medicamentos termolábeis',
      'Armazenamento temporário de materiais hospitalares',
      'Logística farmacêutica especializada',
      'Backup em equipamentos de refrigeração médica'
    ],
    requiredFeatures: [
      'Controle rigoroso de temperatura',
      'Certificações para uso médico/farmacêutico',
      'Sistema de monitoramento e registro',
      'Material biocompatível e esterilizável',
      'Vedação absoluta contra contaminação'
    ],
    recommendedProducts: ['caixa-medical-30l', 'caixa-vacinas-50l', 'caixa-laboratorio-premium'],
    images: [
      '/images/applications/saude-1.jpg',
      '/images/applications/laboratorio-1.jpg',
      '/images/applications/medicamentos-1.jpg'
    ],
    benefits: [
      'Preservação da eficácia de medicamentos e vacinas',
      'Conformidade com protocolos de saúde rigorosos',
      'Redução de desperdício de materiais caros',
      'Segurança em transporte de materiais sensíveis',
      'Rastreabilidade completa da cadeia de frio'
    ],
    technicalRequirements: [
      'Faixa de temperatura: 2°C a 8°C (vacinas)',
      'Precisão térmica: ±1°C',
      'Material: Inox 316L grau farmacêutico',
      'Certificações: ANVISA, ISO 13485',
      'Validação térmica obrigatória'
    ]
  },
  {
    id: 'pesca-lazer',
    category: 'pesca-lazer',
    title: 'Pesca e Lazer',
    description: 'Caixas térmicas versáteis para atividades de lazer, pesca esportiva e recreação, combinando funcionalidade e durabilidade.',
    useCases: [
      'Armazenamento de peixes e iscas em pescarias',
      'Conservação de bebidas e alimentos em camping',
      'Churrascos e eventos ao ar livre',
      'Esportes náuticos e atividades aquáticas',
      'Turismo de pesca e ecoturismo'
    ],
    requiredFeatures: [
      'Resistência à corrosão por água salgada',
      'Portabilidade e facilidade de transporte',
      'Drenagem eficiente para limpeza',
      'Isolamento adequado para uso prolongado',
      'Design ergonômico para atividades outdoor'
    ],
    recommendedProducts: ['caixa-pesca-80l', 'caixa-camping-60l', 'caixa-portatil-40l'],
    images: [
      '/images/applications/pesca-1.jpg',
      '/images/applications/camping-1.jpg',
      '/images/applications/lazer-1.jpg'
    ],
    benefits: [
      'Preservação da qualidade do pescado',
      'Autonomia prolongada em atividades outdoor',
      'Resistência em ambientes adversos',
      'Facilidade de limpeza e manutenção',
      'Versatilidade para múltiplos usos recreativos'
    ]
  },
  {
    id: 'corporativo-institucional',
    category: 'corporativo-institucional',
    title: 'Corporativo e Institucional',
    description: 'Soluções térmicas para grandes volumes e uso institucional em refeitórios, escolas, hospitais e serviços corporativos.',
    useCases: [
      'Refeitórios industriais e corporativos',
      'Cozinhas de escolas e universidades',
      'Serviços de alimentação hospitalar',
      'Catering aéreo, ferroviário e marítimo',
      'Eventos corporativos e institucionais'
    ],
    requiredFeatures: [
      'Grande capacidade volumétrica',
      'Eficiência térmica para uso intensivo',
      'Durabilidade para uso comercial pesado',
      'Facilidade de operação e manutenção',
      'Conformidade com normas institucionais'
    ],
    recommendedProducts: ['caixa-institucional-500l', 'caixa-refeitorio-300l', 'caixa-catering-200l'],
    images: [
      '/images/applications/corporativo-1.jpg',
      '/images/applications/refeitorio-1.jpg',
      '/images/applications/institucional-1.jpg'
    ],
    benefits: [
      'Economia de escala em grandes volumes',
      'Eficiência operacional em serviços alimentares',
      'Redução de custos com desperdício',
      'Padronização de qualidade alimentar',
      'Otimização de processos logísticos internos'
    ]
  },
  {
    id: 'personalizados-premium',
    category: 'personalizados-premium',
    title: 'Personalizados e Premium',
    description: 'Caixas térmicas sob medida e versões premium para clientes que buscam diferenciação, design exclusivo e máxima qualidade.',
    useCases: [
      'Versões decorativas para eventos especiais',
      'Caixas sob medida para aplicações específicas',
      'Brindes corporativos personalizados',
      'Design de interiores (coolers decorativos)',
      'Projetos arquitetônicos especiais'
    ],
    requiredFeatures: [
      'Customização completa de design',
      'Materiais premium e acabamentos especiais',
      'Dimensões sob medida',
      'Gravações, logos e identidade visual',
      'Acessórios e funcionalidades exclusivas'
    ],
    recommendedProducts: ['caixa-premium-custom', 'caixa-executiva-deluxe', 'caixa-design-especial'],
    images: [
      '/images/applications/premium-1.jpg',
      '/images/applications/personalizado-1.jpg',
      '/images/applications/design-1.jpg'
    ],
    benefits: [
      'Diferenciação e exclusividade máxima',
      'Adequação perfeita às necessidades específicas',
      'Valor agregado para marca do cliente',
      'Qualidade superior em materiais e acabamento',
      'Flexibilidade total de projeto e execução'
    ]
  }
];