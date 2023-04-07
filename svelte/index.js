import App from './App.svelte';

export async function render (data) {
	const {html} = App.render(data);
	return html;
}
