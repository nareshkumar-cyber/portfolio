export interface SkillCategory {
  id: string;
  number: string;
  name: string;
  tagline: string;
  accentColor: string;
  skills: {
    name: string;
    level: string;
    description: string;
    iconName?: string;
  }[];
}

export const skillsCategories: SkillCategory[] = [
  {
    id: "ai-ml",
    number: "01",
    name: "AI, Machine Learning & Deep Learning",
    tagline: "Statistical Modeling, Neural Networks & Computer Vision",
    accentColor: "#d1ff56",
    skills: [
      { name: "Python", level: "Advanced", description: "Primary programming language for AI modeling, algorithms, data structures, and backend systems." },
      { name: "Machine Learning", level: "Advanced", description: "Supervised and unsupervised learning, classification, regression, clustering, and performance metrics." },
      { name: "Deep Learning", level: "Proficient", description: "Neural network architectures, deep feature representations, optimization algorithms, and loss functions." },
      { name: "TensorFlow", level: "Proficient", description: "Model building, tensor computations, neural training pipelines, and deep learning workflows." },
      { name: "NLP (Natural Language Processing)", level: "Proficient", description: "Tokenization, text normalization, linguistic analysis, speech processing, and semantic extraction." },
      { name: "URL Feature Extraction", level: "Advanced", description: "Lexical, domain-heuristic, and entropy-based feature extraction for threat and phishing classification." }
    ]
  },
  {
    id: "gen-ai",
    number: "02",
    name: "Generative AI, RAG & AI Agents",
    tagline: "LLM Orchestration, Vector Databases & Autonomous Workflows",
    accentColor: "#73e4e8",
    skills: [
      { name: "LLMs (Large Language Models)", level: "Advanced", description: "Prompt engineering, context injection, zero/few-shot reasoning, and structured LLM responses." },
      { name: "RAG (Retrieval-Augmented Generation)", level: "Advanced", description: "End-to-end knowledge pipelines, semantic document chunking, embeddings, and context-aware synthesis." },
      { name: "Vector Databases", level: "Proficient", description: "FAISS, ChromaDB vector indexing, high-throughput cosine similarity retrieval, and knowledge stores." },
      { name: "AI Agents", level: "Proficient", description: "Autonomous task execution, ReAct pattern loops, decision frameworks, and tool-calling agents." },
      { name: "MCP (Model Context Protocol)", level: "Proficient", description: "Context standard protocols, modular tool integration, and seamless agent-to-tool interconnectivity." },
      { name: "Google Gemini API", level: "Advanced", description: "Multimodal AI integration, multilingual intent recognition (Tamil & English), and conversational interfaces." }
    ]
  },
  {
    id: "security-dbms",
    number: "03",
    name: "Cybersecurity & Database Systems",
    tagline: "AI-Driven Security, Threat Analysis & Relational Database Design",
    accentColor: "#a855f7",
    skills: [
      { name: "Cybersecurity Fundamentals", level: "Proficient", description: "Network security analysis, threat vectors, attack surfaces, and defensive security measures." },
      { name: "AI-Driven Security & Phishing Detection", level: "Advanced", description: "Predictive threat detection, malicious URL classification, and automated security safeguards." },
      { name: "Secure Coding & Threat Analysis", level: "Proficient", description: "Input validation, secure API endpoints, vulnerability mitigation, and defensive coding standards." },
      { name: "SQL & Relational DBMS", level: "Advanced", description: "Normalized schema design, multi-table joins, relational constraints, and optimized queries." },
      { name: "Database Design", level: "Advanced", description: "Entity-Relationship modeling, normalization (1NF-3NF), indexing, and ACID transaction reliability." },
      { name: "Supabase", level: "Proficient", description: "Cloud database management, PostgreSQL backend integration, real-time sync, and authentication." }
    ]
  },
  {
    id: "web-tools",
    number: "04",
    name: "Full-Stack Development & Tools",
    tagline: "Flask, Modern Web Interfaces, Git & Speech AI",
    accentColor: "#00f2fe",
    skills: [
      { name: "Flask & Python Backends", level: "Advanced", description: "REST API endpoints, routing, template rendering, session state, and database connectivity." },
      { name: "HTML, CSS & JavaScript", level: "Advanced", description: "Responsive layouts, clean modern DOM scripting, reactive components, and UI styling." },
      { name: "Git & GitHub", level: "Advanced", description: "Version control workflows, commit trees, branching strategies, and repository collaboration." },
      { name: "Speech-to-Text & TTS", level: "Proficient", description: "Spoken audio input transcription, synthetic voice feedback generation, and audio AI pipelines." },
      { name: "Rapid Prototyping", level: "Advanced", description: "Translating ambiguous problem statements into working hackathon prototypes under strict deadlines." },
      { name: "AI Automation", level: "Proficient", description: "Workflow automation, script scheduling, streak monitoring, and intelligent task pipelines." }
    ]
  }
];

export const resumeEducation = {
  degree: "B.Tech – Artificial Intelligence and Data Science",
  period: "2024–2028 (Ongoing)",
  college: "Kathir College of Engineering",
  location: "Coimbatore, Tamil Nadu",
  cgpa: "8.09",
  completedSemesters: "4 semesters completed",
  highlights: "Active in hackathons, technical events, and project-based learning"
};

export const resumeAreasOfInterest = [
  "AI Engineering",
  "AI-Driven Security",
  "Machine Learning",
  "Ethical Hacking",
  "AI Application Development",
  "AI Automation"
];

export const resumeCertifications = [
  { name: "AI Fluency: Framework & Foundations", issuer: "Anthropic", icon: "Sparkles" },
  { name: "Cyber Security Fundamentals – Course 1", issuer: "Completed", icon: "Shield" },
  { name: "Cyber Security Fundamentals – Course 2", issuer: "Completed", icon: "ShieldCheck" },
  { name: "AI Agent (IBM)", issuer: "Batch 1", icon: "Bot" },
  { name: "AI Fundamental (IBM)", issuer: "Batch 2", icon: "Cpu" },
  { name: "Network Security Analysis – Course 1", issuer: "Completed", icon: "Network" }
];
