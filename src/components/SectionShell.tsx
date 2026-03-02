import { PropsWithChildren } from "react";

type Props = PropsWithChildren<{ id?: string; headline: string; eyebrow?: string }>;

export function SectionShell({ id, headline, eyebrow, children }: Props) {
  return (
    <section id={id} className="section">
      <div className="section__heading">
        {eyebrow && <span className="eyebrow">{eyebrow}</span>}
        <h2>{headline}</h2>
      </div>
      {children}
    </section>
  );
}
