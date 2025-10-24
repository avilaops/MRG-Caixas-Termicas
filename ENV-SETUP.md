# 🔐 CONFIGURAÇÃO DE VARIÁVEIS DE AMBIENTE - MRG

## 📋 ÍNDICE

1. [Variáveis Obrigatórias (Deploy Imediato)](#obrigatórias)
2. [Variáveis Recomendadas (Funcionalidades Completas)](#recomendadas)
3. [Variáveis Opcionais (Futuras Integrações)](#opcionais)
4. [Como Configurar no Azure Static Web Apps](#azure-config)
5. [Como Configurar no GitHub](#github-config)
6. [Como Configurar Localmente](#local-config)

---

## 🚨 OBRIGATÓRIAS (Deploy Imediato)

### 1. MongoDB (Database)
```bash
MONGODB_URI=mongodb+srv://nicolasrosaab_db_user:Gio4EAQhbEdQMISl@cluster0.npuhras.mongodb.net/
MONGODB_DB=mrg_caixas_termicas
```
**Onde usar:** Azure + Local  
**Quando:** Quando adicionar formulários de contato/orçamento

### 2. Informações Públicas do Site
```bash
NEXT_PUBLIC_SITE_URL=https://mrgcaixastermicas.com.br
NEXT_PUBLIC_WHATSAPP_NUMBER=5511999999999
NEXT_PUBLIC_COMPANY_EMAIL=contato@mrgcaixastermicas.com.br
NEXT_PUBLIC_COMPANY_PHONE=+55 (11) 9999-9999
```
**Onde usar:** Azure + Local  
**Quando:** Agora (já usado nos componentes)

### 3. Azure Deploy Token (Automático)
```bash
AZURE_STATIC_WEB_APPS_API_TOKEN=<gerado_pelo_azure>
```
**Onde usar:** GitHub Secrets  
**Quando:** Automaticamente ao criar Static Web App

---

## ✅ RECOMENDADAS (Funcionalidades Completas)

### 4. Email Notifications (SendGrid)
```bash
SENDGRID_API_KEY=SG.xxxxxxxxxxxxxxxxxx
EMAIL_FROM=contato@mrgcaixastermicas.com.br
EMAIL_TO=nicolas@mrgcaixastermicas.com.br
```
**Onde usar:** Azure  
**Quando:** Para receber notificações de formulários

**Como obter:**
1. Criar conta: https://sendgrid.com/
2. Plano Free: 100 emails/dia grátis
3. API Keys → Create API Key
4. Permissions: Full Access

### 5. Google Analytics
```bash
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
```
**Onde usar:** Azure + Local  
**Quando:** Para tracking de visitantes

**Como obter:**
1. Google Analytics: https://analytics.google.com/
2. Admin → Data Streams → Add stream
3. Copiar Measurement ID (G-XXXXXXXX)

### 6. Meta Pixel (Facebook Ads)
```bash
NEXT_PUBLIC_META_PIXEL_ID=1234567890123456
```
**Onde usar:** Azure + Local  
**Quando:** Para remarketing/conversões

**Como obter:**
1. Meta Business Suite: https://business.facebook.com/
2. Events Manager → Pixels → Create
3. Copiar Pixel ID

---

## 🔧 OPCIONAIS (Futuras Integrações)

### 7. Google Maps API
```bash
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=AIzaSyXXXXXXXXXXXXXXXX
```
**Quando:** Para mapa de localização da fábrica

### 8. reCAPTCHA (Anti-spam)
```bash
NEXT_PUBLIC_RECAPTCHA_SITE_KEY=6LeXXXXXXXXXXXXXXXXXXX
RECAPTCHA_SECRET_KEY=6LeXXXXXXXXXXXXXXXXXXX
```
**Quando:** Para proteger formulários

### 9. WhatsApp Business API
```bash
WHATSAPP_BUSINESS_ID=123456789012345
WHATSAPP_ACCESS_TOKEN=EAXXXXXXXXXXXXXXXX
```
**Quando:** Para automação de mensagens

### 10. Payment Gateway (Mercado Pago)
```bash
MERCADOPAGO_PUBLIC_KEY=APP_USR-XXXXXXXX
MERCADOPAGO_ACCESS_TOKEN=APP_USR-XXXXXXXX
```
**Quando:** Para aceitar pagamentos online

### 11. AWS S3 (Armazenamento)
```bash
AWS_S3_BUCKET=mrg-caixas-uploads
AWS_ACCESS_KEY_ID=AKIAXXXXXXXXXXXXXXXX
AWS_SECRET_ACCESS_KEY=XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
AWS_REGION=us-east-1
```
**Quando:** Para upload de fotos de produtos

---

## 🔵 COMO CONFIGURAR NO AZURE STATIC WEB APPS

### Passo 1: Acessar Portal Azure
1. https://portal.azure.com
2. Seu Static Web App → **Configuration**
3. **Application settings**

### Passo 2: Adicionar Variáveis
```
Nome                              | Valor
----------------------------------|----------------------------------------
MONGODB_URI                       | mongodb+srv://nicolasrosaab_db...
MONGODB_DB                        | mrg_caixas_termicas
NEXT_PUBLIC_SITE_URL              | https://mrgcaixastermicas.com.br
NEXT_PUBLIC_WHATSAPP_NUMBER       | 5511999999999
NEXT_PUBLIC_COMPANY_EMAIL         | contato@mrgcaixastermicas.com.br
NEXT_PUBLIC_COMPANY_PHONE         | +55 (11) 9999-9999
SENDGRID_API_KEY                  | SG.xxxxxxxxxxxxxxx
EMAIL_FROM                        | contato@mrgcaixastermicas.com.br
EMAIL_TO                          | nicolas@mrgcaixastermicas.com.br
NEXT_PUBLIC_GA_MEASUREMENT_ID     | G-XXXXXXXXXX
NEXT_PUBLIC_META_PIXEL_ID         | 1234567890123456
```

### Passo 3: Salvar
- Clique em **Save**
- O site será automaticamente re-deployed

---

## 🐙 COMO CONFIGURAR NO GITHUB

### Passo 1: Acessar Secrets
1. https://github.com/avilaops/MRG-Caixas-Termicas
2. **Settings** → **Secrets and variables** → **Actions**

### Passo 2: Adicionar Secrets
```
Nome                                    | Valor
----------------------------------------|------------------------
AZURE_STATIC_WEB_APPS_API_TOKEN        | (gerado pelo Azure)
```

⚠️ **IMPORTANTE:**
- O `GITHUB_TOKEN` é **automático** (não precisa adicionar)
- Outros secrets só se necessário no build

---

## 💻 COMO CONFIGURAR LOCALMENTE

### Passo 1: Criar arquivo `.env.local`
```bash
cd D:\OneDrive - Avila DevOps\Clientes\MRG Caixas Termicas\website-nextjs
New-Item -ItemType File -Name .env.local
```

### Passo 2: Copiar do `.env.example`
```bash
Copy-Item .env.example .env.local
```

### Passo 3: Editar `.env.local`
Abra no VS Code e preencha os valores reais:
```bash
code .env.local
```

### Passo 4: Verificar `.gitignore`
Confirmar que `.env.local` está no `.gitignore`:
```gitignore
# Environment variables
.env.local
.env.development.local
.env.test.local
.env.production.local
```

---

## 📝 CHECKLIST DE SETUP

### Fase 1: Deploy Básico (Agora)
- [ ] Criar Static Web App no Azure
- [ ] Verificar `AZURE_STATIC_WEB_APPS_API_TOKEN` no GitHub Secrets
- [ ] Configurar variáveis `NEXT_PUBLIC_*` no Azure
- [ ] Testar deploy

### Fase 2: Funcionalidades Completas (Semana 1)
- [ ] Configurar MongoDB URI no Azure
- [ ] Criar conta SendGrid e configurar EMAIL
- [ ] Adicionar Google Analytics
- [ ] Testar formulário de contato

### Fase 3: Marketing & Analytics (Semana 2)
- [ ] Configurar Meta Pixel
- [ ] Adicionar reCAPTCHA nos formulários
- [ ] Configurar Google Tag Manager

### Fase 4: Integrações Avançadas (Futuro)
- [ ] WhatsApp Business API
- [ ] Gateway de Pagamento
- [ ] AWS S3 para uploads

---

## 🆘 TROUBLESHOOTING

### Problema: Variável não aparece no build
**Solução:** Variáveis públicas devem começar com `NEXT_PUBLIC_`

### Problema: Build falha no Azure
**Solução:** Verificar se variáveis obrigatórias estão configuradas

### Problema: MongoDB não conecta
**Solução:** 
1. Verificar IP whitelist no MongoDB Atlas
2. Adicionar `0.0.0.0/0` para permitir Azure IPs

### Problema: Email não envia
**Solução:**
1. Verificar SendGrid API Key
2. Verificar domain authentication no SendGrid

---

## 📞 PRÓXIMOS PASSOS

1. **AGORA:** Configure as variáveis OBRIGATÓRIAS no Azure
2. **HOJE:** Configure SendGrid para emails
3. **ESTA SEMANA:** Configure Analytics e Meta Pixel
4. **FUTURO:** Integrações avançadas conforme necessidade

---

**Status:** 📝 Pronto para configuração  
**Última atualização:** {{ current_date }}
