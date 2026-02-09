export default function AboutPage() {
  return (
    <section className="stack">
      <header className="page-header">
        <h1>About</h1>
        <p>
          Former tax analyst turned UX designer. I bring regulatory context,
          research rigor, and empathy to financial services products.
        </p>
      </header>

      <div className="grid two-col">
        <div className="card">
          <h2>Background</h2>
          <p>
            I started my career in tax compliance, supporting individuals and
            small businesses through complex filing requirements. That experience
            shapes how I design onboarding flows, support content, and tools that
            help people feel confident about their finances.
          </p>
        </div>
        <div className="card">
          <h2>Skills</h2>
          <ul>
            <li>User research, journey mapping, and usability testing</li>
            <li>Service blueprints, content strategy, and compliance UX</li>
            <li>Design systems, prototyping, and cross-functional facilitation</li>
          </ul>
        </div>
      </div>

      <div className="card">
        <h2>Tools & Methods</h2>
        <p>
          Figma, FigJam, Maze, Dovetail, and rapid prototyping in low-code
          environments. Comfortable collaborating with engineers and tax experts
          to validate feasibility and regulatory needs.
        </p>
      </div>
    </section>
  );
}
