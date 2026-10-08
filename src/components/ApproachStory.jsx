import React from 'react';
import { motion } from 'framer-motion';
import { Compass, PencilRuler, CheckCircle2 } from 'lucide-react';
import { KhatamStar } from './SazoArch';
import { EASE_LUXURY } from '../lib/motionTokens';

export default function ApproachStory() {
  const steps = [
    {
      num: "01",
      title: "UNDERSTAND",
      arabic: "إنصات",
      tagline: "Find the real problem.",
      desc: "Every business carries different challenges. We begin by understanding yours, identifying what matters, and finding where friction lives.",
      icon: Compass
    },
    {
      num: "02",
      title: "DESIGN",
      arabic: "بناء",
      tagline: "Create a practical way forward.",
      desc: "We engineer lean, resilient workflows, communications and sourcing channels tailored to your real market conditions.",
      icon: PencilRuler
    },
    {
      num: "03",
      title: "EXECUTE",
      arabic: "تحمل",
      tagline: "Turn decisions into action.",
      desc: "We step in on execution. We assist with day-to-day outreach, vendor coordination and back-office follow-through with quiet rigor.",
      icon: CheckCircle2
    }
  ];

  return (
    <div className="space-y-12">
      {/* 3 Step Clean Grid (Desktop 3 columns / Mobile 1 column) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
        {steps.map((st, idx) => {
          const Icon = st.icon;

          return (
            <motion.div
              key={st.num}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ delay: idx * 0.12, duration: 0.6, ease: EASE_LUXURY }}
              className="p-8 sm:p-10 rounded-sm bg-[#FAF6EE] border border-[#29251F]/15 flex flex-col justify-between hover:border-[#B59661] hover:shadow-xs transition-all duration-300 group"
            >
              <div>
                <div className="flex items-center justify-between pb-6 mb-6 border-b border-[#29251F]/10">
                  <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#68694C]">
                    Stage {st.num}
                  </span>
                  <span className="text-xs font-arabic text-[#6C6255]">
                    {st.arabic}
                  </span>
                </div>

                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-xs bg-[#29251F] text-[#FAF6EE] flex items-center justify-center group-hover:bg-[#363428] transition-colors">
                    <Icon className="w-4 h-4 text-[#B59661]" />
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-semibold text-[#29251F] tracking-tight">
                    {st.title}
                  </h3>
                </div>

                <p className="text-base font-semibold text-[#68694C] mb-4">
                  {st.tagline}
                </p>

                <p className="text-sm text-[#6C6255] font-normal leading-relaxed">
                  {st.desc}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-[#29251F]/10 flex items-center justify-between text-xs text-[#6C6255]">
                <span className="text-[11px] uppercase tracking-wider font-semibold text-[#29251F]">
                  Careful execution
                </span>
                <KhatamStar className="w-3.5 h-3.5 text-[#B59661] opacity-60 group-hover:opacity-100 transition-opacity" />
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
