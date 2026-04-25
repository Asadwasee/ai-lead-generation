# Codecelix — AI Lead Generation Landing Page

A high-converting, client-ready landing page built for Codecelix. Designed to generate leads, build trust, and convert visitors into clients.

---

## Tech Stack

- **React** + **Vite**
- **Tailwind CSS**
- **Framer Motion** — animations
- **Lucide React** — icons
- **React Router DOM** — routing

---

## Team & Responsibilities

| Member | GitHub | Branch | Responsibilities |
|---|---|---|---|
| Asad | `Asadwasee` | `main` | Project lead, folder structure, team code integration |
| Junaid | `Junaid-290` | `Junaid` | Services Section, Portfolio Section, Testimonials Section |
| Shoaib | `itsmee-shoaib` | — | Hero Section, Why Choose Us Section |
| Fasi | `fasiullah14` | `Fasiullah` | Navbar, Footer, layout integration |
| Abdullah | `abdullah-CS-2026` | — | Navbar & footer link updates |

---

## Project Structure

```
src/
├── assets/
├── components/
│   ├── cards/
│   │   ├── PortfolioCard.jsx       # Junaid
│   │   ├── ServiceCard.jsx         # Junaid
│   │   └── TestimonialCard.jsx     # Junaid
│   ├── common/
│   │   ├── Button.jsx
│   │   ├── Container.jsx
│   │   └── FadeInSection.jsx
│   ├── layout/
│   │   ├── Navbar.jsx              # Fasi + Abdullah
│   │   └── Footer.jsx              # Fasi + Abdullah
│   └── sections/
│       ├── Hero.jsx                # Shoaib
│       ├── ServicesSection.jsx     # Junaid
│       ├── WhyChooseUs.jsx         # Shoaib
│       ├── PortfolioSection.jsx    # Junaid
│       ├── TestimonialsSection.jsx # Junaid
│       └── Form.jsx
├── data/
│   ├── servicesData.js             # Junaid
│   ├── portfolioData.js            # Junaid
│   └── testimonialsData.js         # Junaid
├── hooks/
│   └── useIntersectionObserver.js
├── pages/
│   └── Home.jsx
├── App.jsx
├── main.jsx
└── index.css
```

---

## Getting Started

```bash
# Clone the repo
git clone https://github.com/Asadwasee/ai-lead-generation.git
cd ai-lead-generation

# Install dependencies
npm install

# Start dev server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173)

---

## Git Workflow

```bash
# Before starting work each day
git pull origin main

# After making changes
git add .
git commit -m "feat: description of change"
git push origin your-branch
```

### Commit Convention
| Prefix | Use |
|---|---|
| `feat:` | New feature or section |
| `fix:` | Bug fix |
| `style:` | Styling only |
| `refactor:` | Code restructure, no feature change |

---

## Color Palette

| Role | Color |
|---|---|
| Primary | Blue `#2563EB` |
| Secondary | Purple `#7C3AED` |
| CTA / Accent | Green `#059669` |
| Background | White `#FFFFFF` |
| Text | Dark Gray `#111827` |

---

## Deployment

```bash
npm run build
```

Output goes to `/dist` — deploy to Vercel, Netlify, or any static host.