import React from 'react';
import { Cpu, Eye, Code, CheckCircle2, Award, GraduationCap, Building2, MapPin } from 'lucide-react';
import { ProfileData } from '../types/portfolio';
import { ScrollReveal } from './ScrollReveal';

interface AboutSectionProps {
  profile: ProfileData | null;
  loading: boolean;
  error: string | null;
  latencyMs?: number;
  onRefresh?: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({
  profile,
  loading,
  error
}) => {
  const engineeringPillars = [
    {
      icon: Cpu,
      title: 'Embedded Systems & Firmware',
      description: 'Microcontroller firmware development in C/C++ and Arduino IDE, analog-to-digital sensor acquisition, PWM motor driver circuits, and serial telemetry bridges.'
    },
    {
      icon: Eye,
      title: 'Computer Vision & Optical Tracking',
      description: 'Real-time video pipeline engineering in Python and OpenCV, contour analysis, convex hull calculation, and coordinate normalization for gesture-based virtual interaction.'
    },
    {
      icon: Code,
      title: 'Full-Stack Software Engineering',
      description: 'Building responsive user interfaces in React and Tailwind, writing structured backend REST routes in Node.js/Express, and designing normalized relational databases in MySQL.'
    },
    {
      icon: CheckCircle2,
      title: 'Digital Verification & Hardware Testing',
      description: 'Digital logic verification fundamentals in SystemVerilog and Universal Verification Methodology (UVM) testbench practices from industry training at Lattice Semiconductor.'
    }
  ];

  return (
    <section id="about" className="py-16 md:py-24 border-b border-[#1A1A1A] bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <ScrollReveal>
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12 pb-4 border-b border-[#1A1A1A]/20">
            <div>
              <div className="text-[11px] font-sans uppercase tracking-[0.25em] text-[#666666] font-semibold mb-1">
                About Oliver Nunag
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight text-[#1A1A1A]">
                Background, Education & Engineering Disciplines
              </h2>
            </div>
          </div>

          {/* Bio Paragraphs & Credentials */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start mb-16">
            <div className="lg:col-span-7 space-y-5 text-[#333333] leading-relaxed">
              {profile?.bio ? (
                profile.bio.map((para, i) => (
                  <p
                    key={i}
                    className={`leading-relaxed ${
                      i === 0
                        ? 'font-serif text-lg sm:text-xl text-[#1A1A1A] font-normal'
                        : 'font-sans text-sm sm:text-base text-[#444444]'
                    }`}
                  >
                    {para}
                  </p>
                ))
              ) : (
                <div className="animate-pulse space-y-3">
                  <div className="h-4 bg-[#E5E2DD] rounded w-full" />
                  <div className="h-4 bg-[#E5E2DD] rounded w-5/6" />
                  <div className="h-4 bg-[#E5E2DD] rounded w-4/6" />
                </div>
              )}

              <div className="pt-4 border-t border-[#1A1A1A]/10 flex flex-wrap gap-2.5 text-xs font-mono text-[#1A1A1A]">
                <span className="inline-flex items-center gap-1.5 bg-[#F5F2ED] border border-[#1A1A1A] px-3 py-1.5 shadow-2xs">
                  <GraduationCap className="w-3.5 h-3.5 text-[#1A1A1A]" />
                  <span>DLSU (Graduated 2026)</span>
                </span>
                <span className="inline-flex items-center gap-1.5 bg-[#F5F2ED] border border-[#1A1A1A] px-3 py-1.5 shadow-2xs">
                  <Award className="w-3.5 h-3.5 text-[#1A1A1A]" />
                  <span>Dean's Lister (SY 24–25)</span>
                </span>
                <span className="inline-flex items-center gap-1.5 bg-[#F5F2ED] border border-[#1A1A1A] px-3 py-1.5 shadow-2xs">
                  <Building2 className="w-3.5 h-3.5 text-[#1A1A1A]" />
                  <span>Lattice Semi Training</span>
                </span>
                <span className="inline-flex items-center gap-1.5 bg-[#F5F2ED] border border-[#1A1A1A] px-3 py-1.5 shadow-2xs">
                  <MapPin className="w-3.5 h-3.5 text-[#1A1A1A]" />
                  <span>Laguna, Philippines</span>
                </span>
              </div>
            </div>

            {/* Academic & Industry Distinctions Panel */}
            <div className="lg:col-span-5 bg-[#F5F2ED] border border-[#1A1A1A] p-6 shadow-xs space-y-4">
              <div className="font-sans text-xs uppercase font-bold tracking-widest text-[#1A1A1A] pb-2 border-b border-[#1A1A1A]/20 flex items-center justify-between">
                <span>Education & Credentials</span>
                <span className="text-[10px] font-mono font-normal text-[#666666]">VERIFIED</span>
              </div>
              <div className="space-y-3.5 text-xs">
                <div>
                  <div className="text-[10px] text-[#666666] uppercase font-sans tracking-widest font-semibold">Degree Program</div>
                  <div className="font-medium text-[#1A1A1A] mt-0.5 text-sm">B.S. in Computer Engineering</div>
                  <div className="text-[11px] text-[#555555]">De La Salle University — Manila / Laguna (Graduated 2026)</div>
                </div>
                <div>
                  <div className="text-[10px] text-[#666666] uppercase font-sans tracking-widest font-semibold">Academic Honors</div>
                  <div className="font-medium text-[#1A1A1A] mt-0.5">Dean's Lister — First Semester SY 2024 to 2025</div>
                  <div className="text-[11px] text-[#555555]">College of Computer Studies / Engineering</div>
                </div>
                <div>
                  <div className="text-[10px] text-[#666666] uppercase font-sans tracking-widest font-semibold">Industry Verification Exposure</div>
                  <div className="font-medium text-[#1A1A1A] mt-0.5">Lattice Semiconductor (Alabang)</div>
                  <div className="text-[11px] text-[#555555]">SystemVerilog & Universal Verification Methodology (UVM) Training</div>
                </div>
                <div>
                  <div className="text-[10px] text-[#666666] uppercase font-sans tracking-widest font-semibold">Certifications</div>
                  <div className="font-medium text-[#1A1A1A] mt-0.5">AWS Bedrock Generative AI • Google AI Professional • NVIDIA 2025</div>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* 4 Core Engineering Disciplines Grid */}
        <ScrollReveal delay={0.15}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {engineeringPillars.map((pillar, index) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={index}
                  className="p-6 border border-[#1A1A1A] bg-[#F5F2ED] hover:bg-[#1A1A1A] hover:text-white transition group shadow-xs space-y-3"
                >
                  <div className="w-9 h-9 border border-[#1A1A1A] group-hover:border-white bg-white group-hover:bg-[#1A1A1A] flex items-center justify-center text-[#1A1A1A] group-hover:text-white transition">
                    <Icon className="w-4 h-4" />
                  </div>
                  <h3 className="font-serif font-bold text-base text-[#1A1A1A] group-hover:text-white transition leading-snug">
                    {pillar.title}
                  </h3>
                  <p className="text-xs font-sans text-[#666666] group-hover:text-[#D8D4CD] leading-relaxed transition">
                    {pillar.description}
                  </p>
                </div>
              );
            })}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

