import { useState } from "react";
import { Link, NavLink, Route, Routes } from "react-router-dom";
import { profile } from "./data/profile";
import { HomePage } from "./pages/HomePage";
import { ExperiencePage } from "./pages/ExperiencePage";
import { EducationPage } from "./pages/EducationPage";
import { ProjectsPage } from "./pages/ProjectsPage";
import { ContactPage } from "./pages/ContactPage";
import { SkillsPage } from "./pages/SkillsPage";
import "./index.css";

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="page">
      <nav className="nav">
        <Link to="/" className="nav__brand" onClick={() => setMenuOpen(false)}>
          {profile.name}
        </Link>
        <button
          type="button"
          className="nav__toggle"
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span />
          <span />
          <span />
        </button>
        <div className={`nav__links ${menuOpen ? "nav__links--open" : ""}`}>
          <NavLink to="/" end onClick={() => setMenuOpen(false)}>
            Home
          </NavLink>
          <NavLink to="/experience" onClick={() => setMenuOpen(false)}>
            Experience
          </NavLink>
          <NavLink to="/education" onClick={() => setMenuOpen(false)}>
            Education
          </NavLink>
          <NavLink to="/projects" onClick={() => setMenuOpen(false)}>
            Projects
          </NavLink>
          <NavLink to="/skills" onClick={() => setMenuOpen(false)}>
            Skills
          </NavLink>
          <NavLink to="/contact" onClick={() => setMenuOpen(false)}>
            Contact
          </NavLink>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/experience" element={<ExperiencePage />} />
        <Route path="/education" element={<EducationPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/skills" element={<SkillsPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="*" element={<HomePage />} />
      </Routes>

      <footer className="footer">
        <span>
          (c) {new Date().getFullYear()} {profile.name}
        </span>
      </footer>
    </div>
  );
}
