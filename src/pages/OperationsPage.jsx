import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Layers, FileCheck, Users, Clock, ShieldCheck } from 'lucide-react';
import { motion } from 'framer-motion';
import { KhatamStar } from '../components/SazoArch';
import PageTransition from '../components/PageTransition';
import { EASE_LUXURY } from '../lib/motionTokens';

export default function OperationsPage() {
  const focusAreas = [
    {
      num: "01",
      title: "Vendor Coordination Desk",
      arabic: "مكتب إدارة الموردين",
      icon: Users,
      desc: "Centralizing vendor inquiries, tracking milestones and managing routine communications so leadership remains uninterrupted."
    },
    {
      num: "02",
      title: "Recurring Operational Tracking",
      arabic: "متابعة المهام الدورية",
      icon: Clock,
      desc: "Maintaining clear oversight on recurring deadlines, internal deliverables and routine cross-functional handoffs."
    },
    {
      num: "03",
      title: "Operating Playbooks & SOPs",
      arabic: "أدلة العمل التشغيلية",
      icon: FileCheck,
      desc: "Codifying undocumented institutional workflows into clear, repeatable procedures that new team members can execute."
    },
    {
      num: "04",
      title: "Executive Synthesis & Decision Memos",
      arabic: "موجز القرارات التنفيذي",
      icon: Layers,
      desc: "Replacing chaotic message threads with a concise weekly memo detailing decisions made, active workflows and required approvals."
    }
  ];

  return (
    <PageTransition>
      <div className="pt-32 pb-24 min-h-screen bg-transparent text-[#29251F]">
        
        {/* Hero Section */}
        <section className="editorial-container pt-8 pb-16 sm:pb-20 border-b border-[#29251F]/10">
          <div className="max-w-4xl space-y-6 sm:space-y-8">
            <div className="flex items-center gap-2">
              <Link to="/services" className="text-xs uppercase tracking-[0.25em] font-semibold text-[#6C6255] hover:text-[#29251F] transition-colors">
                Disciplines
              </Link>
              <span className="text-xs text-[#6C6255]">/</span>
              <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#B59661]">
                Operations
              </span>
            </div>

            <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-semibold tracking-tight text-[#29251F] leading-[1.02] uppercase">
              MAKE ROOM<br />
              <span className="text-[#68694C] font-semibold">FOR WHAT MATTERS.</span>
            </h1>

            <p className="text-base sm:text-xl text-[#6C6255] font-normal max-w-xl leading-relaxed">
              Workflow audits, operating SOP creation, handoff architecture, and internal tool consolidation.
            </p>

            {/* Visual Pipeline */}
            <div className="pt-2">
              <div className="inline-flex flex-wrap items-center gap-2 sm:gap-3 py-3 px-4 sm:px-6 bg-[#FAF6EE] border border-[#29251F]/15 rounded-sm">
                {['MAP', 'STREAMLINE', 'DELEGATE', 'AUTOMATE', 'MONITOR'].map((step, idx) => (
                  <React.Fragment key={step}>
                    <span className="text-[11px] sm:text-xs uppercase tracking-[0.2em] font-semibold text-[#29251F]">
                      {step}
                    </span>
                    {idx < 4 && (
                      <span className="text-[#B59661] text-xs font-semibold">→</span>
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 4 Focus Areas Grid (Revealed Automatically on Scroll) */}
        <section className="editorial-container py-20 sm:py-28 border-b border-[#29251F]/10">
          <div className="max-w-2xl mb-12 sm:mb-16">
            <span className="text-xs uppercase tracking-[0.3em] font-semibold text-[#68694C] block mb-3">
              Operational Structure
            </span>
            <h2 className="text-3xl sm:text-4xl font-semibold text-[#29251F] uppercase leading-tight">
              FOUR PILLARS OF QUIET LEVERAGE
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {focusAreas.map((st, idx) => {
              const Icon = st.icon;
              return (
                <motion.div
                  key={st.num}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-20px" }}
                  transition={{ delay: idx * 0.1, duration: 0.6, ease: EASE_LUXURY }}
                  className="p-8 bg-[#FAF6EE] border border-[#29251F]/15 rounded-sm flex flex-col justify-between hover:border-[#B59661] hover:shadow-xs transition-all duration-300"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between pb-4 border-b border-[#29251F]/10">
                      <span className="text-2xl font-semibold text-[#B59661]">{st.num}</span>
                      <span className="text-xs font-arabic text-[#6C6255]">{st.arabic}</span>
                    </div>

                    <div className="w-8 h-8 rounded-xs bg-[#29251F] text-[#FAF6EE] flex items-center justify-center">
                      <Icon className="w-4 h-4 text-[#B59661]" />
                    </div>

                    <h3 className="text-xl font-semibold text-[#29251F]">
                      {st.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-[#6C6255] leading-relaxed">
                      {st.desc}
                    </p>
                  </div>

                  <div className="pt-6 mt-6 border-t border-[#29251F]/10 text-[11px] uppercase tracking-wider text-[#68694C] font-semibold">
                    Quiet leverage
                  </div>
                </motion.div>
              );
            })}
          </div>
        </section>

        {/* Closing CTA */}
        <section className="editorial-container py-20 sm:py-24 border-b border-[#29251F]/10">
          <div className="p-8 sm:p-12 bg-[#FAF6EE] border border-[#29251F]/15 rounded-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="space-y-2 max-w-xl">
              <span className="text-xs uppercase tracking-[0.2em] font-semibold text-[#68694C] block">
                Executive Clarity
              </span>
              <h3 className="text-2xl sm:text-3xl font-semibold text-[#29251F]">
                Quiet Discipline Over Complexity
              </h3>
              <p className="text-sm text-[#6C6255] leading-relaxed">
                We remove administrative friction without introducing bureaucratic layers. Clear ownership, clean cadence and steady follow-through.
              </p>
            </div>
            <Link
              to="/begin"
              className="min-h-[50px] px-8 py-4 bg-[#29251F] text-[#FAF6EE] text-xs font-semibold tracking-[0.25em] uppercase rounded-sm hover:bg-[#363428] transition-colors inline-flex items-center gap-3 shrink-0 cursor-pointer shadow-md"
            >
              <span>Book a Growth Review</span>
              <ArrowRight className="w-4 h-4 text-[#B59661]" />
            </Link>
          </div>
        </section>

      </div>
    </PageTransition>
  );
}
