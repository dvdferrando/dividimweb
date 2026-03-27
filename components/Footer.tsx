import type { Dictionary } from "@/lib/dictionaries";
import type { Locale } from "@/lib/i18n";
import { localizedPath } from "@/lib/paths";
import { supportEmail } from "@/lib/site";
import Link from "next/link";

type FooterProps = {
  locale: Locale;
  dict: Dictionary;
};

export function Footer({ locale, dict }: FooterProps) {
  return (
    <footer className="mt-auto border-t border-zinc-200/80 bg-zinc-50/50 dark:border-zinc-800 dark:bg-zinc-950/50">
      <div className="mx-auto flex max-w-4xl flex-col gap-6 px-5 py-10 md:flex-row md:items-center md:justify-between md:px-6">
        <p className="text-sm text-zinc-500 dark:text-zinc-400">
          © {new Date().getFullYear()} Dividim. {dict.footer.rights}
        </p>
        <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
          <Link
            href={localizedPath(locale, "privacy")}
            className="text-zinc-600 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"
          >
            {dict.home.privacy}
          </Link>
          <Link
            href={localizedPath(locale, "terms")}
            className="text-zinc-600 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"
          >
            {dict.home.terms}
          </Link>
          <a
            href={`mailto:${supportEmail}`}
            className="text-zinc-600 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"
          >
            {supportEmail}
          </a>
        </div>
      </div>
    </footer>
  );
}
