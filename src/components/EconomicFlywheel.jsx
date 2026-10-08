import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { KhatamStar } from './SazoArch';
import { EASE_LUXURY } from '../lib/motionTokens';
import { RotateCw, ArrowRight, CheckCircle2 } from 'lucide-react';

export default function EconomicFlywheel() {
  const [activeStage, setActiveStage] = useState(0);

  const stages = [
    {
      num: "01",
      title: "BUSINESS GROWS",
      arabic: "نماء التجارة",
      subtitle: "The Catalyst",
      desc: "Commercial rigor and managed operations expand enterprise margins and operating surplus.",
      impact: "Creates the foundational capital required to underwrite expansion and hire."
    },
    {
      num: "02",
      title: "A JOB IS CREATED",
      arabic: "خلق الوظيفة",
      subtitle: "Productive Livelihood",
      desc: "A real, dignified role is funded with fair compensation, clear metrics, and mentorship.",
      impact: "Transitions another individual into the formal productive economy."
    },
    {
      num: "03",
      title: "A FAMILY EARNS",
      arabic: "كسب الأسرة",
      subtitle: "Household Self-Reliance",
      desc: "Regular wages bring security, remove acute financial anxiety, and allow future planning.",
      impact: "Children are educated, debts are retired, and emergency reserves are formed."
    },
    {
      num: "04",
      title: "A WORKER BUILDS SKILL",
      arabic: "اكتساب المهارة",
      subtitle: "Human Capital Compounding",
      desc: "Through continuous high-standard production, the employee masters craft and management.",
      impact: "Knowledge moves from theory into ingrained muscle memory and operational capability."
    },
    {
      num: "05",
      title: "A BUSINESS IS BORN",
      arabic: "ولادة مشروع",
      subtitle: "Secondary Enterprise",
      desc: "Equipped with savings and operational know-how, new independent enterprises are launched.",
      impact: "The cycle of dependency is broken through organic local enterprise creation."
    },
    {
      num: "06",
      title: "MORE PEOPLE ARE EMPLOYED",
      arabic: "مضاعفة التوظيف",
      subtitle: "Network Multiplication",
      desc: "The spinout venture hires its own team, expanding the economic safety net outward.",
      impact: "Economic resilience spreads across communities without donor fatigue."
    },
    {
      num: "07",
      title: "WEALTH CREATES CAPACITY",
      arabic: "القدرة من المال",
      subtitle: "Institutional Surplus",
      desc: "Retained profits coalesce into lasting institutional capital, endowments, and trust funds.",
      impact: "Capital can now take decade-long bets on strategic infrastructure and education."
    },
    {
      num: "08",
      title: "CAPACITY HELPS OTHERS",
      arabic: "حمل الآخرين",
      subtitle: "Fulfilling the Amanah",
      desc: "The surplus endows hospitals, disaster relief, scholarship funds, and civic institutions across the Ummah.",
      impact: "The ultimate objective: lifting the collective burden through permanent strength."
    }
  ];

  const handleNext = () => {
    setActiveStage((prev) => (prev + 1) % stages.length);
  };

  return (
    <div className="relative my-12 bg-[#FAF6EE] border border-[#29251F]/15 rounded-sm p-6 sm:p-12 lg:p-16 overflow-hidden shadow-xs">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-[#29251F]/10 pb-6 mb-12 gap-4">
        <div>
          <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#68694C] block mb-2">
            The Chain Reaction of Production
          </span>
          <h3 className="text-2xl sm:text-3xl font-semibold text-[#29251F] uppercase tracking-tight">
            THE 8-STAGE ECONOMIC FLYWHEEL
          </h3>
        </div>

        <button
          onClick={handleNext}
          className="inline-flex items-center gap-2 px-4 py-2 bg-[#F3EADB] border border-[#29251F]/15 rounded-xs text-xs uppercase tracking-wider font-semibold text-[#29251F] hover:bg-[#29251F] hover:text-[#FAF6EE] transition-all cursor-pointer w-fit"
        >
          <span>Cycle to Next</span>
          <RotateCw className="w-3.5 h-3.5" />
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left: Interactive Radial Octagon Stage Dial */}
        <div className="lg:col-span-5 flex justify-center">
          <div className="relative w-72 h-72 sm:w-84 sm:h-84 flex items-center justify-center select-none">
            
            {/* Background Octagonal Ring */}
            <div className="absolute inset-2 rounded-full border border-[#29251F]/15" />
            <div className="absolute inset-8 rounded-full border border-[#B59661]/30" />

            {/* Rotating Pointer Ring */}
            <motion.div
              className="absolute inset-0"
              animate={{ rotate: activeStage * 45 }}
              transition={{ duration: 0.8, ease: EASE_LUXURY }}
            >
              <div className="w-full h-full flex flex-col items-center justify-start pt-1">
                <div className="w-3 h-3 rotate-45 bg-[#B59661] shadow-xs" />
              </div>
            </motion.div>

            {/* 8 Octagonal Stage Buttons around the Circle */}
            {stages.map((st, idx) => {
              const angle = (idx * 45 - 90) * (Math.PI / 180);
              const radius = 125; // radius in px
              const x = Math.cos(angle) * radius;
              const y = Math.sin(angle) * radius;

              return (
                <button
                  key={st.num}
                  onClick={() => setActiveStage(idx)}
                  style={{
                    transform: `translate(${x}px, ${y}px)`
                  }}
                  className={`absolute w-8 h-8 rounded-full flex items-center justify-center text-xs font-semibold transition-all duration-300 z-10 cursor-pointer ${
                    activeStage === idx
                      ? 'bg-[#29251F] text-[#FAF6EE] scale-125 shadow-md ring-2 ring-[#B59661]'
                      : 'bg-[#FAF6EE] text-[#6C6255] border border-[#29251F]/20 hover:scale-110'
                  }`}
                  title={st.title}
                >
                  {st.num}
                </button>
              );
            })}

            {/* Center Core Emblem */}
            <div className="relative z-20 w-28 h-28 rounded-full bg-[#FAF6EE] border border-[#29251F]/20 shadow-md flex flex-col items-center justify-center text-center p-2">
              <KhatamStar className="w-5 h-5 text-[#B59661] mb-1" />
              <span className="text-xs uppercase tracking-widest text-[#68694C] font-semibold">
                Flywheel
              </span>
              <span className="text-[10px] text-[#6C6255] font-medium">Stage {activeStage + 1} of 8</span>
            </div>

          </div>
        </div>

        {/* Right: Detailed Stage Information Panel */}
        <div className="lg:col-span-7 space-y-6">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeStage}
              initial={{ opacity: 0, x: 16 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -16 }}
              transition={{ duration: 0.5, ease: EASE_LUXURY }}
              className="space-y-6"
            >
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-3xl sm:text-4xl font-semibold text-[#B59661]">
                    {stages[activeStage].num}
                  </span>
                  <div className="h-4 w-[1px] bg-[#29251F]/20" />
                  <span className="text-xs uppercase tracking-[0.22em] text-[#68694C] font-semibold">
                    {stages[activeStage].subtitle}
                  </span>
                  <span className="text-sm font-arabic text-[#6C6255] ml-auto">
                    {stages[activeStage].arabic}
                  </span>
                </div>

                <h4 className="text-2xl sm:text-4xl font-semibold text-[#29251F] uppercase leading-tight">
                  {stages[activeStage].title}
                </h4>
              </div>

              <div className="p-6 bg-[#F3EADB] border border-[#29251F]/10 rounded-xs space-y-3">
                <p className="text-base sm:text-lg text-[#29251F] font-medium leading-relaxed">
                  {stages[activeStage].desc}
                </p>
                <div className="pt-3 border-t border-[#29251F]/10 flex items-start gap-2.5 text-xs text-[#6C6255]">
                  <CheckCircle2 className="w-4 h-4 text-[#68694C] shrink-0 mt-0.5" />
                  <span><strong className="text-[#29251F]">Downstream Consequence:</strong> {stages[activeStage].impact}</span>
                </div>
              </div>

              {/* Step Navigation Pill Indicator */}
              <div className="flex items-center gap-2 pt-2">
                {stages.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveStage(i)}
                    className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                      activeStage === i ? 'w-8 bg-[#B59661]' : 'w-2 bg-[#29251F]/20 hover:bg-[#29251F]/40'
                    }`}
                    aria-label={`Jump to stage ${i + 1}`}
                  />
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

      </div>

    </div>
  );
}
