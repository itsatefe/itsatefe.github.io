import { createFileRoute } from "@tanstack/react-router";
import { PageShell, SectionEyebrow } from "@/components/PageShell";
import { contactActions, contactMeta } from "@/data/resume";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Atefe Rajabi" },
      {
        name: "description",
        content:
          "Get in touch with Atefe Rajabi — email, book a call, GitHub, LinkedIn. Open to AI roles with real business problems.",
      },
      { property: "og:title", content: "Contact — Atefe Rajabi" },
      {
        property: "og:description",
        content:
          "Open to roles where AI has a real business problem to solve. Responds within 24 hours.",
      },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <PageShell>
      <header className="mb-16 grid grid-cols-1 gap-8 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <SectionEyebrow>Contact</SectionEyebrow>
        </div>
        <div className="lg:col-span-8">
          <h1 className="font-display text-5xl font-extrabold leading-[0.95] tracking-tighter text-ink md:text-6xl">
            Let's build something
            <br />
            <span className="text-primary/90">that actually moves the needle.</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-soft">
            Open to roles where AI has a real business problem to solve. I
            respond quickly to clear scopes and direct conversations.
          </p>
        </div>
      </header>

      <section className="grid grid-cols-1 gap-10 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <div className="rounded-3xl border border-line/70 bg-white/70 p-8 shadow-[0_1px_0_rgba(15,23,42,0.03)] backdrop-blur-sm transition-shadow hover:shadow-xl">
            <SectionEyebrow>Start here</SectionEyebrow>
            <div className="mt-6 flex flex-wrap gap-3">
              {contactActions.map((a) => (
                <a
                  key={a.label}
                  href={a.href}
                  target={a.href.startsWith("http") ? "_blank" : undefined}
                  rel={a.href.startsWith("http") ? "noreferrer" : undefined}
                  className={
                    "font-display rounded-full px-5 py-3 text-xs font-bold uppercase tracking-[0.16em] transition-colors " +
                    (a.primary
                      ? "bg-ink text-paper hover:bg-primary"
                      : "border border-line bg-paper-soft text-ink hover:bg-mist")
                  }
                >
                  {a.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="lg:col-span-5">
          <dl className="grid grid-cols-1 gap-px overflow-hidden rounded-3xl border border-line/70 bg-line">
            {contactMeta.map((m) => (
              <div key={m.label} className="bg-white/80 p-5 backdrop-blur-sm">
                <dt className="font-display text-[10px] font-bold uppercase tracking-[0.22em] text-ink-mute">
                  {m.label}
                </dt>
                <dd className="mt-1 text-sm font-medium text-ink">{m.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>
    </PageShell>
  );
}
