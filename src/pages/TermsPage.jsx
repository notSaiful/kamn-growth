import React from 'react';
import { Link } from 'react-router-dom';
import { KhatamStar } from '../components/SazoArch';
import PageTransition from '../components/PageTransition';

export default function TermsPage() {
  return (
    <PageTransition>
      <div className="pt-32 pb-24 min-h-screen bg-transparent text-[#29251F]">
        
        {/* Header */}
        <section className="editorial-container pt-8 pb-16 border-b border-[#29251F]/10">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 mb-6">
              <KhatamStar className="w-4 h-4 text-[#B59661]" />
              <span className="text-xs uppercase tracking-[0.25em] font-medium text-[#6C6255]">
                Governance
              </span>
            </div>

            <h1 className="text-4xl sm:text-6xl font-semibold tracking-tight text-[#29251F] leading-tight uppercase mb-6">
              TERMS OF ENGAGEMENT.
            </h1>

            <p className="text-base text-[#6C6255] font-normal leading-relaxed">
              Standard commercial terms governing sprints, embedded operations, and strategic partnerships.
            </p>
          </div>
        </section>

        {/* Content */}
        <section className="editorial-container py-16">
          <div className="max-w-2xl space-y-12 text-sm text-[#29251F]/90 font-normal leading-relaxed">
            
            <div className="space-y-3">
              <h2 className="text-2xl text-[#29251F] font-semibold">
                1. Nature of Services & Execution
              </h2>
              <p className="text-[#6C6255]">
                KAMN acts as an independent execution partner and fractional operating cell. While we negotiate with upstream suppliers and conduct commercial outreach on your behalf, final purchasing authority, contractual commitments, and binding counterparty agreements remain strictly with client leadership.
              </p>
            </div>

            <div className="space-y-3">
              <h2 className="text-2xl text-[#29251F] font-semibold">
                2. Mutual Commitment & Responsiveness
              </h2>
              <p className="text-[#6C6255]">
                High-leverage execution requires clear communication. Engagements rely on timely access to relevant product specifications, pricing baselines, and commercial sign-offs. We operate on disciplined asynchronous schedules to respect executive time.
              </p>
            </div>

            <div className="space-y-3">
              <h2 className="text-2xl text-[#29251F] font-semibold">
                3. Intellectual Property & Work Product
              </h2>
              <p className="text-[#6C6255]">
                All customized Standard Operating Procedures (SOPs), vendor matrices, prospective account datasets, and negotiation playbooks created explicitly for a client become client property upon settlement of fees. KAMN retains rights to its pre-existing methodologies and foundational frameworks.
              </p>
            </div>

            <div className="space-y-3">
              <h2 className="text-2xl text-[#29251F] font-semibold">
                4. Ethical Conduct & Termination
              </h2>
              <p className="text-[#6C6255]">
                Either party may conclude an active engagement with 30 days written notice. Work completed to date is settled fairly under standard commercial covenants.
              </p>
            </div>

            <div className="pt-8 border-t border-[#29251F]/10">
              <Link to="/begin" className="text-xs uppercase tracking-widest font-medium text-[#29251F] hover:text-[#B59661] transition-colors">
                ← Return to Engagement Portal
              </Link>
            </div>

          </div>
        </section>

      </div>
    </PageTransition>
  );
}
