import {useTranslations} from "next-intl";

import {Link} from "@/i18n/navigation";

export default function HomePage() {
  const t = useTranslations("home");

  return (
    <section className="stack">
      <div className="hero">
        <p className="eyebrow">{t("eyebrow")}</p>
        <h1>{t("title")}</h1>
        <p className="lead">{t("lead")}</p>
        <div className="hero-actions">
          <Link className="button" href="/projects">
            {t("ctaPrimary")}
          </Link>
          <Link className="button button-secondary" href="/about">
            {t("ctaSecondary")}
          </Link>
        </div>
      </div>

      <div className="grid two-col">
        <div className="card">
          <h2>{t("positioningTitle")}</h2>
          <p>{t("positioningBody")}</p>
        </div>
        <div className="card">
          <h2>{t("focusAreasTitle")}</h2>
          <ul>
            <li>{t("focusArea1")}</li>
            <li>{t("focusArea2")}</li>
            <li>{t("focusArea3")}</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
