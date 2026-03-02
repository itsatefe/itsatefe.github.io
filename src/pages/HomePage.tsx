import { SectionShell } from "../components/SectionShell";
import { EmailIcon, GitHubIcon, LinkedInIcon } from "../components/icons";
import { profile } from "../data/profile";
import portrait from "../assets/1752263902402.jpg";
import { splitParagraphs } from "../utils/text";

export function HomePage() {
  const contactLinks = [
    { label: "Email", href: `mailto:${profile.email}`, icon: <EmailIcon />, external: false },
    { label: "GitHub", href: profile.github, icon: <GitHubIcon />, external: true },
    { label: "LinkedIn", href: profile.linkedin, icon: <LinkedInIcon />, external: true },
  ];

  return (
    <main className="home">
      <section className="home__intro card">
        <div className="home__identity">
          <div className="home__photo">
            <img src={portrait} alt={`${profile.name} portrait`} />
          </div>
          <div className="home__personal">
            <p className="eyebrow">Profile</p>
            <h1>{profile.name}</h1>
            <p className="muted">{profile.title}</p>
            <div className="home__meta">
              <span>{profile.location}</span>
              <span>{profile.email}</span>
            </div>
          </div>
        </div>
        <div className="home__contacts">
          {contactLinks.map((link) => (
            <a
              key={link.label}
              className="contact-item"
              href={link.href}
              target={link.external ? "_blank" : undefined}
              rel={link.external ? "noreferrer" : undefined}
            >
              <span className="contact-item__icon" aria-hidden="true">
                {link.icon}
              </span>
              <span>{link.label}</span>
            </a>
          ))}
        </div>
      </section>

      <SectionShell id="overview" headline="Overview" eyebrow="About">
        <div className="overview">
          <div className="overview__copy">
            <div className="overview__lede">
              {splitParagraphs(profile.summary).map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>
        </div>
      </SectionShell>
    </main>
  );
}
