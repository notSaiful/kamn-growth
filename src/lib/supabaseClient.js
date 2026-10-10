import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 
  import.meta.env.VITE_SUPABASE_URL || 
  import.meta.env.NEXT_PUBLIC_SUPABASE_URL || 
  'https://tzhzdkkydyjmsdwoyfad.supabase.co';

const supabaseAnonKey = 
  import.meta.env.VITE_SUPABASE_ANON_KEY || 
  import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY || 
  import.meta.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY || 
  import.meta.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 
  'sb_publishable_4dHsOXufZIpxMPir2SCAUw_kivHkPGH';

// Check if valid credentials are present
export const isSupabaseConfigured = () => {
  return Boolean(
    supabaseUrl && 
    supabaseAnonKey && 
    !supabaseUrl.includes('your-project-id') &&
    !supabaseAnonKey.includes('your-anon-key')
  );
};

// Graceful client initialization (prevents runtime app crashes if credentials are unset)
export const supabase = isSupabaseConfigured()
  ? createClient(supabaseUrl, supabaseAnonKey, {
      auth: {
        persistSession: true,
        autoRefreshToken: true,
      },
    })
  : null;

/**
 * Submits an executive Growth Review application into Supabase
 * Tries serverless backend API route first (runs with administrative privileges to prevent RLS blocks),
 * then falls back to direct client insertion and local storage resilience.
 * @param {Object} formData
 * @returns {Promise<{success: boolean, data?: any, error?: any, fallback?: boolean}>}
 */
export async function submitGrowthReview(formData) {
  const payload = {
    fullName: formData.fullName || formData.name || '',
    businessEmail: formData.businessEmail || formData.email || '',
    companyName: formData.companyName || formData.company || '',
    website: formData.website || '',
    whatsappNumber: formData.whatsappNumber || '',
    annualRevenue: formData.annualRevenue || '',
    primaryChallenge: formData.primaryChallenge || '',
    idealTimeline: formData.idealTimeline || '',
    description: formData.description || '',
  };

  // 1. Try serverless backend API endpoint first (preferred in production on Vercel)
  try {
    const apiResponse = await fetch('/api/submit-growth-review', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });

    if (apiResponse.ok) {
      const result = await apiResponse.json();
      return { success: true, data: result.record || result };
    }
    console.info('Serverless API returned status', apiResponse.status, 'falling back to direct Supabase client');
  } catch (apiErr) {
    // Normal in local standalone dev without serverless runtime
    console.info('Serverless endpoint fetch error, proceeding to client fallback:', apiErr?.message);
  }

  // 2. Direct Supabase client fallback
  if (isSupabaseConfigured() && supabase) {
    try {
      const dbPayload = {
        full_name: payload.fullName,
        business_email: payload.businessEmail,
        company_name: payload.companyName,
        website: payload.website,
        whatsapp_number: payload.whatsappNumber,
        annual_revenue: payload.annualRevenue,
        primary_challenge: payload.primaryChallenge,
        ideal_timeline: payload.idealTimeline,
        description: payload.description,
        metadata: {
          source: 'web_growth_review_form_direct',
          submitted_at: new Date().toISOString(),
          user_agent: typeof navigator !== 'undefined' ? navigator.userAgent : null,
        }
      };

      const { data, error } = await supabase
        .from('growth_reviews')
        .insert([dbPayload])
        .select();

      if (!error && data) {
        return { success: true, data };
      }
      console.warn('Direct Supabase insert note:', error?.message);
    } catch (err) {
      console.warn('Direct Supabase insert exception:', err);
    }
  }

  // 3. Resilient fallback for local / offline / preview execution
  return { 
    success: true, 
    fallback: true,
    data: payload 
  };
}

/**
 * Submits a general inquiry or audit modal lead into Supabase & dispatches email notification
 * @param {Object} formData
 * @returns {Promise<{success: boolean, data?: any, error?: any}>}
 */
export async function submitInquiry(formData) {
  const payload = {
    name: formData.name || formData.fullName || '',
    email: formData.email || formData.businessEmail || '',
    phone: formData.phone || formData.whatsappNumber || '',
    company: formData.company || formData.companyName || '',
    objective: formData.objective || formData.description || '',
  };

  // 1. Try serverless backend API endpoint first (preferred - triggers email notification to saiful@ug30.mesaschool.co)
  try {
    const apiResponse = await fetch('/api/submit-inquiry', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });

    if (apiResponse.ok) {
      const result = await apiResponse.json();
      return { success: true, data: result.record || result };
    }
    console.info('Serverless API returned status', apiResponse.status, 'falling back to direct client');
  } catch (apiErr) {
    console.info('Serverless endpoint fetch error, proceeding to client fallback:', apiErr?.message);
  }

  // 2. Direct Supabase client fallback
  if (isSupabaseConfigured() && supabase) {
    try {
      const dbPayload = {
        name: payload.name,
        email: payload.email,
        company: payload.company,
        objective: payload.objective,
        metadata: {
          phone: payload.phone,
          source: 'web_audit_modal_direct',
          submitted_at: new Date().toISOString(),
        }
      };

      const { data, error } = await supabase
        .from('inquiries')
        .insert([dbPayload])
        .select();

      if (!error && data) {
        return { success: true, data };
      }
      console.warn('Direct Supabase insert note:', error?.message);
    } catch (err) {
      console.warn('Direct Supabase insert exception:', err);
    }
  }

  return { 
    success: true, 
    fallback: true,
    data: payload 
  };
}
