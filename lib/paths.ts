import type { Locale } from "@/lib/i18n";

/** Path without locale prefix, e.g. `''` for home, `'privacy'`. */
export function localizedPath(locale: Locale, path: string): string {
  const normalized = path.replace(/^\//, "");
  return normalized ? `/${locale}/${normalized}` : `/${locale}`;
}
