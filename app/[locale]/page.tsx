import { AppStoreButton } from "@/components/AppStoreButton";
import { DividimLogo } from "@/components/DividimLogo";
import { GooglePlayButton } from "@/components/GooglePlayButton";
import { HomeScreenshots } from "@/components/HomeScreenshots";
import { PageContainer } from "@/components/PageContainer";
import { PricingComparison } from "@/components/PricingComparison";
import { getDictionary, hasLocale } from "@/lib/dictionaries";
import type { Locale } from "@/lib/i18n";
import { localizedPath } from "@/lib/paths";
import { supportEmail } from "@/lib/site";
import Link from "next/link";
import { notFound } from "next/navigation";

type PageProps = { params: Promise<{ locale: string }> };

export default async function HomePage({ params }: PageProps) {
  const { locale: raw } = await params;
  if (!hasLocale(raw)) notFound();
  const locale = raw as Locale;
  const dict = getDictionary(locale);

  return (
    <PageContainer>
      <section className="text-center">
        <p className="mb-6 text-sm font-medium uppercase tracking-widest text-zinc-500 dark:text-zinc-400">
          {dict.home.badge}
        </p>
        <div className="flex justify-center">
          <DividimLogo
            heightClass="h-28 sm:h-32 md:h-36"
            className="drop-shadow-sm dark:drop-shadow-none"
          />
        </div>
        <h1 className="sr-only">Dividim</h1>
        <p className="mx-auto mt-5 max-w-lg text-pretty text-lg leading-relaxed text-zinc-600 md:text-xl dark:text-zinc-400">
          {dict.home.tagline}
        </p>
        <p className="mx-auto mt-3 max-w-md text-sm text-zinc-500 dark:text-zinc-500">
          {dict.home.storesHint}
        </p>
        <div className="mt-10 flex flex-col items-stretch gap-4 sm:flex-row sm:flex-wrap sm:items-center sm:justify-center">
          <AppStoreButton dict={dict} />
          <GooglePlayButton dict={dict} />
        </div>
        <div className="mt-6">
          <Link
            href={localizedPath(locale, "contact")}
            className="text-sm font-medium text-zinc-600 underline-offset-4 transition-colors hover:text-zinc-900 hover:underline dark:text-zinc-400 dark:hover:text-zinc-100"
          >
            {dict.home.getInTouch}
          </Link>
        </div>
      </section>

      <PricingComparison dict={dict} />

      <HomeScreenshots dict={dict} />

      <section className="mt-20 border-t border-zinc-200/80 pt-12 text-center md:mt-24 md:pt-16 dark:border-zinc-800">
        <p className="text-sm text-zinc-600 dark:text-zinc-400">
          {dict.home.questions}{" "}
          <a
            href={`mailto:${supportEmail}`}
            className="font-medium text-zinc-900 underline-offset-4 hover:underline dark:text-zinc-100"
          >
            {supportEmail}
          </a>
        </p>
        <p className="mt-4 text-sm text-zinc-500 dark:text-zinc-500">
          <Link
            href={localizedPath(locale, "privacy")}
            className="underline-offset-4 hover:text-zinc-800 hover:underline dark:hover:text-zinc-300"
          >
            {dict.home.privacy}
          </Link>
          <span className="mx-2 text-zinc-300 dark:text-zinc-600">·</span>
          <Link
            href={localizedPath(locale, "terms")}
            className="underline-offset-4 hover:text-zinc-800 hover:underline dark:hover:text-zinc-300"
          >
            {dict.home.terms}
          </Link>
        </p>
      </section>
    </PageContainer>
  );
}
