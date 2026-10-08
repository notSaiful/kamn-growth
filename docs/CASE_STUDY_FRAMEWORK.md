# KAMN — Case Study Publication & Verification Framework

## Founding Principle: Radical Honesty & Amanah

KAMN does not publish fabricated case studies, vanity statistics, or unverified performance claims. 

As a boutique consultancy, our currency is trust (*amanah*). When we are at the beginning of our journey, we state clearly that we are at the beginning. We do not simulate scale or create fictional portfolios.

When client engagements conclude and deliver measurable value, they may be published only after fulfilling the seven verification gates below.

---

## 1. Case Study Schema & Mandatory Fields

Every case study proposed for public distribution or website publication must conform to the following schema (`src/data/caseStudyFramework.js`):

| Field | Type | Description |
|---|---|---|
| `id` | String | Unique engagement ID (e.g., `cs-2026-001`) |
| `clientIdentifier` | String | Confirmed client brand name OR approved anonymous identifier (e.g., *"Regional Cold-Storage Logistics Group"*) |
| `serviceDelivered` | String | The exact service line delivered: *Growth*, *Procurement*, *Operations*, *AI Systems*, or *Integrated* |
| `problemAddressed` | String | The specific baseline friction, operational drag, or growth bottleneck before engagement |
| `workCompleted` | String | Specific activities, architectures, and systems built by KAMN |
| `evidenceOfOutcomes` | String | Measurable or qualitative evidence backed by client records. No speculative multipliers or unverified ROI claims |
| `clientPermission` | Boolean | Explicit written confirmation authorizing publication of the narrative and details |
| `publicationApproval` | String | Managing Partner signoff date and identity |
| `timeframe` | String | Sprint or retainer duration (e.g., *"90-Day Sprint"*) |
| `sector` | String | Industry category |

---

## 2. Seven Gates of Case Study Verification

Before any entry is added to `verifiedCaseStudies` in `src/data/caseStudyFramework.js`:

1. **Gate 1: Contractual Integrity**  
   The engagement must be a bona fide paid or authorized pilot engagement. Internal exercises or hypothetical scenarios cannot be presented as client case studies.

2. **Gate 2: Baseline Documentation**  
   Pre-engagement metrics must be recorded at inception (e.g., historical procurement costs, process hours, existing pipeline volume) to prevent revisionist claims.

3. **Gate 3: Outcome Verification**  
   Post-engagement numbers must be verified against real operating data (e.g., executed vendor agreements, actual meeting logs, operational time tracking). If numbers cannot be audited, use truthful qualitative descriptions instead of invented percentages.

4. **Gate 4: No Artificial Multipliers**  
   Terms like "3.4× deal velocity", "18.2% guaranteed savings", or "84% reduction" must never be used unless an audited, documented data set directly validates the exact figure.

5. **Gate 5: Client Consent & Anonymity Agreement**  
   The client must review the final draft. If confidentiality requires anonymity, the anonymous identifier must not mislead readers about the size, geography, or nature of the business.

6. **Gate 6: Amanah & Ethics Review**  
   A partner review verifies that the narrative does not claim credit for external market tailwinds or work performed primarily by internal client staff.

7. **Gate 7: Codebase Deployment**  
   Only records that pass Gates 1–6 are added to `src/data/caseStudyFramework.js`.

---

## 3. Interim Communication (Founding Stage)

Until case studies pass all seven gates, the `/results` page and related website sections will display:

- **Headline:** THE WORK BEGINS HERE.
- **Message:** "KAMN is at the beginning of its journey. As we complete meaningful work, we'll share genuine experiences, lessons and outcomes here, with our clients' permission. Until then, we'd rather show you how we think than make claims we cannot prove."
- **CTA:** EXPLORE OUR APPROACH (`/approach`)
- **Founding Commitments:** Transparency in practice, direct partner review, and focus on practical operational systems over marketing fanfare.
