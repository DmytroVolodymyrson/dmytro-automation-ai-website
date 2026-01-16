# Dmytro Automation AI - Website Documentation

## Project Overview

This is a modern landing page for Dmytro Automation AI, a business focused on AI automation solutions. The website showcases services, results, testimonials, and provides a booking interface for potential clients.

**Purpose**: Professional landing page to convert visitors into booked consultation calls
**Target Audience**: Business owners and decision-makers looking for AI automation solutions
**Primary Goal**: Drive consultation bookings through compelling design and clear value proposition

## Tech Stack

### Core Framework
- **React 18.3.1** - UI library
- **TypeScript 5.8.3** - Type safety
- **Vite 5.4.19** - Build tool and dev server
- **React Router DOM 6.30.1** - Client-side routing

### UI & Styling
- **Tailwind CSS 3.4.17** - Utility-first CSS framework
- **shadcn/ui** - Accessible component system built on Radix UI
- **Framer Motion 12.26.2** - Animation library
- **Lucide React 0.462.0** - Icon library

### State & Data Management
- **TanStack Query 5.83.0** - Server state management
- **React Hook Form 7.61.1** - Form handling
- **Zod 3.25.76** - Schema validation

### Development
- **ESLint 9.32.0** - Linting
- **Vitest 3.2.4** - Unit testing
- **Testing Library** - Component testing

## Project Structure

```
/
├── public/               # Static assets
│   ├── favicon.svg      # Purple gradient lightning bolt icon
│   └── lovable-uploads/ # Images and assets
├── src/
│   ├── components/      # React components
│   │   ├── ui/         # shadcn/ui components (Radix primitives)
│   │   ├── Navbar.tsx
│   │   ├── HeroSection.tsx
│   │   ├── ServicesSection.tsx
│   │   ├── ResultsSection.tsx
│   │   ├── TestimonialsSection.tsx
│   │   ├── BookingSection.tsx
│   │   └── Footer.tsx
│   ├── pages/          # Page components
│   │   ├── Index.tsx   # Landing page
│   │   └── NotFound.tsx
│   ├── hooks/          # Custom React hooks
│   ├── lib/            # Utilities
│   │   └── utils.ts    # cn() for className merging
│   ├── test/           # Test files
│   ├── App.tsx         # App root with routing
│   ├── main.tsx        # Entry point
│   └── index.css       # Global styles & design tokens
├── index.html          # HTML entry point
├── package.json
├── tailwind.config.ts  # Tailwind configuration
├── tsconfig.json       # TypeScript config
└── vite.config.ts      # Vite config
```

## Design System

### Color Palette
The site uses a professional blue gradient theme with HSL color tokens defined in `src/index.css`:

**Light Mode:**
- Primary: `hsl(221 83% 53%)` - Vibrant blue
- Accent: `hsl(199 89% 48%)` - Cyan blue
- Background: `hsl(210 40% 98%)` - Off-white
- Foreground: `hsl(222 47% 11%)` - Dark blue-gray

**Dark Mode:**
- Automatic dark mode support via `.dark` class
- All colors have dark mode equivalents

### Typography
- **Body Font**: Inter (400-800 weights) - Clean, professional sans-serif
- **Display Font**: Space Grotesk (500-700 weights) - Modern, geometric headings
- Loaded via Google Fonts CDN

### Custom Design Tokens
```css
--hero-gradient: linear-gradient(135deg, primary → accent)
--card-shadow: Subtle blue-tinted shadow
--card-shadow-hover: Enhanced shadow on hover
--glow-accent: Accent glow effect
--radius: 0.75rem (12px)
```

### Utility Classes
- `.text-gradient` - Gradient text effect (primary → accent)
- `.section-padding` - Consistent vertical spacing (py-20 md:py-28 lg:py-32)
- `.container-tight` - Max-width container (max-w-6xl + responsive padding)

### Animations
Defined in `tailwind.config.ts`:
- `fade-up` - Fade in with upward motion (0.5s)
- `fade-in` - Simple opacity fade (0.4s)
- `scale-in` - Scale from 0.95 to 1 (0.3s)
- `accordion-down/up` - Radix accordion animations

## Component Architecture

### Page Structure
The main landing page (`src/pages/Index.tsx`) is composed of sections:

1. **Navbar** - Fixed header with smooth scroll navigation
2. **HeroSection** - Above-the-fold content with CTA
3. **ServicesSection** - Service offerings (#services anchor)
4. **ResultsSection** - Social proof with metrics (#results anchor)
5. **TestimonialsSection** - Client testimonials (#testimonials anchor)
6. **BookingSection** - Call-to-action form (#booking anchor)
7. **Footer** - Site footer with links

### Component Conventions

**File Naming:**
- PascalCase for component files: `HeroSection.tsx`
- All components export as default

**Component Pattern:**
```tsx
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const ComponentName = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-tight">
        {/* Component content */}
      </div>
    </section>
  );
};

export default ComponentName;
```

### Navbar Behavior
- Fixed position with backdrop blur
- Smooth scroll navigation using `scrollIntoView({ behavior: "smooth" })`
- Mobile menu with Framer Motion animations
- Changes styling on scroll (shadow + background)

### Logo & Branding
- Logo: Purple gradient box with white Zap (lightning) icon
- Text: "Dmytro Automation AI" (hidden on mobile, visible sm+)
- Color scheme: Purple/blue gradient (`#6366f1` → `#8b5cf6`)

## Styling Conventions

### Tailwind Usage
- Utility-first approach
- Responsive modifiers: `md:`, `lg:`, etc.
- Use design tokens via `hsl(var(--token))` for colors
- Prefer utility classes over custom CSS

### Class Name Merging
Use `cn()` utility from `src/lib/utils.ts`:
```tsx
import { cn } from "@/lib/utils";

<div className={cn("base-classes", conditional && "conditional-class")} />
```

### Responsive Design
- Mobile-first approach
- Breakpoints: sm (640px), md (768px), lg (1024px), xl (1280px), 2xl (1400px)
- Test all sections at mobile, tablet, and desktop sizes

## State Management

### TanStack Query
- Set up in `App.tsx` with `QueryClientProvider`
- Use for server state, API calls, and data fetching

### Form Handling
- React Hook Form for form state
- Zod for validation schemas
- Example pattern:
```tsx
const form = useForm<z.infer<typeof schema>>({
  resolver: zodResolver(schema),
});
```

## Routing

### React Router Setup
- BrowserRouter in `App.tsx`
- Routes:
  - `/` → Index (landing page)
  - `*` → NotFound (catch-all 404)
- Add custom routes above the `*` catch-all

### Navigation
All navigation uses smooth scrolling to anchored sections:
```tsx
const section = document.querySelector('#section-id');
section.scrollIntoView({ behavior: 'smooth' });
```

## Icons

### Lucide React
- Import specific icons: `import { Zap, Menu, X } from "lucide-react"`
- Size via className: `className="w-5 h-5"`
- Color inherits from text color

### Icon Usage in Logo
```tsx
<div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center">
  <Zap className="w-5 h-5 text-primary-foreground" />
</div>
```

## Animation Guidelines

### Framer Motion
- Use `motion` components for animations
- Common patterns:
```tsx
// Fade in on mount
<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5 }}
>
```

### AnimatePresence
For conditional rendering with exit animations:
```tsx
<AnimatePresence>
  {isOpen && (
    <motion.div
      initial={{ opacity: 0, height: 0 }}
      animate={{ opacity: 1, height: "auto" }}
      exit={{ opacity: 0, height: 0 }}
    />
  )}
</AnimatePresence>
```

## Development Workflow

### Commands
```bash
npm run dev          # Start dev server (Vite)
npm run build        # Production build
npm run build:dev    # Development build
npm run preview      # Preview production build
npm run lint         # Run ESLint
npm run test         # Run tests once
npm run test:watch   # Run tests in watch mode
```

### Dev Server
- Runs on `http://localhost:5173` (default Vite port)
- Hot module replacement (HMR) enabled
- Fast refresh for React

## Testing

### Vitest Setup
- Configuration: `vitest.config.ts`
- Test files: `src/test/*.test.ts`
- Setup file: `src/test/setup.ts`
- Uses jsdom for DOM testing

### Testing Library
- @testing-library/react for component testing
- @testing-library/jest-dom for assertions

## Best Practices

### Component Development
1. Keep components focused and single-purpose
2. Extract reusable logic into custom hooks
3. Use TypeScript interfaces for props
4. Leverage shadcn/ui components for consistency
5. Follow the established section structure

### Styling
1. Use design tokens (CSS variables) for colors
2. Apply utility classes instead of custom CSS
3. Keep responsive design mobile-first
4. Maintain consistent spacing with section-padding

### Performance
1. Lazy load images in production
2. Use Framer Motion sparingly (only where needed)
3. Minimize bundle size - tree-shake unused components
4. Optimize images before adding to public/lovable-uploads

### Accessibility
1. All interactive elements must be keyboard accessible
2. Use semantic HTML elements
3. Provide proper ARIA labels where needed
4. Test with screen readers
5. Maintain color contrast ratios (WCAG AA minimum)

## File Modification Guidelines

### When Adding Components
1. Place in `src/components/` (or `src/components/ui/` for shadcn components)
2. Export as default
3. Import with `@/` alias: `import Component from "@/components/Component"`

### When Adding Pages
1. Create in `src/pages/`
2. Add route in `src/App.tsx` above the `*` catch-all
3. Follow existing page structure patterns

### When Modifying Styles
1. Global styles → `src/index.css`
2. Component styles → Tailwind utilities in className
3. Design tokens → CSS variables in `src/index.css` `:root`
4. Theme config → `tailwind.config.ts`

## Common Patterns

### Section Layout
```tsx
<section className="section-padding bg-background">
  <div className="container-tight">
    <div className="text-center mb-12">
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
        Section Title
      </h2>
      <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
        Section description
      </p>
    </div>
    {/* Section content */}
  </div>
</section>
```

### Button Usage
```tsx
import { Button } from "@/components/ui/button";

<Button
  onClick={handleClick}
  className="bg-primary hover:bg-primary/90 text-primary-foreground"
>
  Button Text
</Button>
```

### Card Pattern
```tsx
import { Card } from "@/components/ui/card";

<Card className="p-6 hover:shadow-card-hover transition-shadow">
  {/* Card content */}
</Card>
```

## Important Notes

### Path Aliases
- `@/` maps to `src/` directory
- Configured in `tsconfig.json` and `vite.config.ts`
- Use for all internal imports

### SEO & Meta
- Meta tags in `index.html`
- Title: "Dmytro Automation AI | Work Less, Earn More with AI Automation"
- Description optimized for AI automation services
- Canonical URL: https://dmytroautomation.ai
- Open Graph and Twitter cards configured

### Brand Identity
- Business: AI Automation consulting/services
- Tone: Professional, technical, results-focused
- Visual: Clean, modern, tech-forward with blue/purple gradients
- Icon: Lightning bolt (symbolizing automation/speed)

## Troubleshooting

### Build Errors
- Check TypeScript errors: `npx tsc --noEmit`
- Clear node_modules: `rm -rf node_modules && npm install`
- Clear Vite cache: `rm -rf .vite`

### Styling Issues
- Ensure Tailwind directives in `index.css`
- Check if custom utilities are defined in `tailwind.config.ts`
- Verify CSS variable usage: `hsl(var(--token))`

### Import Errors
- Verify `@/` alias is working
- Check file extensions (.tsx, .ts)
- Ensure exports are default where expected

## Future Enhancements Considerations

When extending this project:
- Add CMS integration for dynamic content
- Implement analytics tracking (GA4, etc.)
- Add blog section for content marketing
- Create case study pages with detailed results
- Integrate booking system API
- Add email newsletter signup
- Implement progressive web app (PWA) features
- Add multilingual support (i18n)

---

**Last Updated**: 2026-01-16
**Project Version**: 0.0.0
**Maintained By**: Dmytro Automation AI
