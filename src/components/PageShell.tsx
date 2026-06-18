import type { ReactNode } from "react";
import { SiteNav } from "./SiteNav";
import { SiteFooter } from "./SiteFooter";

export function PageShell({ children }: { children: ReactNode }) {
  return (
    <div className="relative min-h-screen w-full overflow-x-hidden bg-paper text-ink">
      {/* ambient pastel orbs */}
      <div className="pointer-events-none fixed -left-32 -top-32 -z-10 h-[34rem] w-[34rem] rounded-full bg-mist opacity-60 blur-3xl" />
      <div className="pointer-events-none fixed -right-40 top-1/3 -z-10 h-[30rem] w-[30rem] rounded-full bg-blush opacity-60 blur-3xl" />
      <div className="pointer-events-none fixed -bottom-40 left-1/3 -z-10 h-[28rem] w-[28rem] rounded-full bg-sky-pastel opacity-50 blur-3xl" />

      <div className="mx-auto flex min-h-screen w-full max-w-6xl flex-col px-6 py-8 md:px-10 md:py-12 lg:px-16 lg:py-16">
        <SiteNav />
        <main className="flex-1 pt-16 md:pt-24">{children}</main>
        <SiteFooter />
      </div>
    </div>
  );
}

export function SectionEyebrow({ children }: { children: ReactNode }) {
  return (
    <h2 className="font-display text-[10px] font-bold uppercase tracking-[0.28em] text-ink-mute">
      {children}
    </h2>
  );
}
