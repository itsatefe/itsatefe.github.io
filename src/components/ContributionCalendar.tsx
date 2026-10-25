import { useState } from "react";
import type { Contribution } from "@/hooks/use-github";

// Indigo shades matching --primary: oklch(0.56 0.18 275)
const LEVEL_COLORS = [
  "#eef2ff", // 0 – indigo-50
  "#c7d2fe", // 1 – indigo-200
  "#818cf8", // 2 – indigo-400
  "#6366f1", // 3 – indigo-500 (primary)
  "#4338ca", // 4 – indigo-700
];

const DAYS = ["", "Mon", "", "Wed", "", "Fri", ""];
const MONTHS = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];

function groupByWeek(contributions: Contribution[]): Contribution[][] {
  const weeks: Contribution[][] = [];
  let week: Contribution[] = [];

  // Pad the first week so it starts on Sunday (day 0)
  if (contributions.length > 0) {
    const firstDay = new Date(contributions[0].date).getDay();
    for (let i = 0; i < firstDay; i++) week.push({ date: "", count: 0, level: 0 });
  }

  for (const c of contributions) {
    week.push(c);
    if (week.length === 7) {
      weeks.push(week);
      week = [];
    }
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
    if (month !== lastMonth) {
      labels.push({ label: MONTHS[month], col });
      lastMonth = month;
    }
  });
  return labels;
}

type TooltipInfo = { x: number; y: number; date: string; count: number } | null;

export function ContributionCalendar({ contributions }: { contributions: Contribution[] }) {
  const [tooltip, setTooltip] = useState<TooltipInfo>(null);
  const weeks = groupByWeek(contributions);
  const mLabels = monthLabels(weeks);

  const CELL = 13; // px per cell
  const GAP = 3;
  const LABEL_W = 28; // left gutter for day labels
  const LABEL_H = 18; // top gutter for month labels

  const totalW = LABEL_W + weeks.length * (CELL + GAP);
  const totalH = LABEL_H + 7 * (CELL + GAP);

  const totalContributions = contributions.reduce((s, c) => s + c.count, 0);

  return (
    <div className="rounded-3xl border border-line/70 bg-white/70 p-6 shadow-[0_1px_0_rgba(15,23,42,0.03)] backdrop-blur-sm">
      <div className="mb-4 flex items-center justify-between">
        <p className="font-display text-[10px] font-bold uppercase tracking-[0.2em] text-primary">
          Contributions
        </p>
        <p className="text-xs text-ink-mute">
          {totalContributions.toLocaleString()} in the last year
        </p>
      </div>

      <div className="relative overflow-x-auto">
        <svg
          width={totalW}
          height={totalH}
          className="mx-auto block"
          style={{ minWidth: Math.min(totalW, 300) }}
          onMouseLeave={() => setTooltip(null)}
        >
          {/* Month labels */}
          {mLabels.map(({ label, col }) => (
            <text
              key={`${label}-${col}`}
              x={LABEL_W + col * (CELL + GAP)}
              y={12}
              className="fill-ink-mute"
              style={{ fontSize: 10, fontFamily: "Urbanist, sans-serif", fill: "#94a3b8" }}
            >
              {label}
            </text>
          ))}

          {/* Day labels */}
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

          {/* Cells */}
          {weeks.map((week, col) =>
            week.map((day, row) => {
              if (!day.date) return null;
              const x = LABEL_W + col * (CELL + GAP);
              const y = LABEL_H + row * (CELL + GAP);
              return (
                <rect
                  key={`${col}-${row}`}
                  x={x}
                  y={y}
                  width={CELL}
                  height={CELL}
                  rx={3}
                  fill={LEVEL_COLORS[day.level]}
                  onMouseEnter={(e) => {
                    const svg = (e.target as SVGRectElement).closest("svg")!;
                    const rect = svg.getBoundingClientRect();
                    const scale = rect.width / totalW;
                    setTooltip({
                      x: (x + CELL / 2) * scale,
                      y: y * scale,
                      date: day.date,
                      count: day.count,
                    });
                  }}
                  style={{ cursor: "default" }}
                />
              );
            }),
          )}
        </svg>

        {/* Tooltip */}
        {tooltip && (
          <div
            className="pointer-events-none absolute z-10 -translate-x-1/2 -translate-y-full rounded-xl border border-line/70 bg-white px-3 py-1.5 text-xs shadow-lg"
            style={{ left: tooltip.x, top: tooltip.y - 6 }}
          >
            <span className="font-semibold text-ink">{tooltip.count} contribution{tooltip.count !== 1 ? "s" : ""}</span>
            <span className="ml-1 text-ink-mute">on {tooltip.date}</span>
          </div>
        )}
      </div>

      {/* Legend */}
      <div className="mt-3 flex items-center justify-end gap-1.5">
        <span className="text-[10px] text-ink-mute">Less</span>
        {LEVEL_COLORS.map((color, i) => (
          <span
            key={i}
            className="inline-block h-3 w-3 rounded-sm"
            style={{ backgroundColor: color }}
          />
        ))}
        <span className="text-[10px] text-ink-mute">More</span>
      </div>
    </div>
  );
}
