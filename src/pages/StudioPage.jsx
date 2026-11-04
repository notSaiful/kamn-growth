import React, { useState, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Mic,
  Sparkles,
  ExternalLink,
  ArrowRight,
  Layers,
  Volume2,
  CheckCircle2,
  Shield,
  Zap,
  Radio,
  Sliders,
  X
} from 'lucide-react';
import SazoArchSvgDef, { KhatamStar, MashrabiyaPattern } from '../components/SazoArch';
import { EASE_LUXURY } from '../lib/motionTokens';

export default function StudioPage() {
  const [searchParams] = useSearchParams();
  const autoRedirectParam = searchParams.get('redirect') === 'true' || searchParams.get('direct') === '1' || searchParams.get('launch') === '1';

  // Resolved Studio Application URL
  const studioBaseUrl = import.meta.env.VITE_KAMN_STUDIO_URL || (
    typeof window !== 'undefined' && (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1')
      ? 'http://localhost:3001'
      : 'https://kamn-studio.vercel.app'
  );

  const studioTemplatesUrl = `${studioBaseUrl}/templates`;

  // Auto-redirect timer state
  const [countdown, setCountdown] = useState(autoRedirectParam ? 3 : null);
  const [redirectCancelled, setRedirectCancelled] = useState(false);

  useEffect(() => {
    if (autoRedirectParam && !redirectCancelled && countdown !== null) {
      if (countdown > 0) {
        const timer = setTimeout(() => setCountdown(prev => prev - 1), 1000);
        return () => clearTimeout(timer);
      } else {
        window.location.href = studioBaseUrl;
      }
    }
  }, [countdown, autoRedirectParam, redirectCancelled, studioBaseUrl]);

  return (
    <div className="relative bg-transparent overflow-x-hidden pt-28 pb-24 sm:pb-32">
      <SazoArchSvgDef />
      <MashrabiyaPattern className="opacity-[0.02]" />

      <div className="editorial-container relative z-10 space-y-16 sm:space-y-24">
        
        {/* Auto-Redirect Notification Banner if active */}
        {countdown !== null && !redirectCancelled && (
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            className="p-4 bg-[#29251F] text-[#FAF6EE] rounded-sm border border-[#B59661] shadow-xl flex items-center justify-between gap-4"
          >
            <div className="flex items-center gap-3">
              <Radio className="w-4 h-4 text-[#B59661] animate-pulse" />
              <span className="text-xs sm:text-sm font-medium">
                Auto-redirecting to <strong>KAMN Studio</strong> in {countdown}s...
              </span>
            </div>
            <div className="flex items-center gap-2">
              <a
                href={studioBaseUrl}
                className="px-3 py-1 bg-[#B59661] text-[#29251F] text-xs font-semibold uppercase tracking-wider rounded-xs hover:bg-[#C4A875] transition-colors"
              >
                Redirect Now &rarr;
              </a>
              <button
                onClick={() => setRedirectCancelled(true)}
                className="p-1 hover:bg-white/10 rounded-xs text-[#FAF6EE]/70 hover:text-[#FAF6EE] text-xs"
                title="Cancel auto-redirect"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        )}

        {/* HERO HEADER */}
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FAF6EE] border border-[#B59661]/40 shadow-xs"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#B59661]" />
            <span className="text-[11px] uppercase tracking-[0.25em] font-bold text-[#68694C]">
              Voice-First AI Website Designer
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6, ease: EASE_LUXURY }}
            className="text-4xl sm:text-6xl md:text-7xl font-semibold tracking-tight text-[#29251F] leading-[1.05]"
          >
            Website Design,<br />
            <span className="text-[#68694C]">Transformed Through Voice.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-base sm:text-xl text-[#6C6255] max-w-2xl mx-auto leading-relaxed"
          >
            No complex dashboards. No robotic questionnaires. Simply talk naturally with your AI Creative Director to formulate your brand atmosphere, conversion goals, and architectural website brief.
          </motion.p>

          {/* Primary Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="pt-6 flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <a
              href={studioBaseUrl}
              className="w-full sm:w-auto px-9 sm:px-12 py-4 sm:py-5 bg-[#29251F] hover:bg-[#1E1B17] text-[#FAF6EE] font-semibold text-xs sm:text-sm uppercase tracking-[0.2em] rounded-sm transition-all duration-300 shadow-xl hover:shadow-2xl flex items-center justify-center gap-3 group cursor-pointer"
            >
              <Mic className="w-4 h-4 text-[#B59661] group-hover:scale-110 transition-transform" />
              <span>Launch KAMN Studio (Voice Call)</span>
              <ExternalLink className="w-4 h-4 text-[#B59661] group-hover:translate-x-0.5 transition-transform" />
            </a>

            <a
              href={studioTemplatesUrl}
              className="w-full sm:w-auto px-7 sm:px-9 py-4 sm:py-5 bg-[#FAF6EE] hover:bg-[#FFFFFF] text-[#29251F] border border-[#29251F]/15 font-semibold text-xs sm:text-sm uppercase tracking-[0.2em] rounded-sm transition-all duration-300 shadow-xs hover:border-[#B59661] flex items-center justify-center gap-2.5 cursor-pointer"
            >
              <Layers className="w-4 h-4 text-[#68694C]" />
              <span>Explore 120 Framer Templates</span>
            </a>
          </motion.div>

          <div className="pt-2 flex items-center justify-center gap-2 text-xs text-[#6C6255]">
            <CheckCircle2 className="w-3.5 h-3.5 text-[#68694C]" />
            <span>Runs directly in your browser &bull; Real-time speech &bull; Zero client software setup</span>
          </div>
        </div>

        {/* VISUAL STUDIO PORTAL CARD MOCKUP */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: EASE_LUXURY }}
          className="relative max-w-5xl mx-auto rounded-md bg-[#FAF6EE] border border-[#29251F]/20 shadow-2xl p-6 sm:p-12 overflow-hidden"
        >
          {/* Subtle Top Bar */}
          <div className="flex items-center justify-between pb-6 border-b border-[#29251F]/10 text-xs">
            <div className="flex items-center gap-2.5">
              <img 
                src="/assets/kamn-logo-squircle.png" 
                alt="KAMN Studio" 
                className="w-7 h-7 rounded-xs object-contain shadow-xs" 
              />
              <span className="font-semibold text-[#29251F] tracking-wider uppercase">
                KAMN STUDIO &bull; VOICE CALL INTERFACE
              </span>
            </div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#EFE7D8] text-[11px] font-medium text-[#29251F]">
              <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse" />
              <span>WebRTC Audio Engine Active</span>
            </div>
          </div>

          {/* Animated Waveform Visualization Preview */}
          <div className="py-12 sm:py-16 flex flex-col items-center justify-center text-center space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F3EADB] border border-[#29251F]/15 text-xs tracking-wider uppercase font-medium">
              <span className="w-2 h-2 rounded-full bg-[#B59661] animate-ping" />
              <span className="text-[#29251F] font-semibold">AI Designer is speaking</span>
            </div>

            {/* Simulated Animated Audio Waveform */}
            <div className="flex items-center justify-center gap-1 sm:gap-2 h-28 w-full max-w-md px-4">
              {[18, 35, 60, 95, 110, 80, 50, 75, 105, 90, 65, 40, 85, 115, 70, 45, 90, 100, 60, 30, 70, 85, 40, 20].map((h, i) => (
                <div
                  key={i}
                  className="w-1.5 sm:w-2 rounded-full bg-[#B59661] transition-all duration-300"
                  style={{
                    height: `${h}%`,
                    opacity: 0.45 + (i % 3) * 0.25,
                  }}
                />
              ))}
            </div>

            <p className="text-sm font-medium text-[#29251F] max-w-lg italic">
              &ldquo;Hi, welcome to KAMN Studio. I'm your AI website designer. Tell me a little about your business.&rdquo;
            </p>

            <a
              href={studioBaseUrl}
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#29251F] text-[#FAF6EE] text-xs font-semibold uppercase tracking-wider rounded-xs hover:bg-[#363428] transition-all shadow-md cursor-pointer"
            >
              <span>Connect Microphone & Start Call</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#B59661]" />
            </a>
          </div>

          {/* Bottom Card Perks */}
          <div className="pt-6 border-t border-[#29251F]/10 grid grid-cols-1 sm:grid-cols-3 gap-4 text-center text-xs text-[#6C6255]">
            <div>★ 120 Curated Framer Templates</div>
            <div>★ Real-Time Brief Generation</div>
            <div>★ Natural Turn-Taking & Interruption</div>
          </div>
        </motion.div>

        {/* 4 CORE VALUE PILLARS */}
        <div className="space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#B59661]">
              How Studio Works
            </span>
            <h2 className="text-3xl sm:text-5xl font-semibold text-[#29251F] tracking-tight">
              A New Creative Standard.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            
            <div className="p-8 bg-[#FAF6EE]/80 border border-[#29251F]/15 rounded-sm space-y-3">
              <div className="w-10 h-10 rounded-xs bg-[#68694C]/15 flex items-center justify-center text-[#68694C]">
                <Volume2 className="w-5 h-5" />
              </div>
              <h3 className="text-base font-semibold text-[#29251F]">
                01 &bull; Natural Voice Dialogue
              </h3>
              <p className="text-xs sm:text-sm text-[#6C6255] leading-relaxed">
                Describe your vision as you speak. The agent listens, suggests aesthetics, and advises on conversion structure.
              </p>
            </div>

            <div className="p-8 bg-[#FAF6EE]/80 border border-[#29251F]/15 rounded-sm space-y-3">
              <div className="w-10 h-10 rounded-xs bg-[#B59661]/15 flex items-center justify-center text-[#8E703B]">
                <Sliders className="w-5 h-5" />
              </div>
              <h3 className="text-base font-semibold text-[#29251F]">
                02 &bull; Live Structured Brief
              </h3>
              <p className="text-xs sm:text-sm text-[#6C6255] leading-relaxed">
                Watch your architectural brief formulate live. Confirmed details and AI suggestions update in real time.
              </p>
            </div>

            <div className="p-8 bg-[#FAF6EE]/80 border border-[#29251F]/15 rounded-sm space-y-3">
              <div className="w-10 h-10 rounded-xs bg-[#29251F]/10 flex items-center justify-center text-[#29251F]">
                <Layers className="w-5 h-5" />
              </div>
              <h3 className="text-base font-semibold text-[#29251F]">
                03 &bull; 120 Framer Templates
              </h3>
              <p className="text-xs sm:text-sm text-[#6C6255] leading-relaxed">
                The top 3 best templates for 40 subcategories across 10 industries, pre-mapped for AI customization.
              </p>
            </div>

            <div className="p-8 bg-[#FAF6EE]/80 border border-[#29251F]/15 rounded-sm space-y-3">
              <div className="w-10 h-10 rounded-xs bg-[#B59661]/15 flex items-center justify-center text-[#8E703B]">
                <Zap className="w-5 h-5" />
              </div>
              <h3 className="text-base font-semibold text-[#29251F]">
                04 &bull; Natural Interruption
              </h3>
              <p className="text-xs sm:text-sm text-[#6C6255] leading-relaxed">
                Interrupt mid-sentence. Just like talking with a human creative partner, the designer stops and listens.
              </p>
            </div>

          </div>
        </div>

        {/* BOTTOM INVITATION BANNER */}
        <div className="p-10 sm:p-14 bg-[#29251F] text-[#FAF6EE] rounded-sm border border-[#B59661]/30 text-center space-y-6">
          <div className="inline-flex items-center gap-2">
            <KhatamStar className="w-4 h-4 text-[#B59661]" />
            <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#B59661]">
              Ready to Design Your Website?
            </span>
          </div>

          <h3 className="text-3xl sm:text-5xl font-semibold tracking-tight text-[#FAF6EE] max-w-2xl mx-auto">
            Talk to Your AI Designer Now.
          </h3>

          <p className="text-xs sm:text-base text-[#FAF6EE]/80 max-w-xl mx-auto leading-relaxed">
            Directly connect your microphone. No account creation required to start formulating your website brief.
          </p>

          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={studioBaseUrl}
              className="w-full sm:w-auto px-10 py-4 bg-[#B59661] hover:bg-[#C4A875] text-[#29251F] font-semibold text-xs uppercase tracking-[0.2em] rounded-sm transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Enter KAMN Studio</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <Link
              to="/begin"
              className="w-full sm:w-auto px-8 py-4 bg-transparent hover:bg-white/5 border border-white/20 text-[#FAF6EE] font-semibold text-xs uppercase tracking-[0.2em] rounded-sm transition-all flex items-center justify-center gap-2"
            >
              <span>Book a Human Growth Review</span>
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
