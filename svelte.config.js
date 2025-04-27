import path from 'path';
import sveltePreprocess from 'svelte-preprocess';
import adapter from '@sveltejs/adapter-static';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter({
			pages: 'build',
            assets: 'build',
		}),
		// Optionally, add the base path for GitHub Pages if your repo is not named 'username.github.io'
		paths: {
			base: '/myFirstWebPage' // Replace with the actual repository name
		}
	},
	preprocess: sveltePreprocess(),
};

export default config;
