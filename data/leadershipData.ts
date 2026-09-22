export interface LeadershipRole {
  id: string;
  title: string;
  roleType: string;
  highlight: string;
  badge: string;
  period?: string;
  description: string;
  metrics: string;
  responsibilities: string[];
  skillsDemonstrated: string[];
  icon: string;
  nodePosition: { x: number; y: number };
}

export const leadershipData: LeadershipRole[] = [
  {
    id: "internship",
    title: "Offensive Cyber Security & Python Intern",
    roleType: "InLighnX Global Pvt. Ltd. & Litz Tech",
    highlight: "Multiple Security Internships",
    badge: "INTERNSHIP",
    period: "May 2026 – June 2026 & Dec 2025",
    description: "Completed offensive cyber security and Python development internships focusing on threat analysis, custom security scripting, subdomain enumeration, and network defense tools.",
    metrics: "Threat Analysis & Automated Scripting",
    responsibilities: [
      "Engineered Python security automation for subdomain enumeration, PDF security, and network scanning",
      "Conducted authentication vulnerability assessments and socket-level network monitoring",
      "Implemented secure coding standards and DNS resolution discovery workflows",
      "Completed intensive cybersecurity training at InLighnX Global (ITID6620) and Litz Tech (LITZC1900)"
    ],
    skillsDemonstrated: ["Python Scripting", "Offensive Security", "Vulnerability Analysis", "Network Security"],
    icon: "ShieldCheck",
    nodePosition: { x: 20, y: 22 }
  },
  {
    id: "hackathons",
    title: "Hackathon Competitor & Prototyper",
    roleType: "Competitive Engineering & Rapid Prototyping",
    highlight: "National Level Hackathons",
    badge: "HACKATHONS",
    period: "2025 – Present",
    description: "Competed in prestigious collegiate hackathons including HACKZEN'26 at PPG Institute of Technology and Science Day at KPR Institute, pitching AI MVPs under high velocity.",
    metrics: "Bilingual Voice AI & Rapid MVPs",
    responsibilities: [
      "Architected bilingual (Tamil & English) Gemini-powered Voice AI ordering agents with low-latency TTS",
      "Engineered working full-stack and AI prototypes within strict 24-48h competitive deadlines",
      "Presented technical solutions, model architectures, and live demonstrations to judging panels",
      "Awarded certificates of appreciation and participation at HACKZEN'26 and KPRIET Science Day"
    ],
    skillsDemonstrated: ["Rapid Prototyping", "Google Gemini API", "Speech AI", "Technical Pitching"],
    icon: "Trophy",
    nodePosition: { x: 80, y: 22 }
  },
  {
    id: "academic-lead",
    title: "AI & Data Science Student Leader",
    roleType: "Kathir College of Engineering",
    highlight: "CGPA 8.09 (4 Semesters)",
    badge: "ACADEMIC EXCELLENCE",
    period: "2024 – 2028 (Ongoing)",
    description: "Pursuing B.Tech in Artificial Intelligence and Data Science at Kathir College of Engineering, Coimbatore. Consistent top academic performer across 4 semesters.",
    metrics: "CGPA: 8.09 • 4 Semesters Completed",
    responsibilities: [
      "Maintained consistent high-tier academic performance with an 8.09 CGPA across 4 completed semesters",
      "Actively participated in collegiate tech symposia, coding hackathons, and Department initiatives",
      "Collaborated with faculty and peers on practical RAG architectures and machine learning systems",
      "Mentored peers in Python programming, relational database schemas, and AI agent frameworks"
    ],
    skillsDemonstrated: ["AI & Data Science", "Continuous Learning", "Team Collaboration", "Technical Leadership"],
    icon: "GraduationCap",
    nodePosition: { x: 22, y: 78 }
  },
  {
    id: "project-architect",
    title: "End-to-End System Architect",
    roleType: "Academic & Solo Production Systems",
    highlight: "5+ Flagship Systems Built",
    badge: "5+ PROJECTS",
    period: "2024 – 2026",
    description: "Engineered 5+ specialized production systems spanning Machine Learning phishing detection, Department RAG Chatbot, Voice AI, Flask apps, and normalized SQL stores.",
    metrics: "5 Technical Systems Delivered",
    responsibilities: [
      "Independently engineered document embedding and retrieval pipelines for the Department RAG Chatbot",
      "Trained ML models for high-precision phishing website identification using URL feature extraction",
      "Developed full-stack habit tracking web applications with Flask, HTML/CSS/JS, and databases",
      "Architected 3NF normalized relational database schemas with multi-criteria analytical queries"
    ],
    skillsDemonstrated: ["RAG Pipelines", "ML Classification", "Full-Stack Flask", "Relational DBMS"],
    icon: "Layers",
    nodePosition: { x: 78, y: 78 }
  }
];

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  issueDate: string;
  period?: string;
  status: string;
  category: "AI & Cloud" | "Cyber Security" | "Hackathons & Innovation" | "Internships";
  badgeColor: string;
  file: string;
  previewImage: string;
  type: "pdf" | "image";
  credentialId?: string;
  verificationUrl?: string;
  description: string;
  skills: string[];
}

export const certificationsData: Certification[] = [
  {
    id: "anthropic-ai-fluency",
    title: "AI Fluency: Framework & Foundations",
    issuer: "Anthropic",
    issueDate: "2026",
    status: "Verified Credential",
    category: "AI & Cloud",
    badgeColor: "#d1ff56",
    file: "/certificates/anthropic_ai_fluency.pdf",
    previewImage: "/certificates/previews/anthropic_ai_fluency.png",
    type: "pdf",
    description: "Official credential by Anthropic covering foundational AI frameworks, LLM capabilities, responsible AI deployment, and human-AI collaboration.",
    skills: ["Anthropic", "Generative AI", "LLMs", "AI Ethics", "AI Literacy"]
  },
  {
    id: "cisco-ibm-ai",
    title: "AI Fundamentals: Language and Vision in AI",
    issuer: "Cisco Networking Academy & IBM SkillsBuild",
    issueDate: "Aug 09, 2026",
    status: "Verified Credential",
    category: "AI & Cloud",
    badgeColor: "#00f2fe",
    file: "/certificates/ai_certificate.pdf",
    previewImage: "/certificates/previews/ai_certificate.png",
    type: "pdf",
    description: "Credential in AI Fundamentals covering natural-language queries, AI ethics, LLM architectures, computer vision, Google Gemini visual asset generation, and AI agent frameworks.",
    skills: ["Generative AI", "Google Gemini", "Computer Vision", "NLP", "AI Agents"]
  },
  {
    id: "aws-cloud-internship",
    title: "AWS Cloud Computing Virtual Internship",
    issuer: "NASSCOM FutureSkills Prime & SmartBridge",
    credentialId: "VIP-AWSCC-2026-1155",
    issueDate: "March 13, 2026",
    period: "Jan 09, 2026 – Mar 10, 2026",
    status: "Completed",
    category: "AI & Cloud",
    badgeColor: "#d1ff56",
    file: "/certificates/ibm_ai_fundamentals.pdf",
    previewImage: "/certificates/previews/ibm_ai_fundamentals.png",
    type: "pdf",
    description: "Hands-on virtual internship program on AWS Cloud Computing, applying core AWS infrastructure services, security models, and cloud architectural patterns.",
    skills: ["AWS Cloud", "Cloud Computing", "Infrastructure", "Virtual Internship"]
  },
  {
    id: "inlighnx-offensive-cyber",
    title: "Offensive Cyber Security Internship",
    issuer: "InLighnX Global Pvt. Ltd.",
    credentialId: "ITID6620",
    issueDate: "June 20, 2026",
    period: "20/05/2026 – 20/06/2026",
    status: "Completed",
    category: "Internships",
    badgeColor: "#a855f7",
    file: "/certificates/internship_certificate.pdf",
    previewImage: "/certificates/previews/internship_certificate.png",
    type: "pdf",
    description: "1-month intensive offensive cybersecurity internship building Python automation for subdomain enumeration, PDF security analysis, socket programming, and port scanning.",
    skills: ["Python Scripting", "Offensive Security", "Port Scanning", "Socket Programming", "Vulnerability Analysis"]
  },
  {
    id: "nasscom-network-security",
    title: "Network Security Engineer",
    issuer: "NASSCOM / Skill India Digital Hub (NSDC)",
    issueDate: "Aug 02, 2026",
    status: "Government Verified",
    category: "Cyber Security",
    badgeColor: "#38bdf8",
    file: "/certificates/networking_certificate.pdf",
    previewImage: "/certificates/previews/networking_certificate.png",
    type: "pdf",
    description: "National skilling certification offered by IT-ITeS SSC NASSCOM in Network Security Engineering, network traffic defense, and infrastructure security.",
    skills: ["Network Security", "Protocol Analysis", "Network Defense", "Threat Mitigation"]
  },
  {
    id: "greatlearning-intro-cyber",
    title: "Introduction to Cyber Security",
    issuer: "Great Learning",
    credentialId: "TCKKJDQZ",
    verificationUrl: "https://www.mygreatlearning.com/certificate/TCKKJDQZ",
    issueDate: "October 27, 2025",
    status: "Verified",
    category: "Cyber Security",
    badgeColor: "#10b981",
    file: "/certificates/cyber_security_course_1.pdf",
    previewImage: "/certificates/previews/cyber_security_course_1.png",
    type: "pdf",
    description: "Foundations of information security, cryptographic basics, attack surfaces, threat vectors, and organizational security policies.",
    skills: ["Cyber Security", "Information Security", "Threat Vectors"]
  },
  {
    id: "gfg-cyber-security",
    title: "Cyber Security – Skill Up",
    issuer: "GeeksforGeeks & Nation SkillUp",
    issueDate: "2025",
    status: "Completed",
    category: "Cyber Security",
    badgeColor: "#22c55e",
    file: "/certificates/cyber_security_course_2.pdf",
    previewImage: "/certificates/previews/cyber_security_course_2.png",
    type: "pdf",
    description: "Coursework by GeeksforGeeks covering core cybersecurity tenets, vulnerability identification, and secure coding practices.",
    skills: ["Cyber Security", "Secure Coding", "Vulnerability Defense"]
  },
  {
    id: "litztech-cyber-internship",
    title: "Cyber Security Internship",
    issuer: "Litz Tech",
    credentialId: "LITZC1900 / LITZS1900",
    issueDate: "December 2025",
    period: "15 Dec 2025 – 27 Dec 2025",
    status: "Completed",
    category: "Internships",
    badgeColor: "#f59e0b",
    file: "/certificates/naresh_kumar_course.pdf",
    previewImage: "/certificates/previews/naresh_kumar_course.png",
    type: "pdf",
    description: "Onsite industry internship covering foundational cyber security defense principles, threat isolation, and organizational digital asset protection.",
    skills: ["Cyber Security", "Incident Handling", "Industry Internship"]
  },
  {
    id: "ppg-hackzen26",
    title: "HACKZEN’26 National Tech Fest",
    issuer: "PPG Institute of Technology & Noukha",
    issueDate: "2026",
    status: "Appreciation",
    category: "Hackathons & Innovation",
    badgeColor: "#ec4899",
    file: "/certificates/hackathon_certificate.pdf",
    previewImage: "/certificates/previews/hackathon_certificate.png",
    type: "pdf",
    description: "Certificate of Appreciation for competing at the National Level Tech Fest HACKZEN'26 conducted by the Dept of Artificial Intelligence & Data Science.",
    skills: ["Competitive Prototyping", "Hackathons", "Rapid MVPs", "Collaboration"]
  },
  {
    id: "kpr-science-day",
    title: "Science Day Celebrations 2025",
    issuer: "KPR Institute of Engineering & Technology",
    issueDate: "February 21, 2025",
    status: "Participation",
    category: "Hackathons & Innovation",
    badgeColor: "#eab308",
    file: "/certificates/hackathon_award_photo.jpg",
    previewImage: "/certificates/previews/hackathon_award_photo.jpg",
    type: "image",
    description: "Certificate of Participation in Science Day Celebrations technical events, STEM Lab challenges, and engineering exhibits at KPRIET.",
    skills: ["STEM Innovation", "Technical Exhibition", "Presentation"]
  },
  {
    id: "ewb-ai-agents-internship",
    title: "Future AI Agents Internship Offer",
    issuer: "EWB Edutech (AICTE Approved / National Internship Portal)",
    credentialId: "STU69f0d8c3e0cb01777391811",
    issueDate: "September 18, 2026",
    status: "Selected",
    category: "AI & Cloud",
    badgeColor: "#8b5cf6",
    file: "/certificates/internship_offer_letter.pdf",
    previewImage: "/certificates/previews/internship_offer_letter.png",
    type: "pdf",
    description: "Official AICTE-verified selection offer for the Future AI Agents Internship, targeting autonomous LLM agents, prompt pipelines, and multi-agent coordination.",
    skills: ["AI Agents", "Autonomous Systems", "AICTE National Portal"]
  }
];

export const impactMetrics = [
  { value: 8.09, suffix: "", isDecimal: true, label: "Current CGPA", desc: "4 semesters completed at Kathir College of Engineering" },
  { value: 5, suffix: "+", label: "Flagship Projects", desc: "RAG, Machine Learning, Gemini Voice AI, Flask & DBMS" },
  { value: 11, suffix: "+", label: "Verified Credentials", desc: "Anthropic, Cisco, IBM, AWS Cloud, NASSCOM, Offensive Security & GfG" },
  { value: 2, suffix: "+", label: "Security Internships", desc: "InLighnX Global & Litz Tech + AWS Cloud Virtual Internship" }
];
