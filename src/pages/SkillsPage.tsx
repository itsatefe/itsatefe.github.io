import { SectionShell } from "../components/SectionShell";
import { SkillsCloud } from "../components/SkillsCloud";

export function SkillsPage() {
  return (
    <main className="layout">
      <div className="layout__main">
        <SectionShell headline="Skills" eyebrow="Core Strengths">
          <SkillsCloud />
        </SectionShell>
      </div>
    </main>
  );
}
