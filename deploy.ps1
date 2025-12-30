# SPERA SVM-700Ai Deployment Script

param (
    [string]$SiteName = "SperaGlobal",
    [string]$SitePath = "C:\inetpub\wwwroot\SperaGlobal",
    [string]$AppPath = $PSScriptRoot
)

Write-Host "Starting Deployment for $SiteName..." -ForegroundColor Cyan

# 1. Check for Node.js
try {
    $nodeVersion = node -v
    Write-Host "Node.js found: $nodeVersion" -ForegroundColor Green
} catch {
    Write-Host "Node.js not found. Please install Node.js LTS manually." -ForegroundColor Red
    exit 1
}

# 2. Build the Application
Write-Host "Building Next.js Application..." -ForegroundColor Cyan
Set-Location $AppPath
npm install
npm run build

if ($LASTEXITCODE -ne 0) {
    Write-Host "Build failed!" -ForegroundColor Red
    exit 1
}

# 3. Copy Files to IIS Directory
if (-not (Test-Path $SitePath)) {
    New-Item -ItemType Directory -Path $SitePath -Force | Out-Null
}

Write-Host "Copying files to $SitePath..." -ForegroundColor Cyan
# Copy standalone build (using output: standalone in next.config.ts is recommended for IIS)
# We assume 'output: "standalone"' will be configured in next.config.ts

if (Test-Path "$AppPath\.next\standalone") {
    Copy-Item -Path "$AppPath\.next\standalone\*" -Destination $SitePath -Recurse -Force
    Copy-Item -Path "$AppPath\public" -Destination "$SitePath\public" -Recurse -Force
    Copy-Item -Path "$AppPath\.next\static" -Destination "$SitePath\.next\static" -Recurse -Force
} else {
    Write-Warning "Standalone build not found. Copying standard .next folder (Requires iisnode or similar)."
    Copy-Item -Path "$AppPath\.next" -Destination $SitePath -Recurse -Force
    Copy-Item -Path "$AppPath\public" -Destination $SitePath -Recurse -Force
    Copy-Item -Path "$AppPath\package.json" -Destination $SitePath -Force
}

# 4. IIS Configuration (Simplified)
# Assumes IIS is installed. 
# You would typically use `iisnode` or a Reverse Proxy (ARR + URL Rewrite).
# This script focuses on the Reverse Proxy method (Node running on localhost).

Write-Host "Deployment Files Ready." -ForegroundColor Green
Write-Host "To finish setup:"
Write-Host "1. Install IIS URL Rewrite Module & Application Request Routing (ARR)."
Write-Host "2. Determine a port for the Next.js app (e.g., 3000)."
Write-Host "3. Use a process manager like PM2 (npm install -g pm2) to keep the app running: 'pm2 start server.js'"
Write-Host "4. Configure IIS Reverse Proxy rule to forward traffic to localhost:3000."
