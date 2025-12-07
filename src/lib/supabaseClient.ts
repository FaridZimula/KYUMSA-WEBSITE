import { createClient } from '@supabase/supabase-js';

// Read environment variables from Vite (set in .env files as VITE_* keys)
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL as string | undefined;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY as string | undefined;

// Export a client if config exists; otherwise export undefined so app can fallback
export const supabase = (supabaseUrl && supabaseAnonKey)
  ? createClient(supabaseUrl, supabaseAnonKey)
  : undefined;

export const hasSupabaseConfig = Boolean(supabase);
