import adapter from '@sveltejs/adapter-auto';

const dev = process.argv.includes('dev');
const base = process.env.BASE_PATH ?? '';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter(),
		paths: { base },
		prerender: { handleHttpError: 'warn', entries: ['*'] }
	}
};

export default config;
