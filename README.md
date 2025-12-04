# 🚀 Portfolio | Phongsakron Chingnu

Personal portfolio website built with **React 19** + **Vite 7** and deployed on GitHub Pages.

[![Live Demo](https://img.shields.io/badge/🌐_Live_Demo-Decode357.github.io-blue?style=for-the-badge)](https://Decode357.github.io)

---

## ✨ Features

- ⚡ Fast development with Vite
- 🎨 Modern UI with custom CSS animations
- 📱 Fully responsive design
- 🖼️ Project preview modal with image gallery
- 🔗 Interactive skills section with external links
- 🌙 Dark theme with glassmorphism effects

---

## 📂 Project Structure

```
Decode357.github.io/
├── public/
│   └── images/          # Static images & icons
├── src/
│   ├── components/      # React components
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Skills.jsx
│   │   ├── Projects.jsx
│   │   ├── ProjectModal.jsx
│   │   ├── Contact.jsx
│   │   └── Footer.jsx
│   ├── data/            # Data files
│   │   ├── projects.js
│   │   └── skills.js
│   ├── App.jsx          # Main App component
│   ├── App.css          # Main styles
│   ├── index.css        # Global styles
│   └── main.jsx         # Entry point
├── index.html
├── package.json
├── vite.config.js
└── eslint.config.js
```

---

## 🛠️ Tech Stack

| Category | Technologies |
|----------|-------------|
| Frontend | React 19, Vite 7 |
| Styling | CSS3, Custom Animations |
| Deployment | GitHub Pages, gh-pages |
| Tooling | ESLint, Vite Preview |

---

## ⚡ Quick Start

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

```bash
# Clone the repository
git clone https://github.com/Decode357/Decode357.github.io.git

# Navigate to project directory
cd Decode357.github.io

# Install dependencies
npm install
```

### Development

```bash
# Start development server
npm run dev
```

Opens at `http://localhost:5173` with hot reload enabled.

### Build

```bash
# Create production build
npm run build

# Preview production build locally
npm run preview
```

---

## 🚀 Deployment

### Deploy to GitHub Pages

```bash
# Build and deploy in one command
npm run deploy
```

This will:
1. Build the project (`npm run build`)
2. Push `dist/` folder to `gh-pages` branch
3. GitHub Pages will automatically serve the site

### Manual Deployment

```bash
# 1. Commit changes to main branch
git add -A
git commit -m "Update portfolio"
git push origin main

# 2. Build the project
npm run build

# 3. Deploy to gh-pages
npm run deploy
```

---

## 📝 How to Customize

### Add New Project

Edit `src/data/projects.js`:

```javascript
{
  title: 'Your Project Name',
  description: 'Short description',
  technologies: ['React', 'Node.js'],
  link: 'https://github.com/your-repo',
  images: ['/images/project-1.png'],
  fullDescription: 'Detailed description...'
}
```

### Add New Skill

Edit `src/data/skills.js`:

```javascript
{
  category: 'Category Name',
  items: [
    { name: 'Skill Name', icon: '/images/icons/skill.png', link: 'https://...' }
  ]
}
```

### Update Personal Info

- **Hero Section**: `src/components/Hero.jsx`
- **About Section**: `src/components/About.jsx`
- **Contact Info**: `src/components/Contact.jsx`

---

## 📜 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Create production build |
| `npm run preview` | Preview production build |
| `npm run lint` | Run ESLint |
| `npm run deploy` | Build & deploy to GitHub Pages |

---

## ⚠️ Important Notes

- ❌ Do **NOT** edit files in `dist/` manually (auto-generated)
- ✅ Place static assets in `public/images/`
- ✅ GitHub Pages source branch: `gh-pages`
- 🔄 Hard refresh (`Ctrl + F5`) after deployment to see changes

---

## 👤 Author

**Phongsakron Chingnu**

- GitHub: [@Decode357](https://github.com/Decode357)
- Email: dear0935780211@gmail.com

---

<p align="center">
  Made with ❤️ and React
</p>
