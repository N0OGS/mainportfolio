import React from 'react';
import { Terminal, Github, Linkedin, ArrowUp } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';

interface FooterProps {
  onOpenApiInspector?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenApiInspector }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#1A1A1A] text-[#E5E2DD] py-14 border-t-2 border-[#1A1A1A]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <ScrollReveal>
          <div className="space-y-8">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-8 border-b border-[#333333]">
              <div>
                <div className="flex items-center gap-2.5 text-white font-serif font-bold text-lg">
                  <div className="w-7 h-7 bg-white text-[#1A1A1A] flex items-center justify-center font-mono text-xs font-bold border border-white">
                    ON
                  </div>
                  <span>Oliver Miguel L. Nunag • Computer Engineering</span>
                </div>
                <p className="text-xs font-sans text-[#999999] mt-1.5">
                  De La Salle University Computer Engineering Graduate • Hardware-Software Prototyping & Systems
                </p>
              </div>

              <div className="flex items-center gap-3">
                {onOpenApiInspector && (
                  <button
                    type="button"
                    onClick={onOpenApiInspector}
                    className="inline-flex items-center gap-1.5 px-3.5 py-1.5 border border-[#444444] bg-[#2A2A2A] hover:bg-white hover:text-[#1A1A1A] text-white text-xs font-mono transition"
                  >
                    <Terminal className="w-3.5 h-3.5" />
                    <span>API Inspector</span>
                  </button>
                )}

                <button
                  type="button"
                  onClick={scrollToTop}
                  className="p-2 border border-[#444444] bg-[#2A2A2A] hover:bg-white hover:text-[#1A1A1A] text-[#CCCCCC] hover:text-[#1A1A1A] transition"
                  aria-label="Back to top"
                >
                  <ArrowUp className="w-4 h-4" />
                </button>
              </div>
            </div>

            <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#888888]">
              <div className="font-sans">
                © {new Date().getFullYear()} Oliver Miguel L. Nunag. Built with React 19, TypeScript & Tailwind CSS.
              </div>
              <div className="flex items-center gap-5">
                <a
                  href="https://github.com/N0OGS"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-white transition flex items-center gap-1.5 font-sans uppercase tracking-wider font-semibold"
                >
                  <Github className="w-3.5 h-3.5" />
                  <span>GitHub (@N0OGS)</span>
                </a>
                <a
                  href="https://www.linkedin.com/in/oliver-miguel-nunag-16baa0286/"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-white transition flex items-center gap-1.5 font-sans uppercase tracking-wider font-semibold"
                >
                  <Linkedin className="w-3.5 h-3.5" />
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </footer>
  );
};
