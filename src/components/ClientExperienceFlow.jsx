import React from 'react';
import { motion } from 'framer-motion';
import { Compass, FileCheck, Layers, TrendingUp, CheckCircle, ArrowRight } from 'lucide-react';
import { KhatamStar } from './SazoArch';
import { EASE_LUXURY } from '../lib/motionTokens';

const STAGES = [
  {
    num: '01',
    name: 'Understand',
    tagline: 'We learn your operating reality.',
    detail: 'We examine your business model, customer margins, internal bottlenecks and commercial objectives. No assumptions or generic templates.',
    icon: Compass,
    accent: '#B59661'
  },
  {
    num: '02',
    name: 'Plan',
    tagline: 'We agree on the exact scope.',
    detail: 'We identify high-priority initiatives and define the precise workflows KAMN will manage, establishing deliverables and reporting rhythms.',
    icon: FileCheck,
    accent: '#68694C'
  },
  {
    num: '03',
    name: 'Execute',
    tagline: 'Our consultants handle the work.',
    detail: 'We deploy proprietary research methods, vendor negotiation protocols and internal AI workflows to execute agreed tasks quietly and rigorously.',
    icon: Layers,
    accent: '#B59661'
  },
  {
    num: '04',
    name: 'Improve',
    tagline: 'You receive output and clarity.',
    detail: 'You receive concise weekly progress updates, qualified business opportunities, normalized vendor quotes and strategic recommendations.',
    icon: TrendingUp,
    accent: '#68694C'
  }
];

export default function ClientExperienceFlow() {
  return (
    <div className="w-full space-y-12">
      {/* Visual Sequence Ribbon: Your Objective -> KAMN -> Managed Execution -> Business Progress */}
      <div className="p-6 sm:p-8 bg-[#FAF6EE] border border-[#29251F]/15 rounded-sm">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 sm:gap-6">
          
          <div className="flex items-center gap-3 w-full md:w-auto">
            <span className="w-8 h-8 rounded-full bg-[#29251F] text-[#FAF6EE] text-xs font-semibold flex items-center justify-center shrink-0">
              01
            </span>
            <div>
              <span className="text-[11px] uppercase tracking-[0.2em] text-[#6C6255] font-semibold block">Client</span>
              <span className="text-sm font-semibold text-[#29251F]">Your Objective</span>
            </div>
          </div>

          <div className="hidden md:block text-[#B59661] text-lg font-semibold">→</div>

          <div className="flex items-center gap-3 w-full md:w-auto p-3 sm:p-4 bg-[#F3EADB] border border-[#B59661]/40 rounded-xs">
            <KhatamStar className="w-5 h-5 text-[#B59661] shrink-0" />
            <div>
              <span className="text-[11px] uppercase tracking-[0.2em] text-[#68694C] font-semibold block">Consultancy</span>
              <span className="text-sm font-semibold text-[#29251F]">KAMN OS & Team</span>
            </div>
          </div>

          <div className="hidden md:block text-[#B59661] text-lg font-semibold">→</div>

          <div className="flex items-center gap-3 w-full md:w-auto">
            <span className="w-8 h-8 rounded-full bg-[#68694C] text-[#FAF6EE] text-xs font-semibold flex items-center justify-center shrink-0">
              02
            </span>
            <div>
              <span className="text-[11px] uppercase tracking-[0.2em] text-[#6C6255] font-semibold block">Execution</span>
              <span className="text-sm font-semibold text-[#29251F]">Managed Workflows</span>
            </div>
          </div>

          <div className="hidden md:block text-[#B59661] text-lg font-semibold">→</div>

          <div className="flex items-center gap-3 w-full md:w-auto">
            <span className="w-8 h-8 rounded-full bg-[#B59661] text-[#FAF6EE] text-xs font-semibold flex items-center justify-center shrink-0">
              03
            </span>
            <div>
              <span className="text-[11px] uppercase tracking-[0.2em] text-[#6C6255] font-semibold block">Outcome</span>
              <span className="text-sm font-semibold text-[#29251F]">Commercial Progress</span>
            </div>
          </div>

        </div>
      </div>

      {/* 4 Interactive Columns */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {STAGES.map((st, idx) => {
          const Icon = st.icon;
          return (
            <motion.div
              key={st.num}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-20px' }}
              transition={{ delay: idx * 0.1, duration: 0.5, ease: EASE_LUXURY }}
              className="p-7 sm:p-8 bg-[#FAF6EE] border border-[#29251F]/15 rounded-sm flex flex-col justify-between hover:border-[#B59661] transition-all duration-300 group shadow-xs"
            >
              <div>
                <div className="flex items-center justify-between pb-4 mb-4 border-b border-[#29251F]/10">
                  <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[#B59661]">
                    Stage {st.num}
                  </span>
                  <KhatamStar className="w-3.5 h-3.5 text-[#B59661] opacity-40 group-hover:opacity-100 transition-opacity" />
                </div>

                <div className="w-9 h-9 rounded-xs bg-[#29251F] text-[#FAF6EE] flex items-center justify-center mb-4 group-hover:bg-[#363428] transition-colors">
                  <Icon className="w-4 h-4 text-[#B59661]" />
                </div>

                <h3 className="text-xl sm:text-2xl font-semibold text-[#29251F] tracking-tight mb-2">
                  {st.name}
                </h3>

                <p className="text-xs sm:text-sm font-semibold text-[#68694C] mb-3">
                  {st.tagline}
                </p>

                <p className="text-xs sm:text-sm text-[#6C6255] leading-relaxed">
                  {st.detail}
                </p>
              </div>

              <div className="pt-4 mt-6 border-t border-[#29251F]/10 text-[11px] uppercase tracking-wider text-[#6C6255]">
                {idx === 0 && 'Discovery review'}
                {idx === 1 && 'Agreed deliverables'}
                {idx === 2 && 'Hands-off execution'}
                {idx === 3 && 'Actionable briefing'}
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Zero Software Banner */}
      <div className="p-6 sm:p-8 bg-[#FAF6EE] border border-[#29251F]/15 rounded-sm flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-[#68694C]/15 text-[#68694C] flex items-center justify-center shrink-0">
            <CheckCircle className="w-4 h-4" />
          </div>
          <div>
            <h4 className="text-sm sm:text-base font-semibold text-[#29251F]">
              No software to learn. No additional platform to manage.
            </h4>
            <p className="text-xs text-[#6C6255]">
              You set initial direction and provide timely approvals when needed. KAMN manages the operational machinery.
            </p>
          </div>
        </div>

        <a
          href="/approach"
          className="text-xs uppercase tracking-[0.2em] font-semibold text-[#29251F] hover:text-[#B59661] transition-colors whitespace-nowrap cursor-pointer"
        >
          Explore working methodology →
        </a>
      </div>
    </div>
  );
}
