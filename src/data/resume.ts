// ─── Identity ────────────────────────────────────────────────────────────────

export const identity = {
  firstName: "Atefe",
  lastName: "Rajabi",
  title: "Applied AI Engineer",
  tagline: "LLM & agentic systems",
  email: "atefe.rajabi.78@gmail.com",
  location: "Yerevan, Armenia",
  timezone: "GMT+4 · Yerevan",
  availability: "Remote, contract, or full-time",
  responseTime: "Usually within 24 hours",
  focus: "Applied AI · turning data into decisions",
  github: { href: "https://github.com/itsatefe", label: "GitHub" },
  linkedin: { href: "https://linkedin.com/in/atefe-rajabi78", label: "LinkedIn" },
  calendly: "https://calendly.com/atefe-rajabi-78/30min",
};

// ─── Story ────────────────────────────────────────────────────────────────────

export const story: string[] = [
  "My work spans agentic AI on Google ADK, RAG pipelines with source-cited outputs, FastAPI services, and production deployment on GCP. I gravitate toward problems where the output directly changes what someone decides or does next.",
  "At ShortPartners I owned an AI-enabled M&A CRM as sole developer — covering the full deal lifecycle from sourcing and screening to due diligence and decision support — including a RAG-based document Q&A system where every answer links back to its source. That ownership cut manual review effort by ~80%.",
  "At Mithra-AI I build LLM agents on Google ADK within a single-tenant, multi-customer architecture, with Langfuse evaluation and OpenTelemetry tracing for production monitoring. Earlier, at TebOnco, I cut healthcare API latency 40% through query tuning, indexing, and caching.",
];

// ─── Experience ───────────────────────────────────────────────────────────────

export type Role = {
  period: string;
  location: string;
  title: string;
  company: string;
  place: string;
  link?: { href: string; label: string };
  summary: string;
  bullets: string[];
  stack: string[];
};

export const roles: Role[] = [
  {
    period: "Mar 2026 – Present",
    location: "Yerevan, Armenia",
    title: "AI Engineer",
    company: "Mithra-AI Solutions",
    place: "Amsterdam, Netherlands · B2B Procurement Analytics",
    link: { href: "https://www.mithra-ai.com/", label: "mithra-ai.com" },
    summary:
      "Building LLM agents on Google ADK for enterprise procurement analytics, with evaluation, observability, and data-quality safeguards.",
    bullets: [
      "Build LLM agents on Google ADK with a single-tenant multi-customer architecture for full data isolation and client data privacy.",
      "Evaluate agent response quality and manage prompt versioning in Langfuse, with native OpenTelemetry tracing to Google Cloud for production monitoring.",
      "Design a structured analytics layer over agent interactions to track failure modes and surface new use cases.",
      "Develop an MCP connector and a Streamlit observability dashboard for real-time agent monitoring; partner with non-technical stakeholders to translate business needs into AI features.",
    ],
    stack: ["Google ADK", "FastAPI", "GCP", "PostgreSQL", "Langfuse", "MCP", "Streamlit"],
  },
  {
    period: "Sep 2025 – Feb 2026",
    location: "Remote",
    title: "Applied AI & Full-Stack Engineer",
    company: "ShortPartners",
    place: "Sydney, Australia · M&A Investment Platform",
    link: { href: "https://shortpartners.com.au/", label: "shortpartners.com.au" },
    summary:
      "Owned an AI-enabled M&A CRM as sole developer across the full deal lifecycle — sourcing, screening, due diligence, decision support.",
    bullets: [
      "Owned an AI-enabled M&A CRM as sole developer, covering the full deal lifecycle and stakeholder communication, cutting manual review effort by ~80%.",
      "Engineered automated deal-sourcing: a configurable web-scraping and LLM normalization pipeline that discovers and standardizes opportunities across broker platforms, letting non-technical users define acquisition criteria.",
      "Designed AI-driven screening that scores targets against acquisition criteria and flags low-confidence outputs for review, plus a RAG-based document Q&A system with answers linked to sources.",
      "Delivered AI-generated meeting summaries and integrated outreach/email/calendar workflows (Lemlist, Gmail, Calendar) tied to deal records.",
    ],
    stack: ["FastAPI", "LangChain/ADK", "RAG", "React Native", "PostgreSQL", "GCP", "Docker"],
  },
  {
    period: "Sep 2023 – 2025",
    location: "Shiraz, Iran",
    title: "Research Assistant — Artificial Intelligence",
    company: "Shiraz University",
    place: "Shiraz, Iran",
    link: { href: "https://shirazu.ac.ir/en", label: "shirazu.ac.ir" },
    summary:
      "Implemented and benchmarked deep learning architectures across vision, audio, and text; MSc thesis on Causal AI for explainable predictive modeling.",
    bullets: [
      "Multi-view Graph Convolutional Networks with attention for node classification.",
      "Variational Autoencoders (VAEs) for blind source separation across image and audio.",
      "RNN/LSTM-attention models for time-series and text classification.",
      "MSc thesis: Causal AI for explainable predictive modeling.",
    ],
    stack: ["PyTorch", "GCNs", "VAE", "RNN/LSTM", "Causal AI"],
  },
  {
    period: "Jun 2021 – Sep 2023",
    location: "Remote",
    title: "Freelance AI & Software Developer",
    company: "Independent",
    place: "Remote",
    summary: "Built AI assistants and applied ML to retail and transportation problems.",
    bullets: [
      "Developed a LangGraph-based AI assistant for a salon booking platform.",
      "Built association-rule-mining and neural-network models for retail cross-selling (+10% sales).",
      "Built a neural network to classify road-traffic Level-of-Service, using resampling to address class imbalance.",
    ],
    stack: ["LangGraph", "NLP", "Neural Networks", "Association Rules"],
  },
  {
    period: "Sep 2020 – Jun 2021",
    location: "On-site · Shiraz, Iran",
    title: "Back-End Developer",
    company: "TebOnco",
    place: "Shiraz, Iran",
    summary: "Engineered and optimized healthcare APIs and database performance.",
    bullets: [
      "Engineered production RESTful APIs (SQL) for a patient–doctor platform.",
      "Cut latency ~40% through query tuning, indexing, and caching.",
      "Built automated unit and integration testing pipelines to improve reliability.",
    ],
    stack: ["REST APIs", "SQL", "Caching", "Testing"],
  },
];

// ─── Education ────────────────────────────────────────────────────────────────

export type EducationSection = { label: string; items: string[] };

export type EducationBlock = {
  period: string;
  degree: string;
  school: string;
  intro: string[];
  sections: EducationSection[];
};

export const education: EducationBlock[] = [
  {
    period: "2023 – 2025",
    degree: "MSc in Artificial Intelligence",
    school: "Shiraz University",
    intro: [
      "Advanced AI coursework and research focus.",
      "Applied machine learning and deep learning methodologies.",
    ],
    sections: [
      {
        label: "Courses",
        items: [
          "Optimization Algorithms",
          "Deep Learning",
          "Machine Learning",
          "Mathematics in AI",
          "Research Methods",
        ],
      },
      {
        label: "Thesis",
        items: [
          "Causal AI for explainable predictive modeling",
          "Interpretable causal discovery",
          "Neural flows · Kolmogorov–Arnold networks",
        ],
      },
    ],
  },
  {
    period: "2017 – 2021",
    degree: "BSc in Software Engineering",
    school: "Persian Gulf University",
    intro: [
      "Core software engineering foundations and systems design.",
      "Project-based coursework in web and backend development.",
    ],
    sections: [
      {
        label: "Courses",
        items: [
          "Internet Engineering (Full-Stack Development)",
          "Reinforcement Learning",
          "Neural Networks",
          "Data Mining",
          "Natural Language Processing",
        ],
      },
      {
        label: "Awards",
        items: ["Exceptional Talented Student Award", "First Rank Student Award"],
      },
      {
        label: "Final Project",
        items: [
          "Movie Recommendation System Website",
          "KNNs · Recommender Systems",
          "ASP.NET MVC · HTML, CSS, jQuery, Bootstrap",
        ],
      },
    ],
  },
];

// ─── Projects ─────────────────────────────────────────────────────────────────

export type Project = {
  year: string;
  kind: "Product" | "Research";
  title: string;
  blurb: string;
  stack: string[];
};

export const projects: Project[] = [
  {
    year: "2025",
    kind: "Product",
    title: "AI-Enabled Internal CRM & Decision Support (M&A)",
    blurb:
      "Structured capture → review → decision-trace workflows with AI-assisted insights, RBAC, and audit logging.",
    stack: ["FastAPI", "React/TS", "PostgreSQL", "GCP"],
  },
  {
    year: "2025",
    kind: "Product",
    title: "LLM-Assisted Data Ingestion & Normalization Pipeline",
    blurb:
      "Multi-source ETL with Firestore caching; deployed as scheduled cloud jobs for daily refresh.",
    stack: ["Python", "Pydantic", "Async", "LLM", "GCP"],
  },
  {
    year: "2024",
    kind: "Research",
    title: "Persian Text Sentiment Analysis (Digikala Reviews)",
    blurb:
      "End-to-end pipeline on 67K+ reviews — preprocessing, tokenization, model training, and error analysis.",
    stack: ["PyTorch", "Transformers", "NLP"],
  },
  {
    year: "2024",
    kind: "Research",
    title: "Time-Series Forecasting — Tehran Stock Exchange",
    blurb:
      "Designed, trained, and evaluated RNNs for temporal forecasting with normalization and sequence generation.",
    stack: ["Python", "RNN"],
  },
  {
    year: "2023",
    kind: "Research",
    title: "Blind Source Separation (Audio & Image) — VAE",
    blurb: "Learned latent representations to separate mixed audio and image signals.",
    stack: ["PyTorch", "VAE"],
  },
  {
    year: "2023",
    kind: "Product",
    title: "Hair Salon Reservation & Portfolio Platform",
    blurb:
      "Booking and portfolio dashboards with a multimodal AI assistant for consultations.",
    stack: ["Node.js", "React/TS", "MySQL", "LangGraph"],
  },
  {
    year: "2022",
    kind: "Product",
    title: "Intelligent Book Exchange Social Platform",
    blurb:
      "Graph-based models and hybrid recommendations using NLP-driven sentiment signals.",
    stack: ["Node.js", "Python", "Graph DB"],
  },
];

// ─── Skills ───────────────────────────────────────────────────────────────────

export type SkillGroup = { label: string; items: string[] };

export const skills: SkillGroup[] = [
  {
    label: "Agentic AI & LLM",
    items: ["LangGraph", "Google ADK", "RAG Pipelines", "Prompt Engineering", "Langfuse", "MCP Design"],
  },
  {
    label: "Programming",
    items: ["Python", "FastAPI", "RESTful APIs", "Async / Event-Driven", "React JS / Native"],
  },
  {
    label: "Data",
    items: ["PostgreSQL", "Firestore", "AlloyDB", "Neo4j", "SQL / NoSQL", "ETL Pipelines"],
  },
  {
    label: "Cloud & DevOps",
    items: ["GCP", "Cloud Run", "Vertex AI", "BigQuery", "Cloud SQL", "Docker", "GitHub Actions", "Cloud Build"],
  },
  {
    label: "Languages",
    items: ["English (C1)", "German (A2)", "Persian (Native)"],
  },
  {
    label: "Soft Skills",
    items: [
      "Problem Solver",
      "Clear Communicator",
      "Team Player",
      "Takes Ownership",
      "Fast Learner",
      "Adaptable",
      "Attention to Detail",
      "Self-Motivated",
    ],
  },
];

// ─── Contact ──────────────────────────────────────────────────────────────────

export const contactActions = [
  { label: "Email me", href: `mailto:${identity.email}`, primary: true },
  { label: "Book a call", href: identity.calendly },
  { label: "GitHub", href: identity.github.href },
  { label: "LinkedIn", href: identity.linkedin.href },
];

export const contactMeta = [
  { label: "Email", value: identity.email },
  { label: "Location", value: identity.location },
  { label: "Focus", value: identity.focus },
  { label: "Timezone", value: identity.timezone },
  { label: "Response time", value: identity.responseTime },
  { label: "Collaboration", value: identity.availability },
];
