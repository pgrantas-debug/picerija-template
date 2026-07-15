// @ts-check
import { defineConfig } from 'astro/config';

const isGitHubPages = process.env.GITHUB_ACTIONS === 'true';

// https://astro.build/config
export default defineConfig({
	site: isGitHubPages ? 'https://pgrantas-debug.github.io' : undefined,
	base: isGitHubPages ? '/picerija-template' : '/',
});
