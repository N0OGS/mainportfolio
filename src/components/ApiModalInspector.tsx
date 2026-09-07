import React, { useState, useEffect } from 'react';
import { X, Play, RefreshCw, Copy, Check, Terminal, ExternalLink } from 'lucide-react';

interface ApiModalInspectorProps {
  isOpen: boolean;
  onClose: () => void;
}

interface EndpointDef {
  path: string;
  method: 'GET' | 'POST';
  section: string;
  description: string;
  sampleBody?: object;
}

const ENDPOINTS: EndpointDef[] = [
  {
    path: '/api/profile',
    method: 'GET',
    section: 'Hero & About',
    description: 'Returns architect profile, bio, operational timezone, metrics & availability'
  },
  {
    path: '/api/skills?category=frontend',
    method: 'GET',
    section: 'Skills Matrix',
    description: 'Returns categorized technical competencies with proficiency & architectural highlights'
  },
  {
    path: '/api/projects?featured=true',
    method: 'GET',
    section: 'Projects',
    description: 'Returns production projects with benchmarks, architecture notes and repositories'
  },
  {
    path: '/api/experience',
    method: 'GET',
    section: 'Experience',
    description: 'Returns career timeline with quantified engineering deliverables'
  },
  {
    path: '/api/stats',
    method: 'GET',
    section: 'Telemetry',
    description: 'Returns code commit volume, language distribution, and uptime SLA'
  },
  {
    path: '/api/health',
    method: 'GET',
    section: 'System Health',
    description: 'General system probe and available modular route registry'
  }
];

export const ApiModalInspector: React.FC<ApiModalInspectorProps> = ({ isOpen, onClose }) => {
  const [selectedEndpoint, setSelectedEndpoint] = useState<EndpointDef>(ENDPOINTS[0]);
  const [responseJson, setResponseJson] = useState<string>('Loading...');
  const [loading, setLoading] = useState<boolean>(false);
  const [latencyMs, setLatencyMs] = useState<number>(0);
  const [statusCode, setStatusCode] = useState<number>(200);
  const [copied, setCopied] = useState<boolean>(false);

  const executeRequest = async (endpoint: EndpointDef) => {
    setLoading(true);
    setResponseJson('Executing request...');
    const start = performance.now();

    try {
      const res = await fetch(endpoint.path);
      const latency = Math.round(performance.now() - start);
      setLatencyMs(latency);
      setStatusCode(res.status);

      const json = await res.json();
      setResponseJson(JSON.stringify(json, null, 2));
    } catch (err: unknown) {
      setLatencyMs(Math.round(performance.now() - start));
      setStatusCode(500);
      setResponseJson(
        JSON.stringify(
          {
            error: 'Request execution failed',
            message: err instanceof Error ? err.message : 'Unknown network failure'
          },
          null,
          2
        )
      );
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (isOpen) {
      executeRequest(selectedEndpoint);
    }
  }, [isOpen, selectedEndpoint]);

  const handleCopy = () => {
    navigator.clipboard.writeText(responseJson);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 bg-[#1A1A1A]/70 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6"
      onClick={onClose}
    >
      <div
        className="bg-[#1A1A1A] border-2 border-[#333333] text-[#E5E2DD] max-w-4xl w-full max-h-[90vh] overflow-hidden shadow-2xl flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#333333] bg-[#111111]">
          <div className="flex items-center gap-2.5">
            <div className="w-7 h-7 bg-white text-[#1A1A1A] flex items-center justify-center font-mono text-xs font-bold">
              <Terminal className="w-4 h-4" />
            </div>
            <div>
              <h3 className="font-serif font-bold text-base text-white flex items-center gap-2.5">
                <span>Modular REST API Inspector</span>
                <span className="text-[10px] font-mono uppercase tracking-widest text-emerald-400 bg-emerald-950/80 border border-emerald-700/60 px-2 py-0.5">
                  Live Server Active
                </span>
              </h3>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="p-1.5 text-[#999999] hover:text-white border border-[#444444] bg-[#222222] hover:bg-[#333333] transition"
            aria-label="Close modal"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="flex-1 grid grid-cols-1 md:grid-cols-12 overflow-hidden">
          {/* Left Endpoint Sidebar */}
          <div className="md:col-span-4 border-r border-[#333333] bg-[#141414] p-4 space-y-2 overflow-y-auto max-h-[300px] md:max-h-none">
            <div className="text-[10px] font-sans uppercase tracking-[0.25em] text-[#888888] px-2 pb-1 font-bold">
              Available Endpoints
            </div>
            {ENDPOINTS.map((endpoint) => {
              const isSelected = selectedEndpoint.path === endpoint.path;
              return (
                <button
                  key={endpoint.path}
                  type="button"
                  onClick={() => setSelectedEndpoint(endpoint)}
                  className={`w-full text-left p-2.5 text-xs font-mono transition space-y-1 border ${
                    isSelected
                      ? 'bg-[#222222] text-white border-white/40'
                      : 'text-[#999999] border-transparent hover:bg-[#1A1A1A] hover:text-white'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-emerald-400 text-[10px]">
                      {endpoint.method}
                    </span>
                    <span className="text-[10px] font-sans uppercase tracking-wider text-[#888888]">{endpoint.section}</span>
                  </div>
                  <div className="truncate text-white text-[11px]">{endpoint.path}</div>
                </button>
              );
            })}
          </div>

          {/* Right Request/Response Output */}
          <div className="md:col-span-8 flex flex-col bg-black overflow-hidden">
            {/* Action Bar */}
            <div className="flex items-center justify-between px-4 py-2.5 bg-[#181818] border-b border-[#333333] text-xs font-mono">
              <div className="flex items-center gap-2 overflow-hidden">
                <span className="text-emerald-400 font-bold">{selectedEndpoint.method}</span>
                <span className="text-white truncate">{selectedEndpoint.path}</span>
              </div>

              <div className="flex items-center gap-3 shrink-0">
                <span
                  className={`px-2 py-0.5 border text-[11px] font-mono ${
                    statusCode === 200
                      ? 'text-emerald-400 bg-emerald-950/60 border-emerald-800/60'
                      : 'text-rose-400 bg-rose-950/60 border-rose-800/60'
                  }`}
                >
                  {statusCode} OK ({latencyMs}ms)
                </span>

                <button
                  type="button"
                  onClick={() => executeRequest(selectedEndpoint)}
                  disabled={loading}
                  className="p-1 text-[#CCCCCC] hover:text-white border border-[#444444] bg-[#222222] hover:bg-[#333333] transition"
                  title="Re-run request"
                >
                  <RefreshCw className={`w-3.5 h-3.5 ${loading ? 'animate-spin' : ''}`} />
                </button>

                <button
                  type="button"
                  onClick={handleCopy}
                  className="p-1 text-[#CCCCCC] hover:text-white border border-[#444444] bg-[#222222] hover:bg-[#333333] transition"
                  title="Copy JSON response"
                >
                  {copied ? (
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                  ) : (
                    <Copy className="w-3.5 h-3.5" />
                  )}
                </button>
              </div>
            </div>

            {/* Description subheader */}
            <div className="px-4 py-2 text-xs font-sans text-[#888888] bg-[#141414] border-b border-[#333333]">
              {selectedEndpoint.description}
            </div>

            {/* JSON Output Viewer */}
            <div className="flex-1 p-4 overflow-auto font-mono text-xs text-[#CCCCCC] leading-relaxed max-h-[420px]">
              <pre className="whitespace-pre">{responseJson}</pre>
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-3 border-t border-[#333333] bg-[#111111] text-xs text-[#888888] flex items-center justify-between">
          <div className="flex items-center gap-2 font-sans">
            <span>Client Architecture: Modular service hooks querying Express endpoints.</span>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="px-3.5 py-1.5 border border-[#444444] bg-[#222222] hover:bg-white hover:text-[#1A1A1A] text-white font-sans uppercase tracking-wider text-[11px] font-semibold transition"
          >
            Close Inspector
          </button>
        </div>
      </div>
    </div>
  );
};
