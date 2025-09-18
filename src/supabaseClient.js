import { createClient } from "@supabase/supabase-js";

const SUPABASE_URL = "https://vwxjqhckunkxzuimammk.supabase.co";
const SUPABASE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZ3eGpxaGNrdW5reHp1aW1hbW1rIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTgyMDgwNjcsImV4cCI6MjA3Mzc4NDA2N30.zr4FOhksB7Lk5N9aTRvADm-2gVfr_iL4GKbDQCo6eIo";

export const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);
