import { profile } from "../data/profile";
import portrait from "../assets/1752263902402.jpg";

export function Hero() {
  return (
    <header className="hero" id="top">
      <div className="hero__intro">
        <div className="hero__photo">
          <img src={portrait} alt={`${profile.name} portrait`} />
        </div>
        <div className="hero__text">
          <p className="eyebrow">AI Backend Developer</p>
          <h1>{profile.name}</h1>
          <p className="hero__lede">{profile.summary}</p>
          <div className="hero__chips">
            <span>{profile.location}</span>
            <span>Cloud-native ML and APIs</span>
            <span>3+ yrs experience</span>
          </div>
          <div className="hero__cta">
            <a className="btn primary" href="#contact">
              Contact
            </a>
            <a className="btn ghost" href="#projects">
              Projects
            </a>
          </div>
        </div>
      </div>
      <div className="hero__stats">
        <div className="stat">
          <p>Cloud and Infra</p>
          <strong>GCP, Docker, K8s</strong>
        </div>
        <div className="stat">
          <p>APIs</p>
          <strong>FastAPI, Node.js</strong>
        </div>
        <div className="stat">
          <p>AI/ML</p>
          <strong>LLMs, NLP, DL</strong>
        </div>
      </div>
    </header>
  );
}
