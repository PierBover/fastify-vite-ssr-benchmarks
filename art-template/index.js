import art from 'art-template';

const template = `
{{each products}}
	<div>
		<h2>{{$value.title}}</h2>
		<h3>{{$value.title}}</h3>
		<p>{{$value.description}}</p>
	</div>
{{/each}}
`;

const compiledTemplate = art.compile(template);

export function renderArt (data) {
	return compiledTemplate({products: data.products});
}