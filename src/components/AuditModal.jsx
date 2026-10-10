import React, { useState } from 'react';
import { X, Check, ArrowRight } from 'lucide-react';
import KhatamStar from './KhatamStar';
import { submitInquiry } from '../lib/supabaseClient';

export default function AuditModal({ isOpen, onClose, title, subtitle }) {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', company: '', objective: '' });

  if (!isOpen) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await submitInquiry(formData);
    } catch (err) {
      console.warn('AuditModal inquiry note:', err);
    }

    // Direct email notification to saiful@ug30.mesaschool.co
    try {
      fetch('https://formsubmit.co/ajax/saiful@ug30.mesaschool.co', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          _subject: `New KAMN Consultation Inquiry: ${formData.company || 'Business'} (${formData.name})`,
          _template: 'table',
          _replyto: formData.email,
          'Client Name': formData.name,
          'Business Email': formData.email,
          'Company Name': formData.company,
          'Strategic Need': formData.objective,
          'Source': 'Audit Modal Consultation',
          'Submitted At': new Date().toISOString(),
        }),
      }).catch(err => console.info('Modal email forwarding note:', err));
    } catch (e) {
      // ignore
    }

    setFormSubmitted(true);
  };

  const handleClose = () => {
    setFormSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#29251F]/75 backdrop-blur-xs animate-fade-in">
      <div className="relative w-full max-w-lg bg-[#EADDC9] border border-[#363428]/25 shadow-2xl rounded-sm p-6 sm:p-8 overflow-hidden">
        
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-5 right-5 text-[#29251F]/70 hover:text-[#29251F] transition-colors p-1 cursor-pointer"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="mb-6">
          <div className="flex items-center gap-2 mb-2">
            <KhatamStar className="w-4 h-4 text-[#B59661]" />
            <span className="text-xs uppercase tracking-[0.2em] text-[#68694C] font-semibold">
              Executive Consultation
            </span>
          </div>
          <h3 className="text-2xl sm:text-3xl text-[#29251F] font-semibold">
            {title || 'Book Your Growth Audit'}
          </h3>
          <p className="mt-1 text-sm text-[#5C5346] font-normal">
            {subtitle || 'Tell us where your business is today and where you want it to go.'}
          </p>
        </div>

        {/* Modal Body */}
        {formSubmitted ? (
          <div className="py-8 text-center space-y-4">
            <div className="w-12 h-12 rounded-full bg-[#68694C]/25 text-[#363428] mx-auto flex items-center justify-center">
              <Check className="w-6 h-6 text-[#363428]" />
            </div>
            <h4 className="text-2xl text-[#29251F] font-semibold">
              Inquiry Received
            </h4>
            <p className="text-sm text-[#5C5346] font-normal max-w-xs mx-auto leading-relaxed">
              Thank you, <strong>{formData.name || 'valued partner'}</strong>. Our partners will review your objectives and follow up directly with a thoughtful response.
            </p>
            <div className="pt-4">
              <button
                onClick={handleClose}
                className="px-6 py-2.5 bg-[#363428] text-[#F3EADB] text-xs font-medium tracking-[0.2em] uppercase rounded-sm cursor-pointer"
              >
                Close Window
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4 text-sm">
            <div>
              <label className="block text-xs uppercase tracking-[0.15em] text-[#29251F] font-semibold mb-1">
                Your Name
              </label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="e.g. Tariq Al-Mansoor"
                className="w-full px-3.5 py-2.5 bg-[#EFE5D5] border border-[#363428]/25 rounded-xs text-[#29251F] placeholder:text-[#5C5346]/60 focus:outline-none focus:border-[#B59661]"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs uppercase tracking-[0.15em] text-[#29251F] font-semibold mb-1">
                  Business Email
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="name@enterprise.com"
                  className="w-full px-3.5 py-2.5 bg-[#EFE5D5] border border-[#363428]/25 rounded-xs text-[#29251F] placeholder:text-[#5C5346]/60 focus:outline-none focus:border-[#B59661]"
                />
              </div>
              <div>
                <label className="block text-xs uppercase tracking-[0.15em] text-[#29251F] font-semibold mb-1">
                  Company Name
                </label>
                <input
                  type="text"
                  required
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  placeholder="e.g. Crescent Industrial"
                  className="w-full px-3.5 py-2.5 bg-[#EFE5D5] border border-[#363428]/25 rounded-xs text-[#29251F] placeholder:text-[#5C5346]/60 focus:outline-none focus:border-[#B59661]"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs uppercase tracking-[0.15em] text-[#29251F] font-semibold mb-1">
                What is your primary growth objective?
              </label>
              <textarea
                rows={3}
                required
                value={formData.objective}
                onChange={(e) => setFormData({ ...formData, objective: e.target.value })}
                placeholder="e.g. We want to add ₹50L in enterprise contracts across Q2 by targeting mid-market manufacturers..."
                className="w-full px-3.5 py-2.5 bg-[#EFE5D5] border border-[#363428]/25 rounded-xs text-[#29251F] placeholder:text-[#5C5346]/60 focus:outline-none focus:border-[#B59661]"
              />
            </div>

            <div className="pt-2">
              <button
                type="submit"
                className="w-full py-3.5 bg-[#363428] text-[#F3EADB] text-xs font-medium tracking-[0.2em] uppercase rounded-sm hover:bg-[#29251F] transition-colors cursor-pointer shadow-sm flex items-center justify-center gap-2"
              >
                <span>Submit Executive Request</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#B59661]" />
              </button>
              <p className="mt-2 text-xs text-center text-[#5C5346] font-normal">
                Protected under mutual non-disclosure. No unsolicited spam.
              </p>
            </div>
          </form>
        )}

      </div>
    </div>
  );
}
