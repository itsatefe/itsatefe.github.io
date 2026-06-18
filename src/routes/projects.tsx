import { createFileRoute } from "@tanstack/react-router";
import { PageShell, SectionEyebrow } from "@/components/PageShell";
import { projects } from "@/data/resume";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projects — Atefe Rajabi" },
      {
        name: "description",
        content:
          "Selected AI, NLP, and full-stack projects by Atefe Rajabi — from LLM ingestion pipelines to sentiment analysis and forecasting.",
      },
      { property: "og:title", content: "Projects — Atefe Rajabi" },
      {
        property: "og:description",
        content:
          "LLM pipelines, CRMs, sentiment analysis, time-series forecasting, and recommendation platforms.",
      },
    ],
  }),
  component: ProjectsPage,
});

function ProjectsPage() {
  return (
    <PageShell>
      <header className="mb-16 grid grid-cols-1 gap-8 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <SectionEyebrow>Projects</SectionEyebrow>
        </div>
        <div className="lg:col-span-8">
          <h1 className="font-display text-5xl font-extrabold tracking-tighter text-ink md:text-6xl">
            Selected work,
            <br />
            <span className="text-primary/90">research to product.</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-soft">
            A curated mix of production systems and research projects across
            LLMs, NLP, forecasting, and recommendations.
          </p>
        </div>
      </header>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {projects.map((p) => (
          <article
            key={p.title}
            className="group flex h-full flex-col justify-between rounded-3xl border border-line/70 bg-white/70 p-7 shadow-[0_1px_0_rgba(15,23,42,0.03)] backdrop-blur-sm transition-all hover:-translate-y-0.5 hover:shadow-xl"
          >
            <div>
              <div className="mb-5 flex items-center justify-between">
                <span className="font-display text-[11px] font-bold uppercase tracking-[0.2em] text-primary">
                  {p.year}
                </span>
                <span className="font-display rounded-full border border-line bg-paper-soft px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-ink-mute">
                  {p.kind}
                </span>
              </div>
              <h3 className="font-display text-2xl font-extrabold leading-tight tracking-tight text-ink">
                {p.title}
              </h3>
              <p className="mt-3 text-base leading-relaxed text-ink-soft">
                {p.blurb}
              </p>
            </div>
            <div className="mt-6 flex flex-wrap gap-2">
              {p.stack.map((t) => (
                <span
                  key={t}
                  className="font-display rounded-full bg-mist/60 px-3 py-1 text-[11px] font-semibold tracking-wide text-ink"
                >
                  {t}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </PageShell>
  );
}
