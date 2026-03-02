import { SectionShell } from "../components/SectionShell";
import { ProjectGrid } from "../components/ProjectGrid";

export function ProjectsPage() {
  return (
    <main className="layout">
      <div className="layout__main">
        <SectionShell headline="Projects" eyebrow="Selected Work">
          <ProjectGrid />
        </SectionShell>
      </div>
    </main>
  );
}
