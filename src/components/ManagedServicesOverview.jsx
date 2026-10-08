import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { TrendingUp, ShieldCheck, Clock, Cpu, ArrowRight, CheckCircle2 } from 'lucide-react';
import { KhatamStar } from './SazoArch';
import { EASE_LUXURY } from '../lib/motionTokens';

const SERVICES = [
  {
    id: 'growth',
    num: '01',
    category: 'Growth & Business Development',
    tagline: 'Find more opportunities. Follow through on them.',
    description: 'We research target accounts, qualify genuine decision-makers, and coordinate tailored outbound communications so your leadership can focus on closing deals.',
    href: '/services/growth',
    icon: TrendingUp,
    accent: '#B59661',
    deliverables: [
      'Market & competitor research',
      'Ideal customer profile mapping',
      'Target prospect discovery',
      'Lead qualification & vetting',
      'Outreach message preparation',
      'Follow-up cadence coordination',
      'Pipeline activity tracking',
      'Meeting & proposal briefing notes'
    ]
  },
  {
    id: 'procurement',
    num: '02',
    category: 'Procurement & Supplier Management',
    tagline: 'Source smarter. Buy with greater confidence.',
    description: 'We discover verified suppliers, normalize disparate proposals, and support commercial discussions to protect your margins without consuming executive hours.',
    href: '/services/procurement',
    icon: ShieldCheck,
    accent: '#68694C',
    deliverables: [
      'Supplier research & discovery',
      'Vendor vetting & shortlisting',
      'RFQ preparation & specification triage',
      'Normalized quote comparison matrices',
      'Procurement coordination',
      'Routine vendor communication',
      'Sourcing market intelligence',
      'Commercial negotiation support'
    ]
  },
  {
    id: 'operations',
    num: '03',
    category: 'Managed Operations',
    tagline: 'Take recurring work off your team’s plate.',
    description: 'We bring discipline to back-office workflows, organize recurring handoffs, and document undocumented institutional knowledge so operations stay unblocked.',
    href: '/services/operations',
    icon: Clock,
    accent: '#B59661',
    deliverables: [
      'Business process coordination',
      'Recurring follow-up management',
      'Standard Operating Procedure (SOP) drafting',
      'Internal execution reporting',
      'Cross-functional workflow management',
      'Administrative coordination desk',
      'Operations research & bottlenecks audit',
      'Weekly executive decision memos'
    ]
  },
  {
    id: 'ai-systems',
    num: '04',
    category: 'Intelligent Systems',
    tagline: 'Better execution, without more complexity.',
    description: 'We build and supervise automated workflows that turn slow, manual document processing and data tasks into fast, human-verified routines.',
    href: '/services/ai-systems',
    icon: Cpu,
    accent: '#68694C',
    deliverables: [
      'Routine workflow automation',
      'AI-assisted market research',
      'Unstructured document & PDF extraction',
      'Internal data synthesis & reporting',
      'Automated intelligence pipelines',
      'Human-supervised quality validation',
      'Tool & software consolidation',
      'Managed AI agent workflows'
    ]
  }
];

export default function ManagedServicesOverview() {
  const [activeTab, setActiveTab] = useState(0);
  const current = SERVICES[activeTab];
  const Icon = current.icon;

  return (
    <div className="w-full">
      {/* Editorial Category Selector Tabs */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-2 p-1.5 bg-[#FAF6EE] border border-[#29251F]/15 rounded-sm mb-10">
        {SERVICES.map((srv, idx) => {
          const isSelected = activeTab === idx;
          const TabIcon = srv.icon;
          return (
            <button
              key={srv.id}
              onClick={() => setActiveTab(idx)}
              className={`p-3.5 sm:p-4 rounded-xs text-left transition-all duration-300 flex flex-col justify-between cursor-pointer ${
                isSelected
                  ? 'bg-[#29251F] text-[#FAF6EE] shadow-sm'
                  : 'text-[#6C6255] hover:text-[#29251F] hover:bg-[#F3EADB]/60'
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <span className={`text-[11px] font-semibold tracking-[0.2em] uppercase ${
                  isSelected ? 'text-[#B59661]' : 'text-[#6C6255]'
                }`}>
                  {srv.num}
                </span>
                <TabIcon className={`w-4 h-4 ${isSelected ? 'text-[#FAF6EE]' : 'text-[#6C6255]'}`} />
              </div>
              <span className="text-xs sm:text-sm font-semibold tracking-tight line-clamp-1">
                {srv.category.split('&')[0].trim()}
              </span>
            </button>
          );
        })}
      </div>

      {/* Active Service Showcase Card */}
      <AnimatePresence mode="wait">
        <motion.div
          key={current.id}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          transition={{ duration: 0.4, ease: EASE_LUXURY }}
          className="bg-[#FAF6EE] border border-[#29251F]/15 rounded-sm p-8 sm:p-12 lg:p-14 shadow-xs"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
            
            {/* Left Column: Scope Overview */}
            <div className="lg:col-span-5 space-y-6 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-xs font-semibold tracking-[0.25em] uppercase text-[#B59661]">
                    Discipline {current.num} · Managed Service
                  </span>
                </div>

                <h3 className="text-2xl sm:text-4xl font-semibold text-[#29251F] tracking-tight leading-tight mb-3">
                  {current.category}
                </h3>

                <p className="text-base sm:text-lg font-medium text-[#68694C] leading-snug mb-4">
                  {current.tagline}
                </p>

                <p className="text-sm sm:text-base text-[#6C6255] leading-relaxed">
                  {current.description}
                </p>
              </div>

              {/* Handled Notice & Deep-Dive Link */}
              <div className="pt-6 border-t border-[#29251F]/10 space-y-4">
                <div className="flex items-start gap-3 text-xs text-[#29251F]">
                  <CheckCircle2 className="w-4 h-4 text-[#B59661] shrink-0 mt-0.5" />
                  <span>
                    <strong>Managed by KAMN:</strong> Your team never logs into dashboards or configures tools. We execute and report back.
                  </span>
                </div>

                <div>
                  <Link
                    to={current.href}
                    className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] font-semibold text-[#29251F] hover:text-[#B59661] transition-colors group cursor-pointer"
                  >
                    <span>View full discipline methodology</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Right Column: Exact Managed Deliverables */}
            <div className="lg:col-span-7 bg-[#F3EADB]/60 border border-[#29251F]/10 rounded-sm p-6 sm:p-8">
              <div className="flex items-center justify-between pb-4 mb-6 border-b border-[#29251F]/10">
                <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#29251F]">
                  What KAMN Handles For Your Business
                </span>
                <span className="text-[11px] text-[#6C6255] uppercase tracking-wider hidden sm:inline">
                  Outsourced Scope
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                {current.deliverables.map((item, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-3 p-3 bg-[#FAF6EE] border border-[#29251F]/10 rounded-xs"
                  >
                    <span className="w-5 h-5 rounded-full bg-[#E8D7BC]/70 text-[#29251F] text-[10px] font-semibold flex items-center justify-center shrink-0 mt-0.5">
                      {i + 1}
                    </span>
                    <span className="text-xs sm:text-sm text-[#29251F] font-medium leading-tight">
                      {item}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-6 pt-4 border-t border-[#29251F]/10 flex items-center justify-between text-xs text-[#6C6255]">
                <span>Commercial approvals remain with your leadership.</span>
                <Link
                  to="/begin"
                  className="font-semibold text-[#29251F] hover:text-[#B59661] transition-colors"
                >
                  Request scope review →
                </Link>
              </div>
            </div>

          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
