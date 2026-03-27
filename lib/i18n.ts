export const locales = ["ca", "en", "es"] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "ca";

export function isLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}

export function localeOpenGraph(locale: Locale): string {
  const map: Record<Locale, string> = {
    ca: "ca_ES",
    en: "en_US",
    es: "es_ES",
  };
  return map[locale];
}

export function localeHtmlLang(locale: Locale): string {
  const map: Record<Locale, string> = {
    ca: "ca",
    en: "en",
    es: "es",
  };
  return map[locale];
}
