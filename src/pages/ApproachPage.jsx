import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Compass, Shield, CheckCircle2, AlertCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import { KhatamStar } from '../components/SazoArch';
import PageTransition from '../components/PageTransition';
import { EASE_LUXURY } from '../lib/motionTokens';

export default function ApproachPage() {
  const stages = [
    {
      num: "01",
      name: "LISTEN",
      tagline: "Find where friction lives.",
      detail: "We enter quietly. We map where your time is consumed and where operations lose momentum before suggesting a single change."
    },
    {
      num: "02",
      name: "BUILD",
      tagline: "Design the lean architecture.",
      detail: "We engineer lean, resilient workflows, communications and sourcing channels tailored to your specific market reality."
    },
    {
      num: "03",
      name: "CARRY",
      tagline: "Run execution with you.",
      detail: "We step in on execution. We assist with day-to-day outreach, vendor coordination, and back-office follow-through with quiet rigor."
    },
    {
      num: "04",
      name: "MEASURE",
      tagline: "Visible, unvarnished truth.",
      detail: "Every week brings clear, unvarnished visibility. Open communication, transparent tracking, and genuine progress."
    }
  ];

  const comparisons = [
    {
      dimension: "Executive Focus",
      noise: "Scattered across routine supplier follow-ups, fragmented emails, and administrative triage.",
      order: "Structured operational coordination with synthesized weekly executive updates."
    },
    {
      dimension: "Sales & Pipeline",
      noise: "Sporadic cold outreach with inconsistent messaging and context switching.",
      order: "Targeted, respectful research and outreach focused on genuine commercial relevance."
    },
    {
      dimension: "Procurement & Margins",
      noise: "Ordering reactively across uncompared vendors with unverified commercial clauses.",
      order: "Normalized quotation comparisons, commercial term reviews, and coordinated purchasing."
    },
    {
      dimension: "AI & Automation",
      noise: "Disjointed software tools, unsubstantiated hype, and unsupervised errors.",
      order: "Pragmatic, human-supervised workflows with careful verification before release."
    }
  ];

  return (
    <PageTransition>
      <div className="pt-32 pb-24 min-h-screen bg-transparent text-[#29251F]">
        
        {/* Hero Section */}
        <section className="editorial-container pt-8 pb-16 sm:pb-20 border-b border-[#29251F]/10">
          <div className="max-w-4xl space-y-6 sm:space-y-8">
            <div className="flex items-center gap-2">
              <KhatamStar className="w-4 h-4 text-[#B59661]" />
              <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#68694C]">
                Operating Methodology
              </span>
            </div>

            <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-semibold tracking-tight text-[#29251F] leading-[1.02] uppercase">
              CLOSE ENOUGH TO UNDERSTAND.<br />
              <span className="text-[#68694C] font-semibold">QUIET ENOUGH TO STAY OUT OF THE WAY.</span>
            </h1>

            <p className="text-base sm:text-xl text-[#6C6255] font-normal max-w-xl leading-relaxed">
              We do not add meeting layers or consulting theatre. We integrate quietly into your rhythm and deliver.
            </p>
          </div>
        </section>

        {/* 4 Operating Stages (Revealed Automatically on Scroll) */}
        <section className="editorial-container py-20 sm:py-28 border-b border-[#29251F]/10">
          <div className="max-w-2xl mb-12 sm:mb-16">
            <span className="text-xs uppercase tracking-[0.3em] font-semibold text-[#68694C] block mb-3">
              The Rhythm
            </span>
            <h2 className="text-3xl sm:text-4xl font-semibold text-[#29251F] uppercase leading-tight">
              HOW WE MOVE WITH YOU
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {stages.map((st, idx) => (
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
                    <span className="text-xs uppercase tracking-wider text-[#68694C] font-semibold">{st.name}</span>
                  </div>

                  <h3 className="text-xl font-semibold text-[#29251F]">
                    {st.tagline}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#6C6255] leading-relaxed">
                    {st.detail}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-[#29251F]/10 text-[11px] uppercase tracking-wider text-[#68694C] font-semibold">
                  Stage {st.num}
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* The Comparative Reality (Side-by-Side Clarity, No Click Toggles) */}
        <section className="editorial-container py-20 sm:py-28 border-b border-[#29251F]/10">
          <div className="max-w-2xl mb-12 sm:mb-16">
            <span className="text-xs uppercase tracking-[0.3em] font-semibold text-[#68694C] block mb-3">
              Comparative Analysis
            </span>
            <h2 className="text-3xl sm:text-4xl font-semibold text-[#29251F] uppercase leading-tight">
              THE NOISE YOU CARRY VS THE ORDER WE BUILD
            </h2>
          </div>

          <div className="space-y-4">
            {comparisons.map((c, idx) => (
              <motion.div
                key={c.dimension}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.08, duration: 0.5 }}
                className="p-6 sm:p-8 bg-[#FAF6EE] border border-[#29251F]/15 rounded-sm grid grid-cols-1 md:grid-cols-12 gap-6 items-center"
              >
                <div className="md:col-span-3">
                  <span className="text-xs uppercase tracking-[0.2em] font-semibold text-[#29251F] block">
                    {c.dimension}
                  </span>
                </div>
                
                <div className="md:col-span-4 p-4 bg-[#F3EADB]/50 border border-[#29251F]/10 rounded-xs">
                  <span className="text-[10px] uppercase tracking-widest text-[#6C6255] font-semibold block mb-1">
                    Before · The Noise
                  </span>
                  <p className="text-xs text-[#6C6255] leading-relaxed">
                    {c.noise}
                  </p>
                </div>

                <div className="md:col-span-5 p-4 bg-[#FAF6EE] border border-[#B59661]/40 rounded-xs">
                  <span className="text-[10px] uppercase tracking-widest text-[#68694C] font-semibold block mb-1">
                    With KAMN · The Order
                  </span>
                  <p className="text-xs text-[#29251F] font-medium leading-relaxed">
                    {c.order}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Closing CTA */}
        <section className="editorial-container pt-16 sm:pt-20">
          <div className="p-8 sm:p-14 bg-[#EADDC9]/60 border border-[#29251F]/10 rounded-sm flex flex-col sm:flex-row items-start sm:items-center justify-between gap-8">
            <div className="space-y-2">
              <h3 className="text-2xl sm:text-3xl font-semibold text-[#29251F]">
                Move forward with clarity.
              </h3>
              <p className="text-sm text-[#6C6255]">
                Tell us where your business is today and where you need structure.
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
