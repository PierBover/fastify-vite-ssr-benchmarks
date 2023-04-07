export function renderVanilla (data) {
	return data.products.map((product) => {
		return `<div><h2>${product.title}</h2><h3>${product.title}</h3><p>${product.description}</p></div>`
	}).join('');
}