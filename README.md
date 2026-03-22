# Learnify 🚀

## 🎯 Project Overview
Learnify is a modern educational platform landing page built with React. Features course showcases, pricing, testimonials, authentication pages, and smooth user experience with animations and theme support.

## 📋 File Naming Convention (Best Practice)
- **`.jsx`**: Components returning JSX/HTML (UI/rendering files)
  - Examples: `App.jsx`, `Home.jsx`, `Header.jsx`, `Footer.jsx`
- **`.js`**: Pure logic (hooks, contexts, utils, no JSX)
  - Examples: `index.js`, `ScrollToTopOnRoute.js`

This separation improves readability, bundling, and follows professional React standards.

## 📁 File Structure & Responsibilities

```
Learnify/
├── public/                    # Static assets served directly
│   ├── favicon.png
│   ├── index.html             # App entry HTML
│   ├── manifest.json          # PWA config
│   └── robots.txt
├── src/
│   ├── App.jsx                # Root component: Router, ThemeProvider, global layout
│   ├── index.js               # Entry: Render App to DOM, theme init
│   ├── styles/
│   │   └── App.css            # Global styles, CSS variables for theme
│   ├── assets/images/         # Course/person images
│   ├── components/            # Reusable UI/logic
│   │   ├── LoadingSpinner.jsx # Animated loading UI
│   │   ├── PageTransition.jsx # Framer Motion page animations
│   │   ├── ScrollToTop.jsx    # Progress-ring scroll button
│   │   ├── ScrollToTopOnRoute.js # Route change scroll reset (pure logic)
│   │   ├── ThemeContext.jsx   # Theme provider + hook
│   │   ├── ThemeToggle.jsx    # Theme switch button
│   │   └── layout/
│   │       ├── Header/
│   │       │   ├── Header.jsx # Responsive nav, mobile menu
│   │       │   └── Header.css
│   │       └── Footer/
│       │       ├── Footer.jsx # Links, social, contact info
│       │       └── Footer.css
│   ├── pages/                 # Route-specific components (.jsx)
│   │   ├── Home/
│   │   │   ├── Home.jsx       # Hero, sections integration
│   │   │   └── Home.css
│   │   ├── Product/
│   │   │   ├── Product.jsx
│   │   │   └── Product.css
│   │   ├── Pricing/
│   │   │   ├── Pricing.jsx
│   │   │   └── Pricing.css
│   │   ├── Contact/
│   │   │   ├── Contact.jsx    # Form + info
│   │   │   └── Contact.css
│   │   ├── SignIn/
│   │   │   ├── SignIn.jsx     # Auth form
│   │   │   └── SignIn.css
│   │   ├── SignUp/
│   │   │   ├── SignUp.jsx
│   │   │   └── SignUp.css
│   │   └── PageNotFound/
│       │       ├── PageNotFound.jsx # 404 creative page
│       │       └── PageNotFound.css
│   └── sections/              # Home page sections (.jsx)
│       ├── Courses/
│       │   ├── Courses.jsx    # Course cards grid
│       │   └── Courses.css
│       ├── JoinUs/
│       │   ├── JoinUs.jsx     # Newsletter signup
│       │   └── JoinUs.css
│       └── Reviews/
│           ├── Reviews.jsx    # Testimonials carousel
│           ├── Reviews.css
│           └── StarRating.jsx # Reusable star component
├── package.json               # Dependencies, scripts
├── package-lock.json
├── .gitignore
└── README.md
```

## 🚀 Quick Start
```bash
npm install
npm start  # http://localhost:3000
npm run build  # Production build
```

## 🛠️ Tech Stack
- React 18+, React Router, AOS animations, Lucide icons
- CSS modules, Framer Motion, Theme context

Project fully refactored for optimal organization!
