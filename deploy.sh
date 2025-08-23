#!/bin/bash

echo "🚀 Deploying TrueLinks Dating App to Production..."

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

echo "🔨 Building the application for production..."
npm run build

echo "✅ Build completed successfully!"
echo ""
echo "📁 Production files are ready:"
echo "   - Frontend: client/build/"
echo "   - Backend: server/"
echo ""
echo "🌐 To serve the frontend, you can use:"
echo "   npm install -g serve"
echo "   serve -s client/build"
echo ""
echo "🔧 To start the backend server:"
echo "   cd server && npm start"
echo ""
echo "📋 Environment variables needed:"
echo "   - PORT (default: 5000)"
echo "   - NODE_ENV=production"
echo "   - JWT_SECRET"
echo "   - OPENAI_API_KEY (for AI features)"
echo "   - MONGODB_URI (for database)"