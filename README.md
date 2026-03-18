# Simplera AI — Intelligence Simplified

Marketing website for [Simplera AI](https://simpleraai.com), a B2B AI product company building intelligent tools that transform complex workflows into simple, actionable insights.

## Live Site

**[simpleraai.com](https://simpleraai.com)**

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | Next.js 14 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS 3.4 |
| Fonts | Inter (via `next/font`) |
| Deployment | Vercel |
| Domain | GoDaddy DNS → Vercel |

## Pages

- **Home** — Cinematic hero with animated gradient orbs, product showcase, feature cards, and CTA
- **Products** — ClinDetect detail page with stats, accordion feature deep-dive, and app preview
- **About** — Company mission, approach, and core values
- **Contact** — Validated contact form with Formspree integration and honeypot spam protection

## Project Structure

```
simplera-website/
├── app/
│   ├── layout.tsx          # Root layout, fonts, metadata
│   ├── page.tsx            # Home page
│   ├── products/page.tsx   # Products page
│   ├── about/page.tsx      # About page
│   ├── contact/page.tsx    # Contact page
│   ├── not-found.tsx       # 404 page
│   ├── error.tsx           # Error boundary
│   ├── robots.ts           # robots.txt generation
│   ├── sitemap.ts          # sitemap.xml generation
│   └── globals.css         # Global styles + Tailwind
├── components/
│   ├── layout/             # Navbar, Footer
│   ├── home/               # Hero, WhatWeBuild, ProductShowcase, CTASection
│   ├── products/           # ProductCard (accordion, stats)
│   ├── contact/            # ContactForm
│   └── ui/                 # FadeInUp, SectionHeader
├── public/
│   └── logo.png            # Simplera AI logo (transparent PNG)
└── tailwind.config.ts      # Custom theme (colors, animations)
```

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Production build
npm run build

# Start production server
npm start
```

## Design

- **Dark theme** with gradient accents (teal, blue, purple) matching the Simplera AI brand
- **Hybrid approach**: cinematic hero (animated gradient orbs, dot grid) + clean professional body sections
- **Responsive**: full mobile support with hamburger menu overlay
- **Accessible**: focus rings, ARIA labels, `prefers-reduced-motion` support
- **SEO**: per-page metadata, Open Graph tags, auto-generated robots.txt and sitemap.xml

## Products

### ClinDetect

Clinical text analysis tool that turns unstructured pathology reports and clinical notes into structured, actionable data. Features three analysis modes (Keyword, Concept, Sentence Search), AI-powered classification with negation detection, and 100% browser-based processing for privacy.

## License

Proprietary — Simplera AI. All rights reserved.
