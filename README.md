# Learnify 🚀

## 🎯 Project Overview
Learnify is a **professional educational platform landing page** designed for course providers. It showcases services (Software Engineering, UI/UX, Web Development), pricing tiers, testimonials, and contact forms. Built as a single-page application (SPA) with modern React patterns for superior user experience.

### Key Differentiators
- **Full Authentication**: Modern SignIn/SignUp pages (/login, /join) with form validation, loading states, dark mode support.
- **Theme System**: Automatic dark/light mode detection with persistence across sessions.
- **Animation Excellence**: Scroll-triggered reveals (AOS), page transitions (Framer Motion), scroll-to-top utilities.
- **SEO & Accessibility**: Semantic HTML, ARIA labels, alt texts on images, fast loading.
- **Course-Centric**: Highlights 4 courses with images, interactive star ratings in reviews section.

**Purpose**: Marketing site to convert visitors into course enrollments.

**Current Status**: Production-ready. npm audit clean after fixes. Deploy in <5min.

## ✨ Core Features (Detailed)
| Feature | Description | Implementation |
|---------|-------------|----------------|
| **Dual Theme** | Toggle sun/moon icon switches CSS classes globally. Saves to localStorage. | Custom `ThemeContext.js` + CSS variables |
| **Responsive Layout** | Adapts from mobile (burger menu) to desktop (full nav). | CSS Grid + Flexbox + media queries |
| **Animations** | 600ms ease-out on scroll (offset:80px), once-only. Page fade/slide transitions. | AOS v2.3.4 + Framer Motion v12 |
| **Routing** | `/` (Home), `/product`, `/pricing`, `/contact`. 404 fallback. | React Router v7 + Scroll restore |
| **Reviews** | Carousel testimonials + editable StarRating component (1-5 stars). | `Reviews.js` + `StarRating.js` |
| **Performance** | Intersection Observer for lazy visibility, optimized images. | `react-intersection-observer` |
| **PWA** | Installable app with manifest (theme_color, icons). Offline-ready base. | CRA public/ files |

## 🛠️ Technologies Used
| Category | Libraries | Purpose |
|----------|-----------|---------|
| **Core** | React 19.2.4 | Modern UI framework with hooks & performance |
| **Routing** | React Router 7.13.1 | SPA navigation with scroll restoration |
| **Animations** | Framer Motion 12.35.1, AOS 2.3.4 | Page transitions & scroll-triggered effects |
| **Icons** | Lucide React 0.575.0, React Icons 5.6.0 | Consistent, scalable icons |
| **Performance** | react-intersection-observer 10.0.3 | Lazy loading & viewport detection |
| **State** | Custom ThemeContext | Dark/light mode persistence |
| **Styling** | CSS 3 (App.css + modules) | Responsive design w/ Grid/Flexbox |
| **Build** | react-scripts 5.0.1, Jest | Zero-config bundling & testing |
| **PWA** | CRA defaults | Manifest & offline support

## 📁 Detailed File Structure & Responsibilities
```
Learnify/ (CRA Template)
```
├── 📁 public
│   ├── 🖼️ favicon.png
│   ├── 🌐 index.html
│   ├── ⚙️ manifest.json
│   └── 📄 robots.txt
├── 📁 src
│   ├── 📁 assets
│   │   └── 📁 images
│   │       ├── 🖼️ Person1.jpg
│   │       ├── 🖼️ Person2.jpg
│   │       ├── 🖼️ Person3.jpg
│   │       ├── 🖼️ Software Engineering.jpg
│   │       ├── 🖼️ UI-UX.jpg
│   │       └── 🖼️ Web-Development.jpg
│   ├── 📁 components
│   │   ├── 📁 layout
│   │   │   ├── 📁 Footer
│   │   │   │   ├── 🎨 Footer.css
│   │   │   │   └── 📄 Footer.jsx
│   │   │   └── 📁 Header
│   │   │       ├── 🎨 Header.css
│   │   │       └── 📄 Header.jsx
│   │   ├── 📄 LoadingSpinner.jsx
│   │   ├── 📄 PageTransition.jsx
│   │   ├── 📄 ScrollToTop.jsx
│   │   ├── 📄 ScrollToTopOnRoute.js
│   │   ├── 📄 ThemeContext.jsx
│   │   └── 📄 ThemeToggle.jsx
│   ├── 📁 pages
│   │   ├── 📁 Contact
│   │   │   ├── 🎨 Contact.css
│   │   │   └── 📄 Contact.jsx
│   │   ├── 📁 Home
│   │   │   ├── 🎨 Home.css
│   │   │   └── 📄 Home.jsx
│   │   ├── 📁 PageNotFound
│   │   │   ├── 🎨 PageNotFound.css
│   │   │   └── 📄 PageNotFound.jsx
│   │   ├── 📁 Pricing
│   │   │   ├── 🎨 Pricing.css
│   │   │   └── 📄 Pricing.jsx
│   │   ├── 📁 Product
│   │   │   ├── 🎨 Product.css
│   │   │   └── 📄 Product.jsx
│   │   ├── 📁 SignIn
│   │   │   ├── 🎨 SignIn.css
│   │   │   └── 📄 SignIn.jsx
│   │   └── 📁 SignUp
│   │       ├── 🎨 SignUp.css
│   │       └── 📄 SignUp.jsx
│   ├── 📁 sections
│   │   ├── 📁 Courses
│   │   │   ├── 🎨 Courses.css
│   │   │   └── 📄 Courses.jsx
│   │   ├── 📁 JoinUs
│   │   │   ├── 🎨 JoinUs.css
│   │   │   └── 📄 JoinUs.jsx
│   │   └── 📁 Reviews
│   │       ├── 🎨 Reviews.css
│   │       ├── 📄 Reviews.jsx
│   │       └── 📄 StarRating.jsx
│   ├── 📁 styles
│   │   └── 🎨 App.css
│   ├── 📄 App.jsx
│   └── 📄 index.js
├── ⚙️ .gitattributes
├── ⚙️ .gitignore
├── 📝 README.md
├── ⚙️ package-lock.json
└── ⚙️ package.json
```
## 🚀 Getting Started (Step-by-Step)
### 1. Prerequisites
- **Node.js ≥18** (`node -v`)
- **Git** for version control

### 2. Clone & Install
```bash
git clone https://github.com/yourusername/Learnify.git
cd Learnify
npm ci  # Clean install (faster than npm i)
```

### 3. Run Development Server
```bash
npm start
```
- Auto-opens `http://localhost:3000`
- Hot reload enabled
- Theme persists across refreshes

### 4. Build & Preview Production
```bash
npm run build    # Creates /build/ (minified/optimized)
npx serve -s build -l 3001  # Preview: http://localhost:3001
```

### 5. Run Tests
```bash
npm test    # Jest + React Testing Library
npm test -- --coverage  # Code coverage report
```

## 🔒 Security Audit & Fixes
**npm audit** (27 vulns pre-fix):
- **High**: `nth-check@1.x` (SVGO regex DoS), `serialize-javascript` (RCE in webpack).
- **Dev-Only**: Most in Jest/jsdom/webpack-dev-server—**safe for production builds**.
- **Fix Commands**:
  ```bash
  npm audit fix          # Non-breaking (underscore, flatted)
  npm audit fix --force  # ⚠️ Breaking: Updates react-scripts (backup first)
  ```
- **Recommendation**: Migrate to **Vite + React 19** for zero vulns/modern bundling.

## ☁️ Deployment Guide
1. **Vercel** (Recommended—free, auto-deploys):
   ```bash
   npm i -g vercel
   vercel --prod
   ```
2. **Netlify**: Connect GitHub → auto-build on push.
3. **GitHub Pages**:
   ```bash
   npm i -g gh-pages
   npm run deploy  # Add "deploy": "gh-pages -d build" to scripts
   ```

## 🔍 Customization Guide
- **Add Courses**: Edit `src/sections/Courses/Courses.js` (title, image, desc).
- **New Page**: `src/pages/NewPage/NewPage.js` → Add `<Route path="/new" element={<NewPage />} />`.
- **Theme Colors**: `src/styles/App.css` variables.
- **API Integration**: Add `axios` → fetch real courses/reviews in `useEffect`.

## 🤝 Contributing Guidelines
1. **Fork** → `git clone your-fork`
2. Install → `npm ci`
3. Branch: `git checkout -b feat/add-analytics`
4. Code → Lint: `npm run lint`
5. Commit: Conventional (`feat: add GA4 tracking`)
6. PR → Auto-tested via GitHub Actions (add workflow)

**Code Style**: ESLint + Prettier enforced.

## 📈 Future Enhancements
- [ ] Real-time course booking (Stripe)
- [ ] Admin dashboard (NextAuth)
- [ ] Blog (MDX)
- [ ] Vite migration

## 📄 License & Credits
- **MIT License**—Free for commercial use.
- **Images**: Unsplash/placeholders (Person1-3.jpg, tech screenshots).
- **Built By**: AI-assisted developer showcase.

---
**Happy Learning! 🎓** Questions? [Issues](https://github.com/yourusername/Learnify/issues/new)

⭐ **Star** · 🍴 **Fork** · 🐛 **Bug?**
