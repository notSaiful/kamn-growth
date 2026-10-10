import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, Shield, Clock, FileText, Check } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { KhatamStar } from '../components/SazoArch';
import PageTransition from '../components/PageTransition';
import { EASE_LUXURY } from '../lib/motionTokens';
import { submitGrowthReview } from '../lib/supabaseClient';

const PRIMARY_CHALLENGES = [
  'Finding more customers',
  'Sales follow-up and lead management',
  'Procurement and supplier sourcing',
  'Operational inefficiencies',
  'Market expansion',
  'Automation and AI workflows',
  'Multiple business challenges',
  'Other'
];

const REVENUE_RANGES = [
  'Early Stage / Pre-revenue',
  'Under $10k / month',
  '$10k – $50k / month',
  '$50k – $250k / month',
  '$250k+ / month',
  'Prefer not to disclose'
];

export default function BeginPage() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  
  const [formData, setFormData] = useState({
    fullName: '',
    companyName: '',
    businessEmail: '',
    whatsappNumber: '',
    industry: '',
    companyLocation: '',
    revenueRange: '',
    primaryChallenge: 'Finding more customers',
    description: '',
    // Honeypot field for spam prevention
    hp_company_website: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    if (errorMsg) setErrorMsg('');
  };

  const handleChallengeSelect = (challenge) => {
    setFormData(prev => ({
      ...prev,
      primaryChallenge: challenge
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMsg('');

    // Honeypot spam trap
    if (formData.hp_company_website) {
      console.warn('Bot submission prevented.');
      setSubmitted(true);
      return;
    }

    // Basic validation
    if (!formData.fullName.trim() || !formData.companyName.trim() || !formData.businessEmail.trim()) {
      setErrorMsg('Please complete all required fields.');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.businessEmail)) {
      setErrorMsg('Please provide a valid business email address.');
      return;
    }

    // Mandatory phone number validation
    const cleanPhone = (formData.whatsappNumber || '').replace(/[^0-9]/g, '');
    if (!formData.whatsappNumber.trim() || cleanPhone.length < 7) {
      setErrorMsg('Phone / WhatsApp number is mandatory. Please provide a valid number with country code (e.g. +44 7700 900077).');
      return;
    }

    setLoading(true);

    const submissionPayload = {
      ...formData,
      id: `rev_${Date.now()}`,
      submittedAt: new Date().toISOString()
    };

    // 1. Send to Supabase Database
    try {
      await submitGrowthReview(formData);
    } catch (dbErr) {
      console.warn('Supabase submission note:', dbErr);
    }

    // 2. Resilient local persistence (always preserved for offline/instant review)
    try {
      const existingReviews = JSON.parse(localStorage.getItem('kamn_growth_reviews') || '[]');
      existingReviews.unshift(submissionPayload);
      localStorage.setItem('kamn_growth_reviews', JSON.stringify(existingReviews));

      // Backward-compatibility mirror
      const legacy = JSON.parse(localStorage.getItem('kamn_inquiries') || '[]');
      legacy.unshift({
        name: formData.fullName,
        businessName: formData.companyName,
        contact: `${formData.businessEmail} | WA: ${formData.whatsappNumber}`,
        need: formData.primaryChallenge,
        situation: formData.description,
        timestamp: submissionPayload.submittedAt
      });
      localStorage.setItem('kamn_inquiries', JSON.stringify(legacy));
    } catch (err) {
      console.warn('Local persistence warning:', err);
    }

    // 3. Dispatch client event for future integrations/analytics
    try {
      window.dispatchEvent(new CustomEvent('kamn:growth-review-submitted', { detail: submissionPayload }));
    } catch (e) {
      // ignore
    }

    // 4. Direct email notification to saiful@ug30.mesaschool.co
    try {
      fetch('https://formsubmit.co/ajax/saiful@ug30.mesaschool.co', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          _subject: `New KAMN Growth Review: ${formData.companyName || 'Business'} (${formData.fullName})`,
          _template: 'table',
          _replyto: formData.businessEmail,
          'Full Name': formData.fullName,
          'Business Email': formData.businessEmail,
          'Company Name': formData.companyName,
          'WhatsApp / Phone': formData.whatsappNumber || 'N/A',
          'Website': formData.website || 'N/A',
          'Annual Turnover': formData.annualRevenue || 'N/A',
          'Primary Need': formData.primaryChallenge || 'N/A',
          'Timeline': formData.idealTimeline || 'N/A',
          'Situation & Notes': formData.description || 'N/A',
          'Submitted At': submissionPayload.submittedAt,
        }),
      }).catch(err => console.info('Client email delivery note:', err));
    } catch (e) {
      // ignore
    }

    // Optional webhook trigger if configured in environment
    const webhookUrl = import.meta.env?.VITE_INQUIRY_WEBHOOK_URL;
    if (webhookUrl) {
      fetch(webhookUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(submissionPayload)
      }).catch(err => console.warn('Webhook dispatch failed:', err));
    }

    // Realistic processing pause
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      window.scrollTo({ top: 120, behavior: 'smooth' });
    }, 750);
  };

  return (
    <PageTransition>
      <div className="pt-32 pb-24 min-h-screen bg-transparent text-[#29251F]">
        
        {/* ============================================================
            01 HEADER / OVERVIEW
            Headline: Let's understand your business.
            ============================================================ */}
        <section className="editorial-container pt-8 pb-12 border-b border-[#29251F]/10">
          <div className="max-w-4xl">
            <div className="flex items-center gap-2 mb-6">
              <KhatamStar className="w-4 h-4 text-[#B59661]" />
              <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#68694C]">
                Confidential Inquiry
              </span>
            </div>

            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-semibold tracking-tight text-[#29251F] leading-[1.05] uppercase mb-6">
              LET'S UNDERSTAND<br />
              <span className="text-[#68694C] font-semibold">YOUR BUSINESS.</span>
            </h1>

            <p className="text-base sm:text-xl text-[#6C6255] font-normal max-w-2xl leading-relaxed">
              Tell us what you're building, what is holding you back and where you need stronger execution.
              We'll review your requirements and determine whether a KAMN partnership makes sense.
            </p>
          </div>
        </section>

        {/* ============================================================
            02 MAIN CONTENT: 2-COLUMN LUXURY INTAKE
            ============================================================ */}
        <section className="editorial-container py-14">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            {/* LEFT COLUMN: Context, Principles & What to Expect */}
            <div className="lg:col-span-5 space-y-8">
              <div className="bg-[#FAF6EE] p-8 border border-[#29251F]/10 rounded-sm space-y-6">
                <span className="text-xs uppercase tracking-[0.2em] font-semibold text-[#68694C] block">
                  What to Expect
                </span>

                <div className="space-y-5">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-[#FAF6EE] border border-[#29251F]/20 flex items-center justify-center shrink-0 text-xs font-semibold text-[#29251F]">
                      01
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold uppercase tracking-wider text-[#29251F] mb-1">
                        Thorough Internal Review
                      </h3>
                      <p className="text-xs sm:text-sm text-[#6C6255] leading-relaxed">
                        We analyze your industry, current operational bottlenecks, and scope requirements before our initial call.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-[#FAF6EE] border border-[#29251F]/20 flex items-center justify-center shrink-0 text-xs font-semibold text-[#29251F]">
                      02
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold uppercase tracking-wider text-[#29251F] mb-1">
                        Honest Mutual Fit
                      </h3>
                      <p className="text-xs sm:text-sm text-[#6C6255] leading-relaxed">
                        If we are not equipped to deliver substantial operating leverage for your current stage, we will tell you directly.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-[#FAF6EE] border border-[#29251F]/20 flex items-center justify-center shrink-0 text-xs font-semibold text-[#29251F]">
                      03
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold uppercase tracking-wider text-[#29251F] mb-1">
                        Practical 30-Minute Discussion
                      </h3>
                      <p className="text-xs sm:text-sm text-[#6C6255] leading-relaxed">
                        A focused session with a principal consultant to review practical solutions and define the right monthly operating scope.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Fiduciary Discretion / Amanah */}
              <div className="p-6 bg-[#FAF6EE] border border-[#B59661]/30 rounded-sm space-y-3">
                <div className="flex items-center gap-2.5">
                  <Shield className="w-4 h-4 text-[#B59661] shrink-0" />
                  <span className="text-xs uppercase tracking-[0.2em] font-semibold text-[#29251F]">
                    Amanah & Discretion
                  </span>
                </div>
                <p className="text-xs text-[#6C6255] leading-relaxed">
                  Every submission is treated with strict commercial confidentiality. We never disclose client inquiries, operational details, or trade practices to third parties.
                </p>
              </div>

              <div className="space-y-2 text-xs text-[#6C6255]">
                <div className="flex items-center gap-2">
                  <Clock className="w-3.5 h-3.5 text-[#68694C]" />
                  <span>Response time: Typically within 24–48 hours</span>
                </div>
                <div className="flex items-center gap-2">
                  <FileText className="w-3.5 h-3.5 text-[#68694C]" />
                  <span>Engagement structure: Tailored monthly managed subscription</span>
                </div>
              </div>
            </div>

            {/* RIGHT COLUMN: The High-Converting Growth Review Form */}
            <div className="lg:col-span-7">
              <AnimatePresence mode="wait">
                {!submitted ? (
                  <motion.form
                    key="review-form"
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -16 }}
                    transition={{ duration: 0.5, ease: EASE_LUXURY }}
                    onSubmit={handleSubmit}
                    className="bg-[#FAF6EE] p-8 sm:p-12 border border-[#29251F]/15 rounded-sm space-y-6 shadow-xs"
                    noValidate
                  >
                    {/* Honeypot field - visually hidden */}
                    <div className="hidden" aria-hidden="true">
                      <label htmlFor="hp_company_website">Do not fill this</label>
                      <input
                        type="text"
                        id="hp_company_website"
                        name="hp_company_website"
                        tabIndex={-1}
                        autoComplete="off"
                        value={formData.hp_company_website}
                        onChange={handleChange}
                      />
                    </div>

                    {errorMsg && (
                      <div className="p-4 bg-red-500/10 border border-red-500/30 text-red-900 text-xs font-medium rounded-xs">
                        {errorMsg}
                      </div>
                    )}

                    {/* Section 1: Contact Details */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div className="space-y-1.5">
                        <label 
                          htmlFor="fullName" 
                          className="block text-xs uppercase tracking-[0.2em] font-semibold text-[#29251F]"
                        >
                          Full Name *
                        </label>
                        <input
                          id="fullName"
                          name="fullName"
                          type="text"
                          required
                          value={formData.fullName}
                          onChange={handleChange}
                          placeholder="e.g. Tariq Mansoor"
                          className="w-full bg-[#FAF6EE] border border-[#29251F]/20 rounded-xs px-4 py-3 text-sm text-[#29251F] focus:outline-none focus:border-[#B59661] transition-colors"
                        />
                      </div>

                      <div className="space-y-1.5">
                        <label 
                          htmlFor="companyName" 
                          className="block text-xs uppercase tracking-[0.2em] font-semibold text-[#29251F]"
                        >
                          Company Name *
                        </label>
                        <input
                          id="companyName"
                          name="companyName"
                          type="text"
                          required
                          value={formData.companyName}
                          onChange={handleChange}
                          placeholder="e.g. Al-Noor Logistics Ltd"
                          className="w-full bg-[#FAF6EE] border border-[#29251F]/20 rounded-xs px-4 py-3 text-sm text-[#29251F] focus:outline-none focus:border-[#B59661] transition-colors"
                        />
                      </div>
                    </div>

                    {/* Section 2: Email & WhatsApp */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div className="space-y-1.5">
                        <label 
                          htmlFor="businessEmail" 
                          className="block text-xs uppercase tracking-[0.2em] font-semibold text-[#29251F]"
                        >
                          Business Email *
                        </label>
                        <input
                          id="businessEmail"
                          name="businessEmail"
                          type="email"
                          required
                          value={formData.businessEmail}
                          onChange={handleChange}
                          placeholder="tariq@alnoor.com"
                          className="w-full bg-[#FAF6EE] border border-[#29251F]/20 rounded-xs px-4 py-3 text-sm text-[#29251F] focus:outline-none focus:border-[#B59661] transition-colors"
                        />
                      </div>

                      <div className="space-y-1.5">
                        <label 
                          htmlFor="whatsappNumber" 
                          className="block text-xs uppercase tracking-[0.2em] font-semibold text-[#29251F]"
                        >
                          Phone / WhatsApp *
                        </label>
                        <input
                          id="whatsappNumber"
                          name="whatsappNumber"
                          type="tel"
                          required
                          value={formData.whatsappNumber}
                          onChange={handleChange}
                          placeholder="e.g. +44 7700 900077"
                          className="w-full bg-[#FAF6EE] border border-[#29251F]/20 rounded-xs px-4 py-3 text-sm text-[#29251F] focus:outline-none focus:border-[#B59661] transition-colors"
                        />
                      </div>
                    </div>

                    {/* Section 3: Industry & Location */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div className="space-y-1.5">
                        <label 
                          htmlFor="industry" 
                          className="block text-xs uppercase tracking-[0.2em] font-semibold text-[#29251F]"
                        >
                          Industry *
                        </label>
                        <input
                          id="industry"
                          name="industry"
                          type="text"
                          required
                          value={formData.industry}
                          onChange={handleChange}
                          placeholder="e.g. Wholesale, Logistics, Tech"
                          className="w-full bg-[#FAF6EE] border border-[#29251F]/20 rounded-xs px-4 py-3 text-sm text-[#29251F] focus:outline-none focus:border-[#B59661] transition-colors"
                        />
                      </div>

                      <div className="space-y-1.5">
                        <label 
                          htmlFor="companyLocation" 
                          className="block text-xs uppercase tracking-[0.2em] font-semibold text-[#29251F]"
                        >
                          Company Location *
                        </label>
                        <input
                          id="companyLocation"
                          name="companyLocation"
                          type="text"
                          required
                          value={formData.companyLocation}
                          onChange={handleChange}
                          placeholder="e.g. London, UK / Dubai, UAE"
                          className="w-full bg-[#FAF6EE] border border-[#29251F]/20 rounded-xs px-4 py-3 text-sm text-[#29251F] focus:outline-none focus:border-[#B59661] transition-colors"
                        />
                      </div>
                    </div>

                    {/* Section 4: Revenue Range (Optional) */}
                    <div className="space-y-1.5">
                      <div className="flex items-center justify-between">
                        <label 
                          htmlFor="revenueRange" 
                          className="block text-xs uppercase tracking-[0.2em] font-semibold text-[#29251F]"
                        >
                          Approximate Monthly Revenue or Business Size
                        </label>
                        <span className="text-[11px] text-[#6C6255] uppercase tracking-wider">Optional</span>
                      </div>
                      <select
                        id="revenueRange"
                        name="revenueRange"
                        value={formData.revenueRange}
                        onChange={handleChange}
                        className="w-full bg-[#FAF6EE] border border-[#29251F]/20 rounded-xs px-4 py-3 text-sm text-[#29251F] focus:outline-none focus:border-[#B59661] transition-colors cursor-pointer"
                      >
                        <option value="">Select an approximate range...</option>
                        {REVENUE_RANGES.map((rng) => (
                          <option key={rng} value={rng}>{rng}</option>
                        ))}
                      </select>
                    </div>

                    {/* Section 5: Primary Challenge (8 choices) */}
                    <div className="space-y-2.5">
                      <label className="block text-xs uppercase tracking-[0.2em] font-semibold text-[#29251F]">
                        Primary Challenge *
                      </label>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {PRIMARY_CHALLENGES.map((challenge) => {
                          const isSelected = formData.primaryChallenge === challenge;
                          return (
                            <button
                              key={challenge}
                              type="button"
                              onClick={() => handleChallengeSelect(challenge)}
                              className={`min-h-[44px] px-3.5 py-2.5 rounded-xs text-xs font-medium tracking-wide text-left transition-all duration-200 border cursor-pointer flex items-center justify-between ${
                                isSelected
                                  ? 'bg-[#29251F] text-[#FAF6EE] border-[#29251F] shadow-xs'
                                  : 'bg-[#FAF6EE] text-[#6C6255] border-[#29251F]/20 hover:border-[#29251F]'
                              }`}
                            >
                              <span>{challenge}</span>
                              {isSelected && <Check className="w-3.5 h-3.5 text-[#B59661] shrink-0 ml-2" />}
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    {/* Section 6: Short Description */}
                    <div className="space-y-1.5">
                      <label 
                        htmlFor="description" 
                        className="block text-xs uppercase tracking-[0.2em] font-semibold text-[#29251F]"
                      >
                        Short Description of Required Support
                      </label>
                      <textarea
                        id="description"
                        name="description"
                        rows={3}
                        value={formData.description}
                        onChange={handleChange}
                        placeholder="Tell us what you are trying to solve, improve or take off your plate..."
                        className="w-full bg-[#FAF6EE] border border-[#29251F]/20 rounded-xs px-4 py-3 text-sm text-[#29251F] focus:outline-none focus:border-[#B59661] transition-colors resize-none"
                      />
                    </div>

                    {/* Submit Button */}
                    <div className="pt-2">
                      <button
                        type="submit"
                        disabled={loading}
                        className="w-full min-h-[52px] px-8 py-4 bg-[#29251F] text-[#FAF6EE] text-xs font-semibold tracking-[0.25em] uppercase rounded-sm hover:bg-[#363428] transition-all duration-300 shadow-md flex items-center justify-center gap-3 cursor-pointer disabled:opacity-75"
                      >
                        {loading ? (
                          <span>SUBMITTING INQUIRY...</span>
                        ) : (
                          <>
                            <span>REQUEST A GROWTH REVIEW</span>
                            <ArrowRight className="w-4 h-4 text-[#B59661]" />
                          </>
                        )}
                      </button>
                    </div>

                    <p className="text-[11px] text-[#6C6255] text-center leading-relaxed">
                      By submitting, you agree to our confidential review process. We never share or sell commercial information.
                    </p>
                  </motion.form>
                ) : (
                  /* Dignified Confirmation State */
                  <motion.div
                    key="confirmation-card"
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, ease: EASE_LUXURY }}
                    className="bg-[#FAF6EE] p-8 sm:p-14 border border-[#29251F]/15 rounded-sm space-y-6 shadow-sm"
                  >
                    <div className="w-12 h-12 rounded-full bg-[#FAF6EE] border border-[#B59661] text-[#B59661] flex items-center justify-center">
                      <CheckCircle2 className="w-6 h-6 text-[#B59661]" />
                    </div>

                    <div className="space-y-2">
                      <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#68694C]">
                        Inquiry Received
                      </span>
                      <h2 className="text-2xl sm:text-4xl font-semibold uppercase tracking-tight text-[#29251F]">
                        WE HAVE RECEIVED YOUR INQUIRY.
                      </h2>
                    </div>

                    <p className="text-sm sm:text-base text-[#6C6255] leading-relaxed">
                      We review each submission carefully. If there is a mutual fit, we will reach out within 24–48 hours to schedule a confidential 30-minute Growth Review.
                    </p>

                    {/* Submission summary snippet */}
                    <div className="p-5 bg-[#FAF6EE] border border-[#29251F]/10 rounded-xs text-xs space-y-2">
                      <div className="flex justify-between border-b border-[#29251F]/10 pb-1.5">
                        <span className="text-[#6C6255]">Client</span>
                        <span className="font-semibold text-[#29251F]">{formData.fullName} ({formData.companyName})</span>
                      </div>
                      <div className="flex justify-between border-b border-[#29251F]/10 pb-1.5">
                        <span className="text-[#6C6255]">Primary Focus</span>
                        <span className="font-semibold text-[#29251F]">{formData.primaryChallenge}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-[#6C6255]">Contact Routing</span>
                        <span className="font-semibold text-[#29251F]">{formData.businessEmail}</span>
                      </div>
                    </div>

                    <div className="pt-4 border-t border-[#29251F]/10 flex flex-col sm:flex-row items-center gap-4">
                      <Link
                        to="/"
                        className="w-full sm:w-auto min-h-[44px] px-8 py-3 bg-[#29251F] text-[#FAF6EE] text-xs font-semibold tracking-[0.2em] uppercase rounded-sm hover:bg-[#363428] transition-colors text-center cursor-pointer"
                      >
                        Return to Homepage
                      </Link>
                      <Link
                        to="/approach"
                        className="w-full sm:w-auto min-h-[44px] px-6 py-3 border border-[#29251F]/20 text-[#29251F] text-xs font-semibold tracking-[0.2em] uppercase rounded-sm hover:border-[#29251F] transition-colors text-center cursor-pointer"
                      >
                        Explore How We Work
                      </Link>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

          </div>
        </section>

      </div>
    </PageTransition>
  );
}
