// @ts-check
import { defineConfig } from 'astro/config';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://myhostadvantage.com',
  // Post-checkout and one-time credential pages stay out of the sitemap.
  integrations: [sitemap({ filter: (page) => !/\/(welcome|login-details)\//.test(page) })],
});