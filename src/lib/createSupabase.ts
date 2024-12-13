import { Database } from "@/types/schema";
import { createClient } from "@supabase/supabase-js";

export const createSupabase = () =>
  createClient<Database>(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  );

export const supabase = createSupabase();
