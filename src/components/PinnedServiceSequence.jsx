import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, TrendingUp, ShieldCheck, Clock, Cpu, CheckCircle2 } from 'lucide-react';
import { KhatamStar, MashrabiyaPattern } from './SazoArch';
import { EASE_LUXURY } from '../lib/motionTokens';

export default function PinnedServiceSequence() {
  const [activePanel, setActivePanel] = useState(0);

  const panels = [
    {
      num: "01",
      title: "GROWTH",
      subline: "More movement.\nLess noise.",
      tag: "Revenue & Sales Outbound",
      link: "/services/growth",
      icon: TrendingUp,
      accent: "#B59661",
      descriptor: "Structured market research, tailored narrative, and respectful outbound communication connecting your business with relevant opportunities.",
      previewType: "pipeline"
    },
    {
      num: "02",
      title: "PROCUREMENT",
      subline: "Better partners.\nBetter terms.",
      tag: "Vendor & Sourcing Terms",
      link: "/services/procurement",
      icon: ShieldCheck,
      accent: "#68694C",
      descriptor: "Supplier research, quotation comparisons, negotiation support and procurement coordination.",
      previewType: "procurement"
    },
    {
      num: "03",
      title: "OPERATIONS",
      subline: "Make room for\nwhat matters.",
      tag: "Recurring Back-Office Structure",
      link: "/services/operations",
      icon: Clock,
      accent: "#B59661",
      descriptor: "We help businesses organise recurring work, improve coordination and bring structure to everyday operations.",
      previewType: "operations"
    },
    {
      num: "04",
      title: "AI SYSTEMS",
      subline: "Technology with\na purpose.",
      tag: "Internal Machine Leverage",
      link: "/services/ai-systems",
      icon: Cpu,
      accent: "#68694C",
      descriptor: "We explore practical ways to reduce repetitive work through automation and human-supervised AI systems.",
      previewType: "ai"
    }
  ];

  return (
    <div className="relative my-12">
      {/* Tab Navigation Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-[#29251F]/15 pb-4 mb-8 gap-4">
        <div className="flex items-center gap-2">
          <KhatamStar className="w-3.5 h-3.5 text-[#B59661]" />
          <span className="text-xs uppercase tracking-[0.25em] text-[#6C6255] font-semibold">
            04 Functional Dimensions
          </span>
        </div>
        
        <div className="flex items-center gap-1.5 sm:gap-3 overflow-x-auto pb-1 sm:pb-0">
          {panels.map((p, idx) => (
            <button
              key={p.num}
              onClick={() => setActivePanel(idx)}
              className={`px-3.5 sm:px-5 py-2 text-xs tracking-widest uppercase transition-all duration-300 rounded-xs cursor-pointer flex items-center gap-2 ${
                activePanel === idx
                  ? 'bg-[#29251F] text-[#FAF6EE] font-medium shadow-xs'
                  : 'text-[#6C6255] hover:text-[#29251F] bg-[#E8D7BC]/40 font-normal hover:bg-[#E8D7BC]/70'
              }`}
            >
              <span className="text-[10px] text-[#B59661] font-semibold">{p.num}</span>
              <span className="hidden md:inline">{p.title}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Main Interactive Stage */}
      <div className="relative min-h-[580px] bg-[#FAF6EE] border border-[#29251F]/15 rounded-sm p-6 sm:p-12 lg:p-16 overflow-hidden shadow-xs">
        <MashrabiyaPattern className="opacity-[0.03]" />

        <AnimatePresence mode="wait">
          <motion.div
            key={activePanel}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.6, ease: EASE_LUXURY }}
            className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center h-full"
          >
            {/* Left Column: Editorial Information */}
            <div className="lg:col-span-5 flex flex-col justify-between space-y-8">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <span className="text-3xl sm:text-4xl text-[#B59661] font-semibold">
                    {panels[activePanel].num}
                  </span>
                  <div className="h-4 w-[1px] bg-[#29251F]/20" />
                  <span className="text-xs uppercase tracking-[0.22em] text-[#68694C] font-semibold">
                    {panels[activePanel].tag}
                  </span>
                </div>

                <h3 className="text-4xl sm:text-5xl lg:text-6xl text-[#29251F] font-semibold tracking-tight leading-[0.96]">
                  {panels[activePanel].title}
                </h3>

                <p className="text-xl sm:text-2xl text-[#6C6255] font-normal whitespace-pre-line leading-tight">
                  {panels[activePanel].subline}
                </p>

                <p className="text-sm text-[#29251F]/80 font-normal leading-relaxed pt-2">
                  {panels[activePanel].descriptor}
                </p>
              </div>

              {/* Action Button & Indicator Dots */}
              <div className="pt-6 border-t border-[#29251F]/10 flex items-center justify-between">
                <Link
                  to={panels[activePanel].link}
                  className="inline-flex items-center gap-3 text-xs uppercase tracking-[0.22em] font-medium text-[#29251F] hover:text-[#B59661] transition-colors group cursor-pointer"
                >
                  <span>Explore {panels[activePanel].title}</span>
                  <ArrowUpRight className="w-4 h-4 text-[#B59661] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </Link>

                <div className="flex items-center gap-2">
                  {panels.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setActivePanel(i)}
                      aria-label={`Go to discipline ${i + 1}`}
                      className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                        activePanel === i ? 'w-8 bg-[#B59661]' : 'w-2 bg-[#29251F]/20 hover:bg-[#29251F]/40'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column: Art-Directed Interactive Visual Simulators */}
            <div className="lg:col-span-7 bg-[#F3EADB]/70 border border-[#29251F]/10 rounded-sm p-6 sm:p-8 relative">
              {panels[activePanel].previewType === "pipeline" && (
                <div className="space-y-6">
                  <div className="flex items-center justify-between border-b border-[#29251F]/10 pb-3">
                    <span className="text-xs uppercase tracking-widest text-[#68694C] font-semibold">
                      Outbound Workflow Architecture
                    </span>
                    <span className="text-[11px] bg-[#FAF6EE] px-2 py-0.5 rounded-xs border border-[#29251F]/10 text-[#29251F] font-medium">
                      Intended Process
                    </span>
                  </div>

                  {/* Pipeline Stage Visualizer */}
                  <div className="space-y-3">
                    {[
                      { stage: "01 Market & Account Research", detail: "Identifying relevant commercial counterparties", active: true },
                      { stage: "02 Narrative & Positioning", detail: "Tailored communication for decision-makers", active: true },
                      { stage: "03 Direct Outreach", detail: "Respectful, non-spam engagement protocol", active: true },
                      { stage: "04 Introduction & Dialogue", detail: "Direct connection with leadership", active: false }
                    ].map((step, i) => (
                      <div 
                        key={step.stage}
                        className={`p-3.5 rounded-xs border flex items-center justify-between text-xs transition-all ${
                          i === 2 
                            ? 'bg-[#FAF6EE] border-[#B59661] shadow-xs' 
                            : 'bg-[#FAF6EE]/60 border-[#29251F]/10'
                        }`}
                      >
                        <div className="flex items-center gap-2.5">
                          <CheckCircle2 className={`w-4 h-4 ${i === 2 ? 'text-[#B59661]' : 'text-[#68694C]'}`} />
                          <span className="font-semibold text-[#29251F]">{step.stage}</span>
                        </div>
                        <span className="text-[#6C6255] font-normal">{step.detail}</span>
                      </div>
                    ))}
                  </div>

                  <div className="p-3 bg-[#FAF6EE] rounded-xs border border-[#29251F]/10 text-[11px] text-[#6C6255] flex items-center justify-between">
                    <span>Outreach Standard</span>
                    <span className="font-semibold text-[#29251F]">Respectful & Thoughtful Engagement</span>
                  </div>
                </div>
              )}

              {panels[activePanel].previewType === "procurement" && (
                <div className="space-y-6">
                  <div className="flex items-center justify-between border-b border-[#29251F]/10 pb-3">
                    <span className="text-xs uppercase tracking-widest text-[#68694C] font-semibold">
                      Procurement Process Demonstration
                    </span>
                    <span className="text-[11px] bg-[#FAF6EE] px-2 py-0.5 rounded-xs border border-[#29251F]/10 text-[#29251F] font-medium">
                      Structured Framework
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="p-4 bg-[#FAF6EE]/50 border border-[#29251F]/10 rounded-xs space-y-3">
                      <span className="text-[10px] uppercase tracking-wider text-[#6C6255] font-medium block">
                        Uncoordinated Baseline
                      </span>
                      <div className="text-xl font-semibold text-[#29251F]">Fragmented Vendors</div>
                      <p className="text-xs text-[#6C6255] leading-relaxed">Ad-hoc ordering, uncompared quotations, unverified contract clauses.</p>
                    </div>

                    <div className="p-4 bg-[#FAF6EE] border border-[#68694C] rounded-xs space-y-3 relative shadow-xs">
                      <span className="text-[10px] uppercase tracking-wider text-[#68694C] font-semibold block">
                        KAMN Structured Review
                      </span>
                      <div className="text-xl font-semibold text-[#68694C]">Normalized Comparisons</div>
                      <p className="text-xs text-[#29251F]/80 leading-relaxed">Systematic quotation benchmarking, terms comparison, and negotiation support.</p>
                    </div>
                  </div>

                  <div className="p-3 bg-[#FAF6EE] rounded-xs border border-[#29251F]/10 text-[11px] text-[#6C6255] flex items-center justify-between">
                    <span>Review Standard</span>
                    <span className="font-semibold text-[#68694C]">Fiduciary Care & Discretion</span>
                  </div>
                </div>
              )}

              {panels[activePanel].previewType === "operations" && (
                <div className="space-y-6">
                  <div className="flex items-center justify-between border-b border-[#29251F]/10 pb-3">
                    <span className="text-xs uppercase tracking-widest text-[#68694C] font-semibold">
                      Operational Coordination Model
                    </span>
                    <span className="text-[11px] bg-[#FAF6EE] px-2 py-0.5 rounded-xs border border-[#29251F]/10 text-[#29251F] font-medium">
                      Support Desk
                    </span>
                  </div>

                  <div className="space-y-3">
                    <div className="p-4 bg-[#FAF6EE] border border-[#29251F]/10 rounded-xs flex items-center justify-between">
                      <div>
                        <span className="text-xs font-semibold text-[#29251F] block">Recurring Coordination Support</span>
                        <span className="text-[11px] text-[#6C6255]">Handling routine follow-ups, vendor check-ins, and task handoffs</span>
                      </div>
                      <span className="text-xs font-semibold bg-[#FAF6EE] text-[#68694C] border border-[#29251F]/10 px-2.5 py-1 rounded-xs">
                        Active Support
                      </span>
                    </div>

                    <div className="p-4 bg-[#FAF6EE] border border-[#29251F]/10 rounded-xs flex items-center justify-between">
                      <div>
                        <span className="text-xs font-semibold text-[#29251F] block">Structured Executive Briefings</span>
                        <span className="text-[11px] text-[#6C6255]">Synthesized updates highlighting key decisions needed from leadership</span>
                      </div>
                      <span className="text-xs font-semibold bg-[#29251F] text-[#FAF6EE] px-2.5 py-1 rounded-xs">
                        Weekly Summary
                      </span>
                    </div>
                  </div>

                  <div className="p-3 bg-[#FAF6EE] rounded-xs border border-[#29251F]/10 text-[11px] text-[#6C6255] flex items-center justify-between">
                    <span>Operating Rhythm</span>
                    <span className="font-semibold text-[#29251F]">Order, Clarity & Consistency</span>
                  </div>
                </div>
              )}

              {panels[activePanel].previewType === "ai" && (
                <div className="space-y-6">
                  <div className="flex items-center justify-between border-b border-[#29251F]/10 pb-3">
                    <span className="text-xs uppercase tracking-widest text-[#68694C] font-semibold">
                      Supervised AI Workflow Architecture
                    </span>
                    <span className="text-[11px] bg-[#FAF6EE] px-2 py-0.5 rounded-xs border border-[#68694C]/30 text-[#68694C] font-medium">
                      Human Oversight
                    </span>
                  </div>

                  <div className="space-y-3">
                    {[
                      { node: "Inbound Document Parsing", role: "Extracting structured data from recurring files", state: "Structured" },
                      { node: "Contextual Synthesis", role: "Drafting initial summaries and deliverables", state: "Assisted" },
                      { node: "Human Verification", role: "Careful review ensuring accuracy before release", state: "Supervised" }
                    ].map((step, idx) => (
                      <div key={step.node} className="p-3.5 bg-[#FAF6EE] border border-[#29251F]/10 rounded-xs flex items-center justify-between text-xs">
                        <div className="flex items-center gap-3">
                          <span className="w-5 h-5 rounded-full bg-[#E8D7BC] text-[#29251F] flex items-center justify-center font-semibold text-[10px]">
                            {idx + 1}
                          </span>
                          <div>
                            <span className="font-semibold text-[#29251F] block">{step.node}</span>
                            <span className="text-[11px] text-[#6C6255]">{step.role}</span>
                          </div>
                        </div>
                        <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-xs ${
                          idx === 2 ? 'bg-[#68694C] text-[#FAF6EE]' : 'bg-[#E8D7BC]/40 text-[#29251F]'
                        }`}>
                          {step.state}
                        </span>
                      </div>
                    ))}
                  </div>

                  <div className="p-3 bg-[#FAF6EE] rounded-xs border border-[#29251F]/10 text-[11px] text-[#6C6255] flex items-center justify-between">
                    <span>Guiding Principle</span>
                    <span className="font-semibold text-[#68694C]">Accountability & Diligence</span>
                  </div>
                </div>
              )}
            </div>

          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
