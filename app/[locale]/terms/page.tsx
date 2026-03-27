import { PageContainer } from "@/components/PageContainer";
import { getDictionary, hasLocale } from "@/lib/dictionaries";
import type { Locale } from "@/lib/i18n";
import { siteUrl, supportEmail } from "@/lib/site";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

type PageProps = { params: Promise<{ locale: string }> };

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { locale: raw } = await params;
  if (!hasLocale(raw)) notFound();
  const locale = raw as Locale;
  const dict = await getDictionary(locale);
  return {
    title: dict.terms.title,
    description: dict.terms.description,
    alternates: {
      canonical: `${siteUrl}/${locale}/terms`,
    },
  };
}

export default async function TermsPage({ params }: PageProps) {
  const { locale: raw } = await params;
  if (!hasLocale(raw)) notFound();
  const dict = await getDictionary(raw as Locale);

  return (
    <PageContainer variant="prose">
      <h1 className="text-3xl font-semibold tracking-tight text-zinc-900 md:text-4xl dark:text-zinc-50">
        {dict.terms.title}
      </h1>
      <p className="mt-2 text-sm text-zinc-500 dark:text-zinc-400">
        {dict.terms.updated}
      </p>
      <div className="mt-10 space-y-6 text-base leading-relaxed text-zinc-600 dark:text-zinc-400">
        <p>{dict.terms.p1}</p>
        <p>{dict.terms.p2}</p>
        <h2 className="pt-4 text-xl font-semibold text-zinc-900 dark:text-zinc-100">
          {dict.terms.h2agree}
        </h2>
        <p>{dict.terms.p3}</p>
        <h2 className="pt-4 text-xl font-semibold text-zinc-900 dark:text-zinc-100">
          {dict.terms.h2use}
        </h2>
        <p>{dict.terms.p4}</p>
        <h2 className="pt-4 text-xl font-semibold text-zinc-900 dark:text-zinc-100">
          {dict.terms.h2contact}
        </h2>
        <p>
          {dict.terms.p5}{" "}
          <a
            href={`mailto:${supportEmail}`}
            className="font-medium text-zinc-900 underline-offset-2 hover:underline dark:text-zinc-100"
          >
            {supportEmail}
          </a>
          .
        </p>
      </div>
    </PageContainer>
  );
}
