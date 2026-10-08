import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { UserCheck, Briefcase, CheckCircle2, ArrowRight, ShieldCheck, FileSpreadsheet, MailCheck, Calendar, Sparkles } from 'lucide-react';
import { KhatamStar } from './SazoArch';
import { EASE_LUXURY } from '../lib/motionTokens';

const WORKFLOW_STEPS = [
  {
    phase: '01 · Foundation',
    actor: 'KAMN',
    action: 'Product & Economic Analysis',
    detail: 'We dissect your SKU margins, manufacturing capacities, delivery lead times and target unit economics.'
  },
  {
    phase: '01 · Foundation',
    actor: 'KAMN',
    action: 'Target Industry Mapping',
    detail: 'We identify and prioritize the top commercial verticals with high institutional purchasing appetite.'
  },
  {
    phase: '02 · Intelligence',
    actor: 'KAMN',
    action: 'Institutional Buyer Research',
    detail: 'We screen corporate directories and regional procurement registries for verified institutional accounts.'
  },
  {
    phase: '02 · Intelligence',
    actor: 'KAMN',
    action: 'Account Qualification & Sizing',
    detail: 'We filter out mismatched leads based on procurement volume thresholds, compliance standards and solvency.'
  },
  {
    phase: '02 · Intelligence',
    actor: 'KAMN',
    action: 'Decision-Maker Profiling',
    detail: 'We locate relevant heads of procurement, sourcing directors and commercial executives.'
  },
  {
    phase: '03 · Narrative',
    actor: 'KAMN',
    action: 'Tailored Outreach Drafting',
    detail: 'We draft bespoke, value-centric communication highlighting your manufacturing reliability and pricing.'
  },
  {
    phase: '03 · Narrative',
    actor: 'CLIENT APPROVAL',
    action: 'Tone & Term Signoff',
    detail: 'You review the messaging strategy, volume targets and corporate narrative to ensure 100% brand alignment.'
  },
  {
    phase: '04 · Execution',
    actor: 'KAMN',
    action: 'Multi-Channel Cadence Coordination',
    detail: 'We execute approved communications across email and professional channels with unhurried persistence.'
  },
  {
    phase: '04 · Execution',
    actor: 'KAMN',
    action: 'Follow-Up & Objection Handling',
    detail: 'We answer initial logistical questions, supply technical specification sheets, and nurture hesitant replies.'
  },
  {
    phase: '04 · Execution',
    actor: 'KAMN',
    action: 'Meeting & Proposal Briefing',
    detail: 'When buyers express concrete purchasing intent, we coordinate the introduction and supply a full brief.'
  },
  {
    phase: '05 · Visibility',
    actor: 'KAMN',
    action: 'Continuous Pipeline Tracking',
    detail: 'Every interaction, contract milestone and RFP submission is documented in a shared live tracking sheet.'
  },
  {
    phase: '05 · Visibility',
    actor: 'KAMN',
    action: 'Weekly Synthesis & Next Priorities',
    detail: 'You receive a concise weekly executive memo with actionable findings and recommended strategic adjustments.'
  }
];

export default function ExampleEngagement() {
  const [filterPhase, setFilterPhase] = useState('ALL');

  return (
    <div className="w-full space-y-8">
      {/* Scenario Header Card */}
      <div className="p-8 sm:p-10 bg-[#FAF6EE] border border-[#29251F]/15 rounded-sm relative overflow-hidden">
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#F3EADB] border border-[#29251F]/10 rounded-full text-[11px] font-semibold uppercase tracking-[0.2em] text-[#68694C]">
            <Sparkles className="w-3.5 h-3.5 text-[#B59661]" />
            <span>Illustrative Managed Workflow</span>
          </div>

          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-[#29251F] tracking-tight">
            “I manufacture commercial equipment and want to open relationships with institutional buyers.”
          </h3>

          <p className="text-sm sm:text-base text-[#6C6255] leading-relaxed">
            Here is how a single commercial objective translates into an end-to-end, twelve-step execution process managed quietly by KAMN.
          </p>
        </div>

        {/* Legend: Client Input vs KAMN Heavy Lifting */}
        <div className="mt-8 pt-6 border-t border-[#29251F]/10 flex flex-wrap items-center gap-6 text-xs font-semibold">
          <div className="flex items-center gap-2 text-[#29251F]">
            <span className="w-3 h-3 rounded-full bg-[#B59661]" />
            <span>KAMN Managed Workflows (90% of operational labor)</span>
          </div>
          <div className="flex items-center gap-2 text-[#68694C]">
            <span className="w-3 h-3 rounded-full bg-[#29251F]" />
            <span>Client Leadership (Strategic direction & final commercial approvals)</span>
          </div>
        </div>
      </div>

      {/* 12-Step Phased Workflow Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {WORKFLOW_STEPS.map((step, idx) => {
          const isClient = step.actor.includes('CLIENT');
          return (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-10px' }}
              transition={{ delay: idx * 0.05, duration: 0.4, ease: EASE_LUXURY }}
              className={`p-6 rounded-sm border transition-all duration-200 flex flex-col justify-between ${
                isClient
                  ? 'bg-[#F3EADB] border-[#29251F]/30 shadow-xs ring-1 ring-[#29251F]/10'
                  : 'bg-[#FAF6EE] border-[#29251F]/15 hover:border-[#B59661]'
              }`}
            >
              <div>
                <div className="flex items-center justify-between pb-3 mb-3 border-b border-[#29251F]/10">
                  <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#6C6255]">
                    Step {String(idx + 1).padStart(2, '0')}
                  </span>
                  <span className={`text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-xs ${
                    isClient
                      ? 'bg-[#29251F] text-[#FAF6EE]'
                      : 'bg-[#E8D7BC]/70 text-[#29251F]'
                  }`}>
                    {step.actor}
                  </span>
                </div>

                <h4 className="text-base font-semibold text-[#29251F] tracking-tight mb-2">
                  {step.action}
                </h4>

                <p className="text-xs text-[#6C6255] leading-relaxed">
                  {step.detail}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-[#29251F]/10 text-[10px] uppercase tracking-wider text-[#68694C] font-semibold flex items-center justify-between">
                <span>{step.phase}</span>
                <CheckCircle2 className="w-3.5 h-3.5 text-[#B59661]" />
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Closing Summary Banner */}
      <div className="p-8 sm:p-10 bg-[#FAF6EE] border border-[#29251F]/15 rounded-sm text-center max-w-3xl mx-auto space-y-4">
        <h4 className="text-2xl sm:text-3xl font-semibold text-[#29251F] tracking-tight">
          You run your business. <br className="hidden sm:inline" />
          <span className="text-[#68694C]">We help run the processes that grow it.</span>
        </h4>
        <p className="text-xs sm:text-sm text-[#6C6255] max-w-xl mx-auto">
          Every workflow is tailored to your real market conditions. We handle the labor, research, follow-up and synthesis so you focus on closing and operations.
        </p>
        <div className="pt-2">
          <a
            href="/begin"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#29251F] text-[#FAF6EE] text-xs font-semibold tracking-[0.2em] uppercase rounded-sm hover:bg-[#363428] transition-colors"
          >
            <span>Discuss your specific objective</span>
            <ArrowRight className="w-3.5 h-3.5 text-[#B59661]" />
          </a>
        </div>
      </div>
    </div>
  );
}
