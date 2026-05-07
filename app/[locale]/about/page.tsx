import {useTranslations} from "next-intl";

export const dynamic = "force-dynamic";

const featuredCardStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(min(280px, 100%), 1fr))",
  gap: "clamp(1.25rem, 3vw, 2.1rem)",
  padding: "clamp(1.35rem, 3.2vw, 2.15rem)",
  border: "1px solid color-mix(in srgb, var(--green-accent) 34%, var(--border))",
  borderTop: "4px solid var(--green-accent)",
  borderRadius: "0.75rem",
  background: "linear-gradient(180deg, color-mix(in srgb, var(--elevated-surface) 88%, var(--green-accent) 12%) 0%, var(--surface-background) 100%)",
  boxShadow: "0 18px 42px color-mix(in srgb, var(--green-accent) 8%, transparent)"
} as const;

const compactCardStyle = {
  display: "flex",
  flexDirection: "column",
  gap: "1.15rem",
  padding: "1.35rem",
  border: "1px solid color-mix(in srgb, var(--border) 90%, var(--green-accent))",
  borderRadius: "0.75rem",
  background: "color-mix(in srgb, var(--surface-background) 72%, var(--page-background))",
  boxShadow: "0 8px 20px color-mix(in srgb, var(--green-accent) 3%, transparent)"
} as const;

const tagListStyle = {
  display: "flex",
  flexWrap: "wrap",
  gap: "0.55rem",
  color: "var(--dark-ink)"
} as const;

const tagStyle = {
  padding: "0.42rem 0.72rem",
  border: "1px solid color-mix(in srgb, var(--green-accent) 22%, var(--border))",
  borderRadius: "999px",
  background: "color-mix(in srgb, var(--surface-background) 84%, var(--green-accent))",
  color: "var(--dark-ink)",
  fontSize: "0.88rem",
  lineHeight: 1.25
} as const;

export default function AboutPage() {
  const t = useTranslations("about");
  const skills = [
    t("skills1"),
    t("skills2"),
    t("skills3"),
    t("skills4"),
    t("skills5"),
    t("skills6")
  ];
  const tools = [
    t("tools1"),
    t("tools2"),
    t("tools3"),
    t("tools4"),
    t("tools5"),
    t("tools6"),
    t("tools7"),
    t("tools8"),
    t("tools9")
  ];

  return (
    <section className="projects-page stack">
      <header className="page-header">
        <h1>{t("title")}</h1>
        <p>{t("intro")}</p>
      </header>

      <section className="stack projects-section" aria-labelledby="about-background">
        <p className="eyebrow" id="about-background">
          {t("backgroundLabel")}
        </p>
        <div style={featuredCardStyle}>
          <div className="project-card-heading">
            <span className="project-status project-status-complete">
              {t("backgroundStatus")}
            </span>
            <h2>{t("backgroundTitle")}</h2>
          </div>
          <div className="stack" style={{gap: "1rem", color: "var(--muted)", lineHeight: 1.75}}>
            <p>{t("backgroundBody1")}</p>
            <p>{t("backgroundBody2")}</p>
          </div>
        </div>
      </section>

      <section className="grid two-col" style={{gap: "1rem"}}>
        <div style={compactCardStyle}>
          <div className="project-card-heading">
            <p className="eyebrow">{t("skillsLabel")}</p>
            <h2>{t("skillsTitle")}</h2>
          </div>
          <ul style={tagListStyle}>
            {skills.map((skill) => (
              <li key={skill} style={tagStyle}>
                {skill}
              </li>
            ))}
          </ul>
          <p className="project-note">{t("skillsNote")}</p>
        </div>

        <div style={compactCardStyle}>
          <div className="project-card-heading">
            <p className="eyebrow">{t("toolsLabel")}</p>
            <h2>{t("toolsTitle")}</h2>
          </div>
          <ul style={tagListStyle}>
            {tools.map((tool) => (
              <li key={tool} style={tagStyle}>
                {tool}
              </li>
            ))}
          </ul>
        </div>
      </section>
    </section>
  );
}
