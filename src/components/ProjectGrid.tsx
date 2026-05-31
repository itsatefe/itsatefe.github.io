import { projects } from "../data/profile";

export function ProjectGrid() {
  return (
    <div className="timeline">
      {projects.map((p) => (
        <article key={p.title} className="timeline__card">
          <div className="timeline__grid">
            <div>
              <div className="timeline__meta">
                <span className="pill">{p.year}</span>
                <p className="muted">{p.type}</p>
              </div>
              <h3>{p.title}</h3>
              <p className="timeline__brief">{p.detail}</p>
            </div>
            <div className="timeline__keywords">
              <div className="tags">
                {p.stack.map((s) => (
                  <span key={s} className="pill pill--soft">
                    {s}
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
