import React from 'react';
import { Link } from 'react-router-dom';
import { KhatamStar } from '../components/SazoArch';
import PageTransition from '../components/PageTransition';

export default function PrivacyPage() {
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
              PRIVACY CHARTER.
            </h1>

            <p className="text-base text-[#6C6255] font-normal leading-relaxed">
              Our privacy commitment is anchored in rigorous institutional confidentiality and fiduciary stewardship.
            </p>
          </div>
        </section>

        {/* Content */}
        <section className="editorial-container py-16">
          <div className="max-w-2xl space-y-12 text-sm text-[#29251F]/90 font-normal leading-relaxed">
            
            <div className="space-y-3">
              <h2 className="text-2xl text-[#29251F] font-semibold">
                1. Data Confidentiality as a Sacred Covenant
              </h2>
              <p className="text-[#6C6255]">
                KAMN never sells, brokers, rents, or monetizes client information. Any operational data, financial metrics, customer databases, or vendor contracts shared during an engagement are strictly protected under mutual non-disclosure covenants.
              </p>
            </div>

            <div className="space-y-3">
              <h2 className="text-2xl text-[#29251F] font-semibold">
                2. Sourced Intelligence & Outreach Ethics
              </h2>
              <p className="text-[#6C6255]">
                In executing outbound growth or supplier discovery, we utilize strictly verified, public corporate registries and compliance databases. We respect unsubscribe requests immediately and adhere strictly to global data protection frameworks including GDPR and regional electronic communications standards.
              </p>
            </div>

            <div className="space-y-3">
              <h2 className="text-2xl text-[#29251F] font-semibold">
                3. Technical Safeguards & Retention
              </h2>
              <p className="text-[#6C6255]">
                Client work artifacts and operational playbooks are stored in encrypted, access-restricted institutional repositories. Upon conclusion of an engagement, clients may request complete archival or destruction of all non-statutory records.
              </p>
            </div>

            <div className="space-y-3">
              <h2 className="text-2xl text-[#29251F] font-semibold">
                4. Inquiries
              </h2>
              <p className="text-[#6C6255]">
                For questions regarding data stewardship or non-disclosure execution, contact our governance desk directly through our intake portal.
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
