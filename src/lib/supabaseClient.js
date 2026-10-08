import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

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
 * @param {Object} formData
 * @returns {Promise<{success: boolean, data?: any, error?: any}>}
 */
export async function submitGrowthReview(formData) {
  const payload = {
    full_name: formData.fullName || formData.name || '',
    business_email: formData.businessEmail || formData.email || '',
    company_name: formData.companyName || formData.company || '',
    website: formData.website || '',
    whatsapp_number: formData.whatsappNumber || '',
    annual_revenue: formData.annualRevenue || '',
    primary_challenge: formData.primaryChallenge || '',
    ideal_timeline: formData.idealTimeline || '',
    description: formData.description || '',
    metadata: {
      source: 'web_growth_review_form',
      submitted_at: new Date().toISOString(),
      user_agent: typeof navigator !== 'undefined' ? navigator.userAgent : null,
    }
  };

  // If Supabase credentials are not yet configured in environment
  if (!isSupabaseConfigured() || !supabase) {
    console.info('Supabase: Environment keys not configured. Falling back to local storage and webhooks.');
    return { 
      success: true, 
      fallback: true,
      data: payload 
    };
  }

  try {
    const { data, error } = await supabase
      .from('growth_reviews')
      .insert([payload])
      .select();

    if (error) {
      console.warn('Supabase insert warning:', error.message);
      return { success: false, error: error.message };
    }

    return { success: true, data };
  } catch (err) {
    console.error('Supabase submission exception:', err);
    return { success: false, error: err.message || 'Unknown network error' };
  }
}

/**
 * Submits a general inquiry or audit modal lead into Supabase
 * @param {Object} formData
 * @returns {Promise<{success: boolean, data?: any, error?: any}>}
 */
export async function submitInquiry(formData) {
  const payload = {
    name: formData.name || formData.fullName || '',
    email: formData.email || formData.businessEmail || '',
    company: formData.company || formData.companyName || '',
    objective: formData.objective || formData.description || '',
    metadata: {
      source: 'web_audit_modal',
      submitted_at: new Date().toISOString(),
    }
  };

  if (!isSupabaseConfigured() || !supabase) {
    return { success: true, fallback: true, data: payload };
  }

  try {
    const { data, error } = await supabase
      .from('inquiries')
      .insert([payload])
      .select();

    if (error) {
      console.warn('Supabase inquiry warning:', error.message);
      return { success: false, error: error.message };
    }

    return { success: true, data };
  } catch (err) {
    console.error('Supabase inquiry exception:', err);
    return { success: false, error: err.message };
  }
}
