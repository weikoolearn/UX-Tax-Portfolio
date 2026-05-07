import {Link} from "@/i18n/navigation";

const featuredProject = {
  title: "Reframing Identity Entry in Consumer Tax Systems",
  description:
    "Redesigning identity classification and routing for globally mobile tax filers.",
  tags: ["Tax Systems", "UX", "Decision Architecture"],
  status: "Completed",
  href: "/projects/tax-identity-entry"
} as const;

const inProgressProjects = [
  {
    title: "Behavioral Decision Platform — PredX",
    description:
      "Designing decision systems under uncertainty in financial environments.",
    tags: ["Financial Workflow", "Decision Systems", "Web3"],
    status: "In Progress",
    note: "Expected: UX flows, decision modeling, interface system"
  },
  {
    title: "Marketplace Conversion Architecture — Sayhomee",
    description:
      "Structuring contractor-client matching and conversion workflows.",
    tags: ["Marketplace", "Service Workflow", "Conversion Logic"],
    status: "In Progress",
    note: "Expected: system mapping, onboarding, conversion logic"
  },
  {
    title: "Service Acquisition Funnel — Grace",
    description:
      "Optimizing trust-building and conversion in high-cost residential service journeys.",
    tags: ["Service Design", "Conversion", "Trust Building"],
    status: "In Progress",
    note: "Expected: funnel redesign, lead qualification, UX structure"
  }
] as const;

export default function ProjectsPage() {
  return (
    <section className="projects-page stack">
      <header className="page-header">
        <h1>Projects</h1>
        <p>
          Selected work in tax, financial workflows, and complex service
          systems.
        </p>
      </header>

      <section className="stack projects-section" aria-labelledby="featured-project">
        <p className="eyebrow" id="featured-project">
          Featured Project
        </p>
        <Link className="project-featured-card" href={featuredProject.href}>
          <div className="project-card-main">
            <div className="project-card-heading">
              <span className="project-status project-status-complete">
                {featuredProject.status}
              </span>
              <h2>{featuredProject.title}</h2>
            </div>
            <p>{featuredProject.description}</p>
            <ul className="tags">
              {featuredProject.tags.map((tag) => (
                <li key={tag}>{tag}</li>
              ))}
            </ul>
          </div>
          <span className="button">Explore Case Study</span>
        </Link>
      </section>

      <section className="stack projects-section" aria-labelledby="more-work">
        <div className="project-section-heading">
          <p className="eyebrow" id="more-work">
            More Work In Progress
          </p>
        </div>

        <div className="projects-grid">
          {inProgressProjects.map((project) => (
            <article className="project-secondary-card" key={project.title}>
              <div className="project-card-heading">
                <span className="project-status">{project.status}</span>
                <h2>{project.title}</h2>
              </div>
              <p>{project.description}</p>
              <ul className="tags">
                {project.tags.map((tag) => (
                  <li key={tag}>{tag}</li>
                ))}
              </ul>
              <p className="project-note">{project.note}</p>
            </article>
          ))}
        </div>
      </section>
    </section>
  );
}
