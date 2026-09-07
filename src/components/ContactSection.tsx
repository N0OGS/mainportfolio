import React, { useState } from 'react';
import { Send, CheckCircle2, AlertCircle, Mail, Clock, ShieldCheck, MapPin, Phone, Linkedin, Github } from 'lucide-react';
import { ContactSubmission, ContactResponse } from '../types/portfolio';
import { portfolioApi } from '../services/portfolioApi';
import { ScrollReveal } from './ScrollReveal';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState<ContactSubmission>({
    name: '',
    email: '',
    subject: '',
    message: '',
    inquiryType: 'hiring'
  });

  const [submitting, setSubmitting] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [successResponse, setSuccessResponse] = useState<ContactResponse | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setSuccessResponse(null);

    // Client-side validation
    if (!formData.name.trim()) {
      setError('Please provide your name.');
      return;
    }
    if (!formData.email.trim() || !formData.email.includes('@')) {
      setError('Please provide a valid email address.');
      return;
    }
    if (!formData.message.trim() || formData.message.trim().length < 10) {
      setError('Message should contain at least 10 characters.');
      return;
    }

    setSubmitting(true);
    try {
      const response = await portfolioApi.submitContact(formData);

      if (response.success && response.data) {
        setSuccessResponse(response.data);
        // Reset form
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: '',
          inquiryType: 'hiring'
        });
      } else {
        setError(
          (response.meta?.filterApplied?.error as string) ||
          'Submission rejected by server. Please verify fields and try again.'
        );
      }
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : 'Network error sending message');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-16 md:py-24 bg-[#F5F2ED] border-b border-[#1A1A1A]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <ScrollReveal>
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12 pb-4 border-b border-[#1A1A1A]/20">
            <div>
              <div className="text-[11px] font-sans uppercase tracking-[0.3em] text-[#666666] font-semibold mb-1">
                Direct Inquiry Channel
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight text-[#1A1A1A]">
                Initiate Technical Collaboration
              </h2>
              <p className="text-xs sm:text-sm font-sans text-[#666666] mt-1">
                Send a direct message for job opportunities, hardware projects, or collaborative engineering.
              </p>
            </div>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left Column: Context & Availability */}
          <div className="lg:col-span-5">
            <ScrollReveal delay={0.12}>
              <div className="space-y-6">
                <div className="bg-white border border-[#1A1A1A] p-6 shadow-xs space-y-4">
                  <h3 className="font-serif text-xl font-bold text-[#1A1A1A]">
                    Engagement Profiles
                  </h3>
                  <p className="text-sm font-sans text-[#444444] leading-relaxed">
                    Currently reviewing Computer Engineering opportunities, Hardware-Software Integration, Semiconductor Design Verification, and Cloud AI solutions.
                  </p>

                  <div className="space-y-3 pt-3 border-t border-[#1A1A1A]/10 text-xs">
                    <div className="flex items-center gap-2.5 text-[#333333]">
                      <Clock className="w-4 h-4 text-[#1A1A1A] shrink-0" />
                      <span>Response turnaround: <strong className="font-semibold text-[#1A1A1A]">Prompt response within 24 hours</strong></span>
                    </div>
                    <div className="flex items-center gap-2.5 text-[#333333]">
                      <MapPin className="w-4 h-4 text-[#1A1A1A] shrink-0" />
                      <span>Based in Sta. Rosa City, Laguna, Philippines (PHT / UTC+8)</span>
                    </div>
                    <div className="flex items-center gap-2.5 text-[#333333]">
                      <ShieldCheck className="w-4 h-4 text-emerald-700 shrink-0" />
                      <span>Encrypted message receipt with unique tracking ID</span>
                    </div>
                  </div>
                </div>

                <div className="bg-white border border-[#1A1A1A] p-6 shadow-xs space-y-3">
                  <span className="text-[10px] font-sans uppercase tracking-widest font-bold text-[#666666]">
                    Direct Contact & Networks
                  </span>
                  <div className="space-y-2">
                    <a
                      href="mailto:omlnunag2002@gmail.com"
                      className="font-mono text-sm font-semibold text-[#1A1A1A] hover:underline underline-offset-4 flex items-center gap-2 transition"
                    >
                      <Mail className="w-4 h-4 text-[#1A1A1A]" />
                      <span>omlnunag2002@gmail.com</span>
                    </a>
                    <a
                      href="tel:+639089657357"
                      className="font-mono text-sm font-semibold text-[#1A1A1A] hover:underline underline-offset-4 flex items-center gap-2 transition"
                    >
                      <Phone className="w-4 h-4 text-[#1A1A1A]" />
                      <span>+63 908 965 7357</span>
                    </a>
                    <a
                      href="https://www.linkedin.com/in/oliver-miguel-nunag-16baa0286/"
                      target="_blank"
                      rel="noreferrer"
                      className="font-mono text-xs font-semibold text-[#1A1A1A] hover:underline underline-offset-4 flex items-center gap-2 transition"
                    >
                      <Linkedin className="w-4 h-4 text-[#1A1A1A]" />
                      <span>linkedin.com/in/oliver-miguel-nunag-16baa0286</span>
                    </a>
                    <a
                      href="https://github.com/N0OGS"
                      target="_blank"
                      rel="noreferrer"
                      className="font-mono text-xs font-semibold text-[#1A1A1A] hover:underline underline-offset-4 flex items-center gap-2 transition"
                    >
                      <Github className="w-4 h-4 text-[#1A1A1A]" />
                      <span>github.com/N0OGS</span>
                    </a>
                  </div>
                  <p className="text-xs font-sans text-[#666666]">
                    Available for engineering roles, technical internships, and innovative project collaborations.
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <ScrollReveal delay={0.18}>
              <div className="bg-white border border-[#1A1A1A] p-6 sm:p-8 shadow-xs">
                {successResponse ? (
                  <div className="p-6 bg-[#F5F2ED] border border-[#1A1A1A] space-y-4">
                    <div className="flex items-center gap-2 text-[#1A1A1A] font-serif font-bold text-lg">
                      <CheckCircle2 className="w-5 h-5 text-emerald-700 shrink-0" />
                      <span>Inquiry Successfully Registered</span>
                    </div>
                    <p className="text-sm font-sans text-[#444444] leading-relaxed">
                      {successResponse.message}
                    </p>
                    <div className="text-xs font-mono bg-white p-3 border border-[#1A1A1A]/30 text-[#1A1A1A] space-y-1">
                      <div>Tracking Ticket: <strong>{successResponse.ticketId}</strong></div>
                      <div className="text-[#666666]">Timestamp: {successResponse.timestamp}</div>
                    </div>
                    <button
                      type="button"
                      onClick={() => setSuccessResponse(null)}
                      className="mt-2 text-xs font-sans uppercase tracking-wider font-semibold px-4 py-2 border border-[#1A1A1A] bg-[#1A1A1A] text-white hover:bg-white hover:text-[#1A1A1A] transition"
                    >
                      Send Another Inquiry
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    {error && (
                      <div className="p-3 bg-rose-50 border border-rose-600 flex items-center gap-2 text-xs text-rose-900">
                        <AlertCircle className="w-4 h-4 shrink-0" />
                        <span>{error}</span>
                      </div>
                    )}

                    {/* Inquiry Type Radio / Pill selector */}
                    <div className="space-y-1.5">
                      <label className="block text-[10px] font-sans uppercase tracking-widest font-bold text-[#666666]">
                        Inquiry Category
                      </label>
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                        {(['hiring', 'advisory', 'project', 'general'] as const).map((type) => (
                          <button
                            key={type}
                            type="button"
                            onClick={() => setFormData({ ...formData, inquiryType: type })}
                            className={`px-3 py-2 text-xs font-sans uppercase tracking-wider font-semibold border text-center transition ${
                              formData.inquiryType === type
                                ? 'bg-[#1A1A1A] text-white border-[#1A1A1A] shadow-xs'
                                : 'bg-[#F5F2ED] text-[#1A1A1A] border-[#1A1A1A]/30 hover:border-[#1A1A1A] hover:bg-[#E5E2DD]'
                            }`}
                          >
                            {type}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-1">
                        <label className="block text-xs font-sans font-semibold text-[#1A1A1A]">
                          Your Name *
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="e.g. Sarah Connor"
                          className="w-full px-3 py-2 text-xs font-sans border border-[#1A1A1A] focus:outline-hidden focus:ring-1 focus:ring-[#1A1A1A] bg-[#F5F2ED]/40 focus:bg-white"
                        />
                      </div>

                      <div className="space-y-1">
                        <label className="block text-xs font-sans font-semibold text-[#1A1A1A]">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="sarah@company.com"
                          className="w-full px-3 py-2 text-xs font-sans border border-[#1A1A1A] focus:outline-hidden focus:ring-1 focus:ring-[#1A1A1A] bg-[#F5F2ED]/40 focus:bg-white"
                        />
                      </div>
                    </div>

                    <div className="space-y-1">
                      <label className="block text-xs font-sans font-semibold text-[#1A1A1A]">
                        Subject / Topic
                      </label>
                      <input
                        type="text"
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        placeholder="Staff Architect Opportunity / Advisory Discussion"
                        className="w-full px-3 py-2 text-xs font-sans border border-[#1A1A1A] focus:outline-hidden focus:ring-1 focus:ring-[#1A1A1A] bg-[#F5F2ED]/40 focus:bg-white"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="block text-xs font-sans font-semibold text-[#1A1A1A]">
                        Message *
                      </label>
                      <textarea
                        required
                        rows={4}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Please share details about your team, tech stack, or problem statement..."
                        className="w-full px-3 py-2 text-xs font-sans border border-[#1A1A1A] focus:outline-hidden focus:ring-1 focus:ring-[#1A1A1A] bg-[#F5F2ED]/40 focus:bg-white leading-relaxed"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={submitting}
                      className="w-full flex items-center justify-center gap-2 px-5 py-3 text-xs font-sans uppercase tracking-widest font-semibold border border-[#1A1A1A] bg-[#1A1A1A] hover:bg-white hover:text-[#1A1A1A] text-white shadow-xs transition disabled:opacity-50 cursor-pointer"
                    >
                      {submitting ? (
                        <span>Sending Message...</span>
                      ) : (
                        <>
                          <span>Send Message</span>
                          <Send className="w-3.5 h-3.5" />
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
};
