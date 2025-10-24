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
    Write-Host ""
    Write-Host "Ou deseja criar agora via CLI? (S/N)" -ForegroundColor Cyan
    $create = Read-Host
    
    if ($create -eq "S" -or $create -eq "s") {
        Write-Host "🚀 Criando Static Web App..." -ForegroundColor Cyan
        
        # Criar resource group se não existir
        az group create --name $resourceGroup --location $location
        
        # Criar Static Web App
        az staticwebapp create `
            --name $appName `
            --resource-group $resourceGroup `
            --source https://github.com/avilaops/MRG-Caixas-Termicas `
            --location $location `
            --branch main `
            --app-location "/" `
            --output-location "out" `
            --login-with-github
        
        Write-Host "✅ Static Web App criado!" -ForegroundColor Green
    } else {
        exit 0
    }
}

Write-Host "✅ Static Web App encontrado!" -ForegroundColor Green

# 4. Configurar TODAS as variáveis de ambiente
Write-Host "`n⚙️ Configurando variáveis de ambiente..." -ForegroundColor Cyan

# Variáveis obrigatórias
Write-Host "📦 Configurando variáveis obrigatórias..." -ForegroundColor Cyan
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

# 8. Obter deployment token para GitHub
Write-Host "`n🔑 Obtendo deployment token..." -ForegroundColor Cyan
$deployToken = az staticwebapp secrets list `
  --name $appName `
  --resource-group $resourceGroup `
  --query "properties.apiKey" `
  --output tsv

Write-Host "`n✅ CONFIGURAÇÃO CONCLUÍDA!" -ForegroundColor Green
Write-Host "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━" -ForegroundColor Gray
Write-Host "📊 Resumo:" -ForegroundColor Cyan
Write-Host "   • Resource Group: $resourceGroup" -ForegroundColor White
Write-Host "   • App Name: $appName" -ForegroundColor White
Write-Host "   • 13 variáveis obrigatórias: ✅" -ForegroundColor White
Write-Host "   • 15 variáveis pendentes: ⏳" -ForegroundColor White
Write-Host "   • Total: 28 variáveis configuradas" -ForegroundColor White
Write-Host "`n🌐 URL do site:" -ForegroundColor Cyan
Write-Host "   https://$appUrl" -ForegroundColor White
Write-Host "`n🔑 GitHub Secret (AZURE_STATIC_WEB_APPS_API_TOKEN):" -ForegroundColor Cyan
Write-Host "   $deployToken" -ForegroundColor Yellow
Write-Host "`n📝 Próximos passos:" -ForegroundColor Cyan
Write-Host "   1. Adicionar o token acima em GitHub Secrets" -ForegroundColor White
Write-Host "      URL: https://github.com/avilaops/MRG-Caixas-Termicas/settings/secrets/actions" -ForegroundColor White
Write-Host "   2. Aguardar re-deploy automático (2-3 min)" -ForegroundColor White
Write-Host "   3. Configurar DNS do domínio mrgcaixastermicas.com.br" -ForegroundColor White
Write-Host "   4. Criar conta SendGrid para emails" -ForegroundColor White
Write-Host "   5. Configurar Google Analytics e Meta Pixel" -ForegroundColor White
Write-Host "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━" -ForegroundColor Gray

# 9. Copiar token para clipboard (se disponível)
if (Get-Command Set-Clipboard -ErrorAction SilentlyContinue) {
    $deployToken | Set-Clipboard
    Write-Host "`n📋 Token copiado para clipboard!" -ForegroundColor Green
}

Write-Host "`nPressione qualquer tecla para continuar..."
$null = $Host.UI.RawUI.ReadKey("NoEcho,IncludeKeyDown")
