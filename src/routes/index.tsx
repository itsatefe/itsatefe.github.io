import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell, SectionEyebrow } from "@/components/PageShell";
import portrait from "@/assets/portrait.jpg";
import { identity, story } from "@/data/resume";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: `${identity.firstName} ${identity.lastName} — Applied AI Engineer · LLM & Agentic Systems` },
      {
        name: "description",
        content:
          `Portfolio of ${identity.firstName} ${identity.lastName}, Applied AI Engineer building LLM agents, RAG pipelines, and FastAPI services in production on GCP.`,
      },
      { property: "og:title", content: `${identity.firstName} ${identity.lastName} — Applied AI Engineer` },
      {
        property: "og:description",
        content:
          `LLM & agentic systems, RAG with source-cited outputs, and production AI on GCP. Based in ${identity.location}.`,
      },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <PageShell>
      <section className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-20">
        {/* Portrait */}
        <div className="relative mx-auto w-full max-w-[18rem] sm:max-w-xs lg:col-span-5 lg:mx-0 lg:max-w-none">
          <div className="absolute -left-10 -top-10 h-64 w-64 rounded-full bg-mist opacity-70 blur-3xl" />
          <div className="absolute -bottom-10 -right-10 h-56 w-56 rounded-full bg-blush opacity-70 blur-3xl" />

          <div className="relative">
            <img
              src={portrait}
              alt={`Portrait of ${identity.firstName} ${identity.lastName}`}
              width={800}
              height={1000}
              className="aspect-[4/5] w-full rounded-[2.25rem] border-[10px] border-white object-cover shadow-2xl shadow-slate-200/70"
            />
            <div className="absolute -bottom-6 -right-4 max-w-[200px] rounded-3xl border border-line/60 bg-white p-5 shadow-xl">
              <p className="mb-1 text-[10px] font-bold uppercase tracking-[0.2em] text-primary">
                Location
              </p>
              <p className="font-display text-sm font-semibold leading-tight text-ink">
                {identity.location}
              </p>
            </div>
          </div>
        </div>

        {/* Identity */}
        <div className="flex flex-col lg:col-span-7">
          <header className="mb-10">
            <h1 className="font-display mb-6 text-6xl font-extrabold leading-[0.9] tracking-tighter text-ink md:text-7xl lg:text-8xl">
              {identity.firstName}
              <br />
              <span className="text-primary/90">{identity.lastName}</span>
            </h1>
            <p className="max-w-md text-xl font-light leading-relaxed text-ink-soft md:text-2xl">
              {identity.title} building{" "}
              <span className="font-medium text-ink">{identity.tagline}</span>.
            </p>
          </header>

          <div className="flex flex-wrap items-center gap-6 border-t border-line pt-8">
            <a
              href={`mailto:${identity.email}`}
              className="text-sm font-semibold text-ink underline decoration-line underline-offset-4 transition-colors hover:text-primary"
            >
              {identity.email}
            </a>
            <div className="flex items-center gap-6">
              <a
                href={identity.github.href}
                target="_blank"
                rel="noreferrer"
                className="font-display text-xs font-bold uppercase tracking-[0.18em] text-ink-mute transition-colors hover:text-ink"
              >
                {identity.github.label}
              </a>
              <a
                href={identity.linkedin.href}
                target="_blank"
                rel="noreferrer"
                className="font-display text-xs font-bold uppercase tracking-[0.18em] text-ink-mute transition-colors hover:text-ink"
              >
                {identity.linkedin.label}
              </a>
              <Link
                to="/contact"
                className="rounded-full bg-ink px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-paper transition-colors hover:bg-primary"
              >
                Work with me
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Narrative */}
      <section className="mt-28 lg:grid lg:grid-cols-12 lg:gap-20">
        <div className="mb-3 lg:col-span-3 lg:mb-0">
          <SectionEyebrow>Story</SectionEyebrow>
        </div>
        <div className="space-y-6 text-lg leading-relaxed text-ink-soft lg:col-span-9">
          {story.map((paragraph, i) => (
            <p key={i}>{paragraph}</p>
          ))}
        </div>
      </section>
    </PageShell>
  );
}
