'use client';

import React from 'react';
import { Cpu, Server, Code, Sparkles, ShieldCheck, Database, Layers, Workflow, CheckCircle, TrendingUp } from 'lucide-react';

export const TechArchitectureGraphic: React.FC = () => {
  return (
    <div className="relative w-full max-w-xl mx-auto">
      {/* Outer Subtle Accent Ring */}
      <div className="absolute -inset-1.5 rounded-3xl bg-[#f6921e]/20 blur-lg opacity-60" />

      {/* Main Enterprise Light Glass Box */}
      <div className="relative bg-white border border-slate-200/90 rounded-2xl p-6 shadow-xl backdrop-blur-xl space-y-5">
        
        {/* Header bar of enterprise dashboard */}
        <div className="flex items-center justify-between pb-4 border-b border-slate-100">
          <div className="flex items-center gap-2">
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-rose-400" />
              <div className="w-3 h-3 rounded-full bg-amber-400" />
              <div className="w-3 h-3 rounded-full bg-[#307e3e]" />
            </div>
            <span className="text-xs font-mono text-slate-500 pl-2 font-medium">
              qvantix-enterprise-platform.v2
            </span>
          </div>
          <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-[#307e3e]/10 border border-[#307e3e]/30 text-[#307e3e] text-[11px] font-mono font-semibold">
            <span className="w-1.5 h-1.5 rounded-full bg-[#307e3e] animate-pulse" />
            Production Ready
          </div>
        </div>

        {/* Dynamic Architecture Cards */}
        <div className="grid grid-cols-3 gap-3">
          
          {/* Node 1: Custom Software */}
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-3.5 flex flex-col items-start gap-2 hover:border-[#f6921e]/50 transition-colors group">
            <div className="w-9 h-9 rounded-lg bg-[#f6921e]/10 border border-[#f6921e]/30 flex items-center justify-center text-[#f6921e] group-hover:scale-105 transition-transform">
              <Code className="w-4 h-4" />
            </div>
            <div>
              <p className="text-xs font-bold text-slate-900">Custom Software</p>
              <p className="text-[10px] text-slate-500 font-mono">Bespoke Workflows</p>
            </div>
          </div>

          {/* Node 2: AI & ML */}
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-3.5 flex flex-col items-start gap-2 hover:border-[#f6921e]/50 transition-colors group">
            <div className="w-9 h-9 rounded-lg bg-[#f6921e]/10 border border-[#f6921e]/30 flex items-center justify-center text-[#f6921e] group-hover:scale-105 transition-transform">
              <Sparkles className="w-4 h-4" />
            </div>
            <div>
              <p className="text-xs font-bold text-slate-900">AI Automation</p>
              <p className="text-[10px] text-slate-500 font-mono">Smart Engine</p>
            </div>
          </div>

          {/* Node 3: QA Testing */}
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-3.5 flex flex-col items-start gap-2 hover:border-[#f6921e]/50 transition-colors group">
            <div className="w-9 h-9 rounded-lg bg-[#f6921e]/10 border border-[#f6921e]/30 flex items-center justify-center text-[#f6921e] group-hover:scale-105 transition-transform">
              <ShieldCheck className="w-4 h-4" />
            </div>
            <div>
              <p className="text-xs font-bold text-slate-900">QA Testing</p>
              <p className="text-[10px] text-slate-500 font-mono">Zero Defect Standard</p>
            </div>
          </div>

        </div>

        {/* Central Solution Flow */}
        <div className="relative bg-slate-900 text-white rounded-xl p-4 space-y-3 font-mono text-xs shadow-inner">
          <div className="flex items-center justify-between border-b border-slate-800 pb-2">
            <div className="flex items-center gap-2">
              <Workflow className="w-4 h-4 text-[#f6921e]" />
              <span className="font-sans text-xs font-bold text-white">Digital Transformation Pipeline</span>
            </div>
            <span className="text-[10px] text-[#307e3e] font-semibold">99.9% Uptime</span>
          </div>

          <div className="space-y-2 text-[11px]">
            <div className="flex items-center justify-between p-2 rounded bg-slate-800/80 border border-slate-700">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-3.5 h-3.5 text-[#307e3e]" />
                <span className="text-slate-200 font-sans">Business Requirement Mapping</span>
              </div>
              <span className="text-[#307e3e] font-mono text-[10px]">Verified</span>
            </div>

            <div className="flex items-center justify-between p-2 rounded bg-slate-800/80 border border-slate-700">
              <div className="flex items-center gap-2">
                <Database className="w-3.5 h-3.5 text-[#f6921e]" />
                <span className="text-slate-200 font-sans">Scalable API Architecture</span>
              </div>
              <span className="text-[#f6921e] font-mono text-[10px]">Connected</span>
            </div>

            <div className="flex items-center justify-between p-2 rounded bg-slate-800/80 border border-slate-700">
              <div className="flex items-center gap-2">
                <TrendingUp className="w-3.5 h-3.5 text-[#307e3e]" />
                <span className="text-slate-200 font-sans">SEO & Search Marketing Growth</span>
              </div>
              <span className="text-[#307e3e] font-mono text-[10px]">Active</span>
            </div>
          </div>
        </div>

        {/* Footer Metrics */}
        <div className="grid grid-cols-2 gap-3 pt-1 text-center">
          <div className="bg-[#307e3e]/10 border border-[#307e3e]/30 rounded-lg py-2.5">
            <span className="block text-xs font-bold text-slate-900 font-sans">Tailored Software</span>
            <span className="text-[10px] text-[#307e3e] font-semibold">Built Around Your Business</span>
          </div>
          <div className="bg-[#f6921e]/10 border border-[#f6921e]/30 rounded-lg py-2.5">
            <span className="block text-xs font-bold text-slate-900 font-sans">Proven Execution</span>
            <span className="text-[10px] text-[#d8790c] font-semibold">Tamil Nadu & Global Reach</span>
          </div>
        </div>

      </div>
    </div>
  );
};
