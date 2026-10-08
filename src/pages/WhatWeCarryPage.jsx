import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { KhatamStar } from '../components/SazoArch';
import PageTransition from '../components/PageTransition';

export default function WhatWeCarryPage() {
  const families = [
    {
      num: "01",
      title: "Growth",
      arabic: "نمو",
      tagline: "Demand, systems, and execution working in the same direction.",
      scope: "Outbound architecture · Pipeline acceleration · Executive positioning",
      href: "/services/growth"
    },
    {
      num: "02",
      title: "Procurement",
      arabic: "توريد",
      tagline: "Sourcing, comparison, negotiation, and coordination — handled.",
      scope: "Supplier vetting · Commercial renegotiation · Contract terms review",
      href: "/services/procurement"
    },
    {
      num: "03",
      title: "Operations",
      arabic: "عمليات",
      tagline: "Recurring work, follow-ups, and systems — quietly handled.",
      scope: "Operating playbooks · Bandwidth recovery · Back-office rhythm",
      href: "/services/operations"
    },
    {
      num: "04",
      title: "AI Systems",
      arabic: "أنظمة",
      tagline: "Automate what should not consume you. No AI theatre.",
      scope: "Pragmatic workflow pipelines · Document synthesis · Supervised intelligence",
      href: "/services/ai-systems"
    }
  ];

  return (
    <PageTransition>
      <div className="pt-32 pb-24 min-h-screen bg-transparent text-[#29251F]">
        
        {/* Hero Section */}
        <section className="editorial-container pt-8 pb-20 border-b border-[#29251F]/10">
          <div className="max-w-4xl">
            <div className="flex items-center gap-2 mb-6">
              <KhatamStar className="w-4 h-4 text-[#B59661]" />
              <span className="text-xs uppercase tracking-[0.25em] font-medium text-[#6C6255]">
                Core Disciplines
              </span>
            </div>

            <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-semibold tracking-tight text-[#29251F] leading-[1.02] uppercase mb-8">
              WHAT SHOULD<br />
              <span className="text-[#68694C] font-semibold">FEEL LIGHTER?</span>
            </h1>

            <p className="text-base sm:text-xl text-[#6C6255] font-normal max-w-xl leading-relaxed">
              Four operational disciplines. Governed by discretion, precision, and Amanah.
            </p>
          </div>
        </section>

        {/* 4 Disciplines Grid */}
        <section className="editorial-container py-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {families.map((fam, idx) => (
              <motion.div
                key={fam.num}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="group relative bg-[#FAF6EE]/85 backdrop-blur-xs border border-[#29251F]/10 rounded-sm p-8 sm:p-12 hover:border-[#B59661]/40 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between pb-8 mb-8 border-b border-[#29251F]/10">
                    <span className="text-xs tracking-[0.3em] uppercase text-[#68694C] font-medium">
                      Discipline {fam.num}
                    </span>
                    <span className="text-xs text-[#6C6255]">
                      KAMN
                    </span>
                  </div>

                  <h2 className="text-2xl sm:text-4xl text-[#29251F] font-semibold tracking-tight mb-4 group-hover:text-[#68694C] transition-colors">
                    {fam.title}
                  </h2>

                  <p className="text-sm sm:text-base text-[#6C6255] font-normal leading-relaxed mb-6">
                    {fam.tagline}
                  </p>

                  <div className="pt-4 border-t border-[#29251F]/5 text-xs tracking-wide text-[#6C6255]/80 uppercase">
                    {fam.scope}
                  </div>
                </div>

                <div className="pt-10 mt-8">
                  <Link
                    to={fam.href}
                    className="inline-flex items-center gap-3 text-xs uppercase font-semibold tracking-[0.2em] text-[#29251F] group-hover:text-[#B59661] transition-colors min-h-[44px]"
                  >
                    <span>Explore {fam.title}</span>
                    <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Quiet Closing Anchor */}
        <section className="editorial-container pt-12 pb-20">
          <div className="p-8 sm:p-14 bg-[#EADDC9]/60 border border-[#29251F]/10 rounded-sm flex flex-col sm:flex-row items-start sm:items-center justify-between gap-8">
            <div className="space-y-2">
              <h3 className="text-2xl sm:text-3xl font-semibold text-[#29251F]">
                Unsure which discipline to begin with?
              </h3>
              <p className="text-sm text-[#6C6255] font-normal">
                We review your current operational weight and advise with clarity.
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
