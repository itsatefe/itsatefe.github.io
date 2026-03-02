export const profile = {
  name: "Atefe Rajabi",
  title: "AI Backend Developer",
  location: "Istanbul, Turkiye",
  email: "atefe.rajabi.78@gmail.com",
  github: "https://github.com/itsatefe",
  linkedin: "https://linkedin.com/in/atefe-rajabi78",
  summary:
    "AI Backend Developer with 3+ years building and deploying scalable analytics and ML systems in cloud environments. Strong in FastAPI, Node.js, SQL/NoSQL, containerized deployments, and LLM integrations.",
};

export const experiences = [
  {
    role: "Applied AI & Full-Stack Engineer",
    company: "ShortPartners — B2B Investment & M&A Platform",
    location: "Sydney (Remote)",
    period: "Aug 2025 – Feb 2026",
    brief: "Led GCP analytics systems and LLM pipelines for M&A workflows.",
    keywords: ["GCP", "FastAPI", "LLMs", "Cloud Run", "Docker", "Firestore"],
    bullets: [
      "Architected cloud-native analytics systems on GCP with scalable service boundaries.",
      "Built LLM-driven pipelines to aggregate and standardize multi-source data.",
      "Developed high-performance FastAPI services and deployed via Docker to Cloud Run.",
      "Designed data architecture across Cloud Storage, Firestore, and Cloud SQL.",
      "Cut manual operational workload ~50% via automation of AI-assisted workflows.",
    ],
  },
  {
    role: "Research Assistant (Artificial Intelligence)",
    company: "Shiraz University",
    location: "Shiraz",
    period: "Sep 2023 – 2025",
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
    location: "Remote",
    period: "Jun 2021 – Sep 2023",
    brief: "Delivered NLP/ML services and applied ML to business workflows.",
    keywords: ["NLP", "REST APIs", "ML", "Analytics"],
    bullets: [
      "Delivered production NLP/ML services behind RESTful APIs.",
      "Implemented shopping-pattern analysis for data-driven cross-sell strategies.",
      "Built supervised models for road-condition classification to prioritize maintenance.",
    ],
  },
  {
    role: "Junior Back-End Developer",
    company: "TebOnco",
    location: "Remote",
    period: "Sep 2020 – Jun 2021",
    brief: "Optimized healthcare APIs and database performance.",
    keywords: ["REST APIs", "SQL", "Caching", "Testing"],
    bullets: [
      "Optimized RESTful APIs and SQL workflows for healthcare systems.",
      "Reduced DB response times by 40% via indexing and caching.",
      "Introduced automated testing to improve reliability.",
    ],
  },
];

export const projects = [
  {
    title: "AI-Enabled Internal CRM & Decision Support (M&A)",
    stack: ["FastAPI", "React/TS", "PostgreSQL", "GCP"],
    detail:
      "Structured capture -> review -> decision-trace workflows with AI-assisted insights, RBAC, and audit logging.",
  },
  {
    title: "LLM-Assisted Data Ingestion & Normalization Pipeline",
    stack: ["Python", "Pydantic", "Async", "LLM", "GCP"],
    detail:
      "Multi-source ETL with caching via Firestore; deployed as scheduled cloud jobs for daily refresh.",
  },
  {
    title: "Persian Text Sentiment Analysis (Digikala Reviews)",
    stack: ["PyTorch", "Transformers", "NLP"],
    detail:
      "End-to-end pipeline on 67K+ reviews; preprocessing, tokenization, model training, and error analysis.",
  },
  {
    title: "Time-Series Forecasting — Tehran Stock Exchange",
    stack: ["Python", "RNN"],
    detail:
      "Designed, trained, and evaluated RNNs for temporal forecasting with normalization and sequence generation.",
  },
  {
    title: "Blind Source Separation (Audio & Image) — VAE",
    stack: ["PyTorch", "VAE"],
    detail:
      "Learned latent representations to separate mixed audio/image signals.",
  },
  {
    title: "Hair Salon Reservation & Portfolio Platform",
    stack: ["Node.js", "React/TS", "MySQL", "LangGraph"],
    detail:
      "Booking and portfolio dashboards; multimodal AI assistant for consultations.",
  },
  {
    title: "Intelligent Book Exchange Social Platform",
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
    period: "2023 – 2025",
    details: [
      "Advanced AI coursework and research focus.",
      "Applied machine learning and deep learning methodologies.",
    ],
  },
  {
    degree: "BSc in Software Engineering",
    school: "Persian Gulf University",
    period: "2017 – 2021",
    details: [
      "Core software engineering foundations and systems design.",
      "Project-based coursework in web and backend development.",
    ],
  },
];
