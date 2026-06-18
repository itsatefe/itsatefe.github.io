import { createFileRoute } from "@tanstack/react-router";
import { PageShell, SectionEyebrow } from "@/components/PageShell";
import { education } from "@/data/resume";

export const Route = createFileRoute("/education")({
  head: () => ({
    meta: [
      { title: "Education — Atefe Rajabi" },
      {
        name: "description",
        content:
          "MSc in Artificial Intelligence at Shiraz University and BSc in Software Engineering at Persian Gulf University.",
      },
      { property: "og:title", content: "Education — Atefe Rajabi" },
      {
        property: "og:description",
        content: "Academic background, coursework, thesis, and awards.",
      },
    ],
  }),
  component: EducationPage,
});

function EducationPage() {
  return (
    <PageShell>
      <header className="mb-16 grid grid-cols-1 gap-8 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <SectionEyebrow>Education</SectionEyebrow>
        </div>
        <div className="lg:col-span-8">
          <h1 className="font-display text-5xl font-extrabold tracking-tighter text-ink md:text-6xl">
            Academic
            <br />
            <span className="text-primary/90">foundations.</span>
          </h1>
        </div>
      </header>

      <div className="space-y-10">
        {education.map((b) => (
          <article
            key={b.degree}
            className="grid grid-cols-1 gap-8 rounded-3xl border border-line/70 bg-white/70 p-8 backdrop-blur-sm md:grid-cols-12"
          >
            <div className="md:col-span-4">
              <p className="font-display text-[11px] font-bold uppercase tracking-[0.2em] text-primary">
                {b.period}
              </p>
              <h3 className="font-display mt-3 text-2xl font-extrabold tracking-tight text-ink md:text-3xl">
                {b.degree}
              </h3>
              <p className="mt-1 text-sm font-medium text-ink-soft">{b.school}</p>
              <ul className="mt-4 space-y-1 text-sm text-ink-mute">
                {b.intro.map((t) => (
                  <li key={t}>{t}</li>
                ))}
              </ul>
            </div>
            <div className="grid grid-cols-1 gap-6 md:col-span-8 md:grid-cols-2">
              {b.sections.map((s) => (
                <div key={s.label}>
                  <SectionEyebrow>{s.label}</SectionEyebrow>
                  <ul className="mt-3 space-y-2 text-[15px] leading-relaxed text-ink-soft">
                    {s.items.map((it) => (
                      <li key={it} className="flex gap-3">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary/60" />
                        <span>{it}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </article>
        ))}
      </div>
    </PageShell>
  );
}
