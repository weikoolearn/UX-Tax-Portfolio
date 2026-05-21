import {useTranslations} from "next-intl";

import {Link} from "@/i18n/navigation";

export const dynamic = "force-dynamic";

const moduleStyle = {
  border: "1px solid var(--border)",
  borderRadius: "0.75rem",
  padding: "1.9rem",
  background: "var(--surface-background)"
} as const;

const surfaceModuleStyle = {
  ...moduleStyle,
  background: "var(--elevated-surface)"
} as const;

const heroModuleStyle = {
  ...moduleStyle,
  padding: "2.35rem",
  background: "linear-gradient(180deg, color-mix(in srgb, var(--elevated-surface) 88%, var(--green-accent) 12%) 0%, var(--surface-background) 100%)",
  borderTop: "4px solid var(--green-accent)",
  boxShadow: "0 18px 42px color-mix(in srgb, var(--green-accent) 9%, transparent)"
} as const;

const quietModuleStyle = {
  ...moduleStyle,
  background: "color-mix(in srgb, var(--surface-background) 72%, var(--page-background))"
} as const;

const featuredModuleStyle = {
  ...moduleStyle,
  padding: "2.1rem",
  background: "var(--surface-background)",
  borderColor: "color-mix(in srgb, var(--green-accent) 34%, var(--border))",
  boxShadow: "0 14px 34px color-mix(in srgb, var(--green-accent) 8%, transparent)"
} as const;

const compactStackStyle = {
  gap: "0.8rem"
} as const;

const listStyle = {
  listStyleType: "disc",
  paddingLeft: "1.25rem",
  display: "grid",
  gap: "0.5rem",
  color: "var(--muted)"
} as const;

const cardStyle = {
  ...surfaceModuleStyle,
  ...compactStackStyle,
  borderColor: "color-mix(in srgb, var(--border) 86%, var(--green-accent))",
  padding: "1.4rem"
} as const;

export default function HomePage() {
  const t = useTranslations("home");

  return (
    <section className="stack home-page" style={{width: "100%", gap: "1.85rem"}}>
      <section className="stack hero" style={{...heroModuleStyle, maxWidth: "none", width: "100%", gap: "1.45rem"}}>
        <div className="hero-layout">
          <div className="stack hero-copy">
            <p className="eyebrow">{t("eyebrow")}</p>
            <div className="stack" style={{gap: "1rem", maxWidth: "920px"}}>
              <h1 style={{maxWidth: "none"}}>{t("title")}</h1>
              <p className="lead" style={{maxWidth: "760px"}}>{t("lead")}</p>
            </div>
            <div className="hero-actions" style={{maxWidth: "none", width: "100%", paddingTop: "0.25rem"}}>
              <Link className="button" href="/projects/tax-identity-entry">
                {t("ctaPrimary")}
              </Link>
              <Link className="button button-secondary" href="#design-principles">
                {t("ctaSecondary")}
              </Link>
            </div>
          </div>

          <div className="hero-workflow" aria-hidden="true">
            <div className="workflow-card workflow-card-intake">
              <span className="workflow-dot" />
              Client Intake
            </div>
            <div className="workflow-node workflow-node-primary">Classify Case</div>
            <div className="workflow-card workflow-card-simple">Simple Return</div>
            <div className="workflow-card workflow-card-complex">Complex Return</div>
            <div className="workflow-card workflow-card-final">
              <span className="workflow-dot" />
              Assign Tax Pro
            </div>

            <span className="workflow-connector workflow-connector-intake" />
            <span className="workflow-connector workflow-connector-simple" />
            <span className="workflow-connector workflow-connector-complex" />
            <span className="workflow-connector workflow-connector-final" />
          </div>
        </div>
      </section>

      <section className="stack" style={{...quietModuleStyle, gap: "1.35rem"}}>
        <div className="stack" style={{gap: "0.65rem", maxWidth: "760px"}}>
          <h2>{t("systemsTitle")}</h2>
          <p style={{color: "var(--muted)"}}>{t("systemsIntro")}</p>
        </div>

        <div
          className="grid"
          style={{gap: "1rem", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))"}}
        >
          <div className="stack" style={{...cardStyle, padding: "1.5rem"}}>
            <h3>{t("systems1Title")}</h3>
            <p>{t("systems1Body")}</p>
            <ul style={listStyle}>
              <li>{t("systems1Bullet1")}</li>
              <li>{t("systems1Bullet2")}</li>
              <li>{t("systems1Bullet3")}</li>
            </ul>
          </div>

          <div className="stack" style={{...cardStyle, padding: "1.5rem"}}>
            <h3>{t("systems2Title")}</h3>
            <p>{t("systems2Body")}</p>
            <ul style={listStyle}>
              <li>{t("systems2Bullet1")}</li>
              <li>{t("systems2Bullet2")}</li>
              <li>{t("systems2Bullet3")}</li>
            </ul>
          </div>

          <div className="stack" style={{...cardStyle, padding: "1.5rem"}}>
            <h3>{t("systems3Title")}</h3>
            <p>{t("systems3Body")}</p>
            <ul style={listStyle}>
              <li>{t("systems3Bullet1")}</li>
              <li>{t("systems3Bullet2")}</li>
              <li>{t("systems3Bullet3")}</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="stack" id="design-principles" style={{...moduleStyle, gap: "1.35rem", scrollMarginTop: "calc(var(--header-height) + 1rem)"}}>
        <div className="stack" style={{gap: "0.65rem", maxWidth: "760px"}}>
          <h2>{t("principlesTitle")}</h2>
          <p style={{color: "var(--muted)"}}>{t("principlesIntro")}</p>
        </div>

        <div
          className="grid"
          style={{
            gap: "1rem",
            gridTemplateColumns: "repeat(2, minmax(0, 1fr))"
          }}
        >
          <div className="stack" style={cardStyle}>
            <h3>{t("principles1Title")}</h3>
            <p>{t("principles1Body")}</p>
            <ul style={listStyle}>
              <li>{t("principles1Bullet1")}</li>
              <li>{t("principles1Bullet2")}</li>
              <li>{t("principles1Bullet3")}</li>
            </ul>
          </div>

          <div className="stack" style={cardStyle}>
            <h3>{t("principles2Title")}</h3>
            <p>{t("principles2Body")}</p>
            <ul style={listStyle}>
              <li>{t("principles2Bullet1")}</li>
              <li>{t("principles2Bullet2")}</li>
              <li>{t("principles2Bullet3")}</li>
            </ul>
          </div>

          <div className="stack" style={cardStyle}>
            <h3>{t("principles3Title")}</h3>
            <p>{t("principles3Body")}</p>
            <ul style={listStyle}>
              <li>{t("principles3Bullet1")}</li>
              <li>{t("principles3Bullet2")}</li>
              <li>{t("principles3Bullet3")}</li>
            </ul>
          </div>

          <div className="stack" style={cardStyle}>
            <h3>{t("principles4Title")}</h3>
            <p>{t("principles4Body")}</p>
            <ul style={listStyle}>
              <li>{t("principles4Bullet1")}</li>
              <li>{t("principles4Bullet2")}</li>
              <li>{t("principles4Bullet3")}</li>
            </ul>
          </div>
        </div>
      </section>

      <section
        className="stack"
        style={{
          ...featuredModuleStyle,
          gap: "1.35rem",
          borderLeft: "4px solid var(--green-accent)"
        }}
      >
        <div className="stack" style={{gap: "0.65rem", maxWidth: "760px"}}>
          <h2>{t("featuredTitle")}</h2>
        </div>

        <div
          className="grid"
          style={{
            gap: "1.5rem",
            gridTemplateColumns: "minmax(0, 1.4fr) minmax(240px, 0.8fr)",
            alignItems: "end"
          }}
        >
          <div className="stack" style={{gap: "1rem"}}>
            <h3>{t("featuredCaseTitle")}</h3>
            <p style={{maxWidth: "60ch"}}>{t("featuredCaseBody")}</p>
          </div>

          <div className="stack" style={{gap: "1rem", alignItems: "flex-start"}}>
            <Link className="button" href="/projects/tax-identity-entry">
              {t("featuredCaseCta")}
            </Link>
          </div>
        </div>
      </section>

      <section className="stack" style={{...quietModuleStyle, gap: "1.25rem"}}>
        <div className="stack" style={{gap: "0.65rem"}}>
          <h2>{t("otherProjectsTitle")}</h2>
        </div>

        <div
          className="grid"
          style={{gap: "1rem", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))"}}
        >
          <div className="stack" style={{...cardStyle, boxShadow: "none"}}>
            <h3>{t("project1Title")}</h3>
            <p>{t("project1Body")}</p>
          </div>

          <div className="stack" style={{...cardStyle, boxShadow: "none"}}>
            <h3>{t("project2Title")}</h3>
            <p>{t("project2Body")}</p>
          </div>

          <div className="stack" style={{...cardStyle, boxShadow: "none"}}>
            <h3>{t("project3Title")}</h3>
            <p>{t("project3Body")}</p>
          </div>
        </div>
      </section>

      <section className="stack" style={{...moduleStyle, gap: "1.35rem"}}>
        <div className="stack" style={{gap: "0.65rem", maxWidth: "760px"}}>
          <h2>{t("approachHeading")}</h2>
          <p style={{color: "var(--muted)"}}>{t("approachTitle")}</p>
        </div>

        <div
          className="grid approach-grid"
          style={{
            gap: "1rem",
            gridTemplateColumns: "repeat(2, minmax(0, 1fr))"
          }}
        >
          <div className="stack" style={cardStyle}>
            <h3>{t("approach1Title")}</h3>
            <p>{t("approach1Body")}</p>
          </div>

          <div className="stack" style={cardStyle}>
            <h3>{t("approach2Title")}</h3>
            <p>{t("approach2Body")}</p>
          </div>

          <div className="stack" style={cardStyle}>
            <h3>{t("approach3Title")}</h3>
            <p>{t("approach3Body")}</p>
          </div>

          <div className="stack" style={cardStyle}>
            <h3>{t("approach4Title")}</h3>
            <p>{t("approach4Body")}</p>
          </div>
        </div>
      </section>

      <section className="stack" style={{...quietModuleStyle, gap: "0.85rem"}}>
        <h2>{t("aboutTitle")}</h2>
        <p style={{maxWidth: "70ch"}}>{t("aboutBody")}</p>
      </section>
    </section>
  );
}
