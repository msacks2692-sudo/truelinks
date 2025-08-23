#!/bin/bash

echo "🚀 Starting TrueLinks Dating App..."

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install Node.js first."
    exit 1
fi

# Check if npm is installed
if ! command -v npm &> /dev/null; then
    echo "❌ npm is not installed. Please install npm first."
    exit 1
fi

echo "📦 Installing dependencies..."
npm run install:all

echo "🔨 Building the application..."
npm run build

echo "🌟 Starting development servers..."
echo "Frontend will be available at: http://localhost:3000"
echo "Backend API will be available at: http://localhost:5000"
echo ""
echo "Press Ctrl+C to stop the servers"
echo ""

npm run dev