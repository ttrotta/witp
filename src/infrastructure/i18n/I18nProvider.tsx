"use client";

import { createContext } from "react";
import type { Dictionary, Locale } from "./dictionaries";

type I18nContextValue = {
  dictionary: Dictionary;
  locale: Locale;
};

export const I18nContext = createContext<I18nContextValue | null>(null);

export function I18nProvider({
  dictionary,
  locale,
  children,
}: {
  dictionary: Dictionary;
  locale: Locale;
  children: React.ReactNode;
}) {
  return <I18nContext value={{ dictionary, locale }}>{children}</I18nContext>;
}
