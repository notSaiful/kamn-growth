import { createClient } from '@supabase/supabase-js';

// Environment variables fallback for Supabase
const SUPABASE_URL = 
  process.env.SUPABASE_URL || 
  process.env.VITE_SUPABASE_URL || 
  'https://tzhzdkkydyjmsdwoyfad.supabase.co';

const SUPABASE_KEY = 
  process.env.SUPABASE_SECRET_KEY || 
  process.env.SUPABASE_SERVICE_ROLE_KEY || 
  process.env.VITE_SUPABASE_ANON_KEY || 
  process.env.SUPABASE_ANON_KEY || 
  process.env.VITE_SUPABASE_PUBLISHABLE_KEY || '';

const supabase = createClient(SUPABASE_URL, SUPABASE_KEY, {
  auth: {
    persistSession: false,
    autoRefreshToken: false,
  },
});

export default async function handler(req, res) {
  // Set CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed. Use POST.' });
  }

  try {
    const body = typeof req.body === 'string' ? JSON.parse(req.body) : (req.body || {});

    // 1. Honeypot spam defense: if hidden honeypot field is filled, silently succeed
    if (body.hp_company_website || body.honeypot || body._bot_check) {
      console.warn('Honeypot trap triggered by spambot.');
      return res.status(200).json({ success: true, message: 'Submission received.' });
    }

    const fullName = (body.fullName || body.name || body.full_name || '').trim();
    const businessEmail = (body.businessEmail || body.email || body.business_email || '').trim().toLowerCase();
    const companyName = (body.companyName || body.company || body.company_name || '').trim();

    // 2. Server-side validation
    if (!fullName || fullName.length < 2) {
      return res.status(400).json({ error: 'Full name is required (at least 2 characters).' });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!businessEmail || !emailRegex.test(businessEmail)) {
      return res.status(400).json({ error: 'A valid business email address is required.' });
    }

    const payload = {
      full_name: fullName,
      business_email: businessEmail,
      company_name: companyName || null,
      website: (body.website || '').trim() || null,
      whatsapp_number: (body.whatsappNumber || body.whatsapp_number || '').trim() || null,
      annual_revenue: body.annualRevenue || body.annual_revenue || null,
      primary_challenge: body.primaryChallenge || body.primary_challenge || null,
      ideal_timeline: body.idealTimeline || body.ideal_timeline || null,
      description: body.description || null,
      metadata: {
        source: 'api_submit_growth_review',
        submitted_at: new Date().toISOString(),
        client_ip: req.headers['x-forwarded-for'] || req.socket?.remoteAddress || null,
        user_agent: req.headers['user-agent'] || null,
      },
    };

    const { data, error } = await supabase
      .from('growth_reviews')
      .insert([payload])
      .select('id, created_at, full_name, company_name');

    if (error) {
      console.error('Supabase serverless insert error:', error.message);
      return res.status(500).json({ 
        error: 'Database ingestion failed', 
        details: error.message 
      });
    }

    return res.status(200).json({
      success: true,
      message: 'Growth review application successfully registered.',
      record: data?.[0] || null,
    });
  } catch (err) {
    console.error('Serverless submission exception:', err);
    return res.status(500).json({
      error: 'Internal server error while processing growth review.',
      details: err.message,
    });
  }
}
