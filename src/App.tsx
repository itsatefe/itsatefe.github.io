import { Hero } from "./components/Hero";
import { SectionShell } from "./components/SectionShell";
import { ExperienceTimeline } from "./components/ExperienceTimeline";
import { ProjectGrid } from "./components/ProjectGrid";
import { SkillsCloud } from "./components/SkillsCloud";
import { ContactBar } from "./components/ContactBar";
import { profile } from "./data/profile";
import { EducationList } from "./components/EducationList";
import "./index.css";

export default function App() {
  return (
    <div className="page">
      <nav className="nav">
        <a href="#top" className="nav__brand">
          {profile.name}
        </a>
        <div className="nav__links">
          <a href="#experience">Experience</a>
          <a href="#education">Education</a>
          <a href="#projects">Projects</a>
          <a href="#skills">Skills</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <Hero />

      <main className="layout">
        <div className="layout__main">
          <SectionShell id="experience" headline="Experience" eyebrow="Career">
            <ExperienceTimeline />
          </SectionShell>

          <SectionShell id="education" headline="Education" eyebrow="Academics">
            <EducationList />
          </SectionShell>

          <SectionShell id="projects" headline="Projects" eyebrow="Selected Work">
            <ProjectGrid />
          </SectionShell>
        </div>

        <aside className="layout__sidebar" id="skills">
          <SectionShell id="skills" headline="Skills" eyebrow="Core Strengths">
            <SkillsCloud />
          </SectionShell>
        </aside>
      </main>

      <ContactBar />

      <footer className="footer">
        <span>
          © {new Date().getFullYear()} {profile.name}
        </span>
        <a href="#top">Back to top ↑</a>
      </footer>
    </div>
  );
}
