import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import { LocaleHtmlAttr } from "@/components/LocaleHtmlAttr";
import { APP_STORE_ID, siteUrl } from "@/lib/site";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Dividim",
    template: "%s · Dividim",
  },
  description:
    "Split expenses easily with friends. Dividim for iOS and Android — Freemium and Pro.",
  other: {
    "apple-itunes-app": `app-id=${APP_STORE_ID}`,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ca"
      className={`${geistSans.variable} min-h-full scroll-smooth antialiased`}
      suppressHydrationWarning
    >
      <body className="flex min-h-full flex-col bg-zinc-50 font-sans text-zinc-900 dark:bg-zinc-950 dark:text-zinc-50">
        <LocaleHtmlAttr />
        {children}
      </body>
    </html>
  );
}
