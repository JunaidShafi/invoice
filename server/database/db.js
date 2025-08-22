import { createClient } from '@supabase/supabase-js'
const config = useRuntimeConfig()
export const db = createClient(config.public.supabaseUrl, config.public.supabaseAnonKey)