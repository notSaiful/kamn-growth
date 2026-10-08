import React from 'react';
import { Link } from 'react-router-dom';
import { KhatamStar, MashrabiyaPattern } from './SazoArch';

export default function Footer() {
  return (
    <footer className="relative bg-[#FAF6EE]/75 backdrop-blur-xs text-[#6C6255] border-t border-[#29251F]/15 pt-20 pb-12 overflow-hidden">
      <MashrabiyaPattern className="opacity-[0.02]" />

      <div className="editorial-container relative z-10">
        
        {/* Top 12-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-[#29251F]/10">
          
          {/* Brand Manifesto: 5 Cols */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3.5">
              <img 
                src="/assets/kamn-logo-mark.png" 
                alt="KAMN" 
                className="h-10 w-auto object-contain filter drop-shadow-xs" 
              />
              <span className="text-2xl font-semibold text-[#29251F] tracking-[0.22em]">
                KAMN
              </span>
            </div>
            
            <p className="text-sm text-[#29251F]/90 font-normal max-w-md leading-relaxed">
              Stronger businesses create jobs. Jobs create dignity. Wealth creates capacity. We're building KAMN to turn that capacity into something bigger than ourselves.
            </p>

            <p className="text-xs text-[#68694C] font-normal leading-relaxed pt-1">
              We serve businesses without distinction. The purpose behind what we build goes deeper.
            </p>
          </div>

          {/* Navigation Links: 3 Cols */}
          {/* Navigation Links: 3 Cols */}
          <div className="md:col-span-3">
            <h4 className="text-xs uppercase tracking-[0.25em] font-semibold text-[#29251F] mb-6">
              Navigation
            </h4>
            <ul className="space-y-3 text-sm text-[#29251F]/80">
              <li><Link to="/services" className="hover:text-[#B59661] transition-colors">What We Do</Link></li>
              <li><Link to="/approach" className="hover:text-[#B59661] transition-colors">How It Works</Link></li>
              <li><Link to="/about" className="hover:text-[#B59661] transition-colors">Why KAMN</Link></li>
              <li><Link to="/results" className="hover:text-[#B59661] transition-colors">Founding Note</Link></li>
              <li><Link to="/journal" className="hover:text-[#B59661] transition-colors">Insights</Link></li>
            </ul>
          </div>

          {/* Disciplines: 2 Cols */}
          <div className="md:col-span-2">
            <h4 className="text-xs uppercase tracking-[0.25em] font-semibold text-[#29251F] mb-6">
              Disciplines
            </h4>
            <ul className="space-y-3 text-xs text-[#6C6255]">
              <li><Link to="/services/growth" className="hover:text-[#29251F] transition-colors">Growth</Link></li>
              <li><Link to="/services/procurement" className="hover:text-[#29251F] transition-colors">Procurement</Link></li>
              <li><Link to="/services/operations" className="hover:text-[#29251F] transition-colors">Operations</Link></li>
              <li><Link to="/services/ai-systems" className="hover:text-[#29251F] transition-colors">AI Systems</Link></li>
              <li><Link to="/partnership" className="hover:text-[#29251F] transition-colors">Partnership</Link></li>
            </ul>
          </div>

          {/* Intake Portal: 2 Cols */}
          <div className="md:col-span-2">
            <h4 className="text-xs uppercase tracking-[0.25em] font-semibold text-[#29251F] mb-6">
              Engagement
            </h4>
            <p className="text-xs text-[#6C6255] font-normal leading-relaxed">
              Engagements begin by confidential review.
            </p>
          </div>

        </div>

        {/* Massive Zenith Architectural Brand Typography */}
        <div className="py-12 border-b border-[#29251F]/10 select-none overflow-hidden relative">
          <div 
            className="text-[18vw] font-semibold tracking-tighter text-[#29251F]/[0.06] uppercase leading-none text-center pointer-events-none"
            style={{ letterSpacing: "-0.05em" }}
          >
            KAMN
          </div>
          {/* Subtle Ambient Gold Light Sheen across the typography */}
          <div 
            className="absolute inset-0 pointer-events-none opacity-20"
            style={{
              background: 'radial-gradient(500px circle at 50% 50%, rgba(181, 150, 97, 0.3), transparent 70%)'
            }}
          />
        </div>

        {/* Bottom Metadata */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#6C6255]">
          <p>© {new Date().getFullYear()} KAMN. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link to="/privacy" className="hover:text-[#29251F] transition-colors">Privacy</Link>
            <Link to="/terms" className="hover:text-[#29251F] transition-colors">Terms of Engagement</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
