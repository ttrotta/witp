import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";
import prettier from "eslint-config-prettier/flat";

const domains = [
  "anatomy-3d",
  "auth",
  "community",
  "pain-tracking",
  "user-profile",
  "waitlist",
];

const forbid = (files, group, message) => ({
  files,
  rules: {
    "no-restricted-imports": ["error", { patterns: [{ group, message }] }],
  },
});

// Enforces the dependency matrix in docs/ARCHITECTURE.md.
const boundaries = [
  ...domains.map((domain) =>
    forbid(
      [`src/modules/${domain}/**`],
      [
        "@/app/**",
        ...domains
          .filter((other) => other !== domain)
          .map((other) => `@/modules/${other}/**`),
      ],
      "Modules cannot import from app/ or from other modules; compose them in app/ or share state through shared/store.",
    ),
  ),
  forbid(
    ["src/shared/**"],
    [
      "@/app/**",
      "@/modules/**",
      "@/ai/**",
      "@/infrastructure/auth/**",
      "@/infrastructure/cache/**",
      "@/infrastructure/db/**",
      "@/infrastructure/env/**",
    ],
    "shared/ is domain-agnostic: only infrastructure/i18n may be imported from here.",
  ),
  forbid(
    ["src/infrastructure/**"],
    ["@/app/**", "@/modules/**", "@/ai/**"],
    "infrastructure/ cannot depend on app/, modules/ or ai/.",
  ),
  forbid(
    ["src/ai/**"],
    ["@/app/**", "@/modules/**"],
    "ai/ cannot depend on app/ or modules/.",
  ),
];

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  prettier,
  ...boundaries,
  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
    "generated/**",
    "public/draco/**",
    ".impeccable/**",
  ]),
]);

export default eslintConfig;
