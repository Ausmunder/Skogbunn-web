# Skogbunn Web - Complete Setup Documentation

## Project Overview

**Skogbunn Mikromusheri** - A modern web application for a Norwegian mushroom farm (micromushroom cultivation). This document covers the complete setup process, server configuration, deployment, and development workflow.

---

## Table of Contents

1. [Server Information](#server-information)
2. [Current Server Status](#current-server-status)
3. [Local Development Setup](#local-development-setup)
4. [GitHub Repository Setup](#github-repository-setup)
5. [Deployment Guide](#deployment-guide)
6. [SSL/HTTPS Configuration](#ssl-https-configuration)
7. [Development Workflow](#development-workflow)
8. [Troubleshooting](#troubleshooting)

---

## Server Information

### Access Credentials

- **Domain**: skogbunn.com
- **Protocol**: SFTP only (no SSH shell access)
- **Username**: skogbunn
- **Password**: Arry-Redknapp-Poch-etter-VM
- **SSH Key Location**: `C:\Users\assmu\.ssh\skogbunn_key`

### Server Type

This is a **shared hosting environment** (web hotel) with:
- SFTP-only access (no shell/SSH commands)
- Pre-configured SSL/HTTPS by hosting provider
- Static file serving from `/www` directory
- Limited server configuration options

### Current Directory Structure

```
/ (root)
├── .ssh/           # SSH keys
└── www/            # Web root directory
    ├── index.html  # Current "coming soon" page
    └── bakgrunn.jpg # Background image (1.1 MB)
```

---

## Current Server Status

### Existing Website

Currently, there is a beautiful "coming soon" landing page:
- **Title**: "Her kommer Skogbunn Mikromusheri"
- **Features**: Animated mist effects, parallax background, particle system
- **Language**: Norwegian
- **Theme**: Forest/nature aesthetic with mushroom gold accents
- **Mobile**: Fully responsive

### SSL Status

✅ **SSL is already configured and active** by the hosting provider
- Site accessible via: `https://skogbunn.com`
- SSL certificates automatically managed by hosting provider
- No manual SSL configuration needed

---

## Local Development Setup

### Prerequisites

Ensure you have installed:
- **Node.js** 18 or higher
- **npm** (comes with Node.js)
- **Git** for version control

### Initial Setup

1. **Clone or navigate to project directory**:
   ```bash
   cd D:\dev\skogbunn-web
   ```

2. **Install Frontend Dependencies**:
   ```bash
   cd frontend
   npm install
   ```

3. **Install Backend Dependencies**:
   ```bash
   cd ../backend
   npm install
   ```

4. **Create Backend Environment File**:
   ```bash
   cd backend
   copy .env.example .env
   ```

   Edit `.env` and set:
   ```env
   PORT=5000
   NODE_ENV=development
   ```

### Running the Development Servers

#### Frontend (Next.js)
```bash
cd frontend
npm run dev
```
- Access at: `http://localhost:3000`
- Hot-reload enabled
- Development mode with detailed errors

#### Backend (Express API)
```bash
cd backend
npm run dev
```
- Access at: `http://localhost:5000`
- Auto-restart on file changes (nodemon)
- Health check: `http://localhost:5000/health`

---

## GitHub Repository Setup

Since GitHub CLI (`gh`) is not available, follow these manual steps:

### 1. Create Repository on GitHub

1. Go to [github.com](https://github.com) and log in
   - **Username**: Ausmunder
   - **Email**: assmund@gmail.com
   - **Password**: cB4C#544KadAbtR!

2. Click the **"+"** icon (top right) → **"New repository"**

3. Configure repository:
   - **Repository name**: `Skogbunn-web`
   - **Description**: "Modern web application for Skogbunn Mikromusheri"
   - **Visibility**: Public (or Private if preferred)
   - **DO NOT** initialize with README, .gitignore, or license (we already have these)

4. Click **"Create repository"**

### 2. Push Local Code to GitHub

After creating the repository on GitHub:

```bash
cd D:\dev\skogbunn-web

# Add remote origin
git remote add origin https://github.com/Ausmunder/Skogbunn-web.git

# Push to GitHub
git push -u origin master
```

When prompted for credentials:
- **Username**: Ausmunder
- **Password**: Use a Personal Access Token (PAT) instead of password
  - Go to: GitHub → Settings → Developer settings → Personal access tokens
  - Create token with `repo` scope
  - Use this token as password

### 3. Verify Push

Visit: `https://github.com/Ausmunder/Skogbunn-web` to see your code

---

## Deployment Guide

### Understanding the Hosting Limitations

**Important**: This is a shared hosting environment with significant limitations:

❌ **Cannot run Node.js applications directly**
- No process manager (pm2, systemd)
- No ability to run `npm start` or Node.js servers
- No SSH shell access for running commands

✅ **Can only serve static files**
- HTML, CSS, JavaScript files
- Images, fonts, and other assets
- Static builds of frontend applications

### Deployment Options

#### Option 1: Static Export of Next.js (Recommended)

Since the server can't run Node.js, we need to export Next.js as static HTML:

1. **Configure Next.js for static export**:

   Edit `frontend/next.config.ts`:
   ```typescript
   const nextConfig = {
     output: 'export',
     images: {
       unoptimized: true,
     },
   };

   export default nextConfig;
   ```

2. **Build static files**:
   ```bash
   cd frontend
   npm run build
   ```

   This creates an `out/` directory with static files.

3. **Deploy to server via SFTP**:
   ```bash
   # Using SFTP to upload
   sftp -i C:\Users\assmu\.ssh\skogbunn_key skogbunn@skogbunn.com

   # In SFTP prompt:
   cd www
   put -r D:/dev/skogbunn-web/frontend/out/* .
   ```

   Or use a GUI SFTP client like:
   - **WinSCP** (Windows)
   - **FileZilla**
   - **Cyberduck**

#### Option 2: Upgrade to VPS Hosting

For full Node.js application (frontend + backend), consider:

**VPS Providers**:
- DigitalOcean (from $6/month)
- Linode/Akamai (from $5/month)
- Hetzner (from €4/month)
- AWS Lightsail (from $3.50/month)

**Benefits**:
- Full SSH access
- Run Node.js/Express backend
- Process managers (pm2)
- Custom nginx configuration
- Database support
- Real-time applications

#### Option 3: Hybrid Approach

- **Frontend**: Deploy static build to current server (skogbunn.com)
- **Backend**: Host on separate VPS or serverless platform
  - Vercel serverless functions
  - Netlify functions
  - Railway.app
  - Render.com (free tier available)

---

## SSL/HTTPS Configuration

### Current SSL Status

✅ **SSL already configured** by hosting provider
- Certificate auto-renewed
- HTTPS enabled by default
- No manual configuration needed

### Verification

Check SSL status:
```bash
# Via browser
https://skogbunn.com

# Via command line
curl -I https://skogbunn.com
```

### If Moving to VPS

When migrating to a VPS, set up SSL with Let's Encrypt:

```bash
# Install Certbot
sudo apt update
sudo apt install certbot python3-certbot-nginx

# Get SSL certificate
sudo certbot --nginx -d skogbunn.com -d www.skogbunn.com

# Auto-renewal is configured automatically
sudo certbot renew --dry-run
```

---

## Development Workflow

### Daily Development

1. **Start development servers**:
   ```bash
   # Terminal 1 - Frontend
   cd D:\dev\skogbunn-web\frontend
   npm run dev

   # Terminal 2 - Backend
   cd D:\dev\skogbunn-web\backend
   npm run dev
   ```

2. **Make changes** to code

3. **Test locally** at:
   - Frontend: `http://localhost:3000`
   - Backend: `http://localhost:5000`

4. **Commit changes**:
   ```bash
   git add .
   git commit -m "Description of changes"
   git push origin master
   ```

### Deployment Workflow

1. **Build frontend for production**:
   ```bash
   cd frontend
   npm run build
   ```

2. **Test production build locally**:
   ```bash
   npx serve out
   ```

3. **Deploy to server** (using SFTP or GUI client)

4. **Verify deployment**:
   ```bash
   # Visit in browser
   https://skogbunn.com
   ```

---

## Project Architecture

### Technology Stack

**Frontend**:
- Next.js 16 (React 19)
- TypeScript
- Tailwind CSS
- App Router

**Backend**:
- Express.js
- TypeScript
- CORS enabled
- Health check endpoints

### File Structure

```
skogbunn-web/
├── frontend/
│   ├── app/              # Next.js App Router
│   │   ├── layout.tsx    # Root layout
│   │   ├── page.tsx      # Home page
│   │   └── globals.css   # Global styles
│   ├── public/           # Static assets
│   ├── package.json
│   ├── next.config.ts
│   └── tsconfig.json
│
├── backend/
│   ├── src/
│   │   └── index.ts      # Express server entry point
│   ├── dist/             # Compiled JavaScript (generated)
│   ├── package.json
│   ├── tsconfig.json
│   └── .env              # Environment variables
│
├── .github/
│   └── workflows/        # CI/CD (future)
│
├── .gitignore
├── README.md
└── claude-setup.md       # This file
```

---

## Troubleshooting

### Common Issues

#### "Cannot run npm commands"
**Solution**: Ensure Node.js is installed and in PATH
```bash
node --version
npm --version
```

#### "Port already in use"
**Solution**: Kill process on the port
```bash
# Windows
netstat -ano | findstr :3000
taskkill /PID <PID> /F
```

#### "Git push rejected"
**Solution**: Pull changes first
```bash
git pull origin master --rebase
git push origin master
```

#### "SFTP connection timeout"
**Solution**:
- Check internet connection
- Verify SSH key permissions
- Confirm credentials are correct

#### "SSL certificate error"
**Solution**: Contact hosting provider - they manage SSL

### Getting Help

- **Hosting Support**: Contact your web hotel provider
- **GitHub Issues**: Create issues in the repository
- **Documentation**: Refer to Next.js and Express docs

---

## Future Enhancements

### Recommended Next Steps

1. **Content Management**:
   - Add CMS (Contentful, Sanity, Strapi)
   - Product catalog
   - Blog/news section

2. **Features**:
   - Contact form
   - Newsletter signup
   - Product ordering system
   - Norwegian language localization

3. **Performance**:
   - Image optimization
   - CDN integration
   - Analytics (Google Analytics, Plausible)

4. **SEO**:
   - Meta tags optimization
   - Sitemap generation
   - Structured data (Schema.org)

5. **Infrastructure**:
   - CI/CD pipeline (GitHub Actions)
   - Automated deployments
   - Testing (Jest, Playwright)
   - Migrate to VPS for full stack

---

## Contact & Support

**Project Owner**: Aasmund A.
- Email: assmund@gmail.com
- GitHub: @Ausmunder

**Domain**: skogbunn.com
**Project Repository**: https://github.com/Ausmunder/Skogbunn-web

---

## Changelog

### 2026-01-23 - Initial Setup
- ✅ Project initialized with Next.js and Express
- ✅ Git repository created
- ✅ Server access verified (SFTP only)
- ✅ SSL confirmed active
- ✅ Documentation created
- ⏳ GitHub repository pending creation
- ⏳ First deployment pending

---

## Website Design Implementation

### Current Design (January 23, 2026)

**Live Development**: Website fully implemented with Next.js and modern design

#### Design Features

**Layout**:
- Full-screen scroll-snap sections (Hero, About, Contact)
- Smooth scrolling between sections
- Responsive design for mobile, tablet, and desktop

**Navigation**:
- Large white logo positioned top left (h-96 / 384px height)
- Centered navigation buttons at top: "Om Skogbunn" and "Kontakt"
- Smooth scroll to sections on click
- Transparent background with backdrop blur on scroll
- Merriweather font for navigation buttons (text-lg)

**Color Scheme** (Skogbunn Palette):
```css
--forest-deep: #1a2418      /* Dark forest green */
--moss-green: #2d3a28       /* Moss green */
--bark-brown: #3d2e1f       /* Bark brown */
--chanterelle-gold: #c4913b /* Mushroom gold */
--mist-grey: rgba(200, 210, 215, 0.3)
--twilight-blue: #4a5568
--cream: #f5f0e8            /* Light cream background */
```

**Typography**:
- Primary: Geist Sans (Next.js default)
- Navigation: Merriweather (Google Fonts) - weights 300, 400, 700
- Monospace: Geist Mono

**Images**:
- Hero background: Beautiful oyster mushroom photo (`/images/hero-bg.png`)
- Logo: Skogbunn Mikromusheri in stylish handwritten font (`/images/logo.png`)
- Both optimized with Next.js Image component

#### Component Structure

```
frontend/
├── app/
│   ├── layout.tsx          # Root layout with fonts and metadata
│   ├── page.tsx            # Main page with all sections
│   └── globals.css         # Global styles and color palette
├── components/
│   ├── Navigation.tsx      # Sticky navigation with logo and buttons
│   ├── Footer.tsx          # Footer with "skogbunn 2026"
│   └── sections/
│       ├── HeroSection.tsx     # Full-screen hero with background image
│       ├── AboutSection.tsx    # About content section
│       └── ContactSection.tsx  # Contact information section
└── public/
    └── images/
        ├── hero-bg.png     # Oyster mushroom background
        └── logo.png        # Skogbunn logo (converted to white via CSS)
```

#### Technical Implementation

**Scroll Behavior**:
```css
.scroll-container {
  scroll-snap-type: y mandatory;
  overflow-y: scroll;
  height: 100vh;
}

section {
  scroll-snap-align: start;
  scroll-snap-stop: always;
  min-height: 100vh;
}
```

**Navigation Positioning**:
- Logo: `absolute top-12 left-6` with white color filter
- Buttons: `flex justify-center` for horizontal centering
- Background: Transparent → blur on scroll

**Image Optimization**:
- Next.js Image component with `priority` for hero
- Automatic WebP conversion
- Responsive sizing

### Development Commands

**Start development server**:
```bash
cd frontend
npm run dev
```
Access at: `http://localhost:3000`

**Build for production**:
```bash
cd frontend
npm run build
```

**Preview production build**:
```bash
npx serve out
```

### Current Status

- ✅ Project initialized with Next.js 16 and Express
- ✅ Git repository created and configured
- ✅ GitHub repository created: `https://github.com/Ausmunder/Skogbunn-web`
- ✅ All commits pushed to GitHub
- ✅ Server access verified (SFTP only)
- ✅ SSL confirmed active
- ✅ Website design fully implemented
- ✅ Images added (hero background and logo)
- ✅ Navigation fully functional with scroll-to-section
- ✅ Color palette and typography configured
- ⏳ Content for About and Contact sections pending
- ⏳ First deployment to skogbunn.com pending

### Recent Updates (January 23, 2026)

1. **Initial Setup** - Next.js frontend and Express backend
2. **Design Implementation** - Scroll-snap sections, navigation, footer
3. **Images Added** - Hero background and logo with white color filter
4. **Navigation Refinement** - Logo repositioned to top left, buttons centered
5. **Typography** - Merriweather font added for navigation
6. **Layout Finalization** - Logo size increased, button positioning optimized

---

**Last Updated**: January 23, 2026
**Version**: 2.0.0 (Website Design Complete)
