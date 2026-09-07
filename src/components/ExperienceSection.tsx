import React, { useState, useEffect } from 'react';
import { Briefcase, Calendar, MapPin, CheckCircle2, ChevronRight } from 'lucide-react';
import { ExperienceItem } from '../types/portfolio';
import { portfolioApi } from '../services/portfolioApi';
import { ScrollReveal } from './ScrollReveal';

export const ExperienceSection: React.FC = () => {
  const [experienceList, setExperienceList] = useState<ExperienceItem[]>([]);
  const [currentOnly, setCurrentOnly] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchExperience = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await portfolioApi.getExperience(currentOnly);
      if (response.success && response.data) {
        setExperienceList(response.data);
      } else {
        setError('Failed to load career milestones');
      }
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : 'Network error');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchExperience();
  }, [currentOnly]);

  return (
    <section id="experience" className="py-16 md:py-24 border-b border-[#1A1A1A] bg-[#F5F2ED]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <ScrollReveal>
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10 pb-4 border-b border-[#1A1A1A]/20">
            <div>
              <div className="text-[11px] font-sans uppercase tracking-[0.3em] text-[#666666] font-semibold mb-1">
                Career Trajectory
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight text-[#1A1A1A]">
                Leadership & Work Experience
              </h2>
              <p className="text-xs sm:text-sm font-sans text-[#666666] mt-1">
                Academic leadership, research roles, and industry engineering verification experience.
              </p>
            </div>

            <div className="flex items-center gap-3">
              <label className="flex items-center gap-2 text-xs font-sans uppercase tracking-wider font-semibold text-[#1A1A1A] cursor-pointer select-none bg-white px-3 py-1.5 border border-[#1A1A1A] shadow-2xs">
                <input
                  type="checkbox"
                  checked={currentOnly}
                  onChange={(e) => setCurrentOnly(e.target.checked)}
                  className="rounded border-[#1A1A1A] text-[#1A1A1A] focus:ring-0"
                />
                <span>Present Roles Only</span>
              </label>
            </div>
          </div>
        </ScrollReveal>

        {/* Timeline Container */}
        <ScrollReveal delay={0.15}>
          <div className="relative border-l-2 border-[#1A1A1A] ml-4 md:ml-6 pl-6 md:pl-8 space-y-10">
          {loading && experienceList.length === 0 ? (
            <div className="space-y-6">
              {[1, 2].map((n) => (
                <div key={n} className="bg-white border border-[#1A1A1A] p-6 animate-pulse space-y-3">
                  <div className="h-5 bg-[#E5E2DD] rounded w-1/3" />
                  <div className="h-4 bg-[#E5E2DD] rounded w-1/4" />
                  <div className="h-3 bg-[#E5E2DD] rounded w-full" />
                </div>
              ))}
            </div>
          ) : (
            experienceList.map((exp) => (
              <div key={exp.id} className="relative group">
                {/* Timeline node marker */}
                <div
                  className={`absolute -left-[31px] md:-left-[39px] top-2 w-3.5 h-3.5 border-2 border-[#1A1A1A] ${
                    exp.current
                      ? 'bg-emerald-500 shadow-[0_0_6px_rgba(16,185,129,0.8)]'
                      : 'bg-[#1A1A1A]'
                  }`}
                />

                <div className="bg-white border border-[#1A1A1A] p-6 sm:p-7 shadow-xs hover:shadow-md transition space-y-4">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-[#1A1A1A]/10">
                    <div>
                      <div className="flex items-center gap-2">
                        <h3 className="font-serif text-xl font-bold text-[#1A1A1A] tracking-tight">
                          {exp.role}
                        </h3>
                        {exp.current && (
                          <span className="text-[10px] font-sans uppercase tracking-widest font-bold text-emerald-900 bg-emerald-50 px-2 py-0.5 border border-emerald-600">
                            Present
                          </span>
                        )}
                      </div>
                      <div className="font-sans text-xs font-semibold uppercase tracking-wider text-[#666666] mt-0.5">
                        {exp.company}
                      </div>
                    </div>

                    <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-[#666666]">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5 text-[#1A1A1A]" />
                        {exp.period}
                      </span>
                      <span>•</span>
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5 text-[#1A1A1A]" />
                        {exp.location}
                      </span>
                    </div>
                  </div>

                  {/* Quantified Achievements */}
                  <div className="space-y-2 text-sm text-[#444444]">
                    <div className="text-[10px] uppercase font-sans tracking-wider text-[#1A1A1A] font-bold">
                      Key Impacts & Architectural Deliverables:
                    </div>
                    <ul className="space-y-2">
                      {exp.achievements.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2 leading-relaxed text-xs sm:text-sm">
                          <span className="text-[#1A1A1A] font-bold mt-0.5">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div className="pt-2 border-t border-[#1A1A1A]/10 flex flex-wrap gap-1.5">
                    {exp.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 text-[11px] font-mono border border-[#1A1A1A]/30 bg-[#F5F2ED] text-[#1A1A1A]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
        </ScrollReveal>
      </div>
    </section>
  );
};
