# Portfolio Design System

## Overview
This document describes the design tokens, components, and architectural decisions for Eric Quiambao's portfolio website.

## Color System (60-30-10 Rule)
- **60% (Primary Background)**: `#080808` - Deep charcoal for main background
- **30% (Secondary Surface)**: `#131313` - Slightly lighter for surface elements
- **10% (Accent)**: `#689eb8` - Soft blue for CTAs, highlights, and interactive elements
- **Secondary Accent**: `#FF7A59` - Warm orange for alternative highlights

### Color Variables
```css
--color-bg: #080808
--color-surface: #131313
--color-accent: #689eb8
--color-accent-2: #FF7A59
--text-primary: #FFFFFF
--text-secondary: #D1D5DB
--muted: #9CA3AF
```

## Spacing Scale
8px base unit system:
```
--space-1: 4px
--space-2: 8px
--space-3: 16px (standard gap)
--space-4: 24px
--space-5: 32px
--space-6: 48px
--space-7: 64px
```

## Typography
- **Font Family**: Inter (fallback: system sans-serif)
- **Base Font Size**: 16px at root level (100% for better accessibility)
- **Type Scale**: 
  - H1: 3.6rem (large displays)
  - H2: 2.4rem (section headers)
  - H3: 1.25rem (subsections)
  - Body: 1rem (standard text)
  - Small: 0.9rem (captions)

## Border & Radius
```
--radius-sm: 6px
--radius-md: 12px
--radius-lg: 20px
```

## Elevation (Shadows)
```
--shadow-sm: 0 4px 10px rgba(0,0,0,0.35)
--shadow-md: 0 8px 16px rgba(0,0,0,0.2)
--shadow-lg: 0 12px 32px rgba(0,0,0,0.3)
```

## Responsive Breakpoints
```
--bp-xs: 520px (mobile)
--bp-sm: 900px (tablet)
--bp-md: 1200px (desktop)
```

## CSS Architecture

### File Organization
1. **variables.css** - Design tokens and CSS custom properties
2. **typography.css** - Font definitions and type scale
3. **utilities.css** - Reusable utility classes and animations
4. **components.css** - Modular component patterns
5. **style.css** - Application-specific styles and layout

### CSS Variables Usage
All colors, spacing, and sizing should use CSS variables:
```css
/* Good */
.button { padding: var(--space-3); background: var(--color-accent); }

/* Avoid */
.button { padding: 16px; background: #689eb8; }
```

## Components

### Buttons
```css
.btn-primary    /* Solid accent background */
.btn-secondary  /* Ghost with border */
.btn-ghost      /* Text-only button */
```

### Cards
- `.card` - Base card with hover effects
- `.card-header` - Card title section
- `.card-body` - Main content area
- `.card-footer` - Action area

### Skills Grid
- `.skills-grid` - Responsive grid layout
- `.skill-item` - Individual skill with icon
- `.skill-item:hover` - Hover elevation effect

### Project Cards
- `.project-card` - Two-column project showcase
- `.project-image` - Image container
- `.project-content` - Text content area

### Forms
- `.form-group` - Input wrapper
- `.form-input` - Text inputs
- `.form-textarea` - Text area with focus states

## Animations

### Predefined Animations
```css
@keyframes fadeIn        /* Fade in from transparent */
@keyframes slideInFromLeft /* Slide from left */
@keyframes slideInFromRight /* Slide from right */
@keyframes pulse         /* Opacity pulse */
@keyframes glow          /* Glowing shadow effect */
```

### Animation Utilities
- `.animate-fadeIn`
- `.animate-slideInLeft`
- `.animate-slideInRight`
- `.animate-pulse`
- `.animate-glow`

## Accessibility Features

### WCAG Compliance
- ✅ Focus outlines on all interactive elements (3px solid accent)
- ✅ Skip link for keyboard navigation
- ✅ Semantic HTML structure
- ✅ ARIA labels on buttons and navigation
- ✅ Color contrast ratio ≥ 4.5:1 for text
- ✅ Accessible form labels

### Keyboard Navigation
- Tab: Move to next interactive element
- Shift + Tab: Move to previous element
- Enter: Activate buttons and links
- Escape: Close sidebar/modals
- Space: Toggle buttons

## Light Mode
Light mode uses inverted colors:
- Background: #f5f5f5
- Text: #1a1a1a
- Accent: Remains #689eb8
- Toggleable via theme button with localStorage persistence

## Performance Considerations

### Optimizations
- CSS variables for maintainability (no pre-processing required)
- Minimal JavaScript (vanilla only)
- Lazy-loaded images
- Font preconnect for faster loading
- GitHub Pages compatible (no build step needed)

### CSS File Sizes (Optimized)
- variables.css: ~1.2kb
- typography.css: ~0.8kb
- utilities.css: ~3.2kb
- components.css: ~5kb
- style.css: ~12kb

## GitHub Pages Deployment

### Key Constraints
- No server-side processing
- Static files only
- Relative paths for links
- Hash-based navigation for single-page experience
- No CORS issues for external resources

### Deployment Checklist
- ✅ All CSS files linked with relative paths
- ✅ Images in images/ directory
- ✅ JavaScript deferred in HTML
- ✅ Meta tags for social sharing
- ✅ Favicon linked

## Future Enhancements

### Phase 8+
- Component storybook/catalog
- Dark mode variants for components
- Animation library expansion
- Micro-interactions for UX enhancement
- Performance optimization (CSS minification, image optimization)

## Design Principles

1. **Consistency**: Use tokens, never hardcode values
2. **Accessibility**: Every interactive element keyboard accessible
3. **Performance**: Minimal JavaScript, optimized CSS
4. **Maintainability**: Modular, self-documenting code
5. **Responsive**: Mobile-first approach with progressive enhancement
6. **Aesthetic**: Clean, modern, professional appearance

---

**Design System Version**: 1.0  
**Last Updated**: May 8, 2026  
**Maintained By**: GitHub Copilot UI/UX Refactor
