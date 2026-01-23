export default function HomePage() {
  return (
    <section className="stack">
      <div className="hero">
        <p className="eyebrow">UX Portfolio</p>
        <h1>Designing calm, compliant tax experiences for real people.</h1>
        <p className="lead">
          I translate complex tax requirements into intuitive digital products. My
          work spans onboarding, filing flows, and advisory tools for individuals
          and small businesses.
        </p>
        <div className="hero-actions">
          <a className="button" href="/projects">
            View case studies
          </a>
          <a className="button button-secondary" href="/about">
            About my approach
          </a>
        </div>
      </div>

      <div className="grid two-col">
        <div className="card">
          <h2>Positioning</h2>
          <p>
            UX designer with a tax background and a focus on clarity, compliance,
            and human-centered workflows.
          </p>
        </div>
        <div className="card">
          <h2>Focus areas</h2>
          <ul>
            <li>Tax filing and preparation journeys</li>
            <li>Client advisor dashboards and reporting</li>
            <li>Regulatory change management and UX systems</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
