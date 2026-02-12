"use client";

import {useLocale, useTranslations} from "next-intl";

import {locales} from "@/i18n/config";
import {usePathname, useRouter} from "@/i18n/navigation";

export default function LanguageSwitcher() {
  const t = useTranslations("header");
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();

  const nextLocale = locales.find((candidate) => candidate !== locale) ?? locales[0];

  return (
    <button
      type="button"
      className="lang-switcher"
      onClick={() => router.replace(pathname, {locale: nextLocale})}
      aria-label={t("switchAria")}
    >
      {locale === "en" ? "中文" : "EN"}
    </button>
  );
}
