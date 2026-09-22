"use client";

import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink, Download, Award, FileText } from "lucide-react";

export interface CertificateItem {
  name: string;
  issuer?: string;
  file: string;
  type?: "pdf" | "image";
}

interface CertificateModalProps {
  certificate: CertificateItem | null;
  onClose: () => void;
}

export default function CertificateModal({ certificate, onClose }: CertificateModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    if (certificate) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [certificate, onClose]);

  if (!certificate) return null;

  const isImage = certificate.type === "image" || certificate.file.endsWith(".jpg") || certificate.file.endsWith(".png");

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 md:p-8 overflow-y-auto">
        {/* Dark Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/85 backdrop-blur-xl -z-10"
        />

        {/* Modal Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: "spring", damping: 25, stiffness: 300 }}
          className="relative w-full max-w-5xl max-h-[92vh] flex flex-col rounded-2xl border border-cyber-cyan/30 bg-[#080d14]/95 text-foreground shadow-[0_20px_70px_rgba(0,0,0,0.9)] overflow-hidden font-sans"
        >
          {/* Header Bar */}
          <div className="p-4 sm:p-5 border-b border-white/10 flex flex-wrap items-center justify-between gap-3 bg-[#0c1219]/90">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-cyber-acid/10 border border-cyber-acid/30 flex items-center justify-center text-cyber-acid shrink-0">
                <Award className="w-5 h-5" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="font-mono text-[10px] text-cyber-acid font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-cyber-acid/10 border border-cyber-acid/20">
                    VERIFIED CREDENTIAL
                  </span>
                  {certificate.issuer && (
                    <span className="font-mono text-[10px] text-gray-400">
                      • {certificate.issuer}
                    </span>
                  )}
                </div>
                <h3 className="text-base sm:text-lg font-bold text-white tracking-tight mt-0.5">
                  {certificate.name}
                </h3>
              </div>
            </div>

            {/* Top Actions */}
            <div className="flex items-center gap-2">
              <a
                href={certificate.file}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-mono text-cyber-cyan hover:border-cyber-cyan transition-colors"
                title="Open in new window"
              >
                <ExternalLink className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Open Full</span>
              </a>

              <a
                href={certificate.file}
                download
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-cyber-acid text-black text-xs font-mono font-bold hover:bg-[#e2ff85] transition-colors"
                title="Download certificate"
              >
                <Download className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Download</span>
              </a>

              <button
                type="button"
                onClick={onClose}
                className="p-1.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-gray-400 hover:text-white transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Certificate Content Viewer */}
          <div className="relative flex-1 min-h-[450px] sm:min-h-[620px] bg-black/90 p-3 sm:p-4 flex items-center justify-center overflow-hidden">
            {isImage ? (
              <img
                src={certificate.file}
                alt={certificate.name}
                className="max-h-[75vh] w-auto max-w-full rounded-xl object-contain shadow-2xl border border-white/10"
              />
            ) : (
              <div className="w-full h-full min-h-[440px] sm:min-h-[600px] flex flex-col">
                <iframe
                  src={`${certificate.file}#toolbar=0&navpanes=0&scrollbar=1`}
                  title={certificate.name}
                  className="w-full flex-1 min-h-[420px] sm:min-h-[580px] rounded-xl border border-white/10 bg-[#0a0f15]"
                />
                <div className="pt-2 text-center">
                  <span className="font-mono text-[11px] text-gray-400">
                    Viewing official verified document •{" "}
                    <a
                      href={certificate.file}
                      target="_blank"
                      rel="noreferrer"
                      className="text-cyber-cyan underline hover:text-cyber-acid"
                    >
                      Click here if document does not display
                    </a>
                  </span>
                </div>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
