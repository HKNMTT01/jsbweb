import { createClient } from "@supabase/supabase-js";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL as string | undefined;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY as string | undefined;

export const isSupabaseConfigured = Boolean(
  supabaseUrl &&
    supabaseAnonKey &&
    !supabaseUrl.includes("your-project-id") &&
    !supabaseAnonKey.includes("your-supabase-anon-key"),
);

export const supabase = createClient(
  isSupabaseConfigured ? supabaseUrl! : "https://placeholder.supabase.co",
  isSupabaseConfigured ? supabaseAnonKey! : "placeholder-key",
);
