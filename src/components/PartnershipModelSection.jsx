import React from 'react';
import { motion } from 'framer-motion';
import { Check, ArrowRight, ShieldCheck, Clock, Users, Sparkles } from 'lucide-react';
import { KhatamStar } from './SazoArch';
import { EASE_LUXURY } from '../lib/motionTokens';

const PARTNERSHIP_MODELS = [
  {
    name: 'Growth Partner',
    subtitle: 'Outbound & Commercial Acceleration',
    description: 'Designed for businesses with capacity seeking new qualified customer pipelines without building an internal SDR/research team.',
    idealFor: 'B2B companies, industrial manufacturers, professional services.',
    included: [
      'Dedicated market & account research',
      'Ideal customer profile (ICP) data mapping',
      'Tailored executive message preparation',
      'Continuous outreach cadence coordination',
      'Inquiry triage & objection handling',
      'Weekly executive pipeline reporting'
    ],
    highlight: false
  },
  {
    name: 'Operations Partner',
    subtitle: 'Back-Office Leverage & Sourcing',
    description: 'Designed for leaders drowning in supplier coordination, recurring documentation, and cross-functional administrative bottlenecks.',
    idealFor: 'Growing SMEs ($1M–$15M) facing executive bandwidth strain.',
    included: [
      'Routine vendor communication desk',
      'Supplier discovery & quote normalization',
      'Operating SOP documentation & codification',
      'Internal reporting & cross-team tracking',
      'Automated supervised document workflows',
      'Weekly operational synthesis memos'
    ],
    highlight: false
  },
  {
    name: 'Strategic Partner',
    subtitle: 'Comprehensive Operational Capability',
    description: 'Our most comprehensive managed partnership, combining dedicated business development, procurement renegotiation, and managed AI operations.',
    idealFor: 'Enterprises preparing for scale, recapitalization, or market entry.',
    included: [
      'Full Growth Partner scope included',
      'Full Operations Partner scope included',
      'Custom human-supervised AI workflows',
      'Direct partner-level strategic syncs',
      'Priority turnaround & dedicated lead consultant',
      'Comprehensive monthly commercial reviews'
    ],
    highlight: true
  }
];

export default function PartnershipModelSection() {
  return (
    <div className="w-full space-y-12">
      {/* 3 Partnership Models Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 items-stretch">
        {PARTNERSHIP_MODELS.map((model, idx) => {
          return (
            <motion.div
              key={model.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-20px' }}
              transition={{ delay: idx * 0.1, duration: 0.5, ease: EASE_LUXURY }}
              className={`rounded-sm p-8 sm:p-10 flex flex-col justify-between transition-all duration-300 relative ${
                model.highlight
                  ? 'bg-[#FAF6EE] border-2 border-[#B59661] shadow-md ring-1 ring-[#B59661]/25'
                  : 'bg-[#FAF6EE] border border-[#29251F]/15'
              }`}
            >
              {model.highlight && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 bg-[#29251F] text-[#FAF6EE] text-[10px] font-semibold uppercase tracking-[0.25em] rounded-full border border-[#B59661]">
                  Comprehensive Scope
                </div>
              )}

              <div>
                <div className="pb-6 mb-6 border-b border-[#29251F]/10">
                  <span className="text-xs uppercase tracking-[0.2em] font-semibold text-[#68694C] block mb-1">
                    {model.subtitle}
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-semibold text-[#29251F] tracking-tight">
                    {model.name}
                  </h3>
                </div>

                <p className="text-xs sm:text-sm text-[#6C6255] leading-relaxed mb-6">
                  {model.description}
                </p>

                <div className="p-3 bg-[#F3EADB]/60 rounded-xs border border-[#29251F]/10 mb-6">
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-[#68694C] block mb-0.5">
                    Best Suited For:
                  </span>
                  <span className="text-xs text-[#29251F] font-medium">
                    {model.idealFor}
                  </span>
                </div>

                <div className="space-y-3">
                  <span className="text-[11px] uppercase tracking-wider font-semibold text-[#29251F] block mb-2">
                    Included Managed Workflows:
                  </span>
                  {model.included.map((inc, i) => (
                    <div key={i} className="flex items-start gap-2.5">
                      <Check className="w-3.5 h-3.5 text-[#B59661] shrink-0 mt-0.5" />
                      <span className="text-xs text-[#29251F]/90 font-normal leading-relaxed">
                        {inc}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-8 mt-8 border-t border-[#29251F]/10 space-y-3">
                <div className="text-center">
                  <span className="text-xs font-semibold text-[#29251F] block">
                    Monthly engagements tailored to scope
                  </span>
                  <span className="text-[11px] text-[#6C6255]">
                    No long-term lock-in · 30-day notice
                  </span>
                </div>

                <a
                  href="/begin"
                  className={`w-full min-h-[46px] flex items-center justify-center gap-2 px-6 py-3 rounded-sm text-xs font-semibold tracking-[0.2em] uppercase transition-colors cursor-pointer ${
                    model.highlight
                      ? 'bg-[#29251F] text-[#FAF6EE] hover:bg-[#363428] shadow-xs'
                      : 'bg-[#F3EADB] text-[#29251F] hover:bg-[#E8D7BC] border border-[#29251F]/15'
                  }`}
                >
                  <span>Discuss Requirements</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Commercial Terms Clarification Note */}
      <div className="p-6 sm:p-8 bg-[#FAF6EE] border border-[#29251F]/15 rounded-sm flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-[#6C6255]">
        <div className="flex items-center gap-2.5">
          <ShieldCheck className="w-4 h-4 text-[#B59661] shrink-0" />
          <span>
            <strong>Transparent Terms:</strong> We agree on exact operating scopes, expected deliverables, communication cadences and deliverables before billing begins.
          </span>
        </div>
        <a
          href="/partnership"
          className="font-semibold text-[#29251F] hover:text-[#B59661] whitespace-nowrap transition-colors"
        >
          View detailed commercial terms →
        </a>
      </div>
    </div>
  );
}
