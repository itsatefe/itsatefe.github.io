import { SectionShell } from "../components/SectionShell";
import { ExperienceTimeline } from "../components/ExperienceTimeline";

export function ExperiencePage() {
  return (
    <main className="layout">
      <div className="layout__main">
        <SectionShell headline="Experience" eyebrow="Career">
          <ExperienceTimeline />
        </SectionShell>
      </div>
    </main>
  );
}
