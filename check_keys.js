const { createClient } = require('@supabase/supabase-js');
const supabase = createClient('https://epwmoicgvuprzkcpxjoy.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVwd21vaWNndnVwcnprY3B4am95Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3Njk3NDAxMjgsImV4cCI6MjA4NTMxNjEyOH0.pXcCWqGQSS6YMIZeIyfAaGlNaW6Mx2hfDQtVrX4zues');

async function checkSchema() {
    let { data: creds } = await supabase.from('veo3_credentials').select('*');
    if(creds && creds.length) console.log("cred keys:", Object.keys(creds[0]));
    
    // check via RLS bypass / admin API if possible, or just the table definition
}
checkSchema();
