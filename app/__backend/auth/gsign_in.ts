import { supabase } from "../../lib/supabase";

export async function gSignIn() {
  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: 'google',
    options: {
      redirectTo: window.location.origin + '/', 
    },
  });

  if (error) {
    return { success: false, error: error.message };
  }
  return { success: true };
}