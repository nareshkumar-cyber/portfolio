import React from "react";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import SkillsSection from "@/components/sections/SkillsSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import LeadershipSection from "@/components/sections/LeadershipSection";
import ImpactSection from "@/components/sections/ImpactSection";
import Terminal from "@/components/ui/Terminal";
import ContactSection from "@/components/sections/ContactSection";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <main className="relative min-h-screen text-foreground overflow-x-hidden">
      {/* Visual Overlays */}
      <div className="grain" aria-hidden="true" />
      <div className="grid-matrix" aria-hidden="true" />

      {/* 01: Hero Section */}
      <HeroSection />

      {/* 02: About Identity Section */}
      <AboutSection />

      {/* 03: Skills Capabilities Section */}
      <SkillsSection />

      {/* 04: Projects Archive Section */}
      <ProjectsSection />

      {/* 05: Leadership & Experience Section */}
      <LeadershipSection />

      {/* 06: Impact Statistics */}
      <ImpactSection />

      {/* 07: Interactive AI Terminal Section */}
      <section id="terminal" className="relative py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto z-10">
        <div className="flex items-center gap-3 mb-4">
          <span className="font-mono text-xs text-cyber-acid font-bold tracking-widest uppercase">
            06 / SYSTEM STATUS &amp; TERMINAL
          </span>
          <div className="h-[1px] w-24 bg-gradient-to-r from-cyber-acid/40 to-transparent" />
        </div>

        <div className="mb-8">
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white uppercase leading-[0.95]">
            SYSTEM <span className="text-cyber-cyan italic">TERMINAL.</span>
          </h2>
          <p className="text-gray-400 text-sm max-w-lg mt-2">
            Simulate shell executions, inspect neural weights, query project metadata, and run threat diagnostics directly.
          </p>
        </div>

        <Terminal />
      </section>

      {/* 08: Contact Transmission Section */}
      <ContactSection />

      {/* 09: Footer */}
      <Footer />
    </main>
  );
}
