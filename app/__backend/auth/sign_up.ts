import {supabase} from "../../lib/supabase"

export async function signUp(email:string, password:string) {
    const { data, error } = await supabase.auth.signUp({
    email,
    password
    })

    if(error) {
        return { success:false, error: error.message}
    }
    return { success:true, user:data.user}
}

