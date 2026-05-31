import { experiences } from "../data/profile";

export function ExperienceTimeline() {
  return (
    <div className="timeline">
      {experiences.map((exp) => (
        <article key={exp.role + exp.company} className="timeline__card">
          <div className="timeline__grid">
            <div>
              <div className="timeline__meta">
                <span className="pill">{exp.period}</span>
                <p className="muted">{exp.location}</p>
              </div>
              <h3>{exp.role}</h3>
              <p className="muted">{exp.company}</p>
              <p className="timeline__company-location">{exp.companyLocation}</p>
              {exp.website && (
                <a href={exp.website} target="_blank" rel="noreferrer" className="website-field">
                  <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
                  {new URL(exp.website).hostname.replace(/^www\./, "")}
                </a>
              )}
              <p className="timeline__brief">{exp.brief}</p>
              <ul className="timeline__bullets">
                {exp.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            </div>
            <div className="timeline__keywords">
              <div className="tags">
                {exp.keywords.map((keyword) => (
                  <span key={keyword} className="pill pill--soft">
                    {keyword}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}
