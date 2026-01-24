import { supabase } from "../../lib/supabase"

export async function signUp(email:string, password:string) {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
  });

  if (error) return { success: false, error: error.message };

  // CHECK: If identities is empty, Supabase found a duplicate email
  if (data.user && data.user.identities && data.user.identities.length === 0) {
    return { 
      success: false, 
      error: "This email is already registered. Please sign in instead.", 
      code: "user_already_exists" 
    };
  }
  return { success: true, user: data.user, code:"user_registered"};
}
