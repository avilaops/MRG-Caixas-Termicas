# ⚙️ SCRIPT DE CONFIGURAÇÃO AUTOMÁTICA - AZURE

## 📋 OPÇÕES DE CONFIGURAÇÃO

### Opção 1: Via Azure CLI (Automatizado)
### Opção 2: Via Portal Azure (Manual)
### Opção 3: Via GitHub Actions (CI/CD)

---

## 🚀 OPÇÃO 1: AZURE CLI (RECOMENDADO)

### Pré-requisitos:
```powershell
# Instalar Azure CLI
winget install Microsoft.AzureCLI

# Verificar instalação
az --version
```

### Script Completo:
```powershell
# ============================================
# CONFIGURAÇÃO AUTOMÁTICA AZURE STATIC WEB APPS
# MRG Caixas Térmicas
# ============================================

# 1. Login no Azure
Write-Host "🔐 Fazendo login no Azure..." -ForegroundColor Cyan
az login

# 2. Definir variáveis do recurso
$resourceGroup = "MRG-WebSite"
$appName = "mrg-caixas-termicas"
$location = "eastus2"

# 3. Verificar se o recurso já existe
Write-Host "🔍 Verificando Static Web App existente..." -ForegroundColor Cyan
$appExists = az staticwebapp show --name $appName --resource-group $resourceGroup 2>$null

if (!$appExists) {
    Write-Host "❌ Static Web App não encontrado." -ForegroundColor Yellow
    Write-Host "📝 Você precisa criar primeiro no Portal Azure:" -ForegroundColor Yellow
    Write-Host "   https://portal.azure.com" -ForegroundColor White
    exit 1
}

Write-Host "✅ Static Web App encontrado!" -ForegroundColor Green

# 4. Configurar TODAS as variáveis de ambiente
Write-Host "`n⚙️ Configurando variáveis de ambiente..." -ForegroundColor Cyan

# Variáveis obrigatórias
az staticwebapp appsettings set `
  --name $appName `
  --resource-group $resourceGroup `
  --setting-names `
    "MONGODB_URI=mongodb+srv://nicolasrosaab_db_user:Gio4EAQhbEdQMISl@cluster0.npuhras.mongodb.net/" `
    "MONGODB_DB=mrg_caixas_termicas" `
    "NEXT_PUBLIC_SITE_URL=https://mrgcaixastermicas.com.br" `
    "NEXT_PUBLIC_WHATSAPP_NUMBER=5511999999999" `
    "NEXT_PUBLIC_COMPANY_EMAIL=contato@mrgcaixastermicas.com.br" `
    "NEXT_PUBLIC_COMPANY_PHONE=+55 (11) 9999-9999" `
    "NEXT_PUBLIC_COMPANY_NAME=M.R.G. Caixas Térmicas LTDA" `
    "NEXT_PUBLIC_COMPANY_CNPJ=12.345.678/0001-99" `
    "NEXT_PUBLIC_COMPANY_ADDRESS=Rua das Indústrias, 123 - São Paulo, SP - CEP 01000-000" `
    "NEXT_PUBLIC_COMPANY_LOGO_URL=https://mrgcaixastermicas.com.br/logo.png" `
    "EMAIL_FROM=contato@mrgcaixastermicas.com.br" `
    "EMAIL_TO=nicolas.rosa@mrgcaixastermicas.com.br" `
    "API_SECRET_KEY=mrg_secret_key_2024_production_v1_secure_token" `
    "NODE_ENV=production"

if ($LASTEXITCODE -eq 0) {
    Write-Host "✅ Variáveis obrigatórias configuradas!" -ForegroundColor Green
} else {
    Write-Host "❌ Erro ao configurar variáveis!" -ForegroundColor Red
    exit 1
}

# 5. Configurar variáveis pendentes (serão preenchidas depois)
Write-Host "`n⏳ Configurando placeholders para integrações futuras..." -ForegroundColor Cyan

az staticwebapp appsettings set `
  --name $appName `
  --resource-group $resourceGroup `
  --setting-names `
    "SENDGRID_API_KEY=PENDING_CREATE_ACCOUNT" `
    "NEXT_PUBLIC_GA_MEASUREMENT_ID=PENDING" `
    "NEXT_PUBLIC_META_PIXEL_ID=PENDING" `
    "NEXT_PUBLIC_GOOGLE_TAG_MANAGER_ID=PENDING" `
    "NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=PENDING" `
    "NEXT_PUBLIC_RECAPTCHA_SITE_KEY=PENDING" `
    "RECAPTCHA_SECRET_KEY=PENDING" `
    "WHATSAPP_BUSINESS_ID=PENDING" `
    "WHATSAPP_ACCESS_TOKEN=PENDING" `
    "MERCADOPAGO_PUBLIC_KEY=PENDING" `
    "MERCADOPAGO_ACCESS_TOKEN=PENDING" `
    "AWS_S3_BUCKET=mrg-caixas-uploads" `
    "AWS_ACCESS_KEY_ID=PENDING" `
    "AWS_SECRET_ACCESS_KEY=PENDING" `
    "AWS_REGION=us-east-1"

Write-Host "✅ Placeholders configurados!" -ForegroundColor Green

# 6. Listar todas as variáveis configuradas
Write-Host "`n📋 Variáveis configuradas:" -ForegroundColor Cyan
az staticwebapp appsettings list `
  --name $appName `
  --resource-group $resourceGroup `
  --output table

# 7. Obter URL do site
Write-Host "`n🌐 Obtendo URL do site..." -ForegroundColor Cyan
$appUrl = az staticwebapp show `
  --name $appName `
  --resource-group $resourceGroup `
  --query "defaultHostname" `
  --output tsv

Write-Host "`n✅ CONFIGURAÇÃO CONCLUÍDA!" -ForegroundColor Green
Write-Host "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━" -ForegroundColor Gray
Write-Host "📊 Resumo:" -ForegroundColor Cyan
Write-Host "   • 13 variáveis obrigatórias: ✅" -ForegroundColor White
Write-Host "   • 15 variáveis pendentes: ⏳" -ForegroundColor White
Write-Host "   • Total: 28 variáveis configuradas" -ForegroundColor White
Write-Host "`n🌐 URL do site:" -ForegroundColor Cyan
Write-Host "   https://$appUrl" -ForegroundColor White
Write-Host "`n📝 Próximos passos:" -ForegroundColor Cyan
Write-Host "   1. Aguardar re-deploy automático (2-3 min)" -ForegroundColor White
Write-Host "   2. Configurar DNS do domínio mrgcaixastermicas.com.br" -ForegroundColor White
Write-Host "   3. Criar conta SendGrid para emails" -ForegroundColor White
Write-Host "   4. Configurar Google Analytics e Meta Pixel" -ForegroundColor White
Write-Host "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━" -ForegroundColor Gray
```

### Executar:
```powershell
cd "D:\OneDrive - Avila DevOps\Clientes\MRG Caixas Termicas\website-nextjs"
.\configure-azure.ps1
```

---

## 🌐 OPÇÃO 2: PORTAL AZURE (MANUAL)

### Passo a Passo:

1. **Acessar Portal:**
   - URL: https://portal.azure.com
   - Procurar por: "Static Web Apps"
   - Selecionar: `mrg-caixas-termicas`

2. **Navegar para Configuração:**
   - Menu lateral: **Configuration**
   - Aba: **Application settings**

3. **Adicionar Variáveis (uma por vez):**
   - Clicar em **+ Add**
   - Copiar `Name` e `Value` de AZURE-VARIABLES.md
   - Clicar em **OK**
   - Repetir para todas as 28 variáveis

4. **Salvar:**
   - Clicar em **Save** no topo
   - Aguardar confirmação
   - Site será automaticamente re-deployed

**Tempo estimado:** 10-15 minutos

---

## 🔄 OPÇÃO 3: VIA GITHUB ACTIONS (CI/CD)

### Adicionar ao workflow existente:

```yaml
# .github/workflows/azure-static-web-apps.yml

# Adicionar step antes do deploy:

- name: Set Azure Environment Variables
  run: |
    az login --service-principal \
      -u ${{ secrets.AZURE_CLIENT_ID }} \
      -p ${{ secrets.AZURE_CLIENT_SECRET }} \
      --tenant ${{ secrets.AZURE_TENANT_ID }}
    
    az staticwebapp appsettings set \
      --name mrg-caixas-termicas \
      --resource-group MRG-WebSite \
      --setting-names \
        MONGODB_URI="${{ secrets.MONGODB_URI }}" \
        MONGODB_DB="mrg_caixas_termicas" \
        NEXT_PUBLIC_SITE_URL="https://mrgcaixastermicas.com.br"
        # ... outras variáveis
```

**Nota:** Requer configuração de Service Principal no Azure

---

## 📊 VALIDAÇÃO DA CONFIGURAÇÃO

### Verificar variáveis no Azure:
```powershell
az staticwebapp appsettings list `
  --name mrg-caixas-termicas `
  --resource-group MRG-WebSite `
  --output table
```

### Testar variáveis no site:
```powershell
# Criar página de teste
# /src/pages/api/test-env.ts
```

```typescript
export default function handler(req, res) {
  res.status(200).json({
    mongodb: !!process.env.MONGODB_URI,
    email: !!process.env.EMAIL_FROM,
    site_url: process.env.NEXT_PUBLIC_SITE_URL,
    whatsapp: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER,
    // ... verificar outras variáveis públicas
  });
}
```

Acessar: `https://[seu-site].azurestaticapps.net/api/test-env`

---

## 🆘 TROUBLESHOOTING

### Erro: "Resource not found"
**Solução:** Criar Static Web App primeiro no Portal Azure

### Erro: "Unauthorized"
**Solução:** Executar `az login` novamente

### Variáveis não aparecem no site
**Solução:** 
1. Verificar se começam com `NEXT_PUBLIC_` para variáveis públicas
2. Aguardar re-deploy completar
3. Limpar cache do browser

### Re-deploy não acontece automaticamente
**Solução:**
```powershell
# Forçar re-deploy via commit vazio
git commit --allow-empty -m "Force redeploy"
git push origin main
```

---

## ✅ CHECKLIST PÓS-CONFIGURAÇÃO

- [ ] Todas as 28 variáveis configuradas
- [ ] Site re-deployed com sucesso
- [ ] Variáveis públicas acessíveis no browser
- [ ] Conexão MongoDB testada (quando adicionar API)
- [ ] DNS configurado para mrgcaixastermicas.com.br
- [ ] SSL ativo e funcionando
- [ ] SendGrid configurado e emails enviando
- [ ] Analytics rastreando visitantes

---

**Status:** 🚀 Pronto para executar  
**Recomendação:** Use a Opção 1 (Azure CLI) para automação completa
