# WITP Modules - AI Agent Ruleset

> **Skills Reference**: For detailed patterns, use these skills:
>
> - [`screaming-architecture`](../.agents/skills/screaming-architecture/SKILL.md) - Domain isolation
> - [`zod-4`](../.agents/skills/zod-4/SKILL.md) - Zod v4 new API
> - [`prisma-database-setup`](../.agents/skills/prisma-database-setup/SKILL.md) - Database patterns

### Auto-invoke Skills

When performing these actions, ALWAYS invoke the corresponding skill FIRST:

| Action                  | Skill                    |
| ----------------------- | ------------------------ |
| Creating Zod schemas    | `zod-4`                  |
| Working with Prisma     | `prisma-database-setup`  |
| Importing across layers | `screaming-architecture` |

---

## CRITICAL RULES - NON-NEGOTIABLE

### Documentation Synchronization

- Any modification or addition to Server Actions (`actions.ts`), Zod schemas (`schemas.ts`), security guards, or response contracts MUST be immediately updated in `docs/API.md`.
- Any database schema dependency changes MUST be updated in `docs/database/SCHEMA.md`.

---
