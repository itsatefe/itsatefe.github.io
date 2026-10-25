import { useState } from "react";
import { useGitHubContributions, type Contribution } from "@/hooks/use-github";
import { cn } from "@/lib/utils";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const LEVEL_COLORS = [
  "#eef2ff",
  "#c7d2fe",
  "#818cf8",
  "#6366f1",
  "#4338ca",
];

const DAYS = ["", "Mon", "", "Wed", "", "Fri", ""];
const MONTHS = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];

const CURRENT_YEAR = new Date().getFullYear();
const START_YEAR = 2018;
const YEARS = Array.from(
  { length: CURRENT_YEAR - START_YEAR + 1 },
  (_, i) => CURRENT_YEAR - i,
);

type YearOption = number | "last";

function groupByWeek(contributions: Contribution[]): Contribution[][] {
  const weeks: Contribution[][] = [];
  let week: Contribution[] = [];

  if (contributions.length > 0) {
    const firstDay = new Date(contributions[0].date).getDay();
    for (let i = 0; i < firstDay; i++) week.push({ date: "", count: 0, level: 0 });
  }

  for (const c of contributions) {
    week.push(c);
    if (week.length === 7) { weeks.push(week); week = []; }
  }
  if (week.length) {
    while (week.length < 7) week.push({ date: "", count: 0, level: 0 });
    weeks.push(week);
  }
  return weeks;
}

function monthLabels(weeks: Contribution[][]): { label: string; col: number }[] {
  const labels: { label: string; col: number }[] = [];
  let lastMonth = -1;
  weeks.forEach((week, col) => {
    const firstReal = week.find((d) => d.date);
    if (!firstReal) return;
    const month = new Date(firstReal.date).getMonth();
    if (month !== lastMonth) { labels.push({ label: MONTHS[month], col }); lastMonth = month; }
  });
  return labels;
}

type TooltipInfo = { x: number; y: number; date: string; count: number } | null;

function CalendarGrid({ contributions }: { contributions: Contribution[] }) {
  const [tooltip, setTooltip] = useState<TooltipInfo>(null);
  const weeks = groupByWeek(contributions);
  const mLabels = monthLabels(weeks);

  const CELL = 13;
  const GAP = 3;
  const LABEL_W = 28;
  const LABEL_H = 18;

  const totalW = LABEL_W + weeks.length * (CELL + GAP);
  const totalH = LABEL_H + 7 * (CELL + GAP);

  return (
    <div className="relative overflow-x-auto">
      <svg
        width={totalW}
        height={totalH}
        className="mx-auto block"
        onMouseLeave={() => setTooltip(null)}
      >
        {mLabels.map(({ label, col }) => (
          <text
            key={`${label}-${col}`}
            x={LABEL_W + col * (CELL + GAP)}
            y={12}
            style={{ fontSize: 10, fontFamily: "Urbanist, sans-serif", fill: "#94a3b8" }}
          >
            {label}
          </text>
        ))}

        {DAYS.map((label, row) =>
          label ? (
            <text
              key={row}
              x={0}
              y={LABEL_H + row * (CELL + GAP) + CELL - 2}
              style={{ fontSize: 9, fontFamily: "Urbanist, sans-serif", fill: "#94a3b8" }}
            >
              {label}
            </text>
          ) : null,
        )}

        {weeks.map((week, col) =>
          week.map((day, row) => {
            if (!day.date) return null;
            const x = LABEL_W + col * (CELL + GAP);
            const y = LABEL_H + row * (CELL + GAP);
            return (
              <rect
                key={`${col}-${row}`}
                x={x} y={y}
                width={CELL} height={CELL}
                rx={3}
                fill={LEVEL_COLORS[day.level]}
                onMouseEnter={(e) => {
                  const svg = (e.target as SVGRectElement).closest("svg")!;
                  const rect = svg.getBoundingClientRect();
                  const scale = rect.width / totalW;
                  setTooltip({ x: (x + CELL / 2) * scale, y: y * scale, date: day.date, count: day.count });
                }}
                style={{ cursor: "default" }}
              />
            );
          }),
        )}
      </svg>

      {tooltip && (
        <div
          className={cn(
            "pointer-events-none absolute z-10 -translate-x-1/2 rounded-xl border border-line/70 bg-white px-3 py-1.5 text-xs shadow-lg",
            tooltip.y < 60 ? "" : "-translate-y-full",
          )}
          style={{ left: tooltip.x, top: tooltip.y < 60 ? tooltip.y + 22 : tooltip.y - 6 }}
        >
          <span className="font-semibold text-ink">
            {tooltip.count} contribution{tooltip.count !== 1 ? "s" : ""}
          </span>
          <span className="ml-1 text-ink-mute">on {tooltip.date}</span>
        </div>
      )}
    </div>
  );
}

export function ContributionCalendar() {
  const [year, setYear] = useState<YearOption>("last");
  const { data, isLoading, isError } = useGitHubContributions(year);

  const total = data?.reduce((s, c) => s + c.count, 0) ?? 0;
  const periodLabel = year === "last" ? "past year" : String(year);

  return (
    <div className="rounded-3xl border border-line/70 bg-white/70 p-6 shadow-[0_1px_0_rgba(15,23,42,0.03)] backdrop-blur-sm">
      {/* Header */}
      <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
        <p className="font-display text-[10px] font-bold uppercase tracking-[0.2em] text-primary">
          Contributions
        </p>
        <div className="flex items-center gap-3">
          <p className="text-xs text-ink-mute">
            {isLoading ? "Loading…" : isError ? "Could not load" : `${total.toLocaleString()} in ${periodLabel}`}
          </p>
          <Select
            value={String(year)}
            onValueChange={(v) => setYear(v === "last" ? "last" : Number(v))}
          >
            <SelectTrigger className="font-display h-auto w-auto rounded-full border-line bg-paper-soft px-3 py-1 text-[11px] font-semibold tracking-wide text-ink shadow-none hover:border-primary/40 focus:ring-0">
              <SelectValue />
            </SelectTrigger>
            <SelectContent className="font-display rounded-2xl border-line text-[11px] font-semibold">
              <SelectItem value="last" className="rounded-xl text-[11px]">Past year</SelectItem>
              <SelectSeparator />
              {YEARS.map((y) => (
                <SelectItem key={y} value={String(y)} className="rounded-xl text-[11px]">
                  {y}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Grid */}
      {isLoading ? (
        <div className="h-[120px] animate-pulse rounded-2xl bg-line/40" />
      ) : isError ? (
        <p className="py-8 text-center text-sm text-ink-mute">Failed to load contribution data.</p>
      ) : data && data.length > 0 ? (
        <CalendarGrid key={year} contributions={data} />
      ) : null}

      {/* Legend */}
      <div className="mt-3 flex items-center justify-end gap-1.5">
        <span className="text-[10px] text-ink-mute">Less</span>
        {LEVEL_COLORS.map((color, i) => (
          <span key={i} className="inline-block h-3 w-3 rounded-sm" style={{ backgroundColor: color }} />
        ))}
        <span className="text-[10px] text-ink-mute">More</span>
      </div>
    </div>
  );
}
