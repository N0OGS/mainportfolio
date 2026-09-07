import React from 'react';
import { ArrowDown, Github, Linkedin, Mail, MapPin, Download, CheckCircle, Terminal, Phone } from 'lucide-react';
import { motion } from 'motion/react';
import { ProfileData } from '../types/portfolio';

interface HeroSectionProps {
  profile: ProfileData | null;
  loading: boolean;
  error: string | null;
  latencyMs?: number;
  onRefresh?: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  profile,
  loading,
  error
}) => {
  return (
    <section className="relative pt-10 pb-16 md:pt-16 md:pb-20 border-b border-[#1A1A1A] overflow-hidden bg-[#F5F2ED]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Top Meta Bar */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="flex items-center justify-between gap-4 mb-10 flex-wrap pb-4 border-b border-[#1A1A1A]/20"
        >
          <div className="flex items-center gap-3">
            <span className="text-xs text-[#666666] font-sans flex items-center gap-1.5 font-medium">
              <MapPin className="w-3.5 h-3.5 text-[#1A1A1A]" />
              {profile?.location || 'Sta. Rosa City, Laguna, Philippines'}
            </span>
          </div>
        </motion.div>

        {/* Hero Content: 12-Column Editorial Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Headline & Bio */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-7 flex flex-col justify-between space-y-6"
          >
            <div>
              <span className="font-sans text-[11px] uppercase tracking-[0.3em] text-[#666666] block mb-3 font-semibold">
                Curated Developer Portfolio — 2026
              </span>
              <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl font-bold leading-[0.9] tracking-tight text-[#1A1A1A] uppercase">
                COMPUTER<br />
                <span className="italic font-normal">ENGINEER.</span>
              </h1>
              <p className="font-serif italic text-xl sm:text-2xl text-[#1A1A1A] mt-4 font-normal">
                {profile?.name || 'Oliver Miguel L. Nunag'} <span className="not-italic text-[#666666] font-light">—</span> {profile?.title || 'Computer Engineering Graduate • Hardware-Software Integration'}
              </p>
            </div>

            <p className="font-sans text-base sm:text-lg leading-relaxed max-w-xl text-[#333333]">
              {profile?.roleSubtitle ||
                'De La Salle University Computer Engineering graduate bridging embedded hardware, computer vision, and modern full-stack web applications.'}
            </p>

            {/* Editorial Quick Actions */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-sans uppercase tracking-widest font-semibold border border-[#1A1A1A] bg-[#1A1A1A] text-white hover:bg-[#F5F2ED] hover:text-[#1A1A1A] transition shadow-xs"
              >
                <span>Explore Projects</span>
                <ArrowDown className="w-3.5 h-3.5" />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-sans uppercase tracking-widest font-semibold border border-[#1A1A1A] bg-white text-[#1A1A1A] hover:bg-[#1A1A1A] hover:text-white transition shadow-xs"
              >
                <span>Get in Touch</span>
                <Mail className="w-3.5 h-3.5" />
              </a>

              {profile?.contactEmail && (
                <a
                  href={`mailto:${profile.contactEmail}`}
                  className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-mono text-[#666666] hover:text-[#1A1A1A] border border-[#1A1A1A]/30 hover:border-[#1A1A1A] bg-white transition"
                  title="Direct Email"
                >
                  <Mail className="w-3.5 h-3.5" />
                  <span>{profile.contactEmail}</span>
                </a>
              )}

              {profile?.phone && (
                <a
                  href={`tel:${profile.phone.replace(/\s+/g, '')}`}
                  className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-mono text-[#666666] hover:text-[#1A1A1A] border border-[#1A1A1A]/30 hover:border-[#1A1A1A] bg-white transition"
                  title="Call Phone"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>{profile.phone}</span>
                </a>
              )}
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-5 pt-3 text-[#666666]">
              <span className="text-[10px] uppercase font-sans tracking-[0.2em] font-semibold text-[#1A1A1A]">
                Network:
              </span>
              <a
                href="https://github.com/N0OGS"
                target="_blank"
                rel="noreferrer"
                className="hover:text-[#1A1A1A] transition flex items-center gap-1.5 text-xs font-sans font-medium"
              >
                <Github className="w-3.5 h-3.5" />
                <span>GitHub (@N0OGS)</span>
              </a>
              <a
                href="https://www.linkedin.com/in/oliver-miguel-nunag-16baa0286/"
                target="_blank"
                rel="noreferrer"
                className="hover:text-[#1A1A1A] transition flex items-center gap-1.5 text-xs font-sans font-medium"
              >
                <Linkedin className="w-3.5 h-3.5" />
                <span>LinkedIn</span>
              </a>
              <a
                href="#activity"
                className="hover:text-[#1A1A1A] transition flex items-center gap-1.5 text-xs font-sans font-medium"
              >
                <Terminal className="w-3.5 h-3.5" />
                <span>Milestones</span>
              </a>
            </div>
          </motion.div>

          {/* Right Column: Editorial Module Cards matching Design Theme */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5 flex flex-col gap-5 pt-1"
          >
            {/* Module 01: Hardware-Software Integration */}
            <div className="border border-[#1A1A1A] p-6 bg-white flex flex-col gap-3.5 shadow-xs">
              <div className="flex justify-between items-start">
                <div className="font-sans text-[10px] uppercase font-bold tracking-widest text-[#1A1A1A]">
                  Focus 01: Hardware & Embedded
                </div>
                <div className="h-2 w-2 rounded-full bg-emerald-500 shadow-[0_0_6px_rgba(16,185,129,0.8)]" />
              </div>
              <div className="h-[1px] bg-[#E5E5E5] w-full" />
              <div className="text-sm font-medium font-sans text-[#1A1A1A]">Firmware & Telemetry Integration</div>
              <div className="font-sans text-xs text-[#666666] leading-relaxed">
                Operating in {profile?.timezone || 'PHT (UTC+8)'} bridging Arduino microcontrollers, tactile VR haptics, and SystemVerilog verification.
              </div>
            </div>

            {/* Module 02: 3D Engineering Framework (Inverted Ink Black) */}
            <div className="border border-[#1A1A1A] p-6 bg-[#1A1A1A] text-white flex flex-col gap-3.5 shadow-xs">
              <div className="flex justify-between items-start">
                <div className="font-sans text-[10px] uppercase font-bold tracking-widest text-white">
                  Focus 02: 3D Framework & Cloud AI
                </div>
                <div className="h-2 w-2 rounded-full bg-blue-400 shadow-[0_0_8px_rgba(96,165,250,0.8)]" />
              </div>
              <div className="h-[1px] bg-[#333333] w-full" />
              <div className="text-sm font-medium font-sans text-white">Engineering Decision Framework</div>
              <div className="font-sans text-xs opacity-70 leading-relaxed">
                Disciplined Data Gathering, Discernment, and Decision framework applied to telecommunications, cybersecurity, and AWS Bedrock solutions.
              </div>
            </div>

            {/* 2-Column Square Aspect Ratio Tiles */}
            <div className="grid grid-cols-2 gap-5">
              <div className="aspect-square border border-[#1A1A1A] bg-white flex flex-col items-center justify-center p-4 text-center shadow-xs">
                <div className="font-serif text-3xl sm:text-4xl font-normal mb-1 text-[#1A1A1A]">DLSU</div>
                <div className="font-sans text-[8px] uppercase tracking-widest font-semibold text-[#666666]">
                  Dean's Lister
                </div>
              </div>
              <div className="aspect-square bg-[#E5E2DD] border border-[#1A1A1A] flex flex-col items-center justify-center p-4 text-center shadow-xs">
                <div className="font-serif text-3xl sm:text-4xl font-normal mb-1 text-[#1A1A1A]">2026</div>
                <div className="font-sans text-[8px] uppercase tracking-widest font-semibold text-[#666666]">
                  Graduated
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Quantified Metrics Editorial Grid */}
        {profile?.metrics && profile.metrics.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="mt-14 pt-8 border-t border-[#1A1A1A] grid grid-cols-2 md:grid-cols-4 gap-6"
          >
            {profile.metrics.map((metric, i) => (
              <div key={i} className="space-y-1">
                <div className="font-serif text-3xl sm:text-4xl font-normal tracking-tight text-[#1A1A1A]">
                  {metric.value}
                </div>
                <div className="font-sans text-[10px] uppercase tracking-widest font-bold text-[#1A1A1A]">
                  {metric.label}
                </div>
                <div className="font-sans text-xs text-[#666666] leading-relaxed">
                  {metric.detail}
                </div>
              </div>
            ))}
          </motion.div>
        )}
      </div>
    </section>
  );
};
