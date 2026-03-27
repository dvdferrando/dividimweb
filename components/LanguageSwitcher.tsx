"use client";

import type { Dictionary } from "@/lib/dictionaries";
import { type Locale, locales } from "@/lib/i18n";
import Link from "next/link";
import { usePathname } from "next/navigation";

type LanguageSwitcherProps = {
  locale: Locale;
  dict: Dictionary;
};

export function LanguageSwitcher({ locale, dict }: LanguageSwitcherProps) {
  const pathname = usePathname();

  function hrefFor(target: Locale): string {
    if (!pathname) return `/${target}`;
    return pathname.replace(/^\/(ca|en|es)/, `/${target}`) || `/${target}`;
  }

  return (
    <div
      className="flex items-center gap-1 rounded-full border border-zinc-200/80 bg-zinc-50/80 px-1 py-0.5 text-xs font-semibold dark:border-zinc-700 dark:bg-zinc-900/50"
      role="group"
      aria-label={dict.aria.languageSwitch}
    >
      {locales.map((loc) => (
        <Link
          key={loc}
          href={hrefFor(loc)}
          hrefLang={loc}
          className={`rounded-full px-2 py-1 transition-colors ${
            loc === locale
              ? "bg-white text-zinc-900 shadow-sm dark:bg-zinc-800 dark:text-zinc-50"
              : "text-zinc-500 hover:text-zinc-800 dark:text-zinc-400 dark:hover:text-zinc-200"
          }`}
        >
          {loc.toUpperCase()}
        </Link>
      ))}
    </div>
  );
}
