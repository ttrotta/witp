# Repository Guidelines

## Project Overview

**What is This Pain? (WITP)** is a highly modular, 3D-interactive web application for tracking physical pain and community sharing. It follows a strict **Screaming Architecture**, separating routing, business domains, AI integrations, and infrastructure.

## Available Skills

Use these skills for detailed patterns on-demand when assisting with this repository:

### Core Framework & UI

| Skill                         | Description                                             | Path                                                  |
| ----------------------------- | ------------------------------------------------------- | ----------------------------------------------------- |
| `vercel-react-best-practices` | Next.js/React best practices, Server Actions, streaming | `.agents/skills/vercel-react-best-practices/SKILL.md` |
| `react-19`                    | React Compiler, avoiding `useMemo`/`useCallback`        | `.agents/skills/react-19/SKILL.md`                    |
| `tailwind-design-system`      | Tailwind v4: design tokens, CVA, dark mode, animations  | `.agents/skills/tailwind-design-system/SKILL.md`      |
| `typescript-advanced-types`   | Advanced TS: generics, conditional types, inference     | `.agents/skills/typescript-advanced-types/SKILL.md`   |
| `screaming-architecture`      | Strict domain isolation rules (modules, app, shared)    | `.agents/skills/screaming-architecture/SKILL.md`      |

### 3D Anatomy & State

| Skill                | Description                                   | Path                                         |
| -------------------- | --------------------------------------------- | -------------------------------------------- |
| `r3f-best-practices` | React Three Fiber: performance, Drei, physics | `.agents/skills/r3f-best-practices/SKILL.md` |
| `zustand-5`          | Zustand v5: persist, selectors, slices        | `.agents/skills/zustand-5/SKILL.md`          |

### Data, Validation & AI

| Skill                              | Description                                          | Path                                                       |
| ---------------------------------- | ---------------------------------------------------- | ---------------------------------------------------------- |
| `prisma-database-setup`            | Prisma v7 setup, client, migrations, driver adapters | `.agents/skills/prisma-database-setup/SKILL.md`            |
| `supabase-postgres-best-practices` | Postgres optimization, RLS, indexes                  | `.agents/skills/supabase-postgres-best-practices/SKILL.md` |
| `zod-4`                            | Zod v4 new API (z.email(), z.uuid())                 | `.agents/skills/zod-4/SKILL.md`                            |
| `skill-creator`                    | Create new AI agent skills for this repository       | `.agents/skills/skill-creator/SKILL.md`                    |

## Auto-invoke Skills

When performing these actions, ALWAYS invoke the corresponding skill FIRST:

| Action                                                    | Skill                              |
| --------------------------------------------------------- | ---------------------------------- |
| Creating or modifying files in `app/`                     | `vercel-react-best-practices`      |
| Writing React 19 components (.tsx)                        | `react-19`                         |
| Creating UI components or styling with Tailwind CSS       | `tailwind-design-system`           |
| Working with advanced TypeScript patterns                 | `typescript-advanced-types`        |
| Importing across layers (e.g., from `modules/` to `app/`) | `screaming-architecture`           |
| Working with Prisma (schema, migrations, client)          | `prisma-database-setup`            |
| Working with PostgreSQL (indexes, RLS, optimization)      | `supabase-postgres-best-practices` |
| Working with Zod schemas (new API)                        | `zod-4`                            |
| Working with Zustand state management                     | `zustand-5`                        |
| Modifying the 3D model, lighting, or mesh interaction     | `r3f-best-practices`               |
| Creating new rules or skills for the AI assistant         | `skill-creator`                    |

## Tech Stack

- **Framework**: Next.js (App Router)
- **Language**: TypeScript
- **UI**: React 19, Tailwind CSS 4 (via `shared/ui`)
- **3D Engine**: React Three Fiber (Three.js), GSAP
- **Database**: PostgreSQL (Supabase) with Prisma ORM
- **State & Validation**: Zustand, Zod

## Commands

- `pnpm dev` - Start development server
- `pnpm build` - Build for production
- `pnpm lint` - Run ESLint
- `npx prisma migrate dev` - Apply schema changes to Supabase (uses `DIRECT_URL`)
- `npx prisma generate` - Update Prisma Client types
- `npx prisma studio` - Open local database UI

## Commit Guidelines

Follow conventional-commit style: `<type>[scope]: <description>`

**Types:** `feat`, `fix`, `docs`, `chore`, `perf`, `refactor`, `style`, `test`
