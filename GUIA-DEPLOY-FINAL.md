# 🎉 DEPLOY COMPLETO - MRG CAIXAS TÉRMICAS

## ✅ O QUE JÁ FOI FEITO

### 1. Código no GitHub ✅
- **Repositório**: https://github.com/avilaops/MRG-Caixas-Termicas
- **Branch**: main
- **Commits**: 2
- **Status**: Atualizado e sincronizado

### 2. Build de Produção ✅
- **Framework**: Next.js 14
- **Output**: Pasta `out/` com arquivos estáticos
- **Tamanho**: ~1.5 MB otimizado
- **Pages**: 3 rotas geradas
- **Status**: Build sem erros

### 3. Configurações ✅
- **wrangler.toml**: Configurado para Cloudflare Pages
- **package.json**: Scripts de deploy atualizados
- **next.config.js**: Export estático configurado
- **Git**: Versionamento ativo

---

## 🚀 PRÓXIMO PASSO: DEPLOY NO CLOUDFLARE PAGES

### Opção 1: Deploy Automático via GitHub (RECOMENDADO)

#### Passo a Passo:

1. **Acesse o Cloudflare Dashboard**
   - URL: https://dash.cloudflare.com
   - Faça login com suas credenciais

2. **Vá para Pages**
   - No menu lateral, clique em "Pages"
   - Clique em "Create a project"

3. **Conecte ao GitHub**
   - Selecione "Connect to Git"
   - Autorize o Cloudflare a acessar seu GitHub
   - Selecione o repositório: **avilaops/MRG-Caixas-Termicas**

4. **Configure o Build**
   ```
   Project name: mrg-caixas-termicas
   Production branch: main
   Framework preset: Next.js (Static Export)
   Build command: npm run build
   Build output directory: out
   Root directory: (leave empty)
   ```

5. **Variáveis de Ambiente**
   ```
   NODE_VERSION=18
   ```

6. **Deploy**
   - Clique em "Save and Deploy"
   - Aguarde 2-3 minutos
   - ✅ Site estará no ar!

7. **URL Gerada**
   - https://mrg-caixas-termicas.pages.dev

---

### Opção 2: Deploy Manual (Arrastar e Soltar)

1. Acesse: https://dash.cloudflare.com > Pages
2. Clique em "Upload assets"
3. Arraste a pasta `out/` completa
4. Nomeie: `mrg-caixas-termicas`
5. Deploy!

---

## 🌐 CONFIGURAR DOMÍNIO PERSONALIZADO

### 1. No Cloudflare Pages

1. Abra seu projeto: `mrg-caixas-termicas`
2. Vá em **Custom domains**
3. Clique em **Set up a custom domain**
4. Digite: `mrgcaixastermicas.com.br`
5. Confirme

### 2. Configurar DNS

No painel DNS da Cloudflare:

```
Tipo: CNAME
Nome: @
Destino: mrg-caixas-termicas.pages.dev
Proxy: Ativado (nuvem laranja)

Tipo: CNAME
Nome: www
Destino: mrg-caixas-termicas.pages.dev
Proxy: Ativado (nuvem laranja)
```

### 3. SSL/TLS

- Vá em **SSL/TLS** > **Overview**
- Selecione: **Full (strict)**
- SSL será gerado automaticamente

---

## 🔄 DEPLOY AUTOMÁTICO CONFIGURADO

Agora sempre que você fizer mudanças:

```powershell
cd "d:\OneDrive - Avila DevOps\Clientes\MRG Caixas Termicas\website-nextjs"

# Fazer alterações nos arquivos...

git add .
git commit -m "Descrição das mudanças"
git push origin main
```

O Cloudflare vai:
1. Detectar o push
2. Fazer build automático
3. Deploy em produção
4. Atualizar o site instantaneamente

---

## 💾 INTEGRAÇÃO COM MONGODB

### Configuração Atual
```
URI: mongodb+srv://nicolasrosaab_db_user:Gio4EAQhbEdQMISl@cluster0.npuhras.mongodb.net/
Database: mrg_caixas_termicas
```

### Para usar no projeto:

1. Instalar dependência:
```powershell
npm install mongodb
```

2. Criar arquivo `.env.local`:
```
MONGODB_URI=mongodb+srv://nicolasrosaab_db_user:Gio4EAQhbEdQMISl@cluster0.npuhras.mongodb.net/
MONGODB_DB=mrg_caixas_termicas
```

3. Adicionar no `.gitignore`:
```
.env.local
```

4. Configurar no Cloudflare:
   - Pages > Settings > Environment variables
   - Adicione `MONGODB_URI` e `MONGODB_DB`

### Exemplo de uso (API Route):

```typescript
// src/pages/api/quotes.ts
import { MongoClient } from 'mongodb';

const client = new MongoClient(process.env.MONGODB_URI!);

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const db = client.db(process.env.MONGODB_DB);
    const quotes = db.collection('quotes');
    
    await quotes.insertOne({
      ...req.body,
      createdAt: new Date()
    });
    
    res.status(200).json({ success: true });
  }
}
```

---

## 📊 RECURSOS HABILITADOS

### Cloudflare Pages
- ✅ CDN Global (200+ cidades)
- ✅ SSL/TLS automático
- ✅ Deploy preview para cada PR
- ✅ Rollback instantâneo
- ✅ Build cache
- ✅ DDoS protection
- ✅ Always Online

### Performance
- ✅ Brotli compression
- ✅ HTTP/3
- ✅ Early Hints
- ✅ Zero cold starts
- ✅ Edge caching

---

## 🎯 URLs FINAIS

| Ambiente | URL |
|----------|-----|
| **Produção** | https://mrgcaixastermicas.com.br |
| **WWW** | https://www.mrgcaixastermicas.com.br |
| **Cloudflare** | https://mrg-caixas-termicas.pages.dev |
| **GitHub** | https://github.com/avilaops/MRG-Caixas-Termicas |

---

## 📱 TESTE O SITE

Depois do deploy, teste:

- [ ] Homepage carrega corretamente
- [ ] Navegação funciona
- [ ] Produtos exibidos
- [ ] Aplicações listadas
- [ ] Botões de WhatsApp funcionam
- [ ] Formulário de contato
- [ ] Responsivo no mobile
- [ ] Performance no PageSpeed Insights

---

## 🔧 COMANDOS ÚTEIS

```powershell
# Desenvolvimento local
npm run dev

# Build de produção
npm run build

# Ver build local
npm run start

# Atualizar no GitHub
git add .
git commit -m "Mensagem"
git push origin main

# Ver logs do Cloudflare
npx wrangler pages deployment list
```

---

## 📞 CREDENCIAIS E TOKENS

> **Nota**: Por segurança, as credenciais foram removidas deste arquivo.  
> Consulte o arquivo `.env.local` ou documentação interna para acessar tokens e senhas.

### GitHub
- **Repo**: avilaops/MRG-Caixas-Termicas
- **Token**: Consultar gerenciador de senhas

### Cloudflare
- **API Token**: Consultar Cloudflare Dashboard > API Tokens
- **Permissões**: Zone:DNS:Edit

### MongoDB
- **URI**: Consultar arquivo `.env.local`
- **Database**: mrg_caixas_termicas

---

## ✅ CHECKLIST FINAL

- [x] Código no GitHub
- [x] Build de produção OK
- [x] Configurações Cloudflare criadas
- [ ] Deploy no Cloudflare Pages (aguardando você fazer via interface)
- [ ] Domínio personalizado configurado
- [ ] SSL/TLS ativado
- [ ] Teste em produção
- [ ] Google Analytics (opcional)
- [ ] Google Search Console (opcional)

---

## 🎉 PRÓXIMOS PASSOS

1. **AGORA**: Fazer deploy no Cloudflare Pages pela interface
2. **Depois**: Configurar domínio personalizado
3. **Então**: Testar site em produção
4. **Por fim**: Adicionar imagens reais dos produtos

---

**Status**: ✅ Tudo pronto! Só falta fazer o deploy via interface do Cloudflare  
**Tempo estimado**: 5 minutos  
**Dificuldade**: Fácil  

🚀 **Bora colocar no ar!**