# WITP UI - AI Agent Ruleset

> **Skills Reference**: For detailed patterns, use these skills:
>
> - [`vercel-react-best-practices`](../.agents/skills/vercel-react-best-practices/SKILL.md) - Next.js/React best practices
> - [`react-19`](../.agents/skills/react-19/SKILL.md) - No useMemo/useCallback, compiler
> - [`tailwind-design-system`](../.agents/skills/tailwind-design-system/SKILL.md) - Tailwind v4 design tokens
> - [`zustand-5`](../.agents/skills/zustand-5/SKILL.md) - Selectors, persist middleware
> - [`i18n-workflow`](../.agents/skills/i18n-workflow/SKILL.md) - Translations, dictionaries, useTranslation

### Auto-invoke Skills

When performing these actions, ALWAYS invoke the corresponding skill FIRST:

| Action                                              | Skill                         |
| --------------------------------------------------- | ----------------------------- |
| Creating or modifying files in `src/ui/`            | `vercel-react-best-practices` |
| Writing React 19 components (.tsx)                  | `react-19`                    |
| Creating UI components or styling with Tailwind CSS | `tailwind-design-system`      |
| Working with Zustand state management               | `zustand-5`                   |
| Adding translatable text or creating new pages      | `i18n-workflow`               |
