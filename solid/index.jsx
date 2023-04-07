import {renderToString} from "solid-js/web";

function App (props) {
	return props.products.map((product) => {
		return (
			<div>
				<h2>{product.title}</h2>
				<h3>{product.title}</h3>
				<p>{product.description}</p>
			</div>
		);
	});
}

export function render (data) {
	return renderToString(() => <App products={data.products} />);
}