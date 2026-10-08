import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowUpRight, ShieldCheck, Compass, CheckCircle2 } from 'lucide-react';
import { KhatamStar } from './SazoArch';
import { EASE_LUXURY } from '../lib/motionTokens';
import { verifiedCaseStudies } from '../data/caseStudyFramework';

export default function ResultsGallery({ limit, showFilter = true }) {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = [
    { id: "all", label: "All Engagements" },
    { id: "growth", label: "Growth Outbound" },
    { id: "procurement", label: "Procurement & Sourcing" },
    { id: "operations", label: "Operational Desks" },
    { id: "ai", label: "AI Workflows" },
  ];

  const filteredEngagements = selectedCategory === "all"
    ? verifiedCaseStudies
    : verifiedCaseStudies.filter(e => e.serviceDelivered?.toLowerCase().includes(selectedCategory));

  const visibleEngagements = limit ? filteredEngagements.slice(0, limit) : filteredEngagements;

  // When no verified case studies exist yet (Founding Stage)
  if (visibleEngagements.length === 0) {
    return (
      <div className="p-8 sm:p-12 bg-[#FAF6EE] border border-[#29251F]/15 rounded-xs text-center max-w-3xl mx-auto my-6">
        <div className="w-12 h-12 mx-auto mb-6 rounded-full bg-[#E8DEC8]/50 flex items-center justify-center text-[#B59661]">
          <Compass className="w-6 h-6 stroke-[1.5]" />
        </div>
        <span className="text-[11px] uppercase tracking-[0.25em] font-semibold text-[#68694C] block mb-3">
          Founding Stage · Verified Portfolio Policy
        </span>
        <h4 className="text-xl sm:text-2xl font-semibold text-[#29251F] mb-4">
          Genuine Work Takes Precedence Over Fabricated Proof
        </h4>
        <p className="text-sm sm:text-base text-[#6C6255] font-normal leading-relaxed mb-6 max-w-xl mx-auto">
          KAMN is at the beginning of its journey. Rather than publish simulated case studies or unsupported metrics, we publish results only after client engagements are completed, verified and approved.
        </p>
        <Link
          to="/approach"
          className="inline-flex items-center gap-2 px-6 py-3 bg-[#29251F] text-[#FAF6EE] text-xs uppercase tracking-widest font-semibold rounded-xs hover:bg-[#363428] transition-colors"
        >
          Explore How We Work
          <ArrowUpRight className="w-3.5 h-3.5" />
        </Link>
      </div>
    );
  }

  return (
    <div className="relative">
      {/* Category Filter Tabs */}
      {showFilter && (
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 border-b border-[#29251F]/10">
          {categories.map((c) => (
            <button
              key={c.id}
              onClick={() => setSelectedCategory(c.id)}
              className={`px-4 py-2 rounded-xs text-xs tracking-wider uppercase transition-all duration-300 whitespace-nowrap cursor-pointer ${
                selectedCategory === c.id
                  ? 'bg-[#29251F] text-[#FAF6EE] font-medium shadow-xs'
                  : 'bg-[#FAF6EE] text-[#6C6255] hover:text-[#29251F] border border-[#29251F]/10'
              }`}
            >
              {c.label}
            </button>
          ))}
        </div>
      )}

      {/* Grid of Verified Engagement Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <AnimatePresence mode="popLayout">
          {visibleEngagements.map((item) => (
            <motion.div
              key={item.id}
              layout
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.5, ease: EASE_LUXURY }}
              className="p-8 bg-[#FAF6EE] border border-[#29251F]/15 rounded-xs flex flex-col justify-between hover:border-[#B59661] hover:shadow-md transition-all duration-300 group"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[11px] uppercase tracking-wider text-[#68694C] font-semibold">
                    {item.sector || item.serviceDelivered}
                  </span>
                  <KhatamStar className="w-3.5 h-3.5 text-[#B59661] opacity-60 group-hover:opacity-100 transition-opacity" />
                </div>

                <h4 className="text-lg font-semibold text-[#29251F] mb-4 leading-snug">
                  {item.clientIdentifier}
                </h4>

                <div className="p-4 bg-[#F3EADB]/40 border border-[#29251F]/10 rounded-xs mb-4">
                  <span className="text-[10px] uppercase tracking-widest text-[#6C6255] block mb-1">
                    Problem Addressed
                  </span>
                  <p className="text-xs text-[#29251F] leading-relaxed">
                    {item.problemAddressed}
                  </p>
                </div>

                <div className="space-y-3 text-xs text-[#6C6255]">
                  <div>
                    <span className="font-semibold text-[#29251F] block mb-1">Work Completed:</span>
                    <p className="leading-relaxed">{item.workCompleted}</p>
                  </div>
                  <div>
                    <span className="font-semibold text-[#29251F] block mb-1">Verified Outcome:</span>
                    <p className="leading-relaxed text-[#29251F]">{item.evidenceOfOutcomes}</p>
                  </div>
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-[#29251F]/10 flex items-center justify-between text-[11px] text-[#6C6255]">
                <span className="inline-flex items-center gap-1.5 text-[#68694C] font-medium">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#68694C]" />
                  Verified & Approved
                </span>
                <span>{item.timeframe || 'Completed'}</span>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
}
