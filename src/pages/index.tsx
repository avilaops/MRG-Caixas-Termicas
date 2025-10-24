import type { Metadata } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import {
  CubeIcon,
  ShieldCheckIcon,
  TruckIcon,
  SparklesIcon,
  CheckCircleIcon,
  ArrowRightIcon
} from '@heroicons/react/24/outline';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { products } from '@/data/products';
import { applications } from '@/data/applications';

export default function Home() {
  const featuredProducts = products.slice(0, 3);
  const mainApplications = applications.slice(0, 3);

  return (
    <>
      <Head>
        <title>MRG Caixas Térmicas | Soluções Térmicas Profissionais em Inox</title>
        <meta 
          name="description" 
          content="Fábrica especializada em caixas térmicas de inox para gastronomia, indústria, saúde e lazer. Qualidade, durabilidade e isolamento térmico superior." 
        />
        <meta name="keywords" content="caixa térmica inox, caixa térmica industrial, caixa térmica restaurante, caixa térmica hospitalar, transporte alimentos" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://www.mrgcaixastermicas.com.br" />
      </Head>

      <Header />

      <main>
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-steel-900 via-steel-800 to-steel-900 text-white overflow-hidden">
          <div className="absolute inset-0 bg-brushed-steel opacity-5"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
          
          <div className="relative container-custom py-20 lg:py-32">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              
              {/* Hero Content */}
              <div className="space-y-6 lg:space-y-8">
                <div className="inline-block">
                  <span className="bg-primary-600/20 text-primary-300 px-4 py-2 rounded-full text-sm font-semibold border border-primary-500/30">
                    Desde 2010 no mercado
                  </span>
                </div>
                
                <h1 className="heading-xl text-shadow-lg">
                  Caixas Térmicas de <span className="text-primary-400">Inox Profissionais</span>
                </h1>
                
                <p className="text-xl text-steel-200 leading-relaxed">
                  Soluções térmicas de alta performance para gastronomia, indústria, 
                  saúde e lazer. Qualidade certificada, isolamento superior e 
                  personalização sob medida.
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="/produtos" className="btn-primary inline-flex items-center justify-center">
                    Ver Catálogo Completo
                    <ArrowRightIcon className="ml-2 h-5 w-5" />
                  </Link>
                  <Link href="/contato" className="btn-outline inline-flex items-center justify-center bg-white/10 backdrop-blur border-white text-white hover:bg-white hover:text-steel-800">
                    Solicitar Orçamento
                  </Link>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-6 pt-8">
                  <div>
                    <div className="text-3xl font-bold text-primary-400">1000+</div>
                    <div className="text-steel-300 text-sm">Clientes ativos</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-primary-400">15+</div>
                    <div className="text-steel-300 text-sm">Anos de experiência</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-primary-400">100%</div>
                    <div className="text-steel-300 text-sm">Inox certificado</div>
                  </div>
                </div>
              </div>

              {/* Hero Image/Visual */}
              <div className="relative">
                <div className="relative h-96 lg:h-[500px] rounded-2xl overflow-hidden shadow-xl-steel">
                  <div className="absolute inset-0 bg-gradient-primary opacity-20"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-64 h-64 bg-white/10 backdrop-blur-lg rounded-full flex items-center justify-center">
                      <CubeIcon className="h-32 w-32 text-white" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Diferenciais */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="heading-lg mb-4">Por que escolher a MRG?</h2>
              <p className="text-xl text-steel-600 max-w-3xl mx-auto">
                Combinamos tecnologia, qualidade e expertise para entregar as melhores soluções térmicas do mercado
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="card-steel p-6 text-center">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <ShieldCheckIcon className="h-8 w-8 text-primary-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Qualidade Certificada</h3>
                <p className="text-steel-600">
                  Aço inox 304 e 316L certificado, atendendo normas ANVISA e ISO para uso profissional
                </p>
              </div>

              <div className="card-steel p-6 text-center">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CubeIcon className="h-8 w-8 text-primary-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Isolamento Superior</h3>
                <p className="text-steel-600">
                  Tecnologia de isolamento térmico de alta performance com retenção prolongada
                </p>
              </div>

              <div className="card-steel p-6 text-center">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <SparklesIcon className="h-8 w-8 text-primary-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Personalização Total</h3>
                <p className="text-steel-600">
                  Projetos sob medida, gravação a laser e customização completa para sua necessidade
                </p>
              </div>

              <div className="card-steel p-6 text-center">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TruckIcon className="h-8 w-8 text-primary-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Entrega Nacional</h3>
                <p className="text-steel-600">
                  Logística eficiente para todo Brasil com garantia de qualidade no transporte
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Produtos em Destaque */}
        <section className="section-padding bg-steel-50">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="heading-lg mb-4">Produtos em Destaque</h2>
              <p className="text-xl text-steel-600">
                Conheça nossas soluções mais populares
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredProducts.map((product) => (
                <div key={product.id} className="card-steel">
                  <div className="relative h-64 bg-gradient-steel flex items-center justify-center">
                    <CubeIcon className="h-24 w-24 text-white/50" />
                    {product.inStock && (
                      <span className="absolute top-4 right-4 bg-green-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                        Em estoque
                      </span>
                    )}
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                    <p className="text-steel-600 mb-4">{product.description}</p>
                    
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center text-sm text-steel-700">
                        <CheckCircleIcon className="h-4 w-4 mr-2 text-primary-600" />
                        Capacidade: {product.capacity}L
                      </div>
                      <div className="flex items-center text-sm text-steel-700">
                        <CheckCircleIcon className="h-4 w-4 mr-2 text-primary-600" />
                        Material: {product.material.toUpperCase()}
                      </div>
                      <div className="flex items-center text-sm text-steel-700">
                        <CheckCircleIcon className="h-4 w-4 mr-2 text-primary-600" />
                        Retenção: {product.technicalSpecs.retentionTime.cold}
                      </div>
                    </div>

                    <Link 
                      href={`/produtos/${product.slug}`}
                      className="btn-outline w-full text-center"
                    >
                      Ver Detalhes
                    </Link>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <Link href="/produtos" className="btn-primary inline-flex items-center">
                Ver Catálogo Completo
                <ArrowRightIcon className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </section>

        {/* Aplicações */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="heading-lg mb-4">Aplicações Profissionais</h2>
              <p className="text-xl text-steel-600">
                Soluções específicas para cada segmento
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {mainApplications.map((app) => (
                <div key={app.id} className="card-steel p-6">
                  <h3 className="text-2xl font-semibold mb-4">{app.title}</h3>
                  <p className="text-steel-600 mb-6">{app.description}</p>
                  
                  <ul className="space-y-2 mb-6">
                    {app.useCases.slice(0, 3).map((useCase, idx) => (
                      <li key={idx} className="flex items-start text-sm text-steel-700">
                        <CheckCircleIcon className="h-4 w-4 mr-2 text-primary-600 flex-shrink-0 mt-0.5" />
                        <span>{useCase}</span>
                      </li>
                    ))}
                  </ul>

                  <Link 
                    href={`/aplicacoes#${app.id}`}
                    className="text-primary-600 font-semibold hover:text-primary-700 inline-flex items-center"
                  >
                    Saiba mais
                    <ArrowRightIcon className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-padding bg-gradient-primary text-white">
          <div className="container-custom text-center">
            <h2 className="heading-lg mb-6">Pronto para o melhor em refrigeração térmica?</h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Entre em contato conosco e descubra como nossas caixas térmicas de inox 
              podem otimizar seus processos e garantir a qualidade que você precisa
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contato" 
                className="bg-white text-primary-700 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-steel-50 transition-all shadow-lg"
              >
                Solicitar Orçamento Agora
              </Link>
              <Link 
                href="/produtos" 
                className="bg-white/10 backdrop-blur border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white/20 transition-all"
              >
                Explorar Produtos
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}