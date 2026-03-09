---
name: i18n-workflow
description: >
  Internationalization (i18n) workflow for WITP.
  Trigger: When adding translatable text to pages/components, creating new pages, or working with dictionaries in infrastructure/i18n.
---

# i18n Workflow for WITP

## Overview

WITP uses a custom i18n system built on React Context. Dictionaries are split by domain namespace and loaded at the layout level. Components access translations via the `useTranslation()` hook — no prop-drilling.

## Architecture

```
infrastructure/i18n/
├── proxy.ts            ← middleware locale detection + redirect
├── dictionaries.ts     ← getDictionary(), hasLocale(), types
├── I18nProvider.tsx     ← React Context provider (Client Component)
├── useTranslation.ts   ← useTranslation() hook
├── index.ts            ← barrel export
└── dictionaries/
    ├── en/             ← one JSON per namespace
    │   ├── common.json
    │   ├── auth.json
    │   ├── community.json
    │   ├── dashboard.json
    │   └── nav.json
    └── es/             ← same structure
```

---

## How to Use Translations in a Component

### Step 1: Import the hook

```tsx
"use client";
import { useTranslation } from "@/infrastructure/i18n";
```

### Step 2: Call with a namespace

```tsx
function LoginForm() {
  const { t, locale } = useTranslation("auth");

  return (
    <div>
      <h1>{t.loginTitle}</h1>
      <button>{t.loginButton}</button>
    </div>
  );
}
```

### Step 3 (optional): Access full dictionary

```tsx
// Without namespace — returns the entire dictionary
const { t } = useTranslation();
t.auth.loginButton;
t.common.appName;
```

### In Server Components (no hook needed)

```tsx
import { getDictionary, type Locale } from "@/infrastructure/i18n";

export default async function Page({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const dict = await getDictionary(lang as Locale);

  return <h1>{dict.common.appName}</h1>;
}
```

---

## How to Add New Translations

### Adding keys to an existing namespace

1. Add the key to **both** locale files:
   - `infrastructure/i18n/dictionaries/en/<namespace>.json`
   - `infrastructure/i18n/dictionaries/es/<namespace>.json`

2. Use it immediately — types update automatically:
   ```tsx
   const { t } = useTranslation("common");
   t.myNewKey; // type-safe after adding to JSON
   ```

### Creating a new namespace

1. Create `dictionaries/en/<newNamespace>.json` and `dictionaries/es/<newNamespace>.json`

2. In `dictionaries.ts`, add:

   ```typescript
   // Add the type
   type NewNamespaceDict = JsonDefault<
     Awaited<typeof import("./dictionaries/en/newNamespace.json")>
   >;

   // Add to Dictionary type
   export type Dictionary = {
     // ... existing namespaces
     newNamespace: NewNamespaceDict;
   };

   // Add to BOTH locale loaders
   const dictionaries: Record<Locale, () => Promise<Dictionary>> = {
     en: async () => ({
       // ... existing
       newNamespace: (await import("./dictionaries/en/newNamespace.json"))
         .default,
     }),
     es: async () => ({
       // ... existing
       newNamespace: (await import("./dictionaries/es/newNamespace.json"))
         .default,
     }),
   };
   ```

3. Use: `const { t } = useTranslation("newNamespace");`

---

## Key Rules

1. **Every user-facing string must be in a dictionary** — never hardcode text
2. **Always add to BOTH locales** (`en/` and `es/`) — missing keys will cause runtime errors
3. **Use namespaces that match domains** — `auth`, `community`, `dashboard`, not generic names
4. **The hook requires `"use client"`** — `useTranslation()` is a client hook
5. **Server Components use `getDictionary()` directly** — no hook needed
6. **Keep JSON keys in camelCase** — e.g. `loginButton`, not `login_button` or `Login Button`
