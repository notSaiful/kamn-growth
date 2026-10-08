import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Check, Shield, Layers, RefreshCw } from 'lucide-react';
import { motion } from 'framer-motion';
import { KhatamStar } from '../components/SazoArch';
import PageTransition from '../components/PageTransition';
import { EASE_LUXURY } from '../lib/motionTokens';

export default function PartnershipPage() {
  const models = [
    {
      name: "Growth Partner",
      arabic: "شريك النمو",
      focus: "Business Development & Outbound",
      commitment: "Monthly Managed Subscription",
      cadence: "Weekly Deliverable & Pipeline Review",
      desc: "Managed business development, qualification, and sales-support workflows executed end-to-end by KAMN's team.",
      deliverables: [
        "Curated ICP prospect lists and verified decision-maker dossiers",
        "Personalized outbound drafts and multi-channel sequence management",
        "Inbound triage, meeting scheduling, and calendar qualification",
        "Weekly pipeline movement brief and CRM hygiene maintained by KAMN"
      ]
    },
    {
      name: "Operations Partner",
      arabic: "شريك العمليات",
      focus: "Sourcing & Day-to-Day Execution",
      commitment: "Monthly Managed Subscription",
      cadence: "Weekly Operations & Vendor Brief",
      desc: "Recurring operational execution, supplier sourcing, vendor comparison, and workflow coordination carried on your behalf.",
      deliverables: [
        "Vendor discovery, RFQ administration, and quote normalization",
        "Contract terms comparison and price benchmark analysis",
        "Document processing, invoices, and standard operating reconciliations",
        "Weekly operations briefing with clear decision-ready summaries"
      ],
      featured: true
    },
    {
      name: "Strategic Partner",
      arabic: "الشراكة الشاملة",
      focus: "Cross-Functional Operating Leverage",
      commitment: "Quarterly or Annual Stewardship",
      cadence: "Executive Strategy & Operating Review",
      desc: "A broader engagement combining growth, procurement, and operations for businesses seeking complete outsourced operational leverage.",
      deliverables: [
        "Unified coverage across business development, purchasing, and workflows",
        "Dedicated consultant team operating proprietary internal AI OS tooling",
        "Direct access to principal consultants for strategic planning",
        "Founding program terms: priority cadence, direct founder access"
      ]
    }
  ];

  return (
    <PageTransition>
      <div className="pt-32 pb-24 min-h-screen bg-transparent text-[#29251F]">
        
        {/* ============================================================
            01 HERO SECTION
            ============================================================ */}
        <section className="editorial-container pt-8 pb-16 sm:pb-20 border-b border-[#29251F]/10">
          <div className="max-w-4xl space-y-6 sm:space-y-8">
            <div className="flex items-center gap-2">
              <KhatamStar className="w-4 h-4 text-[#B59661]" />
              <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#68694C]">
                Partnership Architecture
              </span>
            </div>

            <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-semibold tracking-tight text-[#29251F] leading-[1.02] uppercase">
              A MANAGED PARTNERSHIP.<br />
              <span className="text-[#68694C] font-semibold">NOT ANOTHER PLATFORM.</span>
            </h1>

            <p className="text-base sm:text-xl text-[#6C6255] font-normal max-w-2xl leading-relaxed">
              KAMN works through recurring managed-service engagements. We agree on the business priorities, operating scope, expected deliverables, communication cadence and commercial terms before work begins.
            </p>
          </div>
        </section>

        {/* ============================================================
            02 THREE MANAGED SUBSCRIPTION TIERS
            ============================================================ */}
        <section className="editorial-container py-20 sm:py-28 border-b border-[#29251F]/10">
          <div className="max-w-2xl mb-12 sm:mb-16">
            <span className="text-xs uppercase tracking-[0.3em] font-semibold text-[#68694C] block mb-3">
              Service Models
            </span>
            <h2 className="text-3xl sm:text-4xl font-semibold text-[#29251F] uppercase leading-tight">
              MONTHLY ENGAGEMENTS TAILORED TO SCOPE
            </h2>
            <p className="text-sm text-[#6C6255] mt-3">
              Clear commitments. No hidden fees. Zero software for your team to learn or operate.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
            {models.map((mod, idx) => (
              <motion.div
                key={mod.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-20px" }}
                transition={{ delay: idx * 0.1, duration: 0.6, ease: EASE_LUXURY }}
                className={`p-8 rounded-sm border flex flex-col justify-between transition-all duration-300 ${
                  mod.featured
                    ? 'bg-[#FAF6EE] border-[#B59661] shadow-sm ring-1 ring-[#B59661]/40'
                    : 'bg-[#FAF6EE]/80 border-[#29251F]/15 hover:border-[#B59661]'
                }`}
              >
                <div className="space-y-6">
                  <div className="flex items-center justify-between pb-4 border-b border-[#29251F]/10">
                    <span className="text-xs uppercase tracking-wider font-semibold text-[#B59661]">
                      {mod.commitment}
                    </span>
                    <span className="text-xs font-arabic text-[#6C6255]">
                      {mod.arabic}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-2xl font-semibold text-[#29251F] mb-1">
                      {mod.name}
                    </h3>
                    <p className="text-xs text-[#68694C] font-semibold uppercase tracking-wider">
                      {mod.focus}
                    </p>
                  </div>

                  <p className="text-sm text-[#6C6255] leading-relaxed">
                    {mod.desc}
                  </p>

                  <div className="pt-4 border-t border-[#29251F]/10 space-y-2.5">
                    <span className="text-[11px] uppercase tracking-wider text-[#29251F] font-semibold block">
                      Included Managed Deliverables:
                    </span>
                    {mod.deliverables.map((d) => (
                      <div key={d} className="flex items-start gap-2.5 text-xs text-[#6C6255]">
                        <Check className="w-3.5 h-3.5 text-[#68694C] shrink-0 mt-0.5" />
                        <span className="leading-relaxed">{d}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-8 mt-8 border-t border-[#29251F]/10 space-y-3">
                  <div className="text-center text-[11px] text-[#6C6255] uppercase tracking-wider">
                    {mod.cadence}
                  </div>
                  <Link
                    to="/begin"
                    className="w-full min-h-[44px] px-6 py-3 bg-[#29251F] text-[#FAF6EE] text-xs font-semibold tracking-[0.2em] uppercase rounded-xs hover:bg-[#363428] transition-colors flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span>Book a Growth Review</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#B59661]" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ============================================================
            03 WHY A MANAGED PARTNERSHIP WORKS
            ============================================================ */}
        <section className="editorial-container py-20 sm:py-24 border-b border-[#29251F]/10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-[#FAF6EE] border border-[#29251F]/10 rounded-sm space-y-3">
              <Layers className="w-5 h-5 text-[#B59661]" />
              <h3 className="text-base font-semibold text-[#29251F] uppercase tracking-tight">
                Execution, Not Software
              </h3>
              <p className="text-xs sm:text-sm text-[#6C6255] leading-relaxed">
                You never log into complex software or manage automated agents. We receive your goals, carry out the research and outreach, and deliver finished outcomes.
              </p>
            </div>

            <div className="p-6 bg-[#FAF6EE] border border-[#29251F]/10 rounded-sm space-y-3">
              <RefreshCw className="w-5 h-5 text-[#68694C]" />
              <h3 className="text-base font-semibold text-[#29251F] uppercase tracking-tight">
                Adaptive Monthly Scope
              </h3>
              <p className="text-xs sm:text-sm text-[#6C6255] leading-relaxed">
                As business priorities change, your allocated managed bandwidth shifts smoothly between pipeline building, procurement diligence, or workflow streamlining.
              </p>
            </div>

            <div className="p-6 bg-[#FAF6EE] border border-[#29251F]/10 rounded-sm space-y-3">
              <Shield className="w-5 h-5 text-[#B59661]" />
              <h3 className="text-base font-semibold text-[#29251F] uppercase tracking-tight">
                Fiduciary Integrity (Amanah)
              </h3>
              <p className="text-xs sm:text-sm text-[#6C6255] leading-relaxed">
                We will never accept an engagement where our monthly service does not provide obvious, asymmetrical leverage. Complete transparency in all commitments.
              </p>
            </div>
          </div>
        </section>

        {/* ============================================================
            04 FINAL INTAKE CALLOUT
            ============================================================ */}
        <section className="editorial-container py-20 sm:py-24">
          <div className="p-8 sm:p-14 bg-[#FAF6EE] border border-[#29251F]/15 rounded-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
            <div className="space-y-3 max-w-xl">
              <span className="text-xs uppercase tracking-[0.2em] font-semibold text-[#68694C] block">
                Founding Engagements
              </span>
              <h3 className="text-2xl sm:text-3xl font-semibold text-[#29251F] uppercase tracking-tight">
                Discuss Your Business Requirements
              </h3>
              <p className="text-sm text-[#6C6255] leading-relaxed">
                We are currently onboarding a selective cohort of founding clients with direct principal attention and priority operating bandwidth.
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
