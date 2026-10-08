import React from 'react';

// The Signature SAZO Arch SVG Definitions & Framing Containers
export default function SazoArchSvgDef() {
  return (
    <svg className="absolute w-0 h-0 overflow-hidden" aria-hidden="true" focusable="false">
      <defs>
        {/* Authentic Islamic Pointed Stilted Arch Clip Path (Normalized 0-1) */}
        <clipPath id="sazo-arch-clip" clipPathUnits="objectBoundingBox">
          <path d="M 0,1 L 0,0.38 C 0,0.18 0.22,0.06 0.5,0 C 0.78,0.06 1,0.18 1,0.38 L 1,1 Z" />
        </clipPath>
        
        {/* Softer Segmental Ogee Arch */}
        <clipPath id="sazo-arch-soft" clipPathUnits="objectBoundingBox">
          <path d="M 0,1 L 0,0.4 C 0,0.15 0.25,0.04 0.5,0 C 0.75,0.04 1,0.15 1,0.4 L 1,1 Z" />
        </clipPath>
      </defs>
    </svg>
  );
}

// 8-Point Islamic Khatam Geometric Star
export function KhatamStar({ className = "w-5 h-5 text-[#B59661]" }) {
  return (
    <svg viewBox="0 0 40 40" fill="currentColor" className={className} aria-hidden="true">
      <rect x="8" y="8" width="24" height="24" rx="0.5" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <rect x="8" y="8" width="24" height="24" rx="0.5" transform="rotate(45 20 20)" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="20" cy="20" r="2.2" fill="currentColor" />
    </svg>
  );
}

// Architectural Arch Line Divider
export function ArchDivider({ className = "w-full my-8" }) {
  return (
    <div className={`flex items-center justify-center gap-4 ${className}`}>
      <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-[#B59661]/35 to-transparent" />
      <KhatamStar className="w-4 h-4 text-[#B59661]/70 flex-shrink-0" />
      <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-[#B59661]/35 to-transparent" />
    </div>
  );
}

// Subtle Mashrabiya Geometric Watermark Pattern (3-6% opacity)
export function MashrabiyaPattern({ className = "opacity-[0.04]" }) {
  return (
    <div className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}>
      <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="mashrabiya-grid" width="60" height="60" patternUnits="userSpaceOnUse">
            <path d="M 30,0 L 60,30 L 30,60 L 0,30 Z" fill="none" stroke="#29251F" strokeWidth="0.75" />
            <circle cx="30" cy="30" r="3" fill="none" stroke="#B59661" strokeWidth="0.75" />
            <path d="M 0,0 L 60,60 M 60,0 L 0,60" stroke="#29251F" strokeWidth="0.4" strokeDasharray="2,4" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#mashrabiya-grid)" />
      </svg>
    </div>
  );
}
