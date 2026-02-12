import {useTranslations} from "next-intl";

const projectIds = ["project1", "project2", "project3"] as const;

export default function ProjectsPage() {
  const t = useTranslations("projects");

  return (
    <section className="stack">
      <header className="page-header">
        <h1>{t("title")}</h1>
        <p>{t("intro")}</p>
      </header>

      <div className="stack">
        {projectIds.map((projectId) => (
          <article key={projectId} className="card card-row">
            <div>
              <h2>{t(`${projectId}.title`)}</h2>
              <p>{t(`${projectId}.summary`)}</p>
            </div>
            <ul className="tags">
              <li>{t(`${projectId}.tag1`)}</li>
              <li>{t(`${projectId}.tag2`)}</li>
              <li>{t(`${projectId}.tag3`)}</li>
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
