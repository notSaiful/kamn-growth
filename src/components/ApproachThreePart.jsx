import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Compass, PencilRuler, CheckCircle2 } from 'lucide-react';
import { KhatamStar } from './SazoArch';
import { EASE_LUXURY } from '../lib/motionTokens';

export default function ApproachThreePart() {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      num: "01",
      title: "UNDERSTAND",
      arabic: "فهم",
      summary: "Find the real problem.",
      icon: Compass,
      description: "Every business carries different operational friction. We begin with a quiet, comprehensive assessment—distinguishing between immediate symptoms and the underlying structural constraints holding you back.",
      focusPoints: [
        "Audit existing workflows, commercial bottlenecks, and time drains",
        "Clarify leadership priorities and true operating constraints",
        "Identify root causes before proposing any intervention"
      ]
    },
    {
      num: "02",
      title: "DESIGN",
      arabic: "تصميم",
      summary: "Create a practical way forward.",
      icon: PencilRuler,
      description: "We architect straightforward, realistic processes tailored to how your business actually operates. No generic corporate playbooks, no consulting theatre, and no software bloat.",
      focusPoints: [
        "Structure clear operational rhythms and responsibility lines",
        "Build practical templates, supplier criteria, and outreach protocols",
        "Set transparent milestones and decision gates for leadership"
      ]
    },
    {
      num: "03",
      title: "EXECUTE",
      arabic: "تنفيذ",
      summary: "Turn decisions into action.",
      icon: CheckCircle2,
      description: "A plan is only as good as its implementation. We step in quietly to carry the coordination, follow-ups, and execution—delivering reliable movement behind your business.",
      focusPoints: [
        "Absorb routine follow-ups, coordination, and vendor communications",
        "Apply meticulous human supervision to every deliverable",
        "Provide synthesized executive briefings so you stay focused on vision"
      ]
    }
  ];

  return (
    <div className="space-y-12">
      {/* 3 Step Interactive Triptych Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
        {steps.map((step, idx) => {
          const Icon = step.icon;
          const isActive = activeStep === idx;

          return (
            <motion.div
              key={step.num}
              onClick={() => setActiveStep(idx)}
              className={`p-8 sm:p-10 rounded-sm border transition-all duration-300 cursor-pointer flex flex-col justify-between ${
                isActive
                  ? 'bg-[#FAF6EE]/95 backdrop-blur-xs border-[#B59661] shadow-sm'
                  : 'bg-[#FAF6EE]/75 backdrop-blur-xs border-[#29251F]/10 hover:border-[#B59661]/40'
              }`}
            >
              <div>
                <div className="flex items-center justify-between pb-6 mb-6 border-b border-[#29251F]/10">
                  <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#68694C]">
                    Stage {step.num}
                  </span>
                  <span className="text-xs font-arabic text-[#6C6255]">
                    {step.arabic}
                  </span>
                </div>

                <div className="flex items-center gap-3 mb-3">
                  <div className={`w-8 h-8 rounded-xs flex items-center justify-center transition-colors ${
                    isActive ? 'bg-[#29251F] text-[#FAF6EE]' : 'bg-[#E8D7BC]/40 text-[#6C6255]'
                  }`}>
                    <Icon className="w-4 h-4" />
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-semibold text-[#29251F] tracking-tight">
                    {step.title}
                  </h3>
                </div>

                <p className="text-base sm:text-lg font-medium text-[#68694C] mb-6">
                  {step.summary}
                </p>

                <p className="text-xs sm:text-sm text-[#6C6255] font-normal leading-relaxed mb-6">
                  {step.description}
                </p>
              </div>

              <div className="pt-6 border-t border-[#29251F]/10">
                <span className="text-[11px] uppercase tracking-wider text-[#68694C] font-semibold block mb-3">
                  Key Focus:
                </span>
                <ul className="space-y-2">
                  {step.focusPoints.map((point, i) => (
                    <li key={i} className="text-xs text-[#29251F]/80 flex items-start gap-2">
                      <span className="text-[#B59661] mt-0.5">•</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
