@echo off
setlocal
cd /d "%~dp0"
title Saude Plural Web

echo ===============================================
echo   SAUDE PLURAL - INSTALACAO E INICIALIZACAO
echo ===============================================
echo.

echo Encerrando processos Node que podem bloquear arquivos...
taskkill /F /IM node.exe >nul 2>&1

echo Limpando configuracoes antigas de proxy e registro do npm...
call npm config delete proxy >nul 2>&1
call npm config delete https-proxy >nul 2>&1
call npm config set registry https://registry.npmjs.org/

if exist node_modules (
  echo Removendo instalacao incompleta anterior...
  rmdir /S /Q node_modules 2>nul
)

if exist package-lock.json del /F /Q package-lock.json >nul 2>&1

echo.
echo Instalando dependencias pela registry oficial do npm...
call npm install --registry=https://registry.npmjs.org/
if errorlevel 1 (
  echo.
  echo A instalacao falhou. Verifique a internet e tente executar este arquivo como Administrador.
  echo Tambem confirme que antivirus ou OneDrive nao estao bloqueando a pasta.
  pause
  exit /b 1
)

echo.
echo Iniciando a plataforma...
call npm run dev
pause
