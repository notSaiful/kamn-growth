import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { KhatamStar } from './SazoArch';
import { EASE_LUXURY } from '../lib/motionTokens';

export default function GoldenThread({ className = "" }) {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 75%", "end 30%"]
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 20,
    restDelta: 0.001
  });

  const stages = [
    {
      label: "BUSINESS",
      num: "01",
      arabic: "التجارة",
      title: "Commercial Rigor",
      desc: "Sound economics, competitive margins, and disciplined execution."
    },
    {
      label: "JOBS",
      num: "02",
      arabic: "العمل",
      title: "Dignified Work",
      desc: "Sustainable employment that allows families to live with honor."
    },
    {
      label: "WEALTH",
      num: "03",
      arabic: "المال",
      title: "Productive Surplus",
      desc: "Capital retained and deployed into productive capacity, not idle luxury."
    },
    {
      label: "CAPACITY",
      num: "04",
      arabic: "القوة",
      title: "Institutional Power",
      desc: "The strength to withstand market shocks and fund strategic institutions."
    },
    {
      label: "IMPACT",
      num: "05",
      arabic: "الأثر",
      title: "Carrying Others",
      desc: "Endowing education, supporting causes, and lifting the Ummah."
    }
  ];

  return (
    <div ref={containerRef} className={`relative py-12 ${className}`}>
      
      {/* Desktop Horizontal Golden Thread Line */}
      <div className="hidden lg:block relative mb-16">
        <svg 
          className="w-full h-12 overflow-visible" 
          viewBox="0 0 1000 48" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Base Faint Parchment Track */}
          <line
            x1="50"
            y1="24"
            x2="950"
            y2="24"
            stroke="#29251F"
            strokeOpacity="0.12"
            strokeWidth="1.5"
            strokeDasharray="4 6"
          />

          {/* Animated Golden Thread */}
          <motion.path
            d="M 50 24 L 950 24"
            stroke="#B59661"
            strokeWidth="2.5"
            strokeLinecap="round"
            style={{ pathLength: smoothProgress }}
          />
        </svg>

        {/* 5 Milestone Nodes along the Desktop Line */}
        <div className="absolute inset-0 flex justify-between px-[5%] items-center pointer-events-none">
          {stages.map((st, i) => {
            const threshold = i / (stages.length - 1);
            return (
              <NodeIndicator 
                key={st.label} 
                stage={st} 
                index={i} 
                progress={smoothProgress} 
                threshold={threshold} 
              />
            );
          })}
        </div>
      </div>

      {/* Cards Grid: Desktop 5 Columns / Mobile Stack */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-5 relative z-10">
        {stages.map((st, idx) => (
          <motion.div
            key={st.label}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ delay: idx * 0.1, duration: 0.7, ease: EASE_LUXURY }}
            className="group p-6 bg-[#FAF6EE] border border-[#29251F]/10 rounded-sm hover:border-[#B59661] hover:shadow-md transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-semibold px-2 py-0.5 rounded-xs bg-[#29251F] text-[#FAF6EE]">
                  {st.num}
                </span>
                <span className="text-xs text-[#B59661] font-medium font-arabic">
                  {st.arabic}
                </span>
              </div>

              <h4 className="text-lg font-semibold text-[#29251F] tracking-wide mb-1 group-hover:text-[#B59661] transition-colors">
                {st.label}
              </h4>

              <p className="text-xs uppercase tracking-wider text-[#68694C] font-semibold mb-3">
                {st.title}
              </p>

              <p className="text-xs text-[#6C6255] font-normal leading-relaxed">
                {st.desc}
              </p>
            </div>

            <div className="pt-4 mt-4 border-t border-[#29251F]/10 flex items-center justify-between">
              <span className="text-[10px] uppercase tracking-widest text-[#6C6255]">Phase {idx + 1}</span>
              <KhatamStar className="w-3 h-3 text-[#B59661] opacity-70 group-hover:opacity-100 transition-opacity" />
            </div>
          </motion.div>
        ))}
      </div>

    </div>
  );
}

function NodeIndicator({ stage, index, progress, threshold }) {
  const nodeScale = useTransform(
    progress,
    [Math.max(0, threshold - 0.05), threshold, Math.min(1, threshold + 0.05)],
    [0.85, 1.25, 1]
  );

  return (
    <motion.div 
      style={{ scale: nodeScale }}
      className="w-10 h-10 rounded-full bg-[#FAF6EE] border border-[#B59661] flex items-center justify-center shadow-xs"
    >
      <KhatamStar className="w-4 h-4 text-[#B59661]" />
    </motion.div>
  );
}
