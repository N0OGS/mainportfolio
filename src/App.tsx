import React, { useState } from 'react';
import { portfolioApi } from './services/portfolioApi';
import { useSectionApi } from './hooks/useSectionApi';
import { Navbar } from './components/Navbar';
import { ScrollProgressBar } from './components/ScrollProgressBar';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { SkillsSection } from './components/SkillsSection';
import { ProjectsSection } from './components/ProjectsSection';
import { ExperienceSection } from './components/ExperienceSection';
import { ActivityStatsSection } from './components/ActivityStatsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ApiModalInspector } from './components/ApiModalInspector';

export default function App() {
  const [apiInspectorOpen, setApiInspectorOpen] = useState(false);

  // Profile data fetch for Hero & About sections
  const {
    data: profile,
    loading: profileLoading,
    error: profileError,
    latencyMs: profileLatency,
    refetch: refetchProfile
  } = useSectionApi({
    fetcher: portfolioApi.getProfile
  });

  return (
    <div className="min-h-screen flex flex-col bg-[#F5F2ED] text-[#1A1A1A] selection:bg-[#1A1A1A] selection:text-[#F5F2ED]">
      {/* Scroll Depth Progress Bar */}
      <ScrollProgressBar />

      {/* Sticky Header */}
      <Navbar
        onOpenApiInspector={() => setApiInspectorOpen(true)}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Section 1: Hero */}
        <HeroSection
          profile={profile}
          loading={profileLoading}
          error={profileError}
          latencyMs={profileLatency}
          onRefresh={refetchProfile}
        />

        {/* Section 2: About & Philosophy */}
        <AboutSection
          profile={profile}
          loading={profileLoading}
          error={profileError}
          latencyMs={profileLatency}
          onRefresh={refetchProfile}
        />

        {/* Section 3: Modular Skills Matrix (API: /api/skills) */}
        <SkillsSection />

        {/* Section 4: Production Projects (API: /api/projects) */}
        <ProjectsSection />

        {/* Section 5: Experience Timeline (API: /api/experience) */}
        <ExperienceSection />

        {/* Section 6: Telemetry & Activity Stats (API: /api/stats) */}
        <ActivityStatsSection />

        {/* Section 7: Contact & Inquiries (API: /api/contact) */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer onOpenApiInspector={() => setApiInspectorOpen(true)} />

      {/* Interactive Live API Inspector Modal */}
      <ApiModalInspector
        isOpen={apiInspectorOpen}
        onClose={() => setApiInspectorOpen(false)}
      />
    </div>
  );
}
