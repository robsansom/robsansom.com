import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
export default defineConfig({
  site: process.env.SITE_URL || 'http://localhost:4321',
  base: process.env.BASE_PATH || '/',
  trailingSlash: 'always',
  output: 'static',
  devToolbar: { enabled: false },
  integrations: [tailwind({ applyBaseStyles: false })],
});
