"use client";

import { defaultLocale, isLocale, localeHtmlLang } from "@/lib/i18n";
import { usePathname } from "next/navigation";
import { useLayoutEffect } from "react";

export function LocaleHtmlAttr() {
  const pathname = usePathname();

  useLayoutEffect(() => {
    const seg = pathname.split("/").filter(Boolean)[0];
    const loc = seg && isLocale(seg) ? seg : defaultLocale;
    document.documentElement.lang = localeHtmlLang(loc);
  }, [pathname]);

  return null;
}
