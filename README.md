# Skogbunn Mikromusheri - Website

Modern, responsive website for Skogbunn Mikromusheri, a Norwegian mushroom farm specializing in oyster mushrooms and Lion's Mane cultivation.

🌐 **Live Site**: [https://skogbunn.com](https://skogbunn.com)

## Features

- 🎨 **Modern Design** - Clean, minimalist aesthetic with forest-inspired color palette
- 📱 **Fully Responsive** - Optimized for desktop, tablet, and mobile devices
- ⚡ **Fast Performance** - Static site generation with Next.js
- 🖼️ **Optimized Images** - Conditional mobile/desktop background images
- 🔄 **Smooth Navigation** - Scroll-snap sections with smooth scrolling
- 🌍 **Norwegian Language** - Native content in Norwegian

## Tech Stack

### Frontend
- **Next.js 14.2.18** - React framework with static export
- **React 18** - Modern React with hooks
- **TypeScript** - Type-safe development
- **Tailwind CSS v4** - Utility-first CSS framework
- **Merriweather Font** - Google Fonts typography

### Backend (Optional)
- **Express** - Node.js web framework
- **TypeScript** - Type-safe API development
- **CORS** - Cross-Origin Resource Sharing

## Design System

### Color Palette
```css
--forest-deep: #1a2418      /* Dark forest green */
--moss-green: #2d3a28       /* Moss green */
--bark-brown: #3d2e1f       /* Bark brown */
--chanterelle-gold: #c4913b /* Mushroom gold */
--cream: #f5f0e8            /* Light cream */
```

### Typography
- **Primary Font**: Merriweather (Light 300, Regular 400, Bold 700)
- **Desktop Headlines**: text-4xl to text-5xl
- **Mobile Headlines**: text-3xl
- **Body Text**: 19px desktop, 17px mobile

### Responsive Breakpoints
- **Mobile**: < 768px
- **Desktop**: ≥ 768px

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

The website is deployed to **skogbunn.com** as a static site.

### Production URL
- **Live Site**: `https://skogbunn.com`

### Deployment Process

1. **Build static export**:
   ```bash
   cd frontend
   npm run build
   ```
   This generates a static site in the `out/` directory.

2. **Deploy via SFTP**:
   ```bash
   cd frontend/out
   sftp -i ~/.ssh/skogbunn_key skogbunn@skogbunn.com
   cd www
   put -r *
   ```

### Server Architecture
- **Shared Hosting** - Web hotel with SFTP access
- **SSL/HTTPS** - Automatically managed by hosting provider
- **Static Files** - No Node.js runtime required
- **Web Root**: `/www` directory

### Mobile Optimization
- Responsive design with mobile-first approach
- Separate mobile background images (768x1024px portrait)
- Conditional rendering based on viewport width (< 768px)
- Optimized text sizes and spacing for mobile devices

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
