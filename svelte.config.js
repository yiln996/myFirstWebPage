import adapter from '@sveltejs/adapter-static';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter({
			fallback: 'index.html'  // For SPA (Single Page Application) behavior
		}),
		// Optionally, add the base path for GitHub Pages if your repo is not named 'username.github.io'
		paths: {
			base: '/myFirstWebPage' // Replace with the actual repository name
		}
	}
};

export default config;
