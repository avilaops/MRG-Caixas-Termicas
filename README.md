# MRG Caixas Térmicas - Website Institucional

Site institucional e catálogo digital da MRG Caixas Térmicas, especializada em soluções térmicas profissionais de inox.

## 🚀 Tecnologias

- **Framework**: Next.js 14 (React)
- **Estilo**: TailwindCSS
- **Linguagem**: TypeScript
- **Ícones**: Heroicons + Lucide React
- **Animações**: Framer Motion
- **SEO**: Next-SEO
- **Deploy**: GitHub Pages

## 📋 Pré-requisitos

- Node.js 18+ 
- npm ou yarn

## 🔧 Instalação

### 1. Instalar dependências

```powershell
cd "d:\OneDrive - Avila DevOps\Clientes\MRG Caixas Termicas\website-nextjs"
npm install
```

### 2. Executar em desenvolvimento

```powershell
npm run dev
```

O site estará disponível em `http://localhost:3000`

### 3. Build para produção

```powershell
npm run build
```

### 4. Exportar para GitHub Pages

```powershell
npm run export
```

Isso gerará os arquivos estáticos na pasta `out/`

### 5. Deploy no GitHub Pages

```powershell
npm run deploy
```

## 📁 Estrutura do Projeto

```
website-nextjs/
├── src/
│   ├── pages/              # Páginas Next.js
│   │   ├── index.tsx       # Home
│   │   ├── produtos/       # Catálogo de produtos
│   │   ├── aplicacoes/     # Aplicações e usos
│   │   ├── sobre/          # Sobre a empresa
│   │   └── contato/        # Contato e orçamentos
│   ├── components/         # Componentes reutilizáveis
│   │   ├── Header.tsx      # Cabeçalho e navegação
│   │   ├── Footer.tsx      # Rodapé
│   │   ├── ProductCard.tsx # Card de produto
│   │   └── ...
│   ├── data/              # Dados estáticos
│   │   ├── products.ts    # Catálogo de produtos
│   │   ├── applications.ts # Aplicações
│   │   └── company.ts     # Dados da empresa
│   ├── types/             # TypeScript types
│   │   └── index.ts
│   └── styles/            # Estilos globais
│       └── globals.css
├── public/                # Arquivos públicos
│   └── images/           # Imagens
├── next.config.js        # Configuração Next.js
├── tailwind.config.js    # Configuração Tailwind
└── tsconfig.json         # Configuração TypeScript
```

## 🎨 Identidade Visual

### Paleta de Cores

- **Primary (Azul)**: `#0284c7` - Azul profissional
- **Steel (Aço)**: `#64748b` - Aço escovado
- **Silver (Prata)**: `#6b7280` - Prata metálica
- **White**: `#ffffff` - Branco limpo

### Tipografia

- **Display/Headings**: Poppins (Bold, Semibold)
- **Body**: Inter (Regular, Medium)

## 📄 Páginas

### Home (`/`)
- Hero com proposta de valor
- Diferenciais da marca
- Produtos em destaque
- Aplicações principais
- CTA para orçamento

### Produtos (`/produtos`)
- Catálogo completo
- Filtros (capacidade, material, aplicação)
- Fichas técnicas
- Especificações detalhadas

### Aplicações (`/aplicacoes`)
- 6 categorias principais:
  - Alimentação e Gastronomia
  - Indústria e Logística
  - Saúde e Laboratórios
  - Pesca e Lazer
  - Corporativo e Institucional
  - Personalizados e Premium
- Casos de uso detalhados
- Produtos recomendados

### Sobre (`/sobre`)
- História da empresa
- Processo de fabricação
- Certificações e qualidade
- Estrutura industrial

### Contato (`/contato`)
- Formulário de orçamento
- WhatsApp direto
- Telefone e e-mail
- Mapa de localização
- Horário de atendimento

## 🔍 SEO

O site é otimizado para:

- `caixa térmica inox`
- `caixa térmica industrial`
- `caixa térmica restaurante`
- `caixa térmica hospitalar`
- `transporte alimentos temperatura controlada`
- `caixa térmica personalizada`

### Otimizações implementadas:

- ✅ Títulos e meta descriptions únicos
- ✅ Schema markup (Organization, Product)
- ✅ Sitemap.xml automático
- ✅ Robots.txt
- ✅ Imagens otimizadas
- ✅ URLs amigáveis (slugs)
- ✅ Performance (SSG)
- ✅ Mobile-first design

## 📱 Responsividade

Design 100% responsivo:
- Mobile (320px+)
- Tablet (768px+)
- Desktop (1024px+)
- Large Desktop (1280px+)

## 📞 Contato e Suporte

- **Empresa**: M.R.G. Caixas Térmicas LTDA
- **CNPJ**: 11.481.661/0001-00
- **Telefone**: (17) 3232-4545
- **E-mail**: contato@mrgcaixastermicas.com.br
- **Endereço**: Av. Otaviano Fava, 9560 - São José do Rio Preto/SP

## 📝 Licença

© 2024 MRG Caixas Térmicas LTDA. Todos os direitos reservados.

---

**Desenvolvido por**: Avila DevOps  
**Stack**: Next.js + TailwindCSS + TypeScript
