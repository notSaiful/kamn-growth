import { createClient } from '@supabase/supabase-js';
import { sendEnquiryNotification } from './_notifier.js';

const SUPABASE_URL = 
  process.env.SUPABASE_URL || 
  process.env.VITE_SUPABASE_URL || 
  'https://tzhzdkkydyjmsdwoyfad.supabase.co';

function getSupabaseClient() {
  const key = 
    process.env.SUPABASE_SECRET_KEY || 
    process.env.SUPABASE_SERVICE_ROLE_KEY || 
    process.env.VITE_SUPABASE_ANON_KEY || 
    process.env.SUPABASE_ANON_KEY || 
    process.env.VITE_SUPABASE_PUBLISHABLE_KEY || 
    'sb_publishable_4dHsOXufZIpxMPir2SCAUw_kivHkPGH';

  return createClient(SUPABASE_URL, key, {
    auth: {
      persistSession: false,
      autoRefreshToken: false,
    },
  });
}

export default async function handler(req, res) {
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

    // Honeypot spam defense
    if (body.hp_company_website || body.honeypot || body._bot_check) {
      console.warn('Honeypot trap triggered by spambot.');
      return res.status(200).json({ success: true, message: 'Inquiry received.' });
    }

    const name = (body.name || body.fullName || '').trim();
    const email = (body.email || body.businessEmail || '').trim().toLowerCase();
    const company = (body.company || body.companyName || '').trim();
    const objective = (body.objective || body.description || body.primaryChallenge || '').trim();

    if (!name || name.length < 2) {
      return res.status(400).json({ error: 'Full name is required (at least 2 characters).' });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email)) {
      return res.status(400).json({ error: 'A valid email address is required.' });
    }

    const payload = {
      name,
      email,
      company: company || null,
      objective: objective || null,
      status: 'new',
      metadata: {
        source: 'api_submit_inquiry',
        submitted_at: new Date().toISOString(),
        client_ip: req.headers['x-forwarded-for'] || req.socket?.remoteAddress || null,
        user_agent: req.headers['user-agent'] || null,
      },
    };

    // 1. Supabase database ingestion
    let dbRecord = null;
    try {
      const supabase = getSupabaseClient();
      const { data, error } = await supabase
        .from('inquiries')
        .insert([payload])
        .select('id, created_at, name, company');

      if (error) {
        console.error('Supabase inquiry insert warning:', error.message);
      } else {
        dbRecord = data?.[0] || null;
      }
    } catch (dbErr) {
      console.error('Supabase inquiry exception:', dbErr);
    }

    // 2. Email notification to saiful@ug30.mesaschool.co
    let notificationResults = null;
    try {
      notificationResults = await sendEnquiryNotification({
        fullName: name,
        businessEmail: email,
        companyName: company,
        primaryChallenge: objective,
        description: objective,
        source: 'Consultation Modal Inquiry',
      });
    } catch (notifErr) {
      console.warn('Enquiry email dispatch warning:', notifErr.message);
    }

    return res.status(200).json({
      success: true,
      message: 'Consultation inquiry registered and dispatched.',
      record: dbRecord,
      notification: notificationResults,
    });
  } catch (err) {
    console.error('Inquiry submission exception:', err);
    return res.status(500).json({
      error: 'Internal server error while processing inquiry.',
      details: err.message,
    });
  }
}
