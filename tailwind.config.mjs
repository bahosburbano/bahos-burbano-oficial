/** @type {import('tailwindcss').Config} */
export default {
  // 1. Mantenemos tus rutas de contenido intactas
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      // 2. TUS COLORES: Exactamente los que definiste
      colors: {
        brand: {
          white: '#FFFFFF',
          'green-mineral': '#0C382E',   // Verde principal (Autoridad)
          'green-crystal': '#256D5B',   // Verde con luz (Acentos)
          'gold-champagne': '#C9A668',  // Oro frío (Elegancia)
          dark: '#111111',              // Texto principal
        },
      },
      // 3. TUS FUENTES: Sincronización absoluta con image_850f86.png
fontFamily: {
  // Sincronizado con 'EB Garamond' en Layout.astro
  'serif': ['EB Garamond', 'serif'], 
  
  // Sincronizado con 'ClashDisplay' en Layout.astro
  'clash': ['ClashDisplay', 'sans-serif'],
  
  // Sincronizado con 'Hanken Grotesk' en Layout.astro (mantener comillas por el espacio)
  'sans': ['"Hanken Grotesk"', 'sans-serif'],

  // Sincronizado con 'B612 Mono Bold' en Layout.astro
  'mono': ['"B612 Mono Bold"', 'monospace'], 
},
      // 4. TU TRANSICIÓN: "Seda" está en su lugar correcto como pediste
      transitionProperty: {
        'seda': 'all', 
      },
    },
  },
  plugins: [],
}