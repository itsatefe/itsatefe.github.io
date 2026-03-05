import { profile } from "./profile";

export type ContactAction = {
  label: string;
  href: string;
  variant: "primary" | "ghost";
  external?: boolean;
};

export type ContactItem = {
  label: string;
  value: string;
};

export type ContactContent = {
  sectionId: string;
  headline: string;
  card: {
    eyebrow: string;
    title: string;
    body: string;
  };
  actions: ContactAction[];
  detailsHeading: string;
  details: ContactItem[];
  availabilityHeading: string;
  availability: ContactItem[];
};

export const contactContent: ContactContent = {
  sectionId: "contact",
  headline: "Contact",
  card: {
    eyebrow: "Reach out",
    title: "Let's build something reliable.",
    body:
      "Open to AI backend roles, ML pipelines, and platform work. I respond quickly to clear project scopes and collaboration requests.",
  },
  actions: [
    {
      label: "Email me",
      href: `mailto:${profile.email}`,
      variant: "primary",
    },
    {
      label: "Book a call",
      href: "https://calendly.com/atefe-rajabi-78/30min",
      variant: "ghost",
      external: true,
    },
    {
      label: "GitHub",
      href: profile.github,
      variant: "ghost",
      external: true,
    },
    {
      label: "LinkedIn",
      href: profile.linkedin,
      variant: "ghost",
      external: true,
    },
  ],
  detailsHeading: "Details",
  details: [
    {
      label: "Email",
      value: profile.email,
    },
    {
      label: "Location",
      value: profile.location,
    },
    {
      label: "Focus",
      value: "AI backend, data pipelines, LLM integrations",
    },
  ],
  availabilityHeading: "Availability",
  availability: [
    {
      label: "Timezone",
      value: "GMT+3 (Istanbul)",
    },
    {
      label: "Response time",
      value: "Usually within 24 hours",
    },
    {
      label: "Collaboration",
      value: "Remote, contract, or full-time",
    },
  ],
};
