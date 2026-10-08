# KAMN — Managed Growth, Procurement & Operations

> **Official Website:** [https://kamn-growth.vercel.app](https://kamn-growth.vercel.app)  
> **GitHub Repository:** [https://github.com/notSaiful/kamn-growth](https://github.com/notSaiful/kamn-growth)

KAMN is a boutique consultancy providing managed growth, procurement, operations, and pragmatic AI execution. We combine human accountability with internal AI operating leverage to execute agreed business workflows on behalf of SME leaders.

---

## 🏛️ Brand & Architectural Foundation

- **Palette:** Sandstone Ivory (`#FAF6EE`), Warm Parchment (`#F3EADB`), Deep Ink (`#29251F`), Olive (`#68694C`), Antique Gold (`#B59661`).
- **Typography:** Alexandria only.
- **Atmosphere:** Cinematic video reveal with continuous playback and ambient drifting cloud background (`GlobalAmbientBackground`).
- **Pillars:** Built on *Amanah* (sacred trust), driven by *Ihsan* (mastery in execution).

---

## ⚡ Tech Stack

- **Frontend:** React 19, Vite 6, Tailwind CSS v4, Framer Motion
- **Icons:** Lucide React
- **Backend / Database:** [Supabase](https://supabase.com/) (`@supabase/supabase-js`)
- **Hosting & CI/CD:** [Vercel](https://vercel.com/)

---

## 🗄️ Supabase Backend Setup

The database schema and Row Level Security (RLS) policies are pre-configured in [`supabase/schema.sql`](./supabase/schema.sql).

### 1. Run Schema in Supabase
1. Open your [Supabase Dashboard](https://supabase.com/dashboard).
2. Navigate to **SQL Editor** -> **New Query**.
3. Copy the contents of [`supabase/schema.sql`](./supabase/schema.sql) and click **Run**.
4. This creates:
   - `public.growth_reviews`: Stores all executive intake submissions from `/begin`.
   - `public.inquiries`: Stores consultation inquiries from modals and forms.
   - Row Level Security (RLS) policies allowing public anonymous insert while keeping read access restricted to authenticated advisors.

### 2. Environment Variables
Create a `.env.local` file in the project root (see [`.env.example`](./.env.example)):

```bash
VITE_SUPABASE_URL=https://<your-project-id>.supabase.co
VITE_SUPABASE_ANON_KEY=<your-anon-public-key>
```

> **Note:** If Supabase keys are not provided, the application automatically falls back to secure browser local storage (`kamn_growth_reviews`) and webhook events, ensuring zero disruption or dropped leads.

---

## 🚀 Local Development

```bash
# Install dependencies
npm install

# Start local development server
npm run dev

# Build for production
npm run build
```

---

## 🔒 Security & Privacy

- All sensitive environment files (`.env`, `.env.local`) are strictly excluded via `.gitignore`.
- Row Level Security (RLS) is enabled on all tables in Supabase.
