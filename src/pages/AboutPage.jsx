import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Compass, ShieldCheck, HeartHandshake } from 'lucide-react';
import { motion } from 'framer-motion';
import { KhatamStar, MashrabiyaPattern, ArchDivider } from '../components/SazoArch';
import PageTransition from '../components/PageTransition';
import GoldenThread from '../components/GoldenThread';
import { EASE_LUXURY } from '../lib/motionTokens';

export default function AboutPage() {
  return (
    <PageTransition>
      <div className="pt-32 pb-24 min-h-screen bg-transparent text-[#29251F]">
        
        {/* ============================================================
            01 HERO: SIGNATURE STATEMENT
            BUILD WEALTH. BUILD CAPACITY. CARRY OTHERS.
            ============================================================ */}
        <section className="editorial-container pt-8 pb-16 sm:pb-24 border-b border-[#29251F]/10">
          <div className="max-w-4xl space-y-6 sm:space-y-8">
            <div className="flex items-center gap-2">
              <KhatamStar className="w-4 h-4 text-[#B59661]" />
              <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#68694C]">
                Why KAMN Exists
              </span>
            </div>

            <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-semibold tracking-tight text-[#29251F] leading-[1.04] uppercase">
              BUILD WEALTH.<br />
              <span className="text-[#68694C] font-semibold">BUILD CAPACITY.</span><br />
              <span className="text-[#B59661] font-semibold">CARRY OTHERS.</span>
            </h1>

            <div className="space-y-4 max-w-2xl text-lg sm:text-2xl text-[#29251F]/90 font-normal leading-relaxed pt-2">
              <p className="font-semibold text-[#29251F]">
                Businesses are the economic engine of communities.
              </p>
              <p className="text-[#6C6255]">
                When businesses flourish ethically, they create jobs, dignified livelihoods, and the financial surplus required to carry others.
              </p>
            </div>

            <div className="pt-2">
              <span className="text-xs text-[#6C6255] uppercase tracking-wider block">
                We serve businesses without distinction. The purpose behind what we build goes deeper.
              </span>
            </div>
          </div>
        </section>


        {/* ============================================================
            02 THE GOLDEN THREAD: COMPOUNDING CYCLE
            BUSINESS → JOBS → WEALTH → CAPACITY → IMPACT
            ============================================================ */}
        <section className="editorial-container py-20 sm:py-28 border-b border-[#29251F]/10 relative overflow-hidden">
          <MashrabiyaPattern className="opacity-[0.02]" />

          <div className="relative z-10 space-y-12">
            <div className="max-w-3xl">
              <span className="text-xs uppercase tracking-[0.3em] font-semibold text-[#68694C] block mb-3">
                The Long-Term Cycle
              </span>
              <h2 className="text-3xl sm:text-5xl md:text-6xl font-semibold text-[#29251F] uppercase leading-tight tracking-tight">
                WE WANT TO BUILD SOMETHING <br />
                <span className="text-[#68694C]">THAT KEEPS GIVING.</span>
              </h2>
            </div>

            {/* The Golden Thread Animation */}
            <div className="py-4">
              <GoldenThread />
            </div>
          </div>
        </section>


        {/* ============================================================
            03 THREE PILLARS: PURPOSE & VISION
            01 The Founding Conviction
            02 Why We Exist
            03 The Long-Term Vision
            ============================================================ */}
        <section className="editorial-container py-20 sm:py-28 border-b border-[#29251F]/10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            <div className="p-8 bg-[#FAF6EE] border border-[#29251F]/15 rounded-sm space-y-4">
              <span className="text-xs uppercase tracking-[0.2em] text-[#68694C] font-semibold block">
                01 · Conviction
              </span>
              <h3 className="text-xl font-semibold text-[#29251F]">
                The Founding Conviction
              </h3>
              <p className="text-sm text-[#6C6255] leading-relaxed">
                Businesses are the economic engine of communities. When businesses flourish ethically, they create jobs, dignified livelihoods, and the financial surplus required to carry others.
              </p>
            </div>

            <div className="p-8 bg-[#FAF6EE] border border-[#29251F]/15 rounded-sm space-y-4">
              <span className="text-xs uppercase tracking-[0.2em] text-[#68694C] font-semibold block">
                02 · Standard
              </span>
              <h3 className="text-xl font-semibold text-[#29251F]">
                Why We Exist
              </h3>
              <p className="text-sm text-[#6C6255] leading-relaxed">
                KAMN was founded to serve businesses with serious ambition and deep integrity. We believe Muslim-led and value-aligned enterprises should operate at the highest standards of commercial excellence.
              </p>
            </div>

            <div className="p-8 bg-[#FAF6EE] border border-[#29251F]/15 rounded-sm space-y-4">
              <span className="text-xs uppercase tracking-[0.2em] text-[#68694C] font-semibold block">
                03 · Horizon
              </span>
              <h3 className="text-xl font-semibold text-[#29251F]">
                The Long-Term Vision
              </h3>
              <p className="text-sm text-[#6C6255] leading-relaxed">
                Our vision extends beyond individual engagements. We aim to build an enduring institutional capacity that channels economic strength into alleviating the burdens facing the Muslim Ummah globally.
              </p>
            </div>
          </div>
        </section>


        {/* ============================================================
            04 CLOSING CTA
            ============================================================ */}
        <section className="editorial-container pt-16 sm:pt-20">
          <div className="p-8 sm:p-14 bg-[#EADDC9]/60 border border-[#29251F]/10 rounded-sm flex flex-col sm:flex-row items-start sm:items-center justify-between gap-8">
            <div className="space-y-2">
              <h3 className="text-2xl sm:text-3xl font-semibold text-[#29251F]">
                Build with us.
              </h3>
              <p className="text-sm text-[#6C6255]">
                Growth, sourcing and operations. Handled with care.
              </p>
            </div>
            <Link
              to="/begin"
              className="min-h-[50px] px-8 py-4 bg-[#29251F] text-[#FAF6EE] text-xs font-semibold tracking-[0.25em] uppercase rounded-sm hover:bg-[#363428] transition-colors inline-flex items-center gap-3 shrink-0 cursor-pointer shadow-md"
            >
              <span>Book a Growth Review</span>
              <ArrowRight className="w-4 h-4 text-[#B59661]" />
            </Link>
          </div>
        </section>

      </div>
    </PageTransition>
  );
}
