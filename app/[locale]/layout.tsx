import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { getDictionary, hasLocale } from "@/lib/dictionaries";
import { locales, localeOpenGraph, type Locale } from "@/lib/i18n";
import { siteUrl } from "@/lib/site";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export const dynamicParams = false;

export async function generateMetadata({
  params,
}: LayoutProps<"/[locale]">): Promise<Metadata> {
  const { locale: raw } = await params;
  if (!hasLocale(raw)) notFound();
  const locale = raw as Locale;
  const dict = await getDictionary(locale);

  return {
    title: dict.meta.siteTitle,
    description: dict.meta.siteDescription,
    openGraph: {
      title: dict.meta.siteTitle,
      description: dict.meta.siteDescription,
      url: siteUrl,
      siteName: "Dividim",
      locale: localeOpenGraph(locale),
      type: "website",
    },
    alternates: {
      canonical: `${siteUrl}/${locale}`,
      languages: {
        ca: `${siteUrl}/ca`,
        en: `${siteUrl}/en`,
        es: `${siteUrl}/es`,
      },
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: LayoutProps<"/[locale]">) {
  const { locale: raw } = await params;
  if (!hasLocale(raw)) notFound();
  const locale = raw as Locale;
  const dict = await getDictionary(locale);

  return (
    <>
      <Header dict={dict} locale={locale} />
      <main className="w-full grow">{children}</main>
      <Footer dict={dict} locale={locale} />
    </>
  );
}
