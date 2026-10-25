import { createFileRoute } from "@tanstack/react-router";
import { PageShell, SectionEyebrow } from "@/components/PageShell";
import { useGitHubRepos, useGitHubUser, useGitHubContributions, type GitHubRepo } from "@/hooks/use-github";
import { ContributionCalendar } from "@/components/ContributionCalendar";
import { Star, GitFork, Clock } from "lucide-react";

export const Route = createFileRoute("/github")({
  head: () => ({
    meta: [
      { title: "GitHub — Atefe Rajabi" },
      {
        name: "description",
        content: "GitHub activity, repositories, and stats for Atefe Rajabi.",
      },
      { property: "og:title", content: "GitHub — Atefe Rajabi" },
    ],
  }),
  component: GitHubPage,
});

// ── helpers ──────────────────────────────────────────────────────────────────

const LANG_COLORS: Record<string, string> = {
  TypeScript: "#3178c6",
  JavaScript: "#f1e05a",
  Python: "#3572A5",
  HTML: "#e34c26",
  CSS: "#563d7c",
  "Jupyter Notebook": "#DA5B0B",
  Shell: "#89e051",
  Go: "#00ADD8",
  Rust: "#dea584",
  Java: "#b07219",
  "C++": "#f34b7d",
  C: "#555555",
};

function langColor(lang: string | null) {
  return lang ? (LANG_COLORS[lang] ?? "#8b949e") : "#8b949e";
}

function timeAgo(dateStr: string): string {
  const diff = Math.floor((Date.now() - new Date(dateStr).getTime()) / 1000);
  if (diff < 3600) return `${Math.floor(diff / 60)}m ago`;
  if (diff < 86400) return `${Math.floor(diff / 3600)}h ago`;
  if (diff < 2592000) return `${Math.floor(diff / 86400)}d ago`;
  if (diff < 31536000) return `${Math.floor(diff / 2592000)}mo ago`;
  return `${Math.floor(diff / 31536000)}y ago`;
}

// Cards from github-readme-stats (indigo primary + transparent bg)
const STATS_CARD =
  "https://github-readme-stats.vercel.app/api?username=itsatefe&show_icons=true&hide_border=true&count_private=true&title_color=6366f1&icon_color=6366f1&text_color=475569&bg_color=ffffff00&ring_color=6366f1";


const STREAK_CARD =
  "https://streak-stats.demolab.com/?user=itsatefe&hide_border=true&ring=6366f1&fire=6366f1&currStreakLabel=6366f1&sideLabels=475569&dates=475569&background=ffffff00";

// ── sub-components ────────────────────────────────────────────────────────────

function StatPill({ label, value }: { label: string; value: number | undefined }) {
  return (
    <div className="flex flex-col items-center gap-0.5">
      <span className="font-display text-2xl font-extrabold tracking-tight text-ink">
        {value ?? "—"}
      </span>
      <span className="font-display text-[10px] font-bold uppercase tracking-[0.18em] text-ink-mute">
        {label}
      </span>
    </div>
  );
}

function RepoCard({ repo }: { repo: GitHubRepo }) {
  return (
    <a
      href={repo.html_url}
      target="_blank"
      rel="noreferrer"
      className="group flex h-full flex-col justify-between rounded-3xl border border-line/70 bg-white/70 p-6 shadow-[0_1px_0_rgba(15,23,42,0.03)] backdrop-blur-sm transition-all hover:-translate-y-0.5 hover:shadow-xl"
    >
      <div>
        <p className="font-display text-base font-bold tracking-tight text-ink transition-colors group-hover:text-primary">
          {repo.name}
        </p>
        {repo.description && (
          <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-ink-soft">
            {repo.description}
          </p>
        )}
      </div>

      <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-1 text-[12px] text-ink-mute">
        {repo.language && (
          <span className="flex items-center gap-1.5">
            <span
              className="h-2.5 w-2.5 rounded-full"
              style={{ backgroundColor: langColor(repo.language) }}
            />
            {repo.language}
          </span>
        )}
        <span className="flex items-center gap-1">
          <Star className="h-3 w-3" />
          {repo.stargazers_count}
        </span>
        <span className="flex items-center gap-1">
          <GitFork className="h-3 w-3" />
          {repo.forks_count}
        </span>
        <span className="flex items-center gap-1 ml-auto">
          <Clock className="h-3 w-3" />
          {timeAgo(repo.updated_at)}
        </span>
      </div>
    </a>
  );
}

function SkeletonCard() {
  return (
    <div className="h-36 animate-pulse rounded-3xl border border-line/70 bg-white/70" />
  );
}

// ── page ──────────────────────────────────────────────────────────────────────

function GitHubPage() {
  const repos = useGitHubRepos();
  const user = useGitHubUser();
  const contributions = useGitHubContributions();

  const ownRepos = repos.data?.filter((r) => !r.fork) ?? [];

  return (
    <PageShell>
      <header className="mb-16 grid grid-cols-1 gap-8 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <SectionEyebrow>GitHub</SectionEyebrow>
        </div>
        <div className="lg:col-span-8">
          <h1 className="font-display text-5xl font-extrabold tracking-tighter text-ink md:text-6xl">
            Code & activity,
            <br />
            <span className="text-primary/90">live from GitHub.</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-soft">
            Public repositories, contribution streak, and top languages — pulled
            live from the GitHub API.
          </p>
        </div>
      </header>

      {/* ── user stats strip ── */}
      <section className="mb-12 flex flex-wrap gap-8 rounded-3xl border border-line/70 bg-white/70 px-8 py-6 shadow-[0_1px_0_rgba(15,23,42,0.03)] backdrop-blur-sm">
        <StatPill label="Public Repos" value={user.data?.public_repos} />
        <div className="my-auto h-8 w-px bg-line" />
        <StatPill label="Followers" value={user.data?.followers} />
        <div className="my-auto h-8 w-px bg-line" />
        <StatPill label="Following" value={user.data?.following} />
      </section>

      {/* ── SVG stat cards ── */}
      <section className="mb-12 grid grid-cols-1 gap-6 md:grid-cols-2">
        {[
          { src: STATS_CARD, alt: "GitHub Stats" },
          { src: STREAK_CARD, alt: "Contribution Streak" },
        ].map(({ src, alt }) => (
          <div
            key={alt}
            className="flex items-center justify-center rounded-3xl border border-line/70 bg-white/70 p-4 shadow-[0_1px_0_rgba(15,23,42,0.03)] backdrop-blur-sm"
          >
            <img
              src={src}
              alt={alt}
              className="h-auto w-full"
              loading="lazy"
            />
          </div>
        ))}
      </section>

      {/* ── contribution calendar ── */}
      {contributions.data && contributions.data.length > 0 && (
        <section className="mb-12">
          <ContributionCalendar contributions={contributions.data} />
        </section>
      )}

      {/* ── repo grid ── */}
      <section>
        <div className="mb-6 grid grid-cols-1 gap-4 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <SectionEyebrow>Repositories</SectionEyebrow>
          </div>
          <p className="text-sm text-ink-mute lg:col-span-8 lg:pt-0.5">
            {repos.isLoading
              ? "Fetching…"
              : repos.isError
                ? "Could not load repositories."
                : `${ownRepos.length} owned repos · sorted by last updated`}
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
          {repos.isLoading
            ? Array.from({ length: 6 }).map((_, i) => <SkeletonCard key={i} />)
            : ownRepos.map((repo) => <RepoCard key={repo.id} repo={repo} />)}
        </div>
      </section>
    </PageShell>
  );
}
