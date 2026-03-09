export const locales = ["en", "es"] as const;
export const defaultLocale: Locale = "en";

export type Locale = (typeof locales)[number];

// Helper to extract the default export type from a JSON module
type JsonDefault<T> = T extends { default: infer D } ? D : T;

// Infer Dictionary type from the default locale's namespace files
type CommonDict = JsonDefault<
  Awaited<typeof import("./dictionaries/en/common.json")>
>;
type AuthDict = JsonDefault<
  Awaited<typeof import("./dictionaries/en/auth.json")>
>;
type CommunityDict = JsonDefault<
  Awaited<typeof import("./dictionaries/en/community.json")>
>;
type DashboardDict = JsonDefault<
  Awaited<typeof import("./dictionaries/en/dashboard.json")>
>;
type NavDict = JsonDefault<
  Awaited<typeof import("./dictionaries/en/nav.json")>
>;

export type Dictionary = {
  common: CommonDict;
  auth: AuthDict;
  community: CommunityDict;
  dashboard: DashboardDict;
  nav: NavDict;
};

const dictionaries: Record<Locale, () => Promise<Dictionary>> = {
  en: async () => ({
    common: (await import("./dictionaries/en/common.json")).default,
    auth: (await import("./dictionaries/en/auth.json")).default,
    community: (await import("./dictionaries/en/community.json")).default,
    dashboard: (await import("./dictionaries/en/dashboard.json")).default,
    nav: (await import("./dictionaries/en/nav.json")).default,
  }),
  es: async () => ({
    common: (await import("./dictionaries/es/common.json")).default,
    auth: (await import("./dictionaries/es/auth.json")).default,
    community: (await import("./dictionaries/es/community.json")).default,
    dashboard: (await import("./dictionaries/es/dashboard.json")).default,
    nav: (await import("./dictionaries/es/nav.json")).default,
  }),
};

export function hasLocale(locale: string): locale is Locale {
  return locales.includes(locale as Locale);
}

export async function getDictionary(locale: Locale): Promise<Dictionary> {
  return dictionaries[locale]();
}
