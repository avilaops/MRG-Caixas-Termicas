export interface Product {
  id: string;
  name: string;
  description: string;
  capacity: number; // em litros
  material: 'inox-304' | 'inox-316' | 'aluminio';
  dimensions: {
    width: number;
    height: number;
    depth: number;
  };
  weight: number; // em kg
  applications: ApplicationCategory[];
  features: string[];
  technicalSpecs: {
    thermalInsulation: string;
    sealType: string;
    temperatureRange: {
      min: number;
      max: number;
    };
    retentionTime: {
      cold: string;
      hot: string;
    };
  };
  images: {
    main: string;
    gallery: string[];
  };
  price?: {
    retail: number;
    wholesale: number;
  };
  customizable: boolean;
  inStock: boolean;
  slug: string;
}

export type ApplicationCategory = 
  | 'alimentacao-gastronomia'
  | 'industria-logistica'
  | 'saude-laboratorios'
  | 'pesca-lazer'
  | 'corporativo-institucional'
  | 'personalizados-premium';

export interface Application {
  id: string;
  category: ApplicationCategory;
  title: string;
  description: string;
  useCases: string[];
  requiredFeatures: string[];
  recommendedProducts: string[]; // IDs dos produtos
  images: string[];
  benefits: string[];
  technicalRequirements?: string[];
}

export interface Company {
  name: string;
  cnpj: string;
  ie: string;
  address: {
    street: string;
    number: string;
    neighborhood: string;
    city: string;
    state: string;
    zipCode: string;
  };
  contact: {
    phone: string;
    whatsapp: string;
    email: string;
    website: string;
  };
  socialMedia: {
    instagram?: string;
    linkedin?: string;
    facebook?: string;
  };
}

export interface QuoteRequest {
  name: string;
  email: string;
  phone: string;
  company?: string;
  message: string;
  products: string[]; // IDs dos produtos
  quantity: number;
  customization?: string;
  deadline?: string;
  createdAt: Date;
}