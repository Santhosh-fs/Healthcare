import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://gvvdwgqvrxunmwdeceel.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imd2dmR3Z3F2cnh1bm13ZGVjZWVsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTQxMTMwMDgsImV4cCI6MjA2OTY4OTAwOH0.YqNKBGZSM7OP3zf_t7mD2ws_DQFYWegsPYMoMGcgmJA";
export const supabase = createClient(supabaseUrl, supabaseKey);
