# Script de Instalação - MRG Website
# Execute este arquivo no PowerShell para configurar o projeto

Write-Host "========================================" -ForegroundColor Cyan
Write-Host "  MRG Caixas Térmicas - Instalação" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""

# Verifica se Node.js está instalado
Write-Host "[1/5] Verificando Node.js..." -ForegroundColor Yellow
try {
    $nodeVersion = node --version
    Write-Host "✓ Node.js encontrado: $nodeVersion" -ForegroundColor Green
} catch {
    Write-Host "✗ Node.js não encontrado! Por favor, instale Node.js 18+ primeiro." -ForegroundColor Red
    Write-Host "Download: https://nodejs.org" -ForegroundColor Yellow
    exit 1
}

# Navega para o diretório do projeto
$projectPath = "d:\OneDrive - Avila DevOps\Clientes\MRG Caixas Termicas\website-nextjs"
Write-Host ""
Write-Host "[2/5] Navegando para o projeto..." -ForegroundColor Yellow
Set-Location $projectPath
Write-Host "✓ Diretório: $projectPath" -ForegroundColor Green

# Instala dependências
Write-Host ""
Write-Host "[3/5] Instalando dependências (aguarde 2-3 min)..." -ForegroundColor Yellow
npm install
if ($LASTEXITCODE -eq 0) {
    Write-Host "✓ Dependências instaladas com sucesso!" -ForegroundColor Green
} else {
    Write-Host "✗ Erro ao instalar dependências" -ForegroundColor Red
    exit 1
}

# Cria estrutura de pastas para imagens
Write-Host ""
Write-Host "[4/5] Criando estrutura de pastas..." -ForegroundColor Yellow
New-Item -Path "public/images/products" -ItemType Directory -Force | Out-Null
New-Item -Path "public/images/applications" -ItemType Directory -Force | Out-Null
New-Item -Path "public/images/factory" -ItemType Directory -Force | Out-Null
New-Item -Path "public/images/about" -ItemType Directory -Force | Out-Null
Write-Host "✓ Pastas criadas!" -ForegroundColor Green

# Finalização
Write-Host ""
Write-Host "[5/5] Configuração concluída!" -ForegroundColor Yellow
Write-Host ""
Write-Host "========================================" -ForegroundColor Cyan
Write-Host "  INSTALAÇÃO CONCLUÍDA COM SUCESSO!" -ForegroundColor Green
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""
Write-Host "Próximos passos:" -ForegroundColor Yellow
Write-Host "  1. Executar em desenvolvimento:" -ForegroundColor White
Write-Host "     npm run dev" -ForegroundColor Cyan
Write-Host ""
Write-Host "  2. Abrir no navegador:" -ForegroundColor White
Write-Host "     http://localhost:3000" -ForegroundColor Cyan
Write-Host ""
Write-Host "  3. Para produção:" -ForegroundColor White
Write-Host "     npm run build" -ForegroundColor Cyan
Write-Host "     npm run export" -ForegroundColor Cyan
Write-Host ""
Write-Host "Pressione qualquer tecla para iniciar o servidor de desenvolvimento..."
$null = $Host.UI.RawUI.ReadKey("NoEcho,IncludeKeyDown")

# Inicia o servidor de desenvolvimento
Write-Host ""
Write-Host "Iniciando servidor de desenvolvimento..." -ForegroundColor Yellow
npm run dev