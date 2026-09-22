"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ShieldCheck,
  Trophy,
  GraduationCap,
  Layers,
  CheckCircle2,
  Award,
  ExternalLink,
  Eye,
  FileCheck,
  Download,
  Filter,
  LayoutGrid,
} from "lucide-react";
import {
  leadershipData,
  LeadershipRole,
  certificationsData,
  Certification,
} from "@/data/leadershipData";
import CertificateModal from "@/components/ui/CertificateModal";
import CoverflowCarousel, { CoverflowItem } from "@/components/ui/CoverflowCarousel";

type CategoryFilter = "ALL" | "AI & Cloud" | "Cyber Security" | "Internships" | "Hackathons & Innovation";

export default function LeadershipSection() {
  const [activeRole, setActiveRole] = useState<LeadershipRole>(leadershipData[0]);
  const [selectedCert, setSelectedCert] = useState<Certification | null>(null);
  const [activeCategory, setActiveCategory] = useState<CategoryFilter>("ALL");
  const [viewLayout, setViewLayout] = useState<"coverflow" | "grid">("coverflow");

  const categories: CategoryFilter[] = [
    "ALL",
    "AI & Cloud",
    "Cyber Security",
    "Internships",
    "Hackathons & Innovation",
  ];

  const filteredCerts =
    activeCategory === "ALL"
      ? certificationsData
      : certificationsData.filter((c) => c.category === activeCategory);

  const coverflowItems: CoverflowItem[] = filteredCerts.map((c) => ({
    id: c.id,
    title: c.title,
    subtitle: c.issuer,
    image: c.previewImage,
    category: c.category,
    file: c.file,
    type: c.type,
    badgeColor: c.badgeColor,
    description: c.description,
  }));

  return (
    <section id="leadership" className="relative py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto z-10">
      {/* Eyebrow */}
      <div className="flex items-center gap-3 mb-4">
        <span className="font-mono text-xs text-cyber-acid font-bold tracking-widest uppercase">
          05 / INTERNSHIPS, LEADERSHIP &amp; VERIFIED CERTIFICATES
        </span>
        <div className="h-[1px] w-24 bg-gradient-to-r from-cyber-acid/40 to-transparent" />
      </div>

      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
        <div>
          <h2 className="text-4xl sm:text-6xl font-black tracking-tight text-white uppercase leading-[0.95]">
            EXPERIENCE &amp; <span className="text-cyber-acid italic">CREDENTIALS.</span>
          </h2>
          <p className="text-gray-400 text-sm sm:text-base max-w-xl mt-3">
            Offensive cybersecurity internships, collegiate hackathons, academic leadership at Kathir College of Engineering, and {certificationsData.length} verified industry credentials.
          </p>
        </div>
        <div className="flex items-center gap-2 font-mono text-xs text-cyber-acid px-3 py-1.5 rounded-lg border border-cyber-acid/30 bg-cyber-acid/5 self-start md:self-auto">
          <span className="w-2 h-2 rounded-full bg-cyber-acid animate-ping" />
          <span>{certificationsData.length} VERIFIED CREDENTIALS ARCHIVED</span>
        </div>
      </div>

      {/* Futuristic Command Center Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-16">
        {/* Visual Command Center Network Map (Left 7 cols) */}
        <div className="lg:col-span-7 rounded-3xl p-6 sm:p-8 bg-[#070c12]/90 border border-cyber-cyan/30 relative min-h-[440px] flex flex-col justify-between overflow-hidden shadow-[0_15px_50px_rgba(0,0,0,0.8)]">
          {/* Background Radial Glow */}
          <div className="absolute inset-0 bg-radial-gradient from-cyber-cyan/10 via-transparent to-transparent opacity-50 pointer-events-none" />

          {/* Central Hub Node (NK) */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-center z-20">
            <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-cyber-acid text-black flex items-center justify-center shadow-[0_0_40px_rgba(209,255,86,0.6)] font-black text-2xl sm:text-3xl font-mono">
              NK
              {/* Radar Rings */}
              <div className="absolute -inset-3 rounded-full border border-cyber-acid/40 animate-ping pointer-events-none" />
              <div className="absolute -inset-6 rounded-full border border-cyber-acid/20 pointer-events-none" />
            </div>
            <span className="font-mono text-[10px] font-bold text-cyber-acid bg-black/80 px-2 py-0.5 rounded border border-cyber-acid/40 mt-2">
              CAREER HUB
            </span>
          </div>

          {/* SVG Animated Connection Lines */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none z-10" xmlns="http://www.w3.org/2000/svg">
            <line x1="50%" y1="50%" x2="22%" y2="20%" stroke="#00f2fe" strokeWidth="1.5" strokeDasharray="4 4" className="opacity-60" />
            <line x1="50%" y1="50%" x2="78%" y2="20%" stroke="#d1ff56" strokeWidth="1.5" strokeDasharray="4 4" className="opacity-60" />
            <line x1="50%" y1="50%" x2="22%" y2="80%" stroke="#a855f7" strokeWidth="1.5" strokeDasharray="4 4" className="opacity-60" />
            <line x1="50%" y1="50%" x2="78%" y2="80%" stroke="#00f2fe" strokeWidth="1.5" strokeDasharray="4 4" className="opacity-60" />
          </svg>

          {/* 4 Interactive Surrounding Satellites */}
          <div className="grid grid-cols-2 gap-y-36 sm:gap-y-48 relative z-20">
            {/* Top-Left: Internship */}
            <div className="flex justify-start">
              <button
                type="button"
                onClick={() => setActiveRole(leadershipData[0])}
                className={`p-3 sm:p-4 rounded-2xl border text-left transition-all duration-300 max-w-[200px] backdrop-blur-md ${
                  activeRole.id === "internship"
                    ? "bg-cyber-cyan/15 border-cyber-cyan shadow-[0_0_25px_rgba(0,242,254,0.3)] scale-105"
                    : "bg-[#0c1219]/90 border-white/10 hover:border-cyber-cyan/50"
                }`}
              >
                <div className="flex items-center gap-1.5 text-cyber-cyan font-mono text-xs font-bold mb-1">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>INTERNSHIPS</span>
                </div>
                <div className="text-white font-bold text-xs sm:text-sm">Offensive Cyber Security</div>
                <div className="text-[10px] text-gray-400 font-mono mt-0.5">InLighnX Global &amp; Litz Tech</div>
              </button>
            </div>

            {/* Top-Right: Hackathons */}
            <div className="flex justify-end">
              <button
                type="button"
                onClick={() => setActiveRole(leadershipData[1])}
                className={`p-3 sm:p-4 rounded-2xl border text-left transition-all duration-300 max-w-[200px] backdrop-blur-md ${
                  activeRole.id === "hackathons"
                    ? "bg-cyber-acid/15 border-cyber-acid shadow-[0_0_25px_rgba(209,255,86,0.3)] scale-105"
                    : "bg-[#0c1219]/90 border-white/10 hover:border-cyber-acid/50"
                }`}
              >
                <div className="flex items-center gap-1.5 text-cyber-acid font-mono text-xs font-bold mb-1">
                  <Trophy className="w-3.5 h-3.5" />
                  <span>HACKATHONS</span>
                </div>
                <div className="text-white font-bold text-xs sm:text-sm">Inter-College Hackathons</div>
                <div className="text-[10px] text-gray-400 font-mono mt-0.5">HACKZEN’26 &amp; Science Day</div>
              </button>
            </div>

            {/* Bottom-Left: Academic Lead */}
            <div className="flex justify-start">
              <button
                type="button"
                onClick={() => setActiveRole(leadershipData[2])}
                className={`p-3 sm:p-4 rounded-2xl border text-left transition-all duration-300 max-w-[200px] backdrop-blur-md ${
                  activeRole.id === "academic-lead"
                    ? "bg-purple-500/15 border-purple-500 shadow-[0_0_25px_rgba(168,85,247,0.3)] scale-105"
                    : "bg-[#0c1219]/90 border-white/10 hover:border-purple-500/50"
                }`}
              >
                <div className="flex items-center gap-1.5 text-purple-400 font-mono text-xs font-bold mb-1">
                  <GraduationCap className="w-3.5 h-3.5" />
                  <span>ACADEMICS</span>
                </div>
                <div className="text-white font-bold text-xs sm:text-sm">Kathir College of Engg</div>
                <div className="text-[10px] text-gray-400 font-mono mt-0.5">CGPA 8.09 (4 Semesters)</div>
              </button>
            </div>

            {/* Bottom-Right: Projects Built */}
            <div className="flex justify-end">
              <button
                type="button"
                onClick={() => setActiveRole(leadershipData[3])}
                className={`p-3 sm:p-4 rounded-2xl border text-left transition-all duration-300 max-w-[200px] backdrop-blur-md ${
                  activeRole.id === "project-architect"
                    ? "bg-cyber-cyan/15 border-cyber-cyan shadow-[0_0_25px_rgba(0,242,254,0.3)] scale-105"
                    : "bg-[#0c1219]/90 border-white/10 hover:border-cyber-cyan/50"
                }`}
              >
                <div className="flex items-center gap-1.5 text-cyber-cyan font-mono text-xs font-bold mb-1">
                  <Layers className="w-3.5 h-3.5" />
                  <span>PROJECTS</span>
                </div>
                <div className="text-white font-bold text-xs sm:text-sm">5+ Production Systems</div>
                <div className="text-[10px] text-gray-400 font-mono mt-0.5">RAG, ML, Flask, DBMS</div>
              </button>
            </div>
          </div>

          <div className="relative z-20 flex items-center justify-between pt-4 border-t border-white/10 font-mono text-[11px] text-gray-400">
            <span>● CLICK ANY NODE TO INSPECT TELEMETRY</span>
            <span className="text-cyber-acid">ACTIVE NODE: {activeRole.badge}</span>
          </div>
        </div>

        {/* Selected Leadership Role Details Panel (Right 5 cols) */}
        <div className="lg:col-span-5 rounded-3xl p-6 sm:p-8 bg-[#090e15] border border-white/10 flex flex-col justify-between shadow-2xl">
          <div>
            <div className="flex items-center justify-between mb-4">
              <span className="font-mono text-xs font-bold px-3 py-1 rounded bg-cyber-acid/10 border border-cyber-acid/30 text-cyber-acid">
                {activeRole.badge}
              </span>
              <span className="font-mono text-xs text-gray-400">
                {activeRole.metrics}
              </span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mb-1">
              {activeRole.title}
            </h3>

            {activeRole.period && (
              <span className="font-mono text-xs text-cyber-acid block mb-2">
                {activeRole.period}
              </span>
            )}

            <p className="font-mono text-xs text-cyber-cyan mb-4">
              {activeRole.roleType}
            </p>

            <p className="text-sm text-gray-300 leading-relaxed mb-6">
              {activeRole.description}
            </p>

            {/* Core Responsibilities */}
            <div className="space-y-2 mb-6">
              <span className="font-mono text-xs text-gray-400 block mb-1">
                KEY HIGHLIGHTS &amp; RESPONSIBILITIES:
              </span>
              {activeRole.responsibilities.map((resp, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-xs text-gray-300">
                  <CheckCircle2 className="w-4 h-4 text-cyber-acid shrink-0 mt-0.5" />
                  <span>{resp}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Demonstrated Competencies */}
          <div className="pt-4 border-t border-white/10">
            <span className="font-mono text-[11px] text-gray-400 block mb-2">
              DEMONSTRATED COMPETENCIES:
            </span>
            <div className="flex flex-wrap gap-1.5">
              {activeRole.skillsDemonstrated.map((s) => (
                <span
                  key={s}
                  className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10 font-mono text-[11px] text-cyber-cyan"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* VERIFIED INDUSTRY CERTIFICATIONS & CREDENTIALS VAULT */}
      <div className="mt-16 p-6 sm:p-10 rounded-3xl bg-[#070b10] border border-white/10 shadow-2xl relative overflow-hidden">
        {/* Glow ambient */}
        <div className="absolute top-0 right-1/4 w-96 h-48 bg-cyber-acid/5 blur-[90px] pointer-events-none" />

        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 mb-8 pb-6 border-b border-white/10">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-2 h-2 rounded-full bg-cyber-acid animate-pulse" />
              <span className="font-mono text-xs text-cyber-acid uppercase tracking-widest">
                VERIFIED REPOSITORY VAULT
              </span>
            </div>
            <h3 className="text-2xl sm:text-4xl font-black text-white flex items-center gap-3 tracking-tight">
              <Award className="w-8 h-8 text-cyber-acid shrink-0" />
              OFFICIAL CERTIFICATES &amp; CREDENTIALS
            </h3>
            <p className="font-mono text-xs sm:text-sm text-gray-400 mt-2 max-w-2xl">
              10 authentic credentials spanning Artificial Intelligence, AWS Cloud Computing, Offensive Cyber Security, Network Engineering, and Hackathon Honors. Click any certificate to inspect full document.
            </p>
          </div>

          {/* View Mode Switcher & Badge Count */}
          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <div className="flex items-center gap-1 p-1 rounded-xl bg-[#0c131c] border border-white/10 backdrop-blur-md">
              <button
                type="button"
                onClick={() => setViewLayout("coverflow")}
                className={`px-3 py-1.5 rounded-lg font-mono text-xs flex items-center gap-1.5 transition-all ${
                  viewLayout === "coverflow"
                    ? "bg-cyber-acid text-black font-bold shadow-md shadow-cyber-acid/20"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                <Layers className="w-3.5 h-3.5" />
                <span>3D Coverflow</span>
              </button>
              <button
                type="button"
                onClick={() => setViewLayout("grid")}
                className={`px-3 py-1.5 rounded-lg font-mono text-xs flex items-center gap-1.5 transition-all ${
                  viewLayout === "grid"
                    ? "bg-cyber-acid text-black font-bold shadow-md shadow-cyber-acid/20"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                <LayoutGrid className="w-3.5 h-3.5" />
                <span>Grid</span>
              </button>
            </div>

            <div className="px-3.5 py-1.5 rounded-xl bg-cyber-acid/10 border border-cyber-acid/30 text-cyber-acid font-mono text-xs font-bold flex items-center gap-2">
              <FileCheck className="w-4 h-4" />
              <span>{filteredCerts.length} CREDENTIALS</span>
            </div>
          </div>
        </div>

        {/* Filter Tabs */}
        <div className="flex items-center gap-2 flex-wrap mb-8">
          <span className="font-mono text-xs text-gray-400 mr-2 flex items-center gap-1">
            <Filter className="w-3.5 h-3.5 text-cyber-cyan" /> Filter:
          </span>
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setActiveCategory(cat)}
              className={`px-3.5 py-1.5 rounded-lg font-mono text-xs transition-all ${
                activeCategory === cat
                  ? "bg-cyber-acid text-black font-bold shadow-lg shadow-cyber-acid/20"
                  : "bg-white/5 text-gray-300 hover:bg-white/10 border border-white/10 hover:text-white"
              }`}
            >
              {cat} {cat === "ALL" ? `(${certificationsData.length})` : `(${certificationsData.filter((c) => c.category === cat).length})`}
            </button>
          ))}
        </div>

        {/* Dynamic Display: 3D Coverflow or Grid */}
        {viewLayout === "coverflow" ? (
          <div className="py-6 flex flex-col items-center justify-center min-h-[380px]">
            <CoverflowCarousel
              items={coverflowItems}
              compact={false}
              showControls={true}
              showReflection={true}
              autoPlay={true}
              autoPlayInterval={3800}
              onItemSelect={(item) => {
                const match = filteredCerts.find((c) => c.id === item.id);
                if (match) setSelectedCert(match);
              }}
              className="w-full"
            />
          </div>
        ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCerts.map((cert) => (
            <div
              key={cert.id}
              className="group rounded-2xl bg-[#0a0f16] border border-white/10 hover:border-cyber-acid/50 transition-all duration-300 flex flex-col justify-between overflow-hidden shadow-lg hover:shadow-2xl hover:shadow-cyber-acid/10 hover:-translate-y-1"
            >
              {/* Document Thumbnail Preview */}
              <div
                onClick={() => setSelectedCert(cert)}
                className="relative h-48 w-full bg-[#05080c] overflow-hidden cursor-pointer border-b border-white/10 group-hover:opacity-95"
              >
                <img
                  src={cert.previewImage}
                  alt={cert.title}
                  className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f16] via-transparent to-black/20" />

                {/* Status Pill on thumbnail */}
                <div className="absolute top-3 left-3">
                  <span
                    className="font-mono text-[10px] px-2.5 py-0.5 rounded-full font-bold uppercase tracking-wider shadow"
                    style={{
                      color: cert.badgeColor,
                      backgroundColor: `${cert.badgeColor}25`,
                      border: `1px solid ${cert.badgeColor}60`,
                    }}
                  >
                    {cert.status}
                  </span>
                </div>

                {/* Hover overlay hint */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
                  <div className="px-3.5 py-1.5 rounded-lg bg-cyber-acid text-black font-mono text-xs font-bold flex items-center gap-1.5 shadow-lg">
                    <Eye className="w-3.5 h-3.5" />
                    <span>INSPECT DOCUMENT</span>
                  </div>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="font-mono text-[11px] text-cyber-cyan font-semibold">
                      {cert.issuer}
                    </span>
                    <span className="font-mono text-[10px] text-gray-400">
                      {cert.issueDate}
                    </span>
                  </div>

                  <h4
                    onClick={() => setSelectedCert(cert)}
                    className="text-base font-bold text-white group-hover:text-cyber-acid transition-colors cursor-pointer leading-snug line-clamp-2"
                  >
                    {cert.title}
                  </h4>

                  <p className="text-xs text-gray-400 mt-2 line-clamp-2 leading-relaxed">
                    {cert.description}
                  </p>

                  {/* Skills tags */}
                  <div className="flex flex-wrap gap-1 mt-3">
                    {cert.skills.slice(0, 3).map((skill) => (
                      <span
                        key={skill}
                        className="font-mono text-[10px] px-2 py-0.5 rounded bg-white/5 border border-white/10 text-gray-300"
                      >
                        {skill}
                      </span>
                    ))}
                    {cert.skills.length > 3 && (
                      <span className="font-mono text-[10px] px-1.5 py-0.5 rounded bg-white/5 text-gray-400">
                        +{cert.skills.length - 3}
                      </span>
                    )}
                  </div>
                </div>

                {/* Action Buttons Footer */}
                <div className="pt-4 mt-4 border-t border-white/10 flex items-center justify-between gap-2">
                  <button
                    type="button"
                    onClick={() => setSelectedCert(cert)}
                    className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-cyber-acid hover:text-white transition-colors"
                  >
                    <Eye className="w-3.5 h-3.5" />
                    <span>View Modal</span>
                  </button>

                  <div className="flex items-center gap-2">
                    {cert.verificationUrl && (
                      <a
                        href={cert.verificationUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="p-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-gray-300 hover:text-cyber-cyan transition-colors"
                        title="Verify certificate"
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    )}
                    <a
                      href={cert.file}
                      download
                      className="p-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-gray-300 hover:text-cyber-acid transition-colors"
                      title="Download document"
                    >
                      <Download className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        )}
      </div>

      {/* Full Modal Viewer for Document Inspection */}
      <CertificateModal
        certificate={
          selectedCert
            ? {
                name: selectedCert.title,
                issuer: selectedCert.issuer,
                file: selectedCert.file,
                type: selectedCert.type,
              }
            : null
        }
        onClose={() => setSelectedCert(null)}
      />
    </section>
  );
}
