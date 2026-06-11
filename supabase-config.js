// supabase-config.js
const { createClient } = supabase;

// 1. Paste your Project URL inside these quotes (found by scrolling up on the same Supabase page)
const SUPABASE_URL = "https://your-project-id.supabase.co"; 

// 2. Your actual publishable key is now configured:
const SUPABASE_ANON_KEY = "sb_publishable_Goxm5OXxmKPfebHS1hze5Q_vJflkneY"; 

// 3. Initialize the database client
const supabaseClient = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
