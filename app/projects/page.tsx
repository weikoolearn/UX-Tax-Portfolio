const projects = [
  {
    title: "Guided Tax Filing",
    summary:
      "Simplified the federal filing flow with plain-language guidance and confidence checks.",
    tags: ["Case study", "Filing flow", "Service design"]
  },
  {
    title: "Small Business Quarterly Planner",
    summary:
      "Designed an experience that helps entrepreneurs estimate and schedule quarterly payments.",
    tags: ["Product strategy", "Financial planning"]
  },
  {
    title: "Advisor Collaboration Hub",
    summary:
      "Streamlined document collection and review between tax advisors and clients.",
    tags: ["B2B", "Workflow", "Communication"]
  }
];

export default function ProjectsPage() {
  return (
    <section className="stack">
      <header className="page-header">
        <h1>Projects</h1>
        <p>
          A selection of tax-focused UX projects. Each case study is structured
          to highlight the problem, approach, outcomes, and measurable impact.
        </p>
      </header>

      <div className="stack">
        {projects.map((project) => (
          <article key={project.title} className="card card-row">
            <div>
              <h2>{project.title}</h2>
              <p>{project.summary}</p>
            </div>
            <ul className="tags">
              {project.tags.map((tag) => (
                <li key={tag}>{tag}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
