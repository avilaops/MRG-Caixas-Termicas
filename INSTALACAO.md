# 🚀 Guia de Instalação - MRG Caixas Térmicas Website

## Passo 1: Instalação das Dependências

Abra o PowerShell e navegue até a pasta do projeto:

```powershell
cd "d:\OneDrive - Avila DevOps\Clientes\MRG Caixas Termicas\website-nextjs"
```

Instale todas as dependências:

```powershell
npm install
```

**Tempo estimado**: 2-3 minutos

## Passo 2: Executar em Modo Desenvolvimento

Após a instalação, inicie o servidor de desenvolvimento:

```powershell
npm run dev
```

Aguarde a mensagem:
```
ready - started server on 0.0.0.0:3000, url: http://localhost:3000
```

Abra seu navegador em: **http://localhost:3000**

## Passo 3: Verificar o Site

Você deverá ver:
- ✅ Home page com hero e produtos
- ✅ Navegação funcionando (Home, Produtos, Aplicações, Sobre, Contato)
- ✅ Design responsivo
- ✅ Cores e tipografia corretas

## Passo 4: Adicionar Imagens (Opcional)

Crie a estrutura de pastas para imagens:

```powershell
New-Item -Path "public/images/products" -ItemType Directory -Force
New-Item -Path "public/images/applications" -ItemType Directory -Force
New-Item -Path "public/images/factory" -ItemType Directory -Force
```

Copie suas imagens para estas pastas.

## Passo 5: Build para Produção

Quando estiver pronto para publicar:

```powershell
npm run build
```

Isso criará uma versão otimizada do site.

## Passo 6: Exportar para GitHub Pages

```powershell
npm run export
```

Os arquivos estáticos serão gerados na pasta `out/`

## Passo 7: Configurar GitHub Repository

Se ainda não tiver um repositório:

```powershell
git init
git add .
git commit -m "Initial commit - MRG Website"
git branch -M main
git remote add origin https://github.com/aviladevs/mrg-caixas-termicas.git
git push -u origin main
```

## Passo 8: Deploy no GitHub Pages

```powershell
npm run deploy
```

Seu site ficará disponível em:
**https://aviladevs.github.io/mrg-caixas-termicas**

## 🔧 Comandos Úteis

| Comando | Descrição |
|---------|-----------|
| `npm run dev` | Inicia servidor de desenvolvimento |
| `npm run build` | Cria build de produção |
| `npm run start` | Inicia servidor de produção |
| `npm run export` | Exporta arquivos estáticos |
| `npm run deploy` | Faz deploy no GitHub Pages |
| `npm run lint` | Verifica erros de código |

## 🐛 Solução de Problemas

### Erro: "Cannot find module"
```powershell
Remove-Item -Recurse -Force node_modules
Remove-Item package-lock.json
npm install
```

### Erro: "Port 3000 is already in use"
```powershell
# Use outra porta
npm run dev -- -p 3001
```

### Erro de Permissão no PowerShell
```powershell
Set-ExecutionPolicy -Scope CurrentUser -ExecutionPolicy RemoteSigned
```

## 📞 Suporte

Problemas ou dúvidas?
- **Email**: contato@aviladevops.com
- **WhatsApp**: (17) 99988-7766

---

**Próximos Passos**:
1. ✅ Adicionar imagens reais dos produtos
2. ✅ Configurar domínio personalizado (www.mrgcaixastermicas.com.br)
3. ✅ Adicionar Google Analytics
4. ✅ Testar formulário de contato
5. ✅ Configurar certificado SSL