import { createFileRoute } from "@tanstack/react-router";
import { PageShell, SectionEyebrow } from "@/components/PageShell";
import { skills, type SkillGroup } from "@/data/resume";
import {
  Brain,
  Code2,
  Database,
  Cloud,
  Globe,
  Users,
  type LucideIcon,
} from "lucide-react";

const GROUP_META: Record<
  string,
  { icon: LucideIcon; description: string; proficiency: number }
> = {
  "Agentic AI & LLM": {
    icon: Brain,
    description:
      "Build intelligent agents with LLMs, tools, and memory using LangGraph and Google ADK — with CI evaluation pipelines via deepeval and Latitude.",
    proficiency: 92,
  },
  Programming: {
    icon: Code2,
    description:
      "Write clean, async APIs and full-stack applications in Python and React.",
    proficiency: 88,
  },
  Data: {
    icon: Database,
    description:
      "Model, query, and pipeline structured and graph data across relational and NoSQL systems.",
    proficiency: 82,
  },
  "Cloud & DevOps": {
    icon: Cloud,
    description:
      "Deploy and scale services on GCP with CI/CD automation, containers, and managed infrastructure.",
    proficiency: 78,
  },
  Languages: {
    icon: Globe,
    description:
      "Communicate professionally in English, conversationally in German, and natively in Persian.",
    proficiency: 85,
  },
  "Soft Skills": {
    icon: Users,
    description:
      "Collaborate, communicate, and ship with clarity — taking ownership from concept to production.",
    proficiency: 90,
  },
};

function SkillCard({ group }: { group: SkillGroup }) {
  const meta = GROUP_META[group.label];
  const Icon = meta?.icon ?? Code2;

  return (
    <div className="flex flex-col rounded-3xl border border-line/70 bg-white/70 p-7 shadow-[0_1px_0_rgba(15,23,42,0.03)] backdrop-blur-sm transition-all hover:-translate-y-0.5 hover:shadow-xl">
      {/* Icon + title */}
      <div className="mb-3 flex items-center gap-3">
        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-primary/10">
          <Icon className="h-5 w-5 text-primary" />
        </span>
        <h2 className="font-display text-lg font-bold tracking-tight text-ink">
          {group.label}
        </h2>
      </div>

      {/* Description */}
      {meta?.description && (
        <p className="mb-5 text-sm leading-relaxed text-ink-soft">
          {meta.description}
        </p>
      )}

      {/* Tags */}
      <div className="flex flex-1 flex-wrap gap-2">
        {group.items.map((item) => (
          <span
            key={item}
            className="font-display rounded-full border border-line bg-paper-soft px-3 py-1.5 text-[12px] font-semibold tracking-wide text-ink"
          >
            {item}
          </span>
        ))}
      </div>

      {/* Proficiency bar */}
      {meta?.proficiency !== undefined && (
        <div className="mt-6">
          <div className="h-1 w-full overflow-hidden rounded-full bg-line/60">
            <div
              className="h-full rounded-full bg-gradient-to-r from-primary/60 to-primary transition-all"
              style={{ width: `${meta.proficiency}%` }}
            />
          </div>
        </div>
      )}
    </div>
  );
}

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
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-soft">
            Six areas — from LLM agent design to cloud infrastructure — each
            with the tools I reach for most.
          </p>
        </div>
      </header>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {skills.map((g) => (
          <SkillCard key={g.label} group={g} />
        ))}
      </div>
    </PageShell>
  );
}
