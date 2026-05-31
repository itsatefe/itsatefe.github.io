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
    title: "Let's build something that actually moves the needle.",
    body:
      "Open to roles where AI has a real business problem to solve. I respond quickly to clear scopes and direct conversations.",
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
      value: "Applied AI · turning data into decisions",
    },
  ],
  availabilityHeading: "Availability",
  availability: [
    {
      label: "Timezone",
      value: "GMT+4 · Yerevan, Armenia",
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
