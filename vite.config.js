import {svelte} from '@sveltejs/vite-plugin-svelte';
import solidPlugin from 'vite-plugin-solid';

export default {
	plugins: [
		svelte(),
		solidPlugin({
			ssr: true
		})
	],
	build: {
		emptyOutDir: false,
	}
}