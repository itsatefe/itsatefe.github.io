import { createFileRoute } from "@tanstack/react-router";
import { PageShell, SectionEyebrow } from "@/components/PageShell";
import { skills } from "@/data/resume";

export const Route = createFileRoute("/skills")({
  head: () => ({
    meta: [
      { title: "Skills — Atefe Rajabi" },
      {
        name: "description",
        content:
          "Skills across LLMs, applied ML, cloud, data, and APIs — plus languages and soft skills.",
      },
      { property: "og:title", content: "Skills — Atefe Rajabi" },
      {
        property: "og:description",
        content:
          "Core engineering, AI/ML, cloud & DevOps, data systems, and languages.",
      },
    ],
  }),
  component: SkillsPage,
});

function SkillsPage() {
  return (
    <PageShell>
      <header className="mb-16 grid grid-cols-1 gap-8 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <SectionEyebrow>Skills</SectionEyebrow>
        </div>
        <div className="lg:col-span-8">
          <h1 className="font-display text-5xl font-extrabold tracking-tighter text-ink md:text-6xl">
            The toolkit
            <br />
            <span className="text-primary/90">behind the work.</span>
          </h1>
        </div>
      </header>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {skills.map((g) => (
          <section
            key={g.label}
            className="rounded-3xl border border-line/70 bg-white/70 p-7 shadow-[0_1px_0_rgba(15,23,42,0.03)] backdrop-blur-sm transition-shadow hover:shadow-xl"
          >
            <SectionEyebrow>{g.label}</SectionEyebrow>
            <ul className="mt-5 flex flex-wrap gap-2">
              {g.items.map((it) => (
                <li
                  key={it}
                  className="font-display rounded-full border border-line bg-paper-soft px-3 py-1.5 text-[12px] font-semibold tracking-wide text-ink"
                >
                  {it}
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </PageShell>
  );
}
