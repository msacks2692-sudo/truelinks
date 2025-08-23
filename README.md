# TrueLinks

A modern AI-powered dating app that learns your preferences and matches you based on activities and interests, not just looks.

## Features

- 🤖 **AI-Powered Matching**: Advanced algorithms that learn from your activities and preferences
- 🎯 **Smart Compatibility**: Match based on shared interests, lifestyle, and communication style
- 🔒 **Privacy & Security**: Advanced protection measures for your personal data
- 📱 **Modern UI**: Beautiful, responsive design with smooth animations
- 🚀 **Real-time Updates**: Instant notifications and live matching

## Tech Stack

### Frontend
- React 18
- Material-UI (MUI)
- React Router
- Framer Motion
- Axios

### Backend
- Node.js
- Express.js
- MongoDB (planned)
- OpenAI API integration
- JWT Authentication

## Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd truelinks
   ```

2. **Install dependencies**
   ```bash
   npm run install:all
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env
   # Edit .env with your configuration
   ```

4. **Start the development servers**
   ```bash
   npm run dev
   ```

This will start both the frontend (port 3000) and backend (port 5000) servers concurrently.

### Available Scripts

- `npm run dev` - Start both frontend and backend in development mode
- `npm run build` - Build both frontend and backend for production
- `npm run server` - Start only the backend server
- `npm run client` - Start only the frontend server
- `npm start` - Start the production server

## Project Structure

```
truelinks/
├── client/                 # React frontend
│   ├── public/
│   ├── src/
│   │   ├── components/     # Reusable UI components
│   │   ├── pages/         # Page components
│   │   ├── App.js         # Main app component
│   │   └── index.js       # Entry point
│   └── package.json
├── server/                # Node.js backend
│   ├── index.js          # Main server file
│   └── package.json
├── .env                   # Environment variables
├── package.json          # Root package.json
└── README.md
```

## Features in Development

- [ ] User authentication and authorization
- [ ] Profile creation and management
- [ ] AI-powered matching algorithm
- [ ] Real-time messaging
- [ ] Photo upload and management
- [ ] Advanced filtering options
- [ ] Push notifications
- [ ] Mobile app (React Native)

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Support

For support, email support@truelinks.com or create an issue in this repository.
