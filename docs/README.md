# What is This Pain? (WITP)

**What is This Pain? (WITP)** is a highly modular, 3D-interactive web application for tracking physical pain and community sharing. It follows a strict **Screaming Architecture**, separating routing, business domains, AI integrations, and infrastructure.

## Tech Stack

- **Framework**: Next.js (App Router)
- **Language**: TypeScript
- **UI**: React 19, Tailwind CSS 4 (via `shared/ui`)
- **3D Engine**: React Three Fiber (Three.js), GSAP
- **Database**: PostgreSQL with Prisma ORM
- **State & Validation**: Zustand, Zod

## Commands

- `pnpm dev` - Start development server
- `pnpm build` - Build for production
- `pnpm lint` - Run ESLint
- `npx prisma migrate dev` - Apply schema changes to database (uses `DIRECT_URL`)
- `npx prisma generate` - Update Prisma Client types
- `npx prisma studio` - Open local database UI
