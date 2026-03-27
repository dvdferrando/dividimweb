import { ContactFormPlaceholder } from "@/components/ContactFormPlaceholder";
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
  const dict = getDictionary(locale);
  return {
    title: dict.contact.title,
    description: dict.contact.description,
    alternates: {
      canonical: `${siteUrl}/${locale}/contact`,
    },
  };
}

export default async function ContactPage({ params }: PageProps) {
  const { locale: raw } = await params;
  if (!hasLocale(raw)) notFound();
  const dict = getDictionary(raw as Locale);

  return (
    <PageContainer>
      <div className="mx-auto flex max-w-lg flex-col items-center text-center">
        <h1 className="text-3xl font-semibold tracking-tight text-zinc-900 md:text-4xl dark:text-zinc-50">
          {dict.contact.title}
        </h1>
        <p className="mt-4 text-lg leading-relaxed text-zinc-600 dark:text-zinc-400">
          {dict.contact.intro}
        </p>
        <a
          href={`mailto:${supportEmail}`}
          className="mt-10 inline-flex rounded-2xl border border-zinc-200 bg-white px-8 py-4 text-lg font-medium text-zinc-900 shadow-sm transition-colors hover:border-zinc-300 hover:bg-zinc-50 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-50 dark:hover:border-zinc-600 dark:hover:bg-zinc-800"
        >
          {supportEmail}
        </a>
        <ContactFormPlaceholder dict={dict} />
      </div>
    </PageContainer>
  );
}
