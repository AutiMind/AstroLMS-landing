# Contributing to AstroLMS Landing

Thank you for your interest in contributing to AstroLMS Landing! This document provides guidelines and information for contributors.

## 🌟 How to Contribute

We welcome contributions in several forms:

- 🐛 **Bug Reports**: Help us identify and fix issues
- ✨ **Feature Requests**: Suggest new functionality or improvements  
- 🔧 **Code Contributions**: Submit bug fixes, features, or improvements
- 📝 **Documentation**: Improve docs, examples, or code comments
- 🎨 **Design**: UI/UX improvements and accessibility enhancements

## 🚀 Getting Started

### Prerequisites

- **Node.js** 18+ and npm
- **Git** for version control
- A **GitHub account**
- Familiarity with **Astro**, **React**, and **TypeScript**

### Development Setup

1. **Fork the repository** on GitHub
2. **Clone your fork** locally:
   ```bash
   git clone https://github.com/YOUR_USERNAME/AstroLMS-landing.git
   cd AstroLMS-landing
   ```

3. **Install dependencies**:
   ```bash
   npm install
   ```

4. **Start the development server**:
   ```bash
   npm run dev
   ```

5. **Visit** http://localhost:4321 to see the site

## 📋 Development Workflow

### Branch Strategy

- **`main`** - Production-ready code, deployed to live site
- **`develop`** - Integration branch for new features
- **Feature branches** - Named `feature/description` or `fix/description`

### Making Changes

1. **Create a new branch** from `develop`:
   ```bash
   git checkout develop
   git pull origin develop
   git checkout -b feature/your-feature-name
   ```

2. **Make your changes** following our coding standards

3. **Test your changes**:
   ```bash
   npm run build    # Ensure build works
   npm run preview  # Test production build
   ```

4. **Commit your changes**:
   ```bash
   git add .
   git commit -m "feat: descriptive commit message"
   ```

5. **Push to your fork**:
   ```bash
   git push origin feature/your-feature-name
   ```

6. **Create a Pull Request** targeting the `develop` branch

## 📝 Coding Standards

### General Guidelines

- **Follow existing code style** and patterns
- **Write descriptive commit messages** using conventional commits
- **Keep changes focused** - one feature/fix per PR
- **Add comments** for complex logic
- **Update documentation** when needed

### Code Style

#### TypeScript/JavaScript
- Use **TypeScript** for all new files
- Follow **functional components** pattern for React
- Use **meaningful variable names**
- Prefer **const** over **let** when possible
- Use **async/await** over promises when appropriate

#### HTML/JSX
- Use **semantic HTML elements**
- Include **alt text** for images
- Ensure **keyboard accessibility**
- Follow **ARIA guidelines**

#### CSS/Styling
- Use **Tailwind CSS classes** for styling
- Follow **mobile-first** responsive design
- Maintain **consistent spacing** using Tailwind scale
- Use **CSS custom properties** for dynamic values
- Prefer **utility classes** over custom CSS

### File Organization

```
src/
├── components/          # Reusable React components
│   ├── ComponentName.tsx
│   └── ...
├── layouts/            # Astro layout templates
│   └── Layout.astro
├── pages/              # Route pages
│   ├── index.astro
│   └── ...
└── styles/             # Global styles (if needed)
```

### Component Guidelines

- **One component per file**
- **PascalCase** for component names
- **Props interface** for TypeScript types
- **Default exports** for components
- **Descriptive prop names**

Example component structure:
```tsx
interface ComponentNameProps {
  title: string;
  isVisible?: boolean;
}

export default function ComponentName({ 
  title, 
  isVisible = true 
}: ComponentNameProps) {
  return (
    <div className="component-wrapper">
      {isVisible && <h2>{title}</h2>}
    </div>
  );
}
```

## 🧪 Testing

### Manual Testing Checklist

Before submitting a PR, ensure:

- [ ] **Desktop browsers**: Chrome, Safari, Firefox, Edge
- [ ] **Mobile devices**: iOS Safari, Android Chrome
- [ ] **Accessibility**: Keyboard navigation, screen readers
- [ ] **Performance**: No console errors, smooth animations
- [ ] **Build process**: `npm run build` succeeds
- [ ] **TypeScript**: `npx astro check` passes

### Responsive Testing

Test at these breakpoints:
- **Mobile**: 375px (iPhone SE)
- **Tablet**: 768px (iPad)
- **Desktop**: 1280px (Standard laptop)
- **Large**: 1920px (Desktop monitor)

## 📋 Pull Request Process

### Before Submitting

1. **Sync with develop branch**:
   ```bash
   git checkout develop
   git pull origin develop
   git checkout your-branch
   git rebase develop
   ```

2. **Test thoroughly** using the manual testing checklist

3. **Write descriptive PR title** following conventional commits

4. **Fill out PR template** completely

### PR Requirements

- [ ] **Passes all CI checks**
- [ ] **Includes tests** (if applicable)
- [ ] **Updates documentation** (if needed)
- [ ] **Screenshots/videos** for UI changes
- [ ] **Descriptive commit messages**
- [ ] **No merge conflicts**

### Review Process

1. **Automated checks** must pass
2. **Code review** by maintainers
3. **Testing** by reviewers
4. **Approval** required before merge
5. **Squash and merge** to develop branch

## 🐛 Reporting Issues

### Bug Reports

Use the bug report template and include:

- **Clear description** of the issue
- **Steps to reproduce** the problem
- **Expected vs actual** behavior
- **Screenshots/videos** if applicable
- **Browser and device** information
- **Console errors** (if any)

### Feature Requests

Use the feature request template and include:

- **Problem statement** - what need does this address?
- **Proposed solution** - describe your idea
- **Use cases** - how would this be used?
- **Alternatives considered** - other solutions you thought of

## 🏢 Business Context

### Project Goals

AstroLMS Landing serves as:
- **Marketing tool** for the AstroLMS platform
- **Investor communication** hub
- **Brand showcase** and credibility builder
- **Lead generation** mechanism

### Target Audience

- **Investors** seeking information about funding opportunities
- **Potential customers** interested in AI-powered LMS solutions
- **Partners** looking for collaboration opportunities
- **Job seekers** interested in joining the team

### Brand Guidelines

- **Professional tone** throughout all content
- **AI-first messaging** emphasizing modern technology
- **Clean, modern design** with consistent branding
- **Accessibility first** approach
- **Performance focused** for all devices

## 📞 Getting Help

### Resources

- **Documentation**: Read the README and code comments
- **Issues**: Search existing issues for similar problems
- **Discussions**: Use GitHub Discussions for questions

### Contact

- **Email**: hello@astrolms.com
- **GitHub Issues**: For bug reports and feature requests
- **GitHub Discussions**: For general questions and ideas

### Community Guidelines

- **Be respectful** and professional
- **Stay on topic** in discussions
- **Help others** when you can
- **Follow the code of conduct**

## 🎯 Contribution Ideas

Looking for ways to contribute? Consider:

### Code Improvements
- **Performance optimizations**
- **Accessibility enhancements**
- **Mobile experience improvements**
- **SEO optimizations**
- **Animation refinements**

### Content Updates
- **Copy improvements**
- **Image optimizations**
- **Blog content**
- **Documentation enhancements**

### Technical Enhancements
- **Build process improvements**
- **CI/CD optimizations**
- **Security enhancements**
- **Monitoring additions**

## 📄 License

By contributing to AstroLMS Landing, you agree that your contributions will be licensed under the same license as the project.

---

**Thank you for contributing to AstroLMS Landing!** 🚀

Your contributions help us build a better learning management system for everyone.