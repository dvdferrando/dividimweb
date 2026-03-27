import "server-only";

import ca from "@/dictionaries/ca.json";
import en from "@/dictionaries/en.json";
import es from "@/dictionaries/es.json";
import type { Locale } from "@/lib/i18n";

const dictionaries = {
  ca,
  en,
  es,
} as const;

export type Dictionary = typeof ca;

export function hasLocale(value: string): value is Locale {
  return value in dictionaries;
}

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale];
}
