import { useState } from "react";
import { projects } from "../data/profile";

export function ProjectGrid() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const active = activeIndex !== null ? projects[activeIndex] : null;

  return (
    <>
      <div className="grid">
        {projects.map((p, index) => (
          <article
            key={p.title}
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
            <h3>{p.title}</h3>
            <p className="muted">{p.detail}</p>
            <div className="tags">
              {p.stack.map((s) => (
                <span key={s} className="pill pill--soft">
                  {s}
                </span>
              ))}
            </div>
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
                <p className="eyebrow">Project</p>
                <h3>{active.title}</h3>
              </div>
              <button
                type="button"
                className="modal__close"
                onClick={() => setActiveIndex(null)}
                aria-label="Close project details"
              >
                ×
              </button>
            </div>
            <p className="muted">{active.detail}</p>
            <div className="tags">
              {active.stack.map((s) => (
                <span key={s} className="pill pill--soft">
                  {s}
                </span>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
