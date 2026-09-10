CourseSpace is a Next.js course catalog that brings the Level 1 challenges together in one application.

## Getting Started

Install dependencies and run the project:

```bash
pnpm dev
pnpm lint
pnpm build
```

The `app` folder contains routes and layouts. Reusable UI is in `components`, data helpers are in `lib`, server-only configuration is in `server`, and static assets are in `public`.

Pages and layouts are Server Components by default. Active navigation, search, favorites, the counter, and public configuration are intentionally small Client Components. The dashboard uses `Promise.all` for independent data and `Suspense` for the slower weekly card.

The dashboard keeps its slow, route-specific component in `_components` so it stays close to the route without creating a URL.
