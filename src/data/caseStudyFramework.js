/**
 * KAMN Case Study Verification Framework
 * 
 * Strict Editorial & Verification Schema for Client Case Studies.
 * Per KAMN Founding Transparency Standards:
 * - No case study may be published without all verification fields fulfilled.
 * - Numerical claims must be backed by documented evidence and audit trails.
 * - Client permission and publication approvals are mandatory.
 */

/**
 * @typedef {Object} VerifiedCaseStudy
 * @property {string} id - Unique identifier (e.g., "cs-2026-001")
 * @property {string} clientIdentifier - Real client name or approved anonymous identifier (e.g., "Mid-Market Industrial Distributor")
 * @property {string} serviceDelivered - Exactly which KAMN practice (Growth, Procurement, Operations, AI Systems, or Integrated)
 * @property {string} problemAddressed - Honest articulation of the operational or commercial friction
 * @property {string} workCompleted - Detailed description of the methods, deliverables, and architecture built
 * @property {string} evidenceOfOutcomes - Documented qualitative or quantitative results with audit reference
 * @property {boolean} clientPermission - Explicit written consent from the client to publish this engagement
 * @property {string} publicationApproval - Date and partner approval signoff (e.g., "Approved by Managing Partner 2026-04-12")
 * @property {string} [timeframe] - Engagement duration
 * @property {string} [sector] - Industry classification
 */

/**
 * Array of currently verified public case studies.
 * As KAMN is at the beginning of its journey, this array remains intentionally empty
 * until engagements complete the rigorous verification protocol above.
 * 
 * ZERO FABRICATED DATA IS PERMITTED.
 * 
 * @type {VerifiedCaseStudy[]}
 */
export const verifiedCaseStudies = [];

/**
 * Verification Checklist for Future Submissions
 */
export const VERIFICATION_REQUIREMENTS = [
  {
    key: "client_identity",
    label: "Client Identity Verification",
    description: "Verified engagement record with contract reference and authorized point of contact."
  },
  {
    key: "work_evidence",
    label: "Documented Work Deliverables",
    description: "Actual deliverables, system deployments, or negotiated agreements on file."
  },
  {
    key: "outcome_evidence",
    label: "Verifiable Outcome Measurement",
    description: "Outcomes measured against baseline data with client-provided documentation. No speculative multipliers."
  },
  {
    key: "client_consent",
    label: "Written Client Consent",
    description: "Signed case study release specifying whether name or anonymous descriptor is authorized."
  },
  {
    key: "partner_signoff",
    label: "Managing Partner Approval",
    description: "Final editorial and ethics review ensuring zero exaggeration."
  }
];
