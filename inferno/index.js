import {createElement} from 'inferno-create-element';
import {renderToString} from 'inferno-server';

function App (props) {
	return props.products.map((product) => {
		return (
			createElement('div', {key: product.id}, [
				createElement('h2', null, product.title),
				createElement('h3', null, product.title),
				createElement('p', null, product.description),
			])
		);
	});
}

export function renderInferno (data) {
	return renderToString(createElement(App, {products: data.products}));
}