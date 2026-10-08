-- ==============================================================================
-- KAMN CONSULTANCY — SUPABASE DATABASE SCHEMA
-- ==============================================================================
-- Run this script in your Supabase SQL Editor (Dashboard -> SQL Editor -> New Query)
-- It creates the tables and Row Level Security (RLS) policies for incoming leads.

-- 1. Table: growth_reviews (Comprehensive Executive Intake from /begin)
CREATE TABLE IF NOT EXISTS public.growth_reviews (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    created_at TIMESTAMPTZ DEFAULT NOW(),
    full_name TEXT NOT NULL,
    business_email TEXT NOT NULL,
    company_name TEXT NOT NULL,
    website TEXT,
    whatsapp_number TEXT,
    annual_revenue TEXT,
    primary_challenge TEXT,
    ideal_timeline TEXT,
    description TEXT,
    status TEXT DEFAULT 'new' CHECK (status IN ('new', 'contacted', 'in_review', 'scheduled', 'archived')),
    metadata JSONB DEFAULT '{}'::jsonb
);

-- Index for rapid lookup by date and email
CREATE INDEX IF NOT EXISTS idx_growth_reviews_email ON public.growth_reviews(business_email);
CREATE INDEX IF NOT EXISTS idx_growth_reviews_created_at ON public.growth_reviews(created_at DESC);

-- Enable Row Level Security (RLS)
ALTER TABLE public.growth_reviews ENABLE ROW LEVEL SECURITY;

-- Allow anonymous visitors to submit their Growth Review via the public website
CREATE POLICY "Allow public anonymous submissions"
    ON public.growth_reviews
    FOR INSERT
    TO anon, authenticated
    WITH CHECK (true);

-- Restrict read access strictly to authenticated staff/advisors
CREATE POLICY "Allow authenticated staff to read growth reviews"
    ON public.growth_reviews
    FOR SELECT
    TO authenticated
    USING (true);

-- Allow authenticated staff to update review status
CREATE POLICY "Allow authenticated staff to update growth reviews"
    ON public.growth_reviews
    FOR UPDATE
    TO authenticated
    USING (true)
    WITH CHECK (true);


-- 2. Table: inquiries (Consultation / Audit Modal Submissions)
CREATE TABLE IF NOT EXISTS public.inquiries (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    created_at TIMESTAMPTZ DEFAULT NOW(),
    name TEXT NOT NULL,
    email TEXT NOT NULL,
    company TEXT,
    objective TEXT,
    status TEXT DEFAULT 'new' CHECK (status IN ('new', 'contacted', 'scheduled', 'archived')),
    metadata JSONB DEFAULT '{}'::jsonb
);

-- Index for lookup
CREATE INDEX IF NOT EXISTS idx_inquiries_email ON public.inquiries(email);
CREATE INDEX IF NOT EXISTS idx_inquiries_created_at ON public.inquiries(created_at DESC);

-- Enable Row Level Security (RLS)
ALTER TABLE public.inquiries ENABLE ROW LEVEL SECURITY;

-- Allow anonymous visitors to submit inquiries
CREATE POLICY "Allow public anonymous inquiries"
    ON public.inquiries
    FOR INSERT
    TO anon, authenticated
    WITH CHECK (true);

-- Restrict read access strictly to authenticated staff
CREATE POLICY "Allow authenticated staff to read inquiries"
    ON public.inquiries
    FOR SELECT
    TO authenticated
    USING (true);

-- Allow authenticated staff to update inquiries
CREATE POLICY "Allow authenticated staff to update inquiries"
    ON public.inquiries
    FOR UPDATE
    TO authenticated
    USING (true)
    WITH CHECK (true);

-- Comments for documentation
COMMENT ON TABLE public.growth_reviews IS 'Executive Growth Review submissions collected from /begin on the KAMN website';
COMMENT ON TABLE public.inquiries IS 'Quick consultations and audit modal inquiries from the KAMN website';
