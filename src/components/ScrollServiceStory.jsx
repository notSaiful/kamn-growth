import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ArrowUpRight, ChevronLeft, ChevronRight, TrendingUp, ShieldCheck, Clock, Cpu, CheckCircle2, Search } from 'lucide-react';
import { KhatamStar, MashrabiyaPattern } from './SazoArch';
import { EASE_LUXURY } from '../lib/motionTokens';

export default function ScrollServiceStory() {
  const [activeStep, setActiveStep] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const services = [
    {
      id: "growth",
      num: "01",
      title: "GROWTH",
      subline: "Find new opportunities.",
      tag: "Revenue & Sales Outbound",
      href: "/services/growth",
      icon: TrendingUp,
      accent: "#B59661",
      description: "Structured market research, tailored narrative, and respectful outbound communication connecting your business with relevant opportunities.",
      previewComponent: <GrowthPreview />
    },
    {
      id: "procurement",
      num: "02",
      title: "PROCUREMENT",
      subline: "Better suppliers. Better decisions.",
      tag: "Vendor & Sourcing Terms",
      href: "/services/procurement",
      icon: ShieldCheck,
      accent: "#68694C",
      description: "Supplier research, quotation comparisons, negotiation support and procurement coordination.",
      previewComponent: <ProcurementPreview />
    },
    {
      id: "operations",
      num: "03",
      title: "OPERATIONS",
      subline: "Keep things moving.",
      tag: "Recurring Back-Office Structure",
      href: "/services/operations",
      icon: Clock,
      accent: "#B59661",
      description: "We help businesses organise recurring work, improve coordination and bring structure to everyday operations.",
      previewComponent: <OperationsPreview />
    },
    {
      id: "ai",
      num: "04",
      title: "AI SYSTEMS",
      subline: "Make work simpler.",
      tag: "Internal Machine Leverage",
      href: "/services/ai-systems",
      icon: Cpu,
      accent: "#68694C",
      description: "Practical ways to reduce repetitive work through automation and human-supervised AI systems.",
      previewComponent: <AiPreview />
    }
  ];

  // Auto-advance storytelling: pauses on hover or when user interacts
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % services.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [isPaused, services.length]);

  return (
    <div className="relative w-full">
      
      {/* Integrated Section Header & Discipline Tabs */}
      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-6 mb-6 sm:mb-8 border-b border-[#29251F]/15">
        <div>
          <div className="flex items-center gap-2 mb-2 sm:mb-3">
            <KhatamStar className="w-3.5 h-3.5 text-[#B59661]" />
            <span className="text-xs uppercase tracking-[0.3em] font-semibold text-[#68694C]">
              Services
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl text-[#29251F] font-semibold uppercase tracking-tight">
            WHAT WE TAKE OFF YOUR HANDS.
          </h2>
        </div>

        {/* 4 Tabs */}
        <div className="flex items-center gap-1.5 sm:gap-2.5 overflow-x-auto pb-1 sm:pb-0 scrollbar-none">
          {services.map((s, idx) => {
            const isActive = activeStep === idx;
            return (
              <button
                key={s.num}
                onClick={() => {
                  setActiveStep(idx);
                  setIsPaused(true);
                }}
                className={`px-3.5 sm:px-4 py-2 text-xs tracking-widest uppercase transition-all duration-300 rounded-xs cursor-pointer flex items-center gap-2 relative overflow-hidden shrink-0 ${
                  isActive
                    ? 'bg-[#29251F] text-[#FAF6EE] font-medium shadow-xs'
                    : 'text-[#6C6255] hover:text-[#29251F] bg-[#FAF6EE]/80 hover:bg-[#FAF6EE] border border-[#29251F]/10 font-normal'
                }`}
              >
                <span className="text-[10px] text-[#B59661] font-semibold">{s.num}</span>
                <span>{s.title}</span>
                {/* Auto-progress subtle line */}
                {isActive && !isPaused && (
                  <motion.span
                    key={`bar-${idx}`}
                    initial={{ width: "0%" }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 6, ease: "linear" }}
                    className="absolute bottom-0 left-0 h-[2px] bg-[#B59661]"
                  />
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* Main Interactive Showcase (Compact, balanced natural height, zero dead space) */}
      <div 
        className="relative bg-[#FAF6EE] border border-[#29251F]/15 rounded-sm p-6 sm:p-8 lg:p-12 overflow-hidden shadow-xs"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <MashrabiyaPattern className="opacity-[0.03]" />

        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={services[activeStep].id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center"
          >
            {/* Left Column: Narrative & Action */}
            <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <span className="text-3xl sm:text-4xl text-[#B59661] font-semibold">
                    {services[activeStep].num}
                  </span>
                  <div className="h-4 w-[1px] bg-[#29251F]/20" />
                  <span className="text-xs uppercase tracking-[0.22em] text-[#68694C] font-semibold">
                    {services[activeStep].tag}
                  </span>
                </div>

                <h3 className="text-3xl sm:text-4xl lg:text-5xl text-[#29251F] font-semibold tracking-tight uppercase leading-[0.98]">
                  {services[activeStep].title}
                </h3>

                <p className="text-xl sm:text-2xl text-[#6C6255] font-normal leading-snug">
                  {services[activeStep].subline}
                </p>

                <p className="text-sm text-[#29251F]/80 font-normal leading-relaxed pt-1">
                  {services[activeStep].description}
                </p>
              </div>

              {/* Action Button & Next/Prev Controls */}
              <div className="pt-4 border-t border-[#29251F]/10 flex flex-wrap items-center justify-between gap-4">
                <Link
                  to={services[activeStep].href}
                  className="inline-flex items-center gap-2.5 px-5 py-3 bg-[#29251F] text-[#FAF6EE] text-xs font-semibold tracking-[0.22em] uppercase rounded-xs hover:bg-[#363428] transition-all shadow-xs group"
                >
                  <span>Explore {services[activeStep].title}</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </Link>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => {
                      setActiveStep((prev) => (prev === 0 ? services.length - 1 : prev - 1));
                      setIsPaused(true);
                    }}
                    className="w-8 h-8 rounded-xs border border-[#29251F]/15 bg-[#FAF6EE] hover:bg-[#E8D7BC]/40 flex items-center justify-center text-[#29251F] transition-colors cursor-pointer"
                    aria-label="Previous discipline"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => {
                      setActiveStep((prev) => (prev + 1) % services.length);
                      setIsPaused(true);
                    }}
                    className="w-8 h-8 rounded-xs border border-[#29251F]/15 bg-[#FAF6EE] hover:bg-[#E8D7BC]/40 flex items-center justify-center text-[#29251F] transition-colors cursor-pointer"
                    aria-label="Next discipline"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>

            {/* Right Column: Architectural Interactive Preview */}
            <div className="lg:col-span-7">
              {services[activeStep].previewComponent}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

    </div>
  );
}


/* ============================================================
   ARCHITECTURAL SERVICE PREVIEWS (Minimalist, Honest, Living Geometry)
   ============================================================ */

function GrowthPreview() {
  return (
    <div className="p-6 sm:p-7 bg-[#F3EADB]/60 border border-[#29251F]/10 rounded-xs space-y-3.5">
      <div className="flex items-center justify-between text-xs text-[#68694C] font-semibold uppercase tracking-wider pb-1">
        <span>Opportunity Discovery</span>
        <span>Relevance Architecture</span>
      </div>

      <div className="space-y-2.5">
        <div className="p-3 bg-[#FAF6EE] border border-[#29251F]/10 rounded-xs flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Search className="w-4 h-4 text-[#B59661]" />
            <span className="text-xs font-semibold text-[#29251F]">Market & Account Intelligence</span>
          </div>
          <span className="text-[10px] uppercase tracking-wider text-[#68694C] font-medium">Mapped</span>
        </div>

        <div className="p-3 bg-[#FAF6EE] border border-[#29251F]/10 rounded-xs flex items-center justify-between">
          <div className="flex items-center gap-3">
            <TrendingUp className="w-4 h-4 text-[#68694C]" />
            <span className="text-xs font-semibold text-[#29251F]">Executive Introduction Briefs</span>
          </div>
          <span className="text-[10px] uppercase tracking-wider text-[#68694C] font-medium">Bespoke</span>
        </div>

        <div className="p-3 bg-[#FAF6EE] border border-[#29251F]/10 rounded-xs flex items-center justify-between">
          <div className="flex items-center gap-3">
            <CheckCircle2 className="w-4 h-4 text-[#29251F]" />
            <span className="text-xs font-semibold text-[#29251F]">Qualified Partner Dialogue</span>
          </div>
          <span className="text-[10px] uppercase tracking-wider text-[#B59661] font-medium">Direct</span>
        </div>
      </div>
    </div>
  );
}

function ProcurementPreview() {
  return (
    <div className="p-6 sm:p-7 bg-[#F3EADB]/60 border border-[#29251F]/10 rounded-xs space-y-3.5">
      <div className="flex items-center justify-between text-xs text-[#68694C] font-semibold uppercase tracking-wider pb-1">
        <span>Sourcing Comparison</span>
        <span>Terms Verification</span>
      </div>

      <div className="space-y-2.5">
        <div className="p-3 bg-[#FAF6EE] border border-[#29251F]/10 rounded-xs flex items-center justify-between">
          <span className="text-xs font-semibold text-[#29251F]">Supplier Specification Audit</span>
          <span className="text-[10px] uppercase tracking-wider text-[#68694C]">Normalized</span>
        </div>
        <div className="p-3 bg-[#FAF6EE] border border-[#29251F]/10 rounded-xs flex items-center justify-between">
          <span className="text-xs font-semibold text-[#29251F]">Quotation Benchmarking</span>
          <span className="text-[10px] uppercase tracking-wider text-[#B59661]">Independent</span>
        </div>
        <div className="p-3 bg-[#FAF6EE] border border-[#29251F]/10 rounded-xs flex items-center justify-between">
          <span className="text-xs font-semibold text-[#29251F]">Commercial Term Negotiation</span>
          <span className="text-[10px] uppercase tracking-wider text-[#29251F]">Fiduciary</span>
        </div>
      </div>
    </div>
  );
}

function OperationsPreview() {
  return (
    <div className="p-6 sm:p-7 bg-[#F3EADB]/60 border border-[#29251F]/10 rounded-xs space-y-3.5">
      <div className="flex items-center justify-between text-xs text-[#68694C] font-semibold uppercase tracking-wider pb-1">
        <span>Back-Office Rhythm</span>
        <span>Executive Focus</span>
      </div>

      <div className="space-y-2.5">
        <div className="p-3 bg-[#FAF6EE] border border-[#29251F]/10 rounded-xs flex items-center justify-between">
          <span className="text-xs font-semibold text-[#29251F]">Routine Follow-Ups & Tracking</span>
          <span className="text-[10px] uppercase tracking-wider text-[#68694C]">Absorbed</span>
        </div>
        <div className="p-3 bg-[#FAF6EE] border border-[#29251F]/10 rounded-xs flex items-center justify-between">
          <span className="text-xs font-semibold text-[#29251F]">Vendor Signoffs & Triage</span>
          <span className="text-[10px] uppercase tracking-wider text-[#B59661]">Orderly</span>
        </div>
        <div className="p-3 bg-[#FAF6EE] border border-[#29251F]/10 rounded-xs flex items-center justify-between">
          <span className="text-xs font-semibold text-[#29251F]">Weekly Decision Memorandum</span>
          <span className="text-[10px] uppercase tracking-wider text-[#29251F]">Clear</span>
        </div>
      </div>
    </div>
  );
}

function AiPreview() {
  return (
    <div className="p-6 sm:p-7 bg-[#F3EADB]/60 border border-[#29251F]/10 rounded-xs space-y-3.5">
      <div className="flex items-center justify-between text-xs text-[#68694C] font-semibold uppercase tracking-wider pb-1">
        <span>Supervised Intelligence</span>
        <span>Human-in-the-Loop</span>
      </div>

      <div className="space-y-2.5">
        <div className="p-3 bg-[#FAF6EE] border border-[#29251F]/10 rounded-xs flex items-center justify-between">
          <span className="text-xs font-semibold text-[#29251F]">Document Parsing & Extraction</span>
          <span className="text-[10px] uppercase tracking-wider text-[#68694C]">Structured</span>
        </div>
        <div className="p-3 bg-[#FAF6EE] border border-[#29251F]/10 rounded-xs flex items-center justify-between">
          <span className="text-xs font-semibold text-[#29251F]">Deterministic Schema Validation</span>
          <span className="text-[10px] uppercase tracking-wider text-[#B59661]">Verified</span>
        </div>
        <div className="p-3 bg-[#FAF6EE] border border-[#29251F]/10 rounded-xs flex items-center justify-between">
          <span className="text-xs font-semibold text-[#29251F]">Mandatory Human Release Gate</span>
          <span className="text-[10px] uppercase tracking-wider text-[#29251F]">Guarded</span>
        </div>
      </div>
    </div>
  );
}
