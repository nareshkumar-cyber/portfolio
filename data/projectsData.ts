export interface Project {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  category: string;
  projectType: string;
  year: string;
  categoryType: "security" | "productivity" | "genai" | "voiceai" | "dbms";
  description: string;
  overview: string;
  problem: string;
  solution: string;
  architectureSteps: string[];
  features: string[];
  technologies: string[];
  challenges: string;
  results: string;
  metrics: { label: string; value: string }[];
  githubUrl?: string;
  demoUrl?: string;
  accentColor: string;
}

export const projectsData: Project[] = [
  {
    id: "phishing-detection",
    number: "01",
    title: "Phishing Website Identification Using Machine Learning",
    subtitle: "High-precision malicious URL classification & domain heuristic analysis",
    category: "AI + Cybersecurity",
    projectType: "Mini Project",
    year: "2025",
    categoryType: "security",
    description: "Classified phishing websites using URL feature analysis and ML-based detection achieving high precision in identifying malicious pages.",
    overview: "With social engineering and credential harvesting attacks escalating, this system conducts automated lexical and domain feature extraction on suspicious URLs to detect malicious websites before users enter sensitive credentials.",
    problem: "Static blocklists and signature-based security filters fail to protect against newly registered, obfuscated, and zero-day phishing links.",
    solution: "Trained machine learning classification models on verified threat feeds by extracting multi-dimensional URL characteristics (entropy, length, token patterns, and domain reputation signals) for rapid classification.",
    architectureSteps: [
      "URL Ingestion & Lexical String Parsing",
      "URL Feature Extraction (Token counts, suspicious keywords, domain attributes)",
      "Feature Normalization & Preprocessing Pipeline",
      "Machine Learning Classifier Engine",
      "High-Precision Malicious vs. Benign Verdict Output"
    ],
    features: [
      "Automated URL feature extraction and parsing pipeline",
      "Machine learning-driven classification with high precision",
      "Detection of obfuscated domains, subdomains, and suspicious character sets",
      "Sub-second response time for threat evaluation"
    ],
    technologies: ["Python", "Machine Learning", "URL Feature Extraction", "Cybersecurity", "Data Analysis"],
    challenges: "Extracting meaningful lexical features from obfuscated URLs without relying on heavy external network queries.",
    results: "Achieved high precision in classifying malicious phishing pages across benchmark datasets, significantly reducing false positives.",
    metrics: [
      { label: "Precision", value: "High Precision" },
      { label: "Feature Extraction", value: "Lexical & Domain" },
      { label: "Target", value: "Malicious URLs" },
      { label: "Year", value: "2025" }
    ],
    githubUrl: "https://github.com/nareshkuar",
    demoUrl: "https://github.com/nareshkuar",
    accentColor: "#00f2fe"
  },
  {
    id: "consistency-tracker",
    number: "02",
    title: "Consistency Tracker",
    subtitle: "Productivity & habit-tracking web application with activity streaks",
    category: "Productivity + Web",
    projectType: "Academic Project",
    year: "2026",
    categoryType: "productivity",
    description: "Developed a productivity and habit-tracking web application to help users maintain daily consistency and monitor activity streaks.",
    overview: "Designed to encourage regular habits and improve productivity, this web application provides task scheduling, progress tracking, streak management, and automated reminders.",
    problem: "Individuals frequently struggle with maintaining daily consistency and tracking multi-day habits due to lack of structured tracking and visual accountability.",
    solution: "Engineered a full-stack Flask and Python web application coupled with a relational database to store user habits, calculate persistent streaks, schedule reminders, and visualize progressive completion.",
    architectureSteps: [
      "Flask Web Server Routing & Session Management",
      "Relational Database Schema for User Habits & Daily Logs",
      "Streak Calculation & Activity Matrix Engine",
      "Task Scheduling & Reminder Service",
      "Responsive HTML/CSS/JavaScript Dashboard UI"
    ],
    features: [
      "Daily activity streak monitoring and consecutive day counters",
      "Automated task scheduling and reminder notifications",
      "Interactive progress tracking with habit completion metrics",
      "Clean, responsive web interface built with HTML, CSS, and JavaScript"
    ],
    technologies: ["Python", "Flask", "HTML", "CSS", "JavaScript", "Database"],
    challenges: "Accurately calculating daily streak logic across timezone changes and date boundaries while keeping database queries lean.",
    results: "Successfully implemented habit monitoring, streak persistence, and scheduling routines that keep users accountable and consistent.",
    metrics: [
      { label: "Architecture", value: "Python + Flask" },
      { label: "Core Feature", value: "Streak Tracking" },
      { label: "Storage", value: "Relational DB" },
      { label: "Year", value: "2026" }
    ],
    githubUrl: "https://github.com/nareshkuar",
    demoUrl: "https://github.com/nareshkuar",
    accentColor: "#d1ff56"
  },
  {
    id: "department-rag-chatbot",
    number: "03",
    title: "Department Knowledge Assistant – RAG-Based Chatbot",
    subtitle: "Retrieval-Augmented Generation chatbot for syllabus, faculty & academic queries",
    category: "Generative AI + RAG",
    projectType: "Solo Academic Project",
    year: "2026",
    categoryType: "genai",
    description: "Built a Retrieval-Augmented Generation (RAG) chatbot to answer student queries on department syllabus, faculty, and academic resources. Designed the document embedding and retrieval pipeline independently, integrating an LLM with a vector database for accurate, context-aware responses.",
    overview: "Navigating department circulars, syllabus details, faculty office hours, and academic guidelines often involves reading dozens of PDFs. This solo project provides students with a conversational assistant grounded directly in verified department documents.",
    problem: "Generic LLMs lack institutional knowledge and hallucinate faculty or syllabus facts, while manual document searches are tedious for students.",
    solution: "Designed and implemented an independent document embedding and retrieval pipeline. Department documents are chunked and vectorized into a vector database, allowing the LLM to synthesize accurate, context-aware answers.",
    architectureSteps: [
      "Department Academic Document Ingestion (Syllabus, Faculty Guides, Resources)",
      "Document Preprocessing & Semantic Chunking",
      "Vector Embedding Generation Pipeline",
      "Vector Database Indexing & Similarity Retrieval",
      "Context-Augmented LLM Prompting & Response Generation"
    ],
    features: [
      "Document embedding and retrieval pipeline designed completely independently",
      "Grounded answers for department syllabus, faculty details, and academic resources",
      "Vector database integration for high-speed semantic similarity matching",
      "Context-aware responses with factual accuracy and minimal hallucination"
    ],
    technologies: ["Python", "RAG", "LLM", "Vector Database", "NLP"],
    challenges: "Designing effective semantic chunking boundaries so complex syllabus tables and faculty schedules maintain proper contextual meaning.",
    results: "Engineered an end-to-end solo RAG pipeline delivering prompt, accurate answers to student department questions with reliable contextual grounding.",
    metrics: [
      { label: "Project Style", value: "Solo Academic" },
      { label: "Pipeline", value: "End-to-End RAG" },
      { label: "Vector Store", value: "Vector DB" },
      { label: "Year", value: "2026" }
    ],
    githubUrl: "https://github.com/nareshkuar",
    demoUrl: "https://github.com/nareshkuar",
    accentColor: "#a855f7"
  },
  {
    id: "voice-food-ordering",
    number: "04",
    title: "AI-Based Voice-Controlled Food Ordering System",
    subtitle: "Bilingual (Tamil & English) conversational voice AI agent powered by Gemini API",
    category: "Voice AI + Gemini API",
    projectType: "Hackathon Project",
    year: "2025",
    categoryType: "voiceai",
    description: "Developed a bilingual (Tamil & English) voice AI agent using Gemini for intent recognition and food item extraction from spoken commands. Designed conversational ordering flow with menu suggestions, confirmation, and accessibility-focused smart processing.",
    overview: "Built during an inter-college hackathon under strict time pressure, this project demonstrates rapid prototyping, multimodal speech processing, and LLM integration for an intuitive, accessible voice-ordering experience.",
    problem: "Traditional app ordering interfaces create barriers for non-tech-savvy users or regional language speakers who prefer speaking naturally in their native tongue.",
    solution: "Integrated Speech-to-Text with the Google Gemini API to extract food items, quantities, and user preferences from natural spoken sentences in both Tamil and English, returning audio TTS and visual confirmations.",
    architectureSteps: [
      "Microphone Audio Stream Capture & Speech-to-Text Transcription",
      "Bilingual Intent Recognition via Google Gemini API",
      "Menu Entity Extraction (Items, Quantities, Customizations)",
      "Conversational Flow Manager (Confirmation, Suggestions, Cart)",
      "Text-to-Speech (TTS) Voice Synthesis & Visual Display Feedback"
    ],
    features: [
      "Bilingual voice support in both Tamil and English",
      "Google Gemini API integration for spoken intent recognition and item extraction",
      "Smart conversational ordering flow with dynamic menu suggestions and confirmation",
      "Accessibility-focused design enabling hands-free, intuitive interactions"
    ],
    technologies: ["Google Gemini API", "Python", "Speech-to-Text", "TTS", "NLP"],
    challenges: "Accurately handling bilingual code-switching (mixing Tamil and English phrases) during live speech intent parsing under hackathon time limits.",
    results: "Built a fully functioning prototype under time pressure, presenting successfully to technical panels and proving rapid prototyping capabilities.",
    metrics: [
      { label: "Languages", value: "Tamil & English" },
      { label: "Core Model", value: "Google Gemini API" },
      { label: "Event", value: "Inter-College Hackathon" },
      { label: "Year", value: "2025" }
    ],
    githubUrl: "https://github.com/nareshkuar",
    demoUrl: "https://github.com/nareshkuar",
    accentColor: "#f59e0b"
  },
  {
    id: "crime-details-store",
    number: "05",
    title: "Crime Details Store – DBMS Project",
    subtitle: "Normalized relational database system for crime case records & reporting",
    category: "DBMS + Database Design",
    projectType: "Academic Project",
    year: "2026",
    categoryType: "dbms",
    description: "Designed a normalized relational database with SQL-based queries to store, retrieve, and report crime case details including suspects, victims, and case status.",
    overview: "A comprehensive database engineering project focused on structuring, securing, and querying criminal investigation records with relational integrity, indexing, and multi-parameter reporting.",
    problem: "Unstructured crime records lead to data redundancy, inconsistent suspect profiles, and slow cross-referencing during investigations.",
    solution: "Architected a normalized relational database schema (3NF) with optimized SQL queries and Python connectivity to manage case records, suspect registries, victim records, and case status updates.",
    architectureSteps: [
      "Entity-Relationship (ER) Modeling & Attribute Mapping",
      "Schema Normalization (1NF, 2NF, 3NF) for Zero Redundancy",
      "SQL Table Creation with Foreign Key & Integrity Constraints",
      "Python Database Connectivity Layer",
      "Multi-Condition Query Engine for Suspect, Victim & Case Reporting"
    ],
    features: [
      "Normalized relational database architecture with strict data integrity",
      "Comprehensive tracking of suspects, victims, evidence, and case status",
      "SQL-based querying for instant case lookups and analytical reporting",
      "Python integration for data ingestion and report generation"
    ],
    technologies: ["SQL", "DBMS", "Database Design", "Python"],
    challenges: "Designing foreign key constraints and cascade rules that accurately model multi-suspect and multi-victim cases without orphaned records.",
    results: "Delivered a rock-solid, normalized database model with swift query execution times across complex joins and filtered case reports.",
    metrics: [
      { label: "Design", value: "Normalized (3NF)" },
      { label: "Querying", value: "SQL-Based" },
      { label: "Domain", value: "Crime Details Store" },
      { label: "Year", value: "2026" }
    ],
    githubUrl: "https://github.com/nareshkuar",
    demoUrl: "https://github.com/nareshkuar",
    accentColor: "#38bdf8"
  }
];
