// ──────────────────────────────────────────────────────────────
// Supabase Configuration
//
// SETUP STEPS:
//  1. Go to https://app.supabase.com and create a new project
//  2. Go to Table Editor → Create a new table called 'rsvp' with columns:
//     - id (int8, primary key, auto-increment)
//     - name (text, not null)
//     - guests (int4, default 1)
//     - attending (bool, not null)
//     - message (text, nullable)
//     - created_at (timestamptz, default now())
//  3. Go to Settings → API → copy your Project URL and anon key
//  4. Run: npm install @supabase/supabase-js
//  5. Add your Supabase client below if you later want to connect a backend.
// ──────────────────────────────────────────────────────────────

// import { createClient } from '@supabase/supabase-js'

// const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
// const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

// export const supabase = createClient(supabaseUrl, supabaseAnonKey)

export {}
