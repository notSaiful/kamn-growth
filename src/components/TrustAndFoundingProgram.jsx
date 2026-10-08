import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShieldCheck, Eye, Lock, FileText, CheckCircle2, ArrowRight, Sparkles, Building2 } from 'lucide-react';
import { KhatamStar } from './SazoArch';
import { EASE_LUXURY } from '../lib/motionTokens';

const SAMPLE_DELIVERABLES = [
  {
    id: 'market-report',
    title: 'Market Opportunity Report',
    category: 'Growth Intelligence',
    description: 'Detailed analysis of buyer demographics, competitor positioning gaps and institutional purchasing triggers.',
    previewSnippet: [
      { label: 'Vertical Analyzed', value: 'Specialized Industrial Contracting' },
      { label: 'Registry Accounts Vetted', value: '142 Verified Entities' },
      { label: 'Commercial Finding', value: 'Average RFP cycle 45 days; key decision factor: supplier ISO accreditation' }
    ]
  },
  {
    id: 'supplier-matrix',
    title: 'Supplier Quote Normalization',
    category: 'Procurement Discipline',
    description: 'Unstructured supplier proposals normalized into transparent unit-cost matrices with freight and payment terms compared.',
    previewSnippet: [
      { label: 'Suppliers Evaluated', value: '6 Tier-One Manufacturers' },
      { label: 'Normalized Unit Delta', value: '14% variance on primary component' },
      { label: 'Payment Terms Review', value: 'Net-45 benchmarked against standard Net-30' }
    ]
  },
  {
    id: 'execution-memo',
    title: 'Weekly Execution Memo',
    category: 'Operations Synthesis',
    description: 'A 2-page concise weekly brief detailing tasks completed, active conversations, and decisions needing client approval.',
    previewSnippet: [
      { label: 'Workflows Active', value: 'Vendor RFP triage · Outbound follow-up cadence' },
      { label: 'Leadership Time Saved', value: 'Routine administrative triage managed' },
      { label: 'Required Approvals', value: '2 pricing signoffs highlighted for CEO review' }
    ]
  }
];

export default function TrustAndFoundingProgram() {
  const [activeDeliverable, setActiveDeliverable] = useState(0);

  return (
    <div className="w-full space-y-16">
      
      {/* 4 Pillars of Operational Trust */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="p-7 bg-[#FAF6EE] border border-[#29251F]/15 rounded-sm space-y-3">
          <div className="w-8 h-8 rounded-xs bg-[#29251F] text-[#FAF6EE] flex items-center justify-center">
            <Eye className="w-4 h-4 text-[#B59661]" />
          </div>
          <h4 className="text-lg font-semibold text-[#29251F]">Human Accountability</h4>
          <p className="text-xs sm:text-sm text-[#6C6255] leading-relaxed">
            Real consultants review every piece of research, outbound draft and supplier analysis before it ever reaches a counterparty.
          </p>
        </div>

        <div className="p-7 bg-[#FAF6EE] border border-[#29251F]/15 rounded-sm space-y-3">
          <div className="w-8 h-8 rounded-xs bg-[#68694C] text-[#FAF6EE] flex items-center justify-center">
            <Lock className="w-4 h-4 text-[#FAF6EE]" />
          </div>
          <h4 className="text-lg font-semibold text-[#29251F]">Fiduciary Amanah</h4>
          <p className="text-xs sm:text-sm text-[#6C6255] leading-relaxed">
            We treat your margins, proprietary lists and operational data with unbending confidentiality under mutual non-disclosure.
          </p>
        </div>

        <div className="p-7 bg-[#FAF6EE] border border-[#29251F]/15 rounded-sm space-y-3">
          <div className="w-8 h-8 rounded-xs bg-[#B59661] text-[#FAF6EE] flex items-center justify-center">
            <FileText className="w-4 h-4 text-[#29251F]" />
          </div>
          <h4 className="text-lg font-semibold text-[#29251F]">Transparent Reporting</h4>
          <p className="text-xs sm:text-sm text-[#6C6255] leading-relaxed">
            No vanity metrics. You receive unvarnished weekly progress logs with raw data, clear deliverables and next steps.
          </p>
        </div>

        <div className="p-7 bg-[#FAF6EE] border border-[#29251F]/15 rounded-sm space-y-3">
          <div className="w-8 h-8 rounded-xs bg-[#29251F] text-[#FAF6EE] flex items-center justify-center">
            <ShieldCheck className="w-4 h-4 text-[#B59661]" />
          </div>
          <h4 className="text-lg font-semibold text-[#29251F]">Zero Kickbacks</h4>
          <p className="text-xs sm:text-sm text-[#6C6255] leading-relaxed">
            We never accept supplier commissions or broker margins. We represent only your balance sheet and best commercial interest.
          </p>
        </div>
      </div>

      {/* Representative Sample Deliverables Showcase */}
      <div className="p-8 sm:p-12 bg-[#FAF6EE] border border-[#29251F]/15 rounded-sm">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 mb-8 border-b border-[#29251F]/10">
          <div>
            <div className="inline-flex items-center gap-2 mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#68694C]">
              <KhatamStar className="w-3.5 h-3.5 text-[#B59661]" />
              <span>Representative Work Product</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-semibold text-[#29251F]">
              Example Deliverables You Receive
            </h3>
          </div>
          <p className="text-xs text-[#6C6255] max-w-md">
            Illustrative representations of actual work products generated for clients during managed engagements.
          </p>
        </div>

        {/* Deliverable Selector Tabs */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-6">
          {SAMPLE_DELIVERABLES.map((del, idx) => (
            <button
              key={del.id}
              onClick={() => setActiveDeliverable(idx)}
              className={`p-4 rounded-xs text-left transition-all border cursor-pointer ${
                activeDeliverable === idx
                  ? 'bg-[#29251F] text-[#FAF6EE] border-[#29251F] shadow-xs'
                  : 'bg-[#F3EADB]/60 text-[#29251F] border-[#29251F]/10 hover:border-[#29251F]/30'
              }`}
            >
              <span className={`text-[10px] font-semibold uppercase tracking-wider block mb-1 ${
                activeDeliverable === idx ? 'text-[#B59661]' : 'text-[#68694C]'
              }`}>
                {del.category}
              </span>
              <span className="text-sm font-semibold block">{del.title}</span>
            </button>
          ))}
        </div>

        {/* Deliverable Preview Card */}
        <div className="p-6 sm:p-8 bg-[#F3EADB]/50 border border-[#29251F]/10 rounded-sm">
          <div className="max-w-2xl mb-6">
            <h4 className="text-lg sm:text-xl font-semibold text-[#29251F] mb-1">
              {SAMPLE_DELIVERABLES[activeDeliverable].title}
            </h4>
            <p className="text-xs sm:text-sm text-[#6C6255]">
              {SAMPLE_DELIVERABLES[activeDeliverable].description}
            </p>
          </div>

          <div className="space-y-3 bg-[#FAF6EE] p-5 sm:p-6 border border-[#29251F]/10 rounded-xs">
            <div className="text-[10px] uppercase tracking-widest text-[#B59661] font-semibold border-b border-[#29251F]/10 pb-2">
              Sample Synthesis Excerpt
            </div>
            {SAMPLE_DELIVERABLES[activeDeliverable].previewSnippet.map((snip, sIdx) => (
              <div key={sIdx} className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 text-xs py-1 border-b border-[#29251F]/5 last:border-0">
                <span className="text-[#6C6255] font-medium">{snip.label}:</span>
                <span className="text-[#29251F] font-semibold">{snip.value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* The Founding Client Program Card */}
      <div className="p-8 sm:p-14 bg-[#29251F] text-[#FAF6EE] rounded-sm relative overflow-hidden shadow-lg">
        <div className="max-w-3xl space-y-6 relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#FAF6EE]/10 border border-[#FAF6EE]/20 rounded-full text-xs font-semibold uppercase tracking-[0.2em] text-[#B59661]">
            <Building2 className="w-3.5 h-3.5 text-[#B59661]" />
            <span>Selective Intake</span>
          </div>

          <h3 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-[#FAF6EE] leading-tight">
            The Founding Client Program
          </h3>

          <p className="text-sm sm:text-base text-[#FAF6EE]/85 font-normal leading-relaxed">
            We are building KAMN alongside a focused cohort of ambitious, values-aligned businesses. Rather than spreading attention thinly across hundreds of accounts, each engagement begins with an intensive diagnostic of your company’s actual needs, followed by a clearly defined, hands-on managed-service scope.
          </p>

          <div className="pt-2 flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <a
              href="/begin"
              className="px-8 py-4 bg-[#FAF6EE] text-[#29251F] text-xs font-semibold tracking-[0.2em] uppercase rounded-sm hover:bg-[#E8D7BC] transition-colors shadow-md flex items-center gap-2 cursor-pointer"
            >
              <span>Apply for a Growth Review</span>
              <ArrowRight className="w-4 h-4 text-[#29251F]" />
            </a>
            <span className="text-xs text-[#FAF6EE]/60">
              Personal leadership review within 48 hours.
            </span>
          </div>
        </div>

        {/* Ambient Gold Sheen */}
        <div 
          className="absolute -right-20 -bottom-20 w-96 h-96 pointer-events-none opacity-20"
          style={{
            background: 'radial-gradient(circle, rgba(181, 150, 97, 0.6) 0%, transparent 70%)'
          }}
        />
      </div>

    </div>
  );
}
