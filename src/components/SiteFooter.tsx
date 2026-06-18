export function SiteFooter() {
  return (
    <footer className="mt-24 flex flex-col gap-4 border-t border-line pt-8 text-sm text-ink-mute sm:flex-row sm:items-center sm:justify-between">
      <p className="font-body">
        © {new Date().getFullYear()} Atefe Rajabi · AI Engineer
      </p>
      <div className="flex flex-wrap items-center gap-6">
        <a
          href="mailto:atefe.rajabi.78@gmail.com"
          className="font-display text-xs font-bold uppercase tracking-[0.18em] text-ink-mute transition-colors hover:text-ink"
        >
          Email
        </a>
        <a
          href="https://github.com/itsatefe"
          target="_blank"
          rel="noreferrer"
          className="font-display text-xs font-bold uppercase tracking-[0.18em] text-ink-mute transition-colors hover:text-ink"
        >
          GitHub
        </a>
        <a
          href="https://linkedin.com/in/atefe-rajabi78"
          target="_blank"
          rel="noreferrer"
          className="font-display text-xs font-bold uppercase tracking-[0.18em] text-ink-mute transition-colors hover:text-ink"
        >
          LinkedIn
        </a>
      </div>
    </footer>
  );
}
