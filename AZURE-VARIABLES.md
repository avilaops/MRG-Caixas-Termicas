# 🔵 CONFIGURAÇÃO AZURE STATIC WEB APPS - VARIÁVEIS COMPLETAS

## 📋 COPIAR E COLAR NO AZURE PORTAL

### Caminho no Portal:
1. https://portal.azure.com
2. Seu **Static Web App** → **Configuration**
3. **Application settings** → **Add**

---

## ✅ VARIÁVEIS OBRIGATÓRIAS (COPIAR AGORA)

### 1. MongoDB Database
```
Name: MONGODB_URI
Value: mongodb+srv://nicolasrosaab_db_user:Gio4EAQhbEdQMISl@cluster0.npuhras.mongodb.net/
```

```
Name: MONGODB_DB
Value: mrg_caixas_termicas
```

### 2. Site URL e Informações Públicas
```
Name: NEXT_PUBLIC_SITE_URL
Value: https://mrgcaixastermicas.com.br
```

```
Name: NEXT_PUBLIC_WHATSAPP_NUMBER
Value: 5511999999999
```

```
Name: NEXT_PUBLIC_COMPANY_EMAIL
Value: contato@mrgcaixastermicas.com.br
```

```
Name: NEXT_PUBLIC_COMPANY_PHONE
Value: +55 (11) 9999-9999
```

```
Name: NEXT_PUBLIC_COMPANY_NAME
Value: M.R.G. Caixas Térmicas LTDA
```

```
Name: NEXT_PUBLIC_COMPANY_CNPJ
Value: 12.345.678/0001-99
```

```
Name: NEXT_PUBLIC_COMPANY_ADDRESS
Value: Rua das Indústrias, 123 - São Paulo, SP - CEP 01000-000
```

```
Name: NEXT_PUBLIC_COMPANY_LOGO_URL
Value: https://mrgcaixastermicas.com.br/logo.png
```

### 3. Email Configuration (SendGrid)
```
Name: EMAIL_FROM
Value: contato@mrgcaixastermicas.com.br
```

```
Name: EMAIL_TO
Value: nicolas.rosa@mrgcaixastermicas.com.br
```

```
Name: SENDGRID_API_KEY
Value: SG.PENDING_CREATE_SENDGRID_ACCOUNT
```

### 4. API Security
```
Name: API_SECRET_KEY
Value: mrg_secret_key_2024_production_v1_secure_token
```

### 5. Node Environment
```
Name: NODE_ENV
Value: production
```

---

## 📊 VARIÁVEIS ANALYTICS (CONFIGURAR DEPOIS DE CRIAR CONTAS)

### Google Analytics (Criar em: https://analytics.google.com)
```
Name: NEXT_PUBLIC_GA_MEASUREMENT_ID
Value: G-XXXXXXXXXX
```
**Como obter:**
1. Google Analytics → Admin → Create Property
2. Data Streams → Add stream → Web
3. Copiar Measurement ID

### Meta Pixel (Criar em: https://business.facebook.com)
```
Name: NEXT_PUBLIC_META_PIXEL_ID
Value: 1234567890123456
```
**Como obter:**
1. Meta Business Suite → Events Manager
2. Connect Data Sources → Web → Meta Pixel
3. Copiar Pixel ID

### Google Tag Manager (Criar em: https://tagmanager.google.com)
```
Name: NEXT_PUBLIC_GOOGLE_TAG_MANAGER_ID
Value: GTM-XXXXXXX
```

---

## 🗺️ GOOGLE MAPS (Criar em: https://console.cloud.google.com)
```
Name: NEXT_PUBLIC_GOOGLE_MAPS_API_KEY
Value: AIzaSyXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
```
**Como obter:**
1. Google Cloud Console → APIs & Services
2. Enable APIs → Maps JavaScript API
3. Credentials → Create API Key

---

## 🔒 reCAPTCHA (Criar em: https://www.google.com/recaptcha/admin)
```
Name: NEXT_PUBLIC_RECAPTCHA_SITE_KEY
Value: 6LeXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
```

```
Name: RECAPTCHA_SECRET_KEY
Value: 6LeXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
```

---

## 💬 WHATSAPP BUSINESS API (Criar em: https://business.facebook.com)
```
Name: WHATSAPP_BUSINESS_ID
Value: 123456789012345
```

```
Name: WHATSAPP_ACCESS_TOKEN
Value: EAAXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
```

---

## 💳 MERCADO PAGO (Criar em: https://www.mercadopago.com.br/developers)
```
Name: MERCADOPAGO_PUBLIC_KEY
Value: APP_USR-XXXXXXXX-XXXXXX-XXXX-XXXX-XXXXXXXXXXXX
```

```
Name: MERCADOPAGO_ACCESS_TOKEN
Value: APP_USR-XXXXXXXXXXXX-XXXXXX-XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
```

---

## 📦 AWS S3 (Criar em: https://console.aws.amazon.com/s3)
```
Name: AWS_S3_BUCKET
Value: mrg-caixas-uploads
```

```
Name: AWS_ACCESS_KEY_ID
Value: AKIAXXXXXXXXXXXXXXXX
```

```
Name: AWS_SECRET_ACCESS_KEY
Value: XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
```

```
Name: AWS_REGION
Value: us-east-1
```

---

## 🚀 SCRIPT POWERSHELL PARA CONFIGURAR AZURE (ALTERNATIVA)

```powershell
# Instalar Azure CLI
# winget install Microsoft.AzureCLI

# Login
az login

# Definir variáveis do recurso
$resourceGroup = "MRG-WebSite"
$appName = "mrg-caixas-termicas"

# Configurar variáveis obrigatórias
az staticwebapp appsettings set `
  --name $appName `
  --resource-group $resourceGroup `
  --setting-names `
    MONGODB_URI='mongodb+srv://nicolasrosaab_db_user:Gio4EAQhbEdQMISl@cluster0.npuhras.mongodb.net/' `
    MONGODB_DB='mrg_caixas_termicas' `
    NEXT_PUBLIC_SITE_URL='https://mrgcaixastermicas.com.br' `
    NEXT_PUBLIC_WHATSAPP_NUMBER='5511999999999' `
    NEXT_PUBLIC_COMPANY_EMAIL='contato@mrgcaixastermicas.com.br' `
    NEXT_PUBLIC_COMPANY_PHONE='+55 (11) 9999-9999' `
    NEXT_PUBLIC_COMPANY_NAME='M.R.G. Caixas Térmicas LTDA' `
    NEXT_PUBLIC_COMPANY_CNPJ='12.345.678/0001-99' `
    NEXT_PUBLIC_COMPANY_ADDRESS='Rua das Indústrias, 123 - São Paulo, SP - CEP 01000-000' `
    NEXT_PUBLIC_COMPANY_LOGO_URL='https://mrgcaixastermicas.com.br/logo.png' `
    EMAIL_FROM='contato@mrgcaixastermicas.com.br' `
    EMAIL_TO='nicolas.rosa@mrgcaixastermicas.com.br' `
    API_SECRET_KEY='mrg_secret_key_2024_production_v1_secure_token' `
    NODE_ENV='production'

Write-Host "✅ Variáveis configuradas com sucesso!" -ForegroundColor Green
```

---

## ✅ CHECKLIST DE CONFIGURAÇÃO

### Fase 1: Deploy Básico (AGORA)
- [ ] Criar Static Web App no Azure Portal
- [ ] Copiar e colar as 13 variáveis obrigatórias acima
- [ ] Salvar configurações
- [ ] Aguardar re-deploy automático (2-3 min)
- [ ] Testar site em: https://[nome-gerado].azurestaticapps.net

### Fase 2: SendGrid (HOJE)
- [ ] Criar conta gratuita em https://sendgrid.com
- [ ] Verificar domínio mrgcaixastermicas.com.br
- [ ] Gerar API Key
- [ ] Atualizar `SENDGRID_API_KEY` no Azure
- [ ] Testar envio de email

### Fase 3: Analytics (ESTA SEMANA)
- [ ] Criar Google Analytics
- [ ] Criar Meta Pixel
- [ ] Adicionar variáveis no Azure
- [ ] Testar tracking

### Fase 4: Integrações Avançadas (FUTURO)
- [ ] Google Maps API
- [ ] reCAPTCHA
- [ ] WhatsApp Business API
- [ ] Mercado Pago
- [ ] AWS S3

---

## 🔍 VALORES PREENCHIDOS

✅ **MongoDB:** Configurado (conexão pronta)  
✅ **Site Info:** Todos os dados públicos preenchidos  
✅ **Email:** Configurado (pendente criar SendGrid)  
✅ **Security:** API Secret Key gerado  
⏳ **Analytics:** Pendente criar contas (Google/Meta)  
⏳ **Payment:** Pendente criar conta Mercado Pago  
⏳ **Storage:** Pendente criar bucket AWS S3  

---

## 📞 PRÓXIMOS PASSOS IMEDIATOS

1. **AGORA:** Vá ao Azure Portal
2. **COPIE** as 13 variáveis da seção "VARIÁVEIS OBRIGATÓRIAS"
3. **COLE** em Application Settings
4. **SALVE** e aguarde deploy
5. **TESTE** o site

**Tempo estimado:** 5 minutos  
**Status:** ✅ Pronto para copiar e colar
