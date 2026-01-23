# Skogbunn Web

Modern web application for Skogbunn built with Next.js and Express.

## Tech Stack

### Frontend
- **Next.js 16** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first CSS framework

### Backend
- **Express** - Node.js web framework
- **TypeScript** - Type-safe API development
- **CORS** - Cross-Origin Resource Sharing

## Project Structure

```
skogbunn-web/
├── frontend/          # Next.js application
│   ├── app/          # App Router pages
│   ├── public/       # Static assets
│   └── package.json
├── backend/          # Express API
│   ├── src/         # TypeScript source
│   └── package.json
└── .github/
    └── workflows/    # CI/CD pipelines
```

## Local Development

### Prerequisites
- Node.js 18+ and npm
- Git

### Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

The frontend will be available at `http://localhost:3000`

### Backend Setup

```bash
cd backend
cp .env.example .env
npm install
npm run dev
```

The backend API will be available at `http://localhost:5000`

## API Endpoints

- `GET /health` - Health check endpoint
- `GET /api` - API welcome message

## Deployment

The application is deployed to **skogbunn.com** with SSL/HTTPS enabled.

### Production URLs
- Frontend: `https://skogbunn.com`
- Backend API: `https://skogbunn.com/api`

### Server Architecture
- Nginx reverse proxy handling HTTPS
- SSL certificates via Let's Encrypt
- Frontend on port 3000 (proxied)
- Backend on port 5000 (proxied)

## Environment Variables

### Backend
Create a `.env` file in the `backend` directory:
```
PORT=5000
NODE_ENV=development
```

## Documentation

See [claude-setup.md](./claude-setup.md) for detailed setup and deployment instructions.

## License

ISC
