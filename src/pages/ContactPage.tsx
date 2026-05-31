import { SectionShell } from "../components/SectionShell";
import { contactContent } from "../data/contact";

export function ContactPage() {
  const { sectionId, headline, card, actions, details, availability } = contactContent;

  return (
    <main className="layout">
      <div className="layout__main">
        <SectionShell headline={headline} id={sectionId}>
          <div className="contact-page">
            <div className="contact-page__card card">
              <h2 className="contact-page__title">{card.title}</h2>
              <p className="muted">{card.body}</p>
              <div className="contact-page__actions">
                {actions.map((action) => {
                  const externalProps = action.external
                    ? { target: "_blank", rel: "noreferrer" }
                    : {};

                  return (
                    <a
                      key={action.label}
                      className={`btn ${action.variant}`}
                      href={action.href}
                      {...externalProps}
                    >
                      {action.label}
                    </a>
                  );
                })}
              </div>
            </div>

            <div className="contact-page__grid">
              <div className="card">
                <ul className="contact-page__list">
                  {details.map((item) => (
                    <li key={item.label}>
                      <strong>{item.label}</strong>
                      <span>{item.value}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="card">
                <ul className="contact-page__list">
                  {availability.map((item) => (
                    <li key={item.label}>
                      <strong>{item.label}</strong>
                      <span>{item.value}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </SectionShell>
      </div>
    </main>
  );
}
