import { skills } from "../data/profile";

const CATEGORY_LABELS: Record<string, string> = {
  core: "Core",
  soft: "Soft Skills",
  data: "Data",
  cloud: "Cloud & DevOps",
  ai: "AI & ML",
  languages: "Languages",
};

export function SkillsCloud() {
  return (
    <div className="skills-grid">
      {Object.entries(skills).map(([category, items]) => (
        <div key={category} className="skill-card">
          <p className="eyebrow skill-card__title">
            {CATEGORY_LABELS[category] ?? category}
          </p>
          <div className="tags">
            {items.map((item) => (
              <span key={item} className="pill">
                {item}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
