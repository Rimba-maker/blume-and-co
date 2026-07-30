// @ts-check
import { defineConfig } from 'astro/config';

import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';

// GitHub Actions sets this automatically in CI; never true on `astro dev` locally,
// so the base path only ever applies to the deployed build.
const isGitHubPagesBuild = process.env.GITHUB_ACTIONS === "true";

// https://astro.build/config
export default defineConfig({
  site: "https://rimba-maker.github.io",
  base: isGitHubPagesBuild ? "/blume-and-co" : "/",

  integrations: [react()],

  vite: {
    plugins: [tailwindcss()]
  }
});