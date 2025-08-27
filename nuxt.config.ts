// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite"
export default defineNuxtConfig({

//  vue: {
//     compilerOptions: {
//       // Example: Treat all tags starting with "my-" as custom elements
//       isCustomElement: (tag) => tag.startsWith('download-excel')
//     }
//   },
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: [
    '@nuxt/ui',
    'shadcn-nuxt',
    '@clerk/nuxt',
    "nuxt-charts"
   
    
  ],
    css: ['~/assets/css/main.css'],
  vite: {
    plugins: [
      tailwindcss(),
    ],
  },

  shadcn: {
    prefix: '',
    componentDir: '@/components/ui'
  },
   runtimeConfig: {
    public: {
      supabaseUrl: process.env.SUPABASE_URL,
      supabaseAnonKey: process.env.SUPABASE_PUBLISHABLE_KEY,
    },

  }
  },
  
)