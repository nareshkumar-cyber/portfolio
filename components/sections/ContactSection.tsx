"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, CheckCircle2, ArrowUpRight, Copy, Check } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/Icons";
import dynamic from "next/dynamic";

const CommunicationOrbScene = dynamic(() => import("@/components/3d/CommunicationOrbScene"), {
  ssr: false,
  loading: () => <div className="w-full h-[320px] flex items-center justify-center text-cyber-cyan font-mono text-xs">CALIBRATING ORBITAL LINK...</div>,
});

export default function ContactSection() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const emailAddress = "nk6404250@gmail.com";
  const phoneNumber = "+91 9363728989";
  const locationText = "Coimbatore, Tamil Nadu, India";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(emailAddress);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(phoneNumber);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;

    setSubmitting(true);
    setErrorMessage(null);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Failed to dispatch transmission.");
      }

      setSubmitting(false);
      setSubmitted(true);
      setForm({ name: "", email: "", message: "" });
      setTimeout(() => setSubmitted(false), 8000);
    } catch (err: unknown) {
      setSubmitting(false);
      setErrorMessage(
        err instanceof Error
          ? err.message
          : "Transmission failed. Please email nk6404250@gmail.com directly."
      );
    }
  };

  return (
    <section id="contact" className="relative py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto z-10 overflow-hidden">
      {/* Eyebrow */}
      <div className="flex items-center gap-3 mb-4">
        <span className="font-mono text-xs text-cyber-acid font-bold tracking-widest uppercase">
          07 / INITIATE TRANSMISSION
        </span>
        <div className="h-[1px] w-24 bg-gradient-to-r from-cyber-acid/40 to-transparent" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Column: Heading, Direct Details & 3D Globe */}
        <div className="lg:col-span-6 flex flex-col items-start">
          <h2 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight text-white uppercase leading-[0.92] mb-6">
            LET&apos;S BUILD <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyber-cyan via-white to-cyber-acid">
              SOMETHING INTELLIGENT.
            </span>
          </h2>

          <p className="text-base sm:text-lg text-gray-300 max-w-lg leading-relaxed mb-8">
            Available for AI engineering, machine learning internships, cybersecurity collaborations, and innovative technology initiatives.
          </p>

          {/* Contact Direct Cards */}
          <div className="w-full space-y-3 mb-8">
            {/* Email Card */}
            <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/10 flex flex-wrap items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-cyber-acid/10 border border-cyber-acid/30 flex items-center justify-center text-cyber-acid">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] font-mono text-gray-500 block">EMAIL DISPATCH</span>
                  <a href={`mailto:${emailAddress}`} className="text-sm font-mono text-white hover:text-cyber-acid font-semibold transition-colors">
                    {emailAddress}
                  </a>
                </div>
              </div>
              <button
                type="button"
                onClick={handleCopyEmail}
                className="px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-gray-300 font-mono text-xs flex items-center gap-1.5 transition-colors"
              >
                {copiedEmail ? <Check className="w-3.5 h-3.5 text-cyber-acid" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copiedEmail ? "Copied" : "Copy"}</span>
              </button>
            </div>

            {/* Phone Card */}
            <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/10 flex flex-wrap items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-cyber-cyan/10 border border-cyber-cyan/30 flex items-center justify-center text-cyber-cyan">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] font-mono text-gray-500 block">DIRECT PHONE / WHATSAPP</span>
                  <a href={`tel:${phoneNumber.replace(/\s+/g, '')}`} className="text-sm font-mono text-white hover:text-cyber-cyan font-semibold transition-colors">
                    {phoneNumber}
                  </a>
                </div>
              </div>
              <button
                type="button"
                onClick={handleCopyPhone}
                className="px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-gray-300 font-mono text-xs flex items-center gap-1.5 transition-colors"
              >
                {copiedPhone ? <Check className="w-3.5 h-3.5 text-cyber-cyan" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copiedPhone ? "Copied" : "Copy"}</span>
              </button>
            </div>

            {/* Location Card */}
            <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/10 flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-purple-500/10 border border-purple-500/30 flex items-center justify-center text-purple-400">
                <MapPin className="w-4 h-4" />
              </div>
              <div>
                <span className="text-[10px] font-mono text-gray-500 block">LOCATION</span>
                <span className="text-sm font-mono text-white font-semibold">
                  {locationText} (Kathir College of Engineering)
                </span>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3 pt-4 border-t border-white/10 w-full">
            <a
              href="https://linkedin.com/in/nareshkuar"
              target="_blank"
              rel="noreferrer"
              data-cursor="LINKEDIN"
              className="px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 hover:border-cyber-cyan hover:text-cyber-cyan transition-colors flex items-center gap-2 font-mono text-xs text-gray-300"
              aria-label="LinkedIn Profile"
            >
              <LinkedinIcon className="w-4 h-4" />
              <span>LinkedIn</span>
            </a>
            <a
              href="https://github.com/nareshkuar"
              target="_blank"
              rel="noreferrer"
              data-cursor="GITHUB"
              className="px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 hover:border-cyber-acid hover:text-cyber-acid transition-colors flex items-center gap-2 font-mono text-xs text-gray-300"
              aria-label="GitHub Profile"
            >
              <GithubIcon className="w-4 h-4" />
              <span>GitHub</span>
            </a>
          </div>
        </div>

        {/* Right Column: Interactive Transmission Terminal */}
        <div className="lg:col-span-6 relative">
          {/* Ambient Globe in Background */}
          <div className="absolute inset-0 pointer-events-none opacity-30 flex items-center justify-center -z-10">
            <CommunicationOrbScene />
          </div>

          <div className="rounded-3xl p-6 sm:p-8 bg-[#090e15]/90 border border-cyber-cyan/30 backdrop-blur-xl shadow-[0_15px_50px_rgba(0,0,0,0.85)]">
            <div className="flex items-center justify-between pb-4 mb-6 border-b border-white/10">
              <span className="font-mono text-xs text-cyber-cyan font-bold flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-cyber-acid animate-pulse" />
                DIRECT TRANSMISSION TERMINAL
              </span>
              <span className="font-mono text-[10px] text-gray-500">ROUTED TO NARESHKUMAR</span>
            </div>

            {submitted ? (
              <div className="py-12 flex flex-col items-center justify-center text-center space-y-4 font-mono">
                <CheckCircle2 className="w-12 h-12 text-cyber-acid animate-bounce" />
                <h4 className="text-lg font-bold text-white">TRANSMISSION DISPATCHED</h4>
                <p className="text-xs text-gray-400 max-w-sm">
                  Thank you! Your inquiry has been routed to Nareshkumar A at nk6404250@gmail.com via Resend. I will respond promptly.
                </p>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="px-4 py-2 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-xs text-cyber-cyan transition-colors"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 font-mono text-xs">
                {errorMessage && (
                  <div className="p-3 rounded-xl bg-red-500/10 border border-red-500/30 text-red-300 text-xs leading-relaxed">
                    ⚠ {errorMessage}
                  </div>
                )}

                <div>
                  <label className="text-gray-400 block mb-1.5 font-semibold">YOUR NAME / ORGANIZATION</label>
                  <input
                    type="text"
                    required
                    suppressHydrationWarning
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="e.g. Recruiter or Project Collaborator"
                    className="w-full px-4 py-3 rounded-xl bg-black/60 border border-white/10 focus:border-cyber-cyan text-white placeholder-gray-600 outline-none transition-colors"
                  />
                </div>

                <div>
                  <label className="text-gray-400 block mb-1.5 font-semibold">EMAIL ADDRESS</label>
                  <input
                    type="email"
                    required
                    suppressHydrationWarning
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    placeholder="name@company.com"
                    className="w-full px-4 py-3 rounded-xl bg-black/60 border border-white/10 focus:border-cyber-cyan text-white placeholder-gray-600 outline-none transition-colors"
                  />
                </div>

                <div>
                  <label className="text-gray-400 block mb-1.5 font-semibold">MESSAGE / INQUIRY</label>
                  <textarea
                    rows={4}
                    required
                    suppressHydrationWarning
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="Describe role, project, hackathon collaboration, or internship opportunity..."
                    className="w-full px-4 py-3 rounded-xl bg-black/60 border border-white/10 focus:border-cyber-cyan text-white placeholder-gray-600 outline-none transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={submitting}
                  suppressHydrationWarning
                  className="w-full py-3.5 rounded-xl bg-cyber-acid hover:bg-[#e2ff85] text-black font-extrabold font-mono text-xs flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(209,255,86,0.3)] transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {submitting ? (
                    <span>DISPATCHING TRANSMISSION...</span>
                  ) : (
                    <>
                      <span>Transmit Message</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
