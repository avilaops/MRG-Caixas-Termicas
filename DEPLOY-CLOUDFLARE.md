# 🚀 DEPLOY MANUAL - CLOUDFLARE PAGES

## ✅ STATUS ATUAL

- [x] Código no GitHub: https://github.com/avilaops/MRG-Caixas-Termicas
- [x] Build de produção criado
- [x] Arquivos exportados na pasta `out/`

## 📋 PRÓXIMOS PASSOS - CLOUDFLARE PAGES

### 1. Acessar Cloudflare Dashboard

1. Acesse: https://dash.cloudflare.com
2. Faça login
3. Vá em **Pages** no menu lateral

### 2. Criar Novo Projeto

1. Clique em **Create a project**
2. Escolha **Connect to Git**
3. Autorize acesso ao GitHub
4. Selecione o repositório: **avilaops/MRG-Caixas-Termicas**

### 3. Configurar Build

Preencha os campos:

```
Project name: mrg-caixas-termicas
Production branch: main
Framework preset: Next.js (Static HTML Export)
Build command: npm run build
Build output directory: out
Root directory: /
Node version: 18
```

### 4. Variáveis de Ambiente

Adicione:

```
NODE_VERSION=18
NEXT_PUBLIC_SITE_URL=https://mrgcaixastermicas.com.br
```

### 5. Deploy

1. Clique em **Save and Deploy**
2. Aguarde o build (2-3 minutos)
3. Site estará no ar em: `https://mrg-caixas-termicas.pages.dev`

### 6. Configurar Domínio Personalizado

1. No projeto, vá em **Custom domains**
2. Clique em **Set up a custom domain**
3. Digite: `mrgcaixastermicas.com.br`
4. Configure também: `www.mrgcaixastermicas.com.br`
5. Cloudflare vai configurar DNS automaticamente

### 7. Configurar DNS (Se Necessário)

No painel de DNS da Cloudflare, adicione:

```
Type: CNAME
Name: @
Target: mrg-caixas-termicas.pages.dev
Proxy: Yes (Orange Cloud)

Type: CNAME
Name: www
Target: mrg-caixas-termicas.pages.dev
Proxy: Yes (Orange Cloud)
```

## 🔧 DEPLOY AUTOMÁTICO CONFIGURADO

Toda vez que você fizer push no GitHub:

```powershell
git add .
git commit -m "Atualização do site"
git push origin main
```

O Cloudflare vai automaticamente:
1. Detectar mudanças
2. Fazer build
3. Deploy automático
4. Atualizar o site em produção

## ⚡ RECURSOS CLOUDFLARE HABILITADOS

- ✅ CDN Global (200+ cidades)
- ✅ SSL/TLS automático
- ✅ HTTP/3 e QUIC
- ✅ Brotli compression
- ✅ Auto minify (JS, CSS, HTML)
- ✅ DDoS protection
- ✅ Always Online
- ✅ Preview deployments

## 📊 PERFORMANCE ESPERADA

- **Global latency**: < 50ms
- **Time to First Byte**: < 100ms
- **Lighthouse Score**: 95+
- **Uptime**: 99.99%

## 🎯 URLs FINAIS

- **Produção**: https://mrgcaixastermicas.com.br
- **WWW**: https://www.mrgcaixastermicas.com.br
- **Cloudflare**: https://mrg-caixas-termicas.pages.dev

---

## 🆘 ALTERNATIVA: DEPLOY MANUAL VIA ARRASTAR E SOLTAR

Se preferir fazer upload manual:

1. Acesse: https://dash.cloudflare.com
2. Vá em **Pages**
3. Clique em **Upload assets**
4. Arraste a pasta `out/` inteira
5. Defina nome do projeto: `mrg-caixas-termicas`
6. Deploy!

---

**Status**: ✅ Pronto para deploy no Cloudflare Pages  
**Arquivos**: Pasta `out/` com 25+ arquivos otimizados  
**GitHub**: Código versionado e pronto para CI/CD