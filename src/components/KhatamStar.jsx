import React from 'react';

export default function KhatamStar({ className = "w-5 h-5 text-[#B59661]" }) {
  return (
    <svg 
      viewBox="0 0 40 40" 
      fill="currentColor" 
      className={className}
      aria-hidden="true"
    >
      <rect x="8" y="8" width="24" height="24" rx="1" fill="none" stroke="currentColor" strokeWidth="1.75" />
      <rect x="8" y="8" width="24" height="24" rx="1" transform="rotate(45 20 20)" fill="none" stroke="currentColor" strokeWidth="1.75" />
      <circle cx="20" cy="20" r="2.5" fill="currentColor" />
    </svg>
  );
}

export function ArchitecturalArchLine({ className = "w-full text-[#B59661]/40" }) {
  return (
    <div className={`flex items-center justify-center gap-3 my-4 ${className}`}>
      <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-[#B59661]/40 to-transparent" />
      <KhatamStar className="w-4 h-4 text-[#B59661] flex-shrink-0" />
      <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-[#B59661]/40 to-transparent" />
    </div>
  );
}
