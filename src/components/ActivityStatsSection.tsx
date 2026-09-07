import React, { useState, useEffect } from 'react';
import { Calendar, CheckCircle2, Award, Cpu, ShieldCheck, Code2, Layers, Sparkles } from 'lucide-react';
import { ActivityStats } from '../types/portfolio';
import { portfolioApi } from '../services/portfolioApi';
import { ScrollReveal } from './ScrollReveal';

export const ActivityStatsSection: React.FC = () => {
  const [stats, setStats] = useState<ActivityStats | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchStats = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await portfolioApi.getStats();
      if (response.success && response.data) {
        setStats(response.data);
      } else {
        setError('Failed to fetch architectural milestones');
      }
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : 'Network error');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchStats();
  }, []);

  const getMilestoneCategory = (title: string, type: string) => {
    if (title.includes('Thesis') || title.includes('Haptic') || title.includes('Glove')) {
      return { label: 'Undergraduate Thesis', icon: Cpu, badge: 'Hardware & VR' };
    }
    if (title.includes('Lattice') || title.includes('Verification')) {
      return { label: 'Hardware Verification', icon: Layers, badge: 'SystemVerilog / UVM' };
    }
    if (title.includes('AWS') || title.includes('Bedrock')) {
      return { label: 'Cloud Architecture', icon: ShieldCheck, badge: 'AWS AI Credentials' };
    }
    if (title.includes('Google') || title.includes('Gemini')) {
      return { label: 'Applied AI', icon: Sparkles, badge: 'Generative Models' };
    }
    if (title.includes('Dean') || title.includes('Honors')) {
      return { label: 'Academic Honors', icon: Award, badge: 'DLSU Distinction' };
    }
    if (title.includes('OpenCV') || title.includes('Gesture')) {
      return { label: 'Computer Vision', icon: Code2, badge: 'Kinematics Engine' };
    }
    return { label: 'Technical Deliverable', icon: CheckCircle2, badge: type.toUpperCase() };
  };

  return (
    <section id="activity" className="py-16 md:py-24 border-b border-[#1A1A1A] bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <ScrollReveal>
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8 pb-4 border-b border-[#1A1A1A]/20">
            <div>
              <div className="text-[11px] font-sans uppercase tracking-[0.3em] text-[#666666] font-semibold mb-1">
                Engineering Timeline & Deliverables
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight text-[#1A1A1A]">
                Recent Architectural Milestones & Deliverables
              </h2>
              <p className="text-xs sm:text-sm font-sans text-[#666666] mt-1.5 max-w-2xl leading-relaxed">
                Chronological record of verified hardware prototypes, verification testbenches, industry internships, cloud AI credentials, and academic honors.
              </p>
            </div>
            <div className="text-xs font-mono text-[#666666] shrink-0 self-start md:self-auto bg-[#F5F2ED] px-3 py-1.5 border border-[#1A1A1A]/20">
              {stats?.recentMilestones?.length || 6} Documented Deliverables
            </div>
          </div>
        </ScrollReveal>

        {/* Milestones List */}
        <ScrollReveal delay={0.08}>
          {loading ? (
            <div className="bg-[#FAF8F5] border border-[#1A1A1A] p-6 space-y-4">
              {[1, 2, 3, 4].map((idx) => (
                <div key={idx} className="animate-pulse space-y-2 py-4 border-b border-[#1A1A1A]/10">
                  <div className="h-4 bg-[#E5E2DD] rounded w-1/3" />
                  <div className="h-3 bg-[#E5E2DD] rounded w-4/5" />
                </div>
              ))}
            </div>
          ) : error ? (
            <div className="p-6 bg-red-50 border border-red-200 text-xs text-red-700">
              {error}
            </div>
          ) : (
            <div className="bg-white border border-[#1A1A1A] shadow-xs overflow-hidden">
              {/* Table Column Headers */}
              <div className="hidden md:grid grid-cols-12 gap-4 px-6 py-3 bg-[#FAF8F5] border-b border-[#1A1A1A] text-[10px] font-mono uppercase tracking-widest text-[#666666] font-semibold">
                <div className="col-span-2">Date / Period</div>
                <div className="col-span-4">Milestone / Deliverable</div>
                <div className="col-span-4">Architectural Scope & Impact</div>
                <div className="col-span-2 text-right">Discipline</div>
              </div>

              {/* Items List */}
              <div className="divide-y divide-[#1A1A1A]/10">
                {stats?.recentMilestones.map((item, index) => {
                  const meta = getMilestoneCategory(item.title, item.type);
                  const Icon = meta.icon;
                  return (
                    <div
                      key={item.id || index}
                      className="px-4 sm:px-6 py-4.5 hover:bg-[#FAF8F5] transition flex flex-col md:grid md:grid-cols-12 md:gap-4 md:items-center gap-2"
                    >
                      {/* Column 1: Date */}
                      <div className="md:col-span-2 flex items-center gap-2">
                        <Calendar className="w-3.5 h-3.5 text-[#666666] shrink-0" />
                        <span className="font-mono text-xs font-semibold text-[#1A1A1A]">
                          {item.date}
                        </span>
                      </div>

                      {/* Column 2: Title & Category */}
                      <div className="md:col-span-4">
                        <div className="flex items-center gap-2">
                          <Icon className="w-3.5 h-3.5 text-[#1A1A1A] shrink-0" />
                          <span className="font-serif font-bold text-sm sm:text-base text-[#1A1A1A]">
                            {item.title}
                          </span>
                        </div>
                        <div className="text-[10px] font-mono text-[#666666] mt-0.5 pl-5.5">
                          {meta.label}
                        </div>
                      </div>

                      {/* Column 3: Scope & Impact */}
                      <div className="md:col-span-4">
                        <p className="text-xs font-sans text-[#333333] leading-relaxed">
                          {item.details}
                        </p>
                      </div>

                      {/* Column 4: Badge */}
                      <div className="md:col-span-2 flex md:justify-end">
                        <span className="inline-block px-2.5 py-1 text-[10px] font-mono font-medium border border-[#1A1A1A]/20 bg-[#F5F2ED] text-[#1A1A1A] whitespace-nowrap">
                          {meta.badge}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </ScrollReveal>
      </div>
    </section>
  );
};
