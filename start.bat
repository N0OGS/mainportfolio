@echo off
title Portfolio Initialization
echo ===================================================
echo Starting Portfolio Environment...
echo ===================================================

:: 1. Auto-create .env if missing
if not exist .env (
    echo [INFO] .env file not found. Copying .env.example...
    copy .env.example .env
)

:: 2. Auto-install dependencies if missing
if not exist node_modules\ (
    echo [INFO] node_modules not found. Installing dependencies...
    npm install
)

:: 3. Boot the server in the background of this window
echo [INFO] Booting up Express and Vite...
start /b npm run dev

:: 4. Give the server 6 seconds to fully compile before opening the browser
echo [INFO] Waiting for the server to initialize...
timeout /t 6 /nobreak > nul

:: 5. Launch the browser
echo [INFO] Opening application...
start http://localhost:3000