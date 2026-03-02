import { SectionShell } from "../components/SectionShell";
import { profile } from "../data/profile";

export function ContactPage() {
  return (
    <main className="layout">
      <div className="layout__main">
        <SectionShell headline="Contact" id="contact">
          <div className="contact-page">
            <div className="contact-page__card card">
              <p className="eyebrow">Reach out</p>
              <h2 className="contact-page__title">Let's build something reliable.</h2>
              <p className="muted">
                Open to AI backend roles, ML pipelines, and platform work. I respond
                quickly to clear project scopes and collaboration requests.
              </p>
              <div className="contact-page__actions">
                <a className="btn primary" href={`mailto:${profile.email}`}>
                  Email me
                </a>
                <a
                  className="btn ghost"
                  href="https://calendly.com/atefe-rajabi-78/30min"
                  target="_blank"
                  rel="noreferrer"
                >
                  Book a call
                </a>
                <a className="btn ghost" href={profile.github} target="_blank" rel="noreferrer">
                  GitHub
                </a>
                <a className="btn ghost" href={profile.linkedin} target="_blank" rel="noreferrer">
                  LinkedIn
                </a>
              </div>
            </div>

            <div className="contact-page__grid">
              <div className="card">
                <p className="eyebrow">Details</p>
                <ul className="contact-page__list">
                  <li>
                    <strong>Email</strong>
                    <span>{profile.email}</span>
                  </li>
                  <li>
                    <strong>Location</strong>
                    <span>{profile.location}</span>
                  </li>
                  <li>
                    <strong>Focus</strong>
                    <span>AI backend, data pipelines, LLM integrations</span>
                  </li>
                </ul>
              </div>

              <div className="card">
                <p className="eyebrow">Availability</p>
                <ul className="contact-page__list">
                  <li>
                    <strong>Timezone</strong>
                    <span>GMT+3 (Istanbul)</span>
                  </li>
                  <li>
                    <strong>Response time</strong>
                    <span>Usually within 24 hours</span>
                  </li>
                  <li>
                    <strong>Collaboration</strong>
                    <span>Remote, contract, or full-time</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </SectionShell>
      </div>
    </main>
  );
}
