export default function AboutPage() {
  return (
    <section className="stack">
      <header className="page-header">
        <h1>About</h1>
        <p>
          I design systems for complex, policy-driven environments where
          decisions carry real financial and regulatory consequences. My work
          focuses on making ambiguity visible, structuring decision flows, and
          supporting confident actions in high-stakes contexts.
        </p>
      </header>

      <div className="grid two-col">
        <div className="card">
          <h2>Background</h2>
          <p>
            I come from a dual background in tax operations and UX design,
            working directly within real-world filing environments while
            studying interaction and product systems. At H&amp;R Block, I worked
            across client-facing tax preparation, where I observed how
            classification, routing, and regulatory logic impact both the user
            experience and operational efficiency. This experience shaped how I
            approach design today - not as isolated screens, but as
            interconnected systems involving people, rules, and decisions.
          </p>
        </div>
        <div className="card">
          <h2>Skills</h2>
          <ul>
            <li>System Thinking</li>
            <li>Decision Architecture</li>
            <li>Workflow Design</li>
            <li>Information Structuring</li>
            <li>UX in Regulated Environments</li>
            <li>Cross-role Experience (Associate to Specialist)</li>
          </ul>
        </div>
      </div>

      <div className="card">
        <h2>Tools & Methods</h2>
        <p>
          Figma (System Design, UI, Prototyping), Workflow Mapping &amp; Service
          Blueprinting, User Observation in Live Environments, Constraint-driven
          Design (Regulatory / Operational), and Iterative Framing through Real
          Case Scenarios.
        </p>
      </div>
    </section>
  );
}
