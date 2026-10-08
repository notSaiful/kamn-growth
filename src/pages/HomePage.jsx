import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, ArrowUpRight, ArrowDown, Check, Shield } from 'lucide-react';
import SazoArchSvgDef, { KhatamStar, MashrabiyaPattern } from '../components/SazoArch';
import { EASE_LUXURY } from '../lib/motionTokens';

export default function HomePage() {
  const [heroMounted, setHeroMounted] = useState(false);
  const heroVideoRef = useRef(null);

  // Monitor scroll for Hero cinematic transition
  const { scrollY } = useScroll();
  const heroVideoScale = useTransform(scrollY, [0, 600], [1.02, 0.95]);
  const heroOpacity = useTransform(scrollY, [0, 450], [1, 0.25]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setHeroMounted(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  // Guarantee video is always continuously playing without pause or interruption
  useEffect(() => {
    const video = heroVideoRef.current;
    if (video) {
      video.play().catch(() => {});
      const keepPlaying = () => {
        video.play().catch(() => {});
      };
      video.addEventListener('pause', keepPlaying);
      video.addEventListener('ended', keepPlaying);
      return () => {
        video.removeEventListener('pause', keepPlaying);
        video.removeEventListener('ended', keepPlaying);
      };
    }
  }, []);

  const services = [
    {
      num: "01",
      title: "Growth",
      desc: "Find more opportunities.",
      sub: "Outbound research, qualified introductions, and pipeline development.",
      href: "/services/growth"
    },
    {
      num: "02",
      title: "Procurement",
      desc: "Source smarter.",
      sub: "Supplier comparison, contract negotiation, and purchasing diligence.",
      href: "/services/procurement"
    },
    {
      num: "03",
      title: "Operations",
      desc: "Work that runs smoothly.",
      sub: "Recurring coordination, operational follow-through, and calm execution.",
      href: "/services/operations"
    },
    {
      num: "04",
      title: "AI Systems",
      desc: "Less manual work.",
      sub: "Intelligent workflows operated internally by our team on your behalf.",
      href: "/services/ai-systems"
    }
  ];

  const steps = [
    { num: "01", label: "Your Goal", detail: "You set the commercial priorities and objectives." },
    { num: "02", label: "Our Team", detail: "We design the operating plan and workflows." },
    { num: "03", label: "Execution", detail: "We carry the research, outreach, and coordination." },
    { num: "04", label: "Progress", detail: "You receive decision briefs and verified outcomes." }
  ];

  return (
    <div className="relative bg-transparent overflow-x-hidden">
      <SazoArchSvgDef />

      {/* ============================================================
          SECTION 1 — CINEMATIC HERO
          Headline: "Grow your business. We handle the rest."
          Subheading: "Your outsourced team for growth, procurement and operations."
          CTA: "Book a Growth Review"
          ============================================================ */}
      <section className="relative w-full h-[100svh] min-h-[660px] flex items-center justify-center overflow-hidden bg-[#F3EADB]">
        
        {/* Cinematic Video Background */}
        <motion.div
          className="absolute inset-0 w-full h-full overflow-hidden"
          initial={{ clipPath: 'polygon(50% 0%, 50% 0%, 50% 100%, 50% 100%)', scale: 1.05 }}
          animate={{
            clipPath: heroMounted
              ? 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)'
              : 'polygon(50% 0%, 50% 0%, 50% 100%, 50% 100%)',
            scale: 1.02
          }}
          transition={{ duration: 1.2, ease: EASE_LUXURY }}
          style={{ scale: heroVideoScale }}
        >
          <video
            ref={heroVideoRef}
            autoPlay
            muted
            loop
            playsInline
            controls={false}
            disablePictureInPicture
            disableRemotePlayback
            tabIndex={-1}
            aria-hidden="true"
            poster="/assets/hero-poster.jpg"
            className="w-full h-full object-cover object-center filter brightness-[0.85] contrast-[1.04] pointer-events-none select-none"
          >
            <source src="/assets/hero-cinematic.mp4" type="video/mp4" />
            <img 
              src="/assets/hero-poster.jpg" 
              alt="Sandstone Architecture" 
              className="w-full h-full object-cover"
            />
          </video>

          {/* Warm Luxury Dark Gradient Overlay */}
          <div 
            className="absolute inset-0 pointer-events-none"
            style={{
              background: 'linear-gradient(180deg, rgba(41, 37, 31, 0.45) 0%, rgba(41, 37, 31, 0.22) 50%, rgba(41, 37, 31, 0.58) 100%)'
            }}
          />
        </motion.div>

        {/* Hero Editorial Content */}
        <motion.div 
          style={{ opacity: heroOpacity }}
          className="relative z-10 editorial-container w-full text-center flex flex-col items-center justify-center pt-24 pb-12"
        >
          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="inline-flex items-center gap-2 mb-6"
          >
            <KhatamStar className="w-3.5 h-3.5 text-[#B59661]" />
            <span className="text-[11px] sm:text-xs uppercase tracking-[0.28em] font-semibold text-[#FAF6EE]/90">
              KAMN — Managed Growth & Operations
            </span>
            <KhatamStar className="w-3.5 h-3.5 text-[#B59661]" />
          </motion.div>

          {/* Headline */}
          <div className="overflow-hidden">
            <motion.h1
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ delay: 0.45, duration: 0.9, ease: EASE_LUXURY }}
              className="text-4xl sm:text-6xl md:text-7xl lg:text-[5.25rem] text-[#FAF6EE] font-semibold leading-[1.05] tracking-tight"
            >
              Grow your business.
            </motion.h1>
          </div>
          <div className="overflow-hidden mt-1 sm:mt-2">
            <motion.h1
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ delay: 0.6, duration: 0.9, ease: EASE_LUXURY }}
              className="text-3xl sm:text-5xl md:text-6xl lg:text-[4.5rem] text-[#E8D7BC] font-semibold leading-[1.08] tracking-tight"
            >
              We handle the rest.
            </motion.h1>
          </div>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="mt-6 sm:mt-8 max-w-xl text-base sm:text-xl text-[#FAF6EE]/90 font-normal leading-relaxed px-4 sm:px-0"
          >
            Your outsourced team for growth, procurement and operations.
          </motion.p>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.95, duration: 0.8 }}
            className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto px-6 sm:px-0"
          >
            <Link
              to="/begin"
              className="w-full sm:w-auto min-h-[50px] px-9 sm:px-11 py-4 bg-[#FAF6EE] text-[#29251F] font-semibold text-xs tracking-[0.22em] uppercase rounded-sm hover:bg-[#E8D7BC] transition-all duration-300 shadow-xl flex items-center justify-center gap-3 group cursor-pointer"
            >
              <span>Book a Growth Review</span>
              <ArrowRight className="w-4 h-4 text-[#29251F] group-hover:translate-x-1 transition-transform" />
            </Link>

            <a
              href="#services"
              className="w-full sm:w-auto min-h-[50px] px-8 py-4 border border-[#FAF6EE]/40 text-[#FAF6EE] hover:bg-[#FAF6EE]/10 font-semibold text-xs tracking-[0.22em] uppercase rounded-sm transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>See Services</span>
              <ArrowDown className="w-3.5 h-3.5 text-[#B59661]" />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.15, duration: 0.8 }}
            className="mt-8 text-xs text-[#FAF6EE]/75 tracking-wider font-medium uppercase"
          >
            Monthly Partnership · Managed Execution · Human Oversight
          </motion.div>
        </motion.div>
      </section>


      {/* ============================================================
          SECTION 2 — SERVICES
          Headline: "The work. Handled."
          Four elegant service items:
          Growth — Find more opportunities.
          Procurement — Source smarter.
          Operations — Work that runs smoothly.
          AI Systems — Less manual work.
          ============================================================ */}
      <section id="services" className="py-24 sm:py-32 bg-transparent border-b border-[#29251F]/10 relative scroll-mt-20">
        <MashrabiyaPattern className="opacity-[0.02]" />

        <div className="editorial-container relative z-10 space-y-16">
          <div className="max-w-3xl space-y-3">
            <div className="inline-flex items-center gap-2">
              <KhatamStar className="w-3.5 h-3.5 text-[#B59661]" />
              <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#68694C]">
                Managed Capabilities
              </span>
            </div>

            <h2 className="text-4xl sm:text-6xl md:text-7xl text-[#29251F] font-semibold tracking-tight leading-[1.04]">
              The work. Handled.
            </h2>

            <p className="text-base sm:text-xl text-[#6C6255] font-normal leading-relaxed pt-1">
              Four managed disciplines carried by our team behind your business.
            </p>
          </div>

          {/* 4 Elegant Service Items */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {services.map((item, idx) => (
              <motion.div
                key={item.num}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-20px" }}
                transition={{ delay: idx * 0.08, duration: 0.5, ease: EASE_LUXURY }}
                className="group p-8 sm:p-10 bg-[#FAF6EE]/80 backdrop-blur-xs border border-[#29251F]/15 rounded-sm hover:border-[#B59661] hover:bg-[#FAF6EE]/95 transition-all duration-300 flex flex-col justify-between shadow-xs"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between pb-4 border-b border-[#29251F]/10">
                    <span className="text-xs uppercase tracking-[0.2em] font-semibold text-[#B59661]">
                      Discipline {item.num}
                    </span>
                    <span className="text-xs uppercase tracking-wider font-semibold text-[#68694C]">
                      Managed Service
                    </span>
                  </div>

                  <div>
                    <h3 className="text-2xl sm:text-3xl font-semibold text-[#29251F] group-hover:text-[#68694C] transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-base sm:text-lg text-[#29251F] font-medium mt-1">
                      {item.desc}
                    </p>
                  </div>

                  <p className="text-xs sm:text-sm text-[#6C6255] leading-relaxed">
                    {item.sub}
                  </p>
                </div>

                <div className="pt-8 mt-6 border-t border-[#29251F]/10 flex items-center justify-between">
                  <Link
                    to={item.href}
                    className="inline-flex items-center gap-2 text-xs uppercase font-semibold tracking-[0.2em] text-[#29251F] group-hover:text-[#B59661] transition-colors"
                  >
                    <span>View details</span>
                    <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </Link>
                  <span className="text-[11px] text-[#6C6255]">We execute for you</span>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="pt-2 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-t border-[#29251F]/10">
            <p className="text-xs text-[#6C6255]">
              No software for your team to learn. We receive your priorities and deliver completed work.
            </p>
            <Link
              to="/services"
              className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] font-semibold text-[#29251F] hover:text-[#B59661] transition-colors"
            >
              <span>Explore All Disciplines</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>


      {/* ============================================================
          SECTION 3 — HOW IT WORKS
          Headline: "Your vision. Our execution."
          Supporting text: "You tell us the goal. We build the plan, handle the work and keep you informed."
          Visual: Your Goal -> Our Team -> Execution -> Progress
          ============================================================ */}
      <section className="py-24 sm:py-32 bg-[#FAF6EE]/30 backdrop-blur-xs border-b border-[#29251F]/10 relative">
        <div className="editorial-container space-y-16">
          <div className="max-w-3xl space-y-3">
            <div className="inline-flex items-center gap-2">
              <KhatamStar className="w-3.5 h-3.5 text-[#B59661]" />
              <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#68694C]">
                Operating Flow
              </span>
            </div>

            <h2 className="text-4xl sm:text-6xl md:text-7xl text-[#29251F] font-semibold tracking-tight leading-[1.04]">
              Your vision. Our execution.
            </h2>

            <p className="text-base sm:text-xl text-[#6C6255] font-normal leading-relaxed pt-1">
              You tell us the goal. We build the plan, handle the work and keep you informed.
            </p>
          </div>

          {/* Minimal Flow Visual: Your Goal -> Our Team -> Execution -> Progress */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 relative">
            {steps.map((st, idx) => (
              <motion.div
                key={st.num}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-20px" }}
                transition={{ delay: idx * 0.1, duration: 0.5, ease: EASE_LUXURY }}
                className="p-8 bg-[#FAF6EE]/85 backdrop-blur-xs border border-[#29251F]/15 rounded-sm flex flex-col justify-between space-y-6 hover:border-[#B59661] hover:bg-[#FAF6EE]/95 transition-all duration-300 shadow-xs"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between pb-3 border-b border-[#29251F]/10">
                    <span className="text-2xl font-semibold text-[#B59661]">{st.num}</span>
                    <span className="text-[11px] uppercase tracking-wider font-semibold text-[#68694C]">
                      Step {st.num}
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-semibold text-[#29251F]">
                    {st.label}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#6C6255] leading-relaxed">
                    {st.detail}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#29251F]/10 text-[11px] uppercase tracking-wider text-[#6C6255] flex items-center justify-between">
                  <span>Phase {st.num}</span>
                  {idx < 3 && <ArrowRight className="w-3.5 h-3.5 text-[#B59661] hidden lg:block" />}
                </div>
              </motion.div>
            ))}
          </div>

          <div className="pt-2 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-t border-[#29251F]/10">
            <span className="text-xs text-[#6C6255]">
              Structured weekly briefs. Zero operational chaos.
            </span>
            <Link
              to="/approach"
              className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] font-semibold text-[#29251F] hover:text-[#B59661] transition-colors"
            >
              <span>Read How We Work</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>


      {/* ============================================================
          SECTION 4 — WHY KAMN
          Headline: "Not another tool. A team that delivers."
          Supporting text: "Human judgment. Intelligent systems. Everything managed behind the scenes."
          Visually communicate that KAMN manages the AI and operational work internally.
          ============================================================ */}
      <section className="py-24 sm:py-32 bg-transparent border-b border-[#29251F]/10 relative">
        <div className="editorial-container space-y-16">
          <div className="max-w-3xl space-y-3">
            <div className="inline-flex items-center gap-2">
              <KhatamStar className="w-3.5 h-3.5 text-[#B59661]" />
              <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#68694C]">
                Operating Difference
              </span>
            </div>

            <h2 className="text-4xl sm:text-6xl md:text-7xl text-[#29251F] font-semibold tracking-tight leading-[1.04]">
              Not another tool. <br className="hidden sm:inline" />
              <span className="text-[#68694C]">A team that delivers.</span>
            </h2>

            <p className="text-base sm:text-xl text-[#6C6255] font-normal leading-relaxed pt-1">
              Human judgment. Intelligent systems. Everything managed behind the scenes.
            </p>
          </div>

          {/* Visual Distinction: Software vs KAMN */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Left: Traditional Software / SaaS */}
            <div className="p-8 sm:p-12 bg-[#FAF6EE]/60 backdrop-blur-xs border border-[#29251F]/15 rounded-sm space-y-6">
              <div className="flex items-center justify-between pb-4 border-b border-[#29251F]/10">
                <span className="text-xs uppercase tracking-[0.2em] font-semibold text-[#6C6255]">
                  Software & Platforms
                </span>
                <span className="text-xs text-[#6C6255]">You do the work</span>
              </div>

              <div className="space-y-4 text-sm text-[#6C6255]">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-[#6C6255] mt-1.5 shrink-0" />
                  <p>You learn and configure new dashboards.</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-[#6C6255] mt-1.5 shrink-0" />
                  <p>You build and monitor automated workflows yourself.</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-[#6C6255] mt-1.5 shrink-0" />
                  <p>Your team remains burdened by execution and context-switching.</p>
                </div>
              </div>

              <div className="pt-4 border-t border-[#29251F]/10 text-xs text-[#6C6255]">
                Outcome: Another subscription. Still on your plate.
              </div>
            </div>

            {/* Right: KAMN Managed Partner */}
            <div className="p-8 sm:p-12 bg-[#FAF6EE]/90 backdrop-blur-xs border border-[#B59661] rounded-sm space-y-6 shadow-sm ring-1 ring-[#B59661]/30">
              <div className="flex items-center justify-between pb-4 border-b border-[#29251F]/10">
                <span className="text-xs uppercase tracking-[0.2em] font-semibold text-[#B59661]">
                  KAMN Managed Partner
                </span>
                <span className="text-xs font-semibold text-[#29251F]">We carry the work</span>
              </div>

              <div className="space-y-4 text-sm text-[#29251F]">
                <div className="flex items-start gap-3">
                  <Check className="w-4 h-4 text-[#B59661] mt-0.5 shrink-0" />
                  <p className="font-medium">No software to learn. Zero dashboards to manage.</p>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-4 h-4 text-[#B59661] mt-0.5 shrink-0" />
                  <p className="font-medium">Proprietary AI OS workflows operated internally by KAMN consultants.</p>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-4 h-4 text-[#B59661] mt-0.5 shrink-0" />
                  <p className="font-medium">Human accountability with calm weekly decision memos and finished deliverables.</p>
                </div>
              </div>

              <div className="pt-4 border-t border-[#29251F]/10 text-xs font-semibold text-[#68694C]">
                Outcome: Real work taken off your hands.
              </div>
            </div>
          </div>

          <div className="pt-2 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-t border-[#29251F]/10">
            <span className="text-xs text-[#6C6255]">
              Tailored monthly managed subscriptions. Predictable scope.
            </span>
            <Link
              to="/partnership"
              className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] font-semibold text-[#29251F] hover:text-[#B59661] transition-colors"
            >
              <span>Explore Partnership Models</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>


      {/* ============================================================
          SECTION 5 — PRINCIPLES
          Headline: "Built on Amanah. Driven by Ihsan."
          Supporting text: "Honest work. Lasting value. A stronger economy for generations to come."
          ============================================================ */}
      <section className="py-24 sm:py-32 bg-[#FAF6EE]/30 backdrop-blur-xs border-b border-[#29251F]/10 relative">
        <MashrabiyaPattern className="opacity-[0.02]" />

        <div className="editorial-container relative z-10 space-y-16">
          <div className="max-w-3xl space-y-3">
            <div className="inline-flex items-center gap-2">
              <KhatamStar className="w-3.5 h-3.5 text-[#B59661]" />
              <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#68694C]">
                Ethical Foundation
              </span>
            </div>

            <h2 className="text-4xl sm:text-6xl md:text-7xl text-[#29251F] font-semibold tracking-tight leading-[1.04]">
              Built on Amanah. <br className="hidden sm:inline" />
              <span className="text-[#68694C]">Driven by Ihsan.</span>
            </h2>

            <p className="text-base sm:text-xl text-[#6C6255] font-normal leading-relaxed pt-1">
              Honest work. Lasting value. A stronger economy for generations to come.
            </p>
          </div>

          {/* 3 Core Ethical Pillars */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            <div className="p-8 bg-[#FAF6EE]/85 backdrop-blur-xs border border-[#29251F]/15 rounded-sm space-y-3 hover:border-[#B59661] hover:bg-[#FAF6EE]/95 transition-all duration-300 shadow-xs">
              <span className="text-xs uppercase tracking-[0.2em] font-semibold text-[#B59661] block">
                Amanah · Fiduciary Care
              </span>
              <h3 className="text-xl font-semibold text-[#29251F]">
                Sacred Trust
              </h3>
              <p className="text-xs sm:text-sm text-[#6C6255] leading-relaxed">
                We handle client objectives and commercial information with absolute discretion and strict confidentiality.
              </p>
            </div>

            <div className="p-8 bg-[#FAF6EE]/85 backdrop-blur-xs border border-[#29251F]/15 rounded-sm space-y-3 hover:border-[#B59661] hover:bg-[#FAF6EE]/95 transition-all duration-300 shadow-xs">
              <span className="text-xs uppercase tracking-[0.2em] font-semibold text-[#68694C] block">
                Ihsan · Excellence
              </span>
              <h3 className="text-xl font-semibold text-[#29251F]">
                Mastery in Execution
              </h3>
              <p className="text-xs sm:text-sm text-[#6C6255] leading-relaxed">
                Quiet precision and rigorous attention to detail in every document, negotiation, and research brief.
              </p>
            </div>

            <div className="p-8 bg-[#FAF6EE]/85 backdrop-blur-xs border border-[#29251F]/15 rounded-sm space-y-3 hover:border-[#B59661] hover:bg-[#FAF6EE]/95 transition-all duration-300 shadow-xs">
              <span className="text-xs uppercase tracking-[0.2em] font-semibold text-[#B59661] block">
                The Ummah Vision
              </span>
              <h3 className="text-xl font-semibold text-[#29251F]">
                Economic Capacity
              </h3>
              <p className="text-xs sm:text-sm text-[#6C6255] leading-relaxed">
                Stronger businesses create dignified livelihoods, building the financial capacity to carry communities forward.
              </p>
            </div>
          </div>

          <div className="pt-2 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-t border-[#29251F]/10">
            <span className="text-xs text-[#6C6255]">
              We serve businesses of all backgrounds with universal standards of integrity.
            </span>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] font-semibold text-[#29251F] hover:text-[#B59661] transition-colors"
            >
              <span>Why KAMN Exists</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>


      {/* ============================================================
          SECTION 6 — FINAL CTA
          Headline: "Let's build something better."
          Supporting text: "Monthly partnerships. Thoughtful execution."
          Button: "Discuss Your Business"
          ============================================================ */}
      <section className="relative min-h-[55svh] flex items-center justify-center bg-transparent py-24 sm:py-32 text-center overflow-hidden">
        
        {/* Soft Ambient Gold Sheen */}
        <div 
          className="absolute inset-0 pointer-events-none opacity-20"
          style={{
            background: 'radial-gradient(600px circle at 50% 50%, rgba(181, 150, 97, 0.25), transparent 70%)'
          }}
        />

        <div className="editorial-container relative z-10 max-w-3xl mx-auto space-y-6">
          <img 
            src="/assets/kamn-logo-mark.png" 
            alt="KAMN Emblem" 
            className="h-12 sm:h-14 w-auto mx-auto mb-2 object-contain filter drop-shadow-xs" 
          />

          <h2 className="text-4xl sm:text-6xl md:text-7xl text-[#29251F] font-semibold tracking-tight leading-[1.04]">
            Let's build something better.
          </h2>

          <p className="text-base sm:text-xl text-[#6C6255] font-normal max-w-xl mx-auto">
            Monthly partnerships. Thoughtful execution.
          </p>

          <div className="pt-4">
            <Link
              to="/begin"
              className="inline-flex items-center gap-3 min-h-[52px] px-10 sm:px-12 py-4 sm:py-5 bg-[#29251F] text-[#FAF6EE] font-semibold text-xs tracking-[0.25em] uppercase rounded-sm hover:bg-[#363428] transition-all duration-300 shadow-xl cursor-pointer"
            >
              <span>Discuss Your Business</span>
              <ArrowRight className="w-4 h-4 text-[#B59661]" />
            </Link>
          </div>

          <div className="pt-4 text-xs text-[#6C6255] uppercase tracking-wider">
            Confidential 30-minute review · Direct principal attention
          </div>
        </div>
      </section>

    </div>
  );
}
