import type { AppProps } from 'next/app';
import { DefaultSeo } from 'next-seo';
import '@/styles/globals.css';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <DefaultSeo
        titleTemplate="%s | MRG Caixas Térmicas"
        defaultTitle="MRG Caixas Térmicas | Soluções Térmicas Profissionais"
        description="Fábrica especializada em caixas térmicas de inox para gastronomia, indústria, saúde e lazer. Qualidade, durabilidade e isolamento térmico superior."
        canonical="https://www.mrgcaixastermicas.com.br"
        openGraph={{
          type: 'website',
          locale: 'pt_BR',
          url: 'https://www.mrgcaixastermicas.com.br',
          siteName: 'MRG Caixas Térmicas',
          title: 'MRG Caixas Térmicas | Soluções Térmicas Profissionais',
          description: 'Fábrica especializada em caixas térmicas de inox para gastronomia, indústria, saúde e lazer.',
          images: [
            {
              url: 'https://www.mrgcaixastermicas.com.br/images/og-image.jpg',
              width: 1200,
              height: 630,
              alt: 'MRG Caixas Térmicas',
            },
          ],
        }}
        twitter={{
          handle: '@mrgcaixastermicas',
          site: '@mrgcaixastermicas',
          cardType: 'summary_large_image',
        }}
        additionalLinkTags={[
          {
            rel: 'icon',
            href: '/favicon.ico',
          },
          {
            rel: 'apple-touch-icon',
            href: '/apple-touch-icon.png',
            sizes: '180x180',
          },
        ]}
        additionalMetaTags={[
          {
            name: 'viewport',
            content: 'width=device-width, initial-scale=1, maximum-scale=5',
          },
          {
            name: 'keywords',
            content: 'caixa térmica inox, caixa térmica industrial, caixa térmica restaurante, caixa térmica hospitalar, transporte alimentos, refrigeração térmica',
          },
          {
            name: 'author',
            content: 'MRG Caixas Térmicas LTDA',
          },
          {
            name: 'theme-color',
            content: '#0284c7',
          },
        ]}
      />
      <Component {...pageProps} />
    </>
  );
}