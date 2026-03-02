import { profile } from "../data/profile";

export function ContactBar() {
  return (
    <div className="contact" id="contact">
      <div>
        <p className="eyebrow">Let's collaborate</p>
        <h3>Open to AI backend roles, ML pipelines, and platform work.</h3>
      </div>
      <div className="contact__actions">
        <a className="btn primary" href={`mailto:${profile.email}`}>
          Email
        </a>
        <a className="btn ghost" href={profile.github} target="_blank" rel="noreferrer">
          GitHub
        </a>
        <a className="btn ghost" href={profile.linkedin} target="_blank" rel="noreferrer">
          LinkedIn
        </a>
      </div>
    </div>
  );
}
