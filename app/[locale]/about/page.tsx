import {useTranslations} from "next-intl";

export default function AboutPage() {
  const t = useTranslations("about");

  return (
    <section className="stack">
      <header className="page-header">
        <h1>{t("title")}</h1>
        <p>{t("intro")}</p>
      </header>

      <div className="grid two-col">
        <div className="card">
          <h2>{t("backgroundTitle")}</h2>
          <p>{t("backgroundBody")}</p>
        </div>
        <div className="card">
          <h2>{t("skillsTitle")}</h2>
          <ul>
            <li>{t("skills1")}</li>
            <li>{t("skills2")}</li>
            <li>{t("skills3")}</li>
          </ul>
        </div>
      </div>

      <div className="card">
        <h2>{t("toolsTitle")}</h2>
        <p>{t("toolsBody")}</p>
      </div>
    </section>
  );
}
