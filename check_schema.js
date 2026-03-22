const { createClient } = require('@supabase/supabase-js');
const supabase = createClient('https://epwmoicgvuprzkcpxjoy.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVwd21vaWNndnVwcnprY3B4am95Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3Njk3NDAxMjgsImV4cCI6MjA4NTMxNjEyOH0.pXcCWqGQSS6YMIZeIyfAaGlNaW6Mx2hfDQtVrX4zues');

async function checkSchema() {
    let { data: logs } = await supabase.from('veo3_credit_snapshots').select('*').limit(2);
    console.log("veo3_credit_snapshots:", JSON.stringify(logs, null, 2));
    
    let { data: users } = await supabase.from('portal_users').select('*').limit(2);
    console.log("portal_users:", JSON.stringify(users, null, 2));
}
checkSchema();
