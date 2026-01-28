import { supabase } from "../../lib/supabase";

export async function forgotPass(email: string) {
    const { data, error } = await supabase.auth.resetPasswordForEmail(email);

    if (error) {
        return { success: false, error: error.message };
    }
    return { success: true };
}