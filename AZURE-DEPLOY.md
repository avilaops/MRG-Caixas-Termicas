# 🚀 DEPLOY AZURE STATIC WEB APPS - MRG

## ✅ Arquivos Criados

- ✅ `.github/workflows/azure-static-web-apps.yml` - Deploy automático
- ✅ `staticwebapp.config.json` - Configuração Azure
- ✅ Build pronto na pasta `out/`

---

## 📋 PASSO A PASSO - PORTAL AZURE

### 1. Criar Static Web App no Azure

1. Acesse: https://portal.azure.com
2. Clique em **"Create a resource"**
3. Busque por **"Static Web App"**
4. Clique em **"Create"**

### 2. Configuração Básica

```
Subscription: Sua assinatura Azure
Resource Group: MRG-WebSite (ou criar novo)
Name: mrg-caixas-termicas
Plan type: Free
Region: East US 2 (ou mais próximo)
```

### 3. Deployment Details

```
Source: GitHub
GitHub Account: Conecte sua conta
Organization: avilaops
Repository: MRG-Caixas-Termicas
Branch: main
```

### 4. Build Details

```
Build Presets: Next.js
App location: /
Api location: (deixe vazio)
Output location: out
```

### 5. Review + Create

- Clique em **"Review + create"**
- Clique em **"Create"**
- Aguarde 2-3 minutos

### 6. Obter URL

Após criação, você terá uma URL:
```
https://mrg-caixas-termicas-xxxxx.azurestaticapps.net
```

---

## 🌐 CONFIGURAR DOMÍNIO PERSONALIZADO

### 1. No Portal Azure

1. Abra seu **Static Web App** criado
2. No menu lateral, clique em **"Custom domains"**
3. Clique em **"+ Add"**
4. Selecione **"Custom domain on other DNS"**
5. Digite: `mrgcaixastermicas.com.br`
6. Clique em **"Next"**

### 2. Configuração DNS

O Azure vai mostrar 2 registros para adicionar:

#### Registro CNAME (www)
```
Type: CNAME
Name: www
Value: mrg-caixas-termicas-xxxxx.azurestaticapps.net
TTL: 3600
```

#### Registro TXT (validação)
```
Type: TXT
Name: @
Value: xxxxx-validation-code-xxxxx
TTL: 3600
```

#### Registro ALIAS/CNAME (apex)
```
Type: ALIAS ou CNAME
Name: @
Value: mrg-caixas-termicas-xxxxx.azurestaticapps.net
TTL: 3600
```

### 3. Adicionar DNS no seu provedor

Acesse o painel DNS do seu domínio (Registro.br, GoDaddy, etc) e adicione os registros acima.

### 4. Validar no Azure

1. Volte no Azure Portal
2. Clique em **"Validate"**
3. Aguarde propagação (pode levar até 48h, geralmente 15-30 min)
4. SSL será gerado automaticamente

---

## 🔐 CONFIGURAR SECRETS DO GITHUB

O Azure criou automaticamente um secret no GitHub, mas vamos verificar:

1. Acesse: https://github.com/avilaops/MRG-Caixas-Termicas/settings/secrets/actions
2. Deve ter: `AZURE_STATIC_WEB_APPS_API_TOKEN`
3. Se não tiver, copie do Azure Portal:
   - Static Web App > Manage deployment token
   - Adicione como secret no GitHub

---

## 🔄 DEPLOY AUTOMÁTICO

Agora todo push no GitHub faz deploy automático:

```powershell
cd "d:\OneDrive - Avila DevOps\Clientes\MRG Caixas Termicas\website-nextjs"

# Fazer mudanças...

git add .
git commit -m "Atualização do site"
git push origin main
```

GitHub Actions vai:
1. ✅ Instalar dependências
2. ✅ Build Next.js
3. ✅ Deploy no Azure
4. ✅ Atualizar site automaticamente

---

## 🎯 URLs FINAIS

| Tipo | URL |
|------|-----|
| **Azure Default** | https://mrg-caixas-termicas-xxxxx.azurestaticapps.net |
| **Domínio Principal** | https://mrgcaixastermicas.com.br |
| **WWW** | https://www.mrgcaixastermicas.com.br |
| **GitHub** | https://github.com/avilaops/MRG-Caixas-Termicas |

---

## ⚡ RECURSOS AZURE HABILITADOS

- ✅ CDN Global (Microsoft)
- ✅ SSL/TLS Automático (Let's Encrypt)
- ✅ HTTP/2 e HTTP/3
- ✅ Deploy Preview (PRs)
- ✅ Rollback instantâneo
- ✅ Build cache
- ✅ DDoS protection (Azure)
- ✅ 99.95% SLA
- ✅ 100 GB bandwidth/mês (Free tier)

---

## 💾 INTEGRAÇÃO MONGODB (PRÓXIMO PASSO)

Depois do site no ar, podemos adicionar:

### 1. Criar Azure Functions para API

```
POST /api/contact - Receber orçamentos
GET /api/products - Listar produtos
POST /api/newsletter - Cadastrar email
```

### 2. Conectar MongoDB Atlas

```javascript
// api/contact.js
const { MongoClient } = require('mongodb');

module.exports = async function (context, req) {
    const client = new MongoClient(process.env.MONGODB_URI);
    await client.connect();
    
    const db = client.db('mrg_caixas_termicas');
    await db.collection('contacts').insertOne({
        ...req.body,
        createdAt: new Date()
    });
    
    context.res = { status: 200, body: { success: true } };
};
```

### 3. Configurar Variáveis

No Azure Portal > Configuration > Application settings:
```
MONGODB_URI=mongodb+srv://nicolasrosaab_db_user:Gio4EAQhbEdQMISl@cluster0.npuhras.mongodb.net/
MONGODB_DB=mrg_caixas_termicas
```

---

## 🔍 MONITORAMENTO

### Application Insights (Automático)

O Azure cria automaticamente:
- ✅ Logs de acesso
- ✅ Métricas de performance
- ✅ Alertas de erro
- ✅ Analytics de usuário

Acesse: Portal Azure > Static Web App > Application Insights

---

## ✅ CHECKLIST DE DEPLOY

- [ ] Criar Static Web App no Azure
- [ ] Conectar ao GitHub
- [ ] Aguardar primeiro deploy (2-3 min)
- [ ] Testar URL do Azure
- [ ] Adicionar domínio personalizado
- [ ] Configurar DNS (CNAME + TXT)
- [ ] Validar domínio
- [ ] Aguardar SSL (automático)
- [ ] Testar domínio final
- [ ] Configurar MongoDB (opcional)

---

## 🆘 TROUBLESHOOTING

### Deploy falhou?
- Veja logs em: GitHub > Actions
- Verifique se build local funciona: `npm run build`

### Domínio não valida?
- Aguarde propagação DNS (15-30 min)
- Verifique registros no provedor DNS
- Use: https://dnschecker.org

### SSL não ativa?
- SSL é automático após validação do domínio
- Pode levar até 1 hora após validação

---

**🚀 Pronto para fazer o deploy no Azure!**

**Tempo estimado total**: 10-15 minutos  
**Dificuldade**: Fácil (interface visual)  
**Custo**: $0 (Free tier até 100GB/mês)
