# AstroLMS Landing Page

A modern, AI-focused landing page for AstroLMS - a revolutionary Learning Management System. Built as a "coming soon" page featuring investor information, team profiles, and AI-powered feature highlights.

## 🚀 Live Site

- **Production**: [https://astrolms-landing.pages.dev](https://astrolms-landing.pages.dev)
- **Custom Domain**: [https://astrolms.com](https://astrolms.com) (when configured)

## 🛠️ Technology Stack

- **Framework**: [Astro 5.0.0](https://astro.build) - Static site generator with component islands
- **Frontend**: [React 18.3.1](https://react.dev) - Interactive components
- **Styling**: [Tailwind CSS 3.4.1](https://tailwindcss.com) - Utility-first CSS framework
- **Animations**: [Framer Motion 10.16.16](https://www.framer.com/motion/) - React animation library
- **Icons**: [Lucide React 0.344.0](https://lucide.dev) - Modern icon library
- **Notifications**: [React Hot Toast 2.4.1](https://react-hot-toast.com) - Toast notifications
- **Language**: [TypeScript 5.8.3](https://www.typescriptlang.org) - Type safety
- **Deployment**: [Cloudflare Pages](https://pages.cloudflare.com) - Edge deployment

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ and npm
- Git

### Installation

```bash
# Clone the repository
git clone https://github.com/grammar-nerd/AstroLMS-landing.git
cd AstroLMS-landing

# Install dependencies
npm install
```

## 📜 Available Scripts

### Development

```bash
# Start development server (http://localhost:4321)
npm run dev
# or
npm start

# Preview production build locally
npm run preview
```

### Build & Deploy

```bash
# Build for production (includes type checking)
npm run build

# Deploy to Cloudflare Pages
npx wrangler pages deploy dist --project-name=astrolms-landing
```

### Utilities

```bash
# Run Astro CLI commands
npm run astro

# Type check without building
npx astro check
```

## 🏗️ Project Structure

```
/
├── public/                    # Static assets
│   ├── AstroLMS-Logo1.png    # Main logo
│   ├── AstroLMS-logo-transp.png # Transparent logo
│   └── [team photos]         # Team member photos
├── src/
│   ├── components/           # React components
│   │   ├── ContactForm.tsx   # Contact modal form
│   │   ├── Features.tsx      # AI features showcase
│   │   ├── Footer.tsx        # Site footer
│   │   ├── Header.tsx        # Navigation header
│   │   ├── Hero.tsx          # Hero section
│   │   ├── InvestorSection.tsx # Investment information
│   │   ├── Metrics.tsx       # Market metrics
│   │   ├── NewsletterModal.tsx # Newsletter signup
│   │   ├── Team.tsx          # Team profiles
│   │   ├── TechShowcase.tsx  # Technology showcase
│   │   └── Timeline.tsx      # Launch timeline
│   ├── layouts/
│   │   └── Layout.astro      # Base page layout
│   └── pages/
│       ├── index.astro       # Home page
│       └── about.astro       # About page
├── astro.config.mjs          # Astro configuration
├── tailwind.config.mjs       # Tailwind CSS config
├── tsconfig.json             # TypeScript config
├── wrangler.toml             # Cloudflare deployment
└── package.json              # Dependencies & scripts
```

## 🎨 Features

### Landing Page Sections
- **Hero Section** - Animated background with call-to-action and launch timeline
- **Features Section** - AI-powered learning capabilities showcase
- **Technology Showcase** - Modern tech stack presentation
- **Timeline** - Development and launch roadmap
- **Investor Section** - Market data and investment opportunity
- **Team Section** - Founder profiles with contact information
- **Metrics** - Market size and growth statistics

### Interactive Components
- **Contact Form** - Modal with form validation and toast notifications
- **Responsive Design** - Mobile-first approach with breakpoint utilities
- **Smooth Animations** - Framer Motion for transitions and micro-interactions
- **Newsletter Signup** - Email collection with validation

## 🚀 Deployment

### Cloudflare Pages

1. **Build the project**:
   ```bash
   npm run build
   ```

2. **Deploy to Cloudflare Pages**:
   ```bash
   npx wrangler pages deploy dist --project-name=astrolms-landing
   ```

3. **Set up custom domain** (optional):
   - Go to Cloudflare Pages dashboard
   - Add custom domain `astrolms.com`
   - Configure DNS settings

### GitHub Integration

The project is set up for manual deployment. To enable automatic deployments:

1. Connect your GitHub repository to Cloudflare Pages
2. Set build command: `npm run build`
3. Set output directory: `dist`
4. Set environment variables if needed

## 🔧 Configuration

### Environment Variables

Create a `.env` file for local development:

```env
# Add any environment variables here
PUBLIC_SITE_URL=http://localhost:4321
```

### Customization

- **Colors**: Modify `tailwind.config.mjs` for brand colors
- **Fonts**: Update font imports in `src/layouts/Layout.astro`
- **Content**: Edit component files in `src/components/`
- **Styling**: Customize Tailwind classes throughout components

## 🏢 Company Information

- **Entity**: AutiMind, Inc. DBA AstroLMS
- **Founders**: Amy Cozart-Lundin (CEO), Andrea Cozart-Lundin (CTO)
- **Location**: Battle Creek, MI
- **Contact**: hello@astrolms.com | +1 269.261.0069
- **Market**: $350B LMS market with 19.6% CAGR
- **Timeline**: Beta launch Q4 2025
- **Funding**: Seeking $5M Series A

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is proprietary software owned by AutiMind, Inc.

## 🆘 Support

For questions or support:
- Email: hello@astrolms.com
- Phone: +1 269.261.0069

---

**Built with ❤️ by the AstroLMS Team**