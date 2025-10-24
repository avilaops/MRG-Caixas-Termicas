import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="pt-BR">
      <Head>
        <meta charSet="utf-8" />
        <link rel="icon" href="/favicon.ico" />
        
        {/* Preconnect to optimize font loading */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* Schema.org markup for Google */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'MRG Caixas Térmicas LTDA',
              url: 'https://www.mrgcaixastermicas.com.br',
              logo: 'https://www.mrgcaixastermicas.com.br/images/logo.png',
              description: 'Fábrica especializada em caixas térmicas de inox para uso profissional',
              address: {
                '@type': 'PostalAddress',
                streetAddress: 'Avenida Otaviano Fava, 9560',
                addressLocality: 'São José do Rio Preto',
                addressRegion: 'SP',
                postalCode: '15086-040',
                addressCountry: 'BR'
              },
              contactPoint: {
                '@type': 'ContactPoint',
                telephone: '+55-17-3232-4545',
                contactType: 'sales',
                areaServed: 'BR',
                availableLanguage: 'Portuguese'
              },
              sameAs: [
                'https://www.instagram.com/mrgcaixastermicas',
                'https://www.linkedin.com/company/mrg-caixas-termicas'
              ]
            })
          }}
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}