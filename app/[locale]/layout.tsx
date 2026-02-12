import {NextIntlClientProvider} from "next-intl";
import {
  getMessages,
  getTranslations,
  unstable_setRequestLocale
} from "next-intl/server";
import {notFound} from "next/navigation";

import LanguageSwitcher from "@/components/LanguageSwitcher";
import {locales} from "@/i18n/config";
import {Link} from "@/i18n/navigation";

export function generateStaticParams() {
  return locales.map((locale) => ({locale}));
}

export default async function LocaleLayout({
  children,
  params: {locale}
}: {
  children: React.ReactNode;
  params: {locale: string};
}) {
  if (!locales.includes(locale as (typeof locales)[number])) {
    notFound();
  }

  unstable_setRequestLocale(locale);

  const messages = await getMessages({locale});
  const headerT = await getTranslations({locale, namespace: "header"});
  const footerT = await getTranslations({locale, namespace: "footer"});

  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      <div className="page">
        <header className="site-header">
          <div className="brand">
            <span className="brand-title">{headerT("brandTitle")}</span>
            <span className="brand-subtitle">{headerT("brandSubtitle")}</span>
          </div>
          <nav className="site-nav">
            <Link href="/">{headerT("navHome")}</Link>
            <Link href="/projects">{headerT("navProjects")}</Link>
            <Link href="/about">{headerT("navAbout")}</Link>
            <LanguageSwitcher />
          </nav>
        </header>

        <main className="site-main">{children}</main>

        <footer className="site-footer">
          <span>{footerT("summary")}</span>
          <span>{footerT("copyright", {year: new Date().getFullYear()})}</span>
        </footer>
      </div>
    </NextIntlClientProvider>
  );
}
