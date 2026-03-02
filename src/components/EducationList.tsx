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
          <div className="modal__backdrop" onClick={() => setActiveIndex(null)} />
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
                x
              </button>
            </div>
            <ul>
              {active.details.map((detail) => (
                <li key={detail}>{detail}</li>
              ))}
            </ul>

            {active.courses && active.courses.length > 0 && (
              <>
                <h4 className="modal__subhead">Courses</h4>
                <ul className="pill-list">
                  {active.courses.map((course) => (
                    <li key={course} className="pill">
                      {course}
                    </li>
                  ))}
                </ul>
              </>
            )}

            {active.awards && active.awards.length > 0 && (
              <>
                <h4 className="modal__subhead">Awards</h4>
                <ul>
                  {active.awards.map((award) => (
                    <li key={award}>{award}</li>
                  ))}
                </ul>
              </>
            )}

            {active.finalProject && (
              <>
                <h4 className="modal__subhead">{active.finalProject.title}</h4>
                <ul>
                  {active.finalProject.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
}
