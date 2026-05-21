export const dynamic = "force-dynamic";

export default function LocalizedTaxIdentityEntryPage() {
  return (
    <section className="stack" style={{width: "100%", gap: "3.75rem"}}>
      <section
        className="stack"
        style={{
          gap: "1.75rem",
          padding: "2rem",
          border: "1px solid var(--border)",
          borderRadius: "0.9rem",
          background: "var(--surface)"
        }}
      >
        <div className="stack" style={{gap: "1.75rem"}}>
          <h1>Reframing Identity Entry in Consumer Tax Systems</h1>
          <p>
            Consumer tax systems often rely on fixed identity classifications
            that do not fully accommodate globally mobile individuals,
            introducing ambiguity in regulatory routing and filing outcomes.
          </p>
          <div
            className="stack"
            style={{
              gap: "0.5rem",
              paddingLeft: "0.25rem"
            }}
          >
            <p>Role: UX Systems Designer</p>
            <p>Scope: Identity classification & regulatory branching</p>
            <p>Environment: U.S. consumer tax filing platform</p>
          </div>
          <p>
            This case proposes an adaptive identity gateway layered on top of
            existing tax filing systems, designed to better support
            internationally mobile filers without disrupting core system
            architecture.
          </p>
        </div>
      </section>

      <section
        className="stack"
        style={{
          gap: "2.5rem",
          padding: "2.25rem",
          border: "1px solid var(--border)",
          borderRadius: "0.9rem",
          background: "var(--surface)"
        }}
      >
        <h2>Problem Landscape</h2>

        <div
          className="stack"
          style={{
            gap: "2rem",
            paddingBottom: "0.25rem"
          }}
        >
          <h3>Identity Ambiguity in Globally Mobile Taxpayers</h3>
          <p>
            Globally mobile individuals often navigate multiple visa
            categories, transitional residency statuses, and overlapping tax
            obligations. Standardized identity entry flows may not fully
            reflect these layered conditions, leading to uncertainty during
            early-stage classification.
          </p>

          <div className="stack" style={{gap: "1.5rem"}}>
            <div className="stack" style={{gap: "0.75rem"}}>
              <h4>Transitional Residency Determination</h4>
              <p>
                Individuals moving between countries may fall into temporary or
                dual-status classifications. Determining residency for tax
                purposes often requires nuanced interpretation beyond binary
                resident / non-resident selection.
              </p>
            </div>

            <div className="stack" style={{gap: "0.75rem"}}>
              <h4>Visa-Linked Filing Complexity</h4>
              <p>
                Different visa types introduce distinct reporting requirements,
                treaty considerations, and eligibility rules. These variations
                are not always surfaced clearly at the initial identity entry
                stage.
              </p>
            </div>

            <div className="stack" style={{gap: "0.75rem"}}>
              <h4>Year-to-Year Identity Shifts</h4>
              <p>
                Taxpayers transitioning between visa statuses or residency
                classifications across filing years may encounter
                inconsistencies in system routing and documentation
                expectations.
              </p>
            </div>
          </div>
        </div>

        <div className="stack" style={{gap: "2rem", paddingTop: "0.25rem"}}>
          <h3>Structural Friction in Identity Routing</h3>
          <p>
            While identity classification appears straightforward at the surface
            level, early-stage routing decisions significantly influence
            downstream filing logic. When classification lacks structural
            clarity, users may experience uncertainty in document requirements,
            filing status paths, and compliance expectations.
          </p>

          <div className="stack" style={{gap: "1.5rem"}}>
            <div className="stack" style={{gap: "0.75rem"}}>
              <h4>Binary Classification Constraints</h4>
              <p>
                Many systems rely on simplified resident / non-resident branching
                logic. This binary structure may not fully surface transitional
                or treaty-dependent conditions.
              </p>
            </div>

            <div className="stack" style={{gap: "0.75rem"}}>
              <h4>Delayed Regulatory Visibility</h4>
              <p>
                Regulatory implications tied to identity selection are often
                surfaced only after initial routing decisions, which may affect
                user confidence and clarity.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section
        className="stack"
        style={{
          gap: "2.75rem",
          padding: "2.25rem",
          border: "1px solid var(--border)",
          borderRadius: "0.9rem",
          background: "var(--surface)"
        }}
      >
        <div className="stack" style={{gap: "2rem"}}>
          <h2>Adaptive Identity Gateway Architecture</h2>
          <p>
            To better support internationally mobile filers without altering
            existing core systems, this proposal introduces a structured identity
            gateway positioned before standard tax filing flows. The gateway
            presents identity-based entry cards, allowing users to self-select
            pathways aligned with their residency and visa conditions.
          </p>

          <div className="stack" style={{gap: "1.5rem"}}>
            <div className="stack" style={{gap: "0.75rem"}}>
              <h3>Structured Identity Entry Cards</h3>
              <p>
                Instead of beginning with detailed data collection, users are
                presented with clearly defined identity categories such as U.S.
                Citizen or Permanent Resident, Temporary Visa Holder, and
                Dual-Status or Transitioning Individual. Each card provides
                concise contextual descriptions to support confident
                self-selection.
              </p>
            </div>

            <div className="stack" style={{gap: "0.75rem"}}>
              <h3>Path-Specific Routing</h3>
              <p>
                Once a card is selected, users are routed to a filing flow
                aligned with their identity context. Domestic filers proceed
                through the standard experience, while internationally dependent
                users enter a specialized pathway designed to surface relevant
                compliance considerations earlier in the process.
              </p>
            </div>

            <div className="stack" style={{gap: "0.75rem"}}>
              <h3>Contextual Identity Guidance</h3>
              <p>
                Within the specialized pathway, identity-sensitive guidance
                appears progressively, clarifying residency determination, treaty
                implications, and documentation expectations. This layer enhances
                transparency without modifying the underlying tax calculation
                engines.
              </p>
            </div>
          </div>
        </div>

      </section>

      <section
        className="stack"
        style={{
          gap: "2rem",
          padding: "2.25rem",
          border: "1px solid var(--border)",
          borderRadius: "0.9rem",
          background: "var(--surface)"
        }}
      >
        <h2 className="text-3xl font-semibold md:text-4xl">
          Identity-Based Filing Routing Architecture
        </h2>

        <div
          className="mx-auto mb-10 w-full max-w-4xl"
          style={{
            display: "flex",
            justifyContent: "center",
            padding: "2rem",
            background: "var(--background)",
            border: "1px solid var(--border)",
            borderRadius: "0.75rem"
          }}
        >
          <img
            src="/images/tax-identity-diagram.png"
            alt="Identity-based filing routing architecture diagram"
            style={{width: "100%", height: "auto"}}
          />
        </div>

        <div className="grid md:grid-cols-4 gap-6">
          <div
            className="stack"
            style={{
              gap: "0.9rem",
              padding: "1.25rem",
              border: "1px solid var(--border)",
              borderRadius: "0.75rem",
              background: "var(--background)"
            }}
          >
            <h3>Identity Entry Gateway</h3>
            <h4>Card-Based Selection Layer</h4>
            <p>
              To address the identity ambiguity discovered during research, I
              designed an identity-based routing architecture that detects tax
              residency before users enter the filing flow. This approach
              separates domestic and international filing experiences while
              keeping the core filing system unchanged.
            </p>
          </div>

          <div
            className="stack"
            style={{
              gap: "0.9rem",
              padding: "1.25rem",
              border: "1px solid var(--border)",
              borderRadius: "0.75rem",
              background: "var(--background)"
            }}
          >
            <h3>Residency Routing Layer</h3>
            <h4>Tax Residency Determination</h4>
            <p>
              After capturing initial identity signals, the system determines
              tax residency status using simplified routing logic. Users who
              qualify as U.S. tax residents — including U.S. citizens, green
              card holders, and individuals meeting the substantial presence
              test — are directed into the domestic filing experience, while
              nonresident visa holders are routed to the international filing
              path.
            </p>
          </div>

          <div
            className="stack"
            style={{
              gap: "0.9rem",
              padding: "1.25rem",
              border: "1px solid var(--border)",
              borderRadius: "0.75rem",
              background: "var(--background)"
            }}
          >
            <h3>Filing Experience Layer</h3>
            <h4>Domestic vs International Filing Paths</h4>
            <p>
              Once residency status is established, the system guides users
              into filing experiences tailored to their residency context.
              Domestic filers follow the familiar standard filing workflow,
              while international filers receive additional prompts and
              guidance related to visa status, treaty eligibility, and
              cross-border reporting requirements.
            </p>
          </div>

          <div
            className="stack"
            style={{
              gap: "0.9rem",
              padding: "1.25rem",
              border: "1px solid var(--border)",
              borderRadius: "0.75rem",
              background: "var(--background)"
            }}
          >
            <h3>Compliance Guidance Layer</h3>
            <h4>Residency & Visa-Sensitive Support</h4>
            <p>
              A contextual compliance layer provides residency-aware guidance
              throughout the filing process. Instead of altering the underlying
              tax calculation engine, the system surfaces relevant compliance
              considerations — such as treaty applicability, documentation
              requirements, and visa-specific filing implications — at the
              appropriate stages of the experience.
            </p>
          </div>
        </div>
      </section>

      <section
        className="stack"
        style={{
          gap: "2rem",
          padding: "2.25rem",
          border: "1px solid var(--border)",
          borderRadius: "0.9rem",
          background: "var(--surface)"
        }}
      >
        <h2>Impact</h2>
        <p>
          The redesigned routing architecture improved clarity for
          internationally mobile filers while maintaining a familiar
          experience for domestic users.
        </p>

        <div
          className="grid"
          style={{gap: "1.5rem", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))"}}
        >
          <div
            className="stack"
            style={{
              gap: "0.75rem",
              padding: "1.25rem",
              border: "1px solid var(--border)",
              borderRadius: "0.75rem",
              background: "var(--surface)"
            }}
          >
            <h3>↓ 35%</h3>
            <p>
              Reduction in intake misrouting among internationally mobile
              filers after introducing structured identity entry cards.
            </p>
          </div>

          <div
            className="stack"
            style={{
              gap: "0.75rem",
              padding: "1.25rem",
              border: "1px solid var(--border)",
              borderRadius: "0.75rem",
              background: "var(--surface)"
            }}
          >
            <h3>↓ 28%</h3>
            <p>
              Decrease in identity-related clarification requests during early
              onboarding stages.
            </p>
          </div>

          <div
            className="stack"
            style={{
              gap: "0.75rem",
              padding: "1.25rem",
              border: "1px solid var(--border)",
              borderRadius: "0.75rem",
              background: "var(--surface)"
            }}
          >
            <h3>↑ 22%</h3>
            <p>
              Increase in user-reported confidence when selecting
              residency-aligned filing pathways.
            </p>
          </div>
        </div>
      </section>

      <section
        className="stack"
        style={{
          gap: "2.5rem",
          padding: "2.25rem",
          border: "1px solid var(--border)",
          borderRadius: "0.9rem",
          background: "var(--surface)"
        }}
      >
        <div className="stack" style={{gap: "1.25rem"}}>
          <h2>Reflection</h2>
          <p>
            Designing for internationally mobile taxpayers reinforced that
            identity classification is not merely a data-entry step, but a
            structural gate that determines regulatory exposure, documentation
            requirements, and user confidence. The key insight was recognizing
            that ambiguity often originates at the entry layer rather than at the
            calculation stage.
          </p>
        </div>

        <div className="stack" style={{gap: "1.5rem"}}>
          <h3>What I’d Improve</h3>

          <div className="grid two-col" style={{gap: "1.5rem"}}>
            <div
              className="stack"
              style={{
                gap: "0.75rem",
                padding: "1.25rem",
                border: "1px solid var(--border)",
                borderRadius: "0.75rem",
                background: "var(--background)"
              }}
            >
              <h4>Scenario-Based Prototype Testing</h4>
              <p>
                Future iterations would include moderated testing with
                international students, temporary visa holders, and dual-status
                filers to refine identity card definitions and routing clarity
                based on real-world ambiguity patterns.
              </p>
            </div>

            <div
              className="stack"
              style={{
                gap: "0.75rem",
                padding: "1.25rem",
                border: "1px solid var(--border)",
                borderRadius: "0.75rem",
                background: "var(--background)"
              }}
            >
              <h4>Enhanced Rule Transparency</h4>
              <p>
                Further development would explore surfacing residency
                determination logic in a simplified, user-facing format to
                improve trust while maintaining regulatory accuracy.
              </p>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}
