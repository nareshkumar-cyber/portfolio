"use client";

import React, { useState, useEffect, useRef } from "react";
import { Terminal as TerminalIcon, RotateCcw } from "lucide-react";

interface TerminalLog {
  id: string;
  type: "command" | "response" | "system" | "success" | "warn";
  text: string;
}

const defaultCommands = [
  "whoami",
  "education()",
  "load_projects()",
  "analyze_skills()",
  "certifications()",
  "internship()",
  "contact()",
];

const commandOutputs: Record<string, string[]> = {
  "whoami": [
    "NARESHKUMAR A",
    "• Degree: B.Tech – Artificial Intelligence and Data Science (2024–2028 Ongoing)",
    "• Institution: Kathir College of Engineering, Coimbatore, Tamil Nadu",
    "• CGPA: 8.09 — 4 Semesters Completed",
    "• Summary: AI & Data Science student passionate about modern AI & Innovation.",
    "  Exploring Generative AI, ML, RAG, AI Agents, and Cybersecurity."
  ],
  "education()": [
    "🎓 Academic Record & Education:",
    "• Degree: B.Tech in Artificial Intelligence & Data Science",
    "• College: Kathir College of Engineering, Coimbatore, Tamil Nadu",
    "• Duration: 2024 – 2028 (Ongoing)",
    "• Performance: CGPA 8.09 (4 Semesters Completed)",
    "• Activities: Active in hackathons, technical events, and project-based learning."
  ],
  "load_projects()": [
    "📦 Verified Flagship Repositories & Implementations:",
    "01. [CYBERSECURITY + ML] Phishing Website Identification Using ML (2025)",
    "    URL feature analysis & ML-based detection with high precision.",
    "02. [WEB + PRODUCTIVITY] Consistency Tracker (2026)",
    "    Python, Flask, HTML/CSS/JS, relational DB, task scheduling & streak engine.",
    "03. [GENAI + RAG]       Department Knowledge Assistant RAG Chatbot (2026)",
    "    Solo academic project, independent document embedding & vector DB pipeline.",
    "04. [VOICE AI + GEMINI] Voice-Controlled Food Ordering System (2025)",
    "    Bilingual (Tamil & English) Gemini voice agent with item extraction & TTS.",
    "05. [DBMS + SQL]         Crime Details Store (2026)",
    "    Normalized relational schema (3NF) for suspects, victims & case reporting."
  ],
  "analyze_skills()": [
    "📊 Core Technical Capabilities Matrix:",
    "• Programming & ML: Python, Machine Learning, Deep Learning, TensorFlow, NLP",
    "• Generative AI & Agents: LLMs, RAG Pipelines, Vector Databases, AI Agents, MCP, Gemini API",
    "• Security: Cybersecurity Fundamentals, AI-Driven Security, Phishing Detection, Threat Analysis",
    "• Database & Backend: SQL, Relational DBMS Design, Supabase, Flask, HTML/CSS/JS, Git/GitHub"
  ],
  "certifications()": [
    "📜 10 Verified Industry Credentials & Honors:",
    "01. [AI]        AI Fundamentals: Language & Vision in AI — Cisco & IBM SkillsBuild (Aug 2026)",
    "02. [CLOUD]     AWS Cloud Computing Virtual Internship — NASSCOM & SmartBridge (Mar 2026)",
    "03. [SECURITY]  Offensive Cyber Security Intern — InLighnX Global Pvt. Ltd. (Jun 2026)",
    "04. [SECURITY]  Network Security Engineer — NASSCOM & Skill India Digital Hub (Aug 2026)",
    "05. [SECURITY]  Introduction to Cyber Security — Great Learning (Oct 2025)",
    "06. [SECURITY]  Cyber Security - Skill Up — GeeksforGeeks & Nation SkillUp (2025)",
    "07. [SECURITY]  Cyber Security Internship — Litz Tech, Coimbatore (Dec 2025)",
    "08. [HACKATHON] HACKZEN'26 National Level Tech Fest — PPG Institute of Technology & Noukha (2026)",
    "09. [HONOR]     Science Day Celebrations 2025 — KPR Institute of Engineering & Technology (Feb 2025)",
    "10. [AI AGENTS] Future AI Agents Internship Offer — EWB Edutech (AICTE Approved, Sep 2026)",
    "💡 All documents archived and inspectable in Section 05: Credentials Vault."
  ],
  "internship()": [
    "💼 Professional Internships & Industry Experience:",
    "• InLighnX Global Pvt. Ltd. (May 2026 – June 2026):",
    "  Offensive Cyber Security Intern (ITID6620) — Python security tooling, subdomain enumeration, port scanning & threat analysis.",
    "• Litz Tech (Dec 2025):",
    "  Cyber Security Intern (LITZC1900) — System defense, network asset auditing & secure practices.",
    "• SmartBridge & NASSCOM FutureSkills Prime (Jan 2026 – Mar 2026):",
    "  AWS Cloud Computing Virtual Intern (VIP-AWSCC-2026-1155) — Cloud architecture & services deployment.",
    "• EWB Edutech (Sep 2026):",
    "  Selected via AICTE National Internship Portal for Future AI Agents Internship."
  ],
  "contact()": [
    "📡 Direct Transmission Telemetry:",
    "• Email: nk6404250@gmail.com",
    "• Phone: +91 9363728989",
    "• Location: Coimbatore, Tamil Nadu, India",
    "• GitHub: https://github.com/nareshkuar",
    "• LinkedIn: https://linkedin.com/in/nareshkuar"
  ],
  "help": [
    "Available commands:",
    "  whoami            - Print builder profile and background",
    "  education()       - View degree, college (KCE) & CGPA",
    "  load_projects()   - Inspect all 5 flagship technical projects",
    "  analyze_skills()  - Display skills matrix including MCP, RAG & Agents",
    "  certifications()  - List IBM and Cyber Security certifications",
    "  internship()      - View Python & Cyber Security internship experience",
    "  contact()         - Print email, phone & location details",
    "  clear             - Reset terminal logs"
  ]
};

export default function Terminal() {
  const [logs, setLogs] = useState<TerminalLog[]>([
    { id: "1", type: "system", text: "NARESHKUMAR_AI OS v2.6.4 [Kathir College of Engineering Node]" },
    { id: "2", type: "system", text: "Type a command or click any quick-run pill below to inspect credentials." },
    { id: "3", type: "command", text: "whoami" },
    { id: "4", type: "success", text: "✓ Nareshkumar A | B.Tech AI & Data Science (CGPA: 8.09) | KCE, Coimbatore" }
  ]);
  const [inputVal, setInputVal] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const logContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (logContainerRef.current) {
      logContainerRef.current.scrollTop = logContainerRef.current.scrollHeight;
    }
  }, [logs]);

  const executeCommand = (cmd: string) => {
    const trimmed = cmd.trim();
    if (!trimmed) return;

    if (trimmed.toLowerCase() === "clear") {
      setLogs([{ id: String(Date.now()), type: "system", text: "Terminal cleared. Type 'help' for options." }]);
      setInputVal("");
      return;
    }

    const newLogs: TerminalLog[] = [
      ...logs,
      { id: `${Date.now()}-cmd`, type: "command", text: trimmed }
    ];

    const responses = commandOutputs[trimmed] || [
      `command not found: "${trimmed}". Type 'help' to see valid commands.`
    ];

    responses.forEach((res, idx) => {
      newLogs.push({
        id: `${Date.now()}-res-${idx}`,
        type: res.startsWith("✓") || res.startsWith("🎓") || res.startsWith("📜") || res.startsWith("💼") ? "success" : res.startsWith("•") ? "response" : "response",
        text: res
      });
    });

    setLogs(newLogs);
    setInputVal("");
  };

  const handleSimulateType = (cmd: string) => {
    if (isTyping) return;
    setIsTyping(true);
    setInputVal("");
    let i = 0;

    const timer = setInterval(() => {
      if (i < cmd.length) {
        setInputVal(cmd.slice(0, i + 1));
        i++;
      } else {
        clearInterval(timer);
        setIsTyping(false);
        executeCommand(cmd);
      }
    }, 28);
  };

  return (
    <div className="w-full max-w-4xl mx-auto rounded-2xl border border-cyber-cyan/30 bg-[#070b10]/95 backdrop-blur-xl shadow-[0_12px_45px_rgba(0,0,0,0.7)] overflow-hidden font-mono text-xs">
      {/* Terminal Titlebar */}
      <div className="flex items-center justify-between px-4 py-3 bg-[#0c1219] border-b border-white/10">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-red-500/80" />
          <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
          <div className="w-3 h-3 rounded-full bg-green-500/80" />
          <span className="ml-2 text-gray-400 font-semibold text-[11px] tracking-wider flex items-center gap-1.5">
            <TerminalIcon className="w-3.5 h-3.5 text-cyber-cyan" />
            NARESHKUMAR_AI :: TELEMETRY CLI
          </span>
        </div>
        <div className="flex items-center gap-3 text-[10px] text-gray-400">
          <span className="hidden sm:inline-flex items-center gap-1 text-cyber-acid">
            <span className="w-1.5 h-1.5 rounded-full bg-cyber-acid animate-pulse" />
            NODE_ONLINE [KCE]
          </span>
          <span className="text-gray-500">CGPA: 8.09</span>
        </div>
      </div>

      {/* Terminal Screen Body */}
      <div
        ref={logContainerRef}
        className="p-5 md:p-6 min-h-[280px] max-h-[380px] overflow-y-auto space-y-2 select-text"
      >
        {logs.map((log) => (
          <div key={log.id} className="leading-relaxed break-words">
            {log.type === "command" ? (
              <div className="flex items-start gap-2 text-cyber-acid font-bold">
                <span className="text-cyber-cyan select-none">naresh@kce-node:~$</span>
                <span>{log.text}</span>
              </div>
            ) : log.type === "system" ? (
              <div className="text-gray-500 text-[11px] italic">{log.text}</div>
            ) : log.type === "success" ? (
              <div className="text-cyber-acid pl-4 flex items-center gap-1.5">
                <span>{log.text}</span>
              </div>
            ) : log.type === "warn" ? (
              <div className="text-yellow-400 pl-4">{log.text}</div>
            ) : (
              <div className="text-gray-300 pl-4">{log.text}</div>
            )}
          </div>
        ))}

        {/* Live Typing Line */}
        <div className="flex items-center gap-2 text-cyber-acid pt-1">
          <span className="text-cyber-cyan select-none">naresh@kce-node:~$</span>
          <span className="font-semibold">{inputVal}</span>
          <span className="w-2 h-4 bg-cyber-acid animate-pulse inline-block" />
        </div>
      </div>

      {/* Quick Action Commands Drawer */}
      <div className="px-4 py-3 bg-[#080d14] border-t border-white/10 flex flex-wrap items-center justify-between gap-2">
        <div className="flex flex-wrap items-center gap-1.5">
          <span className="text-[10px] text-gray-500 mr-1">COMMANDS:</span>
          {defaultCommands.map((cmd) => (
            <button
              key={cmd}
              type="button"
              onClick={() => handleSimulateType(cmd)}
              disabled={isTyping}
              className="px-2.5 py-1 rounded-md bg-white/[0.04] border border-cyber-cyan/20 hover:border-cyber-acid hover:bg-cyber-acid/10 hover:text-cyber-acid text-gray-400 text-[11px] transition-all duration-200"
            >
              {cmd}
            </button>
          ))}
        </div>
        <button
          type="button"
          onClick={() => executeCommand("clear")}
          className="px-2 py-1 rounded text-[10px] text-gray-500 hover:text-gray-300 flex items-center gap-1 transition-colors"
          title="Clear terminal"
        >
          <RotateCcw className="w-3 h-3" />
          Clear
        </button>
      </div>
    </div>
  );
}
