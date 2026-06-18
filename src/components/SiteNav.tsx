import { Link, useRouterState } from "@tanstack/react-router";
import { cn } from "@/lib/utils";

const links = [
  { to: "/", label: "Home" },
  { to: "/experience", label: "Experience" },
  { to: "/projects", label: "Projects" },
  { to: "/education", label: "Education" },
  { to: "/skills", label: "Skills" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteNav() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  return (
    <nav className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4 sm:flex sm:flex-wrap sm:justify-between">
      <Link
        to="/"
        className="font-display truncate text-lg font-extrabold tracking-tight text-ink"
      >
        Atefe Rajabi
      </Link>
      <div className="col-span-2 -mx-2 flex shrink-0 items-center gap-1 overflow-x-auto rounded-full border border-line/70 bg-white/60 p-1.5 shadow-[0_1px_0_rgba(15,23,42,0.03)] backdrop-blur-md sm:col-span-1 sm:mx-0 sm:gap-2">
        {links.map((l) => {
          const active = l.to === "/" ? pathname === "/" : pathname.startsWith(l.to);
          return (
            <Link
              key={l.to}
              to={l.to}
              className={cn(
                "shrink-0 rounded-full px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.14em] transition-colors sm:text-xs",
                active
                  ? "bg-white text-primary shadow-sm"
                  : "text-ink-mute hover:text-ink",
              )}
            >
              {l.label}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
