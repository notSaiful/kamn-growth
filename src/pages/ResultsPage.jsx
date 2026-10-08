import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Compass, ShieldCheck, HeartHandshake } from 'lucide-react';
import { motion } from 'framer-motion';
import { KhatamStar, ArchDivider, MashrabiyaPattern } from '../components/SazoArch';
import PageTransition from '../components/PageTransition';

export default function ResultsPage() {
  return (
    <PageTransition>
      <div className="pt-32 pb-24 min-h-screen bg-transparent text-[#29251F]">
        
        {/* ============================================================
            01 HERO: THE WORK BEGINS HERE.
            Exact copy specified in Directive 6:
            THE WORK BEGINS HERE.
            We're at the beginning.
            As we build, we'll share the work and the lessons worth sharing.
            CTA: HOW WE WORK
            ============================================================ */}
        <section className="editorial-container pt-8 pb-16 sm:pb-24 border-b border-[#29251F]/10">
          <div className="max-w-4xl space-y-6 sm:space-y-8">
            <div className="flex items-center gap-2">
              <KhatamStar className="w-4 h-4 text-[#B59661]" />
              <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#68694C]">
                Founding Stage · Perspective
              </span>
            </div>

            <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-semibold tracking-tight text-[#29251F] leading-[1.02] uppercase">
              THE WORK <br />
              <span className="text-[#68694C] font-semibold">BEGINS HERE.</span>
            </h1>

            <div className="space-y-4 max-w-2xl text-lg sm:text-2xl text-[#29251F]/90 font-normal leading-relaxed pt-2">
              <p className="font-semibold text-[#29251F]">
                We're at the beginning.
              </p>
              <p className="text-[#6C6255]">
                As we build, we'll share the work and the lessons worth sharing.
              </p>
            </div>

            <div className="pt-4">
              <Link
                to="/approach"
                className="inline-flex items-center gap-3 min-h-[48px] px-8 py-4 bg-[#29251F] text-[#FAF6EE] text-xs font-semibold tracking-[0.22em] uppercase rounded-sm hover:bg-[#363428] transition-colors shadow-xs group cursor-pointer"
              >
                <span>HOW WE WORK</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </section>


        {/* ============================================================
            02 OUR FOUNDING COMMITMENTS
            Diagnostic Rigor, Amanah in Execution, Honest Documentation
            ============================================================ */}
        <section className="editorial-container py-20 sm:py-28 border-b border-[#29251F]/10 relative overflow-hidden">
          <MashrabiyaPattern className="opacity-[0.02]" />

          <div className="relative z-10 space-y-12">
            <div className="max-w-2xl">
              <span className="text-xs uppercase tracking-[0.3em] font-semibold text-[#68694C] block mb-3">
                Founding Principles
              </span>
              <h2 className="text-3xl sm:text-4xl font-semibold text-[#29251F] uppercase leading-tight">
                OUR COMMITMENT TO TRUTH
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-8 bg-[#FAF6EE] border border-[#29251F]/15 rounded-sm space-y-4">
                <div className="w-8 h-8 rounded-xs bg-[#29251F] text-[#FAF6EE] flex items-center justify-center">
                  <Compass className="w-4 h-4 text-[#B59661]" />
                </div>
                <h3 className="text-xl font-semibold text-[#29251F]">
                  Diagnostic Rigor
                </h3>
                <p className="text-sm text-[#6C6255] leading-relaxed">
                  We look at operational reality before offering advice. We take the time to understand your margin structure, supplier dependencies and team capacity.
                </p>
              </div>

              <div className="p-8 bg-[#FAF6EE] border border-[#29251F]/15 rounded-sm space-y-4">
                <div className="w-8 h-8 rounded-xs bg-[#68694C] text-[#FAF6EE] flex items-center justify-center">
                  <ShieldCheck className="w-4 h-4 text-[#FAF6EE]" />
                </div>
                <h3 className="text-xl font-semibold text-[#29251F]">
                  Amanah in Execution
                </h3>
                <p className="text-sm text-[#6C6255] leading-relaxed">
                  Every engagement is treated as a sacred trust. We handle sensitive supplier pricing, commercial relationships and internal workflows with complete confidentiality.
                </p>
              </div>

              <div className="p-8 bg-[#FAF6EE] border border-[#29251F]/15 rounded-sm space-y-4">
                <div className="w-8 h-8 rounded-xs bg-[#B59661] text-[#FAF6EE] flex items-center justify-center">
                  <HeartHandshake className="w-4 h-4 text-[#29251F]" />
                </div>
                <h3 className="text-xl font-semibold text-[#29251F]">
                  Verified Sharing
                </h3>
                <p className="text-sm text-[#6C6255] leading-relaxed">
                  As our work matures, we will document real lessons learned and verified outcomes—never publishing without explicit client consent and documented evidence.
                </p>
              </div>
            </div>
          </div>
        </section>


        {/* ============================================================
            03 CLOSING CTA
            ============================================================ */}
        <section className="editorial-container pt-16 sm:pt-20">
          <div className="p-8 sm:p-14 bg-[#EADDC9]/60 border border-[#29251F]/10 rounded-sm flex flex-col sm:flex-row items-start sm:items-center justify-between gap-8">
            <div className="space-y-2">
              <h3 className="text-2xl sm:text-3xl font-semibold text-[#29251F]">
                Start with a conversation.
              </h3>
              <p className="text-sm text-[#6C6255]">
                Tell us where your business is today and what you are looking to build.
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
