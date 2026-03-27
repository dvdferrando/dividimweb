import type { Dictionary } from "@/lib/dictionaries";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { DividimLogo } from "@/components/DividimLogo";
import type { Locale } from "@/lib/i18n";
import { localizedPath } from "@/lib/paths";
import Link from "next/link";

type HeaderProps = {
  locale: Locale;
  dict: Dictionary;
};

export function Header({ locale, dict }: HeaderProps) {
  const nav = [
    { href: localizedPath(locale, ""), label: dict.nav.home },
    { href: localizedPath(locale, "privacy"), label: dict.nav.privacy },
    { href: localizedPath(locale, "terms"), label: dict.nav.terms },
    { href: localizedPath(locale, "contact"), label: dict.nav.contact },
  ] as const;

  return (
    <header className="sticky top-0 z-50 border-b border-zinc-200/80 bg-white/80 backdrop-blur-md supports-[backdrop-filter]:bg-white/70 dark:border-zinc-800 dark:bg-zinc-950/80 dark:supports-[backdrop-filter]:bg-zinc-950/70">
      <div className="mx-auto flex max-w-4xl flex-wrap items-center justify-between gap-4 px-5 py-4 md:px-6">
        <Link
          href={localizedPath(locale, "")}
          className="flex items-center transition-opacity hover:opacity-90"
          aria-label={dict.aria.homeLink}
        >
          <DividimLogo heightClass="h-8 md:h-9" priority />
        </Link>
        <div className="flex min-w-0 flex-1 flex-wrap items-center justify-end gap-x-5 gap-y-2 sm:gap-x-6 md:gap-x-8">
          <nav
            aria-label={dict.aria.mainNav}
            className="flex flex-wrap items-center justify-end gap-x-5 gap-y-2 text-sm font-medium text-zinc-600 dark:text-zinc-400"
          >
            {nav.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className="transition-colors hover:text-zinc-900 dark:hover:text-zinc-100"
              >
                {label}
              </Link>
            ))}
          </nav>
          <div className="shrink-0">
            <LanguageSwitcher dict={dict} locale={locale} />
          </div>
        </div>
      </div>
    </header>
  );
}
