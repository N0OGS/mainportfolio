import React, { useState, useEffect } from 'react';
import { ExternalLink, Github, Layers, ArrowUpRight, Check, X, Shield, Activity, Sparkles } from 'lucide-react';
import { ProjectItem } from '../types/portfolio';
import { portfolioApi } from '../services/portfolioApi';
import { ScrollReveal } from './ScrollReveal';

export const ProjectsSection: React.FC = () => {
  const [projects, setProjects] = useState<ProjectItem[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [activeModalProject, setActiveModalProject] = useState<ProjectItem | null>(null);

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'fintech-ai', label: 'AI & Web Apps' },
    { id: 'hardware-vr', label: 'Hardware & VR Haptics' },
    { id: 'computer-vision', label: 'Computer Vision' },
    { id: 'fullstack', label: 'Multi-Server Web' },
    { id: 'software-systems', label: 'Systems & Java' }
  ];

  const fetchProjects = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await portfolioApi.getProjects({
        category: selectedCategory
      });

      if (response.success && response.data) {
        setProjects(response.data);
      } else {
        setError('Failed to load projects');
      }
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : 'Failed to fetch projects');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProjects();
  }, [selectedCategory]);

  return (
    <section id="projects" className="py-16 md:py-24 border-b border-[#1A1A1A] bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <ScrollReveal>
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8 pb-4 border-b border-[#1A1A1A]/20">
            <div>
              <div className="text-[11px] font-sans uppercase tracking-[0.3em] text-[#666666] font-semibold mb-1">
                Production Case Studies
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight text-[#1A1A1A]">
                Featured Systems & Engineering Projects
              </h2>
              <p className="text-xs sm:text-sm font-sans text-[#666666] mt-1">
                Full-stack implementations, embedded hardware prototypes, and computer vision systems.
              </p>
            </div>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-2 mb-10 pb-4 border-b border-[#1A1A1A]/10">
            {categories.map((cat) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3.5 py-1.5 text-xs font-sans uppercase tracking-wider font-semibold border transition-all ${
                  selectedCategory === cat.id
                    ? 'bg-[#1A1A1A] text-white border-[#1A1A1A] shadow-xs'
                    : 'bg-[#F5F2ED] text-[#1A1A1A] border-[#1A1A1A]/30 hover:border-[#1A1A1A] hover:bg-[#E5E2DD]'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </ScrollReveal>

        {/* Projects Grid */}
        <ScrollReveal delay={0.15}>
          {loading && projects.length === 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[1, 2].map((i) => (
              <div key={i} className="border border-[#1A1A1A] bg-[#F5F2ED] p-6 animate-pulse space-y-4">
                <div className="h-6 bg-[#E5E2DD] rounded w-2/3" />
                <div className="h-4 bg-[#E5E2DD] rounded w-full" />
                <div className="h-4 bg-[#E5E2DD] rounded w-5/6" />
                <div className="h-16 bg-[#E5E2DD] rounded" />
              </div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project) => (
              <div
                key={project.id}
                className="bg-white border border-[#1A1A1A] p-6 sm:p-7 shadow-xs hover:shadow-md transition flex flex-col justify-between space-y-6 group"
              >
                <div className="space-y-4">
                  {/* Card Top Meta */}
                  <div className="flex items-center justify-between gap-2 pb-3 border-b border-[#1A1A1A]/10">
                    <span className="text-xs font-mono uppercase tracking-wider text-[#666666] font-semibold">
                      {project.category}
                    </span>
                    <div className="flex items-center gap-2">
                      {project.stars && (
                        <span className="text-xs font-mono text-[#1A1A1A] bg-[#F5F2ED] border border-[#1A1A1A]/30 px-2 py-0.5">
                          ★ {project.stars}
                        </span>
                      )}
                      <span className="text-[10px] font-sans uppercase tracking-widest font-bold px-2 py-0.5 border border-[#1A1A1A] bg-[#F5F2ED] text-[#1A1A1A]">
                        {project.status.replace('-', ' ')}
                      </span>
                    </div>
                  </div>

                  {/* Title & Summary */}
                  <div>
                    <h3 className="font-serif text-2xl font-bold text-[#1A1A1A] tracking-tight leading-snug group-hover:underline decoration-1 underline-offset-4">
                      {project.title}
                    </h3>
                    <p className="text-sm font-sans text-[#444444] mt-2 leading-relaxed">
                      {project.summary}
                    </p>
                  </div>

                  {/* Key Metrics Chips */}
                  {project.metrics && project.metrics.length > 0 && (
                    <div className="grid grid-cols-3 gap-2 py-3 px-3.5 bg-[#F5F2ED] border border-[#1A1A1A]/20 text-center">
                      {project.metrics.map((m, idx) => (
                        <div key={idx} className="space-y-0.5">
                          <div className="text-xs sm:text-sm font-serif font-bold text-[#1A1A1A]">
                            {m.value}
                          </div>
                          <div className="text-[9px] uppercase font-sans tracking-wider text-[#666666] font-semibold">
                            {m.label}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Architecture Highlights */}
                  <div className="space-y-1.5 text-xs text-[#444444]">
                    <div className="font-sans text-[10px] font-bold text-[#1A1A1A] uppercase tracking-wider">
                      System Architecture Highlights:
                    </div>
                    <ul className="space-y-1">
                      {project.architectureNotes.map((note, noteIdx) => (
                        <li key={noteIdx} className="flex items-start gap-1.5">
                          <span className="text-[#1A1A1A] font-bold mt-0.5">•</span>
                          <span>{note}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 text-[11px] font-mono border border-[#1A1A1A]/30 bg-[#F5F2ED] text-[#1A1A1A]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Footer Actions */}
                <div className="pt-4 border-t border-[#1A1A1A]/10 flex items-center justify-between gap-3">
                  <button
                    type="button"
                    onClick={() => setActiveModalProject(project)}
                    className="text-xs font-sans uppercase tracking-widest font-semibold text-[#1A1A1A] hover:underline underline-offset-4 flex items-center gap-1.5 transition"
                  >
                    <span>Inspect Architecture Spec</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>

                  <div className="flex items-center gap-2">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="p-1.5 text-[#1A1A1A] border border-[#1A1A1A] hover:bg-[#1A1A1A] hover:text-white transition"
                      title="View Source on GitHub"
                    >
                      <Github className="w-3.5 h-3.5" />
                    </a>
                    {project.demoUrl && (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="p-1.5 text-[#1A1A1A] border border-[#1A1A1A] hover:bg-[#1A1A1A] hover:text-white transition"
                        title="Live Demonstration"
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
        </ScrollReveal>

        {/* System Architecture Modal */}
        {activeModalProject && (
          <div
            className="fixed inset-0 z-50 bg-[#1A1A1A]/60 backdrop-blur-xs flex items-center justify-center p-4"
            onClick={() => setActiveModalProject(null)}
          >
            <div
              className="bg-[#F5F2ED] border border-[#1A1A1A] max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 shadow-2xl space-y-6"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-start justify-between gap-4 pb-4 border-b border-[#1A1A1A]/20">
                <div>
                  <span className="text-xs font-mono uppercase tracking-wider text-[#666666]">
                    System Architecture Specification
                  </span>
                  <h3 className="font-serif text-2xl font-bold text-[#1A1A1A] mt-1">
                    {activeModalProject.title}
                  </h3>
                </div>
                <button
                  type="button"
                  onClick={() => setActiveModalProject(null)}
                  className="p-1.5 border border-[#1A1A1A] bg-white text-[#1A1A1A] hover:bg-[#1A1A1A] hover:text-white transition"
                  aria-label="Close modal"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              <div className="space-y-4 text-sm text-[#333333]">
                <div>
                  <h4 className="font-bold text-[#1A1A1A] text-xs uppercase font-sans tracking-wider mb-1">
                    System Overview & Problem Space
                  </h4>
                  <p className="leading-relaxed font-sans text-xs sm:text-sm text-[#444444]">
                    {activeModalProject.description}
                  </p>
                </div>

                {/* Metrics */}
                <div className="bg-white border border-[#1A1A1A] p-4">
                  <h4 className="font-bold text-[#1A1A1A] text-xs uppercase font-sans tracking-wider mb-3">
                    Validated Benchmarks
                  </h4>
                  <div className="grid grid-cols-3 gap-4">
                    {activeModalProject.metrics.map((m, i) => (
                      <div key={i} className="text-center">
                        <div className="font-serif text-lg font-bold text-[#1A1A1A]">
                          {m.value}
                        </div>
                        <div className="text-[10px] font-sans uppercase tracking-wider text-[#666666] font-semibold mt-0.5">{m.label}</div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Architecture Decisions */}
                <div>
                  <h4 className="font-bold text-[#1A1A1A] text-xs uppercase font-sans tracking-wider mb-2">
                    Core Architectural Decisions
                  </h4>
                  <ul className="space-y-2">
                    {activeModalProject.architectureNotes.map((note, i) => (
                      <li key={i} className="flex items-start gap-2 text-[#444444] text-xs font-sans">
                        <span className="text-emerald-700 font-bold">✓</span>
                        <span>{note}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tech Stack */}
                <div className="pt-2">
                  <h4 className="font-bold text-[#1A1A1A] text-xs uppercase font-sans tracking-wider mb-2">
                    Technology Manifest
                  </h4>
                  <div className="flex flex-wrap gap-1.5">
                    {activeModalProject.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 text-xs font-mono border border-[#1A1A1A]/30 bg-white text-[#1A1A1A]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-[#1A1A1A]/20 flex justify-end gap-3">
                <button
                  type="button"
                  onClick={() => setActiveModalProject(null)}
                  className="px-4 py-2 text-xs font-sans uppercase tracking-wider font-semibold border border-[#1A1A1A] bg-white hover:bg-[#E5E2DD] text-[#1A1A1A] transition"
                >
                  Close
                </button>
                {activeModalProject.demoUrl && (
                  <a
                    href={activeModalProject.demoUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-sans uppercase tracking-widest font-semibold border border-[#1A1A1A] bg-white hover:bg-[#E5E2DD] text-[#1A1A1A] transition"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                    <span>Live App</span>
                  </a>
                )}
                <a
                  href={activeModalProject.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-sans uppercase tracking-widest font-semibold border border-[#1A1A1A] bg-[#1A1A1A] hover:bg-white hover:text-[#1A1A1A] text-white transition"
                >
                  <Github className="w-3.5 h-3.5" />
                  <span>Inspect Code</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
