import { useState } from "react";
import { education } from "../data/profile";

export function EducationList() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const active = activeIndex !== null ? education[activeIndex] : null;

  return (
    <>
      <div className="education">
        {education.map((item, index) => (
          <article
            key={item.degree}
            className="card card--clickable"
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
            <p className="eyebrow">{item.period}</p>
            <h3>{item.degree}</h3>
            <p className="muted">{item.school}</p>
          </article>
        ))}
      </div>

      {active && (
        <div className="modal" role="dialog" aria-modal="true">
          <div
            className="modal__backdrop"
            onClick={() => setActiveIndex(null)}
          />
          <div className="modal__panel" role="document">
            <div className="modal__header">
              <div>
                <p className="eyebrow">{active.period}</p>
                <h3>{active.degree}</h3>
                <p className="muted">{active.school}</p>
              </div>
              <button
                type="button"
                className="modal__close"
                onClick={() => setActiveIndex(null)}
                aria-label="Close education details"
              >
                ×
              </button>
            </div>
            <ul>
              {active.details.map((detail) => (
                <li key={detail}>{detail}</li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </>
  );
}
