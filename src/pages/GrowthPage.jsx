import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Target, Mail, Calendar, Compass, Shield } from 'lucide-react';
import { motion } from 'framer-motion';
import { KhatamStar } from '../components/SazoArch';
import PageTransition from '../components/PageTransition';
import { EASE_LUXURY } from '../lib/motionTokens';

export default function GrowthPage() {
  const pipelineStages = [
    {
      num: "01",
      title: "Audience Research",
      arabic: "تحديد الفرص",
      icon: Target,
      desc: "We study your market and map relevant prospective clients before outreach begins. No generic lists or spam."
    },
    {
      num: "02",
      title: "Tailored Narrative",
      arabic: "الخطاب المهني",
      icon: Mail,
      desc: "Clear, respectful communication tailored to the priorities and challenges of the recipient."
    },
    {
      num: "03",
      title: "Thoughtful Cadence",
      arabic: "المتابعة الرشيدة",
      icon: Calendar,
      desc: "An organised communication cadence that respects the prospect's calendar while preserving momentum."
    },
    {
      num: "04",
      title: "Executive Introduction",
      arabic: "الربط المباشر",
      icon: Compass,
      desc: "Introducing interested companies directly to leadership with a full contextual brief."
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
                Growth
              </span>
            </div>

            <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-semibold tracking-tight text-[#29251F] leading-[1.02] uppercase">
              MORE MOVEMENT.<br />
              <span className="text-[#68694C] font-semibold">LESS NOISE.</span>
            </h1>

            <p className="text-base sm:text-xl text-[#6C6255] font-normal max-w-xl leading-relaxed">
              Market mapping, ideal profile definition, tailored outbound communication, and executive qualification.
            </p>

            {/* Visual Pipeline */}
            <div className="pt-2">
              <div className="inline-flex flex-wrap items-center gap-2 sm:gap-3 py-3 px-4 sm:px-6 bg-[#FAF6EE] border border-[#29251F]/15 rounded-sm">
                {['AUDIENCE', 'MESSAGE', 'REACH', 'ENGAGE', 'NURTURE'].map((step, idx) => (
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

        {/* Section 01: 4 Stages Revealed Automatically */}
        <section className="editorial-container py-20 sm:py-28 border-b border-[#29251F]/10">
          <div className="max-w-2xl mb-12 sm:mb-16">
            <span className="text-xs uppercase tracking-[0.3em] font-semibold text-[#68694C] block mb-3">
              The Architecture
            </span>
            <h2 className="text-3xl sm:text-4xl font-semibold text-[#29251F] uppercase leading-tight">
              FOUR STAGES OF DISCIPLINED GROWTH
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {pipelineStages.map((st, idx) => {
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
                    Careful execution
                  </div>
                </motion.div>
              );
            })}
          </div>
        </section>

        {/* Section 02: Commercial Ethics */}
        <section className="editorial-container py-20 sm:py-24 border-b border-[#29251F]/10">
          <div className="p-8 sm:p-12 bg-[#FAF6EE] border border-[#29251F]/15 rounded-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="space-y-2 max-w-xl">
              <span className="text-xs uppercase tracking-[0.2em] font-semibold text-[#68694C] block">
                Commercial Decorum
              </span>
              <h3 className="text-2xl sm:text-3xl font-semibold text-[#29251F]">
                Zero Vanity Guarantees. Only Sound Work.
              </h3>
              <p className="text-sm text-[#6C6255] leading-relaxed">
                We do not promise unrealistic deal numbers or aggressive automation. We build a durable commercial presence founded on mutual value and professional respect.
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
