# Repository Guidelines

## Setup

To enable AI agent skills for this project, run:

```bash
./skills/setup.sh --all
```

This creates symlinks from `.agents/skills`, `.agent/skills`, etc. to the skills directory.

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

| Skill                   | Description                                          | Path                                            |
| ----------------------- | ---------------------------------------------------- | ----------------------------------------------- |
| `prisma-database-setup` | Prisma v7 setup, client, migrations, driver adapters | `.agents/skills/prisma-database-setup/SKILL.md` |
| `zod-4`                 | Zod v4 new API (z.email(), z.uuid())                 | `.agents/skills/zod-4/SKILL.md`                 |
| `skill-creator`         | Create new AI agent skills for this repository       | `.agents/skills/skill-creator/SKILL.md`         |

## Auto-invoke Skills

When performing these actions, ALWAYS invoke the corresponding skill FIRST:

| Action                                                    | Skill                         |
| --------------------------------------------------------- | ----------------------------- |
| Creating or modifying files in `app/`                     | `vercel-react-best-practices` |
| Writing React 19 components (.tsx)                        | `react-19`                    |
| Creating UI components or styling with Tailwind CSS       | `tailwind-design-system`      |
| Working with advanced TypeScript patterns                 | `typescript-advanced-types`   |
| Importing across layers (e.g., from `modules/` to `app/`) | `screaming-architecture`      |
| Working with Prisma (schema, migrations, client)          | `prisma-database-setup`       |
| Working with Zod schemas (new API)                        | `zod-4`                       |
| Working with Zustand state management                     | `zustand-5`                   |
| Modifying the 3D model, lighting, or mesh interaction     | `r3f-best-practices`          |
| Creating new rules or skills for the AI assistant         | `skill-creator`               |

## Sub-agents

Each component has its own AGENTS.md with specific guidelines:

| Component          | Location                       | Description                                    |
| ------------------ | ------------------------------ | ---------------------------------------------- |
| **UI**             | `src/ui/AGENTS.md`             | Next.js App Router, React components, Tailwind |
| **Modules**        | `src/modules/AGENTS.md`        | Domain logic, Server Actions, Zod schemas      |
| **Infrastructure** | `src/infrastructure/AGENTS.md` | Prisma, i18n, configuration                    |

## Commit Guidelines

Follow conventional-commit style: `<type>[scope]: <description>`

**Types:** `feat`, `fix`, `docs`, `chore`, `perf`, `refactor`, `style`, `test`
