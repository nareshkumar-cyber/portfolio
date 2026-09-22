"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ShieldAlert,
  Flame,
  Bot,
  Mic,
  Database,
  Search,
  Check,
  Sparkles,
  Volume2,
  Terminal,
  FileText
} from "lucide-react";
import { projectsData, Project } from "@/data/projectsData";
import ProjectModal from "@/components/ui/ProjectModal";

export default function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // 1. Phishing Scanner State
  const [phishingUrl, setPhishingUrl] = useState("https://secure-login-verify-account.tk/login");
  const [isScanningUrl, setIsScanningUrl] = useState(false);
  const [scanResult, setScanResult] = useState<{ score: number; status: "MALICIOUS" | "BENIGN"; risk: string } | null>({
    score: 95.6,
    status: "MALICIOUS",
    risk: "High Risk Phishing Vector (Suspicious TLD + Typosquatting + Lexical Entropy)"
  });

  const handleScanUrl = (sampleUrl?: string) => {
    const target = sampleUrl || phishingUrl;
    if (sampleUrl) setPhishingUrl(sampleUrl);
    setIsScanningUrl(true);
    setScanResult(null);

    setTimeout(() => {
      setIsScanningUrl(false);
      if (target.includes("secure-login") || target.includes(".tk") || target.includes("verify-account")) {
        setScanResult({
          score: 96.2,
          status: "MALICIOUS",
          risk: "High Precision Phishing Detection: Malicious URL pattern identified."
        });
      } else {
        setScanResult({
          score: 1.8,
          status: "BENIGN",
          risk: "Benign Domain: Normal lexical length and verified legitimate structure."
        });
      }
    }, 750);
  };

  // 2. Consistency Tracker State
  const [habits, setHabits] = useState([
    { name: "Code Python & ML Model", completed: true },
    { name: "RAG Pipeline Document Chunking", completed: true },
    { name: "DBMS SQL Normalization Drill", completed: true },
    { name: "Daily Habit Streak Sync (Flask)", completed: false },
  ]);

  const toggleHabit = (idx: number) => {
    const updated = [...habits];
    updated[idx].completed = !updated[idx].completed;
    setHabits(updated);
  };

  // 3. Department RAG Chatbot State
  const [ragQuery, setRagQuery] = useState("What is the syllabus for CS301 Machine Learning?");
  const [ragThinking, setRagThinking] = useState(false);
  const [ragResponse, setRagResponse] = useState<string | null>(
    "CS301 (Machine Learning & Neural Networks) covers Supervised Learning, Decision Trees, Deep Learning, and Evaluation Metrics. [Source: Dept_Syllabus_2026.pdf, Page 14]"
  );

  const handleRagAsk = (query: string) => {
    setRagQuery(query);
    setRagThinking(true);
    setRagResponse(null);

    setTimeout(() => {
      setRagThinking(false);
      if (query.includes("Syllabus") || query.includes("CS301")) {
        setRagResponse("CS301 (Machine Learning & Neural Networks) covers Supervised Learning, Decision Trees, Deep Learning, and Evaluation Metrics. [Source: Dept_Syllabus_2026.pdf, Page 14]");
      } else if (query.includes("Faculty") || query.includes("Office")) {
        setRagResponse("Department faculty advising hours are Tuesdays & Thursdays from 2:00 PM to 4:30 PM in the AI & DS Research Block. [Source: Faculty_Directory_KCE.pdf, Page 3]");
      } else {
        setRagResponse("Academic circular confirms semester exam schedules commence next month. Document vector embeddings matched with 98.4% cosine similarity. [Source: Academic_Circular_Vol4.pdf]");
      }
    }, 650);
  };

  // 4. Voice AI Food Ordering State
  const [voiceQuery, setVoiceQuery] = useState("Enakku 2 Masala Dosa and 1 Filter Coffee venum (Bilingual Voice)");
  const [isProcessingVoice, setIsProcessingVoice] = useState(false);
  const [voiceResult, setVoiceResult] = useState({
    language: "Tamil + English (Bilingual)",
    intent: "ORDER_FOOD",
    extractedItems: ["2x Masala Dosa", "1x Filter Coffee"],
    geminiResponse: "Order recognized! 2 Masala Dosa and 1 Filter Coffee added to your cart. Total: ₹180. Should I confirm?"
  });

  const handleVoiceOrder = (sampleText: string, lang: string, items: string[], res: string) => {
    setVoiceQuery(sampleText);
    setIsProcessingVoice(true);
    setTimeout(() => {
      setIsProcessingVoice(false);
      setVoiceResult({
        language: lang,
        intent: "ORDER_FOOD",
        extractedItems: items,
        geminiResponse: res
      });
    }, 600);
  };

  // 5. Crime Details Store DBMS State
  const [activeQueryType, setActiveQueryType] = useState<"suspects" | "cases" | "status">("cases");

  return (
    <section id="projects" className="relative py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto z-10">
      {/* Eyebrow */}
      <div className="flex items-center gap-3 mb-4">
        <span className="font-mono text-xs text-cyber-acid font-bold tracking-widest uppercase">
          04 / TECHNICAL PROJECT ARCHIVE
        </span>
        <div className="h-[1px] w-24 bg-gradient-to-r from-cyber-acid/40 to-transparent" />
      </div>

      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
        <div>
          <h2 className="text-4xl sm:text-6xl font-black tracking-tight text-white uppercase leading-[0.95]">
            PROJECT <span className="text-cyber-acid italic">SHOWCASE.</span>
          </h2>
          <p className="text-gray-400 text-sm sm:text-base max-w-xl mt-3">
            Specialized systems built across Machine Learning, Generative AI &amp; RAG, Voice AI (Gemini API), Habit Tracking (Flask), and Normalized Relational Databases.
          </p>
        </div>
        <span className="font-mono text-xs text-cyber-cyan">
          5 AUTHENTIC PROJECTS DELIVERED
        </span>
      </div>

      {/* Projects List */}
      <div className="space-y-16">
        {/* PROJECT 01: PHISHING DETECTION */}
        <div className="rounded-3xl p-6 sm:p-8 lg:p-10 bg-gradient-to-br from-[#090e15] to-[#06080b] border border-cyber-cyan/30 shadow-[0_15px_60px_rgba(0,0,0,0.8)] grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Info Side */}
          <div className="lg:col-span-6 flex flex-col items-start">
            <div className="flex items-center gap-2.5 mb-3">
              <span className="font-mono text-xs font-bold text-cyber-acid px-2.5 py-1 rounded bg-cyber-acid/10 border border-cyber-acid/20">
                01 / MINI PROJECT • 2025
              </span>
              <span className="font-mono text-xs text-cyber-cyan">AI + CYBERSECURITY</span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mb-3">
              Phishing Website Identification Using Machine Learning
            </h3>

            <p className="text-sm sm:text-base text-gray-300 leading-relaxed mb-6">
              Classified phishing websites using URL feature analysis and ML-based detection achieving high precision in identifying malicious pages.
            </p>

            <div className="flex flex-wrap gap-2 mb-8">
              {["Python", "Machine Learning", "URL Feature Extraction", "Cybersecurity", "High Precision"].map((t) => (
                <span key={t} className="px-3 py-1 rounded-lg bg-white/5 border border-white/10 font-mono text-xs text-gray-300">
                  {t}
                </span>
              ))}
            </div>

            <button
              type="button"
              onClick={() => setSelectedProject(projectsData[0])}
              data-cursor="CASE STUDY"
              className="px-5 py-2.5 rounded-xl bg-cyber-cyan text-black font-mono text-xs font-bold hover:bg-white transition-all"
            >
              View Full Architecture ↗
            </button>
          </div>

          {/* Interactive Threat Scanner */}
          <div className="lg:col-span-6 rounded-2xl p-5 bg-[#0b1219] border border-cyber-cyan/30 font-mono text-xs">
            <div className="flex items-center justify-between pb-3 mb-4 border-b border-white/10">
              <span className="text-cyber-cyan font-bold flex items-center gap-2">
                <ShieldAlert className="w-4 h-4 text-cyber-acid" />
                URL FEATURE EXTRACTION &amp; ML SCANNER
              </span>
              <span className="text-[10px] text-gray-400">PRECISION: HIGH</span>
            </div>

            <div className="flex items-center gap-2 mb-4">
              <div className="flex-1 flex items-center gap-2 px-3 py-2 rounded-xl bg-black/50 border border-white/10">
                <Search className="w-3.5 h-3.5 text-gray-500 shrink-0" />
                <input
                  type="text"
                  value={phishingUrl}
                  onChange={(e) => setPhishingUrl(e.target.value)}
                  className="w-full bg-transparent text-gray-200 outline-none font-mono text-xs"
                  placeholder="Enter suspicious domain..."
                />
              </div>
              <button
                type="button"
                onClick={() => handleScanUrl()}
                disabled={isScanningUrl}
                className="px-4 py-2 rounded-xl bg-cyber-cyan text-black font-bold hover:bg-white transition-colors shrink-0"
              >
                {isScanningUrl ? "Analyzing..." : "Classify"}
              </button>
            </div>

            <div className="flex items-center gap-2 mb-4 text-[11px]">
              <span className="text-gray-500">Presets:</span>
              <button
                type="button"
                onClick={() => handleScanUrl("https://secure-login-verify-account.tk/login")}
                className="text-red-400 underline hover:text-red-300"
              >
                Phishing Sample (.tk)
              </button>
              <span className="text-gray-600">|</span>
              <button
                type="button"
                onClick={() => handleScanUrl("https://kathir.ac.in/departments/ai-ds")}
                className="text-cyber-acid underline hover:text-white"
              >
                Benign Sample (College)
              </button>
            </div>

            <div className="p-4 rounded-xl bg-black/60 border border-white/10">
              {isScanningUrl ? (
                <div className="py-6 flex flex-col items-center justify-center gap-2">
                  <div className="w-6 h-6 rounded-full border-2 border-cyber-cyan border-t-transparent animate-spin" />
                  <span className="text-cyber-cyan text-[11px] animate-pulse">Running Lexical Feature Extraction...</span>
                </div>
              ) : scanResult ? (
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-400">ML CLASSIFICATION:</span>
                    <span className={`px-2.5 py-0.5 rounded font-bold ${scanResult.status === "MALICIOUS" ? "bg-red-500/20 text-red-400 border border-red-500/40" : "bg-cyber-acid/20 text-cyber-acid border border-cyber-acid/40"}`}>
                      {scanResult.status}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-400">CONFIDENCE:</span>
                    <span className="text-white font-bold">{scanResult.score}%</span>
                  </div>
                  <p className="text-[11px] text-gray-300 pt-1 border-t border-white/5">
                    {scanResult.risk}
                  </p>
                </div>
              ) : null}
            </div>
          </div>
        </div>

        {/* PROJECT 02: CONSISTENCY TRACKER */}
        <div className="rounded-3xl p-6 sm:p-8 lg:p-10 bg-gradient-to-br from-[#090e15] to-[#06080b] border border-cyber-acid/30 shadow-[0_15px_60px_rgba(0,0,0,0.8)] grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Info Side */}
          <div className="lg:col-span-6 flex flex-col items-start">
            <div className="flex items-center gap-2.5 mb-3">
              <span className="font-mono text-xs font-bold text-cyber-acid px-2.5 py-1 rounded bg-cyber-acid/10 border border-cyber-acid/20">
                02 / ACADEMIC PROJECT • 2026
              </span>
              <span className="font-mono text-xs text-cyber-acid">PRODUCTIVITY + WEB</span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mb-3">
              Consistency Tracker
            </h3>

            <p className="text-sm sm:text-base text-gray-300 leading-relaxed mb-6">
              Developed a productivity and habit-tracking web application to help users maintain daily consistency and monitor activity streaks. Implemented task scheduling, progress tracking, streak management, and reminder features.
            </p>

            <div className="flex flex-wrap gap-2 mb-8">
              {["Python", "Flask", "HTML", "CSS", "JavaScript", "Database"].map((t) => (
                <span key={t} className="px-3 py-1 rounded-lg bg-white/5 border border-white/10 font-mono text-xs text-gray-300">
                  {t}
                </span>
              ))}
            </div>

            <button
              type="button"
              onClick={() => setSelectedProject(projectsData[1])}
              data-cursor="CASE STUDY"
              className="px-5 py-2.5 rounded-xl bg-cyber-acid text-black font-mono text-xs font-bold hover:bg-[#e2ff85] transition-all"
            >
              View Full Architecture ↗
            </button>
          </div>

          {/* Interactive Productivity Dashboard */}
          <div className="lg:col-span-6 rounded-2xl p-5 bg-[#0b1219] border border-cyber-acid/30 font-mono text-xs">
            <div className="flex items-center justify-between pb-3 mb-4 border-b border-white/10">
              <span className="text-cyber-acid font-bold flex items-center gap-2">
                <Flame className="w-4 h-4 text-cyber-acid" />
                FLASK HABIT &amp; STREAK ENGINE
              </span>
              <span className="text-white font-bold text-[11px] px-2 py-0.5 rounded bg-cyber-acid/10 border border-cyber-acid/30">
                🔥 ACTIVE STREAK
              </span>
            </div>

            <div className="space-y-2 mb-4">
              <span className="text-gray-400 text-[10px]">DAILY HABIT QUEUE (CLICK TO TOGGLE):</span>
              {habits.map((h, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => toggleHabit(idx)}
                  className={`w-full flex items-center justify-between p-2.5 rounded-xl border transition-all text-left ${
                    h.completed
                      ? "bg-cyber-acid/10 border-cyber-acid/40 text-white"
                      : "bg-black/40 border-white/10 text-gray-400 hover:border-white/20"
                  }`}
                >
                  <div className="flex items-center gap-2.5">
                    <div className={`w-4 h-4 rounded-md flex items-center justify-center border ${h.completed ? "bg-cyber-acid text-black border-cyber-acid" : "border-gray-500"}`}>
                      {h.completed && <Check className="w-3 h-3 stroke-[3]" />}
                    </div>
                    <span className="text-xs">{h.name}</span>
                  </div>
                  <span className={`text-[10px] ${h.completed ? "text-cyber-acid" : "text-gray-500"}`}>
                    {h.completed ? "STREAK +1" : "PENDING"}
                  </span>
                </button>
              ))}
            </div>

            <div className="p-3 rounded-xl bg-black/60 border border-white/5">
              <div className="flex items-center justify-between text-[10px] text-gray-400 mb-2">
                <span>ACTIVITY STREAK MATRIX (DATABASE SYNC)</span>
                <span className="text-cyber-acid">TASK SCHEDULING: ACTIVE</span>
              </div>
              <div className="grid grid-cols-12 gap-1.5">
                {Array.from({ length: 36 }).map((_, i) => (
                  <div
                    key={i}
                    className={`h-4 rounded-sm transition-transform hover:scale-125 ${
                      i % 5 === 0 ? "bg-cyber-acid/20" : i % 2 === 0 ? "bg-cyber-acid/80" : "bg-cyber-acid/50"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* PROJECT 03: DEPARTMENT RAG CHATBOT */}
        <div className="rounded-3xl p-6 sm:p-8 lg:p-10 bg-gradient-to-br from-[#090e15] to-[#06080b] border border-purple-500/30 shadow-[0_15px_60px_rgba(0,0,0,0.8)] grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Info Side */}
          <div className="lg:col-span-6 flex flex-col items-start">
            <div className="flex items-center gap-2.5 mb-3">
              <span className="font-mono text-xs font-bold text-purple-400 px-2.5 py-1 rounded bg-purple-400/10 border border-purple-400/20">
                03 / SOLO ACADEMIC PROJECT • 2026
              </span>
              <span className="font-mono text-xs text-purple-300">GENERATIVE AI + RAG</span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mb-3">
              Department Knowledge Assistant – RAG-Based Chatbot
            </h3>

            <p className="text-sm sm:text-base text-gray-300 leading-relaxed mb-6">
              Built a Retrieval-Augmented Generation (RAG) chatbot to answer student queries on department syllabus, faculty, and academic resources. Designed the document embedding and retrieval pipeline independently, integrating an LLM with a vector database.
            </p>

            <div className="flex flex-wrap gap-2 mb-8">
              {["Python", "RAG", "LLM", "Vector Database", "NLP", "Independent Pipeline"].map((t) => (
                <span key={t} className="px-3 py-1 rounded-lg bg-white/5 border border-white/10 font-mono text-xs text-gray-300">
                  {t}
                </span>
              ))}
            </div>

            <button
              type="button"
              onClick={() => setSelectedProject(projectsData[2])}
              data-cursor="CASE STUDY"
              className="px-5 py-2.5 rounded-xl bg-purple-400 text-black font-mono text-xs font-bold hover:bg-purple-300 transition-all"
            >
              View Full Architecture ↗
            </button>
          </div>

          {/* Interactive RAG Pipeline & Live Chat Simulator */}
          <div className="lg:col-span-6 rounded-2xl p-5 bg-[#0b1219] border border-purple-500/30 font-mono text-xs">
            <div className="flex items-center justify-between pb-3 mb-4 border-b border-white/10">
              <span className="text-purple-300 font-bold flex items-center gap-2">
                <Bot className="w-4 h-4 text-purple-400" />
                DEPARTMENT RAG QUERY SIMULATOR
              </span>
              <span className="text-[10px] text-cyber-acid">GROUNDED WITH VECTOR DB</span>
            </div>

            <div className="flex flex-wrap gap-1.5 mb-3">
              <span className="text-gray-500 text-[10px] self-center">Ask Preset:</span>
              <button
                type="button"
                onClick={() => handleRagAsk("What is the syllabus for CS301 Machine Learning?")}
                className="px-2.5 py-1 rounded-md bg-white/5 hover:bg-purple-500/20 text-gray-300 hover:text-white text-[11px] border border-white/5"
              >
                CS301 Syllabus
              </button>
              <button
                type="button"
                onClick={() => handleRagAsk("What are the faculty advisement hours?")}
                className="px-2.5 py-1 rounded-md bg-white/5 hover:bg-purple-500/20 text-gray-300 hover:text-white text-[11px] border border-white/5"
              >
                Faculty Advising Hours
              </button>
            </div>

            <div className="p-4 rounded-xl bg-black/60 border border-white/10 space-y-3 min-h-[140px] flex flex-col justify-between">
              <div>
                <div className="text-gray-400 text-[11px] mb-1">
                  <strong className="text-cyber-cyan">Student Query:</strong> {ragQuery}
                </div>

                {ragThinking ? (
                  <div className="py-4 flex items-center gap-2 text-purple-400">
                    <div className="w-4 h-4 rounded-full border-2 border-purple-400 border-t-transparent animate-spin" />
                    <span>Vector Similarity Search &amp; Document Retrieval...</span>
                  </div>
                ) : (
                  <p className="text-gray-200 text-xs leading-relaxed mt-2">
                    {ragResponse}
                  </p>
                )}
              </div>

              <div className="pt-2 border-t border-white/5 flex items-center justify-between text-[10px] text-gray-500">
                <span>RAG: Academic Docs → Chunks → Vector DB → LLM</span>
                <span className="text-purple-400">SOLO PIPELINE</span>
              </div>
            </div>
          </div>
        </div>

        {/* PROJECT 04: VOICE FOOD ORDERING SYSTEM (HACKATHON) */}
        <div className="rounded-3xl p-6 sm:p-8 lg:p-10 bg-gradient-to-br from-[#090e15] to-[#06080b] border border-amber-500/30 shadow-[0_15px_60px_rgba(0,0,0,0.8)] grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Info Side */}
          <div className="lg:col-span-6 flex flex-col items-start">
            <div className="flex items-center gap-2.5 mb-3">
              <span className="font-mono text-xs font-bold text-amber-400 px-2.5 py-1 rounded bg-amber-400/10 border border-amber-400/20">
                04 / HACKATHON PROJECT • 2025
              </span>
              <span className="font-mono text-xs text-amber-300">GEMINI API + BILINGUAL VOICE</span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mb-3">
              AI-Based Voice-Controlled Food Ordering System
            </h3>

            <p className="text-sm sm:text-base text-gray-300 leading-relaxed mb-6">
              Developed a bilingual (Tamil &amp; English) voice AI agent using Gemini for intent recognition and food item extraction from spoken commands. Designed conversational ordering flow with menu suggestions, confirmation, and accessibility-focused smart processing.
            </p>

            <div className="flex flex-wrap gap-2 mb-8">
              {["Google Gemini API", "Python", "Speech-to-Text", "TTS", "NLP", "Bilingual"].map((t) => (
                <span key={t} className="px-3 py-1 rounded-lg bg-white/5 border border-white/10 font-mono text-xs text-gray-300">
                  {t}
                </span>
              ))}
            </div>

            <button
              type="button"
              onClick={() => setSelectedProject(projectsData[3])}
              data-cursor="CASE STUDY"
              className="px-5 py-2.5 rounded-xl bg-amber-400 text-black font-mono text-xs font-bold hover:bg-amber-300 transition-all"
            >
              View Full Architecture ↗
            </button>
          </div>

          {/* Interactive Bilingual Voice AI Simulator */}
          <div className="lg:col-span-6 rounded-2xl p-5 bg-[#0b1219] border border-amber-500/30 font-mono text-xs">
            <div className="flex items-center justify-between pb-3 mb-4 border-b border-white/10">
              <span className="text-amber-300 font-bold flex items-center gap-2">
                <Mic className="w-4 h-4 text-amber-400 animate-pulse" />
                GEMINI BILINGUAL VOICE AGENT (TAMIL &amp; ENGLISH)
              </span>
              <span className="text-[10px] text-gray-400">RAPID PROTOTYPE</span>
            </div>

            <div className="flex flex-wrap gap-1.5 mb-3">
              <span className="text-gray-500 text-[10px] self-center">Voice Presets:</span>
              <button
                type="button"
                onClick={() =>
                  handleVoiceOrder(
                    "Enakku 2 Masala Dosa and 1 Filter Coffee venum",
                    "Tamil (Spoken)",
                    ["2x Masala Dosa", "1x Filter Coffee"],
                    "Order recognized! 2 Masala Dosa and 1 Filter Coffee added to your cart. Total: ₹180. Should I confirm?"
                  )
                }
                className="px-2.5 py-1 rounded-md bg-white/5 hover:bg-amber-500/20 text-gray-300 hover:text-white text-[11px] border border-white/5"
              >
                Tamil: 2 Dosa + 1 Coffee
              </button>
              <button
                type="button"
                onClick={() =>
                  handleVoiceOrder(
                    "I want 1 Paneer Biryani with extra raita and cold drink",
                    "English (Spoken)",
                    ["1x Paneer Biryani", "1x Extra Raita", "1x Cold Drink"],
                    "Added 1 Paneer Biryani with extra raita and cold drink. Total: ₹220. Ready for payment!"
                  )
                }
                className="px-2.5 py-1 rounded-md bg-white/5 hover:bg-amber-500/20 text-gray-300 hover:text-white text-[11px] border border-white/5"
              >
                English: Biryani + Drink
              </button>
            </div>

            <div className="p-4 rounded-xl bg-black/60 border border-white/10 space-y-3">
              <div>
                <div className="text-gray-400 text-[11px]">
                  <strong className="text-amber-300">Spoken Input (STT):</strong> &quot;{voiceQuery}&quot;
                </div>
                <div className="text-[10px] text-gray-500 mt-0.5">Detected: {voiceResult.language}</div>
              </div>

              {isProcessingVoice ? (
                <div className="py-4 flex items-center gap-2 text-amber-400">
                  <div className="w-4 h-4 rounded-full border-2 border-amber-400 border-t-transparent animate-spin" />
                  <span>Gemini API Intent Extraction &amp; Entity Parsing...</span>
                </div>
              ) : (
                <div className="space-y-2 pt-2 border-t border-white/5">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="text-gray-400 text-[10px]">Extracted Items:</span>
                    {voiceResult.extractedItems.map((item, idx) => (
                      <span key={idx} className="px-2 py-0.5 rounded bg-amber-400/20 text-amber-300 border border-amber-400/40 text-[10px] font-bold">
                        {item}
                      </span>
                    ))}
                  </div>
                  <div className="p-2.5 rounded-lg bg-amber-950/20 border border-amber-500/20 text-gray-200 text-xs flex items-start gap-2">
                    <Volume2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                    <span>{voiceResult.geminiResponse}</span>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* PROJECT 05: CRIME DETAILS STORE (DBMS PROJECT) */}
        <div className="rounded-3xl p-6 sm:p-8 lg:p-10 bg-gradient-to-br from-[#090e15] to-[#06080b] border border-sky-500/30 shadow-[0_15px_60px_rgba(0,0,0,0.8)] grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Info Side */}
          <div className="lg:col-span-6 flex flex-col items-start">
            <div className="flex items-center gap-2.5 mb-3">
              <span className="font-mono text-xs font-bold text-sky-400 px-2.5 py-1 rounded bg-sky-400/10 border border-sky-400/20">
                05 / ACADEMIC PROJECT • 2026
              </span>
              <span className="font-mono text-xs text-sky-300">SQL + DBMS</span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mb-3">
              Crime Details Store – DBMS Project
            </h3>

            <p className="text-sm sm:text-base text-gray-300 leading-relaxed mb-6">
              Designed a normalized relational database with SQL-based queries to store, retrieve, and report crime case details including suspects, victims, and case status.
            </p>

            <div className="flex flex-wrap gap-2 mb-8">
              {["SQL", "DBMS", "Database Design", "Python", "Normalization", "Relational Models"].map((t) => (
                <span key={t} className="px-3 py-1 rounded-lg bg-white/5 border border-white/10 font-mono text-xs text-gray-300">
                  {t}
                </span>
              ))}
            </div>

            <button
              type="button"
              onClick={() => setSelectedProject(projectsData[4])}
              data-cursor="CASE STUDY"
              className="px-5 py-2.5 rounded-xl bg-sky-400 text-black font-mono text-xs font-bold hover:bg-sky-300 transition-all"
            >
              View Full Architecture ↗
            </button>
          </div>

          {/* Interactive Normalized SQL Query Console */}
          <div className="lg:col-span-6 rounded-2xl p-5 bg-[#0b1219] border border-sky-500/30 font-mono text-xs">
            <div className="flex items-center justify-between pb-3 mb-4 border-b border-white/10">
              <span className="text-sky-300 font-bold flex items-center gap-2">
                <Database className="w-4 h-4 text-sky-400" />
                RELATIONAL SQL QUERY RUNNER
              </span>
              <span className="text-[10px] text-cyber-acid">3NF NORMALIZED</span>
            </div>

            <div className="grid grid-cols-3 gap-1.5 mb-3">
              {[
                { id: "cases", label: "Active Cases" },
                { id: "suspects", label: "Suspect Registry" },
                { id: "status", label: "Status Report" },
              ].map((tab) => (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setActiveQueryType(tab.id as any)}
                  className={`p-2 rounded-lg border text-center transition-all ${
                    activeQueryType === tab.id
                      ? "bg-sky-400/20 border-sky-400 text-white font-bold"
                      : "bg-black/30 border-white/5 text-gray-400 hover:text-white"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            <div className="p-3 rounded-xl bg-black/60 border border-white/10 space-y-2">
              <div className="text-[11px] text-sky-400">
                {activeQueryType === "cases" && "SELECT case_id, type, suspect_count, status FROM crime_cases WHERE status = 'Under Investigation';"}
                {activeQueryType === "suspects" && "SELECT suspect_id, name, prior_record, associated_case_id FROM suspects JOIN crime_cases USING(case_id);"}
                {activeQueryType === "status" && "SELECT status, COUNT(*) as total_cases FROM crime_cases GROUP BY status;"}
              </div>

              <div className="pt-2 border-t border-white/10 overflow-x-auto">
                <table className="w-full text-left text-[11px]">
                  <thead>
                    <tr className="text-gray-500 border-b border-white/5">
                      {activeQueryType === "cases" && (
                        <>
                          <th className="pb-1">CASE_ID</th>
                          <th className="pb-1">CRIME_TYPE</th>
                          <th className="pb-1">SUSPECTS</th>
                          <th className="pb-1">STATUS</th>
                        </>
                      )}
                      {activeQueryType === "suspects" && (
                        <>
                          <th className="pb-1">SUSPECT_ID</th>
                          <th className="pb-1">NAME</th>
                          <th className="pb-1">PRIOR</th>
                          <th className="pb-1">CASE_REF</th>
                        </>
                      )}
                      {activeQueryType === "status" && (
                        <>
                          <th className="pb-1">CASE_STATUS</th>
                          <th className="pb-1">TOTAL_RECORDS</th>
                          <th className="pb-1">RESOLVED_%</th>
                        </>
                      )}
                    </tr>
                  </thead>
                  <tbody className="text-gray-300 divide-y divide-white/5">
                    {activeQueryType === "cases" && (
                      <>
                        <tr>
                          <td className="py-1 text-cyber-cyan">#CR-2026-09</td>
                          <td>Cyber Fraud</td>
                          <td>2</td>
                          <td className="text-amber-400">Under Investigation</td>
                        </tr>
                        <tr>
                          <td className="py-1 text-cyber-cyan">#CR-2026-14</td>
                          <td>Data Breach</td>
                          <td>1</td>
                          <td className="text-amber-400">Under Investigation</td>
                        </tr>
                      </>
                    )}
                    {activeQueryType === "suspects" && (
                      <>
                        <tr>
                          <td className="py-1 text-cyber-acid">SP-402</td>
                          <td>Suspect Alpha</td>
                          <td>Yes</td>
                          <td>#CR-2026-09</td>
                        </tr>
                        <tr>
                          <td className="py-1 text-cyber-acid">SP-405</td>
                          <td>Suspect Beta</td>
                          <td>No</td>
                          <td>#CR-2026-14</td>
                        </tr>
                      </>
                    )}
                    {activeQueryType === "status" && (
                      <>
                        <tr>
                          <td className="py-1 text-cyber-acid">Resolved</td>
                          <td>48 Cases</td>
                          <td>78.4%</td>
                        </tr>
                        <tr>
                          <td className="py-1 text-amber-400">Pending</td>
                          <td>12 Cases</td>
                          <td>21.6%</td>
                        </tr>
                      </>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Project Deep Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}
