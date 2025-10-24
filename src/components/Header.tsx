import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { 
  Bars3Icon, 
  XMarkIcon, 
  PhoneIcon,
  MapPinIcon 
} from '@heroicons/react/24/outline';
import { companyData } from '@/data/company';

interface NavigationItem {
  name: string;
  href: string;
  current?: boolean;
}

const navigation: NavigationItem[] = [
  { name: 'Home', href: '/' },
  { name: 'Produtos', href: '/produtos' },
  { name: 'Aplicações', href: '/aplicacoes' },
  { name: 'Sobre', href: '/sobre' },
  { name: 'Contato', href: '/contato' },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const formatWhatsApp = (phone: string) => {
    return phone.replace(/\D/g, '');
  };

  return (
    <>
      {/* Top Bar */}
      <div className="bg-steel-800 text-white py-2 text-sm">
        <div className="container-custom">
          <div className="flex flex-wrap justify-between items-center">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-1">
                <MapPinIcon className="h-4 w-4" />
                <span>{companyData.address.city}, {companyData.address.state}</span>
              </div>
              <div className="flex items-center space-x-1">
                <PhoneIcon className="h-4 w-4" />
                <span>{companyData.contact.phone}</span>
              </div>
            </div>
            <div className="hidden sm:flex items-center space-x-4">
              <span>Orçamentos sem compromisso</span>
              <a
                href={`https://wa.me/${formatWhatsApp(companyData.contact.whatsapp)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-600 hover:bg-green-700 px-3 py-1 rounded text-xs font-semibold transition-colors"
              >
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header 
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-white shadow-lg backdrop-blur-md' 
            : 'bg-white/95 backdrop-blur-sm'
        }`}
      >
        <div className="container-custom">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link href="/" className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-gradient-steel rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-xl">MRG</span>
                </div>
                <div className="hidden sm:block">
                  <h1 className="text-xl font-bold text-steel-800">
                    MRG Caixas Térmicas
                  </h1>
                  <p className="text-sm text-steel-600">
                    Soluções Térmicas Profissionais
                  </p>
                </div>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex space-x-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`text-base font-medium transition-colors duration-200 ${
                    router.pathname === item.href
                      ? 'text-primary-600 border-b-2 border-primary-600 pb-1'
                      : 'text-steel-700 hover:text-primary-600'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </nav>

            {/* CTA Button */}
            <div className="hidden lg:flex items-center space-x-4">
              <Link
                href="/contato"
                className="btn-primary"
              >
                Solicitar Orçamento
              </Link>
            </div>

            {/* Mobile menu button */}
            <div className="lg:hidden">
              <button
                onClick={toggleMenu}
                className="inline-flex items-center justify-center p-2 rounded-md text-steel-600 hover:text-primary-600 hover:bg-steel-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-500"
                aria-expanded="false"
              >
                <span className="sr-only">Abrir menu</span>
                {isMenuOpen ? (
                  <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                ) : (
                  <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white shadow-lg">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`block px-3 py-2 text-base font-medium transition-colors duration-200 ${
                    router.pathname === item.href
                      ? 'text-primary-600 bg-primary-50'
                      : 'text-steel-700 hover:text-primary-600 hover:bg-steel-50'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="px-3 py-2">
                <Link
                  href="/contato"
                  className="btn-primary block text-center"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Solicitar Orçamento
                </Link>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
}