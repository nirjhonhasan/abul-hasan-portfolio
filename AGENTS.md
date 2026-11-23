<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# Portfolio project instructions

## Project overview

- This is a private, single-page Next.js portfolio under active development.
- The app uses Next.js 16.4, React 19.3, TypeScript (strict), Tailwind CSS 4.3, and npm. There are no other runtime dependencies.
- The App Router is located in `src/app/`.
- The current UI is still create-next-app scaffold content; do not treat placeholder copy or assets as final portfolio content.
- The homepage metadata and visible content should eventually describe Abul Hasan and his work, skills, and contact links.

## Repository layout

- `src/app/layout.tsx`: root HTML, Geist and Geist Mono via `next/font/google` (exposed as `--font-geist-sans` / `--font-geist-mono`), global CSS import, and app metadata (still the default "Create Next App" title/description).
- `src/app/page.tsx`: primary portfolio page.
- `src/app/globals.css`: Tailwind import, `--background`/`--foreground` tokens (with a `prefers-color-scheme: dark` override) mapped through `@theme inline`. The `body` rule still sets `font-family: Arial`, which overrides the Geist font; remove it when finalizing the design.
- `src/app/favicon.ico`: default favicon; replace it when portfolio branding is finalized.
- `public/`: static scaffold SVGs (`next.svg`, `vercel.svg`, `file.svg`, `globe.svg`, `window.svg`); remove unused ones.
- `next.config.ts`: Next.js and Turbopack configuration, including the `@tailwindcss/turbopack` loader rule for `*.css` (there is no PostCSS config).
- `eslint.config.mjs`: Next.js Core Web Vitals and TypeScript lint configuration.
- `tsconfig.json`: strict TypeScript with the `@/*` -> `./src/*` alias.
- `package-lock.json`: npm dependency lockfile.
- `next-env.d.ts`, `.next/`: generated and git-ignored; never edit or commit them.

## Working conventions

- Keep changes focused on the portfolio request. Do not replace unrelated files or introduce a new framework without asking.
- Use the existing App Router structure and React Server Components unless a task genuinely requires client behavior.
- Add `"use client"` only to components that need browser APIs, event handlers, or React state/effects.
- Use TypeScript for all new source code and preserve strict typing. Avoid `any`, unsafe casts, and untyped component props.
- Use the `@/*` path alias for imports from `src/`, and prefer relative imports only when that is clearer.
- Reuse components and data structures instead of duplicating sections. Add new reusable components under `src/app/components/` when the page grows beyond the existing scaffold.
- Use Tailwind utilities for layout and styling, extending `src/app/globals.css` only for tokens or styles that cannot be expressed cleanly with utilities.
- Preserve responsive behavior and support the existing system light/dark presentation unless the requested design specifies otherwise.
- Use semantic HTML and accessible interactions: real links and buttons, descriptive image alt text, visible focus states, sufficient contrast, and appropriate heading hierarchy.
- Prefer Next.js `<Image>` for static and remote images. Configure remote hosts in `next.config.ts` before using a remote image.
- Use `next/font` (currently `next/font/google`) for fonts. Do not introduce a separate font-loading package or `<link>` font tags.
- Keep metadata in `src/app/layout.tsx` or route metadata exports accurate as portfolio content changes.
- Do not add secrets, API keys, analytics IDs, or personal contact data to source files without an explicit request.

## Next.js configuration

- Read `node_modules/next/dist/docs/` before changing APIs or framework conventions.
- This project enables React Compiler, cache components, partial prefetching, and experimental agent feedback in `next.config.ts`.
- Keep configuration changes deliberate and verify that they do not conflict with the App Router or Turbopack setup.
- The root layout receives the generated `LayoutProps<"/">` type; preserve or update framework-generated types consistently.

## Commands

Run commands from the repository root:

- `npm run dev` - start the local development server.
- `npm run lint` - run the ESLint Core Web Vitals and TypeScript checks.
- `npm run build` - create a production build and verify Next.js compilation.
- `npm start` - serve an existing production build.

Package changes must update `package.json` and `package-lock.json` through npm.

## Validation

- For visual changes, run `npm run dev` and verify the relevant desktop and mobile layouts.
- For code changes, run the smallest relevant check first, then `npm run lint`.
- Run `npm run build` for changes that affect routing, metadata, configuration, fonts, images, or framework behavior.
- There is currently no test runner or test directory. Do not add test infrastructure unless it is needed for the requested change.
- Before finishing, inspect `git diff` for unintended changes and ensure generated files or build output are not included.
