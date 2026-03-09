"use client";

import { use } from "react";
import { I18nContext } from "./I18nProvider";
import type { Dictionary, Locale } from "./dictionaries";

type UseTranslationReturn<K extends keyof Dictionary | undefined> =
  K extends keyof Dictionary
    ? { t: Dictionary[K]; locale: Locale }
    : { t: Dictionary; locale: Locale };

export function useTranslation<
  K extends keyof Dictionary | undefined = undefined,
>(namespace?: K): UseTranslationReturn<K> {
  const context = use(I18nContext);

  if (!context) {
    throw new Error(
      "useTranslation must be used within an I18nProvider. " +
        "Make sure <I18nProvider> wraps your component tree in the root layout.",
    );
  }

  const { dictionary, locale } = context;

  if (namespace) {
    return { t: dictionary[namespace], locale } as UseTranslationReturn<K>;
  }

  return { t: dictionary, locale } as UseTranslationReturn<K>;
}
