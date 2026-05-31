import { education } from "../data/profile";

export function EducationList() {
  return (
    <div className="education">
      {education.map((item) => (
        <article key={item.degree} className="card">
          <p className="eyebrow">{item.period}</p>
          <h3>{item.degree}</h3>
          <p className="muted">{item.school}</p>

          {item.details.length > 0 && (
            <ul className="education__details">
              {item.details.map((detail) => (
                <li key={detail}>{detail}</li>
              ))}
            </ul>
          )}

          {item.courses && item.courses.length > 0 && (
            <div className="education__section">
              <h4 className="education__subhead">Courses</h4>
              <ul className="pill-list">
                {item.courses.map((course) => (
                  <li key={course} className="pill">
                    {course}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {item.awards && item.awards.length > 0 && (
            <div className="education__section">
              <h4 className="education__subhead">Awards</h4>
              <ul>
                {item.awards.map((award) => (
                  <li key={award}>{award}</li>
                ))}
              </ul>
            </div>
          )}

          {item.finalProject && (
            <div className="education__section">
              <h4 className="education__subhead">{item.finalProject.title}</h4>
              <ul>
                {item.finalProject.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            </div>
          )}
        </article>
      ))}
    </div>
  );
}
