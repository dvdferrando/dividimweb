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
    title: dict.privacy.title,
    description: dict.privacy.description,
    alternates: {
      canonical: `${siteUrl}/${locale}/privacy`,
    },
  };
}

export default async function PrivacyPage({ params }: PageProps) {
  const { locale: raw } = await params;
  if (!hasLocale(raw)) notFound();
  const dict = await getDictionary(raw as Locale);
  const sections = Array.isArray(dict.privacy.sections)
    ? dict.privacy.sections
    : [];

  return (
    <PageContainer variant="prose">
      <article>
        <header className="border-b border-zinc-200/80 pb-8 dark:border-zinc-800">
          <h1 className="text-balance text-3xl font-semibold tracking-tight text-zinc-900 sm:text-4xl dark:text-zinc-50">
            {dict.privacy.title}
          </h1>
          <p className="mt-3 text-sm text-zinc-500 dark:text-zinc-400">
            {dict.privacy.updated}
          </p>
        </header>

        <div className="mt-10 space-y-10 sm:mt-12 sm:space-y-12">
          {sections.map((section, index) => (
            <section
              key={index}
              aria-labelledby={`privacy-section-${index}`}
              className="scroll-mt-28"
            >
              <h2
                id={`privacy-section-${index}`}
                className="text-balance text-lg font-semibold tracking-tight text-zinc-900 sm:text-xl dark:text-zinc-50"
              >
                {section.title}
              </h2>

              {section.paragraphs?.map((paragraph, pi) => (
                <p
                  key={pi}
                  className="mt-4 text-base leading-[1.75] text-zinc-700 sm:text-[17px] dark:text-zinc-300"
                >
                  {paragraph}
                </p>
              ))}

              {"emailLine" in section && section.emailLine ? (
                <p className="mt-4">
                  <a
                    href={`mailto:${supportEmail}`}
                    className="inline-block break-all text-base font-medium text-zinc-900 underline decoration-zinc-300 underline-offset-4 transition-colors hover:decoration-zinc-500 sm:text-lg dark:text-zinc-100 dark:decoration-zinc-600"
                  >
                    {supportEmail}
                  </a>
                </p>
              ) : null}

              {section.bullets && section.bullets.length > 0 ? (
                <ul className="mt-4 list-disc space-y-3 pl-5 marker:text-zinc-400 sm:pl-6">
                  {section.bullets.map((item, bi) => (
                    <li
                      key={bi}
                      className="text-base leading-[1.75] text-zinc-700 sm:text-[17px] dark:text-zinc-300"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              ) : null}
            </section>
          ))}
        </div>
      </article>
    </PageContainer>
  );
}
