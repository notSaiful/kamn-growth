import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, FileText, CheckCircle2, ShieldCheck, Cpu } from 'lucide-react';
import { motion } from 'framer-motion';
import { KhatamStar } from '../components/SazoArch';
import PageTransition from '../components/PageTransition';
import { EASE_LUXURY } from '../lib/motionTokens';

export default function AiSystemsPage() {
  const workflows = [
    {
      num: "01",
      title: "Supplier RFQ Normalization",
      arabic: "تحليل وتوحيد عروض الأسعار",
      tagline: "PDF & Specification Triage",
      desc: "Extracting line-item pricing, technical specifications and payment terms from unstructured supplier proposals into structured spreadsheets."
    },
    {
      num: "02",
      title: "Prospective Account Intelligence",
      arabic: "إثراء بيانات العملاء المحتملين",
      tagline: "B2B Registry & Growth Mapping",
      desc: "Enriching company profiles with verified registry data and recent commercial filings before senior outreach drafting."
    },
    {
      num: "03",
      title: "Contract Milestone Extraction",
      arabic: "استخراج بنود العقود والمواعيد",
      tagline: "Legal & Sourcing Compliance",
      desc: "Parsing multi-page master service agreements for renewal deadlines, penalty clauses and minimum order obligations."
    },
    {
      num: "04",
      title: "Executive Synthesis & Action Logs",
      arabic: "تلخيص الاجتماعات وإجراءات العمل",
      tagline: "Meeting & Thread Distillation",
      desc: "Transcribing operational syncs into clear decision logs and assignable action items with human signoff."
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
                AI Systems
              </span>
            </div>

            <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-semibold tracking-tight text-[#29251F] leading-[1.02] uppercase">
              LESS REPETITION.<br />
              <span className="text-[#68694C] font-semibold">MORE POSSIBILITY.</span>
            </h1>

            <p className="text-base sm:text-xl text-[#6C6255] font-normal max-w-xl leading-relaxed">
              Routine task automation, AI document processing, workflow agents, and human-in-the-loop validation.
            </p>

            {/* Visual Pipeline */}
            <div className="pt-2">
              <div className="inline-flex flex-wrap items-center gap-2 sm:gap-3 py-3 px-4 sm:px-6 bg-[#FAF6EE] border border-[#29251F]/15 rounded-sm">
                {['IDENTIFY', 'BUILD', 'SUPERVISE', 'INTEGRATE', 'REFINE'].map((step, idx) => (
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

        {/* 4 Workflows Grid (Revealed Automatically on Scroll) */}
        <section className="editorial-container py-20 sm:py-28 border-b border-[#29251F]/10">
          <div className="max-w-2xl mb-12 sm:mb-16">
            <span className="text-xs uppercase tracking-[0.3em] font-semibold text-[#68694C] block mb-3">
              Supervised Pipelines
            </span>
            <h2 className="text-3xl sm:text-4xl font-semibold text-[#29251F] uppercase leading-tight">
              FOUR PRACTICAL WORKFLOWS
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {workflows.map((wf, idx) => (
              <motion.div
                key={wf.num}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-20px" }}
                transition={{ delay: idx * 0.1, duration: 0.6, ease: EASE_LUXURY }}
                className="p-8 bg-[#FAF6EE] border border-[#29251F]/15 rounded-sm flex flex-col justify-between hover:border-[#B59661] hover:shadow-xs transition-all duration-300"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between pb-4 border-b border-[#29251F]/10">
                    <span className="text-2xl font-semibold text-[#B59661]">{wf.num}</span>
                    <span className="text-xs font-arabic text-[#6C6255]">{wf.arabic}</span>
                  </div>

                  <span className="text-xs uppercase tracking-wider text-[#68694C] font-semibold block">
                    {wf.tagline}
                  </span>

                  <h3 className="text-xl sm:text-2xl font-semibold text-[#29251F]">
                    {wf.title}
                  </h3>

                  <p className="text-sm text-[#6C6255] leading-relaxed">
                    {wf.desc}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-[#29251F]/10 flex items-center justify-between text-xs text-[#6C6255]">
                  <span className="inline-flex items-center gap-1.5 text-[#68694C] font-semibold">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    Human-in-the-loop review
                  </span>
                  <KhatamStar className="w-3.5 h-3.5 text-[#B59661]" />
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Ethical Supervised AI Position */}
        <section className="editorial-container py-20 sm:py-24 border-b border-[#29251F]/10">
          <div className="p-8 sm:p-12 bg-[#FAF6EE] border border-[#29251F]/15 rounded-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="space-y-2 max-w-xl">
              <span className="text-xs uppercase tracking-[0.2em] font-semibold text-[#68694C] block">
                The Standard
              </span>
              <h3 className="text-2xl sm:text-3xl font-semibold text-[#29251F]">
                Practical Value Over Technology Hype
              </h3>
              <p className="text-sm text-[#6C6255] leading-relaxed">
                We deploy quiet, deterministic automations with strict schema validation and mandatory human confirmation checkpoints before anything touches external counterparties.
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
