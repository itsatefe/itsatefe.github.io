import { useState } from "react";
import { skills } from "../data/profile";

const CATEGORY_ORDER = Object.keys(skills);

export function SkillsCloud() {
  const [openCategories, setOpenCategories] = useState<Record<string, boolean>>(
    () =>
      CATEGORY_ORDER.reduce((acc, key) => {
        acc[key] = key === "core";
        return acc;
      }, {} as Record<string, boolean>)
  );

  const toggleCategory = (category: string) => {
    setOpenCategories((prev) => ({ ...prev, [category]: !prev[category] }));
  };

  return (
    <div className="skills-sidebar">
      {Object.entries(skills).map(([category, items]) => (
        <div key={category} className="skill-panel">
          <div className="skill-panel__header">
            <p className="eyebrow">{category}</p>
            <button
              type="button"
              className="skill-panel__toggle"
              onClick={() => toggleCategory(category)}
              aria-expanded={openCategories[category]}
              aria-label={openCategories[category] ? "Collapse skills section" : "Expand skills section"}
            >
              {openCategories[category] ? "-" : "+"}
            </button>
          </div>
          {openCategories[category] && (
            <div className="tags">
              {items.map((item) => (
                <span key={item} className="pill">
                  {item}
                </span>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
