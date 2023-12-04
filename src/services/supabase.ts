import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://cqskoakjlhzdkcvwvzvq.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNxc2tvYWtqbGh6ZGtjdnd2enZxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDA2NDA4OTAsImV4cCI6MjAxNjIxNjg5MH0.97Vix42kdzyR6uaSVENsJ08uqWhye3AEHHf5Q4ZmMo0";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
