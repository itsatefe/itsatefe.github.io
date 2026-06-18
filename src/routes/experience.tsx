import { createFileRoute } from "@tanstack/react-router";
import { PageShell, SectionEyebrow } from "@/components/PageShell";
import { roles } from "@/data/resume";

export const Route = createFileRoute("/experience")({
  head: () => ({
    meta: [
      { title: "Experience — Atefe Rajabi" },
      {
        name: "description",
        content:
          "Work history of Atefe Rajabi across Mithra-AI, ShortPartners, Shiraz University, freelance NLP/ML, and TebOnco.",
      },
      { property: "og:title", content: "Experience — Atefe Rajabi" },
      {
        property: "og:description",
        content:
          "LLM agents, GCP analytics, FastAPI services, and healthcare API performance work.",
      },
    ],
  }),
  component: ExperiencePage,
});

function ExperiencePage() {
  return (
    <PageShell>
      <header className="mb-16 grid grid-cols-1 gap-8 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <SectionEyebrow>Experience</SectionEyebrow>
        </div>
        <div className="lg:col-span-8">
          <h1 className="font-display text-5xl font-extrabold tracking-tighter text-ink md:text-6xl">
            Where I've shipped
            <br />
            <span className="text-primary/90">measurable outcomes.</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-soft">
            A timeline of roles building production AI — from healthcare APIs to
            LLM agents for procurement and M&A.
          </p>
        </div>
      </header>

      <div className="space-y-6">
        {roles.map((r, i) => (
          <article
            key={`${r.company}-${i}`}
            className="group grid grid-cols-1 gap-6 rounded-3xl border border-line/70 bg-white/70 p-8 shadow-[0_1px_0_rgba(15,23,42,0.03)] backdrop-blur-sm transition-shadow hover:shadow-xl md:grid-cols-12 md:gap-10"
          >
            <div className="md:col-span-4">
              <p className="font-display text-[11px] font-bold uppercase tracking-[0.2em] text-primary">
                {r.period}
              </p>
              <p className="mt-2 text-sm text-ink-mute">{r.location}</p>
            </div>
            <div className="md:col-span-8">
              <h3 className="font-display text-2xl font-extrabold tracking-tight text-ink md:text-3xl">
                {r.title}
              </h3>
              <p className="mt-1 text-sm font-medium text-ink-soft">
                {r.company} — <span className="text-ink-mute">{r.place}</span>
              </p>
              {r.link && (
                <a
                  href={r.link.href}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-1 inline-block text-xs font-semibold text-primary underline-offset-4 hover:underline"
                >
                  {r.link.label}
                </a>
              )}
              <p className="mt-4 text-base leading-relaxed text-ink-soft">
                {r.summary}
              </p>
              <ul className="mt-4 space-y-2 text-[15px] leading-relaxed text-ink-soft">
                {r.bullets.map((b) => (
                  <li key={b} className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary/70" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-5 flex flex-wrap gap-2">
                {r.stack.map((t) => (
                  <span
                    key={t}
                    className="font-display rounded-full border border-line bg-paper-soft px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.12em] text-ink-mute"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </PageShell>
  );
}
