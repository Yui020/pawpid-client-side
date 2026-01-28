import { supabase } from "../../lib/supabase";

export async function resetPass(password: string) {
    const { data, error } = await supabase.auth.updateUser({
        password: "new-password",
        data: { hello: 'world' }
    })

    if (error) {
        return { success: false, error: error.message };
    }
    return { success: true };
}