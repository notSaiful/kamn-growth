import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { KhatamStar } from './SazoArch';
import { EASE_LUXURY } from '../lib/motionTokens';
import { Compass, CheckCircle2, ArrowRight } from 'lucide-react';

export default function AstrolabeDial() {
  const [activeStage, setActiveStage] = useState(0);

  const stages = [
    {
      num: "01",
      name: "LISTEN",
      arabic: "الاستماع",
      coordinate: "0° ALIGNMENT",
      tagline: "Find the weight.",
      detail: "We audit where executive attention leaks: redundant follow-ups, manual prospect research, fragmented procurement, or stalled deals. We isolate what should never consume leadership bandwidth.",
      deliverable: "Operational Diagnostic & Attention Drag Audit",
      milestones: ["Executive Attention Map", "Supplier Margin Audit", "Pipeline Leak Identification"]
    },
    {
      num: "02",
      name: "BUILD",
      arabic: "البناء",
      coordinate: "120° ARCHITECTURE",
      tagline: "Design the system.",
      detail: "We configure the outbound intelligence architecture, vendor negotiation protocols, and back-office pipelines tailored to your exact margins and standard of quality.",
      deliverable: "Engine Playbook & Standard Operating Protocols",
      milestones: ["Target Account Lists", "Master Terms Framework", "Supervised Automation Rules"]
    },
    {
      num: "03",
      name: "CARRY",
      arabic: "الحمل",
      coordinate: "240° STEWARDSHIP",
      tagline: "Run it with you.",
      detail: "Experienced consultants operate the engine daily under human stewardship. We manage the outreach, vendor terms, and operational momentum so you can focus strictly on product leadership.",
      deliverable: "Ongoing Retained Management & Weekly Executive Brief",
      milestones: ["Daily Pipeline Execution", "Direct Vendor Renegotiations", "Weekly Binary Decision Memo"]
    }
  ];

  const rotationDegrees = [0, 120, 240];

  return (
    <div className="my-16 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
      
      {/* Left: Interactive Astrolabe Compass Graphic */}
      <div className="lg:col-span-5 flex flex-col items-center justify-center">
        <div className="relative w-72 h-72 sm:w-88 sm:h-88 flex items-center justify-center select-none">
          
          {/* Outer Stationary Ring with Calibrations */}
          <div className="absolute inset-0 rounded-full border border-[#29251F]/15 pointer-events-none" />
          
          {/* Faint Outer Degree Marks */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-30" viewBox="0 0 300 300">
            {Array.from({ length: 36 }).map((_, i) => (
              <line
                key={i}
                x1="150"
                y1="6"
                x2="150"
                y2={i % 3 === 0 ? "18" : "12"}
                stroke="#29251F"
                strokeWidth={i % 3 === 0 ? "1.5" : "0.75"}
                transform={`rotate(${i * 10} 150 150)`}
              />
            ))}
          </svg>

          {/* Rotating Astrolabe Core Geometry */}
          <motion.div
            className="absolute inset-4 rounded-full border border-[#B59661]/40 flex items-center justify-center"
            animate={{ rotate: rotationDegrees[activeStage] }}
            transition={{ duration: 0.9, ease: EASE_LUXURY }}
          >
            {/* Geometric Triangular & Circular Alignment Lines */}
            <svg className="w-full h-full p-4" viewBox="0 0 200 200">
              <polygon points="100,18 172,156 28,156" fill="none" stroke="#B59661" strokeWidth="1" strokeDasharray="3,3" />
              <circle cx="100" cy="100" r="54" fill="none" stroke="#29251F" strokeWidth="0.75" />
              <line x1="100" y1="18" x2="100" y2="182" stroke="#B59661" strokeWidth="1.2" />
              <circle cx="100" cy="18" r="5" fill="#B59661" />
              <circle cx="172" cy="156" r="3.5" fill="#68694C" />
              <circle cx="28" cy="156" r="3.5" fill="#68694C" />
            </svg>
          </motion.div>

          {/* 3 Interactive Clickable Stage Nodes around the Astrolabe perimeter */}
          {stages.map((st, i) => {
            const angles = [270, 30, 150]; // Node positions: top, bottom-right, bottom-left
            const angleRad = (angles[i] * Math.PI) / 180;
            const radius = 135; // px from center
            const x = Math.cos(angleRad) * radius;
            const y = Math.sin(angleRad) * radius;

            return (
              <button
                key={st.name}
                onClick={() => setActiveStage(i)}
                style={{
                  transform: `translate(${x}px, ${y}px)`
                }}
                className={`absolute w-8 h-8 rounded-full flex items-center justify-center text-[10px] font-semibold transition-all duration-300 z-20 cursor-pointer shadow-xs ${
                  activeStage === i
                    ? 'bg-[#29251F] text-[#FAF6EE] scale-110 ring-2 ring-[#B59661]'
                    : 'bg-[#FAF6EE] text-[#6C6255] border border-[#29251F]/20 hover:scale-105'
                }`}
                title={`Stage ${st.num}: ${st.name}`}
              >
                {st.num}
              </button>
            );
          })}

          {/* Center Indicator Emblem */}
          <div className="relative z-10 w-24 h-24 rounded-full bg-[#FAF6EE] border border-[#29251F]/20 shadow-md flex flex-col items-center justify-center">
            <span className="text-2xl font-semibold text-[#29251F]">
              {stages[activeStage].num}
            </span>
            <span className="text-[9px] tracking-[0.25em] font-semibold text-[#B59661] uppercase mt-0.5">
              Phase
            </span>
          </div>

        </div>

        {/* Astrolabe Coordinate Readout */}
        <div className="mt-4 text-center">
          <span className="text-[11px] uppercase tracking-widest text-[#68694C] font-semibold">
            {stages[activeStage].coordinate}
          </span>
        </div>
      </div>

      {/* Right: Stage Information & Restrained Selection */}
      <div className="lg:col-span-7 space-y-6">
        
        {/* Stage Buttons */}
        <div className="flex items-center gap-2 sm:gap-3 border-b border-[#29251F]/15 pb-4">
          {stages.map((stage, idx) => (
            <button
              key={stage.name}
              onClick={() => setActiveStage(idx)}
              className={`px-4 sm:px-6 py-2.5 rounded-xs text-xs tracking-[0.22em] uppercase font-medium transition-all duration-300 cursor-pointer ${
                activeStage === idx
                  ? 'bg-[#29251F] text-[#FAF6EE] shadow-xs'
                  : 'bg-[#E8D7BC]/40 text-[#6C6255] hover:text-[#29251F] hover:bg-[#E8D7BC]/70'
              }`}
            >
              <span>{stage.num} {stage.name}</span>
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeStage}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.5, ease: EASE_LUXURY }}
            className="space-y-5"
          >
            <div>
              <div className="flex items-center gap-3 mb-1">
                <span className="text-3xl sm:text-4xl text-[#29251F] font-semibold block leading-tight">
                  {stages[activeStage].name}
                </span>
                <span className="text-sm font-arabic text-[#B59661]">
                  {stages[activeStage].arabic}
                </span>
              </div>
              <p className="text-xl text-[#B59661] font-medium">
                {stages[activeStage].tagline}
              </p>
            </div>

            <p className="text-base sm:text-lg text-[#6C6255] font-normal leading-relaxed max-w-xl">
              {stages[activeStage].detail}
            </p>

            {/* Milestones Delivered */}
            <div className="pt-2 space-y-2">
              <span className="text-xs uppercase tracking-wider text-[#68694C] font-semibold block">
                Deliverable Focus:
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                {stages[activeStage].milestones.map((ms) => (
                  <div key={ms} className="p-2.5 bg-[#FAF6EE] border border-[#29251F]/10 rounded-xs flex items-center gap-2 text-xs text-[#29251F]">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#68694C] shrink-0" />
                    <span className="font-medium">{ms}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-3 bg-[#E8D7BC]/40 rounded-xs border border-[#29251F]/10 text-xs text-[#29251F]/90 flex items-center justify-between">
              <span className="font-medium">Primary Output:</span>
              <span className="font-semibold text-[#68694C]">{stages[activeStage].deliverable}</span>
            </div>
          </motion.div>
        </AnimatePresence>

        <div className="pt-2 flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[#68694C] font-medium">
          <KhatamStar className="w-3.5 h-3.5 text-[#B59661]" />
          <span>Continuous Stewardship Circuit</span>
        </div>
      </div>

    </div>
  );
}
