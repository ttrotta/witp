# WITP Infrastructure - AI Agent Ruleset

> **Skills Reference**: For detailed patterns, use these skills:
>
> - [`prisma-database-setup`](../.agents/skills/prisma-database-setup/SKILL.md) - Database setup
> - [`typescript-advanced-types`](../.agents/skills/typescript-advanced-types/SKILL.md) - TS advanced patterns
> - [`i18n-workflow`](../.agents/skills/i18n-workflow/SKILL.md) - Translations, dictionaries, useTranslation

### Auto-invoke Skills

When performing these actions, ALWAYS invoke the corresponding skill FIRST:

| Action                                           | Skill                       |
| ------------------------------------------------ | --------------------------- |
| Working with Prisma (schema, migrations, client) | `prisma-database-setup`     |
| Working with advanced TypeScript patterns        | `typescript-advanced-types` |
| Working with i18n dictionaries or translations   | `i18n-workflow`             |

---

## CRITICAL RULES - NON-NEGOTIABLE

### Database

- Use Prisma with generated client
- NEVER write raw SQL unless absolutely necessary

---
