import React, { useState, useEffect, useMemo } from 'react';
import { Search, Terminal, Cpu, Layers, Cloud, Code2, Wrench } from 'lucide-react';
import { SkillCategory, SkillItem } from '../types/portfolio';
import { portfolioApi } from '../services/portfolioApi';
import { ScrollReveal } from './ScrollReveal';

export const SkillsSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<SkillCategory>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [skills, setSkills] = useState<SkillItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const categories: { id: SkillCategory; label: string; icon: React.FC<{ className?: string }> }[] = [
    { id: 'all', label: 'All Disciplines', icon: Layers },
    { id: 'languages', label: 'Languages', icon: Code2 },
    { id: 'frameworks', label: 'Frameworks & Libraries', icon: Terminal },
    { id: 'hardware', label: 'Tools & Hardware', icon: Wrench },
    { id: 'cloud-ai', label: 'Cloud & AI', icon: Cloud }
  ];

  const fetchSkillsData = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await portfolioApi.getSkills({
        category: selectedCategory,
        search: searchQuery
      });

      if (response.success && response.data) {
        setSkills(response.data);
      } else {
        setError('Failed to load technical competencies');
      }
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : 'Request failed');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      fetchSkillsData();
    }, 180);

    return () => clearTimeout(timeout);
  }, [selectedCategory, searchQuery]);

  // Group skills by category when 'all' is selected and not searching
  const groupedSkills = useMemo(() => {
    if (selectedCategory !== 'all' || searchQuery.trim() !== '') {
      return null;
    }

    const groups: {
      category: SkillCategory;
      title: string;
      description: string;
      icon: React.FC<{ className?: string }>;
      items: SkillItem[];
    }[] = [
      {
        category: 'languages',
        title: 'Programming Languages',
        description: 'Systems programming, script automation, and full-stack web scripting',
        icon: Code2,
        items: skills.filter((s) => s.category === 'languages')
      },
      {
        category: 'frameworks',
        title: 'Frameworks & Software Libraries',
        description: 'Frontend interfaces, backend servers, and computer vision pipelines',
        icon: Terminal,
        items: skills.filter((s) => s.category === 'frameworks')
      },
      {
        category: 'hardware',
        title: 'Hardware Prototyping & Tools',
        description: 'Microcontroller circuits, sensor integration, CAD drafting, and databases',
        icon: Wrench,
        items: skills.filter((s) => s.category === 'hardware')
      },
      {
        category: 'cloud-ai',
        title: 'Cloud & Generative AI',
        description: 'Foundation model APIs, prompt architectures, and verified cloud knowledge',
        icon: Cloud,
        items: skills.filter((s) => s.category === 'cloud-ai')
      }
    ];

    return groups.filter((g) => g.items.length > 0);
  }, [skills, selectedCategory, searchQuery]);

  const getCategoryLabel = (category: string) => {
    switch (category) {
      case 'languages':
        return 'Language';
      case 'frameworks':
        return 'Framework';
      case 'hardware':
        return 'Hardware / Tool';
      case 'cloud-ai':
        return 'Cloud & AI';
      default:
        return category;
    }
  };

  return (
    <section id="skills" className="py-16 md:py-24 border-b border-[#1A1A1A] bg-[#F5F2ED]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <ScrollReveal>
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8 pb-4 border-b border-[#1A1A1A]/20">
            <div>
              <div className="text-[11px] font-sans uppercase tracking-[0.3em] text-[#666666] font-semibold mb-1">
                Technical Inventory
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight text-[#1A1A1A]">
                Skills & Tooling Directory
              </h2>
              <p className="text-xs font-sans text-[#666666] mt-1.5 max-w-2xl leading-relaxed">
                A structured catalog of programming languages, hardware prototyping platforms, frameworks, and cloud AI services applied across undergraduate thesis research, embedded firmware, computer vision, and modern web applications.
              </p>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.08}>
          {/* Controls: Category Filter Tabs + Search */}
          <div className="bg-white border border-[#1A1A1A] p-4 sm:p-5 shadow-xs mb-8 space-y-4">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
              {/* Category Filter Tabs */}
              <div className="flex flex-wrap items-center gap-1.5">
                {categories.map((cat) => {
                  const Icon = cat.icon;
                  const isActive = selectedCategory === cat.id;
                  return (
                    <button
                      key={cat.id}
                      type="button"
                      onClick={() => setSelectedCategory(cat.id)}
                      className={`inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-sans uppercase tracking-wider font-semibold border transition-all ${
                        isActive
                          ? 'bg-[#1A1A1A] text-white border-[#1A1A1A] shadow-xs'
                          : 'bg-[#F5F2ED] text-[#1A1A1A] border-[#1A1A1A]/30 hover:border-[#1A1A1A] hover:bg-[#E5E2DD]'
                      }`}
                    >
                      <Icon className="w-3.5 h-3.5" />
                      <span>{cat.label}</span>
                    </button>
                  );
                })}
              </div>

              {/* Search Bar */}
              <div className="relative w-full lg:w-72">
                <Search className="w-3.5 h-3.5 text-[#666666] absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Filter skills (e.g. C++, OpenCV)..."
                  className="w-full pl-8 pr-12 py-1.5 text-xs font-mono border border-[#1A1A1A] focus:outline-hidden bg-[#F5F2ED] focus:bg-white text-[#1A1A1A]"
                />
                {searchQuery && (
                  <button
                    type="button"
                    onClick={() => setSearchQuery('')}
                    className="absolute right-2.5 top-1/2 -translate-y-1/2 text-[10px] font-mono text-[#666666] hover:text-[#1A1A1A] font-bold"
                  >
                    CLEAR
                  </button>
                )}
              </div>
            </div>

            {/* Results Count Bar */}
            <div className="flex items-center justify-between text-[11px] font-mono text-[#666666] pt-2 border-t border-[#1A1A1A]/10">
              <span>
                Displaying <span className="text-[#1A1A1A] font-bold">{skills.length}</span> listed competencies
              </span>
              <span>Sorted by technical discipline</span>
            </div>
          </div>
        </ScrollReveal>

        {/* Skills Directory Content */}
        <ScrollReveal delay={0.12}>
          {loading && skills.length === 0 ? (
            <div className="bg-white border border-[#1A1A1A] p-6 space-y-4">
              {[1, 2, 3, 4, 5, 6].map((idx) => (
                <div key={idx} className="animate-pulse space-y-2 py-3 border-b border-[#1A1A1A]/10">
                  <div className="h-4 bg-[#E5E2DD] rounded w-1/4" />
                  <div className="h-3 bg-[#E5E2DD] rounded w-3/4" />
                </div>
              ))}
            </div>
          ) : skills.length === 0 ? (
            <div className="text-center py-12 bg-white border border-[#1A1A1A] p-8">
              <p className="font-serif text-lg text-[#1A1A1A]">No technical skills match the current search filter.</p>
              <button
                type="button"
                onClick={() => {
                  setSelectedCategory('all');
                  setSearchQuery('');
                }}
                className="mt-3 text-xs font-sans uppercase tracking-widest font-bold text-[#1A1A1A] underline underline-offset-4"
              >
                Reset filters
              </button>
            </div>
          ) : groupedSkills ? (
            /* Grouped View: When 'All Disciplines' is active without an active search filter */
            <div className="space-y-8">
              {groupedSkills.map((group) => {
                const GroupIcon = group.icon;
                return (
                  <div key={group.category} className="bg-white border border-[#1A1A1A] shadow-xs overflow-hidden">
                    {/* Category Block Header */}
                    <div className="bg-[#FAF8F5] border-b border-[#1A1A1A] p-4 sm:px-6 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                      <div className="flex items-center gap-2.5">
                        <div className="w-7 h-7 bg-[#1A1A1A] text-white flex items-center justify-center shrink-0">
                          <GroupIcon className="w-3.5 h-3.5 text-[#F5F2ED]" />
                        </div>
                        <div>
                          <h3 className="font-serif font-bold text-base text-[#1A1A1A]">{group.title}</h3>
                          <p className="text-xs font-sans text-[#666666]">{group.description}</p>
                        </div>
                      </div>
                      <span className="font-mono text-xs font-semibold text-[#1A1A1A] bg-[#E5E2DD] px-2.5 py-1 border border-[#1A1A1A]/20 self-start sm:self-auto">
                        {group.items.length} {group.items.length === 1 ? 'Skill' : 'Skills'}
                      </span>
                    </div>

                    {/* Table Header (Hidden on small mobile) */}
                    <div className="hidden md:grid grid-cols-12 gap-4 px-6 py-2.5 bg-[#F5F2ED]/60 border-b border-[#1A1A1A]/15 text-[10px] font-mono uppercase tracking-widest text-[#666666] font-semibold">
                      <div className="col-span-3">Skill / Technology</div>
                      <div className="col-span-6">Practical Application & Execution Focus</div>
                      <div className="col-span-3 text-right">Topics & Tags</div>
                    </div>

                    {/* Skill Rows */}
                    <div className="divide-y divide-[#1A1A1A]/10">
                      {group.items.map((skill) => (
                        <div
                          key={skill.id}
                          className="px-4 sm:px-6 py-4 hover:bg-[#FAF8F5] transition flex flex-col md:grid md:grid-cols-12 md:gap-4 md:items-center gap-2.5"
                        >
                          {/* Column 1: Skill Name */}
                          <div className="md:col-span-3">
                            <span className="font-serif font-bold text-sm sm:text-base text-[#1A1A1A]">
                              {skill.name}
                            </span>
                          </div>

                          {/* Column 2: Practical Focus Description */}
                          <div className="md:col-span-6">
                            <p className="text-xs font-sans text-[#333333] leading-relaxed">
                              {skill.highlight}
                            </p>
                          </div>

                          {/* Column 3: Tech Tags */}
                          <div className="md:col-span-3 flex flex-wrap gap-1.5 md:justify-end">
                            {skill.tags.map((tag) => (
                              <span
                                key={tag}
                                className="px-2 py-0.5 text-[10px] font-mono border border-[#1A1A1A]/20 bg-[#F5F2ED] text-[#1A1A1A]"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            /* Flat List View: When a specific category is chosen or search term is active */
            <div className="bg-white border border-[#1A1A1A] shadow-xs overflow-hidden">
              {/* Table Column Headers */}
              <div className="hidden md:grid grid-cols-12 gap-4 px-6 py-3 bg-[#FAF8F5] border-b border-[#1A1A1A] text-[10px] font-mono uppercase tracking-widest text-[#666666] font-semibold">
                <div className="col-span-3">Skill / Discipline</div>
                <div className="col-span-6">Practical Application & Context</div>
                <div className="col-span-3 text-right">Topics & Tags</div>
              </div>

              {/* Items List */}
              <div className="divide-y divide-[#1A1A1A]/10">
                {skills.map((skill) => (
                  <div
                    key={skill.id}
                    className="px-4 sm:px-6 py-4 hover:bg-[#FAF8F5] transition flex flex-col md:grid md:grid-cols-12 md:gap-4 md:items-center gap-2.5"
                  >
                    {/* Skill Identifier */}
                    <div className="md:col-span-3">
                      <div className="font-serif font-bold text-sm sm:text-base text-[#1A1A1A]">
                        {skill.name}
                      </div>
                      <div className="text-[11px] font-mono text-[#666666] mt-0.5 capitalize">
                        {getCategoryLabel(skill.category)}
                      </div>
                    </div>

                    {/* Practical Application */}
                    <div className="md:col-span-6">
                      <p className="text-xs font-sans text-[#333333] leading-relaxed">
                        {skill.highlight}
                      </p>
                    </div>

                    {/* Associated Tags */}
                    <div className="md:col-span-3 flex flex-wrap gap-1.5 md:justify-end">
                      {skill.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-0.5 text-[10px] font-mono border border-[#1A1A1A]/20 bg-[#F5F2ED] text-[#1A1A1A]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </ScrollReveal>
      </div>
    </section>
  );
};
