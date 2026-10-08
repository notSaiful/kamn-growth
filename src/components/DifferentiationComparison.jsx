import React from 'react';
import { motion } from 'framer-motion';
import { X, Check, ArrowRight, ShieldCheck } from 'lucide-react';
import { KhatamStar } from './SazoArch';
import { EASE_LUXURY } from '../lib/motionTokens';

const COMPARISON_COLUMNS = [
  {
    type: 'Traditional Software',
    subtitle: 'SaaS Platforms & CRMs',
    tagline: 'You operate the platform. Your team does the work.',
    points: [
      { text: 'Requires internal training, setup and onboarding', positive: false },
      { text: 'Creates another daily dashboard for your team to check', positive: false },
      { text: 'Execution speed depends entirely on your internal capacity', positive: false },
      { text: 'You pay for access whether work gets completed or not', positive: false }
    ],
    highlight: false
  },
  {
    type: 'Traditional Consulting',
    subtitle: 'Management Advisors',
    tagline: 'You receive expertise. Execution remains on your desk.',
    points: [
      { text: 'High upfront cost for advisory assessments and audit slides', positive: false },
      { text: 'Valuable high-level strategy and benchmark analysis', positive: true },
      { text: 'Implementation and day-to-day coordination left to you', positive: false },
      { text: 'Infrequent meetings with limited operational follow-through', positive: false }
    ],
    highlight: false
  },
  {
    type: 'KAMN Managed Partner',
    subtitle: 'AI-Native Consultancy',
    tagline: 'We operate the systems. We manage the work. You receive the output.',
    points: [
      { text: 'Zero software for your team to learn or configure', positive: true },
      { text: 'Dedicated human consultants manage research and outreach', positive: true },
      { text: 'Proprietary internal AI OS powers operating leverage', positive: true },
      { text: 'Weekly synthesized reports, verified leads and normalized quotes', positive: true }
    ],
    highlight: true
  }
];

export default function DifferentiationComparison() {
  return (
    <div className="w-full space-y-12">
      {/* 3 Columns Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 items-stretch">
        {COMPARISON_COLUMNS.map((col, idx) => {
          return (
            <motion.div
              key={col.type}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-20px' }}
              transition={{ delay: idx * 0.1, duration: 0.5, ease: EASE_LUXURY }}
              className={`rounded-sm p-8 sm:p-10 flex flex-col justify-between transition-all duration-300 relative ${
                col.highlight
                  ? 'bg-[#FAF6EE] border-2 border-[#B59661] shadow-md ring-1 ring-[#B59661]/30'
                  : 'bg-[#FAF6EE]/80 border border-[#29251F]/15'
              }`}
            >
              {col.highlight && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 bg-[#29251F] text-[#FAF6EE] text-[10px] font-semibold uppercase tracking-[0.25em] rounded-full border border-[#B59661]">
                  The Managed Model
                </div>
              )}

              <div>
                <div className="pb-6 mb-6 border-b border-[#29251F]/10">
                  <span className={`text-xs font-semibold tracking-[0.2em] uppercase block mb-1 ${
                    col.highlight ? 'text-[#B59661]' : 'text-[#6C6255]'
                  }`}>
                    {col.subtitle}
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-semibold text-[#29251F] tracking-tight">
                    {col.type}
                  </h3>
                </div>

                <p className="text-sm font-semibold text-[#68694C] mb-8 leading-snug">
                  {col.tagline}
                </p>

                <div className="space-y-4">
                  {col.points.map((pt, pIdx) => (
                    <div key={pIdx} className="flex items-start gap-3">
                      <div className={`w-4 h-4 rounded-full flex items-center justify-center shrink-0 mt-0.5 ${
                        pt.positive
                          ? 'bg-[#68694C]/15 text-[#68694C]'
                          : 'bg-[#29251F]/10 text-[#6C6255]'
                      }`}>
                        {pt.positive ? (
                          <Check className="w-3 h-3 text-[#68694C]" />
                        ) : (
                          <span className="w-1.5 h-1.5 rounded-full bg-[#6C6255]" />
                        )}
                      </div>
                      <span className="text-xs sm:text-sm text-[#29251F]/90 leading-relaxed font-normal">
                        {pt.text}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-8 mt-8 border-t border-[#29251F]/10">
                {col.highlight ? (
                  <a
                    href="/begin"
                    className="w-full min-h-[46px] flex items-center justify-center gap-2 px-6 py-3 bg-[#29251F] text-[#FAF6EE] text-xs font-semibold tracking-[0.2em] uppercase rounded-sm hover:bg-[#363428] transition-colors shadow-xs"
                  >
                    <span>Book a Growth Review</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#B59661]" />
                  </a>
                ) : (
                  <span className="text-[11px] uppercase tracking-wider text-[#6C6255] block text-center">
                    Alternative Approach
                  </span>
                )}
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
