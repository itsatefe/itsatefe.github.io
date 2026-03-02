import { SectionShell } from "../components/SectionShell";
import { EducationList } from "../components/EducationList";

export function EducationPage() {
  return (
    <main className="layout">
      <div className="layout__main">
        <SectionShell headline="Education" eyebrow="Academics">
          <EducationList />
        </SectionShell>
      </div>
    </main>
  );
}
