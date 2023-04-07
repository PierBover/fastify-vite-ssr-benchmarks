import render from 'preact-render-to-string';
import {h} from 'preact';

function App (props) {
	return props.products.map((product) => {
		return (
			h('div', {key: product.id}, [
				h('h2', null, product.title),
				h('h3', null, product.title),
				h('p', null, product.description),
			])
		);
	})
}

export function renderPreact (data) {
	return render(h(App, {products: data.products}));
}