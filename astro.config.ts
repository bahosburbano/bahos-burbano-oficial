import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import vercel from '@astrojs/vercel/static';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://www.bahosburbano.com', // Reemplaza con tu dominio real
  integrations: [
    tailwind(),
    sitemap() // Esto genera el sitemap.xml automáticamente al construir
  ],
  adapter: vercel({
    webAnalytics: { enabled: true }
  })
});