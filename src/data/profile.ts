export const profile = {
  name: "Atefe Rajabi",
  title: "AI Backend Developer",
  location: "Yerevan, Armenia",
  email: "atefe.rajabi.78@gmail.com",
  github: "https://github.com/itsatefe",
  linkedin: "https://linkedin.com/in/atefe-rajabi78",
  summary: `I build AI-driven systems that translate ideas into usable products. I'm motivated by creating tools that improve decision-making and reduce unnecessary complexity.

I adapt quickly to new technologies and enjoy learning by building. I'm comfortable working in evolving environments where experimentation and iteration are part of the process. I approach problems analytically and creatively, and I stay persistent until I understand the root cause, especially when debugging complex systems.

I'm particularly interested in product-focused teams that integrate AI into meaningful applications rather than treating technology as an end in itself.

Beyond my work, I'm curious about different cultures and perspectives. Learning languages and engaging with international environments has always been important to me, both personally and professionally.`,
};

export const experiences = [
  {
    role: "AI Engineer",
    company: "Mithra-AI Solutions - B2B Intelligent Procurement Data Analytics",
    website: "https://www.mithra-ai.com/",
    companyLocation: "Amsterdam, Netherlands",
    location: "On-site (Yerevan, Armenia)",
    period: "Mar 2026 – Present",
    brief: "Building LLM agents to automate spend classification, supplier normalization, and procurement analytics for enterprise clients.",
    keywords: ["LLMs", "FastAPI", "Python", "GCP", "Vertex AI", "Google ADK", "Chat Agents", "MCP Design"],
    bullets: [
      "Engineered intelligent features for identifying procurement cost optimization opportunities for B2B clients.",
      "Built an internal agent chat analytics tool to detect unmet customer needs and response quality gaps using LLM pipelines.",
      "Developed an MCP server connecting Claude to internal data, enabling non-technical stakeholders to explore chat history and engagement metrics through natural language.",
      "Implemented structured querying over agent interactions to support LLM evaluation.",
    ],
  },
  {
    role: "Applied AI & Full-Stack Engineer",
    company: "ShortPartners - B2B Investment & M&A Platform",
    website: "https://shortpartners.com.au/",
    companyLocation: "Sydney, Australia",
    location: "Remote",
    period: "Aug 2025 - Feb 2026",
    brief: "Led GCP analytics systems and LLM pipelines for M&A workflows.",
    keywords: ["GCP", "FastAPI", "LLMs", "Cloud Run", "Docker", "Firestore"],
    bullets: [
      "Built AI-driven software solutions for mergers and acquisitions (M&A) operations and investment analysis.",
      "Developed and deployed an AI-powered financial analytics platform using Python, FastAPI, React, and PostgreSQL on GCP.",
      "Engineered LLM-driven lead analysis workflows to automate investment opportunity evaluations.",
      "Designed a multi-tenant CRM with role-based access control (RBAC) for secure management of acquisition pipelines.",
      "Achieved an ~80% reduction in manual operational workload through AI-driven automation.",
    ],
  },
  {
    role: "Research Assistant (Artificial Intelligence)",
    company: "Shiraz University",
    website: "https://shirazu.ac.ir/en",
    companyLocation: "Shiraz, Iran",
    location: "Shiraz",
    period: "Sep 2023 - 2025",
    brief: "Benchmarked ML models and productionized research with FastAPI.",
    keywords: ["FastAPI", "ML Evaluation", "Cloud Scheduler", "Dash"],
    bullets: [
      "Benchmarked ML algorithms for performance and robustness.",
      "Served research models through FastAPI for scalable deployment.",
      "Automated retraining and batch workflows using Cloud Scheduler.",
      "Built Dash dashboards to visualize model performance and insights.",
    ],
  },
  {
    role: "Freelance AI & Software Developer",
    company: "Remote",
    website: null,
    companyLocation: "Remote",
    location: "Remote",
    period: "Jun 2021 - Sep 2023",
    brief: "Delivered NLP/ML services and applied ML to business workflows.",
    keywords: ["NLP", "REST APIs", "ML", "Analytics"],
    bullets: [
      "Delivered production NLP/ML services behind RESTful APIs.",
      "Implemented shopping-pattern analysis for data-driven cross-sell strategies.",
      "Built supervised models for road-condition classification to prioritize maintenance.",
    ],
  },
  {
    role: "Back-End Developer",
    company: "TebOnco",
    website: "https://www.linkedin.com/company/gr-holdings/",
    companyLocation: "Shiraz, Iran",
    location: "On-site",
    period: "Sep 2020 - Jun 2021",
    brief: "Optimized healthcare APIs and database performance.",
    keywords: ["REST APIs", "SQL", "Caching", "Testing"],
    bullets: [
      "Engineered production-grade REST APIs for a healthcare patient–doctor platform.",
      "Improved system performance by ~40% through advanced query optimization, indexing strategies, and caching mechanisms.",
      "Built automated unit and integration testing pipelines to improve reliability.",
    ],
  },
];

export const projects = [
  {
    title: "AI-Enabled Internal CRM & Decision Support (M&A)",
    type: "Product",
    year: "2025",
    stack: ["FastAPI", "React/TS", "PostgreSQL", "GCP"],
    detail:
      "Structured capture -> review -> decision-trace workflows with AI-assisted insights, RBAC, and audit logging.",
  },
  {
    title: "LLM-Assisted Data Ingestion & Normalization Pipeline",
    type: "Product",
    year: "2025",
    stack: ["Python", "Pydantic", "Async", "LLM", "GCP"],
    detail:
      "Multi-source ETL with caching via Firestore; deployed as scheduled cloud jobs for daily refresh.",
  },
  {
    title: "Persian Text Sentiment Analysis (Digikala Reviews)",
    type: "Research",
    year: "2024",
    stack: ["PyTorch", "Transformers", "NLP"],
    detail:
      "End-to-end pipeline on 67K+ reviews; preprocessing, tokenization, model training, and error analysis.",
  },
  {
    title: "Time-Series Forecasting - Tehran Stock Exchange",
    type: "Research",
    year: "2024",
    stack: ["Python", "RNN"],
    detail:
      "Designed, trained, and evaluated RNNs for temporal forecasting with normalization and sequence generation.",
  },
  {
    title: "Blind Source Separation (Audio & Image) - VAE",
    type: "Research",
    year: "2023",
    stack: ["PyTorch", "VAE"],
    detail:
      "Learned latent representations to separate mixed audio/image signals.",
  },
  {
    title: "Hair Salon Reservation & Portfolio Platform",
    type: "Product",
    year: "2023",
    stack: ["Node.js", "React/TS", "MySQL", "LangGraph"],
    detail:
      "Booking and portfolio dashboards; multimodal AI assistant for consultations.",
  },
  {
    title: "Intelligent Book Exchange Social Platform",
    type: "Product",
    year: "2022",
    stack: ["Node.js", "Python", "Graph DB"],
    detail:
      "Graph-based models and hybrid recommendations using NLP-driven sentiment signals.",
  },
];

export const skills = {
  core: [
    "FastAPI",
    "Node.js",
    "Python",
    "TypeScript",
    "RESTful APIs",
    "Microservices",
    "Docker",
    "Kubernetes",
  ],
  soft: [
    "Creative Problem Solving",
    "Clear Communication",
    "Team Collaboration",
    "Ownership Mindset",
    "Fast Learner",
    "Adaptable to Fast-paced Environments",
    "Attention to Detail",
    "Industriousness",
  ],
  data: [
    "SQL/NoSQL",
    "BigQuery",
    "Cloud SQL",
    "Firestore",
    "Data Modeling",
    "ETL Pipelines",
  ],
  cloud: ["GCP", "Cloud Run", "Cloud Build", "GitHub Actions", "CI/CD"],
  ai: ["LLM Integration (Gemini/GPT/Claude)", "NLP", "Deep Learning", "Feature Engineering"],
  testing: ["PyTest", "Unit and Integration Testing", "Observability"],
  languages: ["English (C1)", "Persian (Native)", "German (A2)"],
};

export const education = [
  {
    degree: "MSc in Artificial Intelligence",
    school: "Shiraz University",
    period: "2023 - 2025",
    details: [
      "Advanced AI coursework and research focus.",
      "Applied machine learning and deep learning methodologies.",
    ],
    courses: [
      "Optimization Algorithms",
      "Deep Learning",
      "Machine Learning",
      "Mathematics in AI",
      "Research Methods",
    ],
    finalProject: {
      title: "Thesis",
      bullets: [
        "An interpretable causal discovery algorithm",
        "Neural flows",
        "Kolmogorov-Arnold networks",
      ],
    },
  },
  {
    degree: "BSc in Software Engineering",
    school: "Persian Gulf University",
    period: "2017 - 2021",
    details: [
      "Core software engineering foundations and systems design.",
      "Project-based coursework in web and backend development.",
    ],
    courses: [
      "Internet Engineering (Full-Stack Development)",
      "Reinforcement Learning",
      "Neural Networks",
      "Data Mining",
      "Natural Language Processing",
    ],
    finalProject: {
      title: "Final Project",
      bullets: [
        "Movie Recommendation System Website",
        "Recommender Systems",
        "KNNs",
        "Full Stack Development",
        "Asp .NET MVC",
        "HTML, CSS, jQuery, Bootstrap",
      ],
    },
    awards: [
      "Exceptional Talented Student Award",
      "First Rank Student Award",
    ],
  },
];
