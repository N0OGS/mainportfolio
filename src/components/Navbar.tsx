import React, { useState } from 'react';
import { Terminal, Menu, X, ArrowUpRight, Sparkles } from 'lucide-react';

interface NavbarProps {
  onOpenApiInspector?: () => void;
  availabilityBadge?: string;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenApiInspector }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Experience', href: '#experience' },
    { label: 'Milestones', href: '#activity' },
    { label: 'Contact', href: '#contact' }
  ];

  return (
    <header className="sticky top-0 z-40 bg-[#F5F2ED]/95 backdrop-blur-md border-b border-[#1A1A1A]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between md:grid md:grid-cols-[auto_1fr_auto] gap-4 sm:gap-6">
        {/* Left: Brand Monogram & Name */}
        <div className="flex items-center shrink-0">
          <a
            href="#"
            className="flex items-center gap-2.5 hover:opacity-85 transition group shrink-0"
          >
            <div className="w-8 h-8 border border-[#1A1A1A] bg-[#1A1A1A] text-[#F5F2ED] flex items-center justify-center font-serif text-xs font-bold italic tracking-tighter shrink-0">
              ON
            </div>
            <span className="font-serif text-lg sm:text-xl font-bold tracking-tight uppercase italic text-[#1A1A1A] whitespace-nowrap">
              Oliver Nunag
            </span>
          </a>
        </div>

        {/* Center: Symmetrical Navigation Links */}
        <nav className="hidden md:flex items-center justify-center gap-5 lg:gap-7 xl:gap-8 font-sans text-[11px] uppercase tracking-[0.2em] font-semibold text-[#666666]">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="hover:text-[#1A1A1A] transition-colors py-1 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1.5px] after:bg-[#1A1A1A] hover:after:w-full after:transition-all whitespace-nowrap"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right: Actions */}
        <div className="flex items-center justify-end gap-2.5 sm:gap-3 shrink-0">
          {onOpenApiInspector && (
            <button
              type="button"
              onClick={onOpenApiInspector}
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono font-medium border border-[#1A1A1A] bg-white text-[#1A1A1A] hover:bg-[#1A1A1A] hover:text-white transition shadow-2xs"
              title="Inspect Modular REST API endpoints"
            >
              <Terminal className="w-3.5 h-3.5 text-[#666666]" />
              <span>API Explorer</span>
            </button>
          )}

          <a
            href="#contact"
            className="hidden sm:inline-flex items-center gap-1.5 px-4 py-1.5 text-[11px] font-sans uppercase tracking-widest font-semibold border border-[#1A1A1A] bg-[#1A1A1A] text-white hover:bg-[#F5F2ED] hover:text-[#1A1A1A] transition shadow-2xs"
          >
            <span>Let's Talk</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>

          {/* Mobile triggers */}
          <div className="flex md:hidden items-center gap-2">
            {onOpenApiInspector && (
              <button
                type="button"
                onClick={onOpenApiInspector}
                className="p-2 border border-[#1A1A1A] bg-white text-[#1A1A1A] hover:bg-[#1A1A1A] hover:text-white transition"
                aria-label="API Explorer"
              >
                <Terminal className="w-4 h-4" />
              </button>
            )}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 border border-[#1A1A1A] bg-white text-[#1A1A1A] hover:bg-[#1A1A1A] hover:text-white transition"
              aria-label="Toggle Navigation"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu overlay */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#F5F2ED] border-b border-[#1A1A1A] px-4 pt-4 pb-6 space-y-3">
          <nav className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 text-xs font-sans uppercase tracking-[0.2em] font-semibold text-[#666666] hover:text-[#1A1A1A] hover:bg-[#E5E2DD] transition"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="pt-3 border-t border-[#1A1A1A]/20 flex flex-col gap-2">
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center px-4 py-2.5 text-xs font-sans uppercase tracking-widest font-semibold border border-[#1A1A1A] bg-[#1A1A1A] text-white"
            >
              Get in Touch
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
