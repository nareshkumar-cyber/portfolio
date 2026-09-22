"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Sparkles,
  Maximize2,
  Minimize2,
  List,
  X,
  ChevronDown,
  Layers,
  Award,
  ExternalLink,
} from "lucide-react";
import CoverflowCarousel, { CoverflowItem } from "./CoverflowCarousel";
import CertificateModal, { CertificateItem } from "./CertificateModal";

export const showcaseItems: CoverflowItem[] = [
  {
    id: "profile-portrait",
    title: "Nareshkumar A",
    subtitle: "AI & Data Science Student Leader",
    image: "/nareshkumar-portrait.png",
    category: "IDENTITY",
    badgeColor: "#d1ff56",
    file: "/nareshkumar-portrait.png",
    type: "image",
    description: "B.Tech in Artificial Intelligence & Data Science at Kathir College of Engineering. CGPA 8.09.",
  },
  {
    id: "anthropic-ai-fluency",
    title: "AI Fluency: Framework & Foundations",
    subtitle: "Anthropic",
    image: "/certificates/previews/anthropic_ai_fluency.png",
    category: "AI & CLOUD",
    badgeColor: "#d1ff56",
    file: "/certificates/anthropic_ai_fluency.pdf",
    type: "pdf",
    description: "Official credential by Anthropic covering foundational AI frameworks, LLM architectures, and human-AI collaboration.",
  },
  {
    id: "hackathon-award",
    title: "Science Day Technical Awards",
    subtitle: "KPR Institute of Engineering & Technology",
    image: "/certificates/previews/hackathon_award_photo.jpg",
    category: "HACKATHON PHOTO",
    badgeColor: "#eab308",
    file: "/certificates/hackathon_award_photo.jpg",
    type: "image",
    description: "Technical exhibition & STEM prototyping presentation award at KPRIET Science Day celebrations.",
  },
  {
    id: "cisco-ibm-ai",
    title: "AI Fundamentals: Language & Vision",
    subtitle: "Cisco & IBM SkillsBuild",
    image: "/certificates/previews/ai_certificate.png",
    category: "AI & CLOUD",
    badgeColor: "#00f2fe",
    file: "/certificates/ai_certificate.pdf",
    type: "pdf",
    description: "Credential covering LLM architectures, Generative AI queries, and computer vision models.",
  },
  {
    id: "aws-cloud-internship",
    title: "AWS Cloud Virtual Internship",
    subtitle: "NASSCOM & SmartBridge",
    image: "/certificates/previews/ibm_ai_fundamentals.png",
    category: "CLOUD",
    badgeColor: "#d1ff56",
    file: "/certificates/ibm_ai_fundamentals.pdf",
    type: "pdf",
    description: "Hands-on cloud computing internship applying core AWS infrastructure and security models.",
  },
  {
    id: "inlighnx-offensive-cyber",
    title: "Offensive Cyber Security",
    subtitle: "InLighnX Global Pvt. Ltd.",
    image: "/certificates/previews/internship_certificate.png",
    category: "INTERNSHIP",
    badgeColor: "#a855f7",
    file: "/certificates/internship_certificate.pdf",
    type: "pdf",
    description: "Python automation for subdomain enumeration, PDF security analysis, and port scanning.",
  },
  {
    id: "ppg-hackzen26",
    title: "HACKZEN’26 National Fest",
    subtitle: "PPG Institute of Technology",
    image: "/certificates/previews/hackathon_certificate.png",
    category: "HACKATHON",
    badgeColor: "#ec4899",
    file: "/certificates/hackathon_certificate.pdf",
    type: "pdf",
    description: "Certificate of Appreciation for competing in national collegiate hackathon building rapid AI MVPs.",
  },
  {
    id: "nasscom-network-security",
    title: "Network Security Engineer",
    subtitle: "NASSCOM / Skill India",
    image: "/certificates/previews/networking_certificate.png",
    category: "CYBER SECURITY",
    badgeColor: "#38bdf8",
    file: "/certificates/networking_certificate.pdf",
    type: "pdf",
    description: "National skilling certification in Network Security Engineering and infrastructure defense.",
  },
  {
    id: "greatlearning-intro-cyber",
    title: "Intro to Cyber Security",
    subtitle: "Great Learning",
    image: "/certificates/previews/cyber_security_course_1.png",
    category: "SECURITY",
    badgeColor: "#10b981",
    file: "/certificates/cyber_security_course_1.pdf",
    type: "pdf",
    description: "Foundations of info security, cryptographic basics, and threat mitigation.",
  },
  {
    id: "gfg-cyber-security",
    title: "Cyber Security – Skill Up",
    subtitle: "GeeksforGeeks",
    image: "/certificates/previews/cyber_security_course_2.png",
    category: "SECURITY",
    badgeColor: "#22c55e",
    file: "/certificates/cyber_security_course_2.pdf",
    type: "pdf",
    description: "Coursework covering vulnerability identification and secure coding practices.",
  },
  {
    id: "ewb-ai-agents",
    title: "Future AI Agents Offer",
    subtitle: "EWB Edutech (AICTE Approved)",
    image: "/certificates/previews/internship_offer_letter.png",
    category: "AI AGENTS",
    badgeColor: "#8b5cf6",
    file: "/certificates/internship_offer_letter.pdf",
    type: "pdf",
    description: "Selection offer targeting autonomous LLM agents and multi-agent coordination.",
  },
  {
    id: "litztech-cyber",
    title: "Cyber Security Internship",
    subtitle: "Litz Tech",
    image: "/certificates/previews/naresh_kumar_course.png",
    category: "INTERNSHIP",
    badgeColor: "#f59e0b",
    file: "/certificates/naresh_kumar_course.pdf",
    type: "pdf",
    description: "Foundational cyber defense principles and digital asset protection.",
  },
];

export default function CornerShowcaseWidget() {
  const [isMinimized, setIsMinimized] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [showDrawer, setShowDrawer] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [selectedModalCert, setSelectedModalCert] = useState<CertificateItem | null>(null);

  const activeItem = showcaseItems[activeIndex];

  const handleOpenDetail = (item: CoverflowItem) => {
    setSelectedModalCert({
      name: item.title,
      issuer: item.subtitle,
      file: item.file || item.image,
      type: item.type || "image",
    });
  };

  return (
    <>
      {/* 1. Minimized Floating Corner Pill */}
      {isMinimized && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 20 }}
          className="fixed bottom-5 right-5 z-40"
        >
          <button
            type="button"
            onClick={() => setIsMinimized(false)}
            data-cursor="SHOWCASE"
            className="group flex items-center gap-2.5 px-4 py-2.5 rounded-full bg-[#080d14]/95 border border-cyber-acid/40 hover:border-cyber-acid text-white shadow-[0_0_25px_rgba(209,255,86,0.25)] hover:shadow-[0_0_35px_rgba(209,255,86,0.5)] backdrop-blur-xl transition-all font-mono text-xs"
          >
            <span className="w-2 h-2 rounded-full bg-cyber-acid animate-ping" />
            <span className="font-bold text-cyber-acid tracking-wide">3D SHOWCASE</span>
            <span className="text-[10px] text-gray-400">({showcaseItems.length})</span>
            <ChevronDown className="w-3.5 h-3.5 text-gray-400 group-hover:text-white rotate-180 transition-transform" />
          </button>
        </motion.div>
      )}

      {/* 2. Floating Corner Subwidget (Default Docked View) */}
      {!isMinimized && !isExpanded && (
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 30 }}
          transition={{ type: "spring", stiffness: 300, damping: 26 }}
          className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-40 w-[300px] sm:w-[340px] max-w-[calc(100vw-2rem)] rounded-2xl bg-[#070c12]/95 border border-cyber-cyan/30 shadow-[0_15px_50px_rgba(0,0,0,0.85)] backdrop-blur-2xl overflow-hidden flex flex-col font-sans"
        >
          {/* Header Bar */}
          <div className="flex items-center justify-between px-3.5 py-2.5 bg-[#0a111a]/90 border-b border-white/10">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-cyber-acid animate-pulse" />
              <span className="font-mono text-[10px] font-bold text-cyber-acid tracking-wider uppercase">
                3D SHOWCASE
              </span>
              <span className="font-mono text-[9px] text-cyber-cyan px-1.5 py-0.5 rounded bg-cyber-cyan/10 border border-cyber-cyan/30">
                SUBWIDGET
              </span>
            </div>

            {/* Header Action Icons */}
            <div className="flex items-center gap-1">
              {/* Drawer list toggle */}
              <button
                type="button"
                onClick={() => setShowDrawer((prev) => !prev)}
                title="Show list of all subwidgets"
                className={`p-1.5 rounded-lg border text-xs transition-colors ${
                  showDrawer
                    ? "bg-cyber-acid/20 border-cyber-acid text-cyber-acid"
                    : "bg-white/5 border-white/10 text-gray-400 hover:text-white"
                }`}
              >
                <List className="w-3.5 h-3.5" />
              </button>

              {/* Fullscreen Expand */}
              <button
                type="button"
                onClick={() => setIsExpanded(true)}
                title="Expand to full 3D Coverflow"
                className="p-1.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 hover:border-cyber-cyan/50 text-gray-400 hover:text-white transition-colors"
              >
                <Maximize2 className="w-3.5 h-3.5" />
              </button>

              {/* Minimize */}
              <button
                type="button"
                onClick={() => setIsMinimized(true)}
                title="Minimize subwidget"
                className="p-1.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-gray-400 hover:text-white transition-colors"
              >
                <Minimize2 className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Subwidgets Drawer Overlay */}
          <AnimatePresence>
            {showDrawer && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="bg-[#05080c] border-b border-white/10 max-h-56 overflow-y-auto p-2 space-y-1.5 z-20"
              >
                <div className="flex items-center justify-between px-1 pb-1">
                  <span className="font-mono text-[10px] text-gray-400 uppercase tracking-wider">
                    ALL SUBWIDGETS ({showcaseItems.length})
                  </span>
                  <button
                    type="button"
                    onClick={() => setShowDrawer(false)}
                    className="text-gray-400 hover:text-white"
                  >
                    <X className="w-3 h-3" />
                  </button>
                </div>
                {showcaseItems.map((item, idx) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => {
                      setActiveIndex(idx);
                      setShowDrawer(false);
                    }}
                    className={`w-full text-left flex items-center gap-2.5 p-2 rounded-xl border transition-all ${
                      idx === activeIndex
                        ? "bg-cyber-acid/10 border-cyber-acid/60 text-white"
                        : "bg-white/[0.02] border-white/5 text-gray-400 hover:text-white hover:bg-white/5"
                    }`}
                  >
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-8 h-8 rounded-lg object-cover shrink-0 border border-white/10"
                    />
                    <div className="flex-1 min-w-0">
                      <p className="text-xs font-bold truncate leading-tight">{item.title}</p>
                      <p className="font-mono text-[9px] text-cyber-cyan truncate">{item.subtitle}</p>
                    </div>
                    {idx === activeIndex && (
                      <span className="w-1.5 h-1.5 rounded-full bg-cyber-acid shrink-0" />
                    )}
                  </button>
                ))}
              </motion.div>
            )}
          </AnimatePresence>

          {/* Subwidget 3D Coverflow Body */}
          <div className="p-3 pt-4 pb-3 flex flex-col items-center">
            <CoverflowCarousel
              items={showcaseItems}
              activeIndex={activeIndex}
              onActiveIndexChange={setActiveIndex}
              onItemSelect={(item) => handleOpenDetail(item)}
              compact={true}
              showControls={true}
              showReflection={true}
              autoPlay={true}
              autoPlayInterval={3600}
            />

            {/* Quick Active Item Caption */}
            <div className="w-full mt-2 pt-2 border-t border-white/10 flex items-center justify-between text-[11px] font-mono">
              <span className="text-gray-400 truncate max-w-[200px]">
                {activeItem?.title}
              </span>
              <button
                type="button"
                onClick={() => handleOpenDetail(activeItem)}
                className="text-cyber-cyan hover:text-cyber-acid flex items-center gap-1 font-bold"
              >
                <span>OPEN</span>
                <ExternalLink className="w-3 h-3" />
              </button>
            </div>
          </div>
        </motion.div>
      )}

      {/* 3. Full-Screen 3D Coverflow Modal View */}
      <AnimatePresence>
        {isExpanded && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 overflow-hidden">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsExpanded(false)}
              className="fixed inset-0 bg-black/90 backdrop-blur-2xl -z-10"
            />

            {/* Fullscreen Modal Frame */}
            <motion.div
              initial={{ opacity: 0, scale: 0.92, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.92, y: 30 }}
              transition={{ type: "spring", damping: 28, stiffness: 280 }}
              className="relative w-full max-w-6xl max-h-[95vh] rounded-3xl bg-[#060a10]/95 border border-cyber-cyan/40 shadow-[0_25px_80px_rgba(0,0,0,0.95)] overflow-hidden flex flex-col font-sans"
            >
              {/* Modal Top Bar */}
              <div className="p-4 sm:p-6 border-b border-white/10 flex items-center justify-between bg-[#080e16]/90">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-cyber-acid/10 border border-cyber-acid/40 flex items-center justify-center text-cyber-acid">
                    <Layers className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-xs text-cyber-acid font-bold uppercase tracking-wider">
                        INFINITE 3D COVERFLOW GALLERY
                      </span>
                      <span className="font-mono text-[10px] text-gray-400">
                        • {showcaseItems.length} ITEMS ARCHIVED
                      </span>
                    </div>
                    <h3 className="text-lg sm:text-xl font-black text-white uppercase tracking-tight">
                      CREDENTIALS, AWARDS &amp; <span className="text-cyber-cyan italic">PHOTO ARCHIVE.</span>
                    </h3>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => setIsExpanded(false)}
                    className="p-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 text-gray-300 hover:text-white transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Fullscreen Coverflow Body */}
              <div className="flex-1 overflow-y-auto p-4 sm:p-8 flex flex-col items-center justify-center min-h-[480px]">
                <CoverflowCarousel
                  items={showcaseItems}
                  activeIndex={activeIndex}
                  onActiveIndexChange={setActiveIndex}
                  onItemSelect={(item) => handleOpenDetail(item)}
                  compact={false}
                  showControls={true}
                  showReflection={true}
                  autoPlay={true}
                  autoPlayInterval={4000}
                  className="w-full"
                />

                {/* Active Item Detailed Metadata Card */}
                {activeItem && (
                  <motion.div
                    key={activeItem.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-6 w-full max-w-xl p-4 sm:p-5 rounded-2xl bg-[#090f17] border border-cyber-cyan/30 text-center flex flex-col items-center gap-2"
                  >
                    <span
                      className="font-mono text-xs font-bold px-2.5 py-0.5 rounded-full uppercase tracking-wider"
                      style={{
                        backgroundColor: activeItem.badgeColor ? `${activeItem.badgeColor}15` : "#00f2fe15",
                        color: activeItem.badgeColor || "#00f2fe",
                        border: `1px solid ${activeItem.badgeColor || "#00f2fe"}40`,
                      }}
                    >
                      {activeItem.category || "CREDENTIAL"}
                    </span>
                    <h4 className="text-base sm:text-lg font-bold text-white">
                      {activeItem.title}
                    </h4>
                    {activeItem.subtitle && (
                      <p className="font-mono text-xs text-cyber-cyan">
                        {activeItem.subtitle}
                      </p>
                    )}
                    {activeItem.description && (
                      <p className="text-xs text-gray-300 max-w-md mt-1">
                        {activeItem.description}
                      </p>
                    )}
                    <button
                      type="button"
                      onClick={() => handleOpenDetail(activeItem)}
                      className="mt-2 inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-cyber-acid text-black font-mono text-xs font-bold hover:bg-[#e0ff7e] transition-colors"
                    >
                      <span>VIEW HIGH-RES DOCUMENT</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </button>
                  </motion.div>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* 4. Detail Modal for High-Resolution Certificate/Photo */}
      <CertificateModal
        certificate={selectedModalCert}
        onClose={() => setSelectedModalCert(null)}
      />
    </>
  );
}
