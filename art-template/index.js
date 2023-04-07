import art from 'art-template';

art.defaults.compileDebug = false;
art.defaults.cache = true;

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