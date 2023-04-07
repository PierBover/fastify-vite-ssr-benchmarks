import render from 'mithril-node-render';
import m from 'mithril';

export function renderMithril (data) {
	return render.sync(
		data.products.map((product) => {
			return (
				m('div', {key: product.id}, [
					m('h2', null, product.title),
					m('h3', null, product.title),
					m('p', null, product.description),
				])
			);
		})
	);
}