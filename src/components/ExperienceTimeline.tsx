import { useState } from "react";
import { experiences } from "../data/profile";

export function ExperienceTimeline() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const active = activeIndex !== null ? experiences[activeIndex] : null;

  return (
    <>
      <div className="timeline">
        {experiences.map((exp, index) => (
          <article
            key={exp.role + exp.company}
            className="timeline__card card--clickable"
            role="button"
            tabIndex={0}
            onClick={() => setActiveIndex(index)}
            onKeyDown={(event) => {
              if (event.key === "Enter" || event.key === " ") {
                event.preventDefault();
                setActiveIndex(index);
              }
            }}
          >
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
              </div>
              <div className="timeline__keywords">
                <p className="eyebrow">Tools</p>
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

      {active && (
        <div className="modal" role="dialog" aria-modal="true">
          <div className="modal__backdrop" onClick={() => setActiveIndex(null)} />
          <div className="modal__panel" role="document">
            <div className="modal__header">
              <div>
                <p className="eyebrow">{active.period}</p>
                <h3>{active.role}</h3>
                <p className="muted">{active.company}</p>
                <p className="timeline__company-location">{active.companyLocation}</p>
                {active.website && (
                  <a href={active.website} target="_blank" rel="noreferrer" className="website-field">
                    <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
                    {new URL(active.website).hostname.replace(/^www\./, "")}
                  </a>
                )}
              </div>
              <button
                type="button"
                className="modal__close"
                onClick={() => setActiveIndex(null)}
                aria-label="Close experience details"
              >
                x
              </button>
            </div>
            <ul>
              {active.bullets.map((bullet) => (
                <li key={bullet}>{bullet}</li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </>
  );
}
