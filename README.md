# Dmytro Automation AI

Professional website for Dmytro Automation AI -- an AI automation consulting business helping companies work less and earn more.

**Live site:** [dmytroautomation.ai](https://dmytroautomation.ai)

## Tech Stack

- React 18 + TypeScript
- Vite (build & dev server)
- Tailwind CSS + shadcn/ui
- Framer Motion (animations)
- React Router DOM (routing)

## Local Development

```sh
npm install
npm run dev
```

Dev server runs at `http://localhost:8080`.

## Build

```sh
npm run build
npm run preview   # preview production build locally
```

## Deployment

Auto-deployed to Vercel from the `main` branch.

## Project Structure

```
src/
  components/    # React components (sections, UI primitives)
  pages/         # Route-level page components
  hooks/         # Custom React hooks
  lib/           # Utilities (cn helper, etc.)
  test/          # Test files
public/
  images/        # Static image assets
```

## Testing

```sh
npm run test         # run tests once
npm run test:watch   # watch mode
```

## Linting

```sh
npm run lint
```
